import React from 'react';
import { View, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';

import marvelLogo from '../../assets/icons/marvel.png';

import styles from './styles';

function PageHeader() {
  return (
    <View style={styles.container}>
      <BorderlessButton>
        <Feather name="menu" size={24} color="black" />
      </BorderlessButton>      
      
      <Image source={marvelLogo} resizeMode='contain' style={styles.logo}/>
      
      <BorderlessButton>
        <Feather name="search" size={24} color="black" />
      </BorderlessButton>       
    </View>
  );
};

export default PageHeader;
