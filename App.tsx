/* eslint-disable camelcase */

// LIBS
// import React from 'react';
// import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';

// // FONTS
// import {
//   Inter_400Regular,
//   Inter_500Medium,
//   Inter_600SemiBold,
//   Inter_700Bold,
//   useFonts,
// } from '@expo-google-fonts/inter';

// // ROUTER

// // STYLES

// export default function App() {
//   const [fontsLoaded] = useFonts({
//     Inter_400Regular,
//     Inter_500Medium,
//     Inter_600SemiBold,
//     Inter_700Bold,
//   });

//   if (!fontsLoaded) {
//     return <AppLoading />;
//   }

//   return (
//     <ThemeProvider theme={theme}>
//       <Router />
//     </ThemeProvider>
//   );
// }

import React, { useEffect, useState } from 'react';
import Entypo from '@expo/vector-icons/Entypo';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { Router } from './src/routes';
import { theme } from './src/styles/theme';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync(Entypo.font);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  if (!appIsReady) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}
