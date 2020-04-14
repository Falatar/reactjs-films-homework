import { combineReducers } from 'redux';
import { filmListModuleReducer } from './modules/filmListModule/filmListModuleReducer';
import { singleFilmModalReducer } from './modules/singleFilmModule/singleFilmModuleReducer';

export default combineReducers({
  filmListModuleReducer,
  singleFilmModalReducer,
});
