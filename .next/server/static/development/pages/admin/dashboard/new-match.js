module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

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
      var username = user.username;
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
        className: "user-avatar undragable ".concat(this.state.avatarClassNameModifier)
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

/***/ "./components/dashboard/Layout/Layout.js":
/*!***********************************************!*\
  !*** ./components/dashboard/Layout/Layout.js ***!
  \***********************************************/
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
/* harmony import */ var _static_css_layout_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../static/css/layout.css */ "./static/css/layout.css");
/* harmony import */ var _static_css_layout_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_static_css_layout_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_rangeslider_lib_index_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-rangeslider/lib/index.css */ "./node_modules/react-rangeslider/lib/index.css");
/* harmony import */ var react_rangeslider_lib_index_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_rangeslider_lib_index_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../config/config */ "./config/config.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_config_config__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _next_routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../next-routes */ "./next-routes.js");
/* harmony import */ var _next_routes__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_next_routes__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_CookieCall__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../utils/CookieCall */ "./utils/CookieCall.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Menu */ "./components/dashboard/Layout/Menu.js");


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












var dashboardLayout = function dashboardLayout(ChildPage) {
  return (
    /*#__PURE__*/
    function (_Component) {
      _inherits(_class, _Component);

      function _class() {
        _classCallCheck(this, _class);

        return _possibleConstructorReturn(this, _getPrototypeOf(_class).apply(this, arguments));
      }

      _createClass(_class, [{
        key: "render",
        value: function render() {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Container"], {
            fluid: true,
            className: "main-container"
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
            rel: "stylesheet",
            href: "//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css"
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Menu__WEBPACK_IMPORTED_MODULE_10__["default"], {
            user: this.props.user
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Container"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ChildPage, {
            initial: this.props
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "footer"
          }));
        }
      }], [{
        key: "getInitialProps",
        value: function () {
          var _getInitialProps = _asyncToGenerator(
          /*#__PURE__*/
          _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(initialProps) {
            var req, res, api_response, errorURL, user, isAdmin, props, getInitialProps, childPageProps;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    req = initialProps.req, res = initialProps.res;
                    _context.prev = 1;
                    _context.next = 4;
                    return Object(_utils_CookieCall__WEBPACK_IMPORTED_MODULE_9__["default"])(req, '/api/current_user');

                  case 4:
                    api_response = _context.sent;
                    _context.next = 10;
                    break;

                  case 7:
                    _context.prev = 7;
                    _context.t0 = _context["catch"](1);
                    console.log(_context.t0);

                  case 10:
                    errorURL = '/404';
                    user = api_response.data;
                    if (!user) isAdmin = false;else isAdmin = api_response.data.permissions.includes('admin');

                    if (!isAdmin) {
                      if (res) {
                        res.writeHead(302, {
                          Location: errorURL
                        });
                        res.end();
                      } else {
                        _next_routes__WEBPACK_IMPORTED_MODULE_8__["Router"].pushRoute(errorURL);
                      }
                    }

                    props = {
                      user: user
                    };
                    getInitialProps = ChildPage.getInitialProps;

                    if (!getInitialProps) {
                      _context.next = 21;
                      break;
                    }

                    _context.next = 19;
                    return getInitialProps(initialProps);

                  case 19:
                    childPageProps = _context.sent;
                    props = _objectSpread({}, props, childPageProps);

                  case 21:
                    return _context.abrupt("return", props);

                  case 22:
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

/* harmony default export */ __webpack_exports__["default"] = (dashboardLayout);

/***/ }),

/***/ "./components/dashboard/Layout/Menu.js":
/*!*********************************************!*\
  !*** ./components/dashboard/Layout/Menu.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _next_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../next-routes */ "./next-routes.js");
/* harmony import */ var _next_routes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_next_routes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_Sleep__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/Sleep */ "./utils/Sleep.js");
/* harmony import */ var _Layout_MenuUser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Layout/MenuUser */ "./components/Layout/MenuUser.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }








var DashboardMenu =
/*#__PURE__*/
function (_Component) {
  _inherits(DashboardMenu, _Component);

  function DashboardMenu(props) {
    var _this;

    _classCallCheck(this, DashboardMenu);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DashboardMenu).call(this, props));
    _this.handleRoute = _this.handleRoute.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.state = {
      loading: false
    };
    return _this;
  }

  _createClass(DashboardMenu, [{
    key: "handleRoute",
    value: function handleRoute(path) {
      _next_routes__WEBPACK_IMPORTED_MODULE_3__["Router"].pushRoute(path);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      console.log(this.props.user);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
        inverted: true,
        size: "large",
        className: "top-menu"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
        onClick: function onClick(e) {
          return _next_routes__WEBPACK_IMPORTED_MODULE_3__["Router"].pushRoute('/admin/dashboard');
        },
        src: "/static/img/logo.png"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
        onClick: function onClick(e) {
          return _this2.handleRoute('/admin/dashboard/teams');
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
        name: "users"
      }), "Teams"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
        onClick: function onClick(e) {
          return _this2.handleRoute('/admin/dashboard/tokens');
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
        name: "ethereum"
      }), "Tokens"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
        onClick: function onClick(e) {
          return _this2.handleRoute('/admin/dashboard/new-match');
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
        name: "plus"
      }), "New Match"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
        position: "right"
      }, "s", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Layout_MenuUser__WEBPACK_IMPORTED_MODULE_5__["default"], {
        user: this.props.user
      })));
    }
  }]);

  return DashboardMenu;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (DashboardMenu);

/***/ }),

/***/ "./components/dashboard/new-match/ApiMatchesItem.js":
/*!**********************************************************!*\
  !*** ./components/dashboard/new-match/ApiMatchesItem.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_DateFormatter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/DateFormatter */ "./utils/DateFormatter.js");
/* harmony import */ var _utils_api_AddTeam__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/api/AddTeam */ "./utils/api/AddTeam.js");
/* harmony import */ var _utils_api_AddLeague__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/api/AddLeague */ "./utils/api/AddLeague.js");
/* harmony import */ var _utils_api_AddMatch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../utils/api/AddMatch */ "./utils/api/AddMatch.js");
/* harmony import */ var _static_css_dashboard_dropzone_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../static/css/dashboard/dropzone.css */ "./static/css/dashboard/dropzone.css");
/* harmony import */ var _static_css_dashboard_dropzone_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_static_css_dashboard_dropzone_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _shared_DropZone__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/DropZone */ "./components/dashboard/shared/DropZone.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_10__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }












var ApiMatchesItem =
/*#__PURE__*/
function (_Component) {
  _inherits(ApiMatchesItem, _Component);

  function ApiMatchesItem(props) {
    var _this;

    _classCallCheck(this, ApiMatchesItem);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ApiMatchesItem).call(this, props));
    _this.handleAdd = _this.handleAdd.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.state = {
      modal: {
        open: false,
        data: {}
      },
      button: {
        loading: false,
        icon: 'plus',
        disabled: false
      }
    };
    return _this;
  }

  _createClass(ApiMatchesItem, [{
    key: "renderModalBody",
    value: function renderModalBody(data) {
      var _this2 = this;

      if (!data.pandaID) return;
      var dataToSend = data.dataToSend,
          teams = data.teams,
          league = data.league,
          pandaID = data.pandaID,
          startTime = data.startTime;
      var markup = [];

      var _loop = function _loop(i) {
        if (!dataToSend["team_".concat(i, "_ID")]) {
          var _image = teams[i].logo ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Image"], {
            size: "small",
            className: "margin-top-1em",
            centered: true,
            src: teams[i].logo.preview
          }) : '';

          markup.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"], {
            as: "h3"
          }, teams[i].displayName), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_shared_DropZone__WEBPACK_IMPORTED_MODULE_9__["default"], {
            handleDelete: function handleDelete(e) {
              teams[i].logo = null;

              _this2.setState({
                modal: _objectSpread({}, _this2.state.modal, {
                  teams: teams
                })
              });
            },
            droppedImg: teams[i].logo,
            onDrop: function onDrop(accepted, rejected) {
              var _accepted2 = _slicedToArray(accepted, 1),
                  file = _accepted2[0];

              teams[i].logo = file;

              _this2.setState({
                modal: _objectSpread({}, _this2.state.modal, {
                  teams: teams
                })
              });
            }
          }), _image));
        }
      };

      for (var i = 0; i < 2; i++) {
        _loop(i);
      }

      if (!dataToSend.league_ID) {
        var image = league.logo ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Image"], {
          size: "small",
          className: "margin-top-1em",
          centered: true,
          src: league.logo.preview
        }) : '';
        markup.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
          className: "max-width-100"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"], {
          as: "h3"
        }, league.displayName), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_shared_DropZone__WEBPACK_IMPORTED_MODULE_9__["default"], {
          handleDelete: function handleDelete(e) {
            league.logo = null;

            _this2.setState({
              modal: _objectSpread({}, _this2.state.modal, {
                league: league
              })
            });
          },
          droppedImg: league.logo,
          onDrop: function onDrop(accepted, rejected) {
            var _accepted = _slicedToArray(accepted, 1),
                file = _accepted[0];

            league.logo = file;

            _this2.setState({
              modal: _objectSpread({}, _this2.state.modal, {
                league: league
              })
            });
          }
        }), image));
      }

      return markup;
    }
  }, {
    key: "isButtonDisabled",
    value: function isButtonDisabled(teams, league, dataToSend) {
      if (!teams) return true;
      if (!teams[0].logo && !dataToSend.team_0_ID) return true;
      if (!teams[1].logo && !dataToSend.team_1_ID) return true;
      if (!league.logo && !dataToSend.league_ID) return true;
      return false;
    }
  }, {
    key: "handleAddMatch",
    value: function () {
      var _handleAddMatch = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(data) {
        var dataToSend, teams, league, pandaID, startTime, i, _api_response, _api_response2, api_response, match;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                dataToSend = data.dataToSend, teams = data.teams, league = data.league, pandaID = data.pandaID, startTime = data.startTime;
                i = 0;

              case 2:
                if (!(i < 2)) {
                  _context.next = 11;
                  break;
                }

                if (dataToSend["team_".concat(i, "_ID")]) {
                  _context.next = 8;
                  break;
                }

                _context.next = 6;
                return Object(_utils_api_AddTeam__WEBPACK_IMPORTED_MODULE_5__["default"])(teams[i]);

              case 6:
                _api_response = _context.sent;
                dataToSend["team_".concat(i, "_ID")] = _api_response.data.team._id;

              case 8:
                i++;
                _context.next = 2;
                break;

              case 11:
                if (dataToSend.league_ID) {
                  _context.next = 16;
                  break;
                }

                _context.next = 14;
                return Object(_utils_api_AddLeague__WEBPACK_IMPORTED_MODULE_6__["default"])(league);

              case 14:
                _api_response2 = _context.sent;
                dataToSend.league_ID = _api_response2.data.league._id;

              case 16:
                _context.next = 18;
                return Object(_utils_api_AddMatch__WEBPACK_IMPORTED_MODULE_7__["default"])({
                  teams: [dataToSend.team_0_ID, dataToSend.team_1_ID],
                  league: dataToSend.league_ID,
                  startTime: startTime,
                  pandaID: pandaID
                });

              case 18:
                api_response = _context.sent;
                match = api_response.data.match;
                if (match) this.addComplete(true);else this.addComplete(false);

              case 21:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function handleAddMatch(_x) {
        return _handleAddMatch.apply(this, arguments);
      };
    }()
  }, {
    key: "handleBack",
    value: function handleBack() {
      this.setState({
        modal: {
          open: false,
          data: ''
        },
        button: _objectSpread({}, this.state.button, {
          loading: false
        })
      });
    }
  }, {
    key: "handleAdd",
    value: function () {
      var _handleAdd = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(match) {
        var pandaID, startTime, teams, league, dataToSend, teamsInDb, i, _api_response3, team, api_response, leagueInDb, _api_response4, new_league, team_0_ID, team_1_ID, league_ID, _api_response5;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.setState({
                  button: _objectSpread({}, this.state.button, {
                    loading: true
                  })
                });
                pandaID = match.pandaID, startTime = match.startTime, teams = match.teams, league = match.league;
                dataToSend = {
                  team_0_ID: null,
                  team_1_ID: null,
                  league_ID: null
                }; // Teams

                _context3.next = 5;
                return teams.map(
                /*#__PURE__*/
                function () {
                  var _ref = _asyncToGenerator(
                  /*#__PURE__*/
                  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(curr) {
                    var api_response;
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            _context2.next = 2;
                            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/api/teams?pandaID=".concat(curr.pandaID));

                          case 2:
                            api_response = _context2.sent;
                            return _context2.abrupt("return", api_response.data.team);

                          case 4:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2, this);
                  }));

                  return function (_x3) {
                    return _ref.apply(this, arguments);
                  };
                }());

              case 5:
                teamsInDb = _context3.sent;
                _context3.next = 8;
                return Promise.all(teamsInDb);

              case 8:
                teamsInDb = _context3.sent;
                i = 0;

              case 10:
                if (!(i < 2)) {
                  _context3.next = 24;
                  break;
                }

                if (!(teamsInDb[i] !== null)) {
                  _context3.next = 15;
                  break;
                }

                dataToSend["team_".concat(i, "_ID")] = teamsInDb[i]._id;
                _context3.next = 21;
                break;

              case 15:
                if (!(teamsInDb[i] === null && teams[i].logo !== null)) {
                  _context3.next = 21;
                  break;
                }

                _context3.next = 18;
                return Object(_utils_api_AddTeam__WEBPACK_IMPORTED_MODULE_5__["default"])(teams[i]);

              case 18:
                _api_response3 = _context3.sent;
                team = _api_response3.data.team;
                dataToSend["team_".concat(i, "_ID")] = team._id;

              case 21:
                i++;
                _context3.next = 10;
                break;

              case 24:
                _context3.next = 26;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/api/leagues?pandaID=".concat(league.pandaID));

              case 26:
                api_response = _context3.sent;
                // League
                leagueInDb = api_response.data.league;
                if (leagueInDb !== null) dataToSend.league_ID = leagueInDb._id;

                if (!(leagueInDb === null && league.logo !== null)) {
                  _context3.next = 35;
                  break;
                }

                _context3.next = 32;
                return Object(_utils_api_AddLeague__WEBPACK_IMPORTED_MODULE_6__["default"])(league);

              case 32:
                _api_response4 = _context3.sent;
                new_league = _api_response4.data.league;
                dataToSend.league_ID = new_league._id;

              case 35:
                team_0_ID = dataToSend.team_0_ID, team_1_ID = dataToSend.team_1_ID, league_ID = dataToSend.league_ID;

                if (!(team_0_ID && team_1_ID && league_ID)) {
                  _context3.next = 42;
                  break;
                }

                _context3.next = 39;
                return Object(_utils_api_AddMatch__WEBPACK_IMPORTED_MODULE_7__["default"])({
                  teams: [team_0_ID, team_1_ID],
                  league: league_ID,
                  pandaID: pandaID,
                  startTime: startTime
                });

              case 39:
                _api_response5 = _context3.sent;
                if (_api_response5.data.match) this.addComplete(true);else this.addComplete(false);
                return _context3.abrupt("return");

              case 42:
                this.setState({
                  modal: {
                    open: true,
                    data: {
                      dataToSend: dataToSend,
                      pandaID: pandaID,
                      startTime: startTime,
                      teams: lodash__WEBPACK_IMPORTED_MODULE_10___default.a.cloneDeep(teams),
                      league: lodash__WEBPACK_IMPORTED_MODULE_10___default.a.cloneDeep(league)
                    }
                  }
                });

              case 43:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function handleAdd(_x2) {
        return _handleAdd.apply(this, arguments);
      };
    }()
  }, {
    key: "addComplete",
    value: function addComplete(success) {
      if (success) this.setState({
        button: {
          loading: false,
          icon: 'chevron down',
          disabled: true
        },
        modal: {
          open: false,
          data: {}
        }
      });else this.setState({
        button: {
          loading: false,
          icon: 'exclamation',
          disabled: true
        },
        modal: {
          open: false,
          data: {}
        }
      });
    }
  }, {
    key: "getImageFromURL",
    value: function () {
      var _getImageFromURL = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(url) {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(url);

              case 2:
                response = _context4.sent;

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function getImageFromURL(_x4) {
        return _getImageFromURL.apply(this, arguments);
      };
    }()
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var match = this.props.match;
      var date = Object(_utils_DateFormatter__WEBPACK_IMPORTED_MODULE_4__["default"])(match.startTime);
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].Row, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].Cell, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"], {
        as: "h5",
        className: "font-white"
      }, match.teams[0].displayName)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].Cell, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"], {
        as: "h5",
        className: "font-white"
      }, match.teams[1].displayName)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].Cell, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Image"], {
        src: match.league.logo,
        spaced: true,
        size: "mini",
        inline: true
      }), match.league.displayName), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].Cell, null, date.formatedDate, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "font-size-xsmall",
        style: {
          marginLeft: '0.5em'
        }
      }, "(".concat(date.aprox, ")"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].Cell, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        loading: this.state.button.loading,
        icon: this.state.button.icon,
        disabled: this.state.button.disabled,
        basic: true,
        inverted: true,
        as: "a",
        onClick: function onClick(e) {
          return _this3.handleAdd(match);
        }
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Modal"], {
        open: this.state.modal.open
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Modal"].Header, null, "Upload the following logos"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Modal"].Content, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
        columns: 3
      }, this.renderModalBody(this.state.modal.data))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Modal"].Actions, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        className: "orange-button-dark",
        onClick: function onClick(e) {
          return _this3.handleBack();
        }
      }, "Back"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        className: "dark-button",
        disabled: this.isButtonDisabled(this.state.modal.data.teams, this.state.modal.data.league, this.state.modal.data.dataToSend),
        onClick: function onClick(e) {
          return _this3.handleAddMatch(_this3.state.modal.data);
        }
      }, "Create new match"))));
    }
  }]);

  return ApiMatchesItem;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ApiMatchesItem);

/***/ }),

/***/ "./components/dashboard/new-match/ApiMatchesList.js":
/*!**********************************************************!*\
  !*** ./components/dashboard/new-match/ApiMatchesList.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _static_css_dashboard_dropzone_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../static/css/dashboard/dropzone.css */ "./static/css/dashboard/dropzone.css");
/* harmony import */ var _static_css_dashboard_dropzone_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_static_css_dashboard_dropzone_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_api_GetMatches__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/api/GetMatches */ "./utils/api/GetMatches.js");
/* harmony import */ var _ApiMatchesItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ApiMatchesItem */ "./components/dashboard/new-match/ApiMatchesItem.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }









var ApiMatchesList =
/*#__PURE__*/
function (_Component) {
  _inherits(ApiMatchesList, _Component);

  function ApiMatchesList(props) {
    var _this;

    _classCallCheck(this, ApiMatchesList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ApiMatchesList).call(this, props));
    _this.timeOptions = [{
      text: 'Next 24 hours',
      value: 24
    }, {
      text: 'Next 2 days',
      value: 48
    }, {
      text: 'Next 3 days',
      value: 72
    }, {
      text: 'Everything',
      value: 9999999
    }];
    _this.leagueOptions = [{
      text: 'All leagues',
      value: 0
    }];
    _this.defaultTimeSpan = 48;
    _this.defaultLeague = 0;
    _this.state = {
      allMatches: '',
      filters: {
        hours: _this.defaultTimeSpan,
        league: _this.defaultLeague
      }
    };
    _this.handleChangeTimeSpan = _this.handleChangeTimeSpan.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleChangeLeague = _this.handleChangeLeague.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(ApiMatchesList, [{
    key: "handleChangeTimeSpan",
    value: function handleChangeTimeSpan(e, _ref) {
      var value = _ref.value;
      this.setState({
        filters: _objectSpread({}, this.state.filters, {
          hours: value
        })
      });
    }
  }, {
    key: "handleChangeLeague",
    value: function handleChangeLeague(e, _ref2) {
      var value = _ref2.value;
      this.setState({
        filters: _objectSpread({}, this.state.filters, {
          league: value
        })
      });
    }
  }, {
    key: "hoursFilter",
    value: function hoursFilter() {
      var matches = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.allMatches;
      var now = new Date();
      var hours = this.state.filters.hours;
      var filteredMatches = matches.filter(function (curr) {
        return (curr.startTime.getTime() - now.getTime()) / 3600000 <= hours ? true : false;
      });
      return filteredMatches;
    }
  }, {
    key: "leaguesFilter",
    value: function leaguesFilter() {
      var matches = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.allMatches;
      var league = this.state.filters.league;
      if (league === 0) return matches;
      var filteredMatches = matches.filter(function (match) {
        return match.league.pandaID === league;
      });
      return filteredMatches;
    }
  }, {
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this2 = this;

        var api_call, api_response, matchesInDb, data, debugedData, matches;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/api/pandascore/upcoming_matches');

              case 2:
                api_call = _context.sent;
                _context.next = 5;
                return Object(_utils_api_GetMatches__WEBPACK_IMPORTED_MODULE_6__["default"])();

              case 5:
                api_response = _context.sent;
                matchesInDb = api_response.data; // Array of matches.

                data = api_call.data.data; // Filter to debug and remove already added matches

                debugedData = data.filter(function (match) {
                  if (!match.id) return false;
                  if (!match.begin_at) return false;
                  if (match.opponents.length !== 2) return false;
                  if (!match.league) return false;
                  if (matchesInDb.some(function (curr) {
                    return curr.pandaID == match.id;
                  })) return false;
                  return true;
                }); // Object refactoring

                matches = debugedData.map(function (match) {
                  if (!_this2.leagueOptions.some(function (curr) {
                    return curr.value === match.league.id;
                  })) _this2.leagueOptions.push({
                    text: match.league.name,
                    value: match.league.id
                  });
                  return {
                    pandaID: match.id,
                    startTime: new Date(match.begin_at),
                    teams: [{
                      pandaID: match.opponents[0].opponent.id,
                      displayName: match.opponents[0].opponent.name,
                      logo: match.opponents[0].opponent.image_url
                    }, {
                      pandaID: match.opponents[1].opponent.id,
                      displayName: match.opponents[1].opponent.name,
                      logo: match.opponents[1].opponent.image_url
                    }],
                    league: {
                      pandaID: match.league.id,
                      displayName: match.league.name,
                      logo: match.league.image_url
                    }
                  };
                });
                this.setState({
                  allMatches: matches
                }); // this.setState({ filters: { ...this.state.filters } });

              case 11:
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
    key: "renderItems",
    value: function renderItems() {
      // Apply filters provided by user
      var matches = this.hoursFilter();
      matches = this.leaguesFilter(matches);
      var markup = matches.map(function (match) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ApiMatchesItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
          key: match.pandaID,
          match: match
        });
      });
      return markup;
    }
  }, {
    key: "render",
    value: function render() {
      var filters = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Dropdown"], {
        className: "margin-right-1em",
        defaultValue: this.timeOptions[1].value,
        options: this.timeOptions,
        selection: true,
        onChange: this.handleChangeTimeSpan,
        scrolling: false
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Dropdown"], {
        className: "margin-right-1em",
        defaultValue: this.leagueOptions[0].value,
        options: this.leagueOptions,
        selection: true,
        onChange: this.handleChangeLeague,
        scrolling: false
      }));

      if (this.state.allMatches) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, filters, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"], {
          selectable: true,
          verticalAlign: "middle",
          textAlign: "center",
          inverted: true
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].Header, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].Row, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].HeaderCell, null, "Team 1"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].HeaderCell, null, "Team 2"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].HeaderCell, null, "League"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].HeaderCell, null, "Start date"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].HeaderCell, null))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].Body, null, this.renderItems(this.state.allMatches, this.state.filters))));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Dimmer"], {
          active: true,
          inverted: true,
          size: "large"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Loader"], null, "Loading data from API"));
      }
    }
  }]);

  return ApiMatchesList;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ApiMatchesList);

/***/ }),

/***/ "./components/dashboard/shared/DropZone.js":
/*!*************************************************!*\
  !*** ./components/dashboard/shared/DropZone.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dropzone */ "react-dropzone");
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dropzone__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_Shorten__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/Shorten */ "./utils/Shorten.js");





var DropZone = function DropZone(props) {
  var droppedImg = props.droppedImg,
      handleDelete = props.handleDelete,
      classNameModifier = props.classNameModifier,
      onDrop = props.onDrop;

  if (droppedImg) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Label"], {
      size: "medium",
      image: true,
      className: "font-white dark-orange-bg"
    }, Object(_utils_Shorten__WEBPACK_IMPORTED_MODULE_3__["default"])(droppedImg.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
      onClick: handleDelete,
      name: "delete"
    }));
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_dropzone__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "dropzone-div ".concat(classNameModifier),
    activeClassName: "dropzone-div-accepted",
    rejectClassName: "dropzone-div-rejected",
    accept: "image/png",
    onDrop: onDrop
  }, function (_ref) {
    var isDragAccept = _ref.isDragAccept,
        isDragReject = _ref.isDragReject;

    if (isDragAccept) {
      return 'The logo look OK. Now drop it.';
    }

    if (isDragReject) {
      return 'This is not a PNG file. ';
    }

    return 'Drop PNG logo here';
  });
};

/* harmony default export */ __webpack_exports__["default"] = (DropZone);

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

routes.add('/matches/:id', '/matches/match');
module.exports = routes;

/***/ }),

/***/ "./node_modules/react-rangeslider/lib/index.css":
/*!******************************************************!*\
  !*** ./node_modules/react-rangeslider/lib/index.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/admin/dashboard/new-match.js":
/*!********************************************!*\
  !*** ./pages/admin/dashboard/new-match.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_dashboard_Layout_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/dashboard/Layout/Layout */ "./components/dashboard/Layout/Layout.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_dashboard_new_match_ApiMatchesList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/dashboard/new-match/ApiMatchesList */ "./components/dashboard/new-match/ApiMatchesList.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var NewMatch =
/*#__PURE__*/
function (_Component) {
  _inherits(NewMatch, _Component);

  function NewMatch(props) {
    _classCallCheck(this, NewMatch);

    return _possibleConstructorReturn(this, _getPrototypeOf(NewMatch).call(this, props));
  }

  _createClass(NewMatch, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Header"], {
        as: "h1"
      }, "Add New Match"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Divider"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Header"], {
        as: "h2"
      }, "From API"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
        className: "grid-content"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Row, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_dashboard_new_match_ApiMatchesList__WEBPACK_IMPORTED_MODULE_3__["default"], null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Row, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Header"], {
        as: "h2"
      }, "Manually")))));
    }
  }]);

  return NewMatch;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_components_dashboard_Layout_Layout__WEBPACK_IMPORTED_MODULE_1__["default"])(NewMatch));

/***/ }),

/***/ "./static/css/dashboard/dropzone.css":
/*!*******************************************!*\
  !*** ./static/css/dashboard/dropzone.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./static/css/layout.css":
/*!*******************************!*\
  !*** ./static/css/layout.css ***!
  \*******************************/
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
      aprox: aprox
    };
  } else {
    difference = (now.getTime() - date.getTime()) / 60000;
    aprox = "".concat(minutesToWord(difference), " ago");
    return {
      formatedDate: formatedDate,
      aprox: aprox
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

/***/ "./utils/Shorten.js":
/*!**************************!*\
  !*** ./utils/Shorten.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Shorten = function Shorten(word) {
  var maxChars = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;
  if (word.length <= 20) return word;
  var firstHalf = word.slice(0, maxChars / 2);
  var secondHalf = word.slice(word.length - maxChars / 2);
  var result = firstHalf + '...' + secondHalf;
  return result;
};

/* harmony default export */ __webpack_exports__["default"] = (Shorten);

/***/ }),

/***/ "./utils/Sleep.js":
/*!************************!*\
  !*** ./utils/Sleep.js ***!
  \************************/
/*! exports provided: Sleep */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sleep", function() { return Sleep; });
function Sleep(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
}

/***/ }),

/***/ "./utils/api/AddLeague.js":
/*!********************************!*\
  !*** ./utils/api/AddLeague.js ***!
  \********************************/
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



var AddLeague =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(league) {
    var data, response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log(league);
            data = new FormData();
            data.append('logo', league.logo);
            data.append('displayName', league.displayName);
            data.append('pandaID', league.pandaID);
            _context.next = 7;
            return axios__WEBPACK_IMPORTED_MODULE_1___default()({
              method: 'post',
              url: '/backend/new_league',
              data: data,
              config: {
                headers: {
                  'Content-Type': 'multipart/form-data'
                }
              }
            });

          case 7:
            response = _context.sent;
            return _context.abrupt("return", response);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function AddLeague(_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (AddLeague);

/***/ }),

/***/ "./utils/api/AddMatch.js":
/*!*******************************!*\
  !*** ./utils/api/AddMatch.js ***!
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



var AddMatch =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(match) {
    var data, response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            data = {
              teams: match.teams,
              league: match.league,
              startTime: match.startTime,
              pandaID: match.pandaID
            };
            _context.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_1___default()({
              method: 'post',
              url: '/backend/new_match',
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

  return function AddMatch(_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (AddMatch);

/***/ }),

/***/ "./utils/api/AddTeam.js":
/*!******************************!*\
  !*** ./utils/api/AddTeam.js ***!
  \******************************/
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



var AddTeam =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(team) {
    var data, response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            data = new FormData();
            data.append('logo', team.logo);
            data.append('displayName', team.displayName);
            data.append('pandaID', team.pandaID);
            _context.next = 6;
            return axios__WEBPACK_IMPORTED_MODULE_1___default()({
              method: 'post',
              url: '/backend/new_team',
              data: data,
              config: {
                headers: {
                  'Content-Type': 'multipart/form-data'
                }
              }
            });

          case 6:
            response = _context.sent;
            return _context.abrupt("return", response);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function AddTeam(_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (AddTeam);

/***/ }),

/***/ "./utils/api/GetMatches.js":
/*!*********************************!*\
  !*** ./utils/api/GetMatches.js ***!
  \*********************************/
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



var GetMatches =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(match) {
    var response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_1___default()({
              method: 'get',
              url: '/backend/matches'
            });

          case 2:
            response = _context.sent;
            return _context.abrupt("return", response);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function GetMatches(_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (GetMatches);

/***/ }),

/***/ 7:
/*!**************************************************!*\
  !*** multi ./pages/admin/dashboard/new-match.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/admin/dashboard/new-match.js */"./pages/admin/dashboard/new-match.js");


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

/***/ "react-dropzone":
/*!*********************************!*\
  !*** external "react-dropzone" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dropzone");

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
//# sourceMappingURL=new-match.js.map