import { LinearGradient as ExpoLinearGradient } from 'expo-linear-gradient';

export const LinearGradient = ({
  children,
  colors,
}: {
  children: JSX.Element;
  colors: string[];
}) => (
  <ExpoLinearGradient
    colors={colors}
    style={{
      flex: 1,
    }}
  >
    {children}
  </ExpoLinearGradient>
);
