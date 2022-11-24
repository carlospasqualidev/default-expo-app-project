// LIBS

import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { useThemeScheme } from './src/hooks';
import { AuthProvider } from './src/hooks/auth/AuthProvider';

// ROUTER
import { Router } from './src/routes';

export default function App() {
  return (
    <PaperProvider theme={useThemeScheme()}>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </PaperProvider>
  );
}
