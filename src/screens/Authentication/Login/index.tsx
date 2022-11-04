// LIBS
import { Formik } from 'formik';

// COMPONENTS
import { Button, Input, LinearGradient } from '../../../components';
import { theme } from '../../../styles/theme';
import * as styles from './styles';

import { schemaLogin } from './functions';

export const Login = () => (
  <LinearGradient
    style={{ flex: 1 }}
    colors={[theme.color.primary, theme.color.primaryD]}
  >
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
    </styles.Container>
  </LinearGradient>
);
