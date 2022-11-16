/* eslint-disable react/no-unstable-nested-components */

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AccountDetails } from '../screens';

const { Screen, Navigator } = createNativeStackNavigator();

export const AccountRouter = () => (
  <Navigator screenOptions={{ headerShown: false }}>
    <Screen name="AccountDetails" component={AccountDetails} />
  </Navigator>
);
