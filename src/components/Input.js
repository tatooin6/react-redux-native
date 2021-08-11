import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#eee',
    height: 34,
    alignSelf: 'stretch', // para usar todo el ancho de la pantalla
    padding: 8,
  },
})

const Input = ({ onChange, value }) => {
  return (
    <TextInput 
      onChangeText={onChange}
      style={styles.input}
      value={value}
    />
  )
}

export default Input
