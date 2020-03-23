
export const initialState = {
  base: {},
  genList: {},
};

export function moviewReducer(state = initialState, action) {
  switch (action.type) {
    case 'FORM_MOVIE_LIST':
      return { ...state, base: action.payload };

    case 'LOAD_GENRES':
      return { ...state, genList: action.payload };

    default: return state;
  }
}
