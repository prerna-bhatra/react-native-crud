// import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View ,StatusBar, TextInput,TouchableOpacity ,KeyboardAvoidingView} from 'react-native';
import { Button } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpScreen from './screens/SignUpScreen';
import LoginScreen from './screens/LoginScreen';
import LoadingScreen from './screens/LoadingScreen';
import HomeScreen from './screens/HomeScreen';

const Stack = createStackNavigator();
export default function App() {

  // useEffect(()=>{
   
  // },[])

  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  
  );
}

const styles = StyleSheet.create({
  // loading: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // }
});
