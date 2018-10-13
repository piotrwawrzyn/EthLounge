webpackHotUpdate("static\\development\\pages\\matches\\match.js",{

/***/ "./helpers/CryptoPrices.js":
/*!*********************************!*\
  !*** ./helpers/CryptoPrices.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SupportedTokens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SupportedTokens */ "./helpers/SupportedTokens.js");
/* harmony import */ var _GetTokenPrice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GetTokenPrice */ "./helpers/GetTokenPrice.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var data =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Object(_GetTokenPrice__WEBPACK_IMPORTED_MODULE_2__["default"])(_SupportedTokens__WEBPACK_IMPORTED_MODULE_1__["SupportedTokens"].map(function (curr) {
              return _SupportedTokens__WEBPACK_IMPORTED_MODULE_1__["DictionarrySymbol"].get(curr);
            }));

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

  return function data() {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (data);

/***/ })

})
//# sourceMappingURL=match.js.f6db9be201ceeed308c9.hot-update.js.map