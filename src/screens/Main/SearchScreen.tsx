import React from 'react'
import { Button, Text, View } from 'react-native'
import auth from '@react-native-firebase/auth';

export const SearchScreen = () => {
  return (
    <View>
      <Text>SearchScreen</Text>
      <Button title='LogOut' onPress={() => auth().signOut()}/>
    </View>
  )
}
