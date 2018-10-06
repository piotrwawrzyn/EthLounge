webpackHotUpdate("static\\development\\pages\\matches\\match.js",{

/***/ "./components/Layout/Menu.js":
/*!***********************************!*\
  !*** ./components/Layout/Menu.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var react_blockies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-blockies */ "./node_modules/react-blockies/dist/main.js");
/* harmony import */ var react_blockies__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_blockies__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ethereum_EthLounge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ethereum/EthLounge */ "./ethereum/EthLounge.js");
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../redux/store */ "./redux/store.js");
/* harmony import */ var _helpers_Sleep__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../helpers/Sleep */ "./helpers/Sleep.js");
/* harmony import */ var _helpers_ShortEthAddress__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../helpers/ShortEthAddress */ "./helpers/ShortEthAddress.js");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../redux/actions */ "./redux/actions.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }












var Token = function Token(address, amount, position) {
  _classCallCheck(this, Token);

  this.address = address;
  this.amount = amount;
  this.initialAmount = amount;
  this.position = position;
};

var MenuExampleSizeLarge =
/*#__PURE__*/
function (_Component) {
  _inherits(MenuExampleSizeLarge, _Component);

  function MenuExampleSizeLarge(props) {
    var _this;

    _classCallCheck(this, MenuExampleSizeLarge);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MenuExampleSizeLarge).call(this, props));
    _this.handleLogin = _this.handleLogin.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.state = {
      loading: false,
      account: '',
      signedIn: false,
      popupOpen: false,
      readyToGenerateRightMenu: false
    };
    return _this;
  }

  _createClass(MenuExampleSizeLarge, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var account, openSessionAccounts;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // Restore session from local storage
                account = window.localStorage.getItem('eth-account', account);
                _context.next = 3;
                return _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__["default"].eth.getAccounts();

              case 3:
                openSessionAccounts = _context.sent;

                if (account && openSessionAccounts.length > 0) {
                  _redux_store__WEBPACK_IMPORTED_MODULE_7__["default"].dispatch({
                    type: 'LOG_IN',
                    account: account
                  });
                  this.setState({
                    signedIn: true,
                    account: account
                  });
                  this.getTokens(account);
                } else _redux_store__WEBPACK_IMPORTED_MODULE_7__["default"].dispatch({
                  type: 'LOG_OUT'
                });

                this.setState({
                  readyToGenerateRightMenu: true
                });

              case 6:
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
    key: "generateRightMenu",
    value: function generateRightMenu(signedIn, readyToGenerateRightMenu) {
      var _this2 = this;

      if (readyToGenerateRightMenu) {
        if (signedIn) {
          var ethAddressShort = Object(_helpers_ShortEthAddress__WEBPACK_IMPORTED_MODULE_9__["default"])(this.state.account);
          var ethAddressStyle = {
            color: 'white'
          };
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Row, {
            verticalAlign: "middle"
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
            width: 4
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "user-avatar"
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_blockies__WEBPACK_IMPORTED_MODULE_5___default.a, {
            seed: this.state.account,
            scale: 6,
            size: 14
          }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
            width: 1
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
            width: 10,
            className: "user-column-right"
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "user-column-right-address"
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
            style: ethAddressStyle,
            href: "https://etherscan.io/address/".concat(this.state.account),
            target: "_blank"
          }, ethAddressShort)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
            onClick: function onClick(e) {
              return _this2.handleLogout(e);
            },
            loading: this.state.loading,
            size: "mini",
            color: "black",
            icon: true,
            labelPosition: "right",
            className: "user-column-right-signout-button"
          }, "Log out", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
            name: "power off"
          })))));
        }

        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          loading: this.state.loading,
          onClick: function onClick(e) {
            return _this2.handleLogin(e);
          },
          color: "black"
        }, "Sign in");
      }

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        loading: true,
        className: "dark-orange-bg"
      });
    }
  }, {
    key: "handleLogin",
    value: function () {
      var _handleLogin = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(e) {
        var account, _ref, _ref2;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.setState({
                  loading: true
                });
                _context2.next = 3;
                return Object(_helpers_Sleep__WEBPACK_IMPORTED_MODULE_8__["Sleep"])(300);

              case 3:
                _context2.next = 5;
                return _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__["default"].eth.getAccounts();

              case 5:
                _ref = _context2.sent;
                _ref2 = _slicedToArray(_ref, 1);
                account = _ref2[0];

                if (typeof account !== 'undefined') {
                  this.setState({
                    account: account
                  });
                  this.getTokens(account);
                  this.setState({
                    signedIn: true
                  });
                  _redux_store__WEBPACK_IMPORTED_MODULE_7__["default"].dispatch({
                    type: 'LOG_IN',
                    account: account
                  });
                  window.localStorage.setItem('eth-account', account);
                } else {
                  this.setState({
                    popupOpen: true
                  });
                }

                this.setState({
                  loading: false
                });

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function handleLogin(_x) {
        return _handleLogin.apply(this, arguments);
      };
    }()
  }, {
    key: "handleLogout",
    value: function () {
      var _handleLogout = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(e) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.setState({
                  loading: true
                });
                _context3.next = 3;
                return Object(_helpers_Sleep__WEBPACK_IMPORTED_MODULE_8__["Sleep"])(600);

              case 3:
                this.setState({
                  signedIn: false
                });
                _redux_store__WEBPACK_IMPORTED_MODULE_7__["default"].dispatch({
                  type: 'LOG_OUT'
                });
                this.setState({
                  loading: false
                });
                window.localStorage.removeItem('eth-account');

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function handleLogout(_x2) {
        return _handleLogout.apply(this, arguments);
      };
    }()
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"], {
        inverted: true,
        size: "large",
        className: "menu"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Image"], {
        src: "/static/img/logo.png"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
        name: "chess knight"
      }), "My Bets"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
        name: "angle double down"
      }), "Deposit"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
        name: "angle double up"
      }), "Withdraw"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
        name: "question circle outline"
      }), "FAQ"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
        position: "right"
      }, this.generateRightMenu(this.state.signedIn, this.state.readyToGenerateRightMenu)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
        open: this.state.popupOpen,
        size: "tiny"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Modal"].Header, null, "You need Metamask to sign in"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Modal"].Content, {
        image: true
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Image"], {
        wrapped: true,
        size: "medium",
        src: "/static/img/metamask.png"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Modal"].Description, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Header"], null, "What is Metamask?"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "MetaMask is an extension for accessing Ethereum Dapps. You can download it ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "https://metamask.io/",
        target: "_blank"
      }, "here"), "."), "                        ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Header"], null, "But I have Metamask..."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "If you have Metamask installed, please make sure to unlock your account."))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Modal"].Actions, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        className: "dark-orange-bg font-white",
        onClick: function onClick(e) {
          _this3.setState({
            popupOpen: false
          });
        }
      }, "Close"))));
    }
  }, {
    key: "getTokens",
    value: function () {
      var _getTokens = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(account) {
        var result, tokenAddresses, tokenAmounts, i, newToken;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _ethereum_EthLounge__WEBPACK_IMPORTED_MODULE_6__["default"].methods.getBalances().call({
                  from: account
                });

              case 2:
                result = _context4.sent;
                tokenAddresses = result[0];
                tokenAmounts = result[1];

                for (i = 0; i < tokenAmounts.length; i++) {
                  if (tokenAmounts[i] !== '0') {
                    newToken = new Token(tokenAddresses[i], tokenAmounts[i], 'balance-box');
                    _redux_store__WEBPACK_IMPORTED_MODULE_7__["default"].dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_10__["addToken"])(newToken));
                  }
                }

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function getTokens(_x3) {
        return _getTokens.apply(this, arguments);
      };
    }()
  }]);

  return MenuExampleSizeLarge;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (MenuExampleSizeLarge);

/***/ })

})
//# sourceMappingURL=match.js.d1c0f766ec3a0f8880e4.hot-update.js.map