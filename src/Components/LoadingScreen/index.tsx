// #region IMPORTS
// LIBS
import { ActivityIndicator } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';

// TYPES
import { ILoadingScreen } from './types';
import { Text } from '../Typography';
import { sizes } from '../../styles';
import { useThemeScheme } from '../../hooks';

// #endregion

export const LoadingScreen = ({ isLoading, children }: ILoadingScreen) => {
  const theme = useThemeScheme();

  // #region STYLES
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.colors.background,
    },

    text: {
      marginBottom: sizes['sm-8'],
    },
  });
  // #endregion
  return isLoading ? (
    <View style={styles.container}>
      <Text type="h6" style={styles.text}>
        Veglivery 💚
      </Text>

      <ActivityIndicator animating />
    </View>
  ) : (
    children
  );
};
