import { TextInputProps } from 'react-native';

interface IInput extends TextInputProps {
  label?: string;
  error?: string;
  iconName?: string;
}
