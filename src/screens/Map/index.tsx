/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
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
import { IPlaces, IUserRegion } from './types';
import { useTheme } from '../../hooks';

import { sizes } from '../../styles';
import { useAuthContext } from '../../hooks/auth/UseAuthContext';

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

  markerView: {
    flex: 1,
  },

  containerPermission: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    marginBottom: sizes['sm-8'],
  },
});

// #endregion

export const Map = () => {
  const theme = useTheme();
  const { loadingLocals } = useAuthContext();
  const locals = loadingLocals();

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [userRegion, setUserRegion] = useState<IUserRegion>();
  const [locationAccessPermission, setLocationAccessPermission] =
    useState<boolean>(false);

  const [popover, setpopover] = useState<boolean>(false);
  const [clickedPlace, setClickedPlace] = useState<IPlaces | null>(null);

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
        {locationAccessPermission === true ? (
          <>
            <MapView
              style={styles.map}
              region={userRegion}
              showsUserLocation
              followsUserLocation
              minZoomLevel={12}
            >
              {locals.map((place: any) => (
                <MapMarker
                  key={place.latitude}
                  coordinate={{
                    latitude: place.latitude,
                    longitude: place.longitude,
                  }}
                  onPress={() => {
                    setClickedPlace(place);
                    setpopover((state) => !state);
                  }}
                >
                  <MaterialCommunityIcons
                    name="map-marker"
                    size={48}
                    color={theme.colors.primary}
                  />
                </MapMarker>
              ))}
            </MapView>

            {popover && (
              <ModalDetails
                isOpen={popover}
                hideModal={() => setpopover(false)}
                placeData={clickedPlace!}
              />
            )}
          </>
        ) : (
          <>
            <View style={styles.containerPermission}>
              <Text type="h6" style={styles.text}>
                Veglivery 💚
              </Text>
              <Text type="p3" style={styles.text}>
                Nós realmente precisamos da sua localização :( ...
              </Text>
            </View>

            {requestPermission()}
          </>
        )}
      </View>
    </LoadingScreen>
  );
};
