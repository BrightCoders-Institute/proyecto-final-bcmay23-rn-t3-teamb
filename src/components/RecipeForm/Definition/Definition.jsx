import React from "react"
import { View, Text, StyleSheet, TextInput, TouchableOpacity, onPress } from "react-native"
import Ingredients from "../Ingredients/Ingredients"
import {styles} from "./styles"

const Definition = () => {
    return (
        <View style={styles.definitionContainer}>
                <Text style={styles.definitionPhase}>Definition</Text>
                <View style={styles.phaseIndicator}>
                    <Text style={styles.phases}>Definition</Text>
                    <Text style={styles.phases}>Ingredients</Text>
                    <Text style={styles.phases}>Finish</Text>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="Recipe Name"
                        //value={recipe.name}
                        style={styles.inputdefinition}
                    />
                    {/* TextInput doesn't support file input directly */}
                    {/* Use a library like react-native-image-picker */}
                    {/* Replace the file input with appropriate image picker component */}
                    <TextInput
                        placeholder="Number of Servings"
                        //value={recipe.servings}
                        style={styles.inputdefinition}
                    />
                    <TextInput
                        placeholder="Preparation Time"
                        //value={recipe.prepTime}
                        style={styles.inputdefinition}
                    />
                    <TextInput
                        placeholder="Number of Ingredients"
                        //value={recipe.numIngredients}
                        style={styles.inputdefinition}
                    />
                    <TextInput
                        placeholder="Calories"
                        //value={recipe.calories}
                        style={styles.inputdefinition}
                    />
                    <TextInput
                        placeholder="Tags"
                        //value={recipe.tags}
                        style={styles.inputdefinition}
                    />
                    <Text style={styles.tags}>Pastry</Text>
                    <TouchableOpacity style={styles.button} onPress={onPress}>
                        <Text style={styles.buttonText}>Continue</Text>
                    </TouchableOpacity>
                </View>

        </View>
    )
}

export default Definition;