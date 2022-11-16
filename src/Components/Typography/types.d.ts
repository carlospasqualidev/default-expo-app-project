import { TextStyle } from 'react-native';

export interface IText {
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p1' | 'p2' | 'p3' | 'p4' | 'p5' | 'p6';
  children: string | null | undefined;
  style?: TextStyle;
}
