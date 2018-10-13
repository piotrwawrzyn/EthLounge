webpackHotUpdate("static\\development\\pages\\matches\\match.js",{

/***/ "./components/ErrorModal.js":
/*!**********************************!*\
  !*** ./components/ErrorModal.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../redux/store */ "./redux/store.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/actions */ "./redux/actions.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var ErrorModal =
/*#__PURE__*/
function (_Component) {
  _inherits(ErrorModal, _Component);

  function ErrorModal() {
    _classCallCheck(this, ErrorModal);

    return _possibleConstructorReturn(this, _getPrototypeOf(ErrorModal).apply(this, arguments));
  }

  _createClass(ErrorModal, [{
    key: "render",
    value: function render() {
      var modal = this.props.modal;
      var list = modal.reasons.map(function (curr) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, curr);
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
        size: "tiny",
        open: modal.isOpen,
        closeOnDocumentClick: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Modal"].Header, {
        className: "font-error"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
        name: "times circle outline"
      }), modal.head), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Modal"].Content, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Modal"].Description, {
        className: "font-error"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, list))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Modal"].Actions, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        className: "dark-orange-bg font-white",
        onClick: function onClick(e) {
          return _redux_store__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_3__["toggleErrorModal"])());
        }
      }, "OK")));
    }
  }]);

  return ErrorModal;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ErrorModal);

/***/ }),

/***/ "./components/match/ConfirmBetModal.js":
/*!*********************************************!*\
  !*** ./components/match/ConfirmBetModal.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/store */ "./redux/store.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/actions */ "./redux/actions.js");
/* harmony import */ var _helpers_TokenFromWei__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/TokenFromWei */ "./helpers/TokenFromWei.js");
/* harmony import */ var _ethereum_EthLounge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ethereum/EthLounge */ "./ethereum/EthLounge.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_7__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }









var ConfirmBetModal =
/*#__PURE__*/
function (_Component) {
  _inherits(ConfirmBetModal, _Component);

  function ConfirmBetModal(props) {
    var _this$state;

    var _this;

    _classCallCheck(this, ConfirmBetModal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ConfirmBetModal).call(this, props));
    _this.handleConfirm = _this.handleConfirm.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.closeFinalModal = _this.closeFinalModal.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.state = (_this$state = {
      isLoading: false,
      isCancelDisabled: false,
      isFinalModalSuccessOpen: false
    }, _defineProperty(_this$state, "isFinalModalSuccessOpen", false), _defineProperty(_this$state, "isFinalModalErrorOpen", false), _defineProperty(_this$state, "errorMessage", ''), _defineProperty(_this$state, "transactionInfo", {}), _defineProperty(_this$state, "waitingText", ''), _this$state);
    return _this;
  }

  _createClass(ConfirmBetModal, [{
    key: "closeFinalModal",
    value: function closeFinalModal() {
      this.setState({
        isFinalModalErrorOpen: false,
        isFinalModalSuccessOpen: false
      });
      _redux_store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_4__["toggleModal"])('confirmBetModal'));
    }
  }, {
    key: "handleConfirm",
    value: function () {
      var _handleConfirm = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(tokensToBet, pickedTeam, account, matchID) {
        var tokens, amounts, transactionInfo;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log(this.state);
                this.setState({
                  isLoading: true,
                  isCancelDisabled: true,
                  waitingText: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Label"], null, "Please confirm the transaction on Metamask and wait a few seconds.")
                });
                tokens = tokensToBet.map(function (curr) {
                  return curr.address;
                });
                amounts = tokensToBet.map(function (curr) {
                  return curr.amount;
                });
                _context.prev = 4;
                _context.next = 7;
                return _ethereum_EthLounge__WEBPACK_IMPORTED_MODULE_6__["default"].methods.placeBet(matchID, pickedTeam.slug, tokens, amounts).send({
                  from: account
                });

              case 7:
                transactionInfo = _context.sent;

                if (transactionInfo.status) {
                  this.setState({
                    isFinalModalSuccessOpen: true,
                    transactionInfo: transactionInfo
                  });
                }

                _context.next = 15;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](4);
                console.log(_context.t0);
                this.setState({
                  isFinalModalErrorOpen: true,
                  errorMessage: _context.t0.message.replace('Returned error: ', '')
                });

              case 15:
                this.setState({
                  isLoading: false,
                  isCancelDisabled: false,
                  waitingText: ''
                });

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[4, 11]]);
      }));

      return function handleConfirm(_x, _x2, _x3, _x4) {
        return _handleConfirm.apply(this, arguments);
      };
    }()
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          open = _this$props.open,
          tokensToBet = _this$props.tokensToBet,
          pickedTeam = _this$props.pickedTeam,
          account = _this$props.account,
          matchID = _this$props.matchID;
      var tokenList = tokensToBet.map(function (curr) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["List"].Item, {
          as: "p",
          key: curr.address
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
          name: "right triangle"
        }), Object(_helpers_TokenFromWei__WEBPACK_IMPORTED_MODULE_5__["default"])(curr, 'symbol'));
      });
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Modal"], {
        size: "tiny",
        open: open
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FinalModalSuccess, {
        open: this.state.isFinalModalSuccessOpen,
        transactionInfo: this.state.transactionInfo,
        matchID: matchID,
        close: this.closeFinalModal
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FinalModalError, {
        open: this.state.isFinalModalErrorOpen,
        errorMessage: this.state.errorMessage,
        close: this.closeFinalModal
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Modal"].Header, null, "You are about to place a bet"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Modal"].Content, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Modal"].Description, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
        width: 10
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"], null, "Your bet:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["List"], {
        className: "confirm-bet-modal-ul font-dark-orange",
        as: "ul"
      }, tokenList), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"], null, "Picked Team:", ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "font-dark-orange"
      }, pickedTeam.name)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"], null, "Odds:", ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "font-dark-orange"
      }, pickedTeam.odds)), this.state.waitingText), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
        verticalAlign: "middle",
        width: 6
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Image"], {
        className: "confirm-bet-modal-img",
        floated: "right",
        size: "small",
        src: "/static/img/teams/".concat(pickedTeam.slug, ".png")
      }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Modal"].Actions, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        disabled: this.state.isCancelDisabled,
        color: "black",
        onClick: function onClick(e) {
          return _redux_store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_4__["toggleModal"])('confirmBetModal'));
        }
      }, "Cancel"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        loading: this.state.isLoading,
        className: "dark-orange-bg font-white",
        onClick: function onClick(e) {
          return _this2.handleConfirm(tokensToBet, pickedTeam, account, matchID);
        }
      }, "Confirm")));
    }
  }]);

  return ConfirmBetModal;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

var FinalModalSuccess =
/*#__PURE__*/
function (_Component2) {
  _inherits(FinalModalSuccess, _Component2);

  function FinalModalSuccess() {
    _classCallCheck(this, FinalModalSuccess);

    return _possibleConstructorReturn(this, _getPrototypeOf(FinalModalSuccess).apply(this, arguments));
  }

  _createClass(FinalModalSuccess, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          open = _this$props2.open,
          close = _this$props2.close,
          transactionInfo = _this$props2.transactionInfo,
          matchID = _this$props2.matchID;
      var hash = transactionInfo.transactionHash;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Modal"], {
        open: open,
        size: "tiny"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Modal"].Header, null, "Bet placed successfuly"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Modal"].Content, {
        className: "word-wrap"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Transaction hash:", ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "https://etherscan.io/tx/".concat(hash)
      }, hash))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Modal"].Actions, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        className: "dark-orange-bg font-white",
        onClick: function onClick(e) {
          close();
          _routes__WEBPACK_IMPORTED_MODULE_7__["Router"].push("/matches/".concat(matchID));
        }
      }, "Go back")));
    }
  }]);

  return FinalModalSuccess;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

var FinalModalError =
/*#__PURE__*/
function (_Component3) {
  _inherits(FinalModalError, _Component3);

  function FinalModalError() {
    _classCallCheck(this, FinalModalError);

    return _possibleConstructorReturn(this, _getPrototypeOf(FinalModalError).apply(this, arguments));
  }

  _createClass(FinalModalError, [{
    key: "render",
    value: function render() {
      var _this3 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Modal"], {
        open: this.props.open,
        size: "mini"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Modal"].Header, {
        className: "font-error"
      }, "Placing bet failed"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Modal"].Content, {
        className: "font-error word-wrap"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, this.props.errorMessage)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Modal"].Actions, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        className: "dark-orange-bg font-white",
        onClick: function onClick(e) {
          return _this3.props.close();
        }
      }, "Go back")));
    }
  }]);

  return FinalModalError;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ConfirmBetModal);

/***/ }),

/***/ "./components/match/Teams.js":
/*!***********************************!*\
  !*** ./components/match/Teams.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/store */ "./redux/store.js");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/actions */ "./redux/actions.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var Teams =
/*#__PURE__*/
function (_Component) {
  _inherits(Teams, _Component);

  function Teams(props) {
    var _this;

    _classCallCheck(this, Teams);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Teams).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClick", function (event, team, pickedTeam) {
      if (_this.props.signedIn) {
        if (pickedTeam.slug) {
          if (pickedTeam.slug === team.slug) {
            _redux_store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_3__["pickTeam"])({}));
            return;
          }
        }

        _redux_store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_3__["pickTeam"])(team));
      }
    });

    return _this;
  }

  _createClass(Teams, [{
    key: "generateTeamLabel",
    value: function generateTeamLabel(team, pickedTeam) {
      var _this2 = this;

      var style = this.props.signedIn ? {
        cursor: 'pointer'
      } : {};
      var classNameModifier = pickedTeam.slug == team.slug ? ' team-label-picked' : '';
      var teamCaption = pickedTeam.slug == team.slug ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "team-name team-name-picked"
      }, team.name) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "team-name"
      }, team.name);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        onClick: function onClick(event) {
          _this2.handleClick(event, team, pickedTeam);
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
        size: "huge",
        style: style,
        className: "team-label".concat(classNameModifier)
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
        src: "/static/img/teams/".concat(team.slug, ".png")
      })), teamCaption);
    }
  }, {
    key: "generatePercentage",
    value: function generatePercentage(teams, index) {
      //const sumOdds = teams[0].odds + teams[1].odds;
      var percentage = Math.round(1 / teams[index].odds * 100) + '%';
      if (index === 0) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
        as: "a",
        color: "black",
        ribbon: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "team-percentage"
      }, percentage), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "team-odds"
      }, "x ", teams[index].odds));
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
        as: "a",
        color: "black",
        ribbon: "right"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "team-percentage"
      }, percentage), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "team-odds"
      }, "x ", teams[index].odds));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          teams = _this$props.teams,
          pickedTeam = _this$props.pickedTeam;
      if (teams) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
        className: "teams-grid",
        padded: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
        width: 2
      }, this.generatePercentage(teams, 0)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
        width: 5,
        verticalAlign: "middle",
        textAlign: "center"
      }, this.generateTeamLabel(teams[0], pickedTeam)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
        width: 2,
        verticalAlign: "middle",
        textAlign: "center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
        color: "black"
      }, "VS")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
        width: 5,
        verticalAlign: "middle",
        textAlign: "center"
      }, this.generateTeamLabel(teams[1], pickedTeam)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
        width: 2
      }, this.generatePercentage(teams, 1))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, null)));
      return '0';
    }
  }]);

  return Teams;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Teams);

/***/ })

})
//# sourceMappingURL=match.js.ca5030527f62003a4606.hot-update.js.map