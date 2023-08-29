import React from "react";
import { View, Image, Text, ScrollView, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5'; // Replace 'FontAwesome' with the icon library you are using
import Icon2 from "react-native-vector-icons/MaterialCommunityIcons"
import { updateFormPhase, goToPreviousPhase, goToSpecificPreviousPhase } from '../../../actions/actions';
import { connect, useDispatch } from 'react-redux';
import { styles } from "./styles";
import { firebase } from "@react-native-firebase/firestore";
import auth from '@react-native-firebase/auth';


const saveRecipeToFirestore = (recipeData, userId) => {
  // Acceder a la instancia de Firestore
  const db = firebase.firestore();

  // Generar un ID único para la receta
  const recipeId = db.collection('recipes').doc().id;

  // Agregar la receta a la colección "recipes" con el ID único
  db.collection('recipes').doc(recipeId).set({
    userId: userId,
    ...recipeData
  })
    .then(() => {
      console.log('Recipe saved to Firestore!');
      // Realizar cualquier otra acción que necesites después de guardar
    })
    .catch((error) => {
      console.error('Error saving recipe:', error);
    });
};


const Finish = (props) => {
  const { recipe, ingredientsList, currentPhase, updateFormPhase, goToPreviousPhase } = props;
  const dispatch = useDispatch();

  const handlePreviousPhase = () => {
    dispatch(goToSpecificPreviousPhase('ingredients'));
  };

  const renderPhaseText = (phaseName) => {
    const isActive = currentPhase === phaseName;
    return (
      <Text style={[styles.phases, isActive && styles.activePhase,]}>
        {phaseName}
      </Text>
    );
  };

  const user = auth().currentUser;
  const userId = user ? user.uid : null;
  
  const handleSubmit = () => {
    // Aquí obtén los datos de recipe y ingredientsList del props

    const recipeData = {
      name: recipe.name,
      image: recipe.image,
      servings: recipe.servings,
      prepTime: recipe.prepTime,
      calories: recipe.calories,
      numIngredients: recipe.numIngredients,
      tags: recipe.tags,
      description: recipe.description,
      instructions: recipe.instructions,
      ingredients: ingredientsList,
    };

    const userId = auth().currentUser.uid; // Obtiene el ID del usuario actualmente autenticado
    // Llamar a la función para guardar en Firestore
    saveRecipeToFirestore(recipeData, userId);
  };

    return (
        <View style={styles.definitionContainer}>
            {currentPhase === 'finish' && (
                <TouchableOpacity onPress={handlePreviousPhase} style={styles.goBackContainer}>
                    <Icon2 name="arrow-left-thick" size={25} color="yellow"/>
                </TouchableOpacity>
            )}
            <Text style={styles.definitionPhase}>Finish</Text>
            <View style={styles.phaseIndicator}>
                {renderPhaseText('definition')}
                {renderPhaseText('ingredients')}
                {renderPhaseText('finish')}
            </View>

            <View style={styles.outerContainer}>
                <View style={styles.container}>
                <View style={styles.detailsContainer}>
                    <View style={styles.detailRow}>
                        <Text style={styles.name}>{recipe.name}</Text>
                    </View>
                    <View style={styles.detailRow}>
                        <Icon name="clock" size={20} color="yellow" style={styles.icon} />
                        <Text style={styles.text}>{recipe.prepTime}</Text>
                    </View>
                    <View style={styles.detailRow}>
                        <Icon2 name="bowl-mix" size={22} color="yellow" style={styles.icon} />
                        <Text style={styles.text}>{recipe.servings}</Text>
                    </View>
                    <View style={styles.detailRow}>
                        <Icon name="burn" size={20} color="yellow" style={styles.icon} />
                        <Text style={styles.text}>{recipe.calories}</Text>
                    </View>
                </View>
                <Image source={{ uri: recipe.image }} style={styles.image} />
                </View>

                <View style={styles.containerDataFinish}>
                <View style={styles.ingredientsList}>
                    <Text style={styles.ingredientsTitle}>Ingredients List</Text>
                    <ScrollView style={styles.ingredientsContainer}>
                        {ingredientsList.map((ingredient, index) => (
                            <Text key={index} style={styles.ingredientsText}>
                                {`${index + 1}. ${ingredient.ingredient} ${ingredient.quantity}`}
                            </Text>
                        ))}
                    </ScrollView>
                </View>
                    <View>
                        <View style={styles.description}>
                            <Text style={styles.ingredientsTitle}>Description</Text>
                            <ScrollView>
                            <Text style={styles.ingredientsDescription}>{recipe.description}</Text>
                            </ScrollView>
                        </View>

                        <View style={styles.instructions}>
                            <Text style={styles.ingredientsTitle}>Instructions</Text>
                            <ScrollView>
                            <Text style={styles.ingredientsInstructions}>{recipe.instructions}</Text>
                            </ScrollView>
                        </View>
                    </View>
                </View>
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Finish</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
        </View>
    );
};

const mapStateToProps = state => {
  return {
    recipe: state.form.recipe,
    ingredientsList: state.form.recipe.ingredients, // Assuming ingredientsList is an array of objects
    currentPhase: state.form.phase,
  };
};


const mapDispatchToProps = {
  updateFormPhase,
  goToPreviousPhase,
};

export default connect(mapStateToProps, mapDispatchToProps)(Finish);
