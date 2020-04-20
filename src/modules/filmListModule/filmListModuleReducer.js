export const initialState = {
  mostPopularFilm: {},
  genreList: {},
  actualFilms: [],
  actualPage: 1,
  totalPages: 0,
};

export function filmListModuleReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOAD_MOST_POPULAR_FILM':
      return { ...state, mostPopularFilm: action.payload };

    case 'LOAD_GENRE_LIST':
      return { ...state, genreList: action.payload };

    case 'LOAD_MOVIE_LIST':
      return { ...state, actualFilms: state.actualFilms.concat(action.payload) };

    case 'UPDATE_NUMBER_OF_PAGES':
      return { ...state, totalPages: action.payload };

    case 'UPDATE_ACTUAL_PAGE':
      return { ...state, actualPage: action.payload };

    case 'ADD_PAGE':
      return { ...state, actualFilms: state.actualFilms.concat(action.payload) };

    default: return state;
  }
}
