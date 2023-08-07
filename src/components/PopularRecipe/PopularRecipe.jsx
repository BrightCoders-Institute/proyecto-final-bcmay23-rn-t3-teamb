import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'; // Replace 'FontAwesome' with the icon library you are using
import { styles } from './styles';

const PopularRecipe = ({ imageSource, recipeName, favoriteNum, servings }) => {
  return (
    <View style={styles.container}>
      <View style={styles.detailsContainer}>
        <View style={styles.detailRow}>
          <Text style={styles.name}>{recipeName}</Text>
        </View>
        <View style={styles.detailRow}>
          <Icon name="star" size={20} color="yellow" style={styles.icon} />
          <Text style={styles.text}>{favoriteNum}</Text>
        </View>
        <View style={styles.detailRow}>
          <Icon name="user-alt" size={20} color="yellow" style={styles.icon} />
          <Text style={styles.text}>{servings}</Text>
        </View>
      </View>
      <Image source={{ uri: imageSource }} style={styles.image} />
    </View>
  );
};
export default PopularRecipe;
