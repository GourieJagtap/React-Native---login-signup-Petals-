import { View, Text } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler';
// import {Icon} from '@expo/vector-icons' 
import {MaterialIcons} from "@expo/vector-icons"

const Textbx = ({color,placeholder,secureTextEntry,iconname}) => {
  return (
    <View style={{borderRadius:100,
        color:color,
        padding:7,
        width:300,
        backgroundColor:"#F7F5EB",
        marginVertical:6,
        fontSize:16,
        display:"flex",
        flexDirection:"row"
        
    }}>
        <MaterialIcons name={iconname} size={25}></MaterialIcons>
        <TextInput 
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        style={{paddingHorizontal:10,width:270}}>
        </TextInput>
        </View>
  )
}

export default Textbx