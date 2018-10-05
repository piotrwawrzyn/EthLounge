import _ from 'lodash';
import EstimateBetValue from '../helpers/EstimateBetValue';

const initialState = {items: {toBet: [], wallet: []}, account: '', signedIn: false, prices: {}, betValue: 0, pickedTeam: {}, errorModal: {isOpen: false, head: '', reasons: [] }};

const matchReducer = (state = initialState, action) => {
    let newState = _.cloneDeep(state);

    switch(action.type) {               
        case 'ADD_ITEM': {
            if(newState.items.wallet.some((curr) => curr.token == action.item.token)) return;
            if(newState.items.toBet.some((curr) => curr.token == action.item.token)) return;
           
            newState.items.wallet.push(action.item);
            
            break;
        }  

        case 'CHANGE_POS': {          
            if (action.item.position === 'token-box') {
                action.item.position = action.pos;
                newState.items.toBet.push(action.item);
                newState.items.wallet = newState.items.wallet.filter((curr) => curr.token != action.item.token);
            } else {
                action.item.position = 'token-box';
                action.item.amount = action.item.initialAmount;
                newState.items.wallet.push(action.item);
                newState.items.toBet = newState.items.toBet.filter((curr) => curr.token != action.item.token);           
            }

            newState.betValue = EstimateBetValue(newState.items.toBet, newState.prices, false);

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
            newState.errorModal.isOpen = !state.errorModal.isOpen;
            newState.errorModal.head = action.head;
            newState.errorModal.reasons = action.reasons;
            break;
        }

    }
    
    return newState;
}

export default matchReducer;