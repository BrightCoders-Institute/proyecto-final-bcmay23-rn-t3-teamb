import React, { useEffect, useState } from 'react'
import { Button, SafeAreaView, ScrollView, Text, View, StyleSheet, Image} from 'react-native'
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
  const image = require('../../../images/search-food.png');
  const onChangeSearch = (query: string) => setSearchQuery(query);

  useEffect(() => {
    if (searchQuery) {
      // Define the parameters you want to pass
      const params = {
        query: searchQuery,
        addRecipeInformation: true,
        instructionsRequired: true,
        fillIngredients: true,
        showIngredients: true,
      };
  
      // Make the API request using Axios
      API.get('/complexSearch', { params })
        .then(response => {
          const { results } = response?.data;
          useData(results);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }
  }, [searchQuery])

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
            style={{ backgroundColor: '#FFC300' }}
            inputStyle={{ color: "#003566" }}
            iconColor='#003566'
            traileringIconColor="#003566"
            onClearIconPress={handleClearInput}
            placeholderTextColor="#003566"
          />

          <View style={styles.Container}>
          {
            data && searchQuery ? (
              data.map((item, index) => (
                <ShowRecipe titleKey={'title'} recipeData={item} context="home" key={index} />
              ))
            ) : (
              <View style={styles.searchPlaceholder}>
                <Text style={styles.searchPlaceHolder}>Search something</Text>
                <Image source={image} style={styles.image} />
              </View>
            )
          }
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
