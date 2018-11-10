webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./redux/layout/loginReducer.js":
/*!**************************************!*\
  !*** ./redux/layout/loginReducer.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
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

/***/ })

})
//# sourceMappingURL=index.js.6cb6b05e4466eb20ea95.hot-update.js.map