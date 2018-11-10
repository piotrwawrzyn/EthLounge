webpackHotUpdate("static\\development\\pages\\matches\\match.js",{

/***/ "./components/match/LastBets.js":
/*!**************************************!*\
  !*** ./components/match/LastBets.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var ethereum_blockies_base64__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ethereum-blockies-base64 */ "./node_modules/ethereum-blockies-base64/dist/main.js");
/* harmony import */ var ethereum_blockies_base64__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ethereum_blockies_base64__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Token__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Token */ "./components/match/Token.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config/config */ "./config/config.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_config_config__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var LastBets =
/*#__PURE__*/
function (_Component) {
  _inherits(LastBets, _Component);

  function LastBets(props) {
    _classCallCheck(this, LastBets);

    return _possibleConstructorReturn(this, _getPrototypeOf(LastBets).call(this, props));
  }

  _createClass(LastBets, [{
    key: "renderTokens",
    value: function renderTokens(tokens, bet) {
      var markup = tokens.map(function (token) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
          key: bet.betMakerID + token.id,
          className: "last-bets-token-column",
          width: 4
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Token__WEBPACK_IMPORTED_MODULE_3__["default"], {
          token: token
        }));
      });
      return markup;
    }
  }, {
    key: "renderLastBets",
    value: function renderLastBets(bets) {
      var _this = this;

      var markup = bets.map(function (bet) {
        var betMakerID = bet.betMakerID,
            betMakerUsername = bet.betMakerUsername,
            tokensBet = bet.tokensBet,
            team = bet.team;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
          key: betMakerID,
          className: "last-bets-row"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
          width: 3,
          verticalAlign: "middle"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Reveal"], {
          animated: "rotate"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Reveal"].Content, {
          visible: true
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          src: ethereum_blockies_base64__WEBPACK_IMPORTED_MODULE_2___default()(betMakerUsername),
          className: "user-avatar undragable"
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Reveal"].Content, {
          hidden: true
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          src: "".concat(_config_config__WEBPACK_IMPORTED_MODULE_4__["backend"], "/img/").concat(team.logo),
          className: "user-avatar undragable img-team-reveal"
        })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
          width: 13,
          verticalAlign: "middle"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, null, _this.renderTokens(tokensBet, bet)))));
      });
      return markup;
    }
  }, {
    key: "render",
    value: function render() {
      var bets = this.props.bets;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
        padded: true
      }, this.renderLastBets(bets)));
    }
  }]);

  return LastBets;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (LastBets);

/***/ }),

/***/ "./components/match/MatchDetails.js":
/*!******************************************!*\
  !*** ./components/match/MatchDetails.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/config */ "./config/config.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_config_config__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_DateFormatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/DateFormatter */ "./utils/DateFormatter.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/constants */ "./utils/constants.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var MatchDetails =
/*#__PURE__*/
function (_Component) {
  _inherits(MatchDetails, _Component);

  function MatchDetails(props) {
    _classCallCheck(this, MatchDetails);

    return _possibleConstructorReturn(this, _getPrototypeOf(MatchDetails).call(this, props));
  }

  _createClass(MatchDetails, [{
    key: "render",
    value: function render() {
      var match = this.props.match;
      var teams = match.teams,
          league = match.league,
          numberOfBets = match.numberOfBets,
          highestBet = match.highestBet,
          tokensInPool = match.tokensInPool,
          serie = match.serie,
          startTime = match.startTime,
          state = match.state;
      if (!serie) serie = (_readOnlyError("serie"), '');
      if (!league) league = (_readOnlyError("league"), {
        displayName: ''
      });
      var date = Object(_utils_DateFormatter__WEBPACK_IMPORTED_MODULE_3__["default"])(startTime);
      var aproxIcon;

      if (date.isFuture) {
        aproxIcon = _utils_constants__WEBPACK_IMPORTED_MODULE_4__["ICON"].GAME_SCHEDULED;
      } else {
        if (state === 'finalized' || state === 'canceled') {
          aproxIcon = _utils_constants__WEBPACK_IMPORTED_MODULE_4__["ICON"].GAME_FINISHED;
        } else {
          aproxIcon = _utils_constants__WEBPACK_IMPORTED_MODULE_4__["ICON"].GAME_STARTED;
        }
      }

      if (match) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          marginTop: '0.5em'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
        columns: "1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
        textAlign: "right"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
        className: "orange-label-light",
        size: "large"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
        name: _utils_constants__WEBPACK_IMPORTED_MODULE_4__["ICON"].DATE
      }), date.formatedDate), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
        className: "orange-label-light",
        size: "large"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
        name: aproxIcon
      }), date.aprox))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
        columns: "2"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
        dividing: true,
        as: "h4"
      }, "Match statistics"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"], {
        className: "details-list"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Icon, {
        name: "dollar sign",
        className: "font-dark"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Content, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Header, null, "".concat((teams[0].totalDollarsBet + teams[1].totalDollarsBet).toFixed(2), "$")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Description, null, "Total bet"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Icon, {
        name: "ticket alternate",
        className: "font-dark"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Content, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Header, null, numberOfBets), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Description, null, "Bets total"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Icon, {
        name: "chess king",
        className: "font-dark"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Content, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Header, null, "".concat(highestBet.toFixed(2), "$")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Description, null, "Highest bet"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Icon, {
        name: "ethereum",
        className: "font-dark"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Content, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Header, null, tokensInPool.length), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Description, null, "Different tokens in pool"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
        verticalAlign: "middle",
        textAlign: "center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "league-image undragable",
        src: "".concat(_config_config__WEBPACK_IMPORTED_MODULE_2__["backend"], "/img/").concat(league.logo)
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "league-caption"
      }, "".concat(league.displayName, " ").concat(serie))))));
      return '';
    }
  }]);

  return MatchDetails;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (MatchDetails);

/***/ }),

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
//# sourceMappingURL=match.js.ecdabf4db5d6bc876201.hot-update.js.map