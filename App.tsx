// LIBS
import React from 'react';
import { StatusBar } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';

// ROUTER
import { Router } from './src/routes';

// THEME
import { theme } from './src/styles/theme';

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <StatusBar backgroundColor="green" barStyle="default" />
      <Router />
    </PaperProvider>
  );
}
