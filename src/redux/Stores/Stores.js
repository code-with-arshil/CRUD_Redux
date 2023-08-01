
import { createStore } from 'redux';
import rootReducer from '../Reducers/Combinereducers';

const store = createStore(rootReducer);

export default store;
