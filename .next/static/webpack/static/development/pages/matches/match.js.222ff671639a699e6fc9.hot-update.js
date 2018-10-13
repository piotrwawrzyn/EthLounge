webpackHotUpdate("static\\development\\pages\\matches\\match.js",{

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
    key: props.token.address,
    className: "token-label"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    avatar: true,
    spaced: "right",
    src: "/static/img/tokens/".concat(_helpers_SupportedTokens__WEBPACK_IMPORTED_MODULE_1__["DictionarrySymbol"].get(props.token.address), ".png")
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    contenteditable: props.editable
  }, Object(_helpers_TokenFromWei__WEBPACK_IMPORTED_MODULE_3__["default"])(props.token, 'symbol', true)));
});

/***/ })

})
//# sourceMappingURL=match.js.222ff671639a699e6fc9.hot-update.js.map