import React from "react"
import { View, Text, StyleSheet, TextInput, TouchableOpacity, onPress } from "react-native"
import Ingredients from "../Ingredients/Ingredients"
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

const styles = StyleSheet.create({
    definitionContainer:{
        backgroundColor: "white"
    },
    definitionPhase: {
        fontSize: 25,
        fontWeight: "800",
        textAlign: "center",
        paddingTop: 30,
        paddingBottom: 5,
        color: "#003566"
    },
    phaseIndicator: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        backgroundColor: "#000814",
        paddingVertical: 8
    },
    phases: {
        color: "black",
        fontSize: 15,
        fontWeight: "600",
        backgroundColor: "white",
        paddingVertical: 2,
        paddingHorizontal: 5
    },
    inputContainer: {
        backgroundColor: "#000814",
        paddingHorizontal: 35,
        marginTop: 20
    },
    inputdefinition: {
        backgroundColor: "white",
        borderRadius: 15,
        marginVertical: 20,
    },
    tags: {
        color: "white",
        backgroundColor: "#FFC300",
        padding: 3,
        marginRight: 280,
        textAlign: "center",
        borderRadius: 10,
        marginBottom: 25
    },
    button: {
        paddingVertical: 10,
        marginHorizontal: 10,
        marginBottom: 20,
        backgroundColor: "#003566",
        borderRadius: 15
    },
    buttonText: {
        color: "white",
        fontSize: 30,
        fontWeight: "800",
        textAlign: "center"
    }
})

export default Definition;