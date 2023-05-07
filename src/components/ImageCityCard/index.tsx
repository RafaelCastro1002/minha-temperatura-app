import { useContext } from "react";
import { CardImageCity, CityNameCard, ImageCity } from "./styles";
import UserContext from "../../context/UserContext";

const ImageCityCard = () => {
  const { state } = useContext(UserContext);
  const { location } = state;

  const getUrlImageCity = () => {
    if (location.imagesUrl && location.imagesUrl?.length) {
      return location.imagesUrl[0];
    } else {
      return "";
    }
  };

  return (
    <CardImageCity>
      <ImageCity src={getUrlImageCity()} />
      <CityNameCard data-cy="name-city">{`${location.name} - ${location.state?.name} - ${location.state?.countryId}`}</CityNameCard>
    </CardImageCity>
  );
};

export default ImageCityCard;
