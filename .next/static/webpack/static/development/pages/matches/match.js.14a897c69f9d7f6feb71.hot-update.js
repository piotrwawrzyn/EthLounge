webpackHotUpdate("static\\development\\pages\\matches\\match.js",{

/***/ "./pages/matches/match.js":
/*!********************************!*\
  !*** ./pages/matches/match.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Layout/Layout */ "./components/Layout/Layout.js");
/* harmony import */ var _components_match_BettingBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/match/BettingBox */ "./components/match/BettingBox.js");
/* harmony import */ var _components_match_ConfirmBetModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/match/ConfirmBetModal */ "./components/match/ConfirmBetModal.js");
/* harmony import */ var _components_match_ErrorModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/match/ErrorModal */ "./components/match/ErrorModal.js");
/* harmony import */ var _components_match_Teams__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/match/Teams */ "./components/match/Teams.js");
/* harmony import */ var _components_match_BalanceBox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/match/BalanceBox */ "./components/match/BalanceBox.js");
/* harmony import */ var _redux_match_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../redux/match/actions */ "./redux/match/actions.js");
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../redux/store */ "./redux/store.js");
/* harmony import */ var _utils_CryptoPrices__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../utils/CryptoPrices */ "./utils/CryptoPrices.js");
/* harmony import */ var _static_css_match_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../static/css/match.css */ "./static/css/match.css");
/* harmony import */ var _static_css_match_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_static_css_match_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _utils_CookieCall__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../utils/CookieCall */ "./utils/CookieCall.js");
/* harmony import */ var _utils_SeverSideRedirect__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../utils/SeverSideRedirect */ "./utils/SeverSideRedirect.js");
/* harmony import */ var _components_match_MatchDetails__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/match/MatchDetails */ "./components/match/MatchDetails.js");
/* harmony import */ var _components_match_LastBets__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../components/match/LastBets */ "./components/match/LastBets.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




















var Match =
/*#__PURE__*/
function (_Component) {
  _inherits(Match, _Component);

  function Match() {
    _classCallCheck(this, Match);

    return _possibleConstructorReturn(this, _getPrototypeOf(Match).apply(this, arguments));
  }

  _createClass(Match, [{
    key: "componentWillMount",
    value: function () {
      var _componentWillMount = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this$props$initial$m, tokens, user, prices;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$props$initial$m = this.props.initial.matchInfo, tokens = _this$props$initial$m.tokens, user = _this$props$initial$m.user;
                _context.next = 3;
                return Object(_utils_CryptoPrices__WEBPACK_IMPORTED_MODULE_13__["default"])(tokens);

              case 3:
                prices = _context.sent;
                _redux_store__WEBPACK_IMPORTED_MODULE_12__["default"].dispatch(Object(_redux_match_actions__WEBPACK_IMPORTED_MODULE_11__["updatePrices"])(prices));
                this.addTokens(user.balances);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function componentWillMount() {
        return _componentWillMount.apply(this, arguments);
      };
    }()
  }, {
    key: "addTokens",
    value: function () {
      var _addTokens2 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(userBalances) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (userBalances) _redux_store__WEBPACK_IMPORTED_MODULE_12__["default"].dispatch(Object(_redux_match_actions__WEBPACK_IMPORTED_MODULE_11__["addTokens"])(userBalances));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function addTokens(_x) {
        return _addTokens2.apply(this, arguments);
      };
    }()
  }, {
    key: "handleClick",
    value: function handleClick(event, tokensToBet) {
      event.preventDefault();
      var errorHead = 'You forgot to do the following';
      var errors = [];
      if (!this.props.user) errors.push('Please log in to place bets.');
      if (tokensToBet.length === 0) errors.push('Please place at least one token in order to place a bet.');
      if (lodash__WEBPACK_IMPORTED_MODULE_1___default.a.isEmpty(this.props.pickedTeam)) errors.push('Please pick a team.');

      if (errors.length > 0) {
        _redux_store__WEBPACK_IMPORTED_MODULE_12__["default"].dispatch(Object(_redux_match_actions__WEBPACK_IMPORTED_MODULE_11__["toggleErrorModal"])(errorHead, errors));
        return;
      }

      _redux_store__WEBPACK_IMPORTED_MODULE_12__["default"].dispatch(Object(_redux_match_actions__WEBPACK_IMPORTED_MODULE_11__["toggleModal"])('confirmBetModal'));
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props$initial$m2 = this.props.initial.matchInfo,
          match = _this$props$initial$m2.match,
          user = _this$props$initial$m2.user;
      var _this$props = this.props,
          pickedTeam = _this$props.pickedTeam,
          prices = _this$props.prices,
          tokens = _this$props.tokens,
          betValue = _this$props.betValue,
          confirmBetModal = _this$props.confirmBetModal;
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        relaxed: true
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_match_ErrorModal__WEBPACK_IMPORTED_MODULE_8__["default"], {
        modal: this.props.errorModal
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_match_ConfirmBetModal__WEBPACK_IMPORTED_MODULE_7__["default"], {
        open: confirmBetModal.isOpen,
        tokensToBet: tokens.toBet,
        pickedTeam: pickedTeam,
        user: user,
        match: match
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"].Column, {
        computer: 8,
        mobile: 16,
        tablet: 16
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"].Row, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_match_Teams__WEBPACK_IMPORTED_MODULE_9__["default"], {
        user: user,
        match: match,
        pickedTeam: pickedTeam
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"].Row, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_match_MatchDetails__WEBPACK_IMPORTED_MODULE_17__["default"], {
        match: match
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"].Row, {
        className: "margin-top-1em"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", null, "Last bets"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_match_LastBets__WEBPACK_IMPORTED_MODULE_18__["default"], {
        bets: match.bets
      }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"].Column, {
        computer: 8,
        mobile: 16,
        tablet: 16
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", null, user.bet ? 'Your bet' : 'Place bet'), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_match_BettingBox__WEBPACK_IMPORTED_MODULE_6__["default"], {
        prices: prices,
        tokens: tokens.toBet,
        bet: user.bet
      }), user.bet ? '' : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "bet-container"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        icon: true,
        onClick: function onClick(event) {
          return _this.handleClick(event, tokens.toBet);
        },
        className: "button-bet",
        size: "large",
        color: "black"
      }, "Bet", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
        style: {
          marginLeft: '1em !important'
        },
        name: "check"
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["List"], {
        relaxed: true,
        floated: "right",
        className: "info-bet"
      }, this.renderBetValue(betValue), this.renderEstimatedReward(betValue))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", null, "Balances"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_match_BalanceBox__WEBPACK_IMPORTED_MODULE_10__["default"], {
        user: user,
        tokens: tokens.wallet
      })));
    }
  }, {
    key: "renderBetValue",
    value: function renderBetValue(betValue) {
      var tokens = this.props.tokens;
      if (tokens.toBet.length > 0) return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["List"].Item, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Label"], {
        className: "orange-label-light",
        horizontal: true
      }, "ESTIMATED BET VALUE"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
        className: "font-dark"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("strong", null, " ".concat(betValue.toFixed(2), "$"))));
      return '';
    }
  }, {
    key: "renderEstimatedReward",
    value: function renderEstimatedReward(betValue) {
      var _this$props2 = this.props,
          pickedTeam = _this$props2.pickedTeam,
          tokens = _this$props2.tokens;

      if (tokens.toBet.length !== 0 && !lodash__WEBPACK_IMPORTED_MODULE_1___default.a.isEmpty(pickedTeam)) {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["List"].Item, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Label"], {
          className: "orange-label-light",
          horizontal: true
        }, "ESTIMATED RETURN"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
          className: "font-dark"
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("strong", null, " ".concat((parseFloat(betValue) * pickedTeam.odds).toFixed(2), "$"))));
      }

      return '';
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(props) {
        var req, res, matchID, api_response, data, errorURL, matchInfo;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                req = props.req, res = props.res;
                matchID = props.query.id;
                _context3.next = 4;
                return Object(_utils_CookieCall__WEBPACK_IMPORTED_MODULE_15__["default"])(req, "/api/match_info?id=".concat(matchID));

              case 4:
                api_response = _context3.sent;
                data = api_response.data;
                errorURL = '/404';

                if (!data) {
                  Object(_utils_SeverSideRedirect__WEBPACK_IMPORTED_MODULE_16__["default"])(res, errorURL);
                }

                matchInfo = _objectSpread({}, data);
                return _context3.abrupt("return", {
                  matchInfo: matchInfo
                });

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function getInitialProps(_x2) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return Match;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    tokens: state.match.tokens,
    betValue: state.match.betValue,
    prices: state.match.prices,
    pickedTeam: state.match.pickedTeam,
    errorModal: state.match.errorModal,
    confirmBetModal: state.match.confirmBetModal,
    user: state.login.user
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps)(Match)));
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/matches\\match")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=match.js.14a897c69f9d7f6feb71.hot-update.js.map