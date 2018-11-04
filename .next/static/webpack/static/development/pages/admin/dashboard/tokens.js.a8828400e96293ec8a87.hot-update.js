webpackHotUpdate("static\\development\\pages\\admin\\dashboard\\tokens.js",{

/***/ "./components/dashboard/Layout/Menu.js":
/*!*********************************************!*\
  !*** ./components/dashboard/Layout/Menu.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
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

/***/ })

})
//# sourceMappingURL=tokens.js.a8828400e96293ec8a87.hot-update.js.map