import React from "react"
import { View, Text, StyleSheet, TextInput, TouchableOpacity, onPress, ScrollView } from "react-native"

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
    ingredientsOuterContainer: {
        height: 300
    },
    ingredientsContainer:{
        flexDirection: "row"
    },
    ingredient:{
        backgroundColor: "white",
        borderRadius: 15,
        width: 200,
        marginBottom: 12
    },
    ingredientquantity:{
        backgroundColor: "white",
        borderRadius: 15,
        width: 120,
        marginLeft: 20,
        marginBottom: 10
    },
    inputdefinition: {
        backgroundColor: "white",
        borderRadius: 15,
        marginVertical: 18,
    },
    button: {
        paddingVertical: 10,
        marginHorizontal: 10,
        marginBottom: 30,
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

export default Ingredients;