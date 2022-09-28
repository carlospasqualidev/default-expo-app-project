// LIBS
import { Formik } from 'formik';
import React from 'react';
import { Button } from 'react-native';

import { Input } from '../../Components/Form/Input';
import { Container, Text } from './styles';

export const Home = () => (
  <Container>
    <Text>
      <Formik initialValues={{ email: '' }} onSubmit={(values) => console.log(values)}>
        {({ handleChange, handleSubmit, values }) => (
          <>
            <Input
              iconName="Father"
              onChangeText={handleChange('email')}
              value={values.email}
            />

            <Button onPress={() => handleSubmit} title="Submit" />
          </>
        )}
      </Formik>
    </Text>
  </Container>
);

// Formik x React Native example
