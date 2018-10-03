webpackHotUpdate("static\\development\\pages\\matches\\match.js",{

/***/ "./redux/actions/actions.js":
/*!**********************************!*\
  !*** ./redux/actions/actions.js ***!
  \**********************************/
/*! exports provided: addItem, changeItemPosition, changeItemAmount, updateEstimateBet, updatePrices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addItem", function() { return addItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeItemPosition", function() { return changeItemPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeItemAmount", function() { return changeItemAmount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateEstimateBet", function() { return updateEstimateBet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePrices", function() { return updatePrices; });
function addItem(item) {
  return {
    type: 'ADD_ITEM',
    item: item
  };
}
function changeItemPosition(item, pos) {
  return {
    type: 'CHANGE_POS',
    item: item,
    pos: pos
  };
}
function changeItemAmount(item) {
  return {
    type: 'CHANGE_AMOUNT',
    item: item
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

/***/ })

})
//# sourceMappingURL=match.js.abaf1bbbf3af9fab74a4.hot-update.js.map