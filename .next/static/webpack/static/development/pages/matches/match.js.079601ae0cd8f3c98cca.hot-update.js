webpackHotUpdate("static\\development\\pages\\matches\\match.js",{

/***/ "./components/match/ConfirmBetModal.js":
/*!*********************************************!*\
  !*** ./components/match/ConfirmBetModal.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/store */ "./redux/store.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/actions */ "./redux/actions.js");
/* harmony import */ var _helpers_TokenFromWei__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/TokenFromWei */ "./helpers/TokenFromWei.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }







var ConfirmBetModal =
/*#__PURE__*/
function (_Component) {
  _inherits(ConfirmBetModal, _Component);

  function ConfirmBetModal(props) {
    var _this;

    _classCallCheck(this, ConfirmBetModal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ConfirmBetModal).call(this, props));
    _this.handleConfirm = _this.handleConfirm.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.state = {
      isLoading: false,
      isFinalModalOpen: false
    };
    return _this;
  }

  _createClass(ConfirmBetModal, [{
    key: "handleConfirm",
    value: function () {
      var _handleConfirm = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(tokensToBet, pickedTeam) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function handleConfirm(_x, _x2) {
        return _handleConfirm.apply(this, arguments);
      };
    }()
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          open = _this$props.open,
          tokensToBet = _this$props.tokensToBet,
          pickedTeam = _this$props.pickedTeam,
          teams = _this$props.teams;
      var tokenList = tokensToBet.map(function (curr) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["List"].Item, {
          as: "p"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
          name: "right triangle"
        }), Object(_helpers_TokenFromWei__WEBPACK_IMPORTED_MODULE_5__["default"])(curr, 'symbol'));
      });
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FinalModal, null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Modal"], {
        size: "tiny",
        open: open
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Modal"].Header, null, "You are about to place a bet"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Modal"].Content, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Modal"].Description, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
        width: 10
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"], null, "Your bet:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["List"], {
        className: "confirm-bet-modal-ul font-dark-orange",
        as: "ul"
      }, tokenList), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"], null, "Picked Team: ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "font-dark-orange"
      }, pickedTeam.name)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"], null, "Odds: ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "font-dark-orange"
      }, pickedTeam.odds))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
        verticalAlign: "middle",
        width: 6
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Image"], {
        className: "confirm-bet-modal-img",
        floated: "right",
        size: "small",
        src: "/static/img/teams/".concat(pickedTeam.slug, ".png")
      }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Modal"].Actions, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        color: "black",
        onClick: function onClick(e) {
          _redux_store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_4__["toggleModal"])('confirmBetModal'));
        }
      }, "Cancel"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        loading: this.state.isLoading,
        className: "dark-orange-bg font-white",
        onClick: function onClick(e) {
          return _this2.handleConfirm(tokensToBet, pickedTeam);
        }
      }, "Confirm"))));
    }
  }]);

  return ConfirmBetModal;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

var FinalModal =
/*#__PURE__*/
function (_Component2) {
  _inherits(FinalModal, _Component2);

  function FinalModal() {
    _classCallCheck(this, FinalModal);

    return _possibleConstructorReturn(this, _getPrototypeOf(FinalModal).apply(this, arguments));
  }

  _createClass(FinalModal, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Modal"], {
        open: open,
        size: "tiny"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Modal"].Header, null, "Modal #2"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Modal"].Content, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "That's everything!")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Modal"].Actions, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        icon: "check",
        content: "All Done",
        onClick: this.close
      })));
    }
  }]);

  return FinalModal;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ConfirmBetModal);

/***/ })

})
//# sourceMappingURL=match.js.079601ae0cd8f3c98cca.hot-update.js.map