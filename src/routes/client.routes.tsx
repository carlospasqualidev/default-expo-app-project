import { createDrawerNavigator } from '@react-navigation/drawer';
import { Login } from '../screens/Authentication/Login';

const { Screen, Navigator } = createDrawerNavigator();

export const ClientRoutes = () => (
  <Navigator>
    <Screen name="Login" component={Login} />
  </Navigator>
);
