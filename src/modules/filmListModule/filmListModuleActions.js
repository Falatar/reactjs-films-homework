import makeRequest from '../../services/requester';

const loadTopFilm = () => async (dispatch) => {
  const film = await makeRequest('movie', 'top_rated', '0f3cfa59da5e9c54b4eebea803330d71', 'language=en-US', 'page=1', 'adult=false');
  return dispatch({
    type: 'LOAD_MOST_POPULAR_FILM',
    payload: film,
  });
};

const addNewPage = (numberOfPage) => async (dispatch) => {
  const page = await makeRequest('movie', 'upcoming', '0f3cfa59da5e9c54b4eebea803330d71', 'language=en-US', `page=${numberOfPage}`, 'adult=false');
  return dispatch({
    type: 'ADD_PAGE',
    payload: page.results,
  });
};

const saveNumberOfPages = (value) => async (dispatch) => dispatch({
  type: 'UPDATE_NUMBER_OF_PAGES',
  payload: value,
});

const saveNumberOfFilms = (value) => async (dispatch) => dispatch({
  type: 'UPDATE_NUMBER_OF_FILMS',
  payload: value,
});

const confirmAddedPages = (value) => async (dispatch) => dispatch({
  type: 'UPDATE_UPLOADED_PAGES',
  payload: value,
});

export const loadActualFilms = () => async (dispatch) => {
  const films = await makeRequest('movie', 'upcoming', '0f3cfa59da5e9c54b4eebea803330d71', 'language=en-US', 'page=1', 'adult=false');
  dispatch(saveNumberOfPages(films.total_pages));
  dispatch(saveNumberOfFilms(films.total_results));
  dispatch(confirmAddedPages(1));
  return dispatch({
    type: 'LOAD_MOVIE_LIST',
    payload: films.results,
  });
};

export const loadGenres = () => async (dispatch) => {
  const list = await makeRequest('genre/movie', 'list', '0f3cfa59da5e9c54b4eebea803330d71', 'language=en-US');
  return dispatch({
    type: 'LOAD_GENRE_LIST',
    payload: list,
  });
};

const switchPage = (value) => async (dispatch, getState) => {
  const { uploadedPages, totalFilms } = getState().filmListModuleReducer;
  const filmsOnPage = 12;
  const filmsOnSite = 20;
  if (value <= (totalFilms / filmsOnPage).toFixed(0)) {
    const needsToAdd = value * filmsOnPage - uploadedPages * filmsOnSite;
    if (needsToAdd > 0) {
      for (let i = 0; i < Math.ceil(needsToAdd / 20); i += 1) {
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
