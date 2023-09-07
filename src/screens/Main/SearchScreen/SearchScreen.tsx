import React, { useEffect, useState } from 'react'
import { Button, SafeAreaView, ScrollView, Text, View } from 'react-native'
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

import { API } from '../../../database';
import { Recipe, RecipeElement } from '../../../types';
import { IconButton, MD3Colors, Searchbar } from 'react-native-paper';
import { string } from 'yup';
import { styles } from './styles';
import ShowRecipe from '../../../components/Recipe/ShowRecipe';

export const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [data, useData] = useState<RecipeElement[]>([]);
  const onChangeSearch = (query: string) => setSearchQuery(query);

  useEffect(() => {
    if (searchQuery) {
      API.get(`/complexSearch?query=${searchQuery}`)
        .then(response => {
          const { results } = response?.data;
          useData(results);
        })
    }
  }, [searchQuery])

  async function signOut() {
    await GoogleSignin.revokeAccess()
    await GoogleSignin.signOut()
  }

  const handleClearInput = () => {
    useData([]);
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Searchbar
            showDivider={false} placeholder='Search'
            onChangeText={onChangeSearch}
            value={searchQuery}
            mode='view'
            style={{ backgroundColor: 'rgba(0, 53, 102,0.5)' }}
            inputStyle={{ color: "black" }}
            iconColor='black'
            traileringIconColor="black"
            onClearIconPress={handleClearInput}
          />

          <View style={styles.Container}>
            {
              data && searchQuery ? data.map((item, index) => (<ShowRecipe recipeData={item} context="home" key={index}/>)) : <Text>Search something</Text>
            }
          </View>
          {/* <Button title='LogOut' onPress={() => { auth().signOut(); signOut() }} /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
