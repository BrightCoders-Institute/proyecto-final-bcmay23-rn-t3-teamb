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
    ingredients: [
      { ingredient: '', quantity: '' }, // Initialize with an empty object
    ],
  },
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_FORM_FIELD':
      console.log('Updating form field:', action.payload.fieldName, action.payload.value);
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
    case 'UPDATE_INGREDIENTS':
        return {
          ...state,
          recipe: {
            ...state.recipe,
            ingredients: action.payload.map(item => ({
              ingredient: item.ingredient || '',
              quantity: item.quantity || '',
            })),
          },
        };
    case 'RESET_FORM_PHASE':
      return {
        ...initialState,
        phase: 'definition', // Reset the form phase to 'definition'
    };  
    default:
      return state;
  }
};

export default formReducer;
