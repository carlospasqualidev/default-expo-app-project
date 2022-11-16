import { useColorScheme } from 'react-native';
import { darkTheme, lightTheme } from '../styles';

export const useThemeScheme = () => {
  const colorScheme = useColorScheme();

  if (colorScheme === 'light' || colorScheme === null || colorScheme === undefined) {
    return lightTheme;
  }
  return darkTheme;
};
