/* eslint-disable consistent-return */
/* eslint-disable no-plusplus */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext } from './AuthContext';

import { removeItemStorage, setItemStorage } from '../itemsStorage';
import { Login } from '../../screens';
import { IPlaces } from '../../screens/Map/types';

const { Screen: StackScreen, Navigator: StackNavigator } = createNativeStackNavigator();

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [userLogged, setUserLogged] = useState<any>(null);

  const [locals, setLocals] = useState<IPlaces[]>([
    {
      id: 1,
      image:
        'https://media.istockphoto.com/id/1152435151/pt/foto/vegan-sandwich-with-chickpea-patty-avocado-cucumber-and-greens-in-rye-bread-in-childrens-hands.jpg?s=612x612&w=0&k=20&c=RPfQeFpx1R_bDpGJksiRk6dQZE2Ab_cUJJFum6v_990=',
      name: 'mamma veg',
      stars: 3,
      description:
        'Aqui no Govinda você ganha 10% de desconto no combo* na Segunda Sem Carne. Vem com a gente!',
      latitude: -28.6583,
      longitude: -49.3704,
      isFavorite: true,
    },
    {
      id: 2,
      image:
        'https://images.adsttc.com/media/images/5ab9/3634/f197/cc6e/5400/00b7/slideshow/0376.jpg?1522087455',
      name: 'Le house',
      stars: 4,
      description:
        'Nossos pratos não contêm nenhum tipo de alimento de origem animal, construímos sabores com uma alimentação Plant based, o modelo alimentar que mais aproxima pessoas da natureza com harmonia e respeito.',
      latitude: -28.667474,
      longitude: -49.37425,
      isFavorite: false,
    },
    {
      id: 3,
      image: 'https://static.significados.com.br/foto/verduras-e-legumes-0.jpg',
      name: 'Jacan saladas',
      stars: 5,
      description:
        'A #SegundaSemCarne é um dia para você experimentar novos sabores, visando reduzir o consumo de carne animal e ajudando a preservar o meio ambiente. ',
      latitude: -28.678425,
      longitude: -49.374117,
      isFavorite: false,
    },
  ]);

  const setFavoriteLocal = ({ place }: { place: IPlaces }) => {
    const newLocals = locals;

    for (let i = 0; i < newLocals.length; i++) {
      if (place.id === locals[i].id) {
        newLocals[i] = { ...locals[i], isFavorite: !locals[i].isFavorite };
      }
    }

    setLocals(newLocals);
  };

  const loadingLocals = () => locals;

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
    <AuthContext.Provider value={{ signout, signin, loadingLocals, setFavoriteLocal }}>
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
