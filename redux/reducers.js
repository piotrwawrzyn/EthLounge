import _ from 'lodash';
import EstimateBetValue from '../helpers/EstimateBetValue';

const initialState = {tokens: {toBet: [], wallet: []}, account: '', signedIn: false, prices: {}, betValue: 0, pickedTeam: {}, errorModal: {isOpen: false, head: '', reasons: [] }, confirmBetModal: {isOpen: false}};

const matchReducer = (state = initialState, action) => {
    let newState = _.cloneDeep(state);

    switch(action.type) {               
        case 'ADD_TOKEN': {
            if (newState.tokens.wallet.some( (curr) => curr.address == action.token.address) ) return;
            if (newState.tokens.toBet.some( (curr) => curr.address == action.token.address) ) return;
           
            newState.tokens.wallet.push(action.token);
            
            break;
        }  

        case 'CHANGE_POS': {
            console.log(action.token, state)          
            if (action.token.position === 'balance-box') {
                action.token.position = action.pos;
                newState.tokens.toBet.push(action.token);
                newState.tokens.wallet = newState.tokens.wallet.filter((curr) => curr.address != action.token.address);
            } else {
                action.token.position = 'balance-box';
                action.token.amount = action.token.initialAmount;
                newState.tokens.wallet.push(action.token);
                newState.tokens.toBet = newState.tokens.toBet.filter((curr) => curr.address != action.token.address);           
            }

            newState.betValue = EstimateBetValue(newState.tokens.toBet, newState.prices, false);

            break;
        }

        case 'LOG_OUT': {
            newState = {...initialState};
            newState.prices = state.prices;
            console.log('Logged out! State is now: ', newState);
            break;
        }  

        case 'LOG_IN': {
            console.log('Loggin in...');
            newState.account = action.account;
            newState.signedIn = true;
            console.log('Logging in! State is now: ', newState);
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



    }
    
    return newState;
}

export default matchReducer;