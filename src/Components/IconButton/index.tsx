import { IconButton as PaperIconButton } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import { useTheme } from '../../hooks';

import { Text } from '../Typography';

export const IconButton = ({
  onPress,
  icon,
  label,
}: {
  onPress: () => void;
  icon: string;
  label?: string;
}) => {
  const theme = useTheme();

  const styles = StyleSheet.create({
    background: {
      alignItems: 'center',
    },
  });
  // #endregion

  return (
    <View style={styles.background}>
      <PaperIconButton
        icon={icon}
        iconColor="white"
        onPress={onPress}
        containerColor={theme.colors.primary}
      />

      <Text type="p6">{label}</Text>
    </View>
  );
};
