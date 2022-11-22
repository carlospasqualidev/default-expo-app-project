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

import { fakePlaces } from './fakeData';

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
  const theme = useTheme();

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
        {locationAccessPermission ? (
          <>
            <MapView
              style={styles.map}
              region={userRegion}
              showsUserLocation
              followsUserLocation
              minZoomLevel={12}
            >
              {fakePlaces.map((place) => (
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
          <Text type="h4">Permissão negada</Text>
        )}
      </View>
    </LoadingScreen>
  );
};
