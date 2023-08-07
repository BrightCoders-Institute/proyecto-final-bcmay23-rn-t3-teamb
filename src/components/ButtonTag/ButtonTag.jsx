import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import {styles} from "./styles"
const ButtonTag = ({ tag, onPress, isSelected }) => {
  const buttonStyle = isSelected ? styles.sortButtonSelected : styles.sortButton;

  return (
    <TouchableOpacity onPress={() => onPress(tag)} style={buttonStyle}>
      <Text style={styles.buttontext}>{tag}</Text>
    </TouchableOpacity>
  );
};

export default ButtonTag;