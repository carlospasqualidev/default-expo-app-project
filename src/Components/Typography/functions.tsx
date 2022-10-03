import * as styles from './styles';

export const TextType = ({ type, children }: { type: string; children: string }) => {
  let Element = null;

  switch (type) {
    case 'H1':
      Element = <styles.H1>{children}</styles.H1>;
      break;
    case 'H2':
      Element = <styles.H2>{children}</styles.H2>;
      break;
    case 'H3':
      Element = <styles.H3>{children}</styles.H3>;
      break;
    case 'H4':
      Element = <styles.H4>{children}</styles.H4>;
      break;
    case 'H5':
      Element = <styles.H5>{children}</styles.H5>;
      break;
    case 'H6':
      Element = <styles.H6>{children}</styles.H6>;
      break;

    case 'P1':
      Element = <styles.P1>{children}</styles.P1>;
      break;
    case 'P2':
      Element = <styles.P2>{children}</styles.P2>;
      break;
    case 'P3':
      Element = <styles.P3>{children}</styles.P3>;
      break;
    case 'P4':
      Element = <styles.P4>{children}</styles.P4>;
      break;
    case 'P5':
      Element = <styles.P5>{children}</styles.P5>;
      break;
    case 'P6':
      Element = <styles.P6>{children}</styles.P6>;
      break;

    default:
      break;
  }

  return Element;
};
