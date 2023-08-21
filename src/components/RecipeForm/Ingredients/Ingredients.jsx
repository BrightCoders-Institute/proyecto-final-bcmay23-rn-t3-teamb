import React from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { updateFormField, moveToNextPhase, updateFormPhase } from '../../../actions/actions';
import { connect } from 'react-redux';
import { styles } from "./styles";

const Ingredients = (props) => {
    const { recipe, currentPhase, updateFormPhase } = props;

    const handleInputChange = (fieldName, value, index) => {
        const newIngredients = [...recipe.ingredients];
        newIngredients[index] = value;
        props.updateFormField('ingredients', newIngredients);
    };

    const handlePhaseClick = (phaseName) => {
        updateFormPhase(phaseName);
    };

    const renderPhaseText = (phaseName) => {
        const isActive = currentPhase === phaseName;
        return (
            <Text
                style={[
                    styles.phases,
                    isActive && styles.activePhase,
                ]}
            >
                {phaseName}
            </Text>
        );
    };

    const handleNextPhase = () => {
        props.moveToNextPhase();
    };

    return (
        <View style={styles.definitionContainer}>
            <Text style={styles.definitionPhase}>Ingredients</Text>
            <View style={styles.phaseIndicator}>
                <TouchableOpacity onPress={() => handlePhaseClick('Definition')}>
                    {renderPhaseText('Definition')}
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handlePhaseClick('Ingredients')}>
                    {renderPhaseText('Ingredients')}
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handlePhaseClick('Finish')}>
                    {renderPhaseText('Finish')}
                </TouchableOpacity>
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
                
                <TouchableOpacity style={styles.button} onPress={handleNextPhase}>
                    <Text style={styles.buttonText}>Continue</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const mapStateToProps = state => {
    return {
        recipe: state.form.recipe,
        currentPhase: state.form.phase,
    };
};

const mapDispatchToProps = {
    updateFormField,
    moveToNextPhase,
    updateFormPhase,
};

export default connect(mapStateToProps, mapDispatchToProps)(Ingredients);
