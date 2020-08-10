import React from 'react';
import { View, Text, ImageBackground } from 'react-native';

import backgroundImage from '../../assets/chars/spider-man.png';

import styles from './styles';

export interface CharacterProps {
  name?: string;
  alterEgo?: string;
  imagePath?: string;
  biography?: string;
  caracteristics?: {
    birth: string;
    weight: {
      value: number;
      unity: string;
    };
    height: {
      value: number;
      unity: string;
    };
    universe: string;
  };
  abilities?: {
    force: 70;
    intelligence: 65;
    agility: 90;
    endurance: 60;
    velocity: 80;
  };
  movies?: string[];
}

const CharacterItem: React.FC<CharacterProps> = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ImageBackground
          source={backgroundImage}
          style={styles.image}
          imageStyle={{ borderRadius: 25 }}
        >                  
          <Text style={styles.alterEgo}>Peter Parker</Text>
          <Text style={styles.name}>Homem Aranha</Text>
        </ImageBackground>                
      </View>
    </View>
  );
};

export default CharacterItem;
