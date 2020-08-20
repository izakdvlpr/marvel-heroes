import { StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  },
  
  navigation: {    
    marginHorizontal: 15,
  },
  
  itemContent: {
    marginVertical: 5,
    padding: 15,        
    
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: '#FCFCFC',
    
    borderRadius: 10,
  },
  
  itemIcon: {
    marginRight: 10,
  },
  
  itemText: {
    fontSize: 18,
    fontFamily: 'gilroyMedium',
    
    color: '#313140',
  }    
});

export default styles;
