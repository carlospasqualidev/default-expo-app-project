export interface IUserRegion {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

export interface IPlaces {
  id: number;
  image: string;
  name: string;
  stars: number;
  description: string;
  latitude: number;
  longitude: number;
  isFavorite: boolean;
}

export interface IPlaceDetailsModal {
  isOpen: boolean;
  placeData: IPlaces;
  hideModal: () => void;
}
