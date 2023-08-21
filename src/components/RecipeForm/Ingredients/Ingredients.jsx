import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { updateFormField, moveToNextPhase, updateFormPhase, goToSpecificPreviousPhase } from '../../../actions/actions';
import { connect, useDispatch } from 'react-redux';
import { styles } from "./styles";

const Ingredients = (props) => {
    const { recipe, currentPhase, updateFormPhase } = props;
    const dispatch = useDispatch();
    const [ingredientsList, setIngredientsList] = useState([]);

    // Update ingredientsList when numIngredients changes
    useEffect(() => {
        setIngredientsList(Array.from({ length: recipe.numIngredients }, () => ({ ingredient: '', quantity: '' })));
    }, [recipe.numIngredients]);

    const handleIngredientChange = (index, fieldName, value) => {
        const newIngredients = [...ingredientsList];
        newIngredients[index][fieldName] = value;
        setIngredientsList(newIngredients);
    };

    const handlePhaseClick = (phaseName) => {
        dispatch({ type: 'UPDATE_FORM_PHASE', payload: phaseName });
    };

    const handlePreviousPhase = () => {
        dispatch(goToSpecificPreviousPhase('definition'));
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
            {currentPhase === 'ingredients' && (
                <TouchableOpacity onPress={handlePreviousPhase}>
                    <Text>back</Text>
                </TouchableOpacity>
            )}
            <View style={styles.phaseIndicator}>
                <TouchableOpacity onPress={() => handlePhaseClick('Definition')}>
                    {renderPhaseText('definition')}
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handlePhaseClick('Ingredients')}>
                    {renderPhaseText('ingredients')}
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handlePhaseClick('Finish')}>
                    {renderPhaseText('finish')}
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
                    {ingredientsList.map((item, index) => (
                    <View style={styles.ingredientsContainer} key={index}>
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
                    ))}
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
