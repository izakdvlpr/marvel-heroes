// @ts-nocheck

import React from 'react';
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

import { CharacterProps } from '../../components/CharacterItem';

import styles from './styles';
import { FlatList } from 'react-native-gesture-handler';

const Details = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const character: CharacterProps = route.params.character;

  const handleToMainPage = () => {
    navigation.navigate('Home');
  };

  const caracteristicIcon: {
    birth: ImageSourcePropType;
    height: ImageSourcePropType;
    weight: ImageSourcePropType;
    universe: ImageSourcePropType;
  } = {
    birth: require('../../assets/icons/age.png'),
    height: require('../../assets/icons/height.png'),
    weight: require('../../assets/icons/weight.png'),
    universe: require('../../assets/icons/universe.png'),
  };

  return (
    <>
      <StatusBar style="light" />

      <ScrollView style={styles.container}>
        <ImageBackground source={character.imagePath} style={styles.image}>
          <LinearGradient
            colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0)', 'rgb(0, 0, 0)']}
            style={styles.gradient}
          >
            <TouchableOpacity
              onPress={handleToMainPage}
              style={styles.backIcon}
            >
              <Ionicons name="ios-arrow-round-back" size={40} color="white" />
            </TouchableOpacity>

            <View style={styles.content}>
              <Text style={styles.alterEgo}>{character.alterEgo}</Text>
              <Text style={styles.name}>{character.name}</Text>
            </View>

            <View style={styles.caracteristics}>
              {Object.keys(character.caracteristics).map((caracteristic, index) => (
                <View key={index} style={styles.caracteristicsIcon}>
                  <Image source={caracteristicIcon[caracteristic]} />
                  <Text style={styles.caracteristicsDescription}>
                    {typeof character.caracteristics[caracteristic] !== 'object'
                      ? caracteristic === 'birth'
                        ? 2020 -
                          character.caracteristics[caracteristic] +
                          ' anos'
                        : character.caracteristics[caracteristic]
                      : character.caracteristics[caracteristic]['value'] +
                        (caracteristic === 'weight' ? 'kg' : 'm')}
                  </Text>
                </View>
              ))}
            </View>
          </LinearGradient>
        </ImageBackground>

        <View style={styles.information}>
          <Text style={styles.description}>{character.biography}</Text>

          <Text style={styles.informationTitle}>Habilidades</Text>

          <View style={styles.abilitiesContainer}>
            {Object.keys(character.abilities).map((abilitie, index) => (
              <View key={index} style={styles.abilitiesRow}>
                <Text style={styles.abilitiesLabel}>
                  {abilitie.charAt(0).toUpperCase() + abilitie.slice(1)}
                </Text>
                <View style={styles.abilitiesValue}>
                  <View
                    style={{
                      height: 9,
                      width: `${character.abilities[abilitie]}%`,
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      backgroundColor: '#FFF',
                    }}
                  />
                </View>
              </View>
            ))}
          </View>

          <Text style={styles.informationTitle}>Filmes</Text>

          <FlatList
            data={character.movies}
            keyExtractor={(_, key) => String(key)}
            renderItem={(props, key) => (
              <Image key={key} source={props.item} style={styles.movieImage} />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default Details;
