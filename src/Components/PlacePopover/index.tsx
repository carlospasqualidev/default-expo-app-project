import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import { useTheme } from '../../hooks/useTheme';
import { sizes } from '../../styles';
import { Text } from '../Typography';

export const PlacePopover = ({ onPress }: { onPress: () => void }) => {
  const theme = useTheme();

  // #region STYLES
  const styles = StyleSheet.create({
    background: {
      flex: 1,
      width: 250,
      backgroundColor: theme.colors.background,
      borderRadius: sizes['sm-8'],
    },
    image: {
      flex: 1,
      backgroundColor: 'red',
      borderTopLeftRadius: sizes['sm-8'],
      borderTopRightRadius: sizes['sm-8'],
    },

    header: {
      height: 150,
    },

    stars: {
      backgroundColor: 'blue',
      minHeight: 20,
      marginBottom: sizes['sm-8'],
    },

    body: {
      flex: 1,
      justifyContent: 'center',
      paddingLeft: sizes['sm-8'],
      paddingRight: sizes['sm-8'],
      paddingBottom: sizes['sm-8'],
    },

    buttonBackground: {
      paddingTop: sizes['sm-8'],
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },

    button: {
      width: '50%',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: sizes['sm-8'],
      paddingVertical: sizes['sm-8'],
      backgroundColor: 'red',
    },
  });
  // #endregion

  return (
    <View style={styles.background}>
      <View style={styles.header}>
        <View style={styles.image}>
          <Text type="h5">m</Text>
        </View>
      </View>

      <View style={styles.body}>
        <Text type="h6">Mamma veg</Text>

        <View style={styles.stars} />

        <Text type="p4">
          It is a long established fact that a reader will be distracted by the readable
          content of a page when looking at its layout.
        </Text>

        <View style={styles.buttonBackground}>
          <Pressable style={styles.button} onPress={() => onPress()}>
            <Text type="p3">Ver mais</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};
