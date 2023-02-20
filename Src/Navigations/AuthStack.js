import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

import OnboardingScreen from '../Screens/OnboardingScreen'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Signup from '../Screens/Signup';
import Login from '../Screens/Login';
import FontAwesome from 'react-native-vector-icons/FontAwesome';



const Stack = createNativeStackNavigator();
const AuthStack = () => {
  const [isFirstLounched, setIsFirstLounched] = useState(false)

  useEffect(() => {
    AsyncStorage.getItem('AlreadyLounched').then(value => {
      if (value == null) {
        AsyncStorage.setItem('AlreadyLounched', 'true');
        setIsFirstLounched(true);
      }
    });


    GoogleSignin.configure({
      webClientId: '305162833725-iqobja3e83ici26c82u8qho7a6f8ujff.apps.googleusercontent.com',
    });
    

  }, []);

  if (isFirstLounched === null) {
    return null;
  } else if (isFirstLounched === true) {
    return (
      <Stack.Navigator screenOptions={({ route, navigation }) => ({
        gestureEnabled: false,
        gestureDirection: 'horizontal',
        // ...TransitionPresets.SlideFromRightIOS
      })} initialRouteName='OnboardingScreen'>
        <Stack.Screen options={{header: () => null}} name="OnboardingScreen" component={OnboardingScreen} />
        <Stack.Screen options={{header: () => null}} name="Login" component={Login} />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={({ navigation }) => ({
            title: '',
            headerStyle: {
              backgroundColor: '#f9fafd',
              shadowColor: '#f9fafd',
              elevation: 0,
            },
            headerLeft: () => (
              <View style={{ marginLeft: 10 }}>
                <FontAwesome.Button
                  name="long-arrow-left"
                  size={25}
                  backgroundColor="#f9fafd"
                  color="#333"
                  onPress={() => navigation.navigate('Login')}
                />
              </View>
            ),
          })}
        />



      </Stack.Navigator>
    )
  } else {
    return <Login />;
  }


}

export default AuthStack

const styles = StyleSheet.create({})