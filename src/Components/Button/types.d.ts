export interface IButton {
  label: string;
  onPress: () => void;
  mode?: 'text' | 'outlined' | 'contained' | 'elevated' | 'contained-tonal';
  buttonColor?: string;
  textColor?: string;
  loading?: boolean;
  width?: string;
}
