import {createStore, combineReducers} from 'redux';
import AuthReducers from './reducers/authReducers';

const rootReducer = combineReducers({
  auth: AuthReducers,
});

export const store = createStore(rootReducer);
