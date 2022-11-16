/* eslint-disable @typescript-eslint/ban-ts-comment */
// LIBS
import React from 'react';
import { TextInput } from 'react-native-paper';
import { View } from 'react-native';

// TYPES
import { IInput } from './types';

// COMPONENTS
import { Text } from '../../Typography';
import { useTheme } from '../../../styles';

// STYLES

export const Input = ({ label, iconName, error, ...rest }: IInput) => {
  const theme = useTheme();

  return (
    <View>
      {label && <Text type="p2">{label}</Text>}
      {/* @ts-ignore-next-line */}
      <TextInput
        left={
          error ? (
            <TextInput.Icon icon="information-outline" iconColor={theme.colors.error} />
          ) : (
            !!iconName && (
              <TextInput.Icon icon={iconName} iconColor={theme.colors.primary} />
            )
          )
        }
        error={!!error}
        {...rest}
      />

      {error && (
        <Text type="p3" style={{ color: theme.colors.error }}>
          {error}
        </Text>
      )}
    </View>
  );
};
