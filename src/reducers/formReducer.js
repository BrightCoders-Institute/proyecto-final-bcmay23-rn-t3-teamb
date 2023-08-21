// reducers/formReducer.js

const initialState = {
  phase: 'definition',
  previousPhase: '',
  recipe: {
    name: '',
    image: '',
    servings: '',
    prepTime: '',
    numIngredients: '',
    calories: '',
    tags: [],
    description: '',
    instructions: '',
    ingredients: [],
  },
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_FORM_FIELD':
      return {
        ...state,
        recipe: {
          ...state.recipe,
          [action.payload.fieldName]: action.payload.value,
        },
      };
    case 'MOVE_TO_NEXT_PHASE':
      return {
        ...state,
        previousPhase: state.phase,
        phase: state.phase === 'definition' ? 'ingredients' : 'finish',
      };
    case 'UPDATE_FORM_PHASE':
      return {
        ...state,
        phase: action.payload,
      };
    case 'GO_TO_SPECIFIC_PREVIOUS_PHASE':
      return {
        ...state,
        phase: action.payload, // Set current phase to the specified previous phase
      };
    default:
      return state;
  }
};

export default formReducer;
