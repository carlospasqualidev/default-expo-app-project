// #region IMPORTS
// LIBS
import { useEffect, useState } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import MapView, { Marker as MapMarker } from 'react-native-maps';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// COMPONENTS
import { LoadingScreen, Text } from '../../components';
import { ModalDetails } from './Modals/Details';

// FUNCTIONS
import { getUserLocation, requestUserLocationPermission } from './functions';
import { IUserRegion } from './types';
import { useTheme } from '../../hooks';

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
  const theme = useTheme();

  const [popover, setpopover] = useState<boolean>(false);

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
          <>
            <MapView
              style={styles.map}
              region={userRegion}
              showsUserLocation
              followsUserLocation
              minZoomLevel={12}
            >
              <MapMarker
                coordinate={{
                  latitude: -28.6583,
                  longitude: -49.3704,
                }}
                onPress={() => setpopover((state) => !state)}
              >
                <MaterialCommunityIcons
                  name="map-marker"
                  size={48}
                  color={theme.colors.primary}
                />
              </MapMarker>
            </MapView>
            <ModalDetails isOpen={popover} hideModal={() => setpopover(false)} />
          </>
        ) : (
          <Text type="h4">Permissão negada</Text>
        )}
      </View>
    </LoadingScreen>
  );
};
