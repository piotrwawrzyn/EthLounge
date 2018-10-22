import axios from 'axios';

export function login(gambler) {
  return {
    type: 'LOG_IN',
    gambler: gambler
  };
}

export const logout = () => async dispatch => {
  await axios.get('/logout');
  dispatch({ type: 'LOG_OUT' });
};
