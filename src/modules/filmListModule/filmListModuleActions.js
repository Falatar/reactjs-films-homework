const loadTopFilm = () => async (dispatch) => {
  const url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=0f3cfa59da5e9c54b4eebea803330d71&language=en-US&page=1&adult=false';
  const promise = await fetch(url);
  const film = await promise.json();
  return dispatch({
    type: 'LOAD_MOST_POPULAR_FILM',
    payload: film,
  });
};

export const loadActualFilms = () => async (dispatch) => {
  const url = 'https://api.themoviedb.org/3/movie/upcoming?api_key=0f3cfa59da5e9c54b4eebea803330d71&language=en-US&page=1&adult=false';
  const promise = await fetch(url);
  const film = await promise.json();
  return dispatch({
    type: 'LOAD_MOVIE_LIST',
    payload: film,
  });
};

export const loadGenres = () => async (dispatch) => {
  const url = 'https://api.themoviedb.org/3/genre/movie/list?api_key=0f3cfa59da5e9c54b4eebea803330d71&language=en-US';
  const promise = await fetch(url);
  const list = await promise.json();
  return dispatch({
    type: 'LOAD_GENRE_LIST',
    payload: list,
  });
};

export default loadTopFilm;
