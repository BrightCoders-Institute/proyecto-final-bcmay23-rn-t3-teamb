import React, {useState, useEffect} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image, ScrollView } from 'react-native';
import Icon from "react-native-vector-icons/AntDesign"
import Icon2 from "react-native-vector-icons/MaterialIcons"
import Icon3 from "react-native-vector-icons/FontAwesome5"
import Icon4 from "react-native-vector-icons/Ionicons"
import Icon5 from "react-native-vector-icons/Entypo"
import Icon6 from "react-native-vector-icons/FontAwesome6"
import auth from '@react-native-firebase/auth';
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/firestore';
import {styles} from "./styles" 
import {addToFavorites, removeFromFavorites} from "../../actions/actions"

const DetailsModal = ({ onClose, recipeData, context }) => {
  const [selectedDataType, setSelectedDataType] = useState('ingredients');

  const [isFavorite, setIsFavorite] = useState(false); // Track if the recipe is in favorites



  if (!firebase.apps.length) {
    firebase.initializeApp(yourFirebaseConfig);
  }
    
  const toggleDataType = (dataType) => {
    setSelectedDataType(dataType);
  };
  
  if (!recipeData) {
    return null;
  }

  useEffect(() => {
    // Check if the recipe is in favorites when the component mounts
    checkIfRecipeIsInFavorites();
  }, []);

  const checkIfRecipeIsInFavorites = async () => {
    try {
      const userId = auth().currentUser?.uid;
      const favoritesRef = firebase.firestore().collection('favorites');

      const existingFavorite = await favoritesRef
        .where('userId', '==', userId)
        .where('recipeData.title', '==', recipeData.title)
        .get();

      setIsFavorite(!existingFavorite.empty);
    } catch (error) {
      console.error('Error checking if recipe is in favorites:', error);
    }
  };

  const addRecipeToFavorites = async (recipeData) => {
    try {
      const userId = auth().currentUser?.uid;
      const favoritesRef = firebase.firestore().collection('favorites');

      // Check if the recipe is already in favorites
      const existingFavorite = await favoritesRef
        .where('userId', '==', userId)
        .where('recipeData.title', '==', recipeData.title)
        .get();

      // If the recipe is in favorites, remove it; otherwise, add it
      if (existingFavorite.empty) {
        await favoritesRef.add({
          userId: userId,
          recipeData: recipeData,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setIsFavorite(true); // Recipe added to favorites, set isFavorite to true
        console.log('Receta agregada a favoritos con éxito');
      } else {
        existingFavorite.forEach(async (doc) => {
          await doc.ref.delete();
          setIsFavorite(false); // Recipe removed from favorites, set isFavorite to false
          console.log('Receta eliminada de favoritos con éxito');
        });
      }
    } catch (error) {
      console.error('Error al agregar o eliminar la receta de favoritos:', error);
    }
  };

  console.log(recipeData)
  
  const maxLength = 30;
  const recipeTitle = recipeData.title || recipeData.name || '';
  const Recipename =
    recipeTitle.length > maxLength
      ? recipeTitle.substring(0, maxLength) + '...'
      : recipeTitle;
  
    return (
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.topIconContainer}>
          {context === "home" || context === "favorite" ?(
            <TouchableOpacity onPress={() => addRecipeToFavorites(recipeData)}>
              <Icon2 name="favorite" color={isFavorite ? 'red' : 'black'} size={40} />
            </TouchableOpacity>
          ):(
            <View></View>
          )}
            <TouchableOpacity onPress={onClose}>
              <Icon name="closecircle" color="#000814" size={40} />
            </TouchableOpacity>
          </View>
          <View style={styles.topContainer}>
            <Image
              source={{ uri: recipeData.image }}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
          <View style={styles.topTextContainer}>
            <Text style={styles.name}>{Recipename}</Text>
            <ScrollView style={styles.descriptionContainer}>
              {context === 'home' || context == 'favorite'? (
                <Text style={styles.description}>
                  {recipeData.summary || ''}
                </Text>
              ) : (
                <Text style={styles.description}>
                  {recipeData.description || ''}
                </Text>
              )}
            </ScrollView>
          </View>
          <View style={styles.iconCenterContainer}>
            <View style={styles.iconCenter}>
              <Icon6 name="clock" color="#FFC300" size={29} />
              <Text style={styles.iconText}>{recipeData.prepTime || ''}</Text>
            </View>
            <View style={styles.iconCenter}>
              <Icon5 name="bowl" color="#FFC300" size={30} />
              <Text style={styles.iconText}>{recipeData.servings || ''}</Text>
            </View>
            <View style={styles.iconCenter}>
              <Icon4 name="flame-sharp" color="#FFC300" size={30} />
              <Text style={styles.iconText}>{recipeData.calories || ''}</Text>
            </View>
          </View>
  
          <View style={styles.bottomContainer}>
            <ScrollView style={styles.bottomTextContainer}>
              {selectedDataType === 'instructions' ? (
                <View>
                  {context === 'home' ? (
                    <View>
                    {recipeData.instructions.map((instructionGroup, groupIndex) => (
                      <View key={groupIndex}>
                        {instructionGroup.steps.map((step, stepIndex) => (
                          <View style={styles.instructionsContainer} key={stepIndex}>
                            <Text style={styles.instructions}>{step.step}</Text>
                          </View>
                        ))}
                      </View>
                    ))}
                    </View>
                  ) : context === "favorite" ? (

                    <View>
                    {recipeData.instructionsdb.map((instructionGroup, groupIndex) => (
                      <View key={groupIndex}>
                        {instructionGroup.steps.map((step, stepIndex) => (
                          <View style={styles.instructionsContainer} key={stepIndex}>
                            <Text style={styles.instructions}>{step.step}</Text>
                          </View>
                        ))}
                      </View>
                    ))}
                    </View>

                  ) : (
                    <View>
                      <View style={styles.instructionsContainer}>
                        <Text style={styles.instructions}>
                          {recipeData.instructionsdb || ''}
                        </Text>
                      </View>
                    </View>
                  )}
                </View>
              ) : (
                <View>
                  {context === 'home' || context === 'favorite'? (
                    <View>
                    {recipeData.ingredients.map((ingredient, index) => (
                      <View
                        style={styles.ingredientsContainer}
                        key={index}
                      >
                        <Text style={styles.ingredients}>
                          {`${ingredient.amount} ${ingredient.unit} `}
                        </Text>
                        <Text style={styles.ingredients}>{ingredient.name}</Text>
                      </View>
                    ))}
                    </View>
                  ) : (
                    <View>
                    {recipeData.ingredients.map((ingredient, index) => (
                      <View style={styles.ingredientsContainer} key={index}>
                        <Text style={styles.ingredients}>{ingredient.quantity} </Text>
                        <Text style={styles.ingredients}>{ingredient.ingredient}</Text>
                      </View>
                    ))}
                    </View>
                  )}
                </View>
              )}
            </ScrollView>
  
            <View style={styles.dataTypeButtons}>
              <TouchableOpacity
                style={[
                  styles.dataTypeButton,
                  selectedDataType === 'ingredients' && styles.selectedDataTypeButton,
                ]}
                onPress={() => toggleDataType('ingredients')}
              >
                <Text style={styles.bottomButtonsText}>Ingredients</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.dataTypeButton,
                  selectedDataType === 'instructions' && styles.selectedDataTypeButton,
                ]}
                onPress={() => toggleDataType('instructions')}
              >
                <Text style={styles.bottomButtonsText}>Instructions</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  };
  
  export default DetailsModal;
  