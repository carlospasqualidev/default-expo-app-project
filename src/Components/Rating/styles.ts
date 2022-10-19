import { View } from 'react-native';
import styled, { css } from 'styled-components/native';

import { theme } from '../../styles/theme';

export const Container = styled.View`
  flex: 1;
`;

export const Card = styled.View`
  background-color: ${theme.color.primary};
  height: 50%;
  flex-direction: row;
`;

export const Content = styled(View)<{
  backgroundColor: string;
  width: string;
  alingItems: 'center' | 'flex-start';
}>`
  flex: 1;
  align-items: center;

  ${({ alingItems }) =>
    alingItems &&
    css`
      align-items: ${alingItems};
    `}

  ${({ width }) =>
    width &&
    css`
      width: ${width};
    `}

    ${({ backgroundColor }) =>
    backgroundColor &&
    css`
      background-color: ${backgroundColor};
    `}
`;
