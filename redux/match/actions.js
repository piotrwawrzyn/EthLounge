export const addTokens = tokens => {
  return {
    type: 'ADD_TOKENS',
    tokens
  };
};

export const changeTokenPosition = (token, pos) => {
  return {
    type: 'CHANGE_POS',
    token
  };
};

export const changeTokenAmount = token => {
  return {
    type: 'CHANGE_AMOUNT',
    token
  };
};

export const updateEstimateBet = sum => {
  return {
    type: 'UPDATE_ESTIMATE_BET',
    sum
  };
};

export const pickTeam = team => {
  return {
    type: 'PICK_TEAM',
    team
  };
};

export const toggleErrorModal = (head = '', reasons = []) => {
  return {
    type: 'TOGGLE_ERROR_MODAL',
    head: head,
    reasons: reasons
  };
};

export const toggleModal = property => {
  return {
    type: 'TOGGLE_MODAL',
    property
  };
};
