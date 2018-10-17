webpackHotUpdate("static\\development\\pages\\matches\\match.js",{

/***/ "./redux/match/actions.js":
/*!********************************!*\
  !*** ./redux/match/actions.js ***!
  \********************************/
/*! exports provided: addTokens, changeTokenPosition, changeTokenAmount, updateEstimateBet, updatePrices, pickTeam, toggleErrorModal, toggleModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTokens", function() { return addTokens; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeTokenPosition", function() { return changeTokenPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeTokenAmount", function() { return changeTokenAmount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateEstimateBet", function() { return updateEstimateBet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePrices", function() { return updatePrices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pickTeam", function() { return pickTeam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleErrorModal", function() { return toggleErrorModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleModal", function() { return toggleModal; });
function addTokens(tokens) {
  return {
    type: 'ADD_TOKENS',
    tokens: tokens
  };
}
function changeTokenPosition(token, pos) {
  return {
    type: 'CHANGE_POS',
    token: token,
    pos: pos
  };
}
function changeTokenAmount(token) {
  return {
    type: 'CHANGE_AMOUNT',
    token: token
  };
}
function updateEstimateBet(sum) {
  return {
    type: 'UPDATE_ESTIMATE_BET',
    sum: sum
  };
}
function updatePrices(prices) {
  return {
    type: 'UPDATE_PRICES',
    prices: prices
  };
}
function pickTeam(team) {
  return {
    type: 'PICK_TEAM',
    team: team
  };
}
function toggleErrorModal() {
  var head = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var reasons = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return {
    type: 'TOGGLE_ERROR_MODAL',
    head: head,
    reasons: reasons
  };
}
function toggleModal(property) {
  return {
    type: 'TOGGLE_MODAL',
    property: property
  };
}

/***/ })

})
//# sourceMappingURL=match.js.1f1a571b952b37151797.hot-update.js.map