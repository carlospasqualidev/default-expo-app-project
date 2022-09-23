import { NavigationContainer } from '@react-navigation/native';

import { ClientRoutes } from './client.routes';

export const Router = () => (
  <NavigationContainer>
    <ClientRoutes />
  </NavigationContainer>
);
