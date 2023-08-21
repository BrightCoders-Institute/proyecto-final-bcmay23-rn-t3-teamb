import React from 'react';
import { useSelector } from 'react-redux';
import Definition from '../../components/RecipeForm/Definition/Definition';
import Ingredients from '../../components/RecipeForm/Ingredients/Ingredients';
import Finish from '../../components/RecipeForm/Finish/Finish';

export const RecipeFormScreen = () => {
  const currentPhase = useSelector(state => state.form.phase);

  return (
    <React.Fragment>
      {currentPhase === 'definition' && <Definition />}
      {currentPhase === 'ingredients' && <Ingredients />}
      {currentPhase === 'finish' && <Finish />}
    </React.Fragment>
  );
};
