import { ThemeProvider } from 'styled-components';

import React from 'react';

import { Router } from './src/routes';
import { theme } from './src/styles/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}
