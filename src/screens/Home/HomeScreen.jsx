import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableOpacity, Image } from 'react-native';
import ShowRecipe from '../../components/Recipe/ShowRecipe';
import recipe from '../../assets/recipes.json';
import PopularRecipe from '../../components/PopularRecipe/PopularRecipe';
import ButtonTag from '../../components/ButtonTag/ButtonTag';
import Icon from "react-native-vector-icons/FontAwesome5";
import {styles} from "./styles"
import { API } from '../../database';

export const HomeScreen = () => {
  const [data, setData] = useState([]);
  const [selectedTag, setSelectedTag] = useState(null);
  const image = require('../../images/icon.jpg');
  

  useEffect(() => {
    // Cargar 20 recetas de la API de Spoonacular al montar el componente
    loadRecipes();
  }, []);

  const loadRecipes = async () => {
    try {
      const response = await API.get('/random', {
        params: {
          number: 1,
          addRecipeInformation: false,
          instructionsRequired: false,
          fillIngredients: false,
          showIngredients: false, // Incluye la lista de ingredientes
          
          
        },
      });

      setData(response.data.recipes);
    } catch (error) {
      console.error('Error cargando recetas:', error);
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
          fillIngredients: true, // Incluye la lista de ingredientes
          addRecipeNutrition: true,
          calories: true,
          query: tag
        },
      });
      console.log("data:",response.data.results);

      // Establece los datos en el estado 'data'
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
          showIngredients: false // Incluye la lista de ingredientes
          
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
        <PopularRecipe
          image="https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/165384.jpg?resize=1200:*"
          name="recipe"
          prepTime="12"
          servings="2"
        />
      </View>

      <ScrollView horizontal style={styles.buttonscontainer}>
        <TouchableOpacity style={[styles.showAllButton, selectedTag === null && styles.sortButtonSelected]} onPress={handleShowAllRecipes}>
          <Text style={styles.showAllButtonText}>Show All Recipes</Text>
        </TouchableOpacity>

        <View style={styles.sortButtons}>
          <ButtonTag
            tag="vegan"
            onPress={() => handleSortByTag('vegan')}
            isSelected={selectedTag === 'vegan'}
          />
          <ButtonTag
            tag="dessert"
            onPress={() => handleSortByTag('dessert')}
            isSelected={selectedTag === 'dessert'}
          />
          <ButtonTag
            tag="main course"
            onPress={() => handleSortByTag('main course')}
            isSelected={selectedTag === 'main course'}
          />
          <ButtonTag
            tag="gluten free"
            onPress={() => handleSortByTag('gluten free')}
            isSelected={selectedTag === 'gluten free'}
          />
          <ButtonTag
            tag="drinks"
            onPress={() => handleSortByTag('drinks')}
            isSelected={selectedTag === 'drinks'}
          />
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
