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
import { theme } from '../../../styles/theme';

import { schemaLogin } from './functions';

export const Register = () => (
  <LinearGradient style={{ flex: 1 }} colors={[theme.color.danger, theme.color.dangerL]}>
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
