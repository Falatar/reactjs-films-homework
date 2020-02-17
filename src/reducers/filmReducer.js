export const initialState = {
  filmData: JSON.stringify({}),
};

export function filmReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOAD_FILM_DATA':
      return { ...state, base: action.payload };

    default: return state;
  }
}
