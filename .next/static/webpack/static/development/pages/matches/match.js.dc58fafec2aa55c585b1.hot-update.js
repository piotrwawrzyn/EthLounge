webpackHotUpdate("static\\development\\pages\\matches\\match.js",{

/***/ "./components/Item.js":
false,

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











var Item = function Item(token, amount, position) {
  _classCallCheck(this, Item);

  this.address = token;
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
      items: {},
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
                  this.getItems(account);
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
          className: "menu-right-item-button",
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
                  this.getItems(account);
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
        position: "right",
        className: "menu-right-item"
      }, this.generateRightMenu(this.state.signedIn, this.state.readyToGenerateRightMenu)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
        open: this.state.popupOpen,
        size: "small"
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
    key: "getItems",
    value: function () {
      var _getItems = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(account) {
        var result, tokens, amounts, i, newItem;
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
                tokens = result[0];
                amounts = result[1];

                for (i = 0; i < amounts.length; i++) {
                  if (amounts[i] !== '0') {
                    newItem = new Item(tokens[i], amounts[i], 'token-box');
                    _redux_store__WEBPACK_IMPORTED_MODULE_7__["default"].dispatch({
                      type: 'ADD_ITEM',
                      item: newItem
                    });
                  }
                }

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function getItems(_x3) {
        return _getItems.apply(this, arguments);
      };
    }()
  }]);

  return MenuExampleSizeLarge;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])()(MenuExampleSizeLarge));

/***/ }),

/***/ "./components/RangeSlider.js":
/*!***********************************!*\
  !*** ./components/RangeSlider.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_rangeslider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-rangeslider */ "./node_modules/react-rangeslider/lib/index.js");
/* harmony import */ var react_rangeslider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_rangeslider__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! big.js */ "./node_modules/big.js/big.js");
/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(big_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_EstimateBetValue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/EstimateBetValue */ "./helpers/EstimateBetValue.js");
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






var RangeSlider =
/*#__PURE__*/
function (_Component) {
  _inherits(RangeSlider, _Component);

  function RangeSlider(props) {
    var _this;

    _classCallCheck(this, RangeSlider);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RangeSlider).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleRange", function (val) {
      _this.setState({
        value: val
      });

      var change = val / 1000;
      var newAmount = "".concat(big_js__WEBPACK_IMPORTED_MODULE_2___default()(_this.props.token.initialAmount).mul(change).toFixed(0));
      _this.props.token.amount = newAmount;

      _this.props.handleRange(_this.props.token);
    });

    _this.handleRange = _this.handleRange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.state = {
      value: 1000
    };
    return _this;
  }

  _createClass(RangeSlider, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_rangeslider__WEBPACK_IMPORTED_MODULE_1___default.a, {
        min: 1,
        max: 1000,
        step: 10,
        tooltip: false,
        value: this.state.value,
        onChange: function onChange(val) {
          return _this2.handleRange(val);
        },
        onChangeComplete: function onChangeComplete(event) {
          Object(_helpers_EstimateBetValue__WEBPACK_IMPORTED_MODULE_3__["default"])(_this2.props.toBet, _this2.props.prices);
        }
      });
    }
  }]);

  return RangeSlider;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (RangeSlider);

/***/ }),

/***/ "./components/Token.js":
/*!*****************************!*\
  !*** ./components/Token.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_SupportedTokens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/SupportedTokens */ "./helpers/SupportedTokens.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _helpers_TokenFromWei__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/TokenFromWei */ "./helpers/TokenFromWei.js");




/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    as: "a",
    key: props.item.token,
    className: "token-label"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    avatar: true,
    spaced: "right",
    src: "/static/img/tokens/".concat(_helpers_SupportedTokens__WEBPACK_IMPORTED_MODULE_1__["DictionarrySymbol"].get(props.item.token), ".png")
  }), Object(_helpers_TokenFromWei__WEBPACK_IMPORTED_MODULE_3__["default"])(props.item, 'symbol', true));
});

/***/ }),

/***/ "./components/match/BettingBox.js":
/*!****************************************!*\
  !*** ./components/match/BettingBox.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _BettingBoxItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BettingBoxItem */ "./components/match/BettingBoxItem.js");
/* harmony import */ var _RangeSlider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../RangeSlider */ "./components/RangeSlider.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var BettingBox =
/*#__PURE__*/
function (_Component) {
  _inherits(BettingBox, _Component);

  function BettingBox(props) {
    _classCallCheck(this, BettingBox);

    return _possibleConstructorReturn(this, _getPrototypeOf(BettingBox).call(this, props));
  }

  _createClass(BettingBox, [{
    key: "renderItems",
    value: function renderItems(tokens) {
      var bettingBoxes = [];
      var numberOfBoxes = 4;

      for (var i = 0; i < numberOfBoxes; i++) {
        var pos = "betting-box-".concat(i);
        var tokenProp = void 0;
        var rangeSlider = '';
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = tokens[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var token = _step.value;

            if (token.position === pos) {
              tokenProp = token;
              rangeSlider = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RangeSlider__WEBPACK_IMPORTED_MODULE_3__["default"], {
                prices: this.props.prices,
                token: token,
                toBet: tokens,
                handleRange: this.props.handleRange
              });
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        bettingBoxes.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
          key: pos
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
          width: 7
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BettingBoxItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
          pos: pos,
          droppedItem: tokenProp,
          handleDelete: this.props.handleDelete
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
          width: 9,
          verticalAlign: "middle"
        }, rangeSlider)));
      }

      return bettingBoxes;
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "betting-box"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
        columns: "equal"
      }, this.renderItems(this.props.tokens)));
    }
  }]);

  return BettingBox;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (BettingBox);

/***/ }),

/***/ "./components/match/BettingBoxItem.js":
/*!********************************************!*\
  !*** ./components/match/BettingBoxItem.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dnd */ "./node_modules/react-dnd/lib/index.js");
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dnd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Token__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Token */ "./components/Token.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var itemSource = {
  drop: function drop(props) {
    return {
      pos: props.pos
    };
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    token: monitor.getToken(),
    canDrop: monitor.canDrop()
  };
}

var BettingBoxToken =
/*#__PURE__*/
function (_Component) {
  _inherits(BettingBoxToken, _Component);

  function BettingBoxToken(props) {
    var _this;

    _classCallCheck(this, BettingBoxToken);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BettingBoxToken).call(this, props));
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(BettingBoxToken, [{
    key: "handleClick",
    value: function handleClick(e) {
      this.props.handleDelete(this.props.droppedToken);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          canDrop = _this$props.canDrop,
          connectDropTarget = _this$props.connectDropTarget,
          isOver = _this$props.isOver,
          token = _this$props.token,
          pos = _this$props.pos;
      var classNameModifier = '';

      if (isOver && canDrop) {
        classNameModifier += ' betting-box-token-hovered';
      }

      if (!isOver && canDrop) {
        classNameModifier += ' betting-box-token-candrop';
      }

      var Token;

      if (this.props.droppedToken) {
        Token = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Token, {
          token: this.props.droppedToken,
          className: "token-dropped"
        });
        classNameModifier = ' betting-box-token-dropped';
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], {
          onClick: this.handleClick,
          textAlign: "center",
          className: 'betting-box-token' + classNameModifier
        }, Token));
      }

      return connectDropTarget(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], {
        size: "big",
        textAlign: "center",
        className: 'betting-box-token' + classNameModifier
      })));
    }
  }]);

  return BettingBoxToken;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_dnd__WEBPACK_IMPORTED_MODULE_2__["DropTarget"])('token', itemSource, collect)(BettingBoxToken));

/***/ }),

/***/ "./components/match/TokenBox.js":
/*!**************************************!*\
  !*** ./components/match/TokenBox.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TokenBoxItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TokenBoxItem */ "./components/match/TokenBoxItem.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
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





var TokenBox =
/*#__PURE__*/
function (_Component) {
  _inherits(TokenBox, _Component);

  function TokenBox(props) {
    var _this;

    _classCallCheck(this, TokenBox);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TokenBox).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderItems", function (tokens) {
      var toRender = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, tokens.map(function (token) {
        if (token.position == 'token-box') {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TokenBoxItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
            key: token.address,
            token: {
              token: token.address,
              amount: token.amount,
              initialAmount: token.initialAmount,
              position: token.position
            },
            handleDrop: function handleDrop(token, pos) {
              return _this.handleDrop(token, pos);
            }
          });
        } else {
          return '';
        }

        ;
      }));
      return toRender;
    });

    _this.handleDrop = _this.handleDrop.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(TokenBox, [{
    key: "handleDrop",
    value: function handleDrop(token, pos) {
      this.props.handleDrop(token, pos);
    }
  }, {
    key: "render",
    value: function render() {
      if (this.props.signedIn) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "tokens-box"
      }, this.renderItems(this.props.tokens));
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Message"], {
        warning: true,
        header: "Sign in with Metamask",
        content: "Please sign in with Metamask in order to see your balances and place bets."
      });
    }
  }]);

  return TokenBox;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (TokenBox);

/***/ }),

/***/ "./components/match/TokenBoxItem.js":
/*!******************************************!*\
  !*** ./components/match/TokenBoxItem.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Token */ "./components/Token.js");
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dnd */ "./node_modules/react-dnd/lib/index.js");
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dnd__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var itemSource = {
  beginDrag: function beginDrag(props) {
    return props.token;
  },
  endDrag: function endDrag(props, monitor) {
    if (!monitor.didDrop()) return;
    return props.handleDrop(props.token, monitor.getDropResult().pos);
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  };
}

var TokenBoxItem =
/*#__PURE__*/
function (_Component) {
  _inherits(TokenBoxItem, _Component);

  function TokenBoxItem(props) {
    _classCallCheck(this, TokenBoxItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(TokenBoxItem).call(this, props));
  }

  _createClass(TokenBoxItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          isDragging = _this$props.isDragging,
          connectDragSource = _this$props.connectDragSource;
      var classNameModifier = '';

      if (isDragging) {
        classNameModifier = ' token-box-token-dragging';
      }

      return connectDragSource(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: 'token-box-token' + classNameModifier
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Token__WEBPACK_IMPORTED_MODULE_1__["default"], {
        token: this.props.token
      })));
    }
  }]);

  return TokenBoxItem;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_dnd__WEBPACK_IMPORTED_MODULE_2__["DragSource"])('token', itemSource, collect)(TokenBoxItem));

/***/ }),

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
    return _SupportedTokens__WEBPACK_IMPORTED_MODULE_2__["DictionarrySymbol"].get(curr.token);
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

/***/ }),

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

/***/ }),

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
    value: function handleClick() {
      var errorHead = "You forgot to do the following";
      var errors = [];
      if (!this.props.signedIn) errors.push('Please log in to place bets.');
      if (this.props.tokens.toBet.length === 0) errors.push('Please place at least one token in order to place a bet.');
      if (lodash__WEBPACK_IMPORTED_MODULE_13___default.a.isEmpty(this.props.pickedTeam)) errors.push('Please pick a team.');

      if (errors.length > 0) {
        _redux_store__WEBPACK_IMPORTED_MODULE_11__["default"].dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_9__["toggleModal"])(errorHead, errors));
        console.log(this.props);
        return;
      } //handle correct PLACE BET

    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
        relaxed: true
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"].Column, {
        width: 8
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_match_Teams__WEBPACK_IMPORTED_MODULE_12__["default"], {
        teams: this.props.initial.teams,
        pickedTeam: this.props.pickedTeam,
        signedIn: this.props.signedIn
      }), "LAST BETS:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"].Column, {
        width: 8
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "Place bet"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_match_BettingBox__WEBPACK_IMPORTED_MODULE_7__["default"], {
        prices: this.props.prices,
        tokens: this.props.tokens.toBet,
        handleRange: this.props.handleRange,
        handleDelete: this.props.changePosition
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "bet-container"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        onClick: function onClick(event) {
          return _this.handleClick();
        },
        className: "button-bet",
        size: "large",
        color: "black"
      }, "Place bet"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ErrorModal__WEBPACK_IMPORTED_MODULE_14__["default"], {
        modal: this.props.errorModal
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["List"], {
        relaxed: true,
        floated: "right",
        className: "info-bet"
      }, this.renderBetValue(this.props.betValue), this.renderEstimatedReward(this.props.betValue))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "Balances"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_match_TokenBox__WEBPACK_IMPORTED_MODULE_8__["default"], {
        signedIn: this.props.signedIn,
        tokens: this.props.tokens.wallet,
        handleDrop: this.props.changePosition
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

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    changePosition: function changePosition(token, pos) {
      dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_9__["changeItemPosition"])(token, pos));
    },
    handleRange: function handleRange(token) {
      dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_9__["changeItemAmount"])(token));
    }
  };
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    tokens: state.tokens,
    signedIn: state.signedIn,
    betValue: state.betValue,
    prices: state.prices,
    pickedTeam: state.pickedTeam,
    errorModal: state.errorModal
  };
};

Match = Object(react_dnd__WEBPACK_IMPORTED_MODULE_4__["DragDropContext"])(react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_3___default.a)(Match);
/* harmony default export */ __webpack_exports__["default"] = (Object(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps, mapDispatchToProps)(Match)));
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

/***/ }),

/***/ "./redux/actions.js":
/*!**************************!*\
  !*** ./redux/actions.js ***!
  \**************************/
/*! exports provided: addItem, changeTokenPosition, changeTokenAmount, updateEstimateBet, updatePrices, pickTeam, toggleModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addItem", function() { return addItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeTokenPosition", function() { return changeTokenPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeTokenAmount", function() { return changeTokenAmount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateEstimateBet", function() { return updateEstimateBet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePrices", function() { return updatePrices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pickTeam", function() { return pickTeam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleModal", function() { return toggleModal; });
function addItem(token) {
  return {
    type: 'ADD_ITEM',
    token: token
  };
}
function changeTokenPosition(token, pos) {
  return {
    type: 'CHANGE_POS',
    token: token,
    pos: pos
  };
}
function changeTokenAmount(token) {
  return {
    type: 'CHANGE_AMOUNT',
    token: token
  };
}
function updateEstimateBet(sum) {
  return {
    type: 'UPDATE_ESTIMATE_BET',
    sum: sum
  };
}
function updatePrices(prices) {
  return {
    type: 'UPDATE_PRICES',
    prices: prices
  };
}
function pickTeam(team) {
  return {
    type: 'PICK_TEAM',
    team: team
  };
}
function toggleModal() {
  var head = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var reasons = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return {
    type: 'TOGGLE_MODAL',
    head: head,
    reasons: reasons
  };
}

/***/ }),

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
    case 'ADD_ITEM':
      {
        if (newState.items.wallet.some(function (curr) {
          return curr.token == action.item.token;
        })) return;
        if (newState.items.toBet.some(function (curr) {
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
        }

        newState.betValue = Object(_helpers_EstimateBetValue__WEBPACK_IMPORTED_MODULE_1__["default"])(newState.items.toBet, newState.prices, false);
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
//# sourceMappingURL=match.js.dc58fafec2aa55c585b1.hot-update.js.map