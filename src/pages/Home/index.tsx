import React from 'react';
import { View, StyleSheet } from 'react-native';

import Header from "../../components/Header";

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header />
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
