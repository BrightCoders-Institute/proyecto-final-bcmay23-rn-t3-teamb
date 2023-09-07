import React, {useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image, ScrollView } from 'react-native';
import Icon from "react-native-vector-icons/AntDesign"
import Icon2 from "react-native-vector-icons/MaterialIcons"
import Icon3 from "react-native-vector-icons/FontAwesome5"
import Icon4 from "react-native-vector-icons/Ionicons"
import Icon5 from "react-native-vector-icons/Entypo"
import Icon6 from "react-native-vector-icons/FontAwesome6"

import {styles} from "./styles" 

const DetailsModal = ({ onClose, recipeData, context }) => {
  const [selectedDataType, setSelectedDataType] = useState('ingredients');
    
  const toggleDataType = (dataType) => {
    setSelectedDataType(dataType);
  };
  
  if (!recipeData) {
    return null;
  }

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
            <TouchableOpacity>
              <Icon2 name="favorite" color="red" size={40} />
            </TouchableOpacity>
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
              {context == 'home' ? (
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
                        <Text style={styles.instructionsGroupTitle}>{instructionGroup.name}</Text>
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
                  {context === 'home' ? (
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
  