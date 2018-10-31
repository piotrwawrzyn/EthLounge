import axios from 'axios';

export function login(user) {
  return {
    type: 'LOG_IN',
    user: user
  };
}

export const logout = () => async dispatch => {
  await axios.get('/logout');
  dispatch({ type: 'LOG_OUT' });
};
