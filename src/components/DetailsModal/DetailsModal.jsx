import React, {useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image, ScrollView } from 'react-native';
import Icon from "react-native-vector-icons/AntDesign"
import Icon2 from "react-native-vector-icons/MaterialIcons"
import Icon3 from "react-native-vector-icons/FontAwesome5"
import Icon4 from "react-native-vector-icons/Ionicons"
import {styles} from "./styles" 

const DetailsModal = ({ onClose, recipeData }) => {
  const [selectedDataType, setSelectedDataType] = useState('instructions');

  const toggleDataType = (dataType) => {
    setSelectedDataType(dataType);
  };

  if (!recipeData) {
    return null;
  }

  const maxLength = 30;
  const recipeName = recipeData.recipeName .length > maxLength ? recipeData.recipeName .substring(0, maxLength) + "..." : recipeData.recipeName ;

  return (
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        <View style={styles.topIconContainer}>
            <TouchableOpacity>
                <Icon2 name="favorite" color="red" size={40}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={onClose}>
                <Icon name="closecircle" color="#FFC300" size={40}/>
            </TouchableOpacity>
        </View>
        <View style={styles.topContainer}>
            <Image
                source={{ uri: recipeData.imageSource  }}
                style={styles.image}
                resizeMode="cover"
            />
        </View>
        <View style={styles.topTextContainer}>   
            <Text style={styles.name}>{recipeName}</Text>
            <ScrollView style={styles.descriptionContainer}>
                <Text style={styles.description}>{recipeData.description}</Text>
            </ScrollView>
        </View>
        <View style={styles.iconCenterContainer}>
            <View style={styles.iconCenter}>
                <Icon name="clockcircle" color="#FFC300" size={30}/>
                <Text style={styles.iconText}>{recipeData.prepTime}</Text>
            </View>
            <View style={styles.iconCenter}>
                <Icon3 name="user-alt" color="#FFC300" size={30}/>
                <Text style={styles.iconText}>{recipeData.servings}</Text>
            </View>
            <View style={styles.iconCenter}>
                <Icon4 name="flame-sharp" color="#FFC300" size={30}/>
                <Text style={styles.iconText}>{recipeData.calories}</Text>
            </View>
        </View>
        
        <View style={styles.bottomContainer}>
            
            <ScrollView style={styles.bottomTextContainer}>
            {selectedDataType === 'instructions' ? (
                <View>
                { recipeData.instructions.map((instruction) => (
                    <View style={styles.instructionsContainer} id={instruction.instruction} key={instruction.instruction}>
                        <Text style={styles.instructions}>{instruction.instruction}</Text>
                    </View>
                ))}
                </View> 
            ) : (
                <View>
                { recipeData.ingredients.map((ingredient) => (
                    <View style={styles.ingredientsContainer} id={ingredient.name} key={ingredient.name}>
                        <Text style={styles.ingredients}>{ingredient.name}</Text>
                        <Text style={styles.ingredients}>{`${ingredient.quantity} ${ingredient.unit}`}</Text>
                    </View>
                ))}
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