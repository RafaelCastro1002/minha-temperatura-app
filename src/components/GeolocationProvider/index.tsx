import { useGeolocated } from "react-geolocated";
import { useCallback, useContext, useEffect } from "react";
import UserContext from "../../context/UserContext";
import { setLocation } from "../../context/Actions";
import WeatherService from "../../services/WeatherService";
import ImagesServices from "../../services/ImagesService";

const weatherService = new WeatherService();
const imagesService = new ImagesServices();

const GeolocationProvider = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) => {
  const { state, dispatch } = useContext(UserContext);
  const { location } = state;

  useGeolocated({
    positionOptions: {
      enableHighAccuracy: true,
      maximumAge: 0,
      timeout: Infinity,
    },
    userDecisionTimeout: 10000,
    geolocationProvider: navigator.geolocation,
    isOptimisticGeolocationEnabled: true,
    onSuccess({ coords }) {
      const { latitude, longitude } = coords;
      setLocation(dispatch, {
        ...location,
        lat: latitude,
        lng: longitude,
        hasError: false,
        pending: true,
      });
    },
    onError(error) {
      setLocation(dispatch, {
        hasError: true,
        pending: false,
        error,
      });
    },
  });

  const searchLocationByGeolocation = useCallback(async () => {
    const { hasError, lat, lng, pending } = location;

    if (!hasError && lat && lng && pending) {
      const partialLocation = await weatherService.getLocationByGeoposition({
        lat,
        lng,
      });

      setLocation(dispatch, {
        ...location,
        ...partialLocation,
        pending: false,
      });
    }
  }, [dispatch, location]);

  const searchImageFromLocationByLocationInfos = useCallback(async () => {
    const { pending, name, state, imagesUrl } = location;

    if (!pending && name && state && !imagesUrl) {
      const imagesUrl = await imagesService.getImageFromCity(
        `${name} ${state.name} ${state.id} ${state.countryId}`
      );

      setLocation(dispatch, {
        ...location,
        imagesUrl,
      });
    }
  }, [dispatch, location]);

  useEffect(() => {
    searchLocationByGeolocation();
    searchImageFromLocationByLocationInfos();
  });

  return <>{children}</>;
};

export default GeolocationProvider;
