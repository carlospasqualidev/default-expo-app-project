/* eslint-disable @typescript-eslint/no-explicit-any */
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text } from '../../components';
import { sizes, useTheme } from '../../styles';

export const CardInfo = ({
  icon,
  label,
  value,
}: {
  icon: any;
  value: string;
  label: string;
}) => {
  const theme = useTheme();

  const styles = StyleSheet.create({
    cardContainer: {
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    card: {
      padding: sizes['sm-16'],
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      backgroundColor: theme.colors.background,
      borderRadius: sizes['sm-8'],
    },
  });

  return (
    <View style={styles.cardContainer}>
      <Text type="p2">{label}</Text>
      <View style={styles.card}>
        <MaterialCommunityIcons name={icon} size={24} color={theme.colors.primary} />
        <Text style={{ marginLeft: sizes['sm-8'] }} type="p2">
          {value}
        </Text>
      </View>
    </View>
  );
};

export const CardInfoRow = ({
  icon,
  breed,
  gender,
  weight,
}: {
  icon: any;
  breed: string;
  gender: string;
  weight: string;
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
