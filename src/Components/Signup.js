import { View, Text, Touchable, Key, KeyboardAvoidingView} from 'react-native'
import React from 'react'
import Bg from '../Bg'
import { StyleSheet } from 'react-native'
import Textbx from './Textbx'
import { bluee, darkgreen, greeen } from './Constants'
import Btn from "./Btn"
import { TouchableOpacity } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
const Signup = (props) => {
  return (
    <Bg>
      <View style={styles.container}>

      <KeyboardAvoidingView style={{flex:1}}
      behavior="position" enabled={true} keyboardVerticalOffset={-250}>
        <Text style={styles.login}>
          Signup
        </Text>
        <View style={styles.loginpage}>
        
          <Text style={styles.logincontent}>Create your account</Text>
          <Text style={{color:"#808080",paddingBottom:30}}>Create your new account</Text>

          
          <View style={{marginBottom:50}}>
          <Textbx color={bluee} iconname="person" placeholder="Full Name"/>
          <Textbx color={bluee} iconname="email" placeholder="Email Adress"/>
          <Textbx color={bluee} iconname="phone" placeholder="Phone Number"/>
          <Textbx color={bluee} iconname="lock" placeholder="Password" secureTextEntry={true}/>
          <Textbx color={bluee} iconname="lock" placeholder="Confirm Password" secureTextEntry={true}/>
          </View>

          <View style={{display:"flex",justifyContent:"flex-end"}}>
          <Btn bgColor={darkgreen} btnLabel="Log In" textColor="white" Press={()=>{alert("Signed In! now Log in to continue");
        props.navigation.navigate("Login")}}></Btn>
          </View>
          <View style={{display:"flex",flexDirection:'row'}}>
            <Text>Already have an account?</Text>
            <TouchableOpacity onPress={()=>props.navigation.navigate("Login")}>
              <Text style={{color:darkgreen}}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
      </View>
    </Bg>
  )
}

export default Signup

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
    color:"#40826D",
    fontWeight:700,
    paddingTop:40
  }
})