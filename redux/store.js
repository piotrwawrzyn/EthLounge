import reducer from './reducers/matchReducer';
import { createStore } from 'redux';

const store = createStore(reducer);

export default store;