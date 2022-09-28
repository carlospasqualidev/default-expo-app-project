// LIBS
import React, { useState } from 'react';

// STYLES
import { Feather } from '@expo/vector-icons';
import { Container, IconContainer, InputText } from './styles';
import { theme } from '../../../styles/theme';

// TYPES
import { IInput } from './types';

export const Input = ({ iconName, value, ...rest }: IInput) => {
  const [isFocused, setisFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  return (
    <Container>
      <IconContainer isFocused={isFocused}>
        <Feather
          color={isFocused || isFilled ? theme.colors.main : theme.colors.text_detail}
          name={iconName}
          size={24}
        />
      </IconContainer>
      <InputText
        isFocused={isFocused}
        onBlur={() => {
          setisFocused(false);
          setIsFilled(!!value);
        }}
        onFocus={() => setisFocused(true)}
        {...rest}
      />
    </Container>
  );
};
