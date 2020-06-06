import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import coreReducer from './coreReducer';

export const store = createStore(
  coreReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);
export default { store };
