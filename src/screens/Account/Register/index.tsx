// LIBS
import React from 'react';
import { Formik } from 'formik';

// STYLES
import { Button } from 'react-native';
import * as styles from './styles';

// COMPONENTS
import { LinearGradient } from '../../../components/LinearGradient';
// import { Text } from '../../../components/Typography';
import { Input } from '../../../components/Form/Input';

import { schemaLogin } from './functions';
import { color } from '../../../styles';

export const Register = () => (
  <LinearGradient style={{ flex: 1 }} colors={[color['error-200'], color['error-100']]}>
    <styles.Container>
      <Formik
        initialValues={{ email: '', name: '' }}
        validationSchema={schemaLogin}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleSubmit, values, errors }) => (
          <>
            <Input
              label="E-mail"
              onChangeText={handleChange('email')}
              value={values.email}
              error={errors.email}
            />
            <Input
              label="Senha"
              onChangeText={handleChange('name')}
              value={values.name}
              error={errors.name}
            />

            <Button onPress={() => handleSubmit()} title="Submit" />
          </>
        )}
      </Formik>
    </styles.Container>
  </LinearGradient>
);
