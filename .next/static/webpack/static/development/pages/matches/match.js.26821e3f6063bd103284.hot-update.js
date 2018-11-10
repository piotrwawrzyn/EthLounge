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
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _redux_match_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/match/actions */ "./redux/match/actions.js");
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/store */ "./redux/store.js");
/* harmony import */ var _next_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../next-routes */ "./next-routes.js");
/* harmony import */ var _next_routes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_next_routes__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_TokenFromWei__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/TokenFromWei */ "./utils/TokenFromWei.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../config/config */ "./config/config.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_config_config__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_api_PlaceBet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/api/PlaceBet */ "./utils/api/PlaceBet.js");
/* harmony import */ var _utils_Sleep__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/Sleep */ "./utils/Sleep.js");


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
    _this.closeFinalModal = _this.closeFinalModal.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.state = {
      isConfirmButtonLoading: false,
      confirmButtonIcon: false,
      confirmButtonText: 'Confirm and place bet',
      confirmButtonClassName: 'orange-button-dark',
      isConfirmButtonDisabled: false,
      isBackButtonDisabled: false
    };
    return _this;
  }

  _createClass(ConfirmBetModal, [{
    key: "closeFinalModal",
    value: function closeFinalModal() {
      this.setState({
        isFinalModalErrorOpen: false,
        isFinalModalSuccessOpen: false
      });
      _redux_store__WEBPACK_IMPORTED_MODULE_4__["default"].dispatch(Object(_redux_match_actions__WEBPACK_IMPORTED_MODULE_3__["toggleModal"])('confirmBetModal'));
    }
  }, {
    key: "handleConfirm",
    value: function () {
      var _handleConfirm = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(match, pickedTeam, tokensToBet, user) {
        var tokensBet, api_response, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.setState({
                  isConfirmButtonLoading: true,
                  isConfirmButtonDisabled: true,
                  isBackButtonDisabled: true
                });
                tokensBet = tokensToBet.map(function (token) {
                  return {
                    id: token.id,
                    amount: token.balance
                  };
                });
                _context.next = 4;
                return Object(_utils_api_PlaceBet__WEBPACK_IMPORTED_MODULE_8__["default"])({
                  matchID: match._id,
                  teamID: pickedTeam.id,
                  betMakerID: user._id,
                  tokensBet: tokensBet
                });

              case 4:
                api_response = _context.sent;
                data = api_response.data;

                if (!data.bet) {
                  _context.next = 13;
                  break;
                }

                this.setState({
                  isConfirmButtonLoading: false,
                  isBackButtonDisabled: false,
                  confirmButtonIcon: 'chevron down',
                  confirmButtonText: 'Bet placed successfuly'
                });
                _context.next = 10;
                return Object(_utils_Sleep__WEBPACK_IMPORTED_MODULE_9__["default"])(500);

              case 10:
                _next_routes__WEBPACK_IMPORTED_MODULE_5__["Router"].push("/matches/".concat(match._id));
                _context.next = 14;
                break;

              case 13:
                this.setState({
                  isConfirmButtonLoading: false,
                  isConfirmButtonDisabled: false,
                  isBackButtonDisabled: false,
                  confirmButtonIcon: 'exclamation',
                  confirmButtonText: 'Placing bet failed',
                  confirmButtonClassName: 'error-button'
                });

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function handleConfirm(_x, _x2, _x3, _x4) {
        return _handleConfirm.apply(this, arguments);
      };
    }()
  }, {
    key: "renderTeamLogos",
    value: function renderTeamLogos(match, pickedTeam) {
      var notPickedTeam = pickedTeam.id === match.teams[0].id ? match.teams[1] : match.teams[0];
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "confirm-bet-modal-img-div"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "confirm-bet-modal-img-divider"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Image"], {
        className: "confirm-bet-modal-img confirm-bet-modal-img-picked",
        src: "".concat(_config_config__WEBPACK_IMPORTED_MODULE_7__["backend"], "/img/").concat(pickedTeam.logo)
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Image"], {
        className: "confirm-bet-modal-img confirm-bet-modal-img-notpicked",
        src: "".concat(_config_config__WEBPACK_IMPORTED_MODULE_7__["backend"], "/img/").concat(notPickedTeam.logo)
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          open = _this$props.open,
          tokensToBet = _this$props.tokensToBet,
          pickedTeam = _this$props.pickedTeam,
          user = _this$props.user,
          match = _this$props.match;
      var tokenList = tokensToBet.map(function (curr) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"].Item, {
          as: "p",
          key: curr.symbol
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
          name: "right triangle"
        }), "".concat(Object(_utils_TokenFromWei__WEBPACK_IMPORTED_MODULE_6__["default"])(curr), " ").concat(curr.symbol));
      });
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
        size: "tiny",
        open: open
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Modal"].Header, {
        className: "modal-header"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
        style: {
          marginRight: '1em'
        },
        name: "check"
      }), "You are about to place a bet"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Modal"].Content, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Modal"].Description, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
        width: 10
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Header"], null, "Your bet: "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"], {
        className: "confirm-bet-modal-ul font-dark-orange",
        as: "ul"
      }, tokenList), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Header"], null, "Picked Team:", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "font-dark-orange"
      }, ' ' + pickedTeam.displayName)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "odds-message"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
        name: "info circle"
      }), "Odds are now ", pickedTeam.odds, " but keep in mind they can change prior to the game start based on future bets.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
        width: 6
      }, this.renderTeamLogos(match, pickedTeam))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Modal"].Actions, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        disabled: this.state.isBackButtonDisabled,
        className: "dark-button",
        onClick: function onClick(e) {
          return _redux_store__WEBPACK_IMPORTED_MODULE_4__["default"].dispatch(Object(_redux_match_actions__WEBPACK_IMPORTED_MODULE_3__["toggleModal"])('confirmBetModal'));
        }
      }, "Back"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        loading: this.state.isConfirmButtonLoading,
        disabled: this.state.isConfirmButtonDisabled,
        icon: this.state.confirmButtonIcon,
        className: this.state.confirmButtonClassName,
        content: this.state.confirmButtonText,
        onClick: function onClick(e) {
          return _this2.handleConfirm(match, pickedTeam, tokensToBet, user);
        }
      })));
    }
  }]);

  return ConfirmBetModal;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ConfirmBetModal);

/***/ })

})
//# sourceMappingURL=match.js.26821e3f6063bd103284.hot-update.js.map