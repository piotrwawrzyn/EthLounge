webpackHotUpdate("static\\development\\pages\\matches\\match.js",{

/***/ "./components/match/BalanceBoxToken.js":
/*!*********************************************!*\
  !*** ./components/match/BalanceBoxToken.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Token */ "./components/Token.js");
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dnd */ "./node_modules/react-dnd/lib/index.js");
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dnd__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var itemSource = {
  beginDrag: function beginDrag(props) {
    return props.token;
  },
  endDrag: function endDrag(props, monitor) {
    if (!monitor.didDrop()) return;
    return props.handleDrop(props.token, monitor.getDropResult().pos);
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  };
}

var BalanceBoxToken =
/*#__PURE__*/
function (_Component) {
  _inherits(BalanceBoxToken, _Component);

  function BalanceBoxToken(props) {
    _classCallCheck(this, BalanceBoxToken);

    return _possibleConstructorReturn(this, _getPrototypeOf(BalanceBoxToken).call(this, props));
  }

  _createClass(BalanceBoxToken, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          isDragging = _this$props.isDragging,
          connectDragSource = _this$props.connectDragSource;
      var classNameModifier = '';

      if (isDragging) {
        classNameModifier = ' balance-box-token-dragging';
      }

      return connectDragSource(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: 'balance-box-token' + classNameModifier
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Token__WEBPACK_IMPORTED_MODULE_1__["default"], {
        token: this.props.token
      })));
    }
  }]);

  return BalanceBoxToken;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_dnd__WEBPACK_IMPORTED_MODULE_2__["DragSource"])('token', itemSource, collect)(BalanceBoxToken));

/***/ }),

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
/* harmony import */ var _BettingBoxToken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BettingBoxToken */ "./components/match/BettingBoxToken.js");
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
            var token = _step.value;

            if (token.position === pos) {
              tokenProp = token;
              rangeSlider = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RangeSlider__WEBPACK_IMPORTED_MODULE_3__["default"], {
                prices: this.props.prices,
                token: token,
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
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BettingBoxToken__WEBPACK_IMPORTED_MODULE_2__["default"], {
          pos: pos,
          droppedItem: tokenProp,
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

/***/ }),

/***/ "./components/match/BettingBoxItem.js":
false,

/***/ "./components/match/BettingBoxToken.js":
/*!*********************************************!*\
  !*** ./components/match/BettingBoxToken.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dnd */ "./node_modules/react-dnd/lib/index.js");
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dnd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Token__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Token */ "./components/Token.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var itemSource = {
  drop: function drop(props) {
    return {
      pos: props.pos
    };
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    token: monitor.getItem(),
    canDrop: monitor.canDrop()
  };
}

var BettingBoxToken =
/*#__PURE__*/
function (_Component) {
  _inherits(BettingBoxToken, _Component);

  function BettingBoxToken(props) {
    var _this;

    _classCallCheck(this, BettingBoxToken);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BettingBoxToken).call(this, props));
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(BettingBoxToken, [{
    key: "handleClick",
    value: function handleClick(e) {
      this.props.handleDelete(this.props.droppedToken);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          canDrop = _this$props.canDrop,
          connectDropTarget = _this$props.connectDropTarget,
          isOver = _this$props.isOver,
          token = _this$props.token,
          pos = _this$props.pos;
      var classNameModifier = '';

      if (isOver && canDrop) {
        classNameModifier += ' betting-box-token-hovered';
      }

      if (!isOver && canDrop) {
        classNameModifier += ' betting-box-token-candrop';
      }

      if (this.props.droppedToken) {
        classNameModifier = ' betting-box-token-dropped';
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], {
          onClick: this.handleClick,
          textAlign: "center",
          className: 'betting-box-token' + classNameModifier
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Token__WEBPACK_IMPORTED_MODULE_3__["default"], {
          token: this.props.droppedToken,
          className: "token-dropped"
        })));
      }

      return connectDropTarget(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], {
        size: "big",
        textAlign: "center",
        className: 'betting-box-token' + classNameModifier
      })));
    }
  }]);

  return BettingBoxToken;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_dnd__WEBPACK_IMPORTED_MODULE_2__["DropTarget"])('token', itemSource, collect)(BettingBoxToken));

/***/ }),

/***/ "./components/match/TokenBox.js":
/*!**************************************!*\
  !*** ./components/match/TokenBox.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BalanceBoxToken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BalanceBoxToken */ "./components/match/BalanceBoxToken.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
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
      var toRender = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, tokens.map(function (token) {
        if (token.position == 'token-box') {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BalanceBoxToken__WEBPACK_IMPORTED_MODULE_1__["default"], {
            key: token.address,
            token: _objectSpread({}, token),
            handleDrop: function handleDrop(token, pos) {
              return _this.handleDrop(token, pos);
            }
          });
        } else {
          return '';
        }

        ;
      }));
      return toRender;
    });

    _this.handleDrop = _this.handleDrop.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(TokenBox, [{
    key: "handleDrop",
    value: function handleDrop(token, pos) {
      this.props.handleDrop(token, pos);
    }
  }, {
    key: "render",
    value: function render() {
      if (this.props.signedIn) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "tokens-box"
      }, this.renderItems(this.props.tokens));
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Message"], {
        warning: true,
        header: "Sign in with Metamask",
        content: "Please sign in with Metamask in order to see your balances and place bets."
      });
    }
  }]);

  return TokenBox;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (TokenBox);

/***/ }),

/***/ "./components/match/TokenBoxItem.js":
false

})
//# sourceMappingURL=match.js.8806c45f15af5fa18045.hot-update.js.map