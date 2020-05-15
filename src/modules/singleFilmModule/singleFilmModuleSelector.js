import { createSelector } from 'reselect';

const getStatus = (store) => store.singleFilmModalReducer.status;
const getRoot = (store) => store.singleFilmModalReducer.root;


export const isModalActive = createSelector(
  [getStatus], (status) => status,
);

export const getVideoLink = createSelector(
  [getRoot], (root) => root,
);

export default isModalActive;
