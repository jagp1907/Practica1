import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import  Constants  from 'expo-constants';

const Pantallainicio =({navigation}) => {
  
    return (
      <View style={styles.container}>
        <Text>BIENVENID@</Text>
          <Image
          style={styles.logo}
          source={{ uri:"https://static.elmundo.sv/wp-content/uploads/2020/03/Captura-de-pantalla-2020-03-18-a-las-11.43.39.png" }}
          />
      </View>
  );
}
export default Pantallainicio
const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'cyan',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 230,
    height: 230,
  },
});

