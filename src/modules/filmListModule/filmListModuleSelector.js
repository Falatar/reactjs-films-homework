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

export default getMoviesInfo;
