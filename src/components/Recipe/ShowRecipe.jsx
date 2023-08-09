import React from 'react';
import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { styles } from './styles';
import Modal from 'react-native-modal';
import DetailsModal from "../DetailsModal/DetailsModal"
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';

const ShowRecipe = ({ recipeData }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const maxLength = 14;
  const recipeName = recipeData.recipeName .length > maxLength ? recipeData.recipeName .substring(0, maxLength) + "..." : recipeData.recipeName ;

  return (
    <View>
      <TouchableOpacity onPress={toggleModal}>
        <View style={styles.container}>
          <Image
            source={{ uri: recipeData.imageSource  }}
            style={styles.image}
            resizeMode="contain"
          />
          <View style={styles.detailsContainer}>
            <View>
              <Text style={styles.name}>{recipeName}</Text>
            </View>
            <View style={styles.Row}>
              <View style={styles.detailRow}>
                <Icon name="star" size={17} color="yellow" style={styles.icon} />
                <Text style={styles.text}>{recipeData.favoriteNum}</Text>
              </View>
              <View style={styles.detailRow}>
                <Icon name="user-alt" size={17} color="yellow" style={styles.icon} />
                <Text style={styles.text}>{recipeData.servings}</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>

      <Modal isVisible={isModalVisible} onBackdropPress={closeModal} animationType='slide'>
      <DetailsModal onClose={closeModal} recipeData={recipeData} />
      </Modal>
    </View>

  );
};
export default ShowRecipe;
