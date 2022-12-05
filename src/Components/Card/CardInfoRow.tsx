/* eslint-disable import/no-cycle */
import { StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from '../../hooks';
import { sizes } from '../../styles';
import { Text } from '../Typography';

export const CardInfoRow = ({
  icon,
  breed,
  gender,
  weight,
}: {
  icon: any;
  breed: string;
  gender: string;
  weight: number;
}) => {
  const theme = useTheme();

  const styles = StyleSheet.create({
    cardContainer: {
      width: '100%',
      marginTop: sizes['sm-16'],
    },
    card: {
      padding: sizes['sm-16'],
      flexDirection: 'row',
      backgroundColor: theme.colors.background,
      borderRadius: sizes['sm-8'],
      justifyContent: 'space-between',
    },
  });

  return (
    <View style={styles.cardContainer}>
      <View style={styles.card}>
        <MaterialCommunityIcons name={icon} size={24} color={theme.colors.primary} />
        <View>
          <Text type="p6">Raça</Text>
          <Text type="p2">{`${breed}`}</Text>
        </View>
        <View>
          <View>
            <Text type="p6">Genero</Text>
            <Text type="p2">{`${gender}`}</Text>
          </View>
        </View>
        <View>
          <View>
            <Text type="p6">Peso</Text>
            <Text type="p2">{`${weight}`}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
