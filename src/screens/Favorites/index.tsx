/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-console */
// LIBS
import { View, StyleSheet } from 'react-native';

// COMPONENTS

import { useEffect, useState } from 'react';
import { sizes, useTheme } from '../../styles';
import { Text, Card, CardInfo } from '../../components';
import { useAuthContext } from '../../hooks/auth/UseAuthContext';
import { IPlaces } from '../Map/types';
import { ModalDetails } from '../Map/Modals/Details';

export const Favorites = () => {
  const theme = useTheme();
  const [update, setUpdate] = useState<number>(0);
  const { loadingLocals } = useAuthContext();
  const [favorites, setFavorites] = useState<IPlaces[] | null>(null);
  const [popover, setpopover] = useState<boolean>(false);
  const [clickedPlace, setClickedPlace] = useState<IPlaces | null>(null);

  // #region STYLES
  const styles = StyleSheet.create({
    background: {
      flex: 1,
      backgroundColor: theme.colors.background,
      padding: sizes['sm-16'],
      paddingBottom: 80,
    },
    spacer: {
      width: '100%',
      minHeight: 2,
      backgroundColor: theme.colors.background,
      marginVertical: sizes['sm-4'],
    },
  });
  // #endregion

  useEffect(() => {
    const places = loadingLocals();
    setFavorites(places);

    setTimeout(() => setUpdate(update + 1), 1000);
  }, [update]);

  return (
    <View style={styles.background}>
      <Card>
        <View>
          <View style={{ width: '100%', alignItems: 'center' }}>
            <Text type="h6">Meus Favoritos</Text>
          </View>

          <View style={styles.spacer} />

          <View>
            {favorites?.map(
              (place: any) =>
                place.isFavorite && (
                  <CardInfo
                    onPress={() => {
                      setClickedPlace(place);
                      setpopover(true);
                    }}
                    key={place.id}
                    value={place.name}
                    image={place.image}
                  />
                ),
            )}
          </View>
        </View>
      </Card>

      {popover && (
        <ModalDetails
          isOpen={popover}
          hideModal={() => setpopover(false)}
          placeData={clickedPlace!}
        />
      )}
    </View>
  );
};
