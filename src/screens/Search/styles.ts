import { StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({
  container: {        
    flex: 1,        
    backgroundColor: "#FFFFFF"
  },
  
  header: {
    paddingTop: -(StatusBar.currentHeight || 0) + 60,
    paddingBottom: 20,
    paddingHorizontal: 20,    
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",    
    backgroundColor: "#FFF",
  },
  
  searchForm: {
    flexDirection: "row",
  },
  
  input: {
    height: 40, 
    width: 200,   
    paddingHorizontal: 16,    
    justifyContent: "center", 
    marginRight: 9,       
    borderRadius: 8,    
    backgroundColor: "#F8F8F8",
  },
  
  submitButton: {
    height: 40,
    width: 40,
    padding: 5,    
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    backgroundColor: "#0BA360"
  },
  
  characterAlert: {    
    marginHorizontal: 20,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  
  characterAlertText: {
    fontFamily: 'gilroyMedium',
    fontSize: 20,    
    color: '#B7B7C8',    
    textAlign: "center"
  }
});

export default styles;
