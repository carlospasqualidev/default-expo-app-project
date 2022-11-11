/* eslint-disable react/no-unstable-nested-components */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Login, Map, Register } from '../screens';

const { Screen, Navigator } = createBottomTabNavigator();

export const ClientRoutes = () => (
  <Navigator>
    <Screen
      name="Map"
      component={Map}
      options={{
        headerShown: false,
        tabBarLabel: 'Map',
        tabBarIcon: ({ color, focused }) =>
          focused ? (
            <MaterialCommunityIcons name="map-search" size={24} color={color} />
          ) : (
            <MaterialCommunityIcons name="map-search-outline" size={24} color={color} />
          ),
      }}
    />

    <Screen
      name="Login"
      component={Login}
      options={{
        headerShown: false,

        tabBarLabel: 'Login',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" size={24} color={color} />
        ),
      }}
    />

    <Screen
      name="Register"
      component={Register}
      options={{
        headerShown: false,

        tabBarLabel: 'Register',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" size={24} color={color} />
        ),
      }}
    />
  </Navigator>
);
