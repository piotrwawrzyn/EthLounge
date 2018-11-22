import _ from 'lodash';
import EstimateBetValue from '../../utils/estimateBetValue';

const initialState = {
  tokens: { toBet: [], wallet: [] },
  betValue: 0,
  pickedTeam: {},
  errorModal: { isOpen: false, head: '', reasons: [] },
  confirmBetModal: { isOpen: false }
};

const matchReducer = (state = initialState, action) => {
  let newState = _.cloneDeep(state);

  switch (action.type) {
    case 'ADD_TOKENS': {
      
      // Reset state
      newState = { ...initialState };

      const tokens = action.tokens.map(token => {
        return {
          ...token,
          position: 'balance-box',
          initialBalance: token.balance
        };
      });

      newState.tokens.wallet = tokens;
      break;
    }

    case 'CHANGE_POS': {
      if (action.token.position === 'balance-box') {
        action.token.position = 'betting-box';
        newState.tokens.toBet.push(action.token);
        newState.tokens.wallet = newState.tokens.wallet.filter(
          curr => curr.symbol != action.token.symbol
        );
      } else {
        action.token.position = 'balance-box';
        action.token.balance = action.token.initialBalance;
        newState.tokens.wallet.push(action.token);
        newState.tokens.toBet = newState.tokens.toBet.filter(
          curr => curr.symbol != action.token.symbol
        );
      }

      newState.betValue = EstimateBetValue(newState.tokens.toBet, false);

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
      break;
    }
  }

  return newState;
};

export default matchReducer;
