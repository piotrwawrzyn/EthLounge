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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

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
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Menu__WEBPACK_IMPORTED_MODULE_10__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Container"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ChildPage, {
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
                      admin: user
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
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _next_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../next-routes */ "./next-routes.js");
/* harmony import */ var _next_routes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_next_routes__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_Sleep__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/Sleep */ "./utils/Sleep.js");


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







var DashboardMenu =
/*#__PURE__*/
function (_Component) {
  _inherits(DashboardMenu, _Component);

  function DashboardMenu(props) {
    var _this;

    _classCallCheck(this, DashboardMenu);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DashboardMenu).call(this, props));
    _this.handleLogout = _this.handleLogout.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleRoute = _this.handleRoute.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.state = {
      loading: false
    };
    return _this;
  }

  _createClass(DashboardMenu, [{
    key: "handleRoute",
    value: function handleRoute(path) {
      _next_routes__WEBPACK_IMPORTED_MODULE_4__["Router"].pushRoute(path);
    }
  }, {
    key: "handleLogout",
    value: function () {
      var _handleLogout = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.setState({
                  loading: true
                });
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('/admin/logout');

              case 3:
                _context.next = 5;
                return Object(_utils_Sleep__WEBPACK_IMPORTED_MODULE_5__["Sleep"])(500);

              case 5:
                _next_routes__WEBPACK_IMPORTED_MODULE_4__["Router"].pushRoute('/');

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function handleLogout() {
        return _handleLogout.apply(this, arguments);
      };
    }()
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"], {
        inverted: true,
        size: "large",
        className: "menu-admin"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Image"], {
        onClick: function onClick(e) {
          return _next_routes__WEBPACK_IMPORTED_MODULE_4__["Router"].pushRoute('/admin/dashboard');
        },
        src: "/static/img/logo.png"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
        onClick: function onClick(e) {
          return _this2.handleRoute('/admin/dashboard/teams');
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
        name: "users"
      }), "Teams"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
        onClick: function onClick(e) {
          return _this2.handleRoute('/admin/dashboard/tokens');
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
        name: "ethereum"
      }), "Tokens"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
        onClick: function onClick(e) {
          return _this2.handleRoute('/admin/dashboard/new-match');
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
        name: "plus"
      }), "New Match"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
        position: "right"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        loading: this.state.loading,
        className: "black-bg font-white",
        style: {
          marginRight: '1em'
        },
        onClick: function onClick(e) {
          return _this2.handleLogout();
        }
      }, "Log out")));
    }
  }]);

  return DashboardMenu;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (DashboardMenu);

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
    }, droppedImg.name, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
      onClick: handleDelete,
      name: "delete"
    }));
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_dropzone__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "dropdown-div ".concat(classNameModifier),
    activeClassName: "dropdown-div-accepted",
    rejectClassName: "dropdown-div-rejected",
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

/***/ "./components/dashboard/shared/FormMessage.js":
/*!****************************************************!*\
  !*** ./components/dashboard/shared/FormMessage.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);



var FormMessage = function FormMessage(props) {
  var message = props.message;

  if (message) {
    var success = message === 'success' ? true : false;
    var header = success ? 'Success' : 'There has been a problem';
    var content = success ? 'New record has been succesfuly added to database.' : 'No new record has been added to database. Probably something simmilar already exist.';
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Message"], {
      success: success,
      error: !success,
      content: content,
      header: header
    });
  }

  return '';
};

/* harmony default export */ __webpack_exports__["default"] = (FormMessage);

/***/ }),

/***/ "./components/dashboard/shared/SearchableTable.js":
/*!********************************************************!*\
  !*** ./components/dashboard/shared/SearchableTable.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var SearchableTable =
/*#__PURE__*/
function (_Component) {
  _inherits(SearchableTable, _Component);

  function SearchableTable(props) {
    var _this;

    _classCallCheck(this, SearchableTable);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SearchableTable).call(this, props));
    _this.lastSearchQuery = '';
    _this.limitStep = 20;
    _this.renderMore = false;
    _this.recordsRendered = 0;
    _this.state = {
      limit: _this.limitStep
    };
    return _this;
  }

  _createClass(SearchableTable, [{
    key: "renderTeams",
    value: function renderTeams(items, query, sortBy, ItemComponent) {
      query = query.toLowerCase();
      var firstFilter = items.filter(function (curr) {
        var name = curr.displayName.toLowerCase();
        return name.startsWith(query);
      });
      firstFilter = firstFilter.reverse();
      var secondFilter = items.filter(function (curr) {
        var name = curr[sortBy].toLowerCase();
        return !name.startsWith(query) && name.includes(query);
      });
      secondFilter = secondFilter.reverse();

      var filteredItems = _toConsumableArray(firstFilter).concat(_toConsumableArray(secondFilter));

      var reducedItems;

      if (filteredItems.length > this.state.limit) {
        reducedItems = filteredItems.slice(0, this.state.limit);
        this.renderMore = true;
      } else {
        reducedItems = filteredItems;
        this.recordsRendered = reducedItems.length;
        this.renderMore = false;
      }

      var ListItems = reducedItems.map(function (curr) {
        var _id = curr._id;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ItemComponent, {
          item: curr,
          key: _id
        });
      });
      return ListItems;
    }
  }, {
    key: "renderLoadMore",
    value: function renderLoadMore(renderMore) {
      var _this2 = this;

      if (renderMore) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].Footer, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].Row, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].HeaderCell, {
          colSpan: "4"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          fluid: true,
          className: "orange-button-light",
          onClick: function onClick(e) {
            return _this2.setState({
              limit: _this2.state.limit + _this2.limitStep
            });
          }
        }, "Load more"))));
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].Footer, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].Row, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].HeaderCell, {
        colSpan: this.props.headers.length + 1
      }, "All ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, this.recordsRendered), " records rendered for the given query.")));
    }
  }, {
    key: "renderHeaders",
    value: function renderHeaders(headers) {
      var headersMarkup = headers.map(function (curr) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].HeaderCell, {
          key: curr
        }, curr);
      });
      return headersMarkup;
    }
  }, {
    key: "componentWillUpdate",
    value: function componentWillUpdate() {
      var _this$props = this.props,
          searchQuery = _this$props.searchQuery,
          teams = _this$props.teams;
      if (this.lastSearchQuery !== searchQuery) this.setState({
        limit: this.limitStep
      });
      this.lastSearchQuery = this.props.searchQuery;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          searchQuery = _this$props2.searchQuery,
          items = _this$props2.items,
          headers = _this$props2.headers,
          sortBy = _this$props2.sortBy,
          ItemComponent = _this$props2.ItemComponent;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].Header, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].Row, null, this.renderHeaders(headers), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].HeaderCell, null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].Body, null, this.renderTeams(items, searchQuery, sortBy, ItemComponent)), this.renderLoadMore(this.renderMore));
    }
  }]);

  return SearchableTable;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SearchableTable);

/***/ }),

/***/ "./components/dashboard/tokens/TokenForm.js":
/*!**************************************************!*\
  !*** ./components/dashboard/tokens/TokenForm.js ***!
  \**************************************************/
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
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_DropZone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/DropZone */ "./components/dashboard/shared/DropZone.js");
/* harmony import */ var _next_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../next-routes */ "./next-routes.js");
/* harmony import */ var _next_routes__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_next_routes__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shared_FormMessage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/FormMessage */ "./components/dashboard/shared/FormMessage.js");
/* harmony import */ var _utils_api_AddToken__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../utils/api/AddToken */ "./utils/api/AddToken.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }










var TokenForm =
/*#__PURE__*/
function (_Component) {
  _inherits(TokenForm, _Component);

  function TokenForm(props) {
    var _this;

    _classCallCheck(this, TokenForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TokenForm).call(this, props));
    _this.onDrop = _this.onDrop.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleAddTeam = _this.handleAddTeam.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.emptyInputs = {
      displayName: '',
      address: '',
      symbol: '',
      decimals: '',
      logo: ''
    };
    _this.noErrors = {
      displayName: false,
      address: false,
      symbol: false,
      decimals: false,
      logo: false
    };
    _this.state = {
      formInputs: _this.emptyInputs,
      formError: _this.noErrors,
      formMessage: ''
    };
    return _this;
  }

  _createClass(TokenForm, [{
    key: "onDrop",
    value: function onDrop(accepted, rejected) {
      this.clearFormErrors();

      var _accepted = _slicedToArray(accepted, 1),
          file = _accepted[0];

      this.setState({
        formInputs: _objectSpread({}, this.state.formInputs, {
          logo: file
        })
      });
    }
  }, {
    key: "handleAddTeam",
    value: function () {
      var _handleAddTeam = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this$state$formInput, displayName, address, symbol, decimals, logo, displayNameNotValid, addressNotValid, symbolNotValid, decimalsNotValid, logoNotValid, response;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$state$formInput = this.state.formInputs, displayName = _this$state$formInput.displayName, address = _this$state$formInput.address, symbol = _this$state$formInput.symbol, decimals = _this$state$formInput.decimals, logo = _this$state$formInput.logo;
                console.log(!decimals || isNaN(decimals));
                displayNameNotValid = !displayName;
                addressNotValid = !address || address.length !== 42 || !address.startsWith('0x');
                symbolNotValid = !symbol;
                decimalsNotValid = !decimals || isNaN(decimals);
                logoNotValid = !logo;
                this.setState({
                  formError: {
                    displayName: displayNameNotValid,
                    address: addressNotValid,
                    symbol: symbolNotValid,
                    decimals: decimalsNotValid,
                    logo: logoNotValid
                  }
                });

                if (!(displayNameNotValid || addressNotValid || symbolNotValid || logoNotValid || decimalsNotValid)) {
                  _context.next = 10;
                  break;
                }

                return _context.abrupt("return");

              case 10:
                _context.next = 12;
                return Object(_utils_api_AddToken__WEBPACK_IMPORTED_MODULE_8__["default"])({
                  displayName: displayName,
                  address: address,
                  symbol: symbol,
                  decimals: decimals,
                  logo: logo
                });

              case 12:
                response = _context.sent;

                if (response.data.success) {
                  _next_routes__WEBPACK_IMPORTED_MODULE_6__["Router"].pushRoute('/admin/dashboard/tokens');
                  this.setState({
                    formMessage: 'success',
                    formInputs: this.emptyInputs,
                    formErrors: this.noErrors
                  });
                } else this.setState({
                  formMessage: 'error'
                });

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function handleAddTeam() {
        return _handleAddTeam.apply(this, arguments);
      };
    }()
  }, {
    key: "clearFormErrors",
    value: function clearFormErrors() {
      this.setState({
        formError: {
          displayName: false,
          address: false,
          symbol: false,
          logo: false
        },
        formMessage: ''
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"], {
        error: true,
        success: true
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Field, {
        required: true,
        error: this.state.formError.displayName
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Display name"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        onChange: function onChange(e) {
          _this2.clearFormErrors();

          _this2.setState({
            formInputs: _objectSpread({}, _this2.state.formInputs, {
              displayName: e.target.value
            })
          });
        },
        value: this.state.formInputs.displayName
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Field, {
        required: true,
        error: this.state.formError.symbol
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Symbol"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        onChange: function onChange(e) {
          _this2.clearFormErrors();

          _this2.setState({
            formInputs: _objectSpread({}, _this2.state.formInputs, {
              symbol: e.target.value
            })
          });
        },
        value: this.state.formInputs.symbol
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Field, {
        required: true,
        error: this.state.formError.address
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Address"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        onChange: function onChange(e) {
          _this2.clearFormErrors();

          _this2.setState({
            formInputs: _objectSpread({}, _this2.state.formInputs, {
              address: e.target.value
            })
          });
        },
        value: this.state.formInputs.address
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Field, {
        required: true,
        error: this.state.formError.decimals
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Decimals"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        onChange: function onChange(e) {
          _this2.clearFormErrors();

          _this2.setState({
            formInputs: _objectSpread({}, _this2.state.formInputs, {
              decimals: e.target.value
            })
          });
        },
        value: this.state.formInputs.decimals
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Field, {
        required: true,
        error: this.state.formError.logo
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "PNG Logo"), this.renderDropBox(this.state.formInputs.logo, this.state.formError.logo), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Label"], {
        className: "label-warning"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
        name: "warning circle"
      }), "Please upload only square logos. Preferably 200x200 px.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        icon: true,
        labelPosition: "right",
        onClick: function onClick(e) {
          return _this2.handleAddTeam();
        },
        className: "dark-button"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
        name: "plus"
      }), "Add"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_shared_FormMessage__WEBPACK_IMPORTED_MODULE_7__["default"], {
        message: this.state.formMessage
      }));
    }
  }, {
    key: "renderDropBox",
    value: function renderDropBox(logo, error) {
      var _this3 = this;

      var classNameModifier = error ? 'dropdown-div-error' : '';
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_shared_DropZone__WEBPACK_IMPORTED_MODULE_5__["default"], {
        handleDelete: function handleDelete(e) {
          _this3.setState({
            formInputs: _objectSpread({}, _this3.state.formInputs, {
              logo: false
            })
          });
        },
        droppedImg: logo,
        classNameModifier: classNameModifier,
        onDrop: function onDrop(accepted, rejected) {
          return _this3.onDrop(accepted, rejected);
        }
      });
    }
  }]);

  return TokenForm;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (TokenForm);

/***/ }),

/***/ "./components/dashboard/tokens/TokenListItem.js":
/*!******************************************************!*\
  !*** ./components/dashboard/tokens/TokenListItem.js ***!
  \******************************************************/
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
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../config/config */ "./config/config.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_config_config__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dropzone */ "react-dropzone");
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dropzone__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _next_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../next-routes */ "./next-routes.js");
/* harmony import */ var _next_routes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_next_routes__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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









var TokenListItem =
/*#__PURE__*/
function (_Component) {
  _inherits(TokenListItem, _Component);

  function TokenListItem(props) {
    var _this;

    _classCallCheck(this, TokenListItem);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TokenListItem).call(this, props));
    _this.lastMode;
    _this.id = props.item._id;
    _this.displayName = props.item.displayName;
    _this.symbol = props.item.symbol;
    _this.address = props.item.address;
    _this.decimals = props.item.decimals;
    _this.tokenNameElement;
    _this.tokenSymbolElement;
    _this.tokenDecimalsElement;
    _this.handleEdit = _this.handleEdit.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleDelete = _this.handleDelete.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleUpdate = _this.handleUpdate.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.controlInput = _this.controlInput.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.state = {
      editMode: false,
      newLogo: '',
      newName: props.name,
      logoURL: "".concat(_config_config__WEBPACK_IMPORTED_MODULE_3__["backend"], "/img/tokens/").concat(_this.symbol, ".png")
    };
    return _this;
  }

  _createClass(TokenListItem, [{
    key: "handleEdit",
    value: function handleEdit(event) {
      this.setState({
        editMode: true,
        newDisplayName: this.displayName,
        newSymbol: this.symbol,
        newAddress: this.address,
        newDecimals: this.decimals,
        newLogo: ''
      });
    }
  }, {
    key: "handleDelete",
    value: function () {
      var _handleDelete = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_6___default()({
                  method: 'post',
                  url: '/backend/delete_token',
                  data: {
                    id: this.id
                  }
                });

              case 2:
                _next_routes__WEBPACK_IMPORTED_MODULE_5__["Router"].replaceRoute('/admin/dashboard/tokens');

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function handleDelete() {
        return _handleDelete.apply(this, arguments);
      };
    }()
  }, {
    key: "hasSomethingChanged",
    value: function hasSomethingChanged() {
      var _this$state = this.state,
          newDisplayName = _this$state.newDisplayName,
          newSymbol = _this$state.newSymbol,
          newDecimals = _this$state.newDecimals;
      if (this.displayName !== newDisplayName) return true;
      if (this.symbol !== newSymbol) return true;
      if (this.decimals !== newDecimals) return true;
      if (this.state.newLogo) return true;
      return false;
    }
  }, {
    key: "handleUpdate",
    value: function () {
      var _handleUpdate = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var data, logo;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!this.hasSomethingChanged()) {
                  _context2.next = 10;
                  break;
                }

                data = new FormData();
                data.append('id', this.id);
                data.append('displayName', this.state.newDisplayName);
                data.append('symbol', this.state.newSymbol);
                data.append('address', this.state.newAddress);
                data.append('decimals', this.state.newDecimals);
                data.append('logo', this.state.newLogo);
                _context2.next = 10;
                return axios__WEBPACK_IMPORTED_MODULE_6___default()({
                  method: 'post',
                  url: '/backend/update_token',
                  data: data,
                  config: {
                    headers: {
                      'Content-Type': 'multipart/form-data'
                    }
                  }
                });

              case 10:
                logo = this.state.newLogo.preview || this.state.logoURL;
                this.setState({
                  editMode: false,
                  logoURL: logo
                });
                _next_routes__WEBPACK_IMPORTED_MODULE_5__["Router"].replaceRoute('/admin/dashboard/tokens');

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function handleUpdate() {
        return _handleUpdate.apply(this, arguments);
      };
    }()
  }, {
    key: "undo",
    value: function undo() {
      this.setState({
        editMode: false
      });
      this.tokenNameElement.textContent = this.displayName;
      this.tokenSymbolElement.textContent = this.symbol;
      this.tokenDecimalsElement = this.decimals;
    }
  }, {
    key: "onDrop",
    value: function onDrop(accepted, rejected) {
      var _accepted = _slicedToArray(accepted, 1),
          file = _accepted[0];

      this.setState({
        newLogo: file
      });
    }
  }, {
    key: "controlInput",
    value: function controlInput(event) {
      switch (event.target) {
        case this.tokenNameElement:
          {
            this.setState({
              newDisplayName: event.target.textContent
            });
            return;
          }

        case this.tokenSymbolElement:
          {
            this.setState({
              newSymbol: event.target.textContent
            });
            return;
          }

        case this.tokenAddressElement:
          {
            this.setState({
              newAddress: event.target.textContent
            });
            return;
          }

        case this.tokenDecimalsElement:
          {
            this.setState({
              newDecimals: event.target.textContent
            });
            return;
          }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].Row, {
        key: this.id,
        active: this.state.editMode
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].Cell, null, this.id), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].Cell, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        onInput: function onInput(e) {
          return _this2.controlInput(e);
        },
        spellCheck: "false",
        ref: function ref(div) {
          return _this2.tokenNameElement = div;
        },
        suppressContentEditableWarning: true,
        contentEditable: "".concat(this.state.editMode)
      }, "".concat(this.displayName))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].Cell, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        onInput: function onInput(e) {
          return _this2.controlInput(e);
        },
        spellCheck: "false",
        ref: function ref(div) {
          return _this2.tokenSymbolElement = div;
        },
        suppressContentEditableWarning: true,
        contentEditable: "".concat(this.state.editMode)
      }, "".concat(this.symbol))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].Cell, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "".concat(this.address))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].Cell, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        onInput: function onInput(e) {
          return _this2.controlInput(e);
        },
        spellCheck: "false",
        ref: function ref(div) {
          return _this2.tokenDecimalsElement = div;
        },
        suppressContentEditableWarning: true,
        contentEditable: "".concat(this.state.editMode)
      }, "".concat(this.decimals))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].Cell, null, this.renderImage(this.state.newLogo)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].Cell, null, this.renderIcons(this.state.editMode)));
    }
  }, {
    key: "renderImage",
    value: function renderImage(newLogo) {
      var _this3 = this;

      if (this.state.editMode) {
        if (this.state.newLogo) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_dropzone__WEBPACK_IMPORTED_MODULE_4___default.a, {
            style: {},
            accept: "image/png",
            onDrop: function onDrop(accepted, rejected) {
              return _this3.onDrop(accepted, rejected);
            }
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Image"], {
            src: newLogo.preview,
            size: "mini",
            verticalAlign: "middle"
          }));
        } else {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_dropzone__WEBPACK_IMPORTED_MODULE_4___default.a, {
            style: {},
            accept: "image/png",
            onDrop: function onDrop(accepted, rejected) {
              return _this3.onDrop(accepted, rejected);
            }
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Image"], {
            src: this.state.logoURL,
            size: "mini",
            verticalAlign: "middle"
          }));
        }
      }

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Image"], {
        src: this.state.logoURL,
        size: "mini",
        verticalAlign: "middle"
      });
    }
  }, {
    key: "renderIcons",
    value: function renderIcons(editMode) {
      var _this4 = this;

      if (editMode) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Popup"], {
          on: "click",
          trigger: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
            className: "table-icon",
            circular: true,
            name: "check"
          })
        }, "Are you sure?", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          onClick: function onClick(e) {
            return _this4.handleUpdate();
          },
          color: "green",
          size: "mini",
          fluid: true,
          compact: true
        }, "UPDATE")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
          className: "table-icon",
          circular: true,
          name: "chevron right",
          onClick: function onClick(e) {
            return _this4.undo();
          }
        }));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
          className: "table-icon",
          circular: true,
          name: "edit",
          onClick: function onClick(e) {
            return _this4.handleEdit(e);
          }
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Popup"], {
          on: "click",
          trigger: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
            className: "table-icon",
            circular: true,
            name: "delete"
          })
        }, "Are you sure?", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          color: "red",
          size: "mini",
          onClick: function onClick(e) {
            return _this4.handleDelete();
          },
          fluid: true,
          compact: true
        }, "DELETE")));
      }
    }
  }]);

  return TokenListItem;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (TokenListItem);

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

/***/ "./pages/admin/dashboard/tokens.js":
/*!*****************************************!*\
  !*** ./pages/admin/dashboard/tokens.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_dashboard_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/dashboard/Layout/Layout */ "./components/dashboard/Layout/Layout.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _static_css_dashboard_SearchableTable_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../static/css/dashboard/SearchableTable.css */ "./static/css/dashboard/SearchableTable.css");
/* harmony import */ var _static_css_dashboard_SearchableTable_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_static_css_dashboard_SearchableTable_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_CookieCall__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/CookieCall */ "./utils/CookieCall.js");
/* harmony import */ var _components_dashboard_tokens_TokenForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/dashboard/tokens/TokenForm */ "./components/dashboard/tokens/TokenForm.js");
/* harmony import */ var _components_dashboard_tokens_TokenListItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/dashboard/tokens/TokenListItem */ "./components/dashboard/tokens/TokenListItem.js");
/* harmony import */ var _components_dashboard_shared_SearchableTable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/dashboard/shared/SearchableTable */ "./components/dashboard/shared/SearchableTable.js");


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










var Tokens =
/*#__PURE__*/
function (_Component) {
  _inherits(Tokens, _Component);

  function Tokens(props) {
    var _this;

    _classCallCheck(this, Tokens);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Tokens).call(this, props));
    _this.state = {
      searchQuery: ''
    };
    return _this;
  }

  _createClass(Tokens, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "Manage Supported Tokens"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Divider"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
        className: "grid-content"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Row, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["GridColumn"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Input"], {
        fluid: true,
        size: "large",
        icon: "search",
        placeholder: "Search for a token...",
        onChange: function onChange(e) {
          return _this2.setState({
            searchQuery: e.target.value
          });
        }
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_dashboard_shared_SearchableTable__WEBPACK_IMPORTED_MODULE_8__["default"], {
        searchQuery: this.state.searchQuery,
        items: this.props.initial.tokens,
        headers: ['ID', 'Name', 'Symbol', 'Address (Read Only)', 'Decimals', 'Logo'],
        ItemComponent: _components_dashboard_tokens_TokenListItem__WEBPACK_IMPORTED_MODULE_7__["default"],
        sortBy: 'displayName'
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Row, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["GridColumn"], {
        width: "6"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"], {
        as: "h2"
      }, "Add New Token"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_dashboard_tokens_TokenForm__WEBPACK_IMPORTED_MODULE_6__["default"], null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["GridColumn"], {
        width: "10"
      }))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(props) {
        var req, response, tokens;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                req = props.req;
                _context.next = 3;
                return Object(_utils_CookieCall__WEBPACK_IMPORTED_MODULE_5__["default"])(req, '/api/tokens');

              case 3:
                response = _context.sent;
                tokens = response.data;
                return _context.abrupt("return", {
                  tokens: tokens
                });

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return Tokens;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_components_dashboard_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__["default"])(Tokens));

/***/ }),

/***/ "./static/css/dashboard/SearchableTable.css":
/*!**************************************************!*\
  !*** ./static/css/dashboard/SearchableTable.css ***!
  \**************************************************/
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

/***/ "./utils/api/AddToken.js":
/*!*******************************!*\
  !*** ./utils/api/AddToken.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/config */ "./config/config.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_config_config__WEBPACK_IMPORTED_MODULE_2__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var AddToken =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(token) {
    var data, response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            data = new FormData();
            data.append('displayName', token.displayName);
            data.append('symbol', token.symbol);
            data.append('address', token.address);
            data.append('decimals', token.decimals);
            data.append('logo', token.logo);
            _context.next = 8;
            return axios__WEBPACK_IMPORTED_MODULE_1___default()({
              method: 'post',
              url: '/backend/new_token',
              data: data,
              config: {
                headers: {
                  'Content-Type': 'multipart/form-data'
                }
              }
            });

          case 8:
            response = _context.sent;
            return _context.abrupt("return", response);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function AddToken(_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (AddToken);

/***/ }),

/***/ 5:
/*!***********************************************!*\
  !*** multi ./pages/admin/dashboard/tokens.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/admin/dashboard/tokens.js */"./pages/admin/dashboard/tokens.js");


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
//# sourceMappingURL=tokens.js.map