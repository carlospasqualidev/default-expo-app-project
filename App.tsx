// LIBS
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';

// ROUTER
import { Router } from './src/routes';

// THEME
import { paperTheme } from './src/styles/paperTheme';

export default function App() {
  return (
    <PaperProvider theme={paperTheme}>
      <Router />
    </PaperProvider>
  );
}
