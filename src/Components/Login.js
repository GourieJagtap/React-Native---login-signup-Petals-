import { View, Text, Touchable, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import Bg from '../Bg'
import { StyleSheet } from 'react-native'
import Textbx from './Textbx'
import { bluee, darkgreen } from './Constants'
import Btn from "./Btn"
import { TouchableOpacity } from 'react-native-gesture-handler'

const Login = (props) => {
  return (
    <Bg>
      <View style={styles.container}>
      <KeyboardAvoidingView style={{flex:1}}
      behavior="position" enabled={true} keyboardVerticalOffset={-450}>
        <Text style={styles.login}>
          Login
        </Text>
        <View style={styles.loginpage}>
          
          <Text style={styles.logincontent}>Welcome,Back</Text>
          <Text style={{color:"#808080",paddingBottom:30}}>Login to Your Account</Text>
          <Textbx color={bluee} iconname="email" placeholder="Email Adress"/>
          <Textbx color={bluee} iconname="lock" placeholder="Password" secureTextEntry={true}/>
          <View style={{alignItems:"flex-end",width:"85%",marginBottom:185}}>
            <Text style={{color:bluee,fontWeight:600}}>Forgot Password?</Text>
          </View>
          <Btn bgColor={bluee} btnLabel="Log In" textColor="white" Press={()=>{alert("Logged In!");
        props.navigation.navigate("Welcome")}}></Btn>
          <View style={{display:"flex",flexDirection:'row'}}>
            <Text>Don't have an account?</Text>
            <TouchableOpacity onPress={()=>props.navigation.navigate("Signup")}>
              <Text style={{color:darkgreen}}>Sign Up</Text>
            </TouchableOpacity>
            
          </View>
          
        </View>
        </KeyboardAvoidingView>
      </View>
    </Bg>
  )
}

export default Login

const styles = StyleSheet.create({
  container:{
    width:370,
    // alignItems:"center",
  },
  login:{
    color:"black",
    fontSize:50,
    fontWeight:800,
    marginVertical:30,
    paddingTop:30,
    textAlign:"center",
    fontFamily:"serif",
    color:'#002D62'
  },
  loginpage:{
    backgroundColor:"white",
    height:700,
    borderTopLeftRadius:70,
    borderTopRightRadius:70,
    padding:20,
    alignItems:"center"
  },
  logincontent:{
    fontSize:30,
    color:"#2D7F9D",
    fontWeight:700,
    paddingTop:40
  }
})

