import React, { useState } from "react";
import { View, TextInput, } from "react-native";
import {styles} from "../styles"

const IngredientsForm = ({ index, item, handleIngredientChange }) => {
  return (
    <View style={styles.ingredientsContainer}>
      <TextInput
        placeholder="Ingredients"
        value={item.ingredient}
        style={styles.ingredient}
        onChangeText={(text) => handleIngredientChange(index, 'ingredient', text)}
      />
      <TextInput
        placeholder="quantity"
        value={item.quantity}
        style={styles.ingredientquantity}
        onChangeText={(text) => handleIngredientChange(index, 'quantity', text)}
      />
    </View>
  );
};

export default IngredientsForm;