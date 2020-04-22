import { createSelector } from 'reselect';

const getActualFilms = (store) => store.filmListModuleReducer.actualFilms;
const getGenreList = (store) => store.filmListModuleReducer.genreList;
const getMostPopularFilm = (store) => store.filmListModuleReducer.mostPopularFilm;
const getTotalPages = (store) => store.filmListModuleReducer.totalPages;
const getActualPage = (store) => store.filmListModuleReducer.actualPage;


const getMoviesInfo = createSelector(
  [getActualFilms, getActualPage], (actualFilms, actualPage) => {
    if (actualFilms[0] !== undefined) {
      const page = 12 * (actualPage - 1);
      return actualFilms.slice(page, page + 12);
    }
    return [];
  },
);

export const getGenres = createSelector(
  [getGenreList], (genreList) => {
    if (genreList !== undefined) return genreList.genres;
    return {};
  },
);

export const getTopFilm = createSelector(
  [getMostPopularFilm], (mostPopularFilm) => {
    if (mostPopularFilm.results !== undefined) {
      const temp = mostPopularFilm.results[0];
      temp.vote_average = (temp.vote_average / 2).toFixed(1);
      return temp;
    }
    return {};
  },
);

export const genGenreString = (genres, filmGenres) => {
  let result = '';
  filmGenres.forEach((elem) => {
    const genre = genres.find((type) => {
      if (type.id === elem) return true;
      return false;
    });
    result = result.concat(genre.name, ' ');
  });
  return result.slice(0, -1);
};

export const getTopFilmGenres = createSelector(
  [getGenres, getTopFilm], (genreList, mostPopularFilm) => {
    if (!genreList || !mostPopularFilm.genre_ids) {
      return '';
    }
    return genreList.filter((genre) => mostPopularFilm.genre_ids.includes(genre.id)).map((genre) => genre.name).join(', ');
  },
);

export const getNumberOfPages = createSelector(
  [getTotalPages], (totalPages) => totalPages,
);

export default getMoviesInfo;
