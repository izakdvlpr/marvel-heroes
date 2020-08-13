import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

export interface CharacterProps {
  name: string;
  alterEgo: string;
  imagePath: ImageSourcePropType;
  biography: string;
  caracteristics: {
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
  abilities: {
    'força': number;
    'Inteligência': number;
    'Agilidade': number;
    'Resistência': number;
    'Velocidade': number;
  };
  movies: ImageSourcePropType[];
}

interface Character {
  data: CharacterProps;
}

const CharacterItem: React.FC<Character> = ({ data }) => {
  const { navigate } = useNavigation();

  const handleNavigateToDetails = () => {
    navigate('Details', {
      character: data,
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleNavigateToDetails}>
        <ImageBackground
          source={data.imagePath}
          style={styles.image}
          imageStyle={{ borderRadius: 25 }}
        >
          <Text style={styles.alterEgo}>{data.alterEgo}</Text>
          <Text style={styles.name}>{data.name}</Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

export default CharacterItem;
