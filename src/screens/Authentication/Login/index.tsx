// LIBS
import React from 'react';
import { Formik } from 'formik';

// STYLES
import { Button } from 'react-native';
import * as styles from './styles';

// COMPONENTS
import { LinearGradient } from '../../../components/LinearGradient';
import { Text } from '../../../components/Typography';
import { Input } from '../../../components/Form/Input';

export const Login = () => (
  <LinearGradient colors={['red', 'blue']}>
    <styles.Container>
      <Formik
        initialValues={{ email: '', name: '' }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleSubmit, values }) => (
          <>
            <Input
              label="E-mail"
              onChangeText={handleChange('email')}
              value={values.email}
            />
            <Input
              label="Senha"
              onChangeText={handleChange('name')}
              value={values.name}
            />

            <Button onPress={() => handleSubmit()} title="Submit" />
          </>
        )}
      </Formik>

      <Text type="H1" CSSProps={{ backgroundColor: 'blue' }}>
        Text
      </Text>
      <Text type="H2">Text</Text>
      <Text type="H3">Text</Text>
      <Text type="H4">Text</Text>
      <Text type="H5">Text</Text>
      <Text type="H6">Text</Text>

      <Text type="P1">Text</Text>
      <Text type="P2">Text</Text>
      <Text type="P3">Text</Text>
      <Text type="P4">Text</Text>
      <Text type="P5">Text</Text>
      <Text type="P6">Text</Text>
    </styles.Container>
  </LinearGradient>
);
