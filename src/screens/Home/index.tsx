import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/icons/marvel.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
  },
});

export default Home;
