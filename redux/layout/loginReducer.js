import _ from 'lodash';

const initialState = {
  user: null
};

const loginReducer = (state = initialState, action) => {
  let newState = _.cloneDeep(state);

  switch (action.type) {
    case 'LOG_OUT': {
      newState = { user: false };
      break;
    }

    case 'LOG_IN': {
      newState.user = action.user || false;
      break;
    }
  }

  return newState;
};

export default loginReducer;
