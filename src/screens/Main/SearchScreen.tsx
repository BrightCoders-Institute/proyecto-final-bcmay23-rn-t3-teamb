import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

import { API } from '../../database';
import { recipe } from '../../types/index';

export const SearchScreen = () => {

  useEffect(() => {
    API.get("/random?number=1")
      .then(response => {
        const {recipes} = response.data;
        
        recipes.map((i: recipe) => console.log(i.title));
      })
  }, [])

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
