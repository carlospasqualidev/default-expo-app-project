import { TextInputProps } from 'react-native';

interface IInput extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>['name'];
  value?: string;
}
