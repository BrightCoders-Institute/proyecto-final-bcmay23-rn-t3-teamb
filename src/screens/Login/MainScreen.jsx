import React from 'react'
import { Button, View, Text } from 'react-native';

export const MainScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Main Screen</Text>
      <Button
        title="Go to SigIn"
        onPress={() => navigation.navigate('SignIn')}
      />
      <Button
        title="Go to SignUp"
        onPress={() => navigation.navigate('SignUp')}
      />
    </View>
  )
}
