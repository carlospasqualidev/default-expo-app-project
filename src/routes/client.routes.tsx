/* eslint-disable react/no-unstable-nested-components */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { AntDesign } from '@expo/vector-icons';

import { Login } from '../screens/Authentication/Login';
import { Register } from '../screens/Authentication/Register';

const { Screen, Navigator } = createBottomTabNavigator();

export const ClientRoutes = () => (
  <Navigator>
    <Screen
      name="Login"
      component={Login}
      options={{
        tabBarLabel: 'Login',
        tabBarIcon: ({ color }) => <AntDesign name="home" size={24} color={color} />,
      }}
    />

    <Screen
      name="Register"
      component={Register}
      options={{
        tabBarLabel: 'Register',
        tabBarIcon: ({ color }) => <AntDesign name="home" size={24} color={color} />,
      }}
    />
  </Navigator>
);
