import styled, { css } from 'styled-components/native';
import { TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { theme } from '../../../styles/theme';

export const Container = styled.View``;

export const InputContainer = styled(TextInput)<{ error: boolean }>`
  width: 100%;
  margin-top: ${theme.size.xxsm};
  margin-bottom: ${theme.size.xsm};
  padding: ${theme.size.xsm} ${theme.size.sm};
  border-radius: ${theme.size.xxsm};
  font-size: ${RFValue(14)}px;

  border: 1px solid ${theme.color.primary};
  background-color: ${theme.color.gray0};
  outline-color: ${theme.color.primary};
  color: ${theme.color.black};

  ${({ error }) =>
    error &&
    css`
      background-color: ${theme.color.dangerL};
      border: 1px solid ${theme.color.danger};
      color: ${theme.color.danger};
      margin-bottom: ${theme.size.xxxsm};
      outline-color: ${theme.color.danger};
    `}
`;

export const ErrorContainer = styled.View`
  margin-bottom: ${theme.size.xsm};
`;
