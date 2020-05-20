import makeRequest from '../../services/requester';
import itemsOnPage, { itemsOnSite } from './constants';

export const loadTopFilm = () => async (dispatch) => {
  const requestParams = { page: 1, adult: false };
  const film = await makeRequest('movie', 'top_rated', requestParams);
  return dispatch({
    type: 'LOAD_MOST_POPULAR_FILM',
    payload: film,
  });
};

export const addNewPage = (numberOfPage) => async (dispatch, getState) => {
  const { searchString } = getState().filmListModuleReducer;
  const requestParams = searchString.length === 0
    ? { page: numberOfPage, adult: false }
    : { page: numberOfPage, adult: false, query: searchString };
  const page = searchString.length === 0
    ? await makeRequest('movie', 'upcoming', requestParams)
    : await makeRequest('search', 'movie', requestParams);
  return dispatch({
    type: 'ADD_PAGE',
    payload: page.results,
  });
};

export const saveNumberOfPages = (value) => async (dispatch) => dispatch({
  type: 'UPDATE_NUMBER_OF_PAGES',
  payload: value,
});

export const saveNumberOfFilms = (value) => async (dispatch) => dispatch({
  type: 'UPDATE_NUMBER_OF_FILMS',
  payload: value,
});

export const confirmAddedPages = (value) => async (dispatch) => dispatch({
  type: 'UPDATE_UPLOADED_PAGES',
  payload: value,
});

export const clearActualFilms = () => async (dispatch) => dispatch({
  type: 'CLEAR_COLLECTION',
});

export const confirmSearchResult = (value) => async (dispatch) => dispatch({
  type: 'CONFIRM_SEARCH_RESULT',
  payload: value,
});

export const switchPage = (value) => async (dispatch, getState) => {
  const { uploadedPages, totalFilms } = getState().filmListModuleReducer;
  if (value <= (totalFilms / itemsOnPage).toFixed(0)) {
    const needsToAdd = value * itemsOnPage - uploadedPages * itemsOnSite;
    if (needsToAdd > 0) {
      for (let i = 0; i < Math.ceil(needsToAdd / itemsOnSite); i += 1) {
        dispatch(addNewPage(uploadedPages + i + 1));
        dispatch(confirmAddedPages(uploadedPages + i + 1));
      }
    }
    return dispatch({
      type: 'UPDATE_ACTUAL_PAGE',
      payload: value,
    });
  }
  return null;
};


export const loadActualFilms = () => async (dispatch) => {
  const requestParams = { page: 1, adult: false };
  const films = await makeRequest('movie', 'upcoming', requestParams);
  dispatch(saveNumberOfPages(films.total_pages));
  dispatch(saveNumberOfFilms(films.total_results));
  dispatch(confirmAddedPages(1));
  return dispatch({
    type: 'LOAD_MOVIE_LIST',
    payload: films.results,
  });
};

export const loadSearchResults = (searchString) => async (dispatch) => {
  const requestParams = { query: searchString, page: 1, adult: false };
  const films = await makeRequest('search', 'movie', requestParams);
  dispatch(saveNumberOfPages(films.total_pages));
  dispatch(saveNumberOfFilms(films.total_results));
  dispatch(confirmAddedPages(1));
  dispatch(switchPage(1));
  if (films.total_results === 0) dispatch(confirmSearchResult(false));
  else dispatch(confirmSearchResult(true));
  return dispatch({
    type: 'LOAD_MOVIE_LIST',
    payload: films.results,
  });
};

export const startSearch = (newString) => async (dispatch, getState) => {
  const { searchString } = getState().filmListModuleReducer;
  if (searchString === newString) return null;
  dispatch(clearActualFilms());
  await dispatch(loadSearchResults(newString));
  return dispatch({
    type: 'SAVE_SEARCH_STRING',
    payload: newString,
  });
};

export const loadGenres = () => async (dispatch) => {
  const list = await makeRequest('genre/movie', 'list');
  return dispatch({
    type: 'LOAD_GENRE_LIST',
    payload: list,
  });
};

export const moveLeft = (totalPages) => async (dispatch, getState) => {
  const { actualPage } = getState().filmListModuleReducer;
  const supposedNewPage = actualPage - 1;
  if (supposedNewPage >= 1 && supposedNewPage <= totalPages) {
    dispatch(switchPage(supposedNewPage));
  }
};

export const moveRight = (totalPages) => async (dispatch, getState) => {
  const { actualPage } = getState().filmListModuleReducer;
  const supposedNewPage = actualPage + 1;
  if (supposedNewPage >= 1 && supposedNewPage <= totalPages) {
    dispatch(switchPage(supposedNewPage));
  }
};

export const moveLeftToEnd = () => async (dispatch, getState) => {
  const { actualPage } = getState().filmListModuleReducer;
  if (actualPage !== 1) {
    dispatch(switchPage(1));
  }
};

export const moveRightToEnd = (totalPages) => async (dispatch, getState) => {
  const { actualPage } = getState().filmListModuleReducer;
  if (actualPage !== totalPages) {
    dispatch(switchPage(totalPages));
  }
};

export default loadTopFilm;
