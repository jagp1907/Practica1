import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import  Constants  from 'expo-constants';

const Reactf =({navigation}) => {
  
    return (
      <View  style={styles.container}>
          <Image
          style={styles.logo}
          source={{ uri:"https://sc04.alicdn.com/kf/U0721a48732814105aae97d2245765dd2a.png" }}
          />
      </View>
  );
}
export default Reactf
const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Constants.statusBarHeight
  },
  logo: {
    width: 230,
    height: 200,
  }
});
