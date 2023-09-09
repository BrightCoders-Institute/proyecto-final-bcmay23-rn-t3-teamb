import React,{useState} from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'; // Replace 'FontAwesome' with the icon library you are using
import { styles } from './styles';
import { TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import DetailsModal from '../DetailsModal/DetailsModal';

const PopularRecipe = ({ recipeData, titleKey, context }) => {
  const { image, title, aggregateLikes, servings } = recipeData;

  const [isModalVisible, setModalVisible] = useState(false);
  
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  console.log(recipeData)

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View>
      <TouchableOpacity>
    <View style={styles.container}>
      <View style={styles.detailsContainer}>
        <View style={styles.detailRow}>
          <Text style={styles.name}>{recipeData.title}</Text>
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
        <DetailsModal onClose={closeModal}  context={context} />
    </Modal>
    </View>
  );
};
export default PopularRecipe;
