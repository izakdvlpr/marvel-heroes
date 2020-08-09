import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { AppLoading } from 'expo';

import { useFonts } from 'expo-font';

import {
  gilroyBold,
  gilroyHeavy,
  gilroyMedium,
  gilroyRegular,
  gilroySemibold,
} from './src/assets/fonts';

import AppStack from './src/routes/AppStack';

export default function App() {
  const [fontsLoaded] = useFonts({
    gilroyBold,
    gilroyHeavy,
    gilroyMedium,
    gilroyRegular,
    gilroySemibold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <AppStack />
        <StatusBar style="dark" />
      </>
    );
  }
}
