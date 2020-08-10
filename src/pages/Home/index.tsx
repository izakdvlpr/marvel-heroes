import React from 'react';
import { View, Text, Image } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import PageHeader from '../../components/PageHeader';
import CharactersList from '../../components/CharactersList';

import heroIcon from '../../assets/icons/hero.png';
import villainIcon from '../../assets/icons/villain.png';
import antiheroIcon from '../../assets/icons/antihero.png';
import alienIcon from '../../assets/icons/alien.png';
import humanIcon from '../../assets/icons/human.png';

import styles from './styles';

function Home() {
  return (
    <View style={styles.container}>
      <PageHeader />

      <View style={styles.section}>
        <Text style={styles.welcome}>Bem vindo ao Marvel Heroes</Text>
        <Text style={styles.title}>Escolha o seu personagem</Text>

        <View style={styles.selectCharacter}>
          <BorderlessButton
            style={[
              styles.selectCharacterCircle,
              { backgroundColor: '#005BEA' },
            ]}
          >
            <Image
              source={heroIcon}
              resizeMode="contain"
              style={styles.selectCharacterIcon}
            />
          </BorderlessButton>

          <BorderlessButton
            style={[
              styles.selectCharacterCircle,
              { backgroundColor: '#ED1D24' },
            ]}
          >
            <Image
              source={villainIcon}
              resizeMode="contain"
              style={styles.selectCharacterIcon}
            />
          </BorderlessButton>

          <BorderlessButton
            style={[
              styles.selectCharacterCircle,
              { backgroundColor: '#B224EF' },
            ]}
          >
            <Image
              source={antiheroIcon}
              resizeMode="contain"
              style={styles.selectCharacterIcon}
            />
          </BorderlessButton>

          <BorderlessButton
            style={[
              styles.selectCharacterCircle,
              { backgroundColor: '#0BA360' },
            ]}
          >
            <Image
              source={alienIcon}
              resizeMode="contain"
              style={styles.selectCharacterIcon}
            />
          </BorderlessButton>

          <BorderlessButton
            style={[
              styles.selectCharacterCircle,
              { backgroundColor: '#FF7EB3' },
            ]}
          >
            <Image
              source={humanIcon}
              resizeMode="contain"
              style={styles.selectCharacterIcon}
            />
          </BorderlessButton>
        </View>
      </View>

      <CharactersList />
    </View>
  );
}

export default Home;
