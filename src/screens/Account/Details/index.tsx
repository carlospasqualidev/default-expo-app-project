/* eslint-disable no-console */
// LIBS
import { View, StyleSheet, Image } from 'react-native';
import { Formik } from 'formik';

// COMPONENTS
import { Text, Input, IconButton } from '../../../components';
import { sizes, useTheme } from '../../../styles';
import { schemaLogin } from './functions';
import { useAuthContext } from '../../../hooks/auth/UseAuthContext';

export const AccountDetails = () => {
  const theme = useTheme();
  const { signout } = useAuthContext();

  // #region STYLES
  const styles = StyleSheet.create({
    background: {
      flex: 1,
      backgroundColor: theme.colors.background,
      padding: sizes['sm-16'],
    },
    header: {
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
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  });
  // #endregion

  return (
    <View style={styles.background}>
      <Text type="h6" style={styles.header}>
        Perfil
      </Text>

      <View style={styles.imageContainer}>
        <View>
          <Text type="p2" style={{ marginBottom: sizes['sm-4'] }}>
            Foto
          </Text>
          <Image
            style={styles.image}
            source={{
              uri: 'https://images.adsttc.com/media/images/5ab9/3634/f197/cc6e/5400/00b7/slideshow/0376.jpg?1522087455',
            }}
          />
        </View>
        <Text type="p2" style={{ marginBottom: sizes['sm-4'] }}>
          tamanho maximo de 5 MB.
        </Text>
      </View>

      <Formik
        initialValues={{
          email: 'carlos.pasquali.dev@gmail.com',
          name: 'Carlos Pasquali',
          password: '*******',
        }}
        validationSchema={schemaLogin}
        onSubmit={async (values) => {
          console.log(values);
        }}
      >
        {({ handleChange, handleSubmit, values, errors }) => (
          <>
            <Input
              label="Nome"
              iconName="account-outline"
              onChangeText={handleChange('name')}
              value={values.name}
              error={errors.name}
            />
            <Input
              label="E-mail"
              iconName="email-outline"
              onChangeText={handleChange('email')}
              value={values.email}
              error={errors.email}
            />
            <Input
              secureTextEntry
              label="Senha"
              iconName="alphabetical"
              onChangeText={handleChange('password')}
              value={values.password}
              error={errors.password}
            />
            <View style={styles.buttonContainer}>
              <IconButton
                containerColor={theme.colors.error}
                label="Sair"
                onPress={async () => {
                  signout();
                }}
                icon="exit-run"
              />
              <IconButton
                label="Editar"
                onPress={() => handleSubmit}
                icon="book-edit-outline"
              />
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};
