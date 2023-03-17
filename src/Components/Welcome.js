import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native';
import Bg from '../Bg';

const Welcome = () => {
  return (
    <Bg>
    <View style={styles.container}>
      <Text style={styles.txt}>Welcome to Petals & C</Text>
    </View>
    </Bg>
  )
}

export default Welcome;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        height:700,
        marginHorizontal:50,
        padding:10,
    },
    txt:{
        color:"#E0115F",
        fontSize:40,
        paddingVertical:10,
        fontFamily:'serif',
        fontWeight:700,
        textAlign:"center"
    }
})