import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers/indexReducer';

export const store = createStore(rootReducer, applyMiddleware(thunk));
export default { store };
