import axios from 'axios';

export const login = user => {
  return {
    type: 'LOG_IN',
    user: user
  };
};

export const logout = () => async dispatch => {
  await axios.get('/logout');
  dispatch({ type: 'LOG_OUT' });
};

export const toggleSignUpModal = () => {
  return {
    type: 'TOGGLE_SIGNUP_MODAL'
  };
};

export const toggleSignInModal = () => {
  return {
    type: 'TOGGLE_SIGNIN_MODAL'
  };
};
