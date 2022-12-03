import * as Location from 'expo-location';

export async function requestUserLocationPermission() {
  let permissionStatus = false;

  const { status } = await Location.requestForegroundPermissionsAsync();

  if (status === 'granted') permissionStatus = true;

  return permissionStatus;
}

export const getUserLocation = async () => Location.getCurrentPositionAsync();
