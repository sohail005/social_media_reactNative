import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import FormButton from '../Components/FormButton'
import { AuthContext } from '../Navigations/AuthProvider'

const HomeScreen = () => {
  // const { user, logout } = useContext(AuthContext);
  return (
    <View>
      <Text>HomeScreen</Text>
      <TouchableOpacity testID='testBtn' style={{ backgroundColor: 'green' }}>
        <Text style={{ color: '#fff', paddingHorizontal: 10, paddingVertical: 5 }}>Test Button</Text>
      </TouchableOpacity>
      {/*  <FormButton buttonTitle={'Logout'} onPress={() => logout()} /> */}
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({});