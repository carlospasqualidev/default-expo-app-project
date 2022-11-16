// LIBS
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { useThemeScheme } from './src/hooks';

// ROUTER
import { Router } from './src/routes';

export default function App() {
  return (
    <PaperProvider theme={useThemeScheme()}>
      <Router />
    </PaperProvider>
  );
}
