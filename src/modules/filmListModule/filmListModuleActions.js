const loadTopFilm = () => async (dispatch) => {
  const url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=0f3cfa59da5e9c54b4eebea803330d71&language=en-US&page=1&adult=false';
  const promise = await fetch(url);
  const film = await promise.json();
  return dispatch({
    type: 'LOAD_MOST_POPULAR_FILM',
    payload: film,
  });
};

const addNewPage = (numberOfPage) => async (dispatch) => {
  const pageUrl = `https://api.themoviedb.org/3/movie/upcoming?api_key=0f3cfa59da5e9c54b4eebea803330d71&language=en-US&page=${numberOfPage}&adult=false`;
  const pagePromise = await fetch(pageUrl);
  const pageFilms = await pagePromise.json();
  return dispatch({
    type: 'ADD_PAGE',
    payload: pageFilms.results,
  });
};

const saveNumberOfPages = (value) => async (dispatch) => dispatch({
  type: 'UPDATE_NUMBER_OF_PAGES',
  payload: value,
});

export const loadActualFilms = () => async (dispatch) => {
  const url = 'https://api.themoviedb.org/3/movie/upcoming?api_key=0f3cfa59da5e9c54b4eebea803330d71&language=en-US&page=1&adult=false';
  const promise = await fetch(url);
  const films = await promise.json();
  dispatch(saveNumberOfPages(films.total_pages));
  for (let counter = 2; counter <= films.total_pages; counter += 1) {
    dispatch(addNewPage(counter));
  }
  return dispatch({
    type: 'LOAD_MOVIE_LIST',
    payload: films.results,
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

export const switchPage = (value) => async (dispatch) => dispatch({
  type: 'UPDATE_ACTUAL_PAGE',
  payload: value,
});

export default loadTopFilm;
