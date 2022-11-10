// #region IMPORTS
// LIBS
import { ActivityIndicator } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';

// TYPES
import { ILoadingScreen } from './types';

// #endregion

// #region STYLES
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
// #endregion

export const LoadingScreen = ({ isLoading, children }: ILoadingScreen) =>
  isLoading ? (
    <View style={styles.container}>
      <ActivityIndicator animating />
    </View>
  ) : (
    children
  );
