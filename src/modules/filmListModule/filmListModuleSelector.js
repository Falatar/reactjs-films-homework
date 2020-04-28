import { createSelector } from 'reselect';

const getActualFilms = (store) => store.filmListModuleReducer.actualFilms;
const getGenreList = (store) => store.filmListModuleReducer.genreList;
const getMostPopularFilm = (store) => store.filmListModuleReducer.mostPopularFilm;
const getTotalPages = (store) => store.filmListModuleReducer.totalPages;
const getActualPage = (store) => store.filmListModuleReducer.actualPage;


export const getGenres = createSelector(
  [getGenreList], (genreList) => {
    if (genreList) return genreList.genres;
    return undefined;
  },
);

const getMoviesInfo = createSelector(
  [getActualFilms, getActualPage, getGenres], (actualFilms, actualPage, genreList) => {
    if (actualFilms[0]) {
      const itemsOnPage = 12;
      const page = itemsOnPage * (actualPage - 1);
      return actualFilms.slice(page, page + itemsOnPage).map((film) => {
        const result = { ...film };
        result.genre_str = genreList.filter((genre) => film.genre_ids.includes(genre.id)).map((genre) => genre.name).join(', ');
        return result;
      });
    }
    return undefined;
  },
);

export const getTopFilm = createSelector(
  [getMostPopularFilm, getGenres], (mostPopularFilm, genreList) => {
    if (mostPopularFilm.results && genreList) {
      const temp = mostPopularFilm.results[0];
      temp.vote_average = (temp.vote_average / 2).toFixed(1);
      temp.genre_str = genreList.filter((genre) => temp.genre_ids.includes(genre.id)).map((genre) => genre.name).join(', ');
      return temp;
    }
    return undefined;
  },
);

export const getNumberOfPages = createSelector(
  [getTotalPages], (totalPages) => totalPages,
);

export default getMoviesInfo;
