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
  const { searchString, activeMode, activeGenre } = getState().filmListModuleReducer;
  let mode = '';
  if (activeMode === 'Coming') mode = 'upcoming';
  else if (activeMode === 'Trending') mode = 'popular';
  else if (activeMode === 'Top') mode = 'top_rated';
  let page = {};
  if (searchString.length !== 0) {
    const requestParams = { page: numberOfPage, adult: false, query: searchString };
    page = await makeRequest('search', 'movie', requestParams);
  } else if (activeMode === 'Genres') {
    const requestParams = {
      page: numberOfPage, include_adult: false, sort_by: 'popularity.desc', with_genres: activeGenre,
    };
    page = await makeRequest('discover', 'movie', requestParams);
  } else {
    const requestParams = { page: numberOfPage, adult: false };
    page = await makeRequest('movie', mode, requestParams);
  }
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

export const updateActualView = (value) => async (dispatch) => dispatch({
  type: 'UPDATE_ACTUAL_VIEW',
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


export const loadActualFilms = () => async (dispatch, getState) => {
  const { activeMode, activeGenre, actualFilms } = getState().filmListModuleReducer;
  let mode = '';
  if (activeMode === 'Coming') mode = 'upcoming';
  else if (activeMode === 'Trending') mode = 'popular';
  else if (activeMode === 'Top') mode = 'top_rated';
  const requestParams = activeMode !== 'Genres'
    ? { page: 1, adult: false }
    : {
      page: 1, include_adult: false, sort_by: 'popularity.desc', with_genres: activeGenre,
    };
  const films = activeMode !== 'Genres'
    ? await makeRequest('movie', mode, requestParams)
    : await makeRequest('discover', 'movie', requestParams);
  if (JSON.stringify(actualFilms.slice(0, 20)) !== JSON.stringify(films.results)) {
    dispatch(saveNumberOfPages(films.total_pages));
    dispatch(saveNumberOfFilms(films.total_results));
    dispatch(confirmAddedPages(1));
    return dispatch({
      type: 'LOAD_MOVIE_LIST',
      payload: films.results,
    });
  }
  return null;
};

export const loadSearchResults = (searchString) => async (dispatch, getState) => {
  const { actualFilms } = getState().filmListModuleReducer;
  const requestParams = { query: searchString, page: 1, adult: false };
  const films = await makeRequest('search', 'movie', requestParams);
  if (JSON.stringify(actualFilms.slice(0, 20)) !== JSON.stringify(films.results)) {
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
  }
  return null;
};

export const saveSearchStr = (newString) => async (dispatch) => dispatch({
  type: 'SAVE_SEARCH_STRING',
  payload: newString,
});

export const startSearch = () => async (dispatch, getState) => {
  const { searchString } = getState().filmListModuleReducer;
  if (searchString.length) await dispatch(loadSearchResults(searchString));
  return null;
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


export const restructPage = (value) => async (dispatch) => dispatch({
  type: 'SWITCH_MAIN_PAGE_MODE',
  payload: value,
});

export const setNewMode = (value) => async (dispatch, getState) => {
  const { activeMode } = getState().filmListModuleReducer;
  if (activeMode !== value) {
    dispatch(restructPage(value));
    dispatch(clearActualFilms());
  }
};

export const setActualGenre = (value) => async (dispatch, getState) => {
  const { activeGenre } = getState().filmListModuleReducer;
  if (value !== activeGenre) {
    return dispatch({
      type: 'SWITCH_ACTUAL_GENRE',
      payload: value,
    });
  }
  return null;
};

export const switchView = () => async (dispatch) => dispatch({
  type: 'SWITCH_VIEW_FORM',
});

export default loadTopFilm;
