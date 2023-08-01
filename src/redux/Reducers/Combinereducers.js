// src/reducers/index.js
import { combineReducers } from 'redux';
import profileReducer from './Reducers';

const rootReducer = combineReducers({
  profiles: profileReducer,
});

export default rootReducer;
