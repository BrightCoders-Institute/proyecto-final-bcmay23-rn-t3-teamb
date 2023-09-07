import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { styles } from './styles';
import Modal from 'react-native-modal';
import DetailsModal from '../DetailsModal/DetailsModal';
import { TouchableOpacity } from 'react-native';

const ShowRecipe = ({ recipeData, context }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const { title, image, prepTime, servings, favoriteNum } = recipeData;

  const maxLength = 14;
  const Recipename =
    title.length > maxLength ? title.substring(0, maxLength) + '...' : title;

    const iconProps =
    context === 'profile'
      ? { iconName: 'clock', iconColor: 'yellow' }
      : { iconName: 'star', iconColor: 'yellow' };

  return (
    <View>
      <TouchableOpacity onPress={toggleModal}>
        <View style={styles.container}>
          <Image source={{ uri: image }} style={styles.image} />
          <View style={styles.detailsContainer}>
            <View>
              <Text style={styles.name}>{Recipename}</Text>
            </View>
            <View style={styles.Row}>
              <View style={styles.detailRow}>
                <Icon
                    name={iconProps.iconName}
                    size={17}
                    color={iconProps.iconColor}
                    style={styles.icon}
                  />                
                <Text style={styles.text}>
                  {context === 'profile' ? prepTime : favoriteNum}
                </Text>
              </View>
              <View style={styles.detailRow}>
                <Icon
                  name="user-alt"
                  size={17}
                  color="yellow"
                  style={styles.icon}
                />
                <Text style={styles.text}>{servings}</Text>
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