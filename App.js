import { StackView } from '@react-navigation/stack';
import React, {Component} from 'react';
import {Text, View } from'react-native';
import DailyPic from './Screens/DailyPic';
import SpaceCaft from './Screens/SpaceCraft';
import StarMap from './Screens/StarMap';
import HomeScreen from './Screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator()

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initalRouteName="Home"screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="SpaceCraft" component={SpaceCaft}/>
        <Stack.Screen name="StarMap" component={StarMap}/>
        <Stack.Screen name="DailyPic" component={DailyPic}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}