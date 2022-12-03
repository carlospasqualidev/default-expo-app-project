/* eslint-disable @typescript-eslint/no-explicit-any */

import { Text } from 'react-native-paper';
import { IText } from './types';

export const TextType = ({ type, children, style }: IText) => {
  let Element = null;

  switch (type) {
    case 'h1':
      Element = (
        <Text variant="displayLarge" style={style}>
          {children}
        </Text>
      );
      break;
    case 'h2':
      <Text variant="displayMedium" style={style}>
        {children}
      </Text>;
      break;
    case 'h3':
      Element = (
        <Text variant="displaySmall" style={style}>
          {children}
        </Text>
      );
      break;
    case 'h4':
      Element = (
        <Text variant="headlineLarge" style={style}>
          {children}
        </Text>
      );
      break;
    case 'h5':
      Element = (
        <Text variant="headlineMedium" style={style}>
          {children}
        </Text>
      );
      break;
    case 'h6':
      Element = (
        <Text variant="headlineSmall" style={style}>
          {children}
        </Text>
      );
      break;
    case 'p1':
      Element = (
        <Text variant="titleLarge" style={style}>
          {children}
        </Text>
      );
      break;
    case 'p2':
      Element = (
        <Text variant="titleMedium" style={style}>
          {children}
        </Text>
      );
      break;
    case 'p3':
      Element = (
        <Text variant="titleSmall" style={style}>
          {children}
        </Text>
      );
      break;
    case 'p4':
      Element = (
        <Text variant="bodyLarge" style={style}>
          {children}
        </Text>
      );
      break;
    case 'p5':
      Element = (
        <Text variant="bodyMedium" style={style}>
          {children}
        </Text>
      );
      break;
    case 'p6':
      Element = (
        <Text variant="bodySmall" style={style}>
          {children}
        </Text>
      );
      break;

    default:
      break;
  }

  return Element;
};
