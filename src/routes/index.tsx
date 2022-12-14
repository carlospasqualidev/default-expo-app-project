/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unstable-nested-components */
// #region IMPORTS
// LIBS
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, StatusBar } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { sizes, useTheme } from '../styles';

import { Map, AccountDetails, Favorites } from '../screens';

const { Screen, Navigator } = createBottomTabNavigator();

// #endregion

export const Router = () => {
  const theme = useTheme();

  // #region STYLES
  const styles = StyleSheet.create({
    tabBar: {
      position: 'absolute',
      backgroundColor: theme.colors.surfaceVariant,
      borderTopWidth: 0,

      bottom: sizes['sm-8'],
      left: sizes['sm-8'],
      right: sizes['sm-8'],
      elevation: 0,
      borderRadius: sizes['sm-8'],
      height: 60,
    },
  });

  return (
    <NavigationContainer>
      <StatusBar barStyle="default" />

      <Navigator
        screenOptions={{
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          tabBarStyle: {
            ...styles.tabBar,
          },
        }}
      >
        <Screen
          name="Map"
          component={Map}
          options={{
            headerShown: false,

            tabBarIcon: ({ focused }) =>
              focused ? (
                <MaterialCommunityIcons
                  name="map-search"
                  size={24}
                  color={theme.colors.primary}
                />
              ) : (
                <MaterialCommunityIcons
                  name="map-search-outline"
                  size={24}
                  color={theme.colors.primary}
                />
              ),
          }}
        />

        <Screen
          name="Favorites"
          component={Favorites}
          options={{
            headerShown: false,

            tabBarIcon: ({ focused }) =>
              focused ? (
                <MaterialCommunityIcons
                  name="heart"
                  size={24}
                  color={theme.colors.primary}
                />
              ) : (
                <MaterialCommunityIcons
                  name="heart-outline"
                  size={24}
                  color={theme.colors.primary}
                />
              ),
          }}
        />

        <Screen
          name="Account"
          component={AccountDetails}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <MaterialCommunityIcons
                  name="account"
                  size={24}
                  color={theme.colors.primary}
                />
              ) : (
                <MaterialCommunityIcons
                  name="account-outline"
                  size={24}
                  color={theme.colors.primary}
                />
              ),
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
};
