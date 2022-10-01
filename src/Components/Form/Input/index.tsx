import React from 'react';
import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components';
import * as styles from './styles';

type InputProps = TextInputProps;

export const Input = ({ ...rest }: InputProps) => {
  const theme = useTheme();

  return <styles.InputContainer placeholderTextColor={theme.colors.gray1} {...rest} />;
};
