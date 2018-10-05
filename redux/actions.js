export function addItem(item) {
    return {
        type: 'ADD_ITEM',
        item
    }
}

export function changeItemPosition(item, pos) {
    return {
        type: 'CHANGE_POS',
        item,
        pos
    }
}

export function changeItemAmount(item) {
    return {
        type: 'CHANGE_AMOUNT',
        item
    }
}

export function updateEstimateBet(sum) {
    return {
        type: 'UPDATE_ESTIMATE_BET',
        sum
    }
}

export function updatePrices(prices) {
    return {
        type: 'UPDATE_PRICES',
        prices
    }
}

export function pickTeam(team) {
    return {
        type: 'PICK_TEAM',
        team
    }
}

export function toggleModal(head = '', reasons = []) {
    return {
        type: 'TOGGLE_MODAL',
        head: head,
        reasons: reasons
    }
}
