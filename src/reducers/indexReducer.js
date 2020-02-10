export const initialState = {
  base: JSON.stringify({}),
};

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'FORM_MOVIE_LIST':
      return { ...state, base: action.payload };

    default: return state;
  }
}
