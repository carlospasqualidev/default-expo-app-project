import { CSSProperties } from 'styled-components';

export interface IText {
  type: 'H1' | 'H2' | 'H3' | 'H4' | 'H5' | 'H6' | 'P1' | 'P2' | 'P3' | 'P4' | 'P5' | 'P6';
  children: string;
  CSSProps?: CSSProperties;
}
