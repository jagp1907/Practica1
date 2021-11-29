import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import  Constants  from 'expo-constants';

const Javascript =({navigation}) => {
  
    return (
      <View  style={styles.container}>
          <Image
          style={styles.logo}
          source={{ uri:"https://res.cloudinary.com/teepublic/image/private/s--y_rRiRKy--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_000000,e_outline:48/co_000000,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1539274051/production/designs/3302114_0.jpg" }}
          />
      </View>
  );
}
export default Javascript
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
    height: 230,
  }
});
