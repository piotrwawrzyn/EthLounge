import _ from 'lodash';
import EstimateBetValue from '../../utils/EstimateBetValue';

const initialState = {
  tokens: { toBet: [], wallet: [] },
  prices: {},
  betValue: 0,
  pickedTeam: {},
  errorModal: { isOpen: false, head: '', reasons: [] },
  confirmBetModal: { isOpen: false }
};

const matchReducer = (state = initialState, action) => {
  let newState = _.cloneDeep(state);

  switch (action.type) {
    case 'ADD_TOKENS': {
      newState.tokens.wallet = action.tokens;

      break;
    }

    case 'CHANGE_POS': {
      console.log(action.token, state);
      if (action.token.position === 'balance-box') {
        action.token.position = action.pos;
        newState.tokens.toBet.push(action.token);
        newState.tokens.wallet = newState.tokens.wallet.filter(
          curr => curr.address != action.token.address
        );
      } else {
        action.token.position = 'balance-box';
        action.token.amount = action.token.initialAmount;
        newState.tokens.wallet.push(action.token);
        newState.tokens.toBet = newState.tokens.toBet.filter(
          curr => curr.address != action.token.address
        );
      }

      newState.betValue = EstimateBetValue(
        newState.tokens.toBet,
        newState.prices,
        false
      );

      break;
    }

    case 'UPDATE_PRICES': {
      newState.prices = action.prices;
      break;
    }

    case 'UPDATE_ESTIMATE_BET': {
      newState.betValue = action.sum;
      break;
    }

    case 'PICK_TEAM': {
      newState.pickedTeam = action.team;
      break;
    }

    case 'TOGGLE_MODAL': {
      newState[action.property].isOpen = !newState[action.property].isOpen;
      break;
    }

    case 'TOGGLE_ERROR_MODAL': {
      newState.errorModal.isOpen = !state.errorModal.isOpen;
      newState.errorModal.head = action.head;
      newState.errorModal.reasons = action.reasons;
      break;
    }

    case 'LOG_OUT': {
      newState = { ...initialState };
      newState.prices = state.prices;
      break;
    }
  }

  return newState;
};

export default matchReducer;
