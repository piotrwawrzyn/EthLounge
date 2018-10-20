webpackHotUpdate("static\\development\\pages\\matches\\match.js",{

/***/ "./components/match/TokenBox.js":
/*!**************************************!*\
  !*** ./components/match/TokenBox.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _redux_match_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/match/actions */ "./redux/match/actions.js");
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/store */ "./redux/store.js");
/* harmony import */ var _BalanceBoxToken__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BalanceBoxToken */ "./components/match/BalanceBoxToken.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

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
      var tokensInBalance = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.filter(tokens, {
        position: 'balance-box'
      });

      var toRender = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, tokensInBalance.map(function (token) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_BalanceBoxToken__WEBPACK_IMPORTED_MODULE_5__["default"], {
          key: token.address,
          token: _objectSpread({}, token),
          handleDrop: function handleDrop(token, pos) {
            return _this.handleDrop(token, pos);
          }
        });
      }));
      return toRender;
    });

    return _this;
  }

  _createClass(TokenBox, [{
    key: "handleDrop",
    value: function handleDrop(token, pos) {
      _redux_store__WEBPACK_IMPORTED_MODULE_4__["default"].dispatch(Object(_redux_match_actions__WEBPACK_IMPORTED_MODULE_3__["changeTokenPosition"])(token, pos));
    }
  }, {
    key: "render",
    value: function render() {
      if (this.props.gambler.address) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "tokens-box"
      }, this.renderItems(this.props.tokens));
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Message"], {
        warning: true,
        header: "Sign in with Metamask",
        content: "Please sign in with Metamask in order to see your balances and place bets."
      });
    }
  }]);

  return TokenBox;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (TokenBox);

/***/ })

})
//# sourceMappingURL=match.js.3743fdf3e8f39dcc8938.hot-update.js.map