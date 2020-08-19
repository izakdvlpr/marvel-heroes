import React from 'react';
import { View, Text, Image } from 'react-native';
import {
  DrawerItemList,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';

import marvelLogo from '../../assets/icons/marvel.png';

import styles from './styles';

const CustomDrawer = (props: DrawerContentComponentProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoArea}>
        <Image source={marvelLogo} resizeMode="contain" style={styles.logo} />
      </View>

      <DrawerItemList {...props} />
    </View>
  );
};

export default CustomDrawer;
