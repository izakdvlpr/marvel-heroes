import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Details from '../screens/Details';
import List from '../screens/List';
import Search from '../screens/Search';

import MenuDrawer from './MenuDrawer';

const { Navigator, Screen } = createStackNavigator();

const AppStack = () => (
  <NavigationContainer>
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Menu" component={MenuDrawer} />
      <Screen name="Details" component={Details} />
      <Screen name="List" component={List} />
      <Screen name="Search" component={Search} />
    </Navigator>
  </NavigationContainer>
);

export default AppStack;
