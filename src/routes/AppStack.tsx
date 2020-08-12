import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import Details from '../screens/Details';
import List from '../screens/List';

import MenuDrawer from './MenuDrawer';

const { Navigator, Screen } = createStackNavigator();

const AppStack = () => (
  <NavigationContainer>
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
      <Screen name="Details" component={Details} />
      <Screen name="List" component={List} />
    </Navigator>
  </NavigationContainer>
);

export default AppStack;
