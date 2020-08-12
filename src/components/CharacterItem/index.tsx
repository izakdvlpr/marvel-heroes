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

interface CharacterProps {
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
    force: number;
    intelligence: number;
    agility: number;
    endurance: number;
    velocity: number;
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
      data,
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
