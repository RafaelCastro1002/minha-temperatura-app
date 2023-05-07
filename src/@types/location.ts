type StateType = {
  name: string;
  id: string;
  countryId: string;
};

export type LocationType = {
  lng: number;
  lat: number;
  hasError?: boolean;
  error?: GeolocationPositionError;
  pending: boolean;
  key: number;
  name: string;
  state: StateType;
  imagesUrl: string[];
};
