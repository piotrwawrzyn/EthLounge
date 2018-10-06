webpackHotUpdate("static\\development\\pages\\matches\\match.js",{

/***/ "./components/match/ConfirmBetModal.js":
/*!*********************************************!*\
  !*** ./components/match/ConfirmBetModal.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../redux/store */ "./redux/store.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/actions */ "./redux/actions.js");
/* harmony import */ var _helpers_TokenFromWei__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/TokenFromWei */ "./helpers/TokenFromWei.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var ConfirmBetModal =
/*#__PURE__*/
function (_Component) {
  _inherits(ConfirmBetModal, _Component);

  function ConfirmBetModal() {
    _classCallCheck(this, ConfirmBetModal);

    return _possibleConstructorReturn(this, _getPrototypeOf(ConfirmBetModal).apply(this, arguments));
  }

  _createClass(ConfirmBetModal, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          open = _this$props.open,
          tokensToBet = _this$props.tokensToBet,
          pickedTeam = _this$props.pickedTeam,
          teams = _this$props.teams;
      var tokenList = tokensToBet.map(function (curr) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, Object(_helpers_TokenFromWei__WEBPACK_IMPORTED_MODULE_4__["default"])(curr, 'symbol'));
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
        size: "tiny",
        open: open
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Modal"].Header, null, "You are about to place a bet"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Modal"].Content, {
        image: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Image, {
        wrapped: true,
        size: "medium",
        src: "/static/img/teams/".concat(pickedTeam.slug, ".png")
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Modal"].Description, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, tokenList), "on ", pickedTeam.name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Modal"].Actions, null));
    }
  }]);

  return ConfirmBetModal;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ConfirmBetModal);

/***/ })

})
//# sourceMappingURL=match.js.397eeba21db29f5f270a.hot-update.js.map