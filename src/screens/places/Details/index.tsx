// #region IMPORTS
// LIBS
import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';

// COMPONENTS
import { LoadingScreen, Text } from '../../../components';

// FUNCTIONS
import { requestPlacesDetails } from './fakeData';

// TYPES
import { IPlacesData } from './types';

// #endregion

export const PlacesDetails = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [placeData, setPlaceData] = useState<IPlacesData | null>();

  // #region STYLES
  const styles = StyleSheet.create({
    background: {
      flex: 1,
    },
  });
  // #endregion

  useEffect(() => {
    const placeDetails = requestPlacesDetails();

    setPlaceData(placeDetails);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <LoadingScreen isLoading={isLoading}>
      <View style={styles.background}>
        <Text type="h4">{placeData?.name}</Text>
      </View>
    </LoadingScreen>
  );
};
