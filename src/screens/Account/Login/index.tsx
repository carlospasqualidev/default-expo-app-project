/* eslint-disable no-console */
// LIBS
import { View, StyleSheet } from 'react-native';
import { Formik } from 'formik';

// COMPONENTS
import { Text, Input, Button } from '../../../components';
import { sizes, useTheme } from '../../../styles';
import { schemaLogin } from './functions';
import { setItemStorage } from '../../../hooks/itemsStorage';
import { useAuthContext } from '../../../hooks/auth/UseAuthContext';

export const Login = () => {
  const theme = useTheme();
  const { signin } = useAuthContext();

  // #region STYLES
  const styles = StyleSheet.create({
    background: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: theme.colors.background,
      padding: sizes['sm-16'],
    },

    header: {
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: sizes['sm-16'],
    },
    imageContainer: {
      alignItems: 'center',
      flexDirection: 'row',
    },
    image: {
      width: 100,
      height: 100,
      borderRadius: 100,
      marginBottom: sizes['sm-16'],
      marginRight: sizes['sm-16'],
    },

    buttonContainer: {
      alignItems: 'center',
    },
  });
  // #endregion

  return (
    <View style={styles.background}>
      <View>
        <View style={styles.header}>
          <Text type="h3">Veglivery💚</Text>
        </View>

        <Formik
          initialValues={{
            email: 'carlos.pasquali.dev@gmail.com',
            password: '123123123',
          }}
          validationSchema={schemaLogin}
          onSubmit={async (values) => {
            if (
              values.password === '123123123' &&
              values.email === 'carlos.pasquali.dev@gmail.com'
            ) {
              const data = {
                name: 'Carlos Pasquali',
                email: values.email,
                password: values.password,
              };
              await setItemStorage({ key: '@User', data });
              signin({ email: data.email, password: data.password });
            } else {
              console.log('Erro na autenticacao');
            }
          }}
        >
          {({ handleChange, handleSubmit, values, errors }) => (
            <>
              <Input
                label="E-mail"
                iconName="email-outline"
                onChangeText={handleChange('email')}
                value={values.email}
                error={errors.email}
              />
              <Input
                label="Senha"
                secureTextEntry
                iconName="alphabetical"
                onChangeText={handleChange('password')}
                value={values.password}
                error={errors.password}
              />
              <View style={styles.buttonContainer}>
                <Button label="Entrar" onPress={handleSubmit} />
              </View>
            </>
          )}
        </Formik>
      </View>
    </View>
  );
};
