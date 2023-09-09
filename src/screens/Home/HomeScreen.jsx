import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableOpacity, Image } from 'react-native';
import ShowRecipe from '../../components/Recipe/ShowRecipe';
import PopularRecipe from '../../components/PopularRecipe/PopularRecipe';
import ButtonTag from '../../components/ButtonTag/ButtonTag';
import Icon from "react-native-vector-icons/FontAwesome5";
import {styles} from "./styles"
import { API } from '../../database';
import { MealTypes } from '../../constants/tags';


export const HomeScreen = () => {
  const [data, setData] = useState([]);
  const [selectedTag, setSelectedTag] = useState(null);
  const image = require('../../images/icon.jpg');
  const [randomRecipe, setRandomRecipe] = useState(null); // Store the random recipe separately


  useEffect(() => {
    // Load 20 recipes for the rest of the component
    loadRecipes();
    // Load the initial random recipe
    loadRandomRecipe();
  }, []);

  const loadRecipes = async () => {
    try {
      const response = await API.get('/random', {
        params: {
          number: 1,
          addRecipeInformation: true,
          instructionsRequired: true,
          fillIngredients: true,
          showIngredients: true, 
        },
      });
      setData(response.data.recipes);
    } catch (error) {
      console.error('Error cargando recetas:', error);
    }
  };

  const loadRandomRecipe = async () => {
    try {
      const response = await API.get('/random', {
        params: {
          number: 1, // Request only 1 random recipe
          addRecipeInformation: true,
          instructionsRequired: true,
          fillIngredients: true,
          showIngredients: true,
        },
      });
      setRandomRecipe(response.data.recipes[0]); // Store the random recipe separately
    } catch (error) {
      console.error('Error cargando receta:', error);
    }
  };

  const handleSortByTag = async (tag) => {
    setSelectedTag(tag);
    try {
      const response = await API.get('/complexSearch', {
        params: {
          number: 1,
          addRecipeInformation: true,
          instructionsRequired: true,
          fillIngredients: true, 
          addRecipeNutrition: true,
          calories: true,
          query: tag
        },
      });
      console.log("data:",response.data.results);
      setData(response.data.results);
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  const handleShowAllRecipes = async () => {
    setSelectedTag(null);
    try {
      const response = await API.get('/random', {
        params: {
          number: 1,
          addRecipeInformation: false,
          instructionsRequired: false,
          fillIngredients: false,
          showIngredients: false 
        },
      });
      console.log('Datos filtrados:', response.data.recipes);
      setData(response.data.recipes);
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  return (
    <View style={styles.homecontainer}>
      <View style={styles.titlecontainer}>
        <Image source={image} style={styles.image}/>
        <Text style={styles.title}>GASTRO-LAB</Text>
      </View>
    
      <View style={styles.popularrecipecontainer}>
        <View style={styles.populartext}>
          <Text style={styles.recipedaytext}>Recipe of the day! </Text>
          <Icon name="greater-than" color="yellow" size={25}/>
          <Icon name="greater-than" color="yellow" size={25}/>
        </View>
        {randomRecipe && (
          <PopularRecipe recipeData={randomRecipe} context="home" titleKey="title" />
        )}
      </View>

      <ScrollView horizontal style={styles.buttonscontainer}>
        <TouchableOpacity style={[styles.showAllButton, selectedTag === null && styles.sortButtonSelected]} onPress={handleShowAllRecipes}>
          <Text style={styles.showAllButtonText}>Show All Recipes</Text>
        </TouchableOpacity>

        <View style={styles.sortButtons}>
          {MealTypes.map((tag) => (
            <ButtonTag
              key={tag}
              tag={tag} 
              onPress={() => handleSortByTag(tag)} 
              isSelected={selectedTag === tag} 
            />
          ))}
        </View>
      </ScrollView>

      <View style={styles.outerContainer}>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.row}>
              {data.map((item, index) => (
                <View key={item.id} style={styles.column}>
                  <ShowRecipe recipeData={item} context="home" titleKey="title" />
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
