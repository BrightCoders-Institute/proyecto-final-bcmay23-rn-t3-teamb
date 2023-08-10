import React from 'react'
import { Text, View, ScrollView, Image } from 'react-native'
import { useState } from 'react';
import ShowRecipe from '../../components/Recipe/ShowRecipe'
import recipe from '../../assets/recipes.json';
import {styles} from "./styles"

export const ProfileScreen = () => {
  const [data, setData] = useState(recipe);
  const imageProfile = require('../../images/profile.jpeg');

  return (
    <View style={styles.profileContainer}>
        <View style={styles.imageContainer}>
            <Image
                source={imageProfile} 
                style={styles.imageProfile}
            /> 
        </View>     
        <Text style={styles.userName}>UserName</Text>
        <Text style={styles.userEmail}>useremail@mail.com</Text>

        <View style={styles.likesContainer}>
            <View style={styles.likesinnerContainer}>
                <Text style={styles.recipesNumber}>60</Text>
                <Text style={styles.recipesText}>Recipes</Text>
            </View>
            <View style={styles.likesinnerContainer}>
                <Text style={styles.recipesNumber}>129</Text>
                <Text style={styles.recipesText}>Favorites</Text>
            </View>
        </View>
      <View style={styles.outerContainer}>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.row}>
              {data.map((item, index) => (
                <View key={item.id} style={styles.column}>
                  <ShowRecipe recipeData={item} />
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}
