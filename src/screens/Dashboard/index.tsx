/* eslint-disable no-console */
// LIBS
import { View, StyleSheet, ScrollView } from 'react-native';

import { useEffect, useState } from 'react';
import { CardInfo, CardInfoRow } from './components';

// COMPONENTS
import { Text, Card } from '../../components';
import { sizes, useTheme } from '../../styles';
import { requestAnimalsData } from './functions';

export const Dashboard = () => {
  const [animalDashboard, setAnimalDashboard] = useState<any>(null);
  const theme = useTheme();

  // #region STYLES
  const styles = StyleSheet.create({
    background: {
      flex: 1,
      backgroundColor: theme.colors.background,
      padding: sizes['sm-16'],
      alignItems: 'center',
    },

    smallCards: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },

    scrollView: {
      height: 350,
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
    requestAnimalsData({ setState: setAnimalDashboard });
  }, []);

  return (
    <View style={styles.background}>
      <Card>
        <View>
          <View style={{ width: '100%', alignItems: 'center' }}>
            <Text type="h6">Animais</Text>
          </View>

          <View style={styles.spacer} />

          <View style={styles.smallCards}>
            <CardInfo label="Total" value="340" icon="cow" />
            <CardInfo label="Peso" value="340" icon="scale-unbalanced" />
            <CardInfo label="Idade" value="340" icon="baby-carriage" />
          </View>

          <ScrollView style={styles.scrollView}>
            <CardInfoRow icon="cow" gender="Macho" breed="Jersey" weight="300" />
            <CardInfoRow icon="cow" gender="Macho" breed="Jersey" weight="300" />
            <CardInfoRow icon="cow" gender="Macho" breed="Jersey" weight="300" />
            <CardInfoRow icon="cow" gender="Macho" breed="Jersey" weight="300" />
            <CardInfoRow icon="cow" gender="Macho" breed="Jersey" weight="300" />
            <CardInfoRow icon="cow" gender="Macho" breed="Jersey" weight="300" />
            <CardInfoRow icon="cow" gender="Macho" breed="Jersey" weight="300" />
          </ScrollView>
        </View>
      </Card>

      <Card>
        <View>
          <View style={{ width: '100%', alignItems: 'center' }}>
            <Text type="h6">Animais p/ local</Text>
          </View>

          <View style={styles.spacer} />

          <View style={styles.smallCards}>
            <CardInfo label="Pasto" value="340" icon="cow" />
            <CardInfo label="Comida" value="340" icon="scale-unbalanced" />
            <CardInfo label="Vacina" value="340" icon="baby-carriage" />
          </View>
        </View>
      </Card>
    </View>
  );
};
