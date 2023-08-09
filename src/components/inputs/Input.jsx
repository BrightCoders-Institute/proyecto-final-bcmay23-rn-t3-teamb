import React, { useState } from 'react'
import { TextInput, View, Text } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { styles } from './styles';

export const Input = ({icon = '', label, placeholder, secure = false}) => {

  const [isFocused, setIsFocused] = useState(false)

  const handleFocus = () => setIsFocused(true)
  const handleBlur = () => setIsFocused(false)

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{label}</Text>
        <TextInput
          style={[
            styles.input, {
              borderColor: isFocused ? '#ffc300' : '#003566'
            }
          ]}
          placeholder={placeholder}
          onFocus={handleFocus}
          onBlur={handleBlur}
          secureTextEntry={secure}
        />
        {
            icon ? <Ionicons name={icon} size={24} color={"#000"}/> : null
        }
    </View>
  )
}




