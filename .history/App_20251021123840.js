import React from 'react'; 
import { Image, StyleSheet, View } from 'react-native'; 
 
export default function App() { 
  return ( 
    <View style={styles.container}> 
      <Image 
        source={require('./assets/emsi.png')} 
        style={styles.logo} 
        resizeMode="contain" 
      /> 
      <Text style={styles.schoolName}>EMSI MAARIF</Text> 
    </View> 
  ); 
} 
 
const styles = StyleSheet.create({ 
  container: { 
    flex: 1,                 
    justifyContent: 'center',  
    alignItems: 'center',      
    backgroundColor: '#f6f7fb', 
  }, 
  logo: { 
    width: 200, 
    height: 200, 
  }, 
}); 