import expect from 'expect';
import * as selector from '../filmListModuleSelector';

describe('filmListModuleSelector', () => {
  it('getGenres works correctly', () => {
    const state = {
      filmListModuleReducer: {
        genreList: { genres: 'example' },
      },
    };
    expect(selector.getGenres(state)).toEqual('example');
  });

  it('getGenres works correctly with empty store', () => {
    const state = {
      filmListModuleReducer: {
        genreList: '',
      },
    };
    expect(selector.getGenres(state)).toEqual(undefined);
  });

  it('getMoviesInfo works correctly', () => {
    const state = {
      filmListModuleReducer: {
        actualFilms: [
          { vote_average: 10, genre_ids: [1, 3] },
          { vote_average: 8, genre_ids: [2, 3] },
          { vote_average: 6, genre_ids: [1, 2] },
        ],
        actualPage: 1,
        genreList: {
          genres: [
            { id: 1, name: 'Genre_1' },
            { id: 2, name: 'Genre_2' },
            { id: 3, name: 'Genre_3' },
          ],
        },
      },
    };
    expect(selector.getMoviesInfo(state)).toEqual([
      { vote_average: 5, genre_ids: [1, 3], genre_str: 'Genre_1, Genre_3' },
      { vote_average: 4, genre_ids: [2, 3], genre_str: 'Genre_2, Genre_3' },
      { vote_average: 3, genre_ids: [1, 2], genre_str: 'Genre_1, Genre_2' },
    ]);
  });

  it('getMoviesInfo works correctly with empty store', () => {
    const state = {
      filmListModuleReducer: {
        actualFilms: [],
        actualPage: 1,
        genreList: {
          genres: [
            { id: 1, name: 'Genre_1' },
            { id: 2, name: 'Genre_2' },
            { id: 3, name: 'Genre_3' },
          ],
        },
      },
    };
    expect(selector.getMoviesInfo(state)).toEqual(undefined);
  });

  it('getTopFilm works correctly', () => {
    const state = {
      filmListModuleReducer: {
        mostPopularFilm: {
          results: [{
            vote_average: 7,
            genre_ids: [3, 2, 1],
          }],
        },
        actualPage: 1,
        genreList: {
          genres: [
            { id: 1, name: 'Genre_1' },
            { id: 2, name: 'Genre_2' },
            { id: 3, name: 'Genre_3' },
          ],
        },
      },
    };
    expect(selector.getTopFilm(state)).toEqual({ vote_average: '3.5', genre_ids: [3, 2, 1], genre_str: 'Genre_1, Genre_2, Genre_3' });
  });

  it('getTopFilm works correctly with empty store', () => {
    const state = {
      filmListModuleReducer: {
        mostPopularFilm: {},
        actualPage: 1,
        genreList: {
          genres: [
            { id: 1, name: 'Genre_1' },
            { id: 2, name: 'Genre_2' },
            { id: 3, name: 'Genre_3' },
          ],
        },
      },
    };
    expect(selector.getTopFilm(state)).toEqual(undefined);
  });

  it('getNumberOfFilms works correctly', () => {
    const state = {
      filmListModuleReducer: {
        totalFilms: 5,
      },
    };
    expect(selector.getNumberOfFilms(state)).toEqual(5);
  });

  it('getCurrentPage works correctly', () => {
    const state = {
      filmListModuleReducer: {
        actualPage: 3,
      },
    };
    expect(selector.getCurrentPage(state)).toEqual(3);
  });

  it('getSearchResult works correctly', () => {
    const state = {
      filmListModuleReducer: {
        successfullSearch: true,
      },
    };
    expect(selector.getSearchResult(state)).toEqual(true);
  });
});
