import styled from 'styled-components/native';
import { TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { theme } from '../../../styles/theme';

export const Container = styled.View``;

export const InputContainer = styled(TextInput)`
  background-color: ${theme.color.primary};
  color: ${theme.color.gray1};
  border-radius: 5px;
  font-size: ${RFValue(14)}px;
  font-family: ${theme.font.primary_400};
  padding: 16px 18px;
  margin-bottom: 8px;
  width: 100%;

  margin-top: ${theme.size.xxsm};
`;
