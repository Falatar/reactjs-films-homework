import { createSelector } from 'reselect';

const getActualFilms = (store) => store.filmListModuleReducer.actualFilms;
const getGenreList = (store) => store.filmListModuleReducer.genreList;
const getMostPopularFilm = (store) => store.filmListModuleReducer.mostPopularFilm;


const getMoviesInfo = createSelector(
  [getActualFilms], (actualFilms) => {
    if (actualFilms.results !== undefined) return actualFilms.results.slice(0, 12);
    return {};
  },
);

export const getGenres = createSelector(
  [getGenreList], (genreList) => {
    if (genreList !== undefined) return genreList;
    return {};
  },
);

export const getTopFilm = createSelector(
  [getMostPopularFilm], (mostPopularFilm) => {
    if (mostPopularFilm.results !== undefined) return mostPopularFilm.results[0];
    return {};
  },
);

export default getMoviesInfo;
