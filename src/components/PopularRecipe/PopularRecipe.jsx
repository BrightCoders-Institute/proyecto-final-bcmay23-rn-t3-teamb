import React,{useState} from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'; // Replace 'FontAwesome' with the icon library you are using
import { styles } from './styles';
import { TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import DetailsModal from '../DetailsModal/DetailsModal';

const PopularRecipe = ({ recipeData, titleKey, context }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const { name, image, prepTime, servings, favoriteNum, readyInMinutes, extendedIngredients, instructions, analyzedInstructions,aggregateLikes   } = recipeData;
  const formattedServings = servings !== undefined ? servings.toString() : '';
  const recipeTitle = recipeData[titleKey];
  const summaryWithoutTags = recipeData.summary ? recipeData.summary.replace(/<b>|<\/b>/gi, '') : '';
  const match = summaryWithoutTags.match(/^(.*?)(?=It is brought to you by Foodista)/s);
  const caloriesDescription = match && match[1] ? match[1] : summaryWithoutTags;

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  console.log(recipeData)

  const closeModal = () => {
    setModalVisible(false);
  };

  const getCalories = () => {
    const description = recipeData.summary || '';
    const match = description.match(/<b>(\d+) calories<\/b>/i);
  
    if (match && match[1]) {
      const calories = parseInt(match[1]);
      return calories;
    }
    return null; 
  };

  const calories = getCalories();

  const formatRecipeData = (data) => {
    if (!data) {
      return null;
    }
  
    const formattedData = {
      title: data.title || data.name || '', 
      image: data.image || '',
      description: data.description || '',
      summary: caloriesDescription || '',
      servings: data.servings || '',
      prepTime: data.prepTime || data.readyInMinutes || '',
      calories: data.calories || getCalories() || '', 
      instructions: data.analyzedInstructions || [],
      instructionsdb: data.instructions || '',
      ingredients: data.ingredients || data.extendedIngredients || [],
      likes: data.aggregateLikes || '', 
    };

    return formattedData;
  };

  const maxLength = 12;
  const Recipename =
  recipeTitle.length > maxLength ? recipeTitle.substring(0, maxLength) + '...' : recipeTitle;


  return (
    <View>
      <TouchableOpacity onPress={toggleModal}>
    <View style={styles.container}>
      <View style={styles.detailsContainer}>
        <View style={styles.detailRow}>
          <Text style={styles.name}>{Recipename}</Text>
        </View>
        <View style={styles.detailRow}>
          <Icon name="star" size={20} color="yellow" style={styles.icon} />
          <Text style={styles.text}>{recipeData.aggregateLikes}</Text>
        </View>
        <View style={styles.detailRow}>
          <Icon name="user-alt" size={20} color="yellow" style={styles.icon} />
          <Text style={styles.text}>{recipeData.servings}</Text>
        </View>
      </View>
      <Image source={{ uri: recipeData.image }} style={styles.image} />
    </View>
    </TouchableOpacity>

    <Modal isVisible={isModalVisible} onBackdropPress={closeModal} animationType='slide'>
        <DetailsModal onClose={closeModal} recipeData={formatRecipeData(recipeData)} context={context} />
    </Modal>
    </View>
  );
};
export default PopularRecipe;
