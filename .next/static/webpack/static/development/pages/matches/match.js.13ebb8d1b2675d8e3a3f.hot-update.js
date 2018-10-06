webpackHotUpdate("static\\development\\pages\\matches\\match.js",{

/***/ "./helpers/EstimateBetValue.js":
/*!*************************************!*\
  !*** ./helpers/EstimateBetValue.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! big.js */ "./node_modules/big.js/big.js");
/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(big_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _GetTokenPrice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GetTokenPrice */ "./helpers/GetTokenPrice.js");
/* harmony import */ var _SupportedTokens__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SupportedTokens */ "./helpers/SupportedTokens.js");
/* harmony import */ var _TokenFromWei__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TokenFromWei */ "./helpers/TokenFromWei.js");
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/store */ "./redux/store.js");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/actions */ "./redux/actions.js");







var EstimateBetValue = function EstimateBetValue(tokensToBet, prices) {
  var dispatch = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var symbols = tokensToBet.map(function (curr) {
    return _SupportedTokens__WEBPACK_IMPORTED_MODULE_2__["DictionarrySymbol"].get(curr.address);
  });
  var values = symbols.map(function (curr) {
    return prices.data[curr].USD;
  });
  var sum = values.reduce(function (sum, curr, index) {
    console.log("".concat(big_js__WEBPACK_IMPORTED_MODULE_0___default()(Object(_TokenFromWei__WEBPACK_IMPORTED_MODULE_3__["default"])(tokensToBet[index])), " * ").concat(curr, " = ").concat(big_js__WEBPACK_IMPORTED_MODULE_0___default()(Object(_TokenFromWei__WEBPACK_IMPORTED_MODULE_3__["default"])(tokensToBet[index])).mul(curr)));
    return sum + parseFloat(big_js__WEBPACK_IMPORTED_MODULE_0___default()(Object(_TokenFromWei__WEBPACK_IMPORTED_MODULE_3__["default"])(tokensToBet[index])).mul(curr).toFixed(2));
  }, 0);
  if (sum === '00.00') sum = '0';
  if (dispatch) _redux_store__WEBPACK_IMPORTED_MODULE_4__["default"].dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_5__["updateEstimateBet"])(sum));
  return sum;
};

/* harmony default export */ __webpack_exports__["default"] = (EstimateBetValue);

/***/ })

})
//# sourceMappingURL=match.js.13ebb8d1b2675d8e3a3f.hot-update.js.map