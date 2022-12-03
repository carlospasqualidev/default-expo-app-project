import { LinearGradient as ExpoLinearGradient } from 'expo-linear-gradient';
import { ViewStyle } from 'react-native';

export const LinearGradient = ({
  children,
  colors,
  style,
}: {
  children: JSX.Element;
  colors: string[];
  style: ViewStyle;
}) => (
  <ExpoLinearGradient colors={colors} style={style}>
    {children}
  </ExpoLinearGradient>
);
