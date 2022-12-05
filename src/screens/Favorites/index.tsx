/* eslint-disable no-console */
// LIBS
import { View, StyleSheet } from 'react-native';

// COMPONENTS

import { useEffect, useState } from 'react';
import { sizes, useTheme } from '../../styles';
import { Text, Card, CardInfo } from '../../components';
import { useAuthContext } from '../../hooks/auth/UseAuthContext';
import { IPlaces } from '../Map/types';
// import { setItemStorage } from '../../hooks/itemsStorage';
// import { useAuthContext } from '../../hooks/auth/UseAuthContext';

export const Favorites = () => {
  const theme = useTheme();
  const [update, setUpdate] = useState<number>(0);
  const { loadingLocals } = useAuthContext();
  const [favorites, setFavorites] = useState<IPlaces[] | null>(null);

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
            {favorites?.map((place: any) => {
              if (place.isFavorite) {
                return <CardInfo key={place.id} value={place.name} image={place.image} />;
              }
              return null;
            })}
          </View>
        </View>
      </Card>
    </View>
  );
};
