import {React, useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { connect, useDispatch } from 'react-redux';
import { updateFormField, moveToNextPhase, updateFormPhase } from '../../../actions/actions';
import { styles } from './styles';
import ImagePicker from 'react-native-image-crop-picker';

const Definition = (props) => {
  const { recipe, currentPhase, updateFormPhase, updateFormField, moveToNextPhase } = props;
  const dispatch = useDispatch();

  const handleInputChange = (fieldName, value) => {
    if (fieldName === 'tags') {
      // Convert the comma-separated string to an array of tags
      const tagArray = value.split(',').map(tags => tags.trim());
      updateFormField(fieldName, tagArray);
    } else {
      updateFormField(fieldName, value);
    }
  };

  const handleNextPhase = () => {
    moveToNextPhase();
  };

  const renderPhaseText = (phaseName) => {
    const isActive = currentPhase === phaseName;
    return (
      <Text
        style={[
          styles.phases,
          isActive && styles.activePhase,
        ]}
      >
        {phaseName}
      </Text>
    );
  };

  const [selectedImage, setSelectedImage] = useState(null);

  const openImagePicker = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      setSelectedImage(image.path);
    }).catch(error => {
      console.log(error);
    });
  };

  return (
    <View style={styles.definitionContainer}>
      <Text style={styles.definitionPhase}>Definition</Text>
      <View style={styles.phaseIndicator}>
        <TouchableOpacity onPress={() => handlePhaseClick('Definition')}>
          {renderPhaseText('definition')}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePhaseClick('Ingredients')}>
          {renderPhaseText('ingredients')}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePhaseClick('Finish')}>
          {renderPhaseText('finish')}
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Recipe Name"
          value={recipe.name}
          style={styles.inputdefinition}
          onChange={e => handleInputChange('name', e.target.value)}
        />
        <TouchableOpacity onPress={openImagePicker}>
          <Text style={styles.imagePicker}>Select Image</Text>
        </TouchableOpacity>
        <TextInput
          placeholder="Number of Servings"
          value={recipe.servings}
          style={styles.inputdefinition}
          onChange={e => handleInputChange('servings', e.target.value)}
        />
        <TextInput
          placeholder="Preparation Time"
          value={recipe.prepTime}
          style={styles.inputdefinition}
          onChange={e => handleInputChange('prepTime', e.target.value)}
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
          value={recipe.tags.toString()}
          style={styles.inputdefinition}
          onChange={e => handleInputChange('tags', e.target.value)}
        />
        {selectedImage && <Image source={{ uri: selectedImage }} />}
        <TouchableOpacity style={styles.button} onPress={handleNextPhase}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => {
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
