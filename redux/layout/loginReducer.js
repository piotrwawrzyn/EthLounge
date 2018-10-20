import _ from 'lodash';

const initialState = {
  gambler: {}
};

const loginReducer = (state = initialState, action) => {
  let newState = _.cloneDeep(state);

  switch (action.type) {
    case 'LOG_OUT': {
      newState = { ...initialState };
      console.log('Logged out! State is now: ', newState);
      break;
    }

    case 'LOG_IN': {
      newState.gambler = action.gambler;
      console.log('Logging in! State is now: ', newState);
      break;
    }
  }

  return newState;
};

export default loginReducer;
