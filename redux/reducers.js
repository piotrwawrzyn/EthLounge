import matchReducer from './match/matchReducer';
import loginReducer from './layout/loginReducer';
import { combineReducers } from 'redux';

const lastAction = (state = null, action) => {
  return action;
};

export default combineReducers({
  login: loginReducer,
  match: matchReducer,
  lastAction: lastAction
});
