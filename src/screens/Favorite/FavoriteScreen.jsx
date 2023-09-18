import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text } from 'react-native';
import firestore from '@react-native-firebase/firestore'; // Import Firestore
import ShowRecipe from '../../components/Recipe/ShowRecipe';
import { styles } from "./styles"
import auth from '@react-native-firebase/auth';
import { firebase } from "@react-native-firebase/firestore";

export const FavoriteScreen = () => {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  useEffect(() => {
    const userId = auth().currentUser?.uid; // Get the user's ID (ensure user is authenticated)
    
    // Query Firestore for all data in the "favorites" collection for the current user
    const favoritesRef = firestore().collection('favorites').where('userId', '==', userId);

    const unsubscribe = favoritesRef.onSnapshot(snapshot => {
      const favoriteRecipesData = snapshot.docs.map(doc => doc.data());
      setFavoriteRecipes(favoriteRecipesData);
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  

  return (
    <View style={styles.favoriteContainer}>
      <Text style={styles.title}>Favorites</Text>
      <View style={styles.outerContainer}>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.row}>
              {favoriteRecipes.map((item, index) => (
                <View key={index} style={styles.column}>
                  <ShowRecipe recipeData={item.recipeData} context="favorite" titleKey="title"  />
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}