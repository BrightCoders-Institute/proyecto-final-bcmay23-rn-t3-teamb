import React from 'react';
import { useSelector } from 'react-redux';
import Definition from '../../components/RecipeForm/Definition/Definition';
import Ingredients from '../../components/RecipeForm/Ingredients/Ingredients';
import Finish from '../../components/RecipeForm/Finish/Finish';
import { KeyboardAvoidingView } from 'react-native';
import { useState } from 'react';

export const RecipeFormScreen = () => {

  const [inputValue, setInputValue] = useState('');
  const currentPhase = useSelector(state => state.form.phase);
  console.log('Current Phase:', currentPhase);

  return (
    <React.Fragment>
      {currentPhase === 'definition' && <Definition />}
      {currentPhase === 'ingredients' && <Ingredients />}
      {currentPhase === 'finish' && <Finish />}
    </React.Fragment>
  );
};
