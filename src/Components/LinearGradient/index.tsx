import { LinearGradient as ExpoLinearGradient } from 'expo-linear-gradient';
import { ViewStyle } from 'react-native';

export const LinearGradient = ({
  children,
  colors,
  CSSProps,
}: {
  children: JSX.Element;
  colors: string[];
  CSSProps: ViewStyle;
}) => (
  <ExpoLinearGradient colors={colors} style={CSSProps}>
    {children}
  </ExpoLinearGradient>
);
