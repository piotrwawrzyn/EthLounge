webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./redux/match/matchReducer.js":
/*!*************************************!*\
  !*** ./redux/match/matchReducer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_EstimateBetValue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/EstimateBetValue */ "./utils/EstimateBetValue.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var initialState = {
  tokens: {
    toBet: [],
    wallet: []
  },
  prices: {},
  betValue: 0,
  pickedTeam: {},
  errorModal: {
    isOpen: false,
    head: '',
    reasons: []
  },
  confirmBetModal: {
    isOpen: false
  }
};

var matchReducer = function matchReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  var newState = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.cloneDeep(state);

  switch (action.type) {
    case 'ADD_TOKENS':
      {
        var tokens = action.tokens.map(function (token) {
          return _objectSpread({}, token, {
            position: 'balance-box',
            initialBalance: token.balance
          });
        });
        newState.tokens.wallet = tokens;
        break;
      }

    case 'CHANGE_POS':
      {
        if (action.token.position === 'balance-box') {
          action.token.position = 'betting-box';
          newState.tokens.toBet.push(action.token);
          newState.tokens.wallet = newState.tokens.wallet.filter(function (curr) {
            return curr.symbol != action.token.symbol;
          });
        } else {
          action.token.position = 'balance-box';
          action.token.balance = action.token.initialBalance;
          newState.tokens.wallet.push(action.token);
          newState.tokens.toBet = newState.tokens.toBet.filter(function (curr) {
            return curr.symbol != action.token.symbol;
          });
        }

        newState.betValue = Object(_utils_EstimateBetValue__WEBPACK_IMPORTED_MODULE_1__["default"])(newState.tokens.toBet, newState.prices, false);
        break;
      }

    case 'UPDATE_PRICES':
      {
        newState.prices = action.prices;
        break;
      }

    case 'UPDATE_ESTIMATE_BET':
      {
        newState.betValue = action.sum;
        break;
      }

    case 'PICK_TEAM':
      {
        newState.pickedTeam = action.team;
        break;
      }

    case 'TOGGLE_MODAL':
      {
        newState[action.property].isOpen = !newState[action.property].isOpen;
        break;
      }

    case 'TOGGLE_ERROR_MODAL':
      {
        newState.errorModal.isOpen = !state.errorModal.isOpen;
        newState.errorModal.head = action.head;
        newState.errorModal.reasons = action.reasons;
        break;
      }

    case 'LOG_OUT':
      {
        newState = _objectSpread({}, initialState);
        newState.prices = state.prices;
        break;
      }
  }

  return newState;
};

/* harmony default export */ __webpack_exports__["default"] = (matchReducer);

/***/ }),

/***/ "./utils/EstimateBetValue.js":
/*!***********************************!*\
  !*** ./utils/EstimateBetValue.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! big.js */ "./node_modules/big.js/big.js");
/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(big_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TokenFromWei__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TokenFromWei */ "./utils/TokenFromWei.js");
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/store */ "./redux/store.js");
/* harmony import */ var _redux_match_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/match/actions */ "./redux/match/actions.js");





var EstimateBetValue = function EstimateBetValue(tokensToBet, prices) {
  var dispatch = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var symbols = tokensToBet.map(function (curr) {
    return curr.symbol;
  });
  var values = symbols.map(function (curr) {
    return prices[curr].USD;
  });
  var sum = values.reduce(function (sum, curr, index) {
    return sum + parseFloat(big_js__WEBPACK_IMPORTED_MODULE_0___default()(Object(_TokenFromWei__WEBPACK_IMPORTED_MODULE_1__["default"])(tokensToBet[index])).mul(curr).toFixed(2));
  }, 0);
  if (sum === '00.00') sum = '0';
  if (dispatch) _redux_store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(Object(_redux_match_actions__WEBPACK_IMPORTED_MODULE_3__["updateEstimateBet"])(sum));
  return sum;
};

/* harmony default export */ __webpack_exports__["default"] = (EstimateBetValue);

/***/ })

})
//# sourceMappingURL=index.js.ecdabf4db5d6bc876201.hot-update.js.map