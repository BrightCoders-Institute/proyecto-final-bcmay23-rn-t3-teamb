import React from 'react'
import { Button, Text, View } from 'react-native'
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';


export const SearchScreen = () => {

  async function signOut() {
    await GoogleSignin.revokeAccess()
    await GoogleSignin.signOut()
  }

  return (
    <View>
      <Text>SearchScreen</Text>
      <Button title='LogOut' onPress={() => {auth().signOut(); signOut()}}/>
    </View>
  )
}
