/* eslint-disable react/no-unstable-nested-components */

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Map } from '../screens';

const { Screen, Navigator } = createNativeStackNavigator();

export const MapRouter = () => (
  <Navigator screenOptions={{ headerShown: false }}>
    <Screen name="Map" component={Map} />
  </Navigator>
);
