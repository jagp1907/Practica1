  import React  from 'react'
import { Text, View, StyleSheet,Button, Image } from 'react-native'

const Pantallagit =({navigation}) => {
  
        return (
            <View style={[styles.container]}>
                <Image
          style={styles.logo}
          source={{ uri:"https://i.pinimg.com/originals/30/b1/50/30b150cd489202db131009ac9540cec0.png" }}
          />
          <Text> @jagp1907</Text>
            </View>
        )
}
export default Pantallagit  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  }
  });
  