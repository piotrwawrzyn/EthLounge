webpackHotUpdate("static\\development\\pages\\matches\\match.js",{

/***/ "./components/match/Token.js":
/*!***********************************!*\
  !*** ./components/match/Token.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _utils_TokenFromWei__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/TokenFromWei */ "./utils/TokenFromWei.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/config */ "./config/config.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_config_config__WEBPACK_IMPORTED_MODULE_3__);




/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var token = props.token;
  if (token.balance !== undefined) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    className: "token balancebox-token"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "".concat(Object(_utils_TokenFromWei__WEBPACK_IMPORTED_MODULE_2__["default"])(token, true))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    className: "undragable",
    spaced: "left",
    src: "".concat(_config_config__WEBPACK_IMPORTED_MODULE_3__["backend"], "/img/").concat(token.logo)
  }));
  if (token) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    className: "token lastbets-token"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "".concat(Object(_utils_TokenFromWei__WEBPACK_IMPORTED_MODULE_2__["default"])(token, true))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    className: "undragable",
    spaced: "left",
    src: "".concat(_config_config__WEBPACK_IMPORTED_MODULE_3__["backend"], "/img/").concat(token.logo)
  }));
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    className: "token lastbets-token"
  });
});

/***/ })

})
//# sourceMappingURL=match.js.f984aea3ff5f19106b3d.hot-update.js.map