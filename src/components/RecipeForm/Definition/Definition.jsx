import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, onPress } from 'react-native';
import { connect } from 'react-redux';
import { updateFormField, moveToNextPhase } from '../../../actions/actions';
import {styles} from "./styles"

class Definition extends Component {
  handleInputChange = (fieldName, value) => {
    this.props.updateFormField(fieldName, value);
  };

  handleNextPhase = () => {
    this.props.moveToNextPhase();
  };

  handlePhaseClick = (phaseName) => {
    const { updateFormPhase } = this.props;
    updateFormPhase(phaseName);
  };

  renderPhaseText = (phaseName) => {
    const { currentPhase } = this.props;
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

  render() {
    const { recipe, currentPhase  } = this.props;

    return (
      <View style={styles.definitionContainer}>
          <Text style={styles.definitionPhase}>Definition</Text>
        <View style={styles.phaseIndicator}>
            <TouchableOpacity onPress={() => this.handlePhaseClick('Definition')}>
                {this.renderPhaseText('Definition')}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.handlePhaseClick('Ingredients')}>
                {this.renderPhaseText('Ingredients')}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.handlePhaseClick('Finish')}>
                {this.renderPhaseText('Finish')}
            </TouchableOpacity>
        </View>
        <View style={styles.inputContainer}>
            <TextInput
                placeholder="Recipe Name"
                //value={recipe.name}
                style={styles.inputdefinition}
            />
            {/* TextInput doesn't support file input directly */}
            {/* Use a library like react-native-image-picker */}
            {/* Replace the file input with appropriate image picker component */}
            <TextInput
                placeholder="Number of Servings"
                //value={recipe.servings}
                style={styles.inputdefinition}
            />
            <TextInput
                placeholder="Preparation Time"
                //value={recipe.prepTime}
                style={styles.inputdefinition}
            />
            <TextInput
                placeholder="Number of Ingredients"
                //value={recipe.numIngredients}
                style={styles.inputdefinition}
            />
            <TextInput
                placeholder="Calories"
                //value={recipe.calories}
                style={styles.inputdefinition}
            />
            <TextInput
                placeholder="Tags"
                //value={recipe.tags}
                style={styles.inputdefinition}
            />
            <Text style={styles.tags}>Pastry</Text>
            <TouchableOpacity style={styles.button} onPress={this.handleNextPhase}>
                <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    recipe: state.form.recipe,
    currentPhase: state.form.phase,
  };
};

const mapDispatchToProps = {
  updateFormField,
  moveToNextPhase,
  updateFormPhase: (phase) => ({ type: 'UPDATE_FORM_PHASE', payload: phase }),
};

export default connect(mapStateToProps, mapDispatchToProps)(Definition);
