import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Bg from './Bg';
import Btn from "./Components/Btn"
import { useFonts } from 'expo-font';
import {bluee,greeen} from "./Components/Constants"

const HomeScreen = (props) => {

  return (
    <Bg >
        <View style={styles.txthead}>
          <View style={{backgroundColor:"white",padding:20,
    justifyContent:"center",
    alignItems:"center",}}>
            <Text style={styles.text}>Petals & C</Text>
            <Btn bgColor={bluee} width={250} textColor={greeen}  btnLabel="Log In" Press={()=>{
              props.navigation.navigate("Login")
            }}/>
            <Text>Or</Text>
            <Btn bgColor={greeen} textColor={bluee} btnLabel="Sign Up"
            Press={()=>{
              props.navigation.navigate("Signup")}}
            />
            </View>
        </View>
    </Bg>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  txthead:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    marginHorizontal:30,
    height:650,
  },
    text:{
        color:"#E0115F",
        fontSize:40,
        paddingVertical:10,
        fontFamily:'serif',
        fontWeight:700
    },
    bg:{
      backgroundColor:"#2D7F9D"
    }
})