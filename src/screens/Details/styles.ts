import { StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },

  image: {
    height: 500,
  },

  gradient: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-end',
  },

  backIcon: {
    position: 'absolute',
    top: -(StatusBar.currentHeight || 0) + 60,
    left: 20,
  },

  content: {
    marginBottom: 15,
  },

  alterEgo: {
    fontFamily: 'gilroyMedium',
    fontSize: 16,

    color: '#FFF',
  },

  name: {
    fontFamily: 'gilroyHeavy',
    fontSize: 40,

    color: '#FFF',
  },

  caracteristics: {
    marginTop: 5,
    marginHorizontal: 5,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  caracteristicsIcon: {
    flexDirection: 'column',
    alignItems: 'center',
  },

  caracteristicsDescription: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
  },

  information: {
    paddingHorizontal: 20,
    paddingVertical: 5,
  },

  description: {
    color: '#FFF',
  },
  
  informationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 20,
    marginBottom: 15,
  },
  
  abilitiesContainer: {
    marginBottom: 8,
  },

  abilitiesRow: {    
    flexDirection: 'column',
  },  

  abilitiesLabel: {
    marginBottom: 15,
    
    fontFamily: 'gilroyRegular',
    fontSize: 12,

    color: '#FFF',
  },
  
  abilitiesValue: {    
    marginBottom: 10,
    
    width: "100%",
    height: 9,
    
    flexDirection: "row",
    
    position: "relative",
    
    backgroundColor: "rgba(255, 255, 255, 0.6)"
  },

  movieImage: {
    width: 140,
    height: 200,
    marginRight: 10,
    
    borderRadius: 20,    
  },
});

export default styles;
