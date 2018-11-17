import matchReducer from './match/reducer';
import layoutReducer from './layout/reducer';
import { combineReducers } from 'redux';

const lastAction = (state = null, action) => {
  return action;
};

export default combineReducers({
  login: layoutReducer,
  match: matchReducer,
  lastAction: lastAction
});
