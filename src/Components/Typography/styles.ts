/* eslint-disable @typescript-eslint/no-explicit-any */
// LIBS
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const H1 = styled.Text<{ CSSProps: any }>`
  font-style: normal;
  font-weight: 700;
  font-size: ${RFValue(40)}px;
  line-height: 42px;

  ${({ CSSProps }) => CSSProps}
`;
export const H2 = styled.Text<{ CSSProps: any }>`
  font-style: normal;
  font-weight: 700;
  font-size: ${RFValue(22)}px;
  line-height: 24px;

  ${({ CSSProps }) => CSSProps}
`;
export const H3 = styled.Text<{ CSSProps: any }>`
  font-style: normal;
  font-weight: 500;
  font-size: ${RFValue(20)}px;
  line-height: 22px;

  ${({ CSSProps }) => CSSProps}
`;
export const H4 = styled.Text<{ CSSProps: any }>`
  font-style: normal;
  font-weight: 500;
  font-size: ${RFValue(18)}px;
  line-height: 20px;

  ${({ CSSProps }) => CSSProps}
`;
export const H5 = styled.Text<{ CSSProps: any }>`
  font-style: normal;
  font-weight: 500;
  font-size: ${RFValue(16)}px;
  line-height: 18px;

  ${({ CSSProps }) => CSSProps}
`;
export const H6 = styled.Text<{ CSSProps: any }>`
  font-style: normal;
  font-weight: 500;
  font-size: ${RFValue(14)}px;
  line-height: 16px;

  ${({ CSSProps }) => CSSProps}
`;
export const P1 = styled.Text<{ CSSProps: any }>`
  font-style: normal;
  font-weight: 400;
  font-size: ${RFValue(16)}px;
  line-height: 18px;

  ${({ CSSProps }) => CSSProps}
`;
export const P2 = styled.Text<{ CSSProps: any }>`
  font-style: normal;
  font-weight: 400;
  font-size: ${RFValue(14)}px;
  line-height: 16px;

  ${({ CSSProps }) => CSSProps}
`;
export const P3 = styled.Text<{ CSSProps: any }>`
  font-style: normal;
  font-weight: 400;
  font-size: ${RFValue(12)}px;
  line-height: 14px;

  ${({ CSSProps }) => CSSProps}
`;
export const P4 = styled.Text<{ CSSProps: any }>`
  font-style: normal;
  font-weight: 500;
  font-size: ${RFValue(12)}px;
  line-height: 14px;

  ${({ CSSProps }) => CSSProps}
`;
export const P5 = styled.Text<{ CSSProps: any }>`
  font-style: normal;
  font-weight: 400;
  font-size: ${RFValue(10)}px;
  line-height: 12px;

  ${({ CSSProps }) => CSSProps}
`;
export const P6 = styled.Text<{ CSSProps: any }>`
  font-style: normal;
  font-weight: 200;
  font-size: ${RFValue(10)}px;
  line-height: 12px;

  ${({ CSSProps }) => CSSProps}
`;
