import _ from 'lodash';

const initialState = {
  user: null,
  signInModal: { isOpen: false },
  signUpModal: { isOpen: false }
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

    case 'TOGGLE_SIGNIN_MODAL': {
      newState.signInModal.isOpen = !newState.signInModal.isOpen;
      break;
    }

    case 'TOGGLE_SIGNUP_MODAL': {
      newState.signUpModal.isOpen = !newState.signUpModal.isOpen;
      break;
    }
  }
  return newState;
};

export default loginReducer;
