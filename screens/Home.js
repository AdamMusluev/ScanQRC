import { View, Button, StyleSheet } from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native'

const Home = () => {
    const navigation = useNavigation();


  return (
    <View>
      <Button title="Scan" onPress={() => navigation.navigate('Scanner')} />
    </View>
  )
}
export default Home;

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})