import { createSelector } from 'reselect';

const getStatus = (store) => store.singleFilmModuleReducer.status;
const getRoot = (store) => store.singleFilmModuleReducer.root;


export const isModalActive = createSelector(
  [getStatus], (status) => status,
);

export const getVideoLink = createSelector(
  [getRoot], (root) => root,
);

export default isModalActive;
