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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layout/Layout */ "./components/Layout/Layout.js");
/* harmony import */ var react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dnd-html5-backend */ "./node_modules/react-dnd-html5-backend/lib/index.js");
/* harmony import */ var react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dnd */ "./node_modules/react-dnd/lib/index.js");
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dnd__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _components_match_BettingBox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/match/BettingBox */ "./components/match/BettingBox.js");
/* harmony import */ var _components_match_TokenBox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/match/TokenBox */ "./components/match/TokenBox.js");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../redux/actions */ "./redux/actions.js");
/* harmony import */ var _helpers_CryptoPrices__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../helpers/CryptoPrices */ "./helpers/CryptoPrices.js");
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../redux/store */ "./redux/store.js");
/* harmony import */ var _components_match_Teams__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/match/Teams */ "./components/match/Teams.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_ErrorModal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/ErrorModal */ "./components/ErrorModal.js");
/* harmony import */ var _components_match_ConfirmBetModal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/match/ConfirmBetModal */ "./components/match/ConfirmBetModal.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var prices;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_helpers_CryptoPrices__WEBPACK_IMPORTED_MODULE_10__["default"])();

              case 2:
                prices = _context.sent;
                _redux_store__WEBPACK_IMPORTED_MODULE_11__["default"].dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_9__["updatePrices"])(prices));

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      };
    }()
  }, {
    key: "handleClick",
    value: function handleClick(event, tokensToBet) {
      event.preventDefault();
      var errorHead = "You forgot to do the following";
      var errors = [];
      if (!this.props.signedIn) errors.push('Please log in to place bets.');
      if (tokensToBet.length === 0) errors.push('Please place at least one token in order to place a bet.');
      if (lodash__WEBPACK_IMPORTED_MODULE_13___default.a.isEmpty(this.props.pickedTeam)) errors.push('Please pick a team.');

      if (errors.length > 0) {
        _redux_store__WEBPACK_IMPORTED_MODULE_11__["default"].dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_9__["toggleErrorModal"])(errorHead, errors));
        return;
      }

      _redux_store__WEBPACK_IMPORTED_MODULE_11__["default"].dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_9__["toggleModal"])('confirmBetModal'));
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
        relaxed: true
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ErrorModal__WEBPACK_IMPORTED_MODULE_14__["default"], {
        modal: this.props.errorModal
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_match_ConfirmBetModal__WEBPACK_IMPORTED_MODULE_15__["default"], {
        open: this.props.confirmBetModal.isOpen,
        tokensToBet: this.props.tokens.toBet,
        pickedTeam: this.props.pickedTeam,
        teams: this.props.teams
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"].Column, {
        width: 8
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_match_Teams__WEBPACK_IMPORTED_MODULE_12__["default"], {
        teams: this.props.initial.teams,
        pickedTeam: this.props.pickedTeam,
        signedIn: this.props.signedIn
      }), "LAST BETS:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"].Column, {
        width: 8
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "Place bet"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_match_BettingBox__WEBPACK_IMPORTED_MODULE_7__["default"], {
        prices: this.props.prices,
        tokens: this.props.tokens.toBet
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "bet-container"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        onClick: function onClick(event) {
          return _this.handleClick(event, _this.props.tokens.toBet);
        },
        className: "button-bet",
        size: "large",
        color: "black"
      }, "Place bet"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["List"], {
        relaxed: true,
        floated: "right",
        className: "info-bet"
      }, this.renderBetValue(this.props.betValue), this.renderEstimatedReward(this.props.betValue))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "Balances"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_match_TokenBox__WEBPACK_IMPORTED_MODULE_8__["default"], {
        signedIn: this.props.signedIn,
        tokens: this.props.tokens.wallet
      })));
    }
  }, {
    key: "renderBetValue",
    value: function renderBetValue(betValue) {
      if (this.props.tokens.toBet.length > 0) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["List"].Item, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Label"], {
        className: "orange-label",
        horizontal: true
      }, "ESTIMATED BET VALUE"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, " ".concat(betValue, "$")));
      return '';
    }
  }, {
    key: "renderEstimatedReward",
    value: function renderEstimatedReward(betValue) {
      if (this.props.tokens.toBet.length > 0 && !lodash__WEBPACK_IMPORTED_MODULE_13___default.a.isEmpty(this.props.pickedTeam)) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["List"].Item, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Label"], {
        className: "orange-label",
        horizontal: true
      }, "ESTIMATED RETURN"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, " ".concat((parseFloat(betValue) * this.props.pickedTeam.odds).toFixed(2), "$")));
      return '';
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(props) {
        var matchID, teams;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                matchID = props.query.id; // This information will be pulled from database //

                teams = [{
                  name: 'Fnatic',
                  slug: 'fnatic',
                  imgUrl: "../../img/teams/fnatic.png",
                  odds: 1.56
                }, {
                  name: 'Gambit',
                  slug: 'gambit',
                  imgUrl: "../../img/teams/gambit.png",
                  odds: 2.77
                }];
                return _context2.abrupt("return", {
                  teams: teams
                });

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return Match;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    tokens: state.tokens,
    signedIn: state.signedIn,
    betValue: state.betValue,
    prices: state.prices,
    pickedTeam: state.pickedTeam,
    errorModal: state.errorModal,
    confirmBetModal: state.confirmBetModal
  };
};

Match = Object(react_dnd__WEBPACK_IMPORTED_MODULE_4__["DragDropContext"])(react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_3___default.a)(Match);
/* harmony default export */ __webpack_exports__["default"] = (Object(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps)(Match)));
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
//# sourceMappingURL=match.js.10e0b0b9242c2af9f55f.hot-update.js.map