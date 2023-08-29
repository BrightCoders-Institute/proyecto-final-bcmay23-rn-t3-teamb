import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableOpacity, Image } from 'react-native';
import ShowRecipe from '../../components/Recipe/ShowRecipe';
import recipe from '../../assets/recipes.json';
import PopularRecipe from '../../components/PopularRecipe/PopularRecipe';
import ButtonTag from '../../components/ButtonTag/ButtonTag';
import Icon from "react-native-vector-icons/FontAwesome5";
import {styles} from "./styles"

export const HomeScreen = () => {
  const [data, setData] = useState(recipe);
  const [selectedTag, setSelectedTag] = useState(null);
  const image = require('../../images/icon.jpg');

  const handleSortByTag = (tag) => {
    if (selectedTag === tag) {
      setSelectedTag(null);
      setData(recipe);
    } else {
      setSelectedTag(tag);
      const filteredItems = recipe.filter((item) => item.tags.includes(tag));
      setData(filteredItems);
    }
  };

  const handleShowAllRecipes = () => {
    setSelectedTag(null);
    setData(recipe);
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
            onPress={handleSortByTag}
            isSelected={selectedTag === 'vegan'}
          />
          <ButtonTag
            tag="dessert"
            onPress={handleSortByTag}
            isSelected={selectedTag === 'dessert'}
          />
          <ButtonTag
            tag="main course"
            onPress={handleSortByTag}
            isSelected={selectedTag === 'main course'}
          />
          <ButtonTag
            tag="gluten free"
            onPress={handleSortByTag}
            isSelected={selectedTag === 'gluten free'}
          />
          <ButtonTag
            tag="drinks"
            onPress={handleSortByTag}
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
                  <ShowRecipe recipeData={item} context="home" />
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

