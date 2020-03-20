import { combineReducers } from 'redux';
import { filmReducer } from './filmReducer';
import { moviewReducer } from './moviewReducer';
import { modalReducer } from './modalReducer';

export default combineReducers({
  filmReducer,
  moviewReducer,
  modalReducer,
});
