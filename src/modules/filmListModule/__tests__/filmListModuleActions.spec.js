import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import expect from 'expect';
import * as actions from '../filmListModuleActions';
import { createAdressString } from '../../../services/requester';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const testNumber = 21;

describe('filmListModuleActions', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('loadTopFilm completed successfully', () => {
    const requestParams = { page: 1, adult: false };
    fetchMock.getOnce(createAdressString('movie', 'top_rated', requestParams), {
      headers: { 'content-type': 'application/json' },
      body: { name: 'example' },
    });
    const expectedAction = [
      {
        type: 'LOAD_MOST_POPULAR_FILM',
        payload: { name: 'example' },
      },
    ];
    const store = mockStore({});
    return store.dispatch(actions.loadTopFilm()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it('addNewPage completed successfully on basic mode', () => {
    const requestParams = { page: testNumber, adult: false };
    fetchMock.getOnce(createAdressString('movie', 'upcoming', requestParams), {
      headers: { 'content-type': 'application/json' },
      body: { results: [{ name: 'example' }] },
    });
    const expectedAction = [
      {
        type: 'ADD_PAGE',
        payload: [{ name: 'example' }],
      },
    ];
    const store = mockStore({
      filmListModuleReducer: {
        actualFilms: [],
        searchString: '',
      },
    });
    return store.dispatch(actions.addNewPage(testNumber)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it('addNewPage completed successfully on search mode', () => {
    const requestParams = { page: testNumber, adult: false, query: 'searchString' };
    fetchMock.getOnce(createAdressString('search', 'movie', requestParams), {
      headers: { 'content-type': 'application/json' },
      body: { results: [{ name: 'example' }] },
    });
    const expectedAction = [
      {
        type: 'ADD_PAGE',
        payload: [{ name: 'example' }],
      },
    ];
    const store = mockStore({
      filmListModuleReducer: {
        actualFilms: [],
        searchString: 'searchString',
      },
    });
    return store.dispatch(actions.addNewPage(testNumber)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it('saveNumberOfPages completed successfully', () => {
    const expectedAction = [
      {
        type: 'UPDATE_NUMBER_OF_PAGES',
        payload: testNumber,
      },
    ];
    const store = mockStore({});
    return store.dispatch(actions.saveNumberOfPages(testNumber)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it('saveNumberOfFilms completed successfully', () => {
    const expectedAction = [
      {
        type: 'UPDATE_NUMBER_OF_FILMS',
        payload: testNumber,
      },
    ];
    const store = mockStore({});
    return store.dispatch(actions.saveNumberOfFilms(testNumber)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it('confirmAddedPages completed successfully', () => {
    const expectedAction = [
      {
        type: 'UPDATE_UPLOADED_PAGES',
        payload: testNumber,
      },
    ];
    const store = mockStore({});
    return store.dispatch(actions.confirmAddedPages(testNumber)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it('clearActualFilms completed successfully', () => {
    const expectedAction = [
      {
        type: 'CLEAR_COLLECTION',
      },
    ];
    const store = mockStore({});
    return store.dispatch(actions.clearActualFilms()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it('confirmSearchResult completed successfully', () => {
    const expectedAction = [
      {
        type: 'CONFIRM_SEARCH_RESULT',
        payload: testNumber,
      },
    ];
    const store = mockStore({});
    return store.dispatch(actions.confirmSearchResult(testNumber)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it('switchPage completed successfully', () => {
    const expectedAction = [
      {
        type: 'UPDATE_UPLOADED_PAGES',
        payload: 2,
      },
      {
        type: 'UPDATE_ACTUAL_PAGE',
        payload: 2,
      },
    ];
    const store = mockStore({
      filmListModuleReducer: {
        uploadedPages: 1,
        totalFilms: 24,
      },
    });
    return store.dispatch(actions.switchPage(2)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it('switchPage completed successfully with incorrect input', () => {
    const expectedAction = [];
    const store = mockStore({
      filmListModuleReducer: {
        uploadedPages: 1,
        totalFilms: 1,
      },
    });
    return store.dispatch(actions.switchPage(2)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it('loadActualFilms completed successfully', () => {
    const requestParams = { page: 1, adult: false };
    fetchMock.getOnce(createAdressString('movie', 'upcoming', requestParams), {
      headers: { 'content-type': 'application/json' },
      body: {
        results: [{ name: 'example' }],
        total_pages: 2,
        total_results: 20,
      },
    });
    const expectedAction = [
      {
        type: 'UPDATE_NUMBER_OF_PAGES',
        payload: 2,
      },
      {
        type: 'UPDATE_NUMBER_OF_FILMS',
        payload: 20,
      },
      {
        type: 'UPDATE_UPLOADED_PAGES',
        payload: 1,
      },
      {
        type: 'LOAD_MOVIE_LIST',
        payload: [{ name: 'example' }],
      },
    ];
    const store = mockStore({});
    return store.dispatch(actions.loadActualFilms()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it('loadSearchResults completed successfully', () => {
    const requestParams = { query: 'searchString', page: 1, adult: false };
    fetchMock.getOnce(createAdressString('search', 'movie', requestParams), {
      headers: { 'content-type': 'application/json' },
      body: {
        results: [{ name: 'example' }],
        total_pages: 2,
        total_results: 20,
      },
    });
    const expectedAction = [
      {
        type: 'UPDATE_NUMBER_OF_PAGES',
        payload: 2,
      },
      {
        type: 'UPDATE_NUMBER_OF_FILMS',
        payload: 20,
      },
      {
        type: 'UPDATE_UPLOADED_PAGES',
        payload: 1,
      },
      {
        type: 'UPDATE_ACTUAL_PAGE',
        payload: 1,
      },
      {
        type: 'CONFIRM_SEARCH_RESULT',
        payload: true,
      },
      {
        type: 'LOAD_MOVIE_LIST',
        payload: [{ name: 'example' }],
      },
    ];
    const store = mockStore({
      filmListModuleReducer: {
        uploadedPages: 1,
        totalFilms: 24,
      },
    });
    return store.dispatch(actions.loadSearchResults('searchString')).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it('loadSearchResults completed successfully without results', () => {
    const requestParams = { query: 'searchString', page: 1, adult: false };
    fetchMock.getOnce(createAdressString('search', 'movie', requestParams), {
      headers: { 'content-type': 'application/json' },
      body: {
        results: [{ name: 'example' }],
        total_pages: 0,
        total_results: 0,
      },
    });
    const expectedAction = [
      {
        type: 'UPDATE_NUMBER_OF_PAGES',
        payload: 0,
      },
      {
        type: 'UPDATE_NUMBER_OF_FILMS',
        payload: 0,
      },
      {
        type: 'UPDATE_UPLOADED_PAGES',
        payload: 1,
      },
      {
        type: 'UPDATE_ACTUAL_PAGE',
        payload: 1,
      },
      {
        type: 'CONFIRM_SEARCH_RESULT',
        payload: false,
      },
      {
        type: 'LOAD_MOVIE_LIST',
        payload: [{ name: 'example' }],
      },
    ];
    const store = mockStore({
      filmListModuleReducer: {
        uploadedPages: 1,
        totalFilms: 24,
      },
    });
    return store.dispatch(actions.loadSearchResults('searchString')).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it('startSearch completed successfully', () => {
    const requestParams = { query: 'searchString', page: 1, adult: false };
    fetchMock.getOnce(createAdressString('search', 'movie', requestParams), {
      headers: { 'content-type': 'application/json' },
      body: {
        results: [{ name: 'example' }],
        total_pages: 0,
        total_results: 0,
      },
    });
    const expectedAction = [
      {
        type: 'CLEAR_COLLECTION',
      },
      {
        type: 'UPDATE_NUMBER_OF_PAGES',
        payload: 0,
      },
      {
        type: 'UPDATE_NUMBER_OF_FILMS',
        payload: 0,
      },
      {
        type: 'UPDATE_UPLOADED_PAGES',
        payload: 1,
      },
      {
        type: 'UPDATE_ACTUAL_PAGE',
        payload: 1,
      },
      {
        type: 'CONFIRM_SEARCH_RESULT',
        payload: false,
      },
      {
        type: 'LOAD_MOVIE_LIST',
        payload: [{ name: 'example' }],
      },
      {
        type: 'SAVE_SEARCH_STRING',
        payload: 'searchString',
      },
    ];
    const store = mockStore({
      filmListModuleReducer: {
        uploadedPages: 1,
        totalFilms: 24,
        searchString: '',
      },
    });
    return store.dispatch(actions.startSearch('searchString')).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it('startSearch completed successfully with simular string', () => {
    const requestParams = { query: 'searchString', page: 1, adult: false };
    fetchMock.getOnce(createAdressString('search', 'movie', requestParams), {
      headers: { 'content-type': 'application/json' },
      body: {
        results: [{ name: 'example' }],
        total_pages: 0,
        total_results: 0,
      },
    });
    const expectedAction = [];
    const store = mockStore({
      filmListModuleReducer: {
        uploadedPages: 1,
        totalFilms: 24,
        searchString: 'searchString',
      },
    });
    return store.dispatch(actions.startSearch('searchString')).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it('loadGenres completed successfully', () => {
    fetchMock.getOnce(createAdressString('genre/movie', 'list'), {
      headers: { 'content-type': 'application/json' },
      body: { example: 'example' },
    });
    const expectedAction = [
      {
        type: 'LOAD_GENRE_LIST',
        payload: { example: 'example' },
      },
    ];
    const store = mockStore({});
    return store.dispatch(actions.loadGenres()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it('moveLeft completed successfully', () => {
    const expectedAction = [
      {
        type: 'UPDATE_ACTUAL_PAGE',
        payload: 1,
      },
    ];
    const store = mockStore({
      filmListModuleReducer: {
        uploadedPages: 2,
        totalFilms: 24,
        actualPage: 2,
      },
    });
    return store.dispatch(actions.moveLeft(2)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it('moveLeft completed successfully without result', () => {
    const expectedAction = [];
    const store = mockStore({
      filmListModuleReducer: {
        uploadedPages: 2,
        totalFilms: 24,
        actualPage: 1,
      },
    });
    return store.dispatch(actions.moveLeft(2)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it('moveRight completed successfully', () => {
    const expectedAction = [
      {
        type: 'UPDATE_ACTUAL_PAGE',
        payload: 2,
      },
    ];
    const store = mockStore({
      filmListModuleReducer: {
        uploadedPages: 2,
        totalFilms: 24,
        actualPage: 1,
      },
    });
    return store.dispatch(actions.moveRight(2)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it('moveRight completed successfully without result', () => {
    const expectedAction = [];
    const store = mockStore({
      filmListModuleReducer: {
        uploadedPages: 2,
        totalFilms: 24,
        actualPage: 2,
      },
    });
    return store.dispatch(actions.moveRight(2)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it('moveLeftToEnd completed successfully', () => {
    const expectedAction = [
      {
        type: 'UPDATE_ACTUAL_PAGE',
        payload: 1,
      },
    ];
    const store = mockStore({
      filmListModuleReducer: {
        uploadedPages: 3,
        totalFilms: 36,
        actualPage: 3,
      },
    });
    return store.dispatch(actions.moveLeftToEnd(3)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it('moveLeftToEnd completed successfully without result', () => {
    const expectedAction = [];
    const store = mockStore({
      filmListModuleReducer: {
        uploadedPages: 3,
        totalFilms: 36,
        actualPage: 1,
      },
    });
    return store.dispatch(actions.moveLeftToEnd(3)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it('moveRightToEnd completed successfully', () => {
    const expectedAction = [
      {
        type: 'UPDATE_ACTUAL_PAGE',
        payload: 3,
      },
    ];
    const store = mockStore({
      filmListModuleReducer: {
        uploadedPages: 3,
        totalFilms: 36,
        actualPage: 1,
      },
    });
    return store.dispatch(actions.moveRightToEnd(3)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it('moveRightToEnd completed successfully without result', () => {
    const expectedAction = [];
    const store = mockStore({
      filmListModuleReducer: {
        uploadedPages: 3,
        totalFilms: 36,
        actualPage: 3,
      },
    });
    return store.dispatch(actions.moveRightToEnd(3)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
