webpackHotUpdate("static\\development\\pages\\matches\\match.js",{

/***/ "./components/match/BettingBox.js":
/*!****************************************!*\
  !*** ./components/match/BettingBox.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _BettingBoxItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BettingBoxItem */ "./components/match/BettingBoxItem.js");
/* harmony import */ var _RangeSlider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../RangeSlider */ "./components/RangeSlider.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var BettingBox =
/*#__PURE__*/
function (_Component) {
  _inherits(BettingBox, _Component);

  function BettingBox(props) {
    _classCallCheck(this, BettingBox);

    return _possibleConstructorReturn(this, _getPrototypeOf(BettingBox).call(this, props));
  }

  _createClass(BettingBox, [{
    key: "renderTokens",
    value: function renderTokens(tokens) {
      var bettingBoxes = [];
      var numberOfBoxes = 4;

      for (var i = 0; i < numberOfBoxes; i++) {
        var pos = "betting-box-".concat(i);
        var tokenProp = void 0;
        var rangeSlider = '';
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = tokens[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _token = _step.value;

            if (_token.position === pos) {
              tokenProp = _token;
              rangeSlider = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RangeSlider__WEBPACK_IMPORTED_MODULE_3__["default"], {
                prices: this.props.prices,
                token: _token,
                toBet: tokens,
                handleRange: this.props.handleRange
              });
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        bettingBoxes.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
          key: pos
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
          width: 7
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BettingBoxItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
          pos: pos,
          droppedItem: token,
          handleDelete: this.props.handleDelete
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
          width: 9,
          verticalAlign: "middle"
        }, rangeSlider)));
      }

      return bettingBoxes;
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "betting-box"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
        columns: "equal"
      }, this.renderTokens(this.props.tokens)));
    }
  }]);

  return BettingBox;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (BettingBox);

/***/ })

})
//# sourceMappingURL=match.js.af46be5e146155573de9.hot-update.js.map