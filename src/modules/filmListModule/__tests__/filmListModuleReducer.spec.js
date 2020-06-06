import expect from 'expect';
import { filmListModuleReducer, initialState } from '../filmListModuleReducer';

describe('filmListModuleReducer', () => {
  it('should return the initial state', () => {
    expect(filmListModuleReducer(initialState, () => {})).toEqual(initialState);
  });

  it('should work without first param', () => {
    const testAction = {
      type: 'LOAD_MOST_POPULAR_FILM',
      payload: { example: 'example' },
    };
    expect(filmListModuleReducer(undefined, testAction)).toEqual({
      ...initialState,
      mostPopularFilm: { example: 'example' },
    });
  });

  it('should handle LOAD_MOST_POPULAR_FILM', () => {
    const action = {
      type: 'LOAD_MOST_POPULAR_FILM',
      payload: { example: 'example' },
    };
    expect(filmListModuleReducer(initialState, action)).toEqual({
      ...initialState,
      mostPopularFilm: { example: 'example' },
    });
  });

  it('should handle LOAD_GENRE_LIST', () => {
    const action = {
      type: 'LOAD_GENRE_LIST',
      payload: { example: 'example' },
    };
    expect(filmListModuleReducer(initialState, action)).toEqual({
      ...initialState,
      genreList: { example: 'example' },
    });
  });

  it('should handle LOAD_MOVIE_LIST', () => {
    const action = {
      type: 'LOAD_MOVIE_LIST',
      payload: ['example'],
    };
    expect(filmListModuleReducer(initialState, action)).toEqual({
      ...initialState,
      actualFilms: ['example'],
    });
  });

  it('should handle UPDATE_NUMBER_OF_PAGES', () => {
    const action = {
      type: 'UPDATE_NUMBER_OF_PAGES',
      payload: 21,
    };
    expect(filmListModuleReducer(initialState, action)).toEqual({
      ...initialState,
      totalPages: 21,
    });
  });

  it('should handle UPDATE_NUMBER_OF_FILMS', () => {
    const action = {
      type: 'UPDATE_NUMBER_OF_FILMS',
      payload: 21,
    };
    expect(filmListModuleReducer(initialState, action)).toEqual({
      ...initialState,
      totalFilms: 21,
    });
  });

  it('should handle UPDATE_ACTUAL_PAGE', () => {
    const action = {
      type: 'UPDATE_ACTUAL_PAGE',
      payload: 21,
    };
    expect(filmListModuleReducer(initialState, action)).toEqual({
      ...initialState,
      actualPage: 21,
    });
  });

  it('should handle ADD_PAGE', () => {
    const state = {
      actualFilms: ['film1', 'film2'],
    };
    const action = {
      type: 'ADD_PAGE',
      payload: ['film3'],
    };
    expect(filmListModuleReducer(state, action)).toEqual({
      ...state,
      actualFilms: ['film1', 'film2', 'film3'],
    });
  });

  it('should handle UPDATE_UPLOADED_PAGES', () => {
    const action = {
      type: 'UPDATE_UPLOADED_PAGES',
      payload: 21,
    };
    expect(filmListModuleReducer(initialState, action)).toEqual({
      ...initialState,
      uploadedPages: 21,
    });
  });

  it('should handle SAVE_SEARCH_STRING', () => {
    const action = {
      type: 'SAVE_SEARCH_STRING',
      payload: 'search',
    };
    expect(filmListModuleReducer(initialState, action)).toEqual({
      ...initialState,
      searchString: 'search',
    });
  });

  it('should handle CLEAR_COLLECTION', () => {
    const state = {
      actualFilms: ['film1', 'film2'],
    };
    const action = {
      type: 'CLEAR_COLLECTION',
    };
    expect(filmListModuleReducer(state, action)).toEqual({
      ...state,
      actualFilms: [],
    });
  });

  it('should handle CONFIRM_SEARCH_RESULT', () => {
    const action = {
      type: 'CONFIRM_SEARCH_RESULT',
      payload: true,
    };
    expect(filmListModuleReducer(initialState, action)).toEqual({
      ...initialState,
      successfullSearch: true,
    });
  });
});
