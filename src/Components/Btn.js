import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const btn = ({bgColor, btnLabel, textColor, Press}) => {
  return (
    <TouchableOpacity style={{backgroundColor: bgColor,
        borderRadius:20,
        justifyContent:"center",
        width:260,
        alignItems:"center",
        height:30,
        margin:5}}
        onPress={Press}>
        <Text style={{
            textAlign:"center",
            color:textColor,
            fontSize:15,
            padding:5,
            fontWeight:900
        }}>
            {btnLabel}
        </Text>
    </TouchableOpacity>
  )
}

export default btn;
