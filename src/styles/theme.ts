import { RFValue } from 'react-native-responsive-fontsize';

export const theme = {
  color: {
    primary: '#0C3966',
    primary_2: '#2966A3',
    primary_3: '#6699CC',
    primary_4: '#B8CCE0',
    primary_5: '#DBE5F0',

    secondary: '#765823',
    secondary_2: '#AA7F32',
    secondary_3: '#D1A961',
    secondary_4: '#DCBE89',
    secondary_5: '#F3E9D8',

    gray1: '#1F1F1F',
    gray2: '##4D4D4D',
    gray3: '#999999',
    gray4: '#CCCCCC',
    gray5: '#F2F2F2',

    black: '#000000',
    white: '#FFFFFF',

    success: '#247528',
    success_2: '#38B53E',
    success_3: '#63CF68',
    success_4: '#8ADB8E',
    success_5: '#D8F3D9',

    warning: '#D6A001',
    warning_2: '#FFC929',
    warning_3: '#FFD866',
    warning_4: '#FFE599',
    warning_5: '#FFF2CC',

    danger: '#CC0000',
    danger_2: '#FF3333',
    danger_3: '#FF6666',
    danger_4: '#FF9999',
    danger_5: '#FFCCCC',
  } as const,

  size: {
    xxsm: `${RFValue(4)}px}`, // 4px
    xsm: `${RFValue(8)}px}`, // 8px
    sm: `${RFValue(16)}px}`, // 16px
    md: `${RFValue(24)}px}`, // 24px
    lg: `${RFValue(32)}px}`, // 32px
    xlg: `${RFValue(40)}px}`, // 40px
    xxlg: `${RFValue(48)}px}`, // 48px
    xxxlg: `${RFValue(56)}px}`, // 56px
    xxxxlg: `${RFValue(64)}px}`, // 64px
  } as const,
};
