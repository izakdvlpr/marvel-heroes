import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';

import styles from './styles';

const Search: React.FC = () => {
  const navigation = useNavigation();
  
  const handleToHomePage = () => {
    navigation.goBack();
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <BorderlessButton onPress={handleToHomePage}>
          <Ionicons name="ios-arrow-round-back" size={38} color="black" />
        </BorderlessButton>

        <View style={styles.searchForm}>
          <TextInput
            style={styles.input}
            placeholder="Homem Aranha"
            placeholderTextColor="#C1BCCC"
            textContentType="name"
          />
          <TouchableOpacity>
            <View style={styles.submitButton}>
              <Feather name="search" size={20} color="white" />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.characterAlert}>
        <Text style={styles.characterAlertText}>
          Nenhum personagem encontrado para sua pesquisa
        </Text>
      </View>
    </View>
  );
};

export default Search;
