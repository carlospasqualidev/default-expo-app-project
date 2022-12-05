/* eslint-disable import/no-cycle */
import { StyleSheet, View, Image } from 'react-native';
import { useTheme } from '../../hooks';
import { sizes } from '../../styles';
import { Text } from '../Typography';
import { IconButton } from '../IconButton';

export const CardInfo = ({
  image,
  value,
  onPress,
}: {
  image: string;
  value: string | number;
  onPress: () => void;
}) => {
  const theme = useTheme();

  const styles = StyleSheet.create({
    cardContainer: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    card: {
      width: '100%',
      padding: sizes['sm-16'],
      alignItems: 'center',
      justifyContent: 'space-between',
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

    cardImageAndLabel: {
      alignItems: 'center',
      flexDirection: 'row',
    },
  });

  return (
    <View style={styles.cardContainer}>
      <View style={styles.card}>
        <View style={styles.cardImageAndLabel}>
          <Image
            style={styles.image}
            source={{
              uri: image,
            }}
          />
          <Text type="p2">{String(value)}</Text>
        </View>
        <View>
          <IconButton
            icon="clipboard-text-outline"
            onPress={() => onPress()}
            containerColor={theme.colors.primary}
          />
        </View>
      </View>
    </View>
  );
};
