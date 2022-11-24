/* eslint-disable no-console */
import AsyncStorage from '@react-native-async-storage/async-storage';

export const setItemStorage = async ({ key, data }: { key: string; data: any }) => {
  const jsonValue = JSON.stringify(data);

  await AsyncStorage.setItem(key, jsonValue);
  console.log('Dados salvos com Async storage');
};

export const getItemStorage = async ({ key }: { key: string }) => {
  console.log('Dados recuperados com Async storage');
  const data = await AsyncStorage.getItem(key);
  return data;
};

export const removeItemStorage = async ({ key }: { key: string }) => {
  console.log('Dados excluidos com Async storage');
  const data = await AsyncStorage.removeItem(key);
  return data;
};
