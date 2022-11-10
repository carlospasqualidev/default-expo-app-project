import * as Location from 'expo-location';

export async function requestUserLocationPermission() {
  let permissionStatus = false;

  const { status } = await Location.requestForegroundPermissionsAsync();

  if (status === 'granted') permissionStatus = true;

  return permissionStatus;

  // const location = await Location.getCurrentPositionAsync({});
  // setLocation(location);
}
