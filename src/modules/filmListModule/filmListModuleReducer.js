export const initialState = {
  mostPopularFilm: {},
  genreList: {},
  actualFilms: [],
  actualPage: 1,
  totalPages: 0,
  totalFilms: 0,
  uploadedPages: 0,
  searchMode: false,
  searchString: '',
  successfullSearch: true,
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

    case 'UPDATE_NUMBER_OF_FILMS':
      return { ...state, totalFilms: action.payload };

    case 'UPDATE_ACTUAL_PAGE':
      return { ...state, actualPage: action.payload };

    case 'ADD_PAGE':
      return { ...state, actualFilms: state.actualFilms.concat(action.payload) };

    case 'UPDATE_UPLOADED_PAGES':
      return { ...state, uploadedPages: action.payload };

    case 'SEARCH_MODE_CONFIRMED':
      return { ...state, searchMode: action.payload };

    case 'SAVE_SEARCH_STRING':
      return { ...state, searchString: action.payload };

    case 'CLEAR_COLLECTION':
      return { ...state, actualFilms: [] };

    case 'CONFIRM_SEARCH_RESULT':
      return { ...state, successfullSearch: action.payload };

    default: return state;
  }
}
