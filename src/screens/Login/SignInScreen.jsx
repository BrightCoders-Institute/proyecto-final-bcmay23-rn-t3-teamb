import React from 'react'
import { Text, View, Button } from 'react-native'

export const SignInScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>SigIn Screen</Text>
      <Button
        title="Go to Main"
        onPress={() => navigation.navigate('Main')}
      />
      <Button
        title="Go to SignUp"
        onPress={() => navigation.navigate('SignUp')}
      />
    </View>
  )
}
