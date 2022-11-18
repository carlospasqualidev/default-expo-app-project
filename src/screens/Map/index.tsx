// #region IMPORTS
// LIBS
import { useEffect, useState } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import MapView, { Callout, Marker } from 'react-native-maps';

// COMPONENTS
import { LoadingScreen, Text } from '../../components';
import { PlacePopover } from '../../components/PlacePopover';

// FUNCTIONS
import { getUserLocation, requestUserLocationPermission } from './functions';
import { IUserRegion } from './types';

// #endregion

// #region STYLES
const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

  markerView: {
    flex: 1,
    backgroundColor: '#red',
  },
});
// #endregion

export const Map = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [userRegion, setUserRegion] = useState<IUserRegion>();

  const [locationAccessPermission, setLocationAccessPermission] =
    useState<boolean>(false);

  async function requestPermission() {
    const permissionStatus = await requestUserLocationPermission();

    const region = await getUserLocation();

    setLocationAccessPermission(permissionStatus);
    setUserRegion({
      latitude: region.coords.latitude,
      longitude: region.coords.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
    setIsLoading(false);
  }

  useEffect(() => {
    requestPermission();
  }, []);

  return (
    <LoadingScreen isLoading={isLoading}>
      <View>
        {locationAccessPermission ? (
          <MapView
            style={styles.map}
            region={userRegion}
            showsUserLocation
            followsUserLocation
            minZoomLevel={12}
          >
            <Marker
              coordinate={{
                latitude: -28.6783,
                longitude: -49.3704,
              }}
              pinColor="green"
              title="Teste"
              description="decrição"
              style={{}}
            >
              <Callout tooltip>
                <PlacePopover />
              </Callout>
            </Marker>
          </MapView>
        ) : (
          <Text type="h4">Permissão negada</Text>
        )}
      </View>
    </LoadingScreen>
  );
};
