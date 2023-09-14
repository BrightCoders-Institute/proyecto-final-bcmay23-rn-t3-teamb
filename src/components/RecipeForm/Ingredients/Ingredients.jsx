import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, Keyboard } from "react-native";
import { connect, useDispatch } from 'react-redux';
import Icon2 from "react-native-vector-icons/MaterialCommunityIcons";
import { updateFormField, moveToNextPhase, updateFormPhase, goToSpecificPreviousPhase } from '../../../actions/actions';
import IngredientsForm from "./ingredientsForm/ingredientsForm";
import { styles } from "./styles";

const Ingredients = (props) => {
  const { recipe, currentPhase} = props;
  const dispatch = useDispatch();
  const [ingredientsList, setIngredientsList] = useState([]);
  const [isFormValid, setIsFormValid] = useState(false);

  const handleInputChange = (fieldName, value) => {
    if (fieldName === 'description') {
      const updatedRecipe = {
        ...recipe,
        description: value,
      };
      props.updateFormField('description', value); 
    } else if (fieldName === 'instructions') {
      const updatedRecipe = {
        ...recipe,
        instructions: value,
      };
      props.updateFormField('instructions', value); 
    } else if (fieldName === 'ingredients') {
      const newIngredients = [...recipe.ingredients];
      newIngredients[index].ingredient = value; 
      props.updateFormField('ingredients', newIngredients);
      dispatch({ type: 'UPDATE_INGREDIENTS', payload: newIngredients }); 
    } else if (fieldName === 'quantities') {
      const newIngredients = [...recipe.ingredients];
      newIngredients[index].quantity = value; 
      props.updateFormField('ingredients', newIngredients);
      dispatch({ type: 'UPDATE_INGREDIENTS', payload: newIngredients }); 
    }
  };

  const handleIngredientChange = (index, fieldName, value) => {
    const newIngredients = [...ingredientsList];
    newIngredients[index][fieldName] = value;
    setIngredientsList(newIngredients);
  };

  const handlePreviousPhase = () => {
    dispatch(goToSpecificPreviousPhase('definition'));
  };

  const renderPhaseText = (phaseName) => {
    const isActive = currentPhase === phaseName;
    return (
      <Text style={[styles.phases, isActive && styles.activePhase,]} >
        {phaseName}
      </Text>
    );
  };

  useEffect(() => {
    if (currentPhase === 'ingredients' && recipe.numIngredients > 0) {
      setIngredientsList(Array.from({ length: recipe.numIngredients }, (_, index) => {
        const ingredientData = recipe.ingredients && recipe.ingredients[index];
        return {
          ingredient: ingredientData ? ingredientData.ingredient : '',
          quantity: ingredientData ? ingredientData.quantity : '',
        };
      }));
    }
  }, [currentPhase, recipe.numIngredients, recipe.ingredients]);

  const handleNextPhase = () => {
    props.updateFormField('ingredients', ingredientsList);
    props.moveToNextPhase();
  };

  const validateForm = () => {
    const requiredFields = [
      recipe.description,
      recipe.instructions,
      ...ingredientsList.map(item => item.ingredient && item.quantity), // Validate ingredient and quantity
    ];
    const isValid = requiredFields.every(field => field !== '');
    setIsFormValid(isValid);
  };
      
  useEffect(() => {
    validateForm();
  }, [recipe, ingredientsList]);

  const renderIngredients = () => {
    return ingredientsList.map((item, index) => (
      <IngredientsForm
        key={index}
        index={index}
        item={item}
        handleIngredientChange={handleIngredientChange}
      />
    ));
  };

  const [scrollEnabled, setScrollEnabled] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setScrollEnabled(true);
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setScrollEnabled(false);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <ScrollView
    contentContainerStyle={{ flexGrow: 1 }}
    keyboardShouldPersistTaps="handled"
    scrollEnabled={scrollEnabled}
    >
    <View style={styles.definitionContainer}>
      {currentPhase === 'ingredients' && (
        <TouchableOpacity onPress={handlePreviousPhase} style={styles.goBackContainer}>
          <Icon2 name="arrow-left-thick" size={25} color="yellow"/>
        </TouchableOpacity>
      )}
      <Text style={styles.definitionPhase}>Ingredients</Text>
      <View style={styles.phaseIndicator}>
        {renderPhaseText('definition')}
        {renderPhaseText('ingredients')}
        {renderPhaseText('finish')}
      </View>
      <View style={styles.inputContainer}>
        <ScrollView style={styles.ingredientsInputScroll}>
        <TextInput
          placeholder="Description"
          value={recipe.description}
          multiline={true}
          numberOfLines={5}
          style={styles.inputdefinition}
          onChangeText={(text) => handleInputChange('description', text)}
        />
        </ScrollView>

        <ScrollView style={styles.ingredientsOuterContainer}>
          {renderIngredients()}
        </ScrollView>

        <ScrollView style={styles.ingredientsInputScroll}>
        <TextInput
          placeholder="Instructions"
          value={recipe.instructions}
          multiline={true}
          numberOfLines={5}
          style={styles.inputdefinition}
          onChangeText={(text) => handleInputChange('instructions', text)}
        />
        </ScrollView>
                
        <TouchableOpacity style={[styles.button, !isFormValid && styles.disabledButton]} onPress={handleNextPhase} disabled={!isFormValid}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>

  );
};

const mapStateToProps = state => {
  console.log('Current recipe object:', state.form.recipe);
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
