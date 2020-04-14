export const initialState = {
  mostPopularFilm: {},
  genreList: {},
  actualFilms: {},
};

export function filmListModuleReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOAD_MOST_POPULAR_FILM':
      return { ...state, mostPopularFilm: action.payload };

    case 'LOAD_GENRE_LIST':
      return { ...state, genreList: action.payload };

    case 'LOAD_MOVIE_LIST':
      return { ...state, actualFilms: action.payload };

    default: return state;
  }
}
