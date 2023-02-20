import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ScreenHeight, ScreenWidth } from '../Utils/Dimentions';


const FormInput = ({lableValue,placeholderText,iconType, ...rest}) => {
  return (
    <View style={styles.inputContainer}>
        <View style={styles.iconStyle}>
        <AntDesign name={iconType} size={30} color='#000'/>
        </View>
      <TextInput 
      style={styles.input}
      value={lableValue}
      numberOfLines={1}
      placeholder={placeholderText}
      placeholderTextColor='#666'
      {...rest}
      />
    </View>
  )
}

export default FormInput

const styles = StyleSheet.create({
    inputContainer: {
      marginTop: 5,
      marginBottom: 10,
      width: '100%',
      height: ScreenHeight / 15,
      borderColor: '#ccc',
      borderRadius: 3,
      borderWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    iconStyle: {
      padding: 10,
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      borderRightColor: '#ccc',
      borderRightWidth: 1,
      width: 50,
    },
    input: {
      padding: 10,
      flex: 1,
      fontSize: 16,
      fontFamily: 'Roboto',
      color: '#333',
      justifyContent: 'center',
      alignItems: 'center',
    },
    inputField: {
      padding: 10,
      marginTop: 5,
      marginBottom: 10,
      width: ScreenWidth / 1.5,
      height: ScreenHeight / 15,
      fontSize: 16,
      borderRadius: 8,
      borderWidth: 1,
    },
  });