import { StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: -(StatusBar.currentHeight || 0) + 40,
    paddingHorizontal: 20,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    backgroundColor: '#FFFFFF',
  },

  logo: {
    width: 60,
    height: 60,
  },
});

export default styles;
