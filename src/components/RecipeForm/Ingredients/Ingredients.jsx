import React from "react"
import { View, Text, StyleSheet, TextInput, TouchableOpacity, onPress, ScrollView } from "react-native"
import {styles} from "./styles"
const Ingredients = () => {
    return (
        <View style={styles.definitionContainer}>
                <Text style={styles.definitionPhase}>Ingredients</Text>
                <View style={styles.phaseIndicator}>
                    <Text style={styles.phases}>Definition</Text>
                    <Text style={styles.phases}>Ingredients</Text>
                    <Text style={styles.phases}>Finish</Text>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="Description"
                        //value={recipe.description}
                        numberOfLines={5}
                        style={styles.inputdefinition}
                    />
                    
                <ScrollView style={styles.ingredientsOuterContainer}>
                    <View style={styles.ingredientsContainer}>
                        <TextInput
                            placeholder="Ingredients"
                            //value={recipe.ingredients}
                            style={styles.ingredient}
                        />
                        <TextInput
                            placeholder="quantity"
                            //value={recipe.ingredients}
                            style={styles.ingredientquantity}
                        />
                    </View>
                    <View style={styles.ingredientsContainer}>
                        <TextInput
                            placeholder="Ingredients"
                            //value={recipe.ingredients}
                            style={styles.ingredient}
                        />
                        <TextInput
                            placeholder="quantity"
                            //value={recipe.ingredients}
                            style={styles.ingredientquantity}
                        />
                    </View>
                    <View style={styles.ingredientsContainer}>
                        <TextInput
                            placeholder="Ingredients"
                            //value={recipe.ingredients}
                            style={styles.ingredient}
                        />
                        <TextInput
                            placeholder="quantity"
                            //value={recipe.ingredients}
                            style={styles.ingredientquantity}
                        />
                    </View>
                    <View style={styles.ingredientsContainer}>
                        <TextInput
                            placeholder="Ingredients"
                            //value={recipe.ingredients}
                            style={styles.ingredient}
                        />
                        <TextInput
                            placeholder="quantity"
                            //value={recipe.ingredients}
                            style={styles.ingredientquantity}
                        />
                    </View>
                    <View style={styles.ingredientsContainer}>
                        <TextInput
                            placeholder="Ingredients"
                            //value={recipe.ingredients}
                            style={styles.ingredient}
                        />
                        <TextInput
                            placeholder="quantity"
                            //value={recipe.ingredients}
                            style={styles.ingredientquantity}
                        />
                    </View>
                    <View style={styles.ingredientsContainer}>
                        <TextInput
                            placeholder="Ingredients"
                            //value={recipe.ingredients}
                            style={styles.ingredient}
                        />
                        <TextInput
                            placeholder="quantity"
                            //value={recipe.ingredients}
                            style={styles.ingredientquantity}
                        />
                    </View>
                    <View style={styles.ingredientsContainer}>
                        <TextInput
                            placeholder="Ingredients"
                            //value={recipe.ingredients}
                            style={styles.ingredient}
                        />
                        <TextInput
                            placeholder="quantity"
                            //value={recipe.ingredients}
                            style={styles.ingredientquantity}
                        />
                    </View>
                </ScrollView>

                    <TextInput
                        placeholder="Instructions"
                        //value={recipe.instructions}
                        numberOfLines={5}
                        style={styles.inputdefinition}
                    />
                    
                    <TouchableOpacity style={styles.button} onPress={onPress}>
                        <Text style={styles.buttonText}>Continue</Text>
                    </TouchableOpacity>
                </View>

        </View>
    )
}


export default Ingredients;