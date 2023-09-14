import {React, useState} from 'react';
import { useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ToastAndroid, ScrollView, KeyboardAvoidingView, Platform  } from 'react-native';
import { connect, useDispatch } from 'react-redux';
import { updateFormField, moveToNextPhase, updateFormPhase } from '../../../actions/actions';
import { styles } from './styles';
import ImagePicker from 'react-native-image-crop-picker';

const Definition = (props) => {
  const { recipe, currentPhase, updateFormPhase, updateFormField, moveToNextPhase } = props;
  const dispatch = useDispatch();
  const [ingredientsList, setIngredientsList] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isFormValid, setIsFormValid] = useState(false);

  const handleInputChange = (fieldName, value) => {
    if (fieldName === 'tags') {
      const tagArray = value.split(',').map(tag => tag.trim());
      updateFormField(fieldName, tagArray);
    } else if (fieldName === 'image') {
      updateFormField(fieldName, value);
      setSelectedImage(value);
    } else {
      updateFormField(fieldName, value);
    }
  };
  
  const handleNextPhase = () => {
    props.updateFormField('numIngredients', recipe.numIngredients);
    props.updateFormField('ingredients', ingredientsList);
    props.moveToNextPhase();
  };

  const renderPhaseText = (phaseName) => {
    const isActive = currentPhase === phaseName;
    return (
      <Text style={[styles.phases,isActive && styles.activePhase,]}>
        {phaseName}
      </Text>
    );
  };

  const openImagePicker = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      updateFormField('image', image.path);
      setSelectedImage(image.path);
      validateForm();
    }).catch(error => {
      ToastAndroid.showWithGravity(
        'An error occurred while selecting an image.',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM
      );
    });
  };

  const validateForm = () => {
    const requiredFields = [
      recipe.name,
      recipe.image,
      recipe.servings,
      recipe.prepTime,
      recipe.numIngredients,
      recipe.calories,
      recipe.tags.length > 0,
    ];
  
    const isValid = requiredFields.every(field => field !== '');
    setIsFormValid(isValid);
  };
  
  useEffect(() => {
    validateForm();
  }, [recipe]);
  
  const greyPlaceholderStyle = {
    color: 'grey',
  };

  return (
  <ScrollView
    contentContainerStyle={{ flexGrow: 1 }}
    keyboardShouldPersistTaps="handled"
  >
    <View style={styles.definitionContainer}>
      <Text style={styles.definitionPhase}>Definition</Text>
      <View style={styles.phaseIndicator}>
          {renderPhaseText('definition')}
          {renderPhaseText('ingredients')}
          {renderPhaseText('finish')}
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Recipe Name"
          value={recipe.name}
          style={styles.inputdefinition}
          onChangeText={(text) => handleInputChange('name', text)}
        />
        <TouchableOpacity onPress={openImagePicker}>
          <Text style={[styles.imagePicker, selectedImage ? null : greyPlaceholderStyle]}>
            {selectedImage ? (selectedImage.length > 45 ? `${selectedImage.substring(0, 45)}...` : selectedImage) : "Select Image"}
          </Text>
        </TouchableOpacity>
        <TextInput
          placeholder="Number of Servings"
          value={recipe.servings}
          style={styles.inputdefinition}
          onChangeText={(text) => {
            const numericValue = text.replace(/[^0-9]/g, '');
            handleInputChange('servings', numericValue);
          }}
          keyboardType="numeric"
        />
        <TextInput
          placeholder="Preparation Time"
          value={recipe.prepTime}
          style={styles.inputdefinition}
          onChangeText={(text) => handleInputChange('prepTime', text)}
        />
        <TextInput
          placeholder="Number of Ingredients"
          value={recipe.numIngredients}
          style={styles.inputdefinition}
          onChangeText={(text) => {
            const numericValue = text.replace(/[^0-9]/g, '');
            handleInputChange('numIngredients', numericValue);
          }}
          keyboardType="numeric"
        />
        <TextInput
          placeholder="Calories"
          value={recipe.calories}
          style={styles.inputdefinition}
          onChangeText={(text) => {
            // Use a regular expression to allow only numeric characters
            const numericValue = text.replace(/[^0-9]/g, '');
            handleInputChange('calories', numericValue);
          }}
          keyboardType="numeric"
        />
        <TextInput
          placeholder="Tags"
          value={recipe.tags.join(', ')} // Convert the array to a comma-separated string
          style={styles.inputdefinition}
          onChangeText={(text) => handleInputChange('tags', text)}
          />
        {selectedImage && <Image source={{ uri: selectedImage }} />}
        <TouchableOpacity style={[styles.button, !isFormValid && styles.disabledButton]} onPress={handleNextPhase} disabled={!isFormValid}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>

      </View>
    </View>
  </ScrollView>

  );
};

const mapStateToProps = (state) => {
  console.log('Current recipe object:', state.form.recipe);
  return {
    recipe: state.form.recipe,
    currentPhase: state.form.phase,
  };
};

const mapDispatchToProps = {
  updateFormField,
  moveToNextPhase,
  updateFormPhase,
};

export default connect(mapStateToProps, mapDispatchToProps)(Definition);
