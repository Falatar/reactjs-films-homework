import { combineReducers } from 'redux';
import { filmListModuleReducer } from './modules/filmListModule/filmListModuleReducer';
import { singleFilmModuleReducer } from './modules/singleFilmModule/singleFilmModuleReducer';

export default combineReducers({
  filmListModuleReducer,
  singleFilmModuleReducer,
});
