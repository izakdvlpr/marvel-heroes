import { StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: -(StatusBar.currentHeight || 0) + 30
  },
  
  logoArea: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  
  logo: {
    width: 80,
    height: 80,
  }
});

export default styles;
