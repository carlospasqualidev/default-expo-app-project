/* eslint-disable import/no-cycle */
import { StyleSheet, View, Image } from 'react-native';
import { useTheme } from '../../hooks';
import { sizes } from '../../styles';
import { Text } from '../Typography';

export const CardInfo = ({ image, value }: { image: string; value: string | number }) => {
  const theme = useTheme();

  const styles = StyleSheet.create({
    cardContainer: {
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    card: {
      width: '100%',
      padding: sizes['sm-16'],
      alignItems: 'center',
      flexDirection: 'row',
      backgroundColor: theme.colors.background,
      borderRadius: sizes['sm-8'],
      marginTop: sizes['sm-8'],
    },
    image: {
      width: 50,
      height: 50,
      borderRadius: 100,
      marginRight: sizes['sm-16'],
    },
  });

  return (
    <View style={styles.cardContainer}>
      <View style={styles.card}>
        <Image
          style={styles.image}
          source={{
            uri: image,
          }}
        />
        <Text type="p2">{String(value)}</Text>
      </View>
    </View>
  );
};
