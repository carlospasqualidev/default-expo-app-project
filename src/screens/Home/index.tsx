// LIBS
import React from 'react';
import { Formik } from 'formik';
import { Button } from 'react-native';

import { Input } from '../../Components/Form/Input';
import { Container } from './styles';

export const Home = () => (
  <Container>
    <Formik
      initialValues={{ email: '', name: '' }}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleChange, handleSubmit, values }) => (
        <>
          <Input onChangeText={handleChange('email')} value={values.email} />
          <Input onChangeText={handleChange('name')} value={values.name} />

          <Button onPress={() => handleSubmit()} title="Submit" />
        </>
      )}
    </Formik>
  </Container>
);

// Formik x React Native example
