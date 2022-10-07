import { RFValue } from 'react-native-responsive-fontsize';

export const theme = {
  color: {
    primary: '#34B53A',
    primaryM: '#74D779',
    primaryL: '#C4EEC6',

    danger: '#FF4E4E',
    dangerM: '#FF6D4C',
    dangerL: '#FFC0B3',

    warningL: '#FFE8B3',
    infoL: '#B3DFFF',

    gray0: '#f5f5f5',
    gray1: '#EDEDED',
    gray2: '#E6E6E6',
    gray3: '#D5D5D5',
    gray4: '#999999',
    gray5: '#2B2B2B',

    black: '#000000',
    white: '#FFFFFF',
  } as const,

  size: {
    xxxsm: `${RFValue(2)}px}`, // 4px
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
