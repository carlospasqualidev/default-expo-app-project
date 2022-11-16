// LIBS
import { Formik } from 'formik';
import { View } from 'react-native';

// COMPONENTS
import { Button, Input, LinearGradient } from '../../../components';

import { schemaLogin } from './functions';
import { useTheme } from '../../../styles';

export const AccountDetails = () => {
  const theme = useTheme();

  return (
    <LinearGradient
      style={{ flex: 1 }}
      colors={[theme.colors.surface, theme.colors.surface]}
    >
      <View style={{ flex: 1 }}>
        <Formik
          initialValues={{ email: '', name: '' }}
          validationSchema={schemaLogin}
          onSubmit={(values) => console.log(values)}
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
                iconName="alphabetical"
                onChangeText={handleChange('name')}
                value={values.name}
                error={errors.name}
              />
              <Button label="Teste" onPress={() => handleSubmit()} />
            </>
          )}
        </Formik>
      </View>
    </LinearGradient>
  );
};
