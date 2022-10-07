// LIBS
import React from 'react';
import { theme } from '../../../styles/theme';
import { Text } from '../../Typography';
// import { useTheme } from 'styled-components';

// STYLES
import * as styles from './styles';

// TYPES
import { IInput } from './types';

export const Input = ({ label, error, ...rest }: IInput) => (
  <styles.Container>
    {label && <Text type="H6">{label}</Text>}
    <styles.InputContainer error={!!error} {...rest} />

    {error && (
      <styles.ErrorContainer>
        <Text type="P4" CSSProps={{ color: theme.color.danger }}>
          {error}
        </Text>
      </styles.ErrorContainer>
    )}
  </styles.Container>
);
