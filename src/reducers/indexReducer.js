import { combineReducers } from 'redux';
import { filmReducer } from './filmReducer';
import { moviewReducer } from './moviewReducer';

export default combineReducers({
  filmReducer,
  moviewReducer,
});
