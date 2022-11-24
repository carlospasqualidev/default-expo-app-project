/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext } from './AuthContext';

import { removeItemStorage, setItemStorage } from '../itemsStorage';
import { Login } from '../../screens';

const { Screen: StackScreen, Navigator: StackNavigator } = createNativeStackNavigator();

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [userLogged, setUserLogged] = useState<any>(null);

  const signin = async ({ email, password }: { email: string; password: string }) => {
    const data = {
      name: 'Carlos Pasquali',
      email,
      password,
    };
    setUserLogged(data);
    await setItemStorage({ key: '@User', data });
  };

  const signout = async () => {
    setUserLogged(null);
    await removeItemStorage({ key: '@User' });
  };

  return (
    <AuthContext.Provider value={{ signout, signin }}>
      {userLogged !== null ? (
        children
      ) : (
        <NavigationContainer>
          <StackNavigator>
            <StackScreen
              name="Login"
              options={{
                headerShown: false,
              }}
              component={Login}
            />
          </StackNavigator>
        </NavigationContainer>
      )}
    </AuthContext.Provider>
  );
};
