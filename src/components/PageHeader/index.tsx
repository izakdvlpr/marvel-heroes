import React from 'react';
import { View, Image } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';

import marvelLogo from '../../assets/icons/marvel.png';

import styles from './styles';

const PageHeader = () => {
  const navigation = useNavigation();

  const toggleOpenMenuDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  const handleNavigateToSearchPage = () => {
    navigation.navigate('Search');
  };

  return (
    <View style={styles.container}>
      <BorderlessButton onPress={toggleOpenMenuDrawer}>
        <Feather name="menu" size={28} color="black" />
      </BorderlessButton>

      <Image source={marvelLogo} resizeMode="contain" style={styles.logo} />

      <BorderlessButton onPress={handleNavigateToSearchPage}>
        <Feather name="search" size={28} color="black" />
      </BorderlessButton>
    </View>
  );
};

export default PageHeader;
