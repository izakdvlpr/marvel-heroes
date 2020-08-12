import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity
} from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import PageHeader from '../../components/PageHeader';
import CharacterItem from '../../components/CharacterItem';

import heroIcon from '../../assets/icons/hero.png';
import villainIcon from '../../assets/icons/villain.png';
import antiheroIcon from '../../assets/icons/antihero.png';
import alienIcon from '../../assets/icons/alien.png';
import humanIcon from '../../assets/icons/human.png';

import data from '../../data';

import styles from './styles';

const Home = () => {
  const { navigate } = useNavigation();

  
  const handleNavigateToCharacterList = () => {
    navigate('List');
  }
  
  return (
    <View style={styles.container}>
      <PageHeader />

      <ScrollView>
        <View style={styles.section}>
          <Text style={styles.subTitle}>Bem vindo ao Marvel Heroes</Text>
          <Text style={styles.title}>Escolha o seu personagem</Text>

          <View style={styles.characterSelect}>
            <BorderlessButton
              style={[
                styles.characterSelectCircle,
                { backgroundColor: '#005BEA' },
              ]}
            >
              <Image
                source={heroIcon}
                resizeMode="contain"
                style={styles.characterSelectIcon}
              />
            </BorderlessButton>

            <BorderlessButton
              style={[
                styles.characterSelectCircle,
                { backgroundColor: '#ED1D24' },
              ]}
            >
              <Image
                source={villainIcon}
                resizeMode="contain"
                style={styles.characterSelectIcon}
              />
            </BorderlessButton>

            <BorderlessButton
              style={[
                styles.characterSelectCircle,
                { backgroundColor: '#B224EF' },
              ]}
            >
              <Image
                source={antiheroIcon}
                resizeMode="contain"
                style={styles.characterSelectIcon}
              />
            </BorderlessButton>

            <BorderlessButton
              style={[
                styles.characterSelectCircle,
                { backgroundColor: '#0BA360' },
              ]}
            >
              <Image
                source={alienIcon}
                resizeMode="contain"
                style={styles.characterSelectIcon}
              />
            </BorderlessButton>

            <BorderlessButton
              style={[
                styles.characterSelectCircle,
                { backgroundColor: '#FF7EB3' },
              ]}
            >
              <Image
                source={humanIcon}
                resizeMode="contain"
                style={styles.characterSelectIcon}
              />
            </BorderlessButton>
          </View>
        </View>

        {Object.keys(data).map(type => (
          <SafeAreaView key={type} style={styles.container}>
            <View style={styles.characterHeader}>
              <Text style={styles.characterTitle}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </Text>
              <TouchableOpacity onPress={handleNavigateToCharacterList}>
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
            />
          </SafeAreaView>
        ))}
      </ScrollView>
    </View>
  );
}

export default Home;
