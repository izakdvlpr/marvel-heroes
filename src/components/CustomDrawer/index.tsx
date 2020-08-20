import React from 'react';
import { View, Image } from 'react-native';

import marvelLogo from '../../assets/icons/marvel.png';

import styles from './styles';

const CustomDrawer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoArea}>
        <Image source={marvelLogo} resizeMode="contain" style={styles.logo} />
      </View>
    </View>
  );
};

export default CustomDrawer;
