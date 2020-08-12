import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  section: {
    margin: 20, 
    marginTop: 8
  },

  subTitle: {
    fontFamily: 'gilroyMedium',
    fontSize: 16,
    
    color: '#B7B7C8',
  },

  title: {
    fontFamily: 'gilroyHeavy',
    fontSize: 32,
    
    color: '#313140',
  },

  characterSelect: {
    marginTop: 15,
        
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  characterSelectCircle: {    
    width: 50,
    height: 50,
    
    margin: 5,
    padding: 10,    

    borderRadius: 50,
  },

  characterSelectIcon: {
    width: 30,
    height: 30,
  },
  
  characterContainer: {
    flex: 1,
  },
  
  characterHeader: {
    marginHorizontal: 20,
    marginVertical: 10,
    
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  
  characterTitle: {
    fontFamily: 'gilroyBold',
    fontSize: 18,
    color: '#F2264B',
  },
  
  characterLabel: {
    fontFamily: 'gilroyMedium',
    fontSize: 14,
    color: '#B7B7C8',
  }  
});

export default styles;
