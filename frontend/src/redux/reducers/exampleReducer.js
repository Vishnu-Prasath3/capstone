const initialState = {
  exampleData: null,
};

const exampleReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_EXAMPLE_DATA':
      return {
        ...state,
        exampleData: action.payload,
      };
    default:
      return state;
  }
};

export default exampleReducer; 