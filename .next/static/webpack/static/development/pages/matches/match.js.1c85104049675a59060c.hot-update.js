webpackHotUpdate("static\\development\\pages\\matches\\match.js",{

/***/ "./redux/actions.js":
/*!**************************!*\
  !*** ./redux/actions.js ***!
  \**************************/
/*! exports provided: addToken, changeTokenPosition, changeTokenAmount, updateEstimateBet, updatePrices, pickTeam, toggleErrorModal, toggleModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToken", function() { return addToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeTokenPosition", function() { return changeTokenPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeTokenAmount", function() { return changeTokenAmount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateEstimateBet", function() { return updateEstimateBet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePrices", function() { return updatePrices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pickTeam", function() { return pickTeam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleErrorModal", function() { return toggleErrorModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleModal", function() { return toggleModal; });
function addToken(token) {
  return {
    type: "ADD_TOKEN",
    token: token
  };
}
function changeTokenPosition(token, pos) {
  return {
    type: "CHANGE_POS",
    token: token,
    pos: pos
  };
}
function changeTokenAmount(token) {
  return {
    type: "CHANGE_AMOUNT",
    token: token
  };
}
function updateEstimateBet(sum) {
  return {
    type: "UPDATE_ESTIMATE_BET",
    sum: sum
  };
}
function updatePrices(prices) {
  return {
    type: "UPDATE_PRICES",
    prices: prices
  };
}
function pickTeam(team) {
  return {
    type: "PICK_TEAM",
    team: team
  };
}
function toggleErrorModal() {
  var head = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var reasons = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return {
    type: "TOGGLE_ERROR_MODAL",
    head: head,
    reasons: reasons
  };
}
function toggleModal(property) {
  return {
    type: "TOGGLE_MODAL",
    property: property
  };
}

/***/ })

})
//# sourceMappingURL=match.js.1c85104049675a59060c.hot-update.js.map