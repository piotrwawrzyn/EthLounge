webpackHotUpdate("static\\development\\pages\\matches\\match.js",{

/***/ "./helpers/TokenFromWei.js":
/*!*********************************!*\
  !*** ./helpers/TokenFromWei.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SupportedTokens__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SupportedTokens */ "./helpers/SupportedTokens.js");
/* harmony import */ var _OptimizeTokenAmount__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OptimizeTokenAmount */ "./helpers/OptimizeTokenAmount.js");
/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! big.js */ "./node_modules/big.js/big.js");
/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(big_js__WEBPACK_IMPORTED_MODULE_2__);




var getScientificNotation = function getScientificNotation(decimals) {
  var number = decimals - 1;
  return "10e+".concat(number);
};

/* harmony default export */ __webpack_exports__["default"] = (function (token) {
  var label = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var optimize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  console.log(token);

  switch (label) {
    case '':
      {
        if (optimize) return "".concat(Object(_OptimizeTokenAmount__WEBPACK_IMPORTED_MODULE_1__["default"])(big_js__WEBPACK_IMPORTED_MODULE_2___default()(token.amount).div(getScientificNotation(_SupportedTokens__WEBPACK_IMPORTED_MODULE_0__["DictionarryDecimals"].get(token.address))).toFixed()));
        return "".concat(big_js__WEBPACK_IMPORTED_MODULE_2___default()(token.amount).div(getScientificNotation(_SupportedTokens__WEBPACK_IMPORTED_MODULE_0__["DictionarryDecimals"].get(token.address))).toFixed());
      }

    case 'symbol':
      {
        if (optimize) return "".concat(Object(_OptimizeTokenAmount__WEBPACK_IMPORTED_MODULE_1__["default"])(big_js__WEBPACK_IMPORTED_MODULE_2___default()(token.amount).div(getScientificNotation(_SupportedTokens__WEBPACK_IMPORTED_MODULE_0__["DictionarryDecimals"].get(token.address))).toFixed()), " ").concat(_SupportedTokens__WEBPACK_IMPORTED_MODULE_0__["DictionarrySymbol"].get(token.address));
        return "".concat(big_js__WEBPACK_IMPORTED_MODULE_2___default()(token.amount).div(getScientificNotation(_SupportedTokens__WEBPACK_IMPORTED_MODULE_0__["DictionarryDecimals"].get(token.address))).toFixed(), " ").concat(_SupportedTokens__WEBPACK_IMPORTED_MODULE_0__["DictionarrySymbol"].get(token.address));
      }

    case 'full':
      {
        if (optimize) return "".concat(Object(_OptimizeTokenAmount__WEBPACK_IMPORTED_MODULE_1__["default"])(big_js__WEBPACK_IMPORTED_MODULE_2___default()(token.amount).div(getScientificNotation(_SupportedTokens__WEBPACK_IMPORTED_MODULE_0__["DictionarryDecimals"].get(token.address))).toFixed()), " ").concat(dictionarryFull.get(token.address));
        return "".concat(big_js__WEBPACK_IMPORTED_MODULE_2___default()(token.amount).div(getScientificNotation(_SupportedTokens__WEBPACK_IMPORTED_MODULE_0__["DictionarryDecimals"].get(token.address))).toFixed(), " ").concat(dictionarryFull.get(token.address));
      }
  }
});

/***/ })

})
//# sourceMappingURL=match.js.3691bfc8dfd4a41a619f.hot-update.js.map