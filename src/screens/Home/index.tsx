// @ts-nocheck

import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import PageHeader from '../../components/PageHeader';
import CharacterItem from '../../components/CharacterItem';

import data from '../../data';
import icons from '../../data/icons';

import styles from './styles';

const Home = () => {
  const { navigate } = useNavigation();

  const handleNavigateToCharacterList = () => {
    navigate('List');
  };

  return (
    <View style={styles.container}>
      <PageHeader />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.section}>
          <Text style={styles.subTitle}>Bem vindo ao Marvel Heroes</Text>
          <Text style={styles.title}>Escolha o seu personagem</Text>

          <View style={styles.characterSelect}>
            {icons.map(icon => (
              <BorderlessButton
                key={icon.color}
                style={[
                  styles.characterSelectCircle,
                  { backgroundColor: icon.color },
                ]}
              >
                <Image
                  source={icon.image}
                  resizeMode="contain"
                  style={styles.characterSelectIcon}
                />
              </BorderlessButton>
            ))}
          </View>
        </View>

        {Object.keys(data).map(type => (
          <SafeAreaView key={type} style={styles.container}>
            <View style={styles.characterHeader}>
              <Text style={styles.characterTitle}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </Text>
              <TouchableOpacity onPress={() => {}}>
                <Text style={styles.characterLabel}>Ver tudo</Text>
              </TouchableOpacity>
            </View>
            
            <FlatList
              data={data[type]}
              keyExtractor={item => String(item.name)}
              renderItem={({ item }) => (
                <CharacterItem key={item.name} data={item} />
              )}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </SafeAreaView>
        ))}
      </ScrollView>
    </View>
  );
};

export default Home;
