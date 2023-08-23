export const updateFormField = (fieldName, value) => {
    return {
      type: 'UPDATE_FORM_FIELD',
      payload: { fieldName, value },
    };
  };
  export const moveToNextPhase = () => ({
    type: 'MOVE_TO_NEXT_PHASE',
  });
  export const updateFormPhase = (phase) => ({
    type: 'UPDATE_FORM_PHASE',
    payload: phase,
  });
  export const goToPreviousPhase = () => ({
    type: 'GO_TO_PREVIOUS_PHASE',
  });
  export const goToSpecificPreviousPhase = (phase) => ({
    type: 'GO_TO_SPECIFIC_PREVIOUS_PHASE',
    payload: phase,
  });    
