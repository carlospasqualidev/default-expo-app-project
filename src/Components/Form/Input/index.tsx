// LIBS
import React from 'react';
import { Text } from '../../Typography';
// import { useTheme } from 'styled-components';

// STYLES
import * as styles from './styles';

// TYPES
import { IInput } from './types';

export const Input = ({ label, ...rest }: IInput) => (
  <styles.Container>
    {label && <Text type="H6">{label}</Text>}
    <styles.InputContainer {...rest} />
  </styles.Container>
);
