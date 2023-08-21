export const updateFormField = (fieldName, value) => {
    console.log('updateFormField action dispatched with:', fieldName, value);
  
    return {
      type: 'UPDATE_FORM_FIELD',
      payload: { fieldName, value },
    };
  };
  export const moveToNextPhase = () => ({
    type: 'MOVE_TO_NEXT_PHASE',
  });
