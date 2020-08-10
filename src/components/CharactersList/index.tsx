import React from 'react';
import { View, SafeAreaView, FlatList } from 'react-native';

import styles from './styles';
import CharacterItem from '../CharacterItem';

import data from '../../data';

function CharactersList() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.heroesList}>
        <FlatList
          data={data.heroes}
          horizontal
          renderItem={() => (
            <CharacterItem />
          )}
        />
        <CharacterItem />        
      </SafeAreaView>
    </View>
  );
}

export default CharactersList;
