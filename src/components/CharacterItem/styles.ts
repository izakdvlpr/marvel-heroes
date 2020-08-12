import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {     
    marginVertical: 10,   
    marginHorizontal: 10,
  },

  image: {    
    width: 170,
    height: 270,      
    
    padding: 25,    
    
    justifyContent: "flex-end",
    
    borderRadius: 50,
  },
  
  alterEgo: {
    fontFamily: "gilroyMedium",
    fontSize: 10,
    
    color: "#FFF",
  },
  
  name: {
    fontFamily: "gilroyHeavy",
    fontSize: 20,
    
    color: "#FFF",    
  }
});

export default styles;
