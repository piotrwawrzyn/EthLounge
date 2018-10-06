webpackHotUpdate("static\\development\\pages\\matches\\match.js",{

/***/ "./redux/reducers.js":
/*!***************************!*\
  !*** ./redux/reducers.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_EstimateBetValue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/EstimateBetValue */ "./helpers/EstimateBetValue.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var initialState = {
  tokens: {
    toBet: [],
    wallet: []
  },
  account: '',
  signedIn: false,
  prices: {},
  betValue: 0,
  pickedTeam: {},
  errorModal: {
    isOpen: false,
    head: '',
    reasons: []
  }
};

var matchReducer = function matchReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  var newState = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.cloneDeep(state);

  switch (action.type) {
    case 'ADD_TOKEN':
      {
        if (newState.tokens.wallet.some(function (curr) {
          return curr.address == action.token.address;
        })) return;
        if (newState.tokens.toBet.some(function (curr) {
          return curr.address == action.token.address;
        })) return;
        newState.tokens.wallet.push(action.token);
        break;
      }

    case 'CHANGE_POS':
      {
        console.log(action.token, state);

        if (action.token.position === 'token-box') {
          action.token.position = action.pos;
          newState.tokens.toBet.push(action.token);
          newState.tokens.wallet = newState.tokens.wallet.filter(function (curr) {
            return curr.address != action.token.address;
          });
        } else {
          action.token.position = 'token-box';
          action.token.amount = action.token.initialAmount;
          newState.tokens.wallet.push(action.token);
          newState.tokens.toBet = newState.tokens.toBet.filter(function (curr) {
            return curr.address != action.token.address;
          });
        }

        newState.betValue = Object(_helpers_EstimateBetValue__WEBPACK_IMPORTED_MODULE_1__["default"])(newState.tokens.toBet, newState.prices, false);
        break;
      }

    case 'LOG_OUT':
      {
        newState = _objectSpread({}, initialState);
        newState.prices = state.prices;
        console.log('Logged out! State is now: ', newState);
        break;
      }

    case 'LOG_IN':
      {
        console.log('Loggin in...');
        newState.account = action.account;
        newState.signedIn = true;
        console.log('Logging in! State is now: ', newState);
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
        newState.errorModal.isOpen = !state.errorModal.isOpen;
        newState.errorModal.head = action.head;
        newState.errorModal.reasons = action.reasons;
        break;
      }
  }

  return newState;
};

/* harmony default export */ __webpack_exports__["default"] = (matchReducer);

/***/ })

})
//# sourceMappingURL=match.js.70e1c39d647e7f7253ee.hot-update.js.map