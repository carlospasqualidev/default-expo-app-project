// https://icons.expo.fyi/

import { MD3DarkTheme } from 'react-native-paper';

export const darkTheme = {
  ...MD3DarkTheme, // or MD3DarkTheme
  roundness: 2,
  colors: {
    ...MD3DarkTheme.colors,

    primary: 'rgb(125, 220, 109)',
    onPrimary: 'rgb(0, 58, 2)',
    primaryContainer: 'rgb(0, 83, 4)',
    onPrimaryContainer: 'rgb(152, 249, 134)',
    secondary: 'rgb(187, 203, 178)',
    onSecondary: 'rgb(38, 52, 34)',
    secondaryContainer: 'rgb(60, 75, 55)',
    onSecondaryContainer: 'rgb(215, 232, 205)',
    tertiary: 'rgb(160, 207, 210)',
    onTertiary: 'rgb(0, 55, 58)',
    tertiaryContainer: 'rgb(30, 77, 81)',
    onTertiaryContainer: 'rgb(188, 235, 239)',
    error: 'rgb(255, 180, 171)',
    onError: 'rgb(105, 0, 5)',
    errorContainer: 'rgb(147, 0, 10)',
    onErrorContainer: 'rgb(255, 180, 171)',
    background: 'rgb(26, 28, 24)',
    onBackground: 'rgb(226, 227, 221)',
    surface: 'rgb(26, 28, 24)',
    onSurface: 'rgb(226, 227, 221)',
    surfaceVariant: 'rgb(67, 72, 63)',
    onSurfaceVariant: 'rgb(195, 200, 188)',
    outline: 'rgb(141, 147, 135)',
    outlineVariant: 'rgb(67, 72, 63)',
    shadow: 'rgb(0, 0, 0)',
    scrim: 'rgb(0, 0, 0)',
    inverseSurface: 'rgb(226, 227, 221)',
    inverseOnSurface: 'rgb(47, 49, 45)',
    inversePrimary: 'rgb(1, 110, 7)',
    elevation: {
      level0: 'transparent',
      level1: 'rgb(31, 38, 28)',
      level2: 'rgb(34, 43, 31)',
      level3: 'rgb(37, 49, 33)',
      level4: 'rgb(38, 51, 34)',
      level5: 'rgb(40, 55, 36)',
    },
    surfaceDisabled: 'rgba(226, 227, 221, 0.12)',
    onSurfaceDisabled: 'rgba(226, 227, 221, 0.38)',
    backdrop: 'rgba(44, 50, 41, 0.4)',
  },
};
