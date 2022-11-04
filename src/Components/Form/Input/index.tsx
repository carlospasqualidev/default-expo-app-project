/* eslint-disable @typescript-eslint/ban-ts-comment */
// LIBS
import React from 'react';
import { TextInput } from 'react-native-paper';
import { View } from 'react-native';

// TYPES
import { IInput } from './types';

// COMPONENTS
import { Text } from '../../Typography';

// STYLES
import { paperTheme } from '../../../styles/paperTheme';

export const Input = ({ label, iconName, error, ...rest }: IInput) => (
  <View>
    {label && <Text type="p2">{label}</Text>}
    {/* @ts-ignore-next-line */}
    <TextInput
      left={
        error ? (
          <TextInput.Icon
            icon="information-outline"
            iconColor={paperTheme.colors.error}
          />
        ) : (
          !!iconName && (
            <TextInput.Icon icon={iconName} iconColor={paperTheme.colors.primary} />
          )
        )
      }
      error={!!error}
      {...rest}
    />

    {error && (
      <Text type="p3" style={{ color: paperTheme.colors.error }}>
        {error}
      </Text>
    )}
  </View>
);
