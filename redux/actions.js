export function addToken(token) {
  return {
    type: 'ADD_TOKEN',
    token
  };
}

export function changeTokenPosition(token, pos) {
  return {
    type: 'CHANGE_POS',
    token,
    pos
  };
}

export function changeTokenAmount(token) {
  return {
    type: 'CHANGE_AMOUNT',
    token
  };
}

export function updateEstimateBet(sum) {
  return {
    type: 'UPDATE_ESTIMATE_BET',
    sum
  };
}

export function updatePrices(prices) {
  return {
    type: 'UPDATE_PRICES',
    prices
  };
}

export function pickTeam(team) {
  return {
    type: 'PICK_TEAM',
    team
  };
}

export function toggleErrorModal(head = '', reasons = []) {
  return {
    type: 'TOGGLE_ERROR_MODAL',
    head: head,
    reasons: reasons
  };
}

export function toggleModal(property) {
  return {
    type: 'TOGGLE_MODAL',
    property
  };
}
