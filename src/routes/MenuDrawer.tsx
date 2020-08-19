import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CustomDrawer from '../components/CustomDrawer';

import Home from '../screens/Home';

const { Navigator, Screen } = createDrawerNavigator();

const MenuDrawer = () => (
  <Navigator initialRouteName="Home" drawerContent={CustomDrawer}>
    <Screen name="Home" component={Home} />
  </Navigator>
);

export default MenuDrawer;
