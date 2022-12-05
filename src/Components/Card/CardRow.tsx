/* eslint-disable import/no-cycle */
import { StyleSheet, View } from 'react-native';
import { useTheme } from '../../hooks';
import { sizes } from '../../styles';

export const CardRow = ({ children }: { children: JSX.Element }) => {
  const theme = useTheme();

  const styles = StyleSheet.create({
    background: {
      width: '100%',
      borderRadius: sizes['sm-16'],
      backgroundColor: theme.colors.surfaceVariant,
      padding: sizes['sm-16'],
      marginBottom: sizes['sm-16'],
    },
  });
  // #endregion

  return <View style={styles.background}>{children}</View>;
};
