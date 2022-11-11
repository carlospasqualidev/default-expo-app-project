/* eslint-disable @typescript-eslint/ban-ts-comment */
// LIBS
import React from 'react';
import { TextInput } from 'react-native-paper';
import { View } from 'react-native';

// TYPES
import { IInput } from './types';

// COMPONENTS
import { Text } from '../../Typography';
import { color } from '../../../styles';

// STYLES

export const Input = ({ label, iconName, error, ...rest }: IInput) => (
  <View>
    {label && <Text type="p2">{label}</Text>}
    {/* @ts-ignore-next-line */}
    <TextInput
      left={
        error ? (
          <TextInput.Icon icon="information-outline" iconColor={color['error-200']} />
        ) : (
          !!iconName && (
            <TextInput.Icon icon={iconName} iconColor={color['primary-700']} />
          )
        )
      }
      error={!!error}
      {...rest}
    />

    {error && (
      <Text type="p3" style={{ color: color['error-200'] }}>
        {error}
      </Text>
    )}
  </View>
);
