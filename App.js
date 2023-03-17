import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/HomeScreen';
import Login from './src/Components/Login';
import Signup from './src/Components/Signup';
import Welcome from './src/Components/Welcome';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}} >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Login" component={Login} ></Stack.Screen>
      <Stack.Screen name="Signup" component={Signup} ></Stack.Screen>
      <Stack.Screen name="Welcome" component={Welcome} ></Stack.Screen>
    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;



