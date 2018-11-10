module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Layout/Layout.js":
/*!*************************************!*\
  !*** ./components/Layout/Layout.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Menu */ "./components/Layout/Menu.js");
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../redux/store */ "./redux/store.js");
/* harmony import */ var _static_css_layout_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../static/css/layout.css */ "./static/css/layout.css");
/* harmony import */ var _static_css_layout_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_static_css_layout_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_rangeslider_lib_index_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-rangeslider/lib/index.css */ "./node_modules/react-rangeslider/lib/index.css");
/* harmony import */ var react_rangeslider_lib_index_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_rangeslider_lib_index_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _redux_layout_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../redux/layout/actions */ "./redux/layout/actions.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../config/config */ "./config/config.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_config_config__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _utils_CookieCall__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utils/CookieCall */ "./utils/CookieCall.js");


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







 // import 'semantic-ui-css/semantic.min.css';







var layout = function layout(ChildPage) {
  return (
    /*#__PURE__*/
    function (_Component) {
      _inherits(_class, _Component);

      function _class() {
        _classCallCheck(this, _class);

        return _possibleConstructorReturn(this, _getPrototypeOf(_class).apply(this, arguments));
      }

      _createClass(_class, [{
        key: "componentWillMount",
        value: function componentWillMount() {
          _redux_store__WEBPACK_IMPORTED_MODULE_6__["default"].dispatch(Object(_redux_layout_actions__WEBPACK_IMPORTED_MODULE_10__["login"])(this.props.user));
        }
      }, {
        key: "render",
        value: function render() {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_4__["Provider"], {
            store: _redux_store__WEBPACK_IMPORTED_MODULE_6__["default"]
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
            rel: "stylesheet",
            href: "//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css"
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Menu__WEBPACK_IMPORTED_MODULE_5__["default"], {
            user: this.props.user
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Container"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ChildPage, {
            initial: this.props
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "footer"
          }))));
        }
      }], [{
        key: "getInitialProps",
        value: function () {
          var _getInitialProps = _asyncToGenerator(
          /*#__PURE__*/
          _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(initialProps) {
            var req, res, api_response, user, props, getInitialProps, childPageProps;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    req = initialProps.req;
                    _context.prev = 1;
                    _context.next = 4;
                    return Object(_utils_CookieCall__WEBPACK_IMPORTED_MODULE_12__["default"])(req, '/api/current_user');

                  case 4:
                    api_response = _context.sent;
                    _context.next = 10;
                    break;

                  case 7:
                    _context.prev = 7;
                    _context.t0 = _context["catch"](1);
                    console.log(_context.t0);

                  case 10:
                    user = api_response.data;
                    props = {
                      user: user
                    };
                    getInitialProps = ChildPage.getInitialProps;

                    if (!getInitialProps) {
                      _context.next = 18;
                      break;
                    }

                    _context.next = 16;
                    return getInitialProps(initialProps);

                  case 16:
                    childPageProps = _context.sent;
                    props = _objectSpread({}, props, childPageProps);

                  case 18:
                    return _context.abrupt("return", props);

                  case 19:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this, [[1, 7]]);
          }));

          return function getInitialProps(_x) {
            return _getInitialProps.apply(this, arguments);
          };
        }()
      }]);

      return _class;
    }(react__WEBPACK_IMPORTED_MODULE_1__["Component"])
  );
};

/* harmony default export */ __webpack_exports__["default"] = (layout);

/***/ }),

/***/ "./components/Layout/Menu.js":
/*!***********************************!*\
  !*** ./components/Layout/Menu.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/store */ "./redux/store.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _MenuUser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MenuUser */ "./components/Layout/MenuUser.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }








var TopMenu =
/*#__PURE__*/
function (_Component) {
  _inherits(TopMenu, _Component);

  function TopMenu(props) {
    var _this;

    _classCallCheck(this, TopMenu);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TopMenu).call(this, props));
    _this.handleSignUp = _this.handleSignUp.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.state = {
      username: '',
      password: '',
      password_2: '',
      signUpErrors: [],
      signUpOpen: false,
      signInOpen: false
    };
    return _this;
  }

  _createClass(TopMenu, [{
    key: "renderRightMenu",
    value: function renderRightMenu(user) {
      var _this2 = this;

      switch (user) {
        case false:
          {
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
              onClick: function onClick(e) {
                return _this2.setState({
                  signInOpen: true
                });
              },
              color: "black"
            }, "Sign in"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
              className: "or"
            }, "or"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
              onClick: function onClick(e) {
                return _this2.setState({
                  signUpOpen: true
                });
              },
              color: "black",
              className: "margin-right-1em"
            }, "Sign up"));
          }

        case null:
          {
            return '';
          }

        default:
          {
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_MenuUser__WEBPACK_IMPORTED_MODULE_6__["default"], {
              user: user
            });
          }
      }
    }
  }, {
    key: "handleSignUp",
    value: function () {
      var _handleSignUp = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this$state, username, password, password_2, signUpErrors, response;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // Client side check
                _this$state = this.state, username = _this$state.username, password = _this$state.password, password_2 = _this$state.password_2;
                signUpErrors = [];

                if (username.length < 5) {
                  signUpErrors.push('Username should be at least 4 characters long.');
                } else if (username.length > 20) {
                  signUpErrors.push('Username should be maximum 20 characters long.');
                }

                if (password.length >= 8) {
                  if (password !== password_2) {
                    signUpErrors.push('Passwords do not seem to match.');
                  }
                } else {
                  signUpErrors.push('Password should contain at least 8 characters.');
                }

                if (!(signUpErrors.length > 0)) {
                  _context.next = 7;
                  break;
                }

                this.setState({
                  signUpErrors: signUpErrors
                });
                return _context.abrupt("return");

              case 7:
                _context.next = 9;
                return axios__WEBPACK_IMPORTED_MODULE_5___default()({
                  method: 'post',
                  url: '/register',
                  data: {
                    username: username,
                    password: password
                  },
                  config: {
                    headers: {
                      'Content-Type': 'multipart/form-data'
                    }
                  }
                });

              case 9:
                response = _context.sent;

                if (response.data.success) {// const data = new FormData();
                  // data.append('username', username);
                  // data.append('password', password);
                  // const response = await axios({
                  //   method: 'post',
                  //   url: '/login',
                  //   data: data,
                  //   config: { headers: { 'Content-Type': 'multipart/form-data' } }
                  // });
                } else {
                  this.setState({
                    signUpErrors: ['This username already exist. Try to pick something else.']
                  });
                }

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function handleSignUp() {
        return _handleSignUp.apply(this, arguments);
      };
    }()
  }, {
    key: "isButtonDisabled",
    value: function isButtonDisabled(text) {
      var ok = text.every(function (curr) {
        return curr.length > 0;
      });
      return !ok;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"], {
        inverted: true,
        size: "large",
        className: "top-menu"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
        className: "item-logo"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Image"], {
        className: "logo",
        src: "/static/img/logo/logo.png"
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
      }, this.renderRightMenu(this.props.user)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
        open: this.state.signUpOpen,
        size: "small"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Modal"].Header, {
        className: "modal-header"
      }, "Sign up as a new user"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Modal"].Content, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Field, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Username"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        onChange: function onChange(e) {
          return _this3.setState({
            username: e.target.value
          });
        },
        value: this.state.username
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Field, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Password"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "password",
        onChange: function onChange(e) {
          return _this3.setState({
            password: e.target.value
          });
        },
        value: this.state.password
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Field, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Repeat password"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "password",
        onChange: function onChange(e) {
          return _this3.setState({
            password_2: e.target.value
          });
        },
        value: this.state.password_2
      }))), this.renderSingUpErrors(this.state.signUpErrors)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Modal"].Actions, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        className: "dark-button",
        onClick: function onClick(e) {
          _this3.setState({
            signUpOpen: false,
            username: '',
            password: '',
            password_2: ''
          });
        }
      }, "Back"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        className: "orange-button-dark",
        onClick: function onClick(e) {
          return _this3.handleSignUp();
        },
        disabled: this.isButtonDisabled([this.state.username, this.state.password, this.state.password_2])
      }, "Sign Up"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
        open: this.state.signInOpen,
        size: "small"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Modal"].Header, {
        className: "modal-header"
      }, "Sign in"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Modal"].Content, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"], {
        id: "login_form",
        action: "/login",
        method: "post"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Field, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Username"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        name: "username",
        onChange: function onChange(e) {
          return _this3.setState({
            username: e.target.value
          });
        },
        value: this.state.username
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Field, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Password"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        name: "password",
        type: "password",
        onChange: function onChange(e) {
          return _this3.setState({
            password: e.target.value
          });
        },
        value: this.state.password
      })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Modal"].Actions, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        className: "dark-button",
        onClick: function onClick(e) {
          _this3.setState({
            signInOpen: false,
            username: '',
            password: ''
          });
        }
      }, "Back"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        type: "submit",
        form: "login_form",
        className: "orange-button-dark",
        disabled: this.isButtonDisabled([this.state.username, this.state.password])
      }, "Sign In"))));
    }
  }, {
    key: "renderSingUpErrors",
    value: function renderSingUpErrors(errors) {
      if (errors[0]) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Message"], {
          error: true,
          header: "There were some errors in your sign up form.",
          list: errors
        });
      }

      return '';
    }
  }]);

  return TopMenu;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.login.user
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps)(TopMenu));

/***/ }),

/***/ "./components/Layout/MenuUser.js":
/*!***************************************!*\
  !*** ./components/Layout/MenuUser.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ethereum_blockies_base64__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ethereum-blockies-base64 */ "ethereum-blockies-base64");
/* harmony import */ var ethereum_blockies_base64__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ethereum_blockies_base64__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _next_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../next-routes */ "./next-routes.js");
/* harmony import */ var _next_routes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_next_routes__WEBPACK_IMPORTED_MODULE_5__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }







var MenuUser =
/*#__PURE__*/
function (_Component) {
  _inherits(MenuUser, _Component);

  function MenuUser(props) {
    var _this;

    _classCallCheck(this, MenuUser);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MenuUser).call(this, props));
    _this.handleSingOut = _this.handleSignOut.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.state = {
      avatarClassNameModifier: ''
    };
    return _this;
  }

  _createClass(MenuUser, [{
    key: "handleSignOut",
    value: function () {
      var _handleSignOut = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.setState({
                  avatarClassNameModifier: 'avatar-exit'
                });
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get('/logout');

              case 3:
                _next_routes__WEBPACK_IMPORTED_MODULE_5__["Router"].push('/');

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function handleSignOut() {
        return _handleSignOut.apply(this, arguments);
      };
    }()
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var user = this.props.user;
      var username = user.username,
          id = user.id;
      var usernameStyle = {
        color: 'white'
      };
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
        className: "top-menu-right"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Row, {
        verticalAlign: "middle"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
        width: 4
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: ethereum_blockies_base64__WEBPACK_IMPORTED_MODULE_3___default()(username),
        className: "user-avatar user-avatar-menu undragable ".concat(this.state.avatarClassNameModifier)
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
        width: 1
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
        width: 10,
        className: "user-column-right"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Row, {
        style: {
          padding: '0'
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Header"], {
        size: "tiny",
        style: usernameStyle
      }, username))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Row, {
        style: {
          padding: '0'
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
        width: "3",
        style: {
          padding: '0'
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        size: "small",
        onClick: function onClick(e) {
          return _this2.handleSignOut();
        },
        icon: "power off",
        className: "user-column-right-button orange-button-dark"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
        width: "1",
        style: {
          padding: '0.5em'
        }
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
        style: {
          padding: '0'
        },
        width: "3"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        size: "small",
        icon: "setting",
        className: "user-column-right-button orange-button-dark"
      })))))));
    }
  }]);

  return MenuUser;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (MenuUser);

/***/ }),

/***/ "./components/match/BalanceBox.js":
/*!****************************************!*\
  !*** ./components/match/BalanceBox.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_match_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/match/actions */ "./redux/match/actions.js");
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/store */ "./redux/store.js");
/* harmony import */ var _Token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Token */ "./components/match/Token.js");
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








var BalanceBox =
/*#__PURE__*/
function (_Component) {
  _inherits(BalanceBox, _Component);

  function BalanceBox(props) {
    var _this;

    _classCallCheck(this, BalanceBox);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BalanceBox).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderItems", function (tokens) {
      var tokensInBalance = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.filter(tokens, {
        position: 'balance-box'
      });

      var toRender = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, tokensInBalance.map(function (token) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: 'balance-box-token',
          onClick: function onClick() {
            return _this.handleClick(token);
          },
          key: token.id
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Token__WEBPACK_IMPORTED_MODULE_5__["default"], {
          token: token
        }));
      }));
      return toRender;
    });

    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(BalanceBox, [{
    key: "handleClick",
    value: function handleClick(token) {
      _redux_store__WEBPACK_IMPORTED_MODULE_4__["default"].dispatch(Object(_redux_match_actions__WEBPACK_IMPORTED_MODULE_3__["changeTokenPosition"])(token));
    }
  }, {
    key: "render",
    value: function render() {
      if (this.props.user) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "tokens-box"
      }, this.renderItems(this.props.tokens));
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Message"], {
        warning: true,
        header: "Sign in",
        content: "Please sign in in order to see your balances and place bets."
      });
    }
  }]);

  return BalanceBox;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (BalanceBox);

/***/ }),

/***/ "./components/match/BettingBox.js":
/*!****************************************!*\
  !*** ./components/match/BettingBox.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/constants */ "./utils/constants.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _BettingBoxToken__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BettingBoxToken */ "./components/match/BettingBoxToken.js");
/* harmony import */ var _RangeSlider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RangeSlider */ "./components/match/RangeSlider.js");
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








var BettingBox =
/*#__PURE__*/
function (_Component) {
  _inherits(BettingBox, _Component);

  function BettingBox(props) {
    var _this;

    _classCallCheck(this, BettingBox);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BettingBox).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "NUMBER_OF_BOXES", 4);

    return _this;
  }

  _createClass(BettingBox, [{
    key: "renderBetInfo",
    value: function renderBetInfo(bet, odds) {
      var estimatedBetValue = bet.estimatedBetValue.toFixed(2);
      var estimatedReturn = (bet.estimatedBetValue * odds).toFixed(2);
      var statusIcon, status, statusClassName;

      switch (bet.state) {
        case 'pending':
          {
            statusIcon = _utils_constants__WEBPACK_IMPORTED_MODULE_2__["ICON"].BET_PENDING;
            break;
          }

        case 'won':
          {
            statusClassName = 'bet-info-status-won';
            statusIcon = _utils_constants__WEBPACK_IMPORTED_MODULE_2__["ICON"].BET_WON;
            break;
          }

        case 'lost':
          {
            statusClassName = 'bet-info-status-lost';
            statusIcon = _utils_constants__WEBPACK_IMPORTED_MODULE_2__["ICON"].BET_LOST;
            break;
          }

        case 'draw':
          {
            statusIcon = _utils_constants__WEBPACK_IMPORTED_MODULE_2__["ICON"].BET_DRAW;
            break;
          }

        case 'canceled':
          {
            statusIcon = _utils_constants__WEBPACK_IMPORTED_MODULE_2__["ICON"].BET_CANCELED;
            break;
          }
      }

      status = bet.state;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"], {
        className: "bet-info"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
        className: "orange-label-light",
        horizontal: true
      }, "PICKED TEAM"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, bet.team.displayName))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
        className: "orange-label-light",
        horizontal: true
      }, "STATUS"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: statusClassName
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, status), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
        name: statusIcon
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
        className: "orange-label-light",
        horizontal: true
      }, "ESTIMATED BET VALUE"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, estimatedBetValue, "$"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
        className: "orange-label-light",
        horizontal: true
      }, "ESTIMATED RETURN"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, estimatedReturn, "$")))));
    }
  }, {
    key: "renderTokensToBet",
    value: function renderTokensToBet(tokens) {
      var items = [];

      for (var i = 0; i < this.NUMBER_OF_BOXES; i++) {
        var token = tokens[i] || null;
        items.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
          className: "betting-box-row",
          key: i
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BettingBoxToken__WEBPACK_IMPORTED_MODULE_4__["default"], {
          token: token
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
          verticalAlign: "middle"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RangeSlider__WEBPACK_IMPORTED_MODULE_5__["default"], {
          prices: this.props.prices,
          token: token,
          toBet: tokens
        }))));
      }

      return items;
    }
  }, {
    key: "renderTokensBet",
    value: function renderTokensBet(tokens) {
      var items = [];

      for (var i = 0; i < this.NUMBER_OF_BOXES; i++) {
        var token = tokens[i] || null;
        items.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
          className: "betting-box-row",
          key: i
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
          width: 7
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BettingBoxToken__WEBPACK_IMPORTED_MODULE_4__["default"], {
          token: token
        }))));
      }

      return items;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          tokens = _this$props.tokens,
          bet = _this$props.bet,
          teams = _this$props.teams;
      if (!bet) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "betting-box"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
        style: {
          paddingTop: '1em'
        },
        columns: "equal"
      }, this.renderTokensToBet(tokens)));

      var odds = lodash__WEBPACK_IMPORTED_MODULE_3___default.a.find(teams, {
        id: bet.teamID
      }).odds;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "betting-box"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
        columns: "equal"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, null, this.renderTokensBet(bet.tokensBet)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, null, this.renderBetInfo(bet, odds)))));
    }
  }]);

  return BettingBox;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (BettingBox);

/***/ }),

/***/ "./components/match/BettingBoxToken.js":
/*!*********************************************!*\
  !*** ./components/match/BettingBoxToken.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Token */ "./components/match/Token.js");
/* harmony import */ var _redux_match_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/match/actions */ "./redux/match/actions.js");
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/store */ "./redux/store.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }







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
    value: function handleClick(token) {
      _redux_store__WEBPACK_IMPORTED_MODULE_4__["default"].dispatch(Object(_redux_match_actions__WEBPACK_IMPORTED_MODULE_3__["changeTokenPosition"])(token));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var token = this.props.token;

      if (token) {
        var style = token.balance ? {
          cursor: 'pointer'
        } : {
          cursor: 'default'
        };
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], {
          style: style,
          onClick: function onClick() {
            return _this2.handleClick(token);
          },
          textAlign: "center",
          className: 'betting-box-segment betting-box-segment-filled'
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Token__WEBPACK_IMPORTED_MODULE_2__["default"], {
          isBettingBox: true,
          token: token,
          className: "token-dropped"
        })));
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], {
        size: 'big',
        textAlign: "center",
        className: 'betting-box-segment'
      }));
    }
  }]);

  return BettingBoxToken;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (BettingBoxToken);

/***/ }),

/***/ "./components/match/ConfirmBetModal.js":
/*!*********************************************!*\
  !*** ./components/match/ConfirmBetModal.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_match_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/match/actions */ "./redux/match/actions.js");
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/store */ "./redux/store.js");
/* harmony import */ var _next_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../next-routes */ "./next-routes.js");
/* harmony import */ var _next_routes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_next_routes__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_TokenFromWei__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/TokenFromWei */ "./utils/TokenFromWei.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../config/config */ "./config/config.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_config_config__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_api_PlaceBet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/api/PlaceBet */ "./utils/api/PlaceBet.js");
/* harmony import */ var _utils_Sleep__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/Sleep */ "./utils/Sleep.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
    var _this;

    _classCallCheck(this, ConfirmBetModal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ConfirmBetModal).call(this, props));
    _this.handleConfirm = _this.handleConfirm.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.closeFinalModal = _this.closeFinalModal.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.state = {
      isConfirmButtonLoading: false,
      confirmButtonIcon: false,
      confirmButtonText: 'Confirm and place bet',
      confirmButtonClassName: 'orange-button-dark',
      isBackButtonDisabled: false
    };
    return _this;
  }

  _createClass(ConfirmBetModal, [{
    key: "closeFinalModal",
    value: function closeFinalModal() {
      this.setState({
        isFinalModalErrorOpen: false,
        isFinalModalSuccessOpen: false
      });
      _redux_store__WEBPACK_IMPORTED_MODULE_4__["default"].dispatch(Object(_redux_match_actions__WEBPACK_IMPORTED_MODULE_3__["toggleModal"])('confirmBetModal'));
    }
  }, {
    key: "handleConfirm",
    value: function () {
      var _handleConfirm = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(match, pickedTeam, tokensToBet, user) {
        var tokensBet, api_response, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.setState({
                  isConfirmButtonLoading: true,
                  isBackButtonDisabled: true
                });
                tokensBet = tokensToBet.map(function (token) {
                  return {
                    id: token.id,
                    amount: token.balance
                  };
                });
                _context.next = 4;
                return Object(_utils_api_PlaceBet__WEBPACK_IMPORTED_MODULE_8__["default"])({
                  matchID: match._id,
                  teamID: pickedTeam.id,
                  betMakerID: user._id,
                  tokensBet: tokensBet
                });

              case 4:
                api_response = _context.sent;
                data = api_response.data;

                if (!data.bet) {
                  _context.next = 13;
                  break;
                }

                this.setState({
                  isConfirmButtonLoading: false,
                  isBackButtonDisabled: false,
                  confirmButtonIcon: 'chevron down',
                  confirmButtonText: 'Bet placed successfuly'
                });
                _context.next = 10;
                return Object(_utils_Sleep__WEBPACK_IMPORTED_MODULE_9__["default"])(500);

              case 10:
                _next_routes__WEBPACK_IMPORTED_MODULE_5__["Router"].push("/matches/".concat(match._id));
                _context.next = 14;
                break;

              case 13:
                this.setState({
                  isConfirmButtonLoading: false,
                  isBackButtonDisabled: false,
                  confirmButtonIcon: 'exclamation',
                  confirmButtonText: 'Placing bet failed',
                  confirmButtonClassName: 'error-button'
                });

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function handleConfirm(_x, _x2, _x3, _x4) {
        return _handleConfirm.apply(this, arguments);
      };
    }()
  }, {
    key: "renderTeamLogos",
    value: function renderTeamLogos(match, pickedTeam) {
      var notPickedTeam = pickedTeam.id === match.teams[0].id ? match.teams[1] : match.teams[0];
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "confirm-bet-modal-img-div"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "confirm-bet-modal-img-divider"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Image"], {
        className: "confirm-bet-modal-img confirm-bet-modal-img-picked",
        src: "".concat(_config_config__WEBPACK_IMPORTED_MODULE_7__["backend"], "/img/").concat(pickedTeam.logo)
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Image"], {
        className: "confirm-bet-modal-img confirm-bet-modal-img-notpicked",
        src: "".concat(_config_config__WEBPACK_IMPORTED_MODULE_7__["backend"], "/img/").concat(notPickedTeam.logo)
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          open = _this$props.open,
          tokensToBet = _this$props.tokensToBet,
          pickedTeam = _this$props.pickedTeam,
          user = _this$props.user,
          match = _this$props.match;
      var tokenList = tokensToBet.map(function (curr) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"].Item, {
          as: "p",
          key: curr.symbol
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
          name: "right triangle"
        }), "".concat(Object(_utils_TokenFromWei__WEBPACK_IMPORTED_MODULE_6__["default"])(curr), " ").concat(curr.symbol));
      });
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
        size: "tiny",
        open: open
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Modal"].Header, {
        className: "modal-header"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
        style: {
          marginRight: '1em'
        },
        name: "check"
      }), "You are about to place a bet"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Modal"].Content, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Modal"].Description, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
        width: 10
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Header"], null, "Your bet: "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"], {
        className: "confirm-bet-modal-ul font-dark-orange",
        as: "ul"
      }, tokenList), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Header"], null, "Picked Team:", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "font-dark-orange"
      }, ' ' + pickedTeam.displayName)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "odds-message"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
        name: "info circle"
      }), "Odds are now ", pickedTeam.odds, " but keep in mind they can change prior to the game start based on future bets.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
        width: 6
      }, this.renderTeamLogos(match, pickedTeam))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Modal"].Actions, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        disabled: this.state.isBackButtonDisabled,
        className: "dark-button",
        onClick: function onClick(e) {
          return _redux_store__WEBPACK_IMPORTED_MODULE_4__["default"].dispatch(Object(_redux_match_actions__WEBPACK_IMPORTED_MODULE_3__["toggleModal"])('confirmBetModal'));
        }
      }, "Back"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        loading: this.state.isConfirmButtonLoading,
        icon: this.state.confirmButtonIcon,
        className: this.state.confirmButtonClassName,
        content: this.state.confirmButtonText,
        onClick: function onClick(e) {
          return _this2.handleConfirm(match, pickedTeam, tokensToBet, user);
        }
      })));
    }
  }]);

  return ConfirmBetModal;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ConfirmBetModal);

/***/ }),

/***/ "./components/match/ErrorModal.js":
/*!****************************************!*\
  !*** ./components/match/ErrorModal.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_match_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/match/actions */ "./redux/match/actions.js");
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/store */ "./redux/store.js");
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
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          key: curr
        }, curr);
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
        size: "tiny",
        open: modal.isOpen,
        closeOnDocumentClick: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Modal"].Header, {
        className: "font-error"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
        name: "times circle outline"
      }), modal.head), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Modal"].Content, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Modal"].Description, {
        className: "font-error"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, list))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Modal"].Actions, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "dark-orange-bg font-white",
        onClick: function onClick(e) {
          return _redux_store__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch(Object(_redux_match_actions__WEBPACK_IMPORTED_MODULE_2__["toggleErrorModal"])());
        }
      }, "OK")));
    }
  }]);

  return ErrorModal;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ErrorModal);

/***/ }),

/***/ "./components/match/LastBets.js":
/*!**************************************!*\
  !*** ./components/match/LastBets.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ethereum_blockies_base64__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ethereum-blockies-base64 */ "ethereum-blockies-base64");
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
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

/***/ "./components/match/RangeSlider.js":
/*!*****************************************!*\
  !*** ./components/match/RangeSlider.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! big.js */ "big.js");
/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(big_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_rangeslider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-rangeslider */ "react-rangeslider");
/* harmony import */ var react_rangeslider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_rangeslider__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_match_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/match/actions */ "./redux/match/actions.js");
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/store */ "./redux/store.js");
/* harmony import */ var _utils_EstimateBetValue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/EstimateBetValue */ "./utils/EstimateBetValue.js");
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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleRange", function (val, token) {
      if (!token) return;

      _this.setState({
        value: val
      });

      var change = val / _this.maxValue;
      var newBalance = "".concat(big_js__WEBPACK_IMPORTED_MODULE_0___default()(token.initialBalance).mul(change).toFixed(0));
      newBalance = newBalance < 1 ? 1 : newBalance;
      token.balance = newBalance;
      _redux_store__WEBPACK_IMPORTED_MODULE_4__["default"].dispatch(Object(_redux_match_actions__WEBPACK_IMPORTED_MODULE_3__["changeTokenAmount"])(token));
    });

    _this.handleRange = _this.handleRange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.maxValue = 2000;
    _this.lastValue = _this.maxValue;
    _this.state = {
      value: _this.maxValue
    };
    return _this;
  }

  _createClass(RangeSlider, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          token = _this$props.token,
          toBet = _this$props.toBet,
          prices = _this$props.prices;
      var className;

      if (!token) {
        className = 'range-slider-inactive';
        if (this.lastValue !== this.state.value) this.setState({
          value: this.maxValue
        });
        this.lastValue = this.state.value;
      }

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_rangeslider__WEBPACK_IMPORTED_MODULE_2___default.a, {
        className: className,
        min: 1,
        max: this.maxValue,
        step: 10,
        tooltip: false,
        value: this.state.value,
        onChange: function onChange(val) {
          return _this2.handleRange(val, token);
        },
        onChangeComplete: function onChangeComplete() {
          Object(_utils_EstimateBetValue__WEBPACK_IMPORTED_MODULE_5__["default"])(toBet, prices);
        }
      });
    }
  }]);

  return RangeSlider;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (RangeSlider);

/***/ }),

/***/ "./components/match/Teams.js":
/*!***********************************!*\
  !*** ./components/match/Teams.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/config */ "./config/config.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_config_config__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_match_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/match/actions */ "./redux/match/actions.js");
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/store */ "./redux/store.js");
/* harmony import */ var _utils_DateFormatter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/DateFormatter */ "./utils/DateFormatter.js");
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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClick", function (user, team, pickedTeam) {
      if (user) {
        if (user.bet) return;

        if (pickedTeam.id === team.id) {
          _redux_store__WEBPACK_IMPORTED_MODULE_4__["default"].dispatch(Object(_redux_match_actions__WEBPACK_IMPORTED_MODULE_3__["pickTeam"])({}));
          return;
        }

        _redux_store__WEBPACK_IMPORTED_MODULE_4__["default"].dispatch(Object(_redux_match_actions__WEBPACK_IMPORTED_MODULE_3__["pickTeam"])(team));
      }
    });

    return _this;
  }

  _createClass(Teams, [{
    key: "renderTeamLabel",
    value: function renderTeamLabel(user, team, pickedTeam) {
      var _this2 = this;

      var style = user && !user.bet ? {
        cursor: 'pointer'
      } : {};
      var nameClassNameModifier = '';
      var labelClassNameModifier = '';

      if (user.bet) {
        if (user.bet.teamID == team.id) {
          labelClassNameModifier = ' team-label-picked';
          nameClassNameModifier = ' team-name-picked';
        }
      } else {
        if (pickedTeam.id == team.id) labelClassNameModifier = ' team-label-picked';
        nameClassNameModifier = ' team-name-picked';
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        onClick: function onClick(event) {
          _this2.handleClick(user, team, pickedTeam);
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
        size: "huge",
        style: style,
        className: "team-label".concat(labelClassNameModifier)
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
        className: "undragable",
        src: "".concat(_config_config__WEBPACK_IMPORTED_MODULE_2__["backend"], "/img/").concat(team.logo)
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: style
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "team-name".concat(nameClassNameModifier)
      }, team.displayName)), ' ');
    }
  }, {
    key: "renderOdds",
    value: function renderOdds(match, index) {
      var percentageAndOdds = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "team-percentage"
      }, match.teams[index].percentages, "%"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "team-odds"
      }, "x ", match.teams[index].odds.toFixed(2)));
      if (index === 0) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
        color: "black",
        ribbon: true
      }, percentageAndOdds);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
        color: "black",
        ribbon: "right"
      }, percentageAndOdds);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          match = _this$props.match,
          pickedTeam = _this$props.pickedTeam,
          user = _this$props.user;
      var bet = user.bet;
      if (match) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
        className: "teams-grid",
        padded: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
        width: 2
      }, this.renderOdds(match, 0)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
        width: 5,
        verticalAlign: "middle",
        textAlign: "center"
      }, this.renderTeamLabel(user, match.teams[0], pickedTeam)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
        width: 2,
        verticalAlign: "middle",
        textAlign: "center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
        color: "black"
      }, "VS")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
        width: 5,
        verticalAlign: "middle",
        textAlign: "center"
      }, this.renderTeamLabel(user, match.teams[1], pickedTeam)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
        width: 2
      }, this.renderOdds(match, 1))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, null))));
      return '';
    }
  }]);

  return Teams;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Teams);

/***/ }),

/***/ "./components/match/Token.js":
/*!***********************************!*\
  !*** ./components/match/Token.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_TokenFromWei__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/TokenFromWei */ "./utils/TokenFromWei.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/config */ "./config/config.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_config_config__WEBPACK_IMPORTED_MODULE_3__);




/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var token = props.token,
      isBettingBox = props.isBettingBox;
  if (isBettingBox || token.balance) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    className: "token balancebox-token"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "".concat(Object(_utils_TokenFromWei__WEBPACK_IMPORTED_MODULE_2__["default"])(token, true))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    className: "undragable",
    spaced: "left",
    src: "".concat(_config_config__WEBPACK_IMPORTED_MODULE_3__["backend"], "/img/").concat(token.logo)
  }));
  if (token) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    className: "token lastbets-token"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "lastbets-token-span"
  }, "".concat(Object(_utils_TokenFromWei__WEBPACK_IMPORTED_MODULE_2__["default"])(token, true))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    className: "undragable",
    spaced: "left",
    src: "".concat(_config_config__WEBPACK_IMPORTED_MODULE_3__["backend"], "/img/").concat(token.logo)
  }));
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    className: "token lastbets-token"
  });
});

/***/ }),

/***/ "./components/match/WinningsBox.js":
/*!*****************************************!*\
  !*** ./components/match/WinningsBox.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var WinningsBox =
/*#__PURE__*/
function (_Component) {
  _inherits(WinningsBox, _Component);

  function WinningsBox() {
    _classCallCheck(this, WinningsBox);

    return _possibleConstructorReturn(this, _getPrototypeOf(WinningsBox).apply(this, arguments));
  }

  _createClass(WinningsBox, [{
    key: "render",
    value: function render() {
      var bet = this.props.bet; // switch lost, won, pending, draw

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Not yet implemented");
    }
  }]);

  return WinningsBox;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (WinningsBox);

/***/ }),

/***/ "./config/config.js":
/*!**************************!*\
  !*** ./config/config.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

var config = {
  backend: process.env.BACKEND_URL || 'http://localhost:5000'
};
module.exports = config;

/***/ }),

/***/ "./next-routes.js":
/*!************************!*\
  !*** ./next-routes.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var routes = __webpack_require__(/*! next-routes */ "next-routes")();

routes.add('match', '/matches/:id', '/matches/match');
module.exports = routes;

/***/ }),

/***/ "./node_modules/react-rangeslider/lib/index.css":
/*!******************************************************!*\
  !*** ./node_modules/react-rangeslider/lib/index.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/matches/match.js":
/*!********************************!*\
  !*** ./pages/matches/match.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Layout/Layout */ "./components/Layout/Layout.js");
/* harmony import */ var _components_match_BettingBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/match/BettingBox */ "./components/match/BettingBox.js");
/* harmony import */ var _components_match_ConfirmBetModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/match/ConfirmBetModal */ "./components/match/ConfirmBetModal.js");
/* harmony import */ var _components_match_ErrorModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/match/ErrorModal */ "./components/match/ErrorModal.js");
/* harmony import */ var _components_match_Teams__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/match/Teams */ "./components/match/Teams.js");
/* harmony import */ var _components_match_BalanceBox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/match/BalanceBox */ "./components/match/BalanceBox.js");
/* harmony import */ var _redux_match_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../redux/match/actions */ "./redux/match/actions.js");
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../redux/store */ "./redux/store.js");
/* harmony import */ var _static_css_match_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../static/css/match.css */ "./static/css/match.css");
/* harmony import */ var _static_css_match_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_static_css_match_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _utils_CookieCall__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../utils/CookieCall */ "./utils/CookieCall.js");
/* harmony import */ var _utils_SeverSideRedirect__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../utils/SeverSideRedirect */ "./utils/SeverSideRedirect.js");
/* harmony import */ var _components_match_MatchDetails__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/match/MatchDetails */ "./components/match/MatchDetails.js");
/* harmony import */ var _components_match_LastBets__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/match/LastBets */ "./components/match/LastBets.js");
/* harmony import */ var _components_match_WinningsBox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../components/match/WinningsBox */ "./components/match/WinningsBox.js");


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
        var _this$props$initial$m, tokens, user;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$props$initial$m = this.props.initial.matchInfo, tokens = _this$props$initial$m.tokens, user = _this$props$initial$m.user; //store.dispatch(updatePrices(prices));

                this.addTokens(user.balances);

              case 2:
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
      console.log(match);
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
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_match_Teams__WEBPACK_IMPORTED_MODULE_9__["default"], {
        user: user,
        match: match,
        pickedTeam: pickedTeam
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_match_MatchDetails__WEBPACK_IMPORTED_MODULE_16__["default"], {
        match: match
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", null, "Last bets"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_match_LastBets__WEBPACK_IMPORTED_MODULE_17__["default"], {
        bets: match.bets
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"].Column, {
        computer: 8,
        mobile: 16,
        tablet: 16
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", null, user.bet ? 'Your bet' : 'Place bet'), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_match_BettingBox__WEBPACK_IMPORTED_MODULE_6__["default"], {
        teams: match.teams,
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
      }, this.renderBetValue(betValue), this.renderEstimatedReturn(betValue))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", null, user.bet ? 'Winnings' : 'Balances'), user.bet ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_match_WinningsBox__WEBPACK_IMPORTED_MODULE_18__["default"], {
        bet: user.bet
      }) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_match_BalanceBox__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
    key: "renderEstimatedReturn",
    value: function renderEstimatedReturn(betValue) {
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
                return Object(_utils_CookieCall__WEBPACK_IMPORTED_MODULE_14__["default"])(req, "/api/match_info?id=".concat(matchID));

              case 4:
                api_response = _context3.sent;
                data = api_response.data;
                errorURL = '/404';

                if (!data) {
                  Object(_utils_SeverSideRedirect__WEBPACK_IMPORTED_MODULE_15__["default"])(res, errorURL);
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

/***/ }),

/***/ "./redux/index.js":
/*!************************!*\
  !*** ./redux/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _match_matchReducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./match/matchReducer */ "./redux/match/matchReducer.js");
/* harmony import */ var _layout_loginReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout/loginReducer */ "./redux/layout/loginReducer.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_2__);




var lastAction = function lastAction() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return action;
};

/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_2__["combineReducers"])({
  login: _layout_loginReducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  match: _match_matchReducer__WEBPACK_IMPORTED_MODULE_0__["default"],
  lastAction: lastAction
}));

/***/ }),

/***/ "./redux/layout/actions.js":
/*!*********************************!*\
  !*** ./redux/layout/actions.js ***!
  \*********************************/
/*! exports provided: login, logout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


function login(user) {
  return {
    type: 'LOG_IN',
    user: user
  };
}
var logout = function logout() {
  return (
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/logout');

              case 2:
                dispatch({
                  type: 'LOG_OUT'
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()
  );
};

/***/ }),

/***/ "./redux/layout/loginReducer.js":
/*!**************************************!*\
  !*** ./redux/layout/loginReducer.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

var initialState = {
  user: null
};

var loginReducer = function loginReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  var newState = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.cloneDeep(state);

  switch (action.type) {
    case 'LOG_OUT':
      {
        newState = {
          user: false
        };
        break;
      }

    case 'LOG_IN':
      {
        newState.user = action.user || false;
        break;
      }
  }

  return newState;
};

/* harmony default export */ __webpack_exports__["default"] = (loginReducer);

/***/ }),

/***/ "./redux/match/actions.js":
/*!********************************!*\
  !*** ./redux/match/actions.js ***!
  \********************************/
/*! exports provided: addTokens, changeTokenPosition, changeTokenAmount, updateEstimateBet, pickTeam, toggleErrorModal, toggleModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTokens", function() { return addTokens; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeTokenPosition", function() { return changeTokenPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeTokenAmount", function() { return changeTokenAmount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateEstimateBet", function() { return updateEstimateBet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pickTeam", function() { return pickTeam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleErrorModal", function() { return toggleErrorModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleModal", function() { return toggleModal; });
function addTokens(tokens) {
  return {
    type: 'ADD_TOKENS',
    tokens: tokens
  };
}
function changeTokenPosition(token, pos) {
  return {
    type: 'CHANGE_POS',
    token: token
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
function pickTeam(team) {
  return {
    type: 'PICK_TEAM',
    team: team
  };
}
function toggleErrorModal() {
  var head = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var reasons = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return {
    type: 'TOGGLE_ERROR_MODAL',
    head: head,
    reasons: reasons
  };
}
function toggleModal(property) {
  return {
    type: 'TOGGLE_MODAL',
    property: property
  };
}

/***/ }),

/***/ "./redux/match/matchReducer.js":
/*!*************************************!*\
  !*** ./redux/match/matchReducer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
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

        newState.betValue = Object(_utils_EstimateBetValue__WEBPACK_IMPORTED_MODULE_1__["default"])(newState.tokens.toBet, false);
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

/***/ "./redux/store.js":
/*!************************!*\
  !*** ./redux/store.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./redux/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);



var store = Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(___WEBPACK_IMPORTED_MODULE_0__["default"], Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_2___default.a));
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ "./static/css/layout.css":
/*!*******************************!*\
  !*** ./static/css/layout.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./static/css/match.css":
/*!******************************!*\
  !*** ./static/css/match.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./utils/CookieCall.js":
/*!*****************************!*\
  !*** ./utils/CookieCall.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/config */ "./config/config.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_config_config__WEBPACK_IMPORTED_MODULE_2__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var CookieCall =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(req, path) {
    var response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!req) {
              _context.next = 12;
              break;
            }

            if (!req.headers.cookie) {
              _context.next = 7;
              break;
            }

            _context.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat(_config_config__WEBPACK_IMPORTED_MODULE_2__["backend"]).concat(path), {
              headers: {
                cookie: req.headers.cookie
              }
            });

          case 4:
            response = _context.sent;
            _context.next = 10;
            break;

          case 7:
            _context.next = 9;
            return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat(_config_config__WEBPACK_IMPORTED_MODULE_2__["backend"]).concat(path));

          case 9:
            response = _context.sent;

          case 10:
            _context.next = 15;
            break;

          case 12:
            _context.next = 14;
            return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(path);

          case 14:
            response = _context.sent;

          case 15:
            return _context.abrupt("return", response);

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function CookieCall(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (CookieCall);

/***/ }),

/***/ "./utils/DateFormatter.js":
/*!********************************!*\
  !*** ./utils/DateFormatter.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var DateFormatter = function DateFormatter(date) {
  date = new Date(date);
  var hours = date.getHours().toString().length > 1 ? date.getHours() : "0".concat(date.getHours());
  var minutes = date.getMinutes().toString().length > 1 ? date.getMinutes() : "0".concat(date.getMinutes());
  var formatedDate = "".concat(date.getDate(), "/").concat(date.getMonth() + 1, "/").concat(date.getFullYear(), " ").concat(hours, ":").concat(minutes);
  var now = new Date();
  var difference;
  var aprox;

  if (date > now) {
    difference = (date.getTime() - now.getTime()) / 60000;
    aprox = "".concat(minutesToWord(difference), " from now");
    return {
      formatedDate: formatedDate,
      aprox: aprox,
      isFuture: true
    };
  } else {
    difference = (now.getTime() - date.getTime()) / 60000;
    aprox = "".concat(minutesToWord(difference), " ago");
    return {
      formatedDate: formatedDate,
      aprox: aprox,
      isFuture: false
    };
  }
};

var minutesToWord = function minutesToWord(minutes) {
  minutes = Math.round(minutes);

  if (minutes < 60) {
    if (minutes === 1) return '1 minute';else return "".concat(minutes, " minutes");
  } else if (minutes < 60 * 24) {
    var hours = Math.round(minutes / 60);
    if (hours === 1) return '1 hour';else return "".concat(hours, " hours");
  } else {
    var days = Math.round(minutes / (60 * 24));
    if (days === 1) return '1 day';else return "".concat(days, " days");
  }
};

/* harmony default export */ __webpack_exports__["default"] = (DateFormatter);

/***/ }),

/***/ "./utils/EstimateBetValue.js":
/*!***********************************!*\
  !*** ./utils/EstimateBetValue.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! big.js */ "big.js");
/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(big_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TokenFromWei__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TokenFromWei */ "./utils/TokenFromWei.js");
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/store */ "./redux/store.js");
/* harmony import */ var _redux_match_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/match/actions */ "./redux/match/actions.js");





var EstimateBetValue = function EstimateBetValue(tokensToBet) {
  var dispatch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var sum = tokensToBet.reduce(function (sum, token) {
    return sum + parseFloat(big_js__WEBPACK_IMPORTED_MODULE_0___default()(Object(_TokenFromWei__WEBPACK_IMPORTED_MODULE_1__["default"])(token)).mul(token.price.USD).toFixed(2));
  }, 0);
  if (sum === '00.00') sum = '0';
  if (dispatch) _redux_store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(Object(_redux_match_actions__WEBPACK_IMPORTED_MODULE_3__["updateEstimateBet"])(sum));
  return sum;
};

/* harmony default export */ __webpack_exports__["default"] = (EstimateBetValue);

/***/ }),

/***/ "./utils/OptimizeTokenAmount.js":
/*!**************************************!*\
  !*** ./utils/OptimizeTokenAmount.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! big.js */ "big.js");
/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(big_js__WEBPACK_IMPORTED_MODULE_0__);


var optimize = function optimize(amount) {
  var minimalAmountToDisplay = 0.0001;
  amount = big_js__WEBPACK_IMPORTED_MODULE_0___default()(amount);

  if (amount.cmp(minimalAmountToDisplay) === 1 || amount.cmp(minimalAmountToDisplay) === 0) {
    return amount.round(4);
  }

  return "< ".concat(minimalAmountToDisplay);
};

/* harmony default export */ __webpack_exports__["default"] = (optimize);

/***/ }),

/***/ "./utils/SeverSideRedirect.js":
/*!************************************!*\
  !*** ./utils/SeverSideRedirect.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _next_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../next-routes */ "./next-routes.js");
/* harmony import */ var _next_routes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_next_routes__WEBPACK_IMPORTED_MODULE_0__);


var ServerSideRedirect = function ServerSideRedirect(res, path) {
  if (res) {
    res.writeHead(302, {
      Location: path
    });
    res.end();
  } else {
    _next_routes__WEBPACK_IMPORTED_MODULE_0__["Router"].pushRoute(path);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (ServerSideRedirect);

/***/ }),

/***/ "./utils/Sleep.js":
/*!************************!*\
  !*** ./utils/Sleep.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Sleep = function Sleep(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Sleep);

/***/ }),

/***/ "./utils/TokenFromWei.js":
/*!*******************************!*\
  !*** ./utils/TokenFromWei.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OptimizeTokenAmount__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OptimizeTokenAmount */ "./utils/OptimizeTokenAmount.js");
/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! big.js */ "big.js");
/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(big_js__WEBPACK_IMPORTED_MODULE_1__);



var getScientificNotation = function getScientificNotation(decimals) {
  var number = decimals - 1;
  return "10e+".concat(number);
};

/* harmony default export */ __webpack_exports__["default"] = (function (token) {
  var optimize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var amount = token.balance ? token.balance : token.amount;
  var decimals = token.decimals; // console.log(
  //   'I divide ' +
  //     Big(amount) +
  //     'by ' +
  //     getScientificNotation(decimals) +
  //     ' and it gives me ' +
  //     Big(amount)
  //       .div(getScientificNotation(decimals))
  //       .toFixed()
  // );

  if (optimize) return "".concat(Object(_OptimizeTokenAmount__WEBPACK_IMPORTED_MODULE_0__["default"])(big_js__WEBPACK_IMPORTED_MODULE_1___default()(amount).div(getScientificNotation(decimals)).toFixed()));
  return "".concat(big_js__WEBPACK_IMPORTED_MODULE_1___default()(amount).div(getScientificNotation(decimals)).toFixed());
});

/***/ }),

/***/ "./utils/api/PlaceBet.js":
/*!*******************************!*\
  !*** ./utils/api/PlaceBet.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var PlaceBet =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(bet) {
    var data, response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            data = {
              matchID: bet.matchID,
              teamID: bet.teamID,
              betMakerID: bet.betMakerID,
              tokensBet: bet.tokensBet
            };
            _context.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_1___default()({
              method: 'post',
              url: '/place_bet',
              data: data
            });

          case 3:
            response = _context.sent;
            return _context.abrupt("return", response);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function PlaceBet(_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (PlaceBet);

/***/ }),

/***/ "./utils/constants.js":
/*!****************************!*\
  !*** ./utils/constants.js ***!
  \****************************/
/*! exports provided: ICON */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICON", function() { return ICON; });
var ICON = {
  DATE: 'calendar alternate outline',
  GAME_SCHEDULED: 'hourglass start',
  GAME_STARTED: 'hourglass half',
  GAME_FINISHED: 'hourglass end',
  BET_PENDING: 'stopwatch',
  BET_WON: 'trophy',
  BET_LOST: 'minus',
  BET_DRAW: 'law',
  BET_CANCELED: 'calendar times'
};

/***/ }),

/***/ 3:
/*!**************************************!*\
  !*** multi ./pages/matches/match.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/matches/match.js */"./pages/matches/match.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "big.js":
/*!*************************!*\
  !*** external "big.js" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("big.js");

/***/ }),

/***/ "ethereum-blockies-base64":
/*!*******************************************!*\
  !*** external "ethereum-blockies-base64" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ethereum-blockies-base64");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "next-routes":
/*!******************************!*\
  !*** external "next-routes" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-rangeslider":
/*!************************************!*\
  !*** external "react-rangeslider" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-rangeslider");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ })

/******/ });
//# sourceMappingURL=match.js.map