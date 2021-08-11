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

const Input = ({ onChange, value, onSubmit }) => {
  return (
    <TextInput 
      onChangeText={onChange}
      onSubmitEditing={onSubmit}
      style={styles.input}
      value={value}
    />
  )
}

export default Input
