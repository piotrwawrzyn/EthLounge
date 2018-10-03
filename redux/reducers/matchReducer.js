import _ from 'lodash';
import EstimateBetValue from '../../components/helpers/EstimateBetValue';

const initialState = {items: {toBet: [], wallet: []}, account: '', signedIn: false, prices: {}, betValue: 0};

const matchReducer = (state = {items: {toBet: [], wallet: []}, account: '', signedIn: false, prices: {}, betValue: 0}, action) => {
    let newState = _.cloneDeep(state);

    switch(action.type) {               
        case 'ADD_ITEM': {
            console.log('ADD_ITEM');
            if(newState.items.wallet.some((curr) => curr.token == action.item.token)) return;
            if(newState.items.wallet.some((curr) => curr.token == action.item.token)) return;
            
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

            // After every item's move estimate bet value without dispatching
            newState.betValue = EstimateBetValue(newState.items.toBet, newState.prices, false);

            break;
        }

        case 'LOG_OUT': {
            newState = {items: {toBet: [], wallet: []}, account: '', signedIn: false, betValue: 0, prices: newState.prices};
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

        case 'DOWNLOAD_PRICES': {
            newState.prices = action.prices;
            break;
        }

        case 'UPDATE_ESTIMATE_BET': {
            newState.betValue = action.sum;
            break;
        }


    }
    
    return newState;
}

export default matchReducer;