import React from 'react';
import { View, Text } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import PopularRecipe from '../PopularRecipe/PopularRecipe';

const PopularRecipesCarousel = ({ recipesData }) => {
  const renderRecipeItem = ({ item }) => {
    return (
      <View>
        <PopularRecipe recipeData={item} context="home" titleKey="title" />
      </View>
    );
  };

  return (
    <View>
      <Carousel
        data={recipesData}
        renderItem={renderRecipeItem}
        sliderWidth={350} 
        itemWidth={350} 
        loop={true}
        autoplay={true} 
        autoplayInterval={5000}
      />
    </View>
  );
};

export default PopularRecipesCarousel;