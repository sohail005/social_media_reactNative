import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';

const OnboardingScreen = ({navigation}) => {
  return (
    <Onboarding
    onDone={()=> navigation.replace('Login')}
    onSkip={()=> navigation.replace('Home')}
  pages={[
    {
      backgroundColor: '#ff4',
      image: <Image source={require('../Assets/onboarding-img1.png')} />,
      title: 'Onboarding 1',
      subtitle: 'Done with React Native Onboarding Swiper',
    },
    {
        backgroundColor: '#6ceb8e',
        image: <Image source={require('../Assets/onboarding-img2.png')} />,
        title: 'Onboarding 2',
        subtitle: 'Done with React Native Onboarding Swiper',
      },
      {
        backgroundColor: '#c57ed9',
        image: <Image source={require('../Assets/onboarding-img3.png')} />,
        title: 'Onboarding 3',
        subtitle: 'Done with React Native Onboarding Swiper',
      },
  ]}
/>
  )
}

export default OnboardingScreen

const styles = StyleSheet.create({})