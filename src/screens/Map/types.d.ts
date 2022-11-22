export interface IUserRegion {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

export interface IPlaces {
  image: string;
  name: string;
  stars: number;
  description: string;
  latitude: number;
  longitude: number;
}

export interface IPlaceDetailsModal {
  isOpen: boolean;
  placeData: IPlaces;
  hideModal: () => void;
}
