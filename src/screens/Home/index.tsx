// LIBS
import React from 'react';
// import { Formik } from 'formik';
// import { Button } from 'react-native';

<<<<<<< HEAD
// import { Input } from '../../Components/Form/Input';
=======
import { Input } from '../../Components/Form/Input';
>>>>>>> 024ae96ece75f6f5fc6dfb4c1ce4e60505294b20
import { Container } from './styles';

export const Home = () => (
  <Container>
<<<<<<< HEAD
    {/* <Formik initialValues={{ email: '' }} onSubmit={(values) => console.log(values)}>
        {({ handleChange, handleSubmit, values }) => (
          <>
            <Input onChangeText={handleChange('email')} value={values.email} />

            <Button onPress={() => handleSubmit()} title="Submit" />
          </>
        )}
      </Formik> */}
=======
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
>>>>>>> 024ae96ece75f6f5fc6dfb4c1ce4e60505294b20
  </Container>
);

// Formik x React Native example
