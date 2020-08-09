import React from 'react';
import { View, Text } from 'react-native';

import PageHeader from '../../components/PageHeader';

import styles from './styles';

function Home() {
  return (
    <View style={styles.container}>
      <PageHeader />
      
      <View style={styles.section}>
        <Text style={styles.welcome}>Bem vindo ao Marvel Heroes</Text>
        <Text style={styles.title}>Escolha o seu personagem</Text>
      </View>
    </View>
  );
}

export default Home;
