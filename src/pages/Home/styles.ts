import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {},

  section: {
    marginTop: 8,
    margin: 20,
  },

  welcome: {
    fontFamily: 'gilroyMedium',
    fontSize: 16,
    color: '#B7B7C8',
  },

  title: {
    fontFamily: 'gilroyHeavy',
    fontSize: 32,
    color: '#313140',
  },

  selectCharacter: {
    marginTop: 22,    
    marginBottom: 22,
    
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  selectCharacterCircle: {
    margin: 5,
    padding: 9,  
    
    borderRadius: 50
  },

  selectCharacterIcon: {
    width: 32,
    height: 32,
  },
});

export default styles;
