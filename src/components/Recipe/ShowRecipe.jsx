import React from 'react';
import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { styles } from './styles';
const ShowRecipe = ({ imageSource, recipeName, favoriteNum, servings }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: imageSource  }}
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
            <Text style={styles.text}>{favoriteNum}</Text>
          </View>
          <View style={styles.detailRow}>
            <Icon name="user-alt" size={17} color="yellow" style={styles.icon} />
            <Text style={styles.text}>{servings}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
export default ShowRecipe;
