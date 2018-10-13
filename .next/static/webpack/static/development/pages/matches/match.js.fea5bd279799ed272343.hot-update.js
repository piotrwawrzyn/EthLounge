webpackHotUpdate("static\\development\\pages\\matches\\match.js",{

/***/ "./components/RangeSlider.js":
/*!***********************************!*\
  !*** ./components/RangeSlider.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_rangeslider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-rangeslider */ "./node_modules/react-rangeslider/lib/index.js");
/* harmony import */ var react_rangeslider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_rangeslider__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! big.js */ "./node_modules/big.js/big.js");
/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(big_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_EstimateBetValue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/EstimateBetValue */ "./helpers/EstimateBetValue.js");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/actions */ "./redux/actions.js");
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/store */ "./redux/store.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var RangeSlider =
/*#__PURE__*/
function (_Component) {
  _inherits(RangeSlider, _Component);

  function RangeSlider(props) {
    var _this;

    _classCallCheck(this, RangeSlider);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RangeSlider).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "range_max", 5000);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleRange", function (val) {
      var token = _this.props.token;

      _this.setState({
        value: val
      });

      var change = val / _this.range_max;
      var newAmount = "".concat(big_js__WEBPACK_IMPORTED_MODULE_2___default()(token.initialAmount).mul(change).toFixed(0));
      newAmount = newAmount < 1 ? 1 : newAmount;
      token.amount = newAmount;
      _redux_store__WEBPACK_IMPORTED_MODULE_5__["default"].dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_4__["changeTokenAmount"])(token));
    });

    _this.handleRange = _this.handleRange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.state = {
      value: range_max
    };
    return _this;
  }

  _createClass(RangeSlider, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_rangeslider__WEBPACK_IMPORTED_MODULE_1___default.a, {
        min: 1,
        max: this.range_max,
        step: 10,
        tooltip: false,
        value: this.state.value,
        onChange: function onChange(val) {
          return _this2.handleRange(val);
        },
        onChangeComplete: function onChangeComplete(event) {
          Object(_helpers_EstimateBetValue__WEBPACK_IMPORTED_MODULE_3__["default"])(_this2.props.toBet, _this2.props.prices);
        }
      });
    }
  }]);

  return RangeSlider;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (RangeSlider);

/***/ })

})
//# sourceMappingURL=match.js.fea5bd279799ed272343.hot-update.js.map