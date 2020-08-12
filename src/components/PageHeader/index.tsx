import React from 'react';
import { View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';

import marvelLogo from '../../assets/icons/marvel.png';

import styles from './styles';

const PageHeader = () => {
  const { navigate } = useNavigation();

  const toggleMenuDrawer = () => {};

  return (
    <View style={styles.container}>
      <BorderlessButton onPress={toggleMenuDrawer}>
        <Feather name="menu" size={24} color="black" />
      </BorderlessButton>

      <Image source={marvelLogo} resizeMode="contain" style={styles.logo} />

      <BorderlessButton>
        <Feather name="search" size={24} color="black" />
      </BorderlessButton>
    </View>
  );
};

export default PageHeader;
