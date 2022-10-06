/* eslint-disable @typescript-eslint/no-explicit-any */
import { CSSProperties } from 'styled-components';
import * as styles from './styles';

export const TextType = ({
  type,
  children,
  CSSProps,
}: {
  type: string;
  children: string;
  CSSProps?: CSSProperties;
}) => {
  let Element = null;

  switch (type) {
    case 'H1':
      Element = <styles.H1 CSSProps={CSSProps}>{children}</styles.H1>;
      break;
    case 'H2':
      Element = <styles.H2 CSSProps={CSSProps}>{children}</styles.H2>;
      break;
    case 'H3':
      Element = <styles.H3 CSSProps={CSSProps}>{children}</styles.H3>;
      break;
    case 'H4':
      Element = <styles.H4 CSSProps={CSSProps}>{children}</styles.H4>;
      break;
    case 'H5':
      Element = <styles.H5 CSSProps={CSSProps}>{children}</styles.H5>;
      break;
    case 'H6':
      Element = <styles.H6 CSSProps={CSSProps}>{children}</styles.H6>;
      break;
    case 'P1':
      Element = <styles.P1 CSSProps={CSSProps}>{children}</styles.P1>;
      break;
    case 'P2':
      Element = <styles.P2 CSSProps={CSSProps}>{children}</styles.P2>;
      break;
    case 'P3':
      Element = <styles.P3 CSSProps={CSSProps}>{children}</styles.P3>;
      break;
    case 'P4':
      Element = <styles.P4 CSSProps={CSSProps}>{children}</styles.P4>;
      break;
    case 'P5':
      Element = <styles.P5 CSSProps={CSSProps}>{children}</styles.P5>;
      break;

    default:
      break;
  }

  return Element;
};
