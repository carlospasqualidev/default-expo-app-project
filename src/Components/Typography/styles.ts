import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { theme } from '../../styles/theme';

export const H1 = styled.Text`
  font-style: normal;
  font-weight: 700;
  font-size: ${RFValue(40)}px;
  line-height: 42px;
  font-family: ${theme.font.primary_400};
`;
export const H2 = styled.Text`
  font-style: normal;
  font-weight: 700;
  font-size: ${RFValue(22)}px;
  line-height: 24px;
  font-family: ${theme.font.primary_400};
`;
export const H3 = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: ${RFValue(20)}px;
  line-height: 22px;
  font-family: ${theme.font.primary_400};
`;
export const H4 = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: ${RFValue(18)}px;
  line-height: 20px;
  font-family: ${theme.font.primary_400};
`;
export const H5 = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: ${RFValue(16)}px;
  line-height: 18px;
  font-family: ${theme.font.primary_400};
`;
export const H6 = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: ${RFValue(14)}px;
  line-height: 16px;
  font-family: ${theme.font.primary_400};
`;
export const P1 = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: ${RFValue(16)}px;
  line-height: 18px;
  font-family: ${theme.font.primary_400};
`;
export const P2 = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: ${RFValue(14)}px;
  line-height: 16px;
  font-family: ${theme.font.primary_400};
`;
export const P3 = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: ${RFValue(12)}px;
  line-height: 14px;
  font-family: ${theme.font.primary_400};
`;
export const P4 = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: ${RFValue(12)}px;
  line-height: 14px;
  font-family: ${theme.font.primary_400};
`;
export const P5 = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: ${RFValue(10)}px;
  line-height: 12px;
  font-family: ${theme.font.primary_400};
`;
export const P6 = styled.Text`
  font-style: normal;
  font-weight: 200;
  font-size: ${RFValue(10)}px;
  line-height: 12px;
  font-family: ${theme.font.primary_400};
`;
