import { View } from 'react-native';
import { Button as ButtonPaper } from 'react-native-paper';
import { IButton } from './types';

export const Button = ({
  label,
  onPress,
  mode = 'contained',
  buttonColor,
  textColor,
  loading,
  width = '75%',
}: IButton) => (
  <View style={{ width }}>
    <ButtonPaper
      textColor={textColor}
      buttonColor={buttonColor}
      mode={mode}
      loading={loading}
      onPress={() => onPress()}
    >
      {label}
    </ButtonPaper>
  </View>
);
