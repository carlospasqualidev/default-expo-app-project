import { createDrawerNavigator } from '@react-navigation/drawer';

import { Home } from '../screens/Home';

const { Screen, Navigator } = createDrawerNavigator();

export const ClientRoutes = () => (
  <Navigator>
    <Screen name="Home" component={Home} />
  </Navigator>
);
