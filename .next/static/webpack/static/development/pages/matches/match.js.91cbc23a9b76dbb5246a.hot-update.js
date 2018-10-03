webpackHotUpdate("static\\development\\pages\\matches\\match.js",{

/***/ "./redux/reducers/matchReducer.js":
/*!****************************************!*\
  !*** ./redux/reducers/matchReducer.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_helpers_EstimateBetValue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/helpers/EstimateBetValue */ "./components/helpers/EstimateBetValue.js");


var initialState = {
  items: {
    toBet: [],
    wallet: []
  },
  account: '',
  signedIn: false,
  prices: {},
  betValue: 0
};

var matchReducer = function matchReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    items: {
      toBet: [],
      wallet: []
    },
    account: '',
    signedIn: false,
    prices: {},
    betValue: 0
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  var newState = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.cloneDeep(state);

  switch (action.type) {
    case 'ADD_ITEM':
      {
        console.log('ADD_ITEM');
        if (newState.items.wallet.some(function (curr) {
          return curr.token == action.item.token;
        })) return;
        if (newState.items.wallet.some(function (curr) {
          return curr.token == action.item.token;
        })) return;
        newState.items.wallet.push(action.item);
        break;
      }

    case 'CHANGE_POS':
      {
        if (action.item.position === 'token-box') {
          action.item.position = action.pos;
          newState.items.toBet.push(action.item);
          newState.items.wallet = newState.items.wallet.filter(function (curr) {
            return curr.token != action.item.token;
          });
        } else {
          action.item.position = 'token-box';
          action.item.amount = action.item.initialAmount;
          newState.items.wallet.push(action.item);
          newState.items.toBet = newState.items.toBet.filter(function (curr) {
            return curr.token != action.item.token;
          });
        } // After every item's move estimate bet value without dispatching


        newState.betValue = Object(_components_helpers_EstimateBetValue__WEBPACK_IMPORTED_MODULE_1__["default"])(newState.items.toBet, newState.prices, false);
        break;
      }

    case 'LOG_OUT':
      {
        newState = {
          items: {
            toBet: [],
            wallet: []
          },
          account: '',
          signedIn: false,
          betValue: 0,
          prices: newState.prices
        };
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
  }

  return newState;
};

/* harmony default export */ __webpack_exports__["default"] = (matchReducer);

/***/ })

})
//# sourceMappingURL=match.js.91cbc23a9b76dbb5246a.hot-update.js.map