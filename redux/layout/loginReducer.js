import _ from 'lodash';

const initialState = {
  signedIn: false,
  account: ''
};

const loginReducer = (state = initialState, action) => {
  let newState = _.cloneDeep(state);

  switch (action.type) {
    case 'LOG_OUT': {
      newState = { ...initialState };
      newState.prices = state.prices;
      console.log('Logged out! State is now: ', newState);
      break;
    }

    case 'LOG_IN': {
      newState.account = action.account;
      newState.signedIn = true;
      console.log('Logging in! State is now: ', newState);
      break;
    }
  }

  return newState;
};

export default loginReducer;
