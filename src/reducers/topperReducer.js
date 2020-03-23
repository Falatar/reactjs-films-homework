export const initialState = {
  latestFilm: {},
  genList: {},
};

export function topperReducer(state = initialState, action) {
  switch (action.type) {
    case 'FORM_LATEST_FILM':
      return { ...state, latestFilm: action.payload };

    case 'LOAD_GENRES_TO_TOP':
      return { ...state, genList: action.payload };

    default: return state;
  }
}
