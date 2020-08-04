import { createSelector } from 'reselect';
import itemsOnPage from './constants';

const getActualFilms = (store) => store.filmListModuleReducer.actualFilms;
const getGenreList = (store) => store.filmListModuleReducer.genreList;
const getMostPopularFilm = (store) => store.filmListModuleReducer.mostPopularFilm;
const getTotalFilms = (store) => store.filmListModuleReducer.totalFilms;
const getActualPage = (store) => store.filmListModuleReducer.actualPage;
const getSuccessfullSearch = (store) => store.filmListModuleReducer.successfullSearch;
const getView = (store) => store.filmListModuleReducer.view;

export const getGenres = createSelector(
  [getGenreList], (genreList) => {
    if (genreList) return genreList.genres;
    return undefined;
  },
);

const createGenreString = (film, genres) => genres.filter((genre) => film.genre_ids.includes(genre.id)).map((genre) => genre.name).join(', ');

export const getMoviesInfo = createSelector(
  [getActualFilms, getActualPage, getGenres], (actualFilms, actualPage, genreList) => {
    if (actualFilms[0]) {
      const page = itemsOnPage * (actualPage - 1);
      return actualFilms.slice(page, page + itemsOnPage).map((film) => {
        const result = { ...film };
        result.vote_average /= 2;
        result.genre_str = createGenreString(film, genreList);
        return result;
      });
    }
    return undefined;
  },
);

export const getTopFilm = createSelector(
  [getMostPopularFilm, getGenres], (mostPopularFilm, genreList) => {
    if (mostPopularFilm.results && genreList) {
      const temp = { ...mostPopularFilm.results[0] };
      temp.vote_average = (temp.vote_average / 2).toFixed(1);
      temp.genre_str = createGenreString(temp, genreList);
      return temp;
    }
    return undefined;
  },
);

export const getNumberOfFilms = createSelector(
  [getTotalFilms], (totalFilms) => totalFilms,
);

export const getCurrentPage = createSelector(
  [getActualPage], (actualPage) => actualPage,
);

export const getSearchResult = createSelector(
  [getSuccessfullSearch], (successfullSearch) => successfullSearch,
);

export const getActualView = createSelector(
  [getView], (View) => View,
);

export default getMoviesInfo;
