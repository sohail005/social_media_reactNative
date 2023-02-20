import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from '../Screens/HomeScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();
const AppStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />

    </Stack.Navigator>
  )
}

export default AppStack