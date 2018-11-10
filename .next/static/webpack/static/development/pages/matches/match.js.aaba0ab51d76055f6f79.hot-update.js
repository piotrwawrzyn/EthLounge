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
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/constants */ "./utils/constants.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _BettingBoxToken__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BettingBoxToken */ "./components/match/BettingBoxToken.js");
/* harmony import */ var _RangeSlider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RangeSlider */ "./components/match/RangeSlider.js");
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








var BettingBox =
/*#__PURE__*/
function (_Component) {
  _inherits(BettingBox, _Component);

  function BettingBox(props) {
    var _this;

    _classCallCheck(this, BettingBox);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BettingBox).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "NUMBER_OF_BOXES", 4);

    return _this;
  }

  _createClass(BettingBox, [{
    key: "renderBetInfo",
    value: function renderBetInfo(bet, odds) {
      var estimatedBetValue = bet.estimatedBetValue.toFixed(2);
      var estimatedReturn = (bet.estimatedBetValue * odds).toFixed(2);
      var statusIcon, status, statusClassName;

      switch (bet.state) {
        case 'pending':
          {
            statusIcon = _utils_constants__WEBPACK_IMPORTED_MODULE_2__["BET_PENDING"];
            break;
          }

        case 'won':
          {
            statusClassName = 'bet-info-status-won';
            statusIcon = _utils_constants__WEBPACK_IMPORTED_MODULE_2__["BET_WON"];
            break;
          }

        case 'lost':
          {
            statusClassName = 'bet-info-status-lost';
            statusIcon = BET_LOST;
            break;
          }

        case 'draw':
          {
            statusIcon = _utils_constants__WEBPACK_IMPORTED_MODULE_2__["BET_DRAW"];
            break;
          }

        case 'canceled':
          {
            statusIcon = _utils_constants__WEBPACK_IMPORTED_MODULE_2__["BET_CANCELED"];
            break;
          }
      }

      status = bet.state;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"], {
        className: "bet-info"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
        className: "orange-label-light",
        horizontal: true
      }, "PICKED TEAM"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, bet.team.displayName))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
        className: "orange-label-light",
        horizontal: true
      }, "STATUS"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: statusClassName
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, status), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
        name: statusIcon
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
        className: "orange-label-light",
        horizontal: true
      }, "ESTIMATED BET VALUE"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, estimatedBetValue, "$"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
        className: "orange-label-light",
        horizontal: true
      }, "ESTIMATED RETURN"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, estimatedReturn, "$")))));
    }
  }, {
    key: "renderTokensToBet",
    value: function renderTokensToBet(tokens) {
      var items = [];

      for (var i = 0; i < this.NUMBER_OF_BOXES; i++) {
        var token = tokens[i] || null;
        items.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
          className: "betting-box-row",
          key: i
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BettingBoxToken__WEBPACK_IMPORTED_MODULE_4__["default"], {
          token: token
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
          verticalAlign: "middle"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RangeSlider__WEBPACK_IMPORTED_MODULE_5__["default"], {
          prices: this.props.prices,
          token: token,
          toBet: tokens
        }))));
      }

      return items;
    }
  }, {
    key: "renderTokensBet",
    value: function renderTokensBet(tokens) {
      var items = [];

      for (var i = 0; i < this.NUMBER_OF_BOXES; i++) {
        var token = tokens[i] || null;
        items.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
          className: "betting-box-row",
          key: i
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
          width: 7
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BettingBoxToken__WEBPACK_IMPORTED_MODULE_4__["default"], {
          token: token
        }))));
      }

      return items;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          tokens = _this$props.tokens,
          bet = _this$props.bet,
          teams = _this$props.teams;
      if (!bet) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "betting-box"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
        style: {
          paddingTop: '1em'
        },
        columns: "equal"
      }, this.renderTokensToBet(tokens)));

      var odds = lodash__WEBPACK_IMPORTED_MODULE_3___default.a.find(teams, {
        id: bet.teamID
      }).odds;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "betting-box"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
        columns: "equal"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, null, this.renderTokensBet(bet.tokensBet)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, null, this.renderBetInfo(bet, odds)))));
    }
  }]);

  return BettingBox;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (BettingBox);

/***/ }),

/***/ "./components/match/MatchDetails.js":
/*!******************************************!*\
  !*** ./components/match/MatchDetails.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/config */ "./config/config.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_config_config__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_DateFormatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/DateFormatter */ "./utils/DateFormatter.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/constants */ "./utils/constants.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var MatchDetails =
/*#__PURE__*/
function (_Component) {
  _inherits(MatchDetails, _Component);

  function MatchDetails(props) {
    _classCallCheck(this, MatchDetails);

    return _possibleConstructorReturn(this, _getPrototypeOf(MatchDetails).call(this, props));
  }

  _createClass(MatchDetails, [{
    key: "render",
    value: function render() {
      var match = this.props.match;
      var teams = match.teams,
          league = match.league,
          numberOfBets = match.numberOfBets,
          highestBet = match.highestBet,
          tokensInPool = match.tokensInPool,
          serie = match.serie,
          startTime = match.startTime,
          state = match.state;
      if (!serie) serie = (_readOnlyError("serie"), '');
      if (!league) league = (_readOnlyError("league"), {
        displayName: ''
      });
      var date = Object(_utils_DateFormatter__WEBPACK_IMPORTED_MODULE_3__["default"])(startTime);
      var aproxIcon;

      if (date.isFuture) {
        aproxIcon = _utils_constants__WEBPACK_IMPORTED_MODULE_4__["GAME_SCHEDULED_ICON"];
      } else {
        if (state === 'finalized' || state === 'canceled') {
          aproxIcon = _utils_constants__WEBPACK_IMPORTED_MODULE_4__["GAME_FINISHED_ICON"];
        } else {
          aproxIcon = _utils_constants__WEBPACK_IMPORTED_MODULE_4__["GAME_STARTED_ICON"];
        }
      }

      console.log(aproxIcon);
      if (match) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          marginTop: '0.5em'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
        columns: "1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
        textAlign: "right"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
        className: "orange-label-light",
        size: "large"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
        name: _utils_constants__WEBPACK_IMPORTED_MODULE_4__["DATE_ICON"]
      }), date.formatedDate), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
        className: "orange-label-light",
        size: "large"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
        name: aproxIcon
      }), date.aprox))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
        columns: "2"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
        dividing: true,
        as: "h4"
      }, "Match statistics"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"], {
        className: "details-list"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Icon, {
        name: "dollar sign",
        className: "font-dark"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Content, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Header, null, "".concat((teams[0].totalDollarsBet + teams[1].totalDollarsBet).toFixed(2), "$")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Description, null, "Total bet"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Icon, {
        name: "ticket alternate",
        className: "font-dark"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Content, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Header, null, numberOfBets), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Description, null, "Bets total"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Icon, {
        name: "chess king",
        className: "font-dark"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Content, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Header, null, "".concat(highestBet.toFixed(2), "$")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Description, null, "Highest bet"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Icon, {
        name: "ethereum",
        className: "font-dark"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Content, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Header, null, tokensInPool.length), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Description, null, "Different tokens in pool"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
        verticalAlign: "middle",
        textAlign: "center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "league-image undragable",
        src: "".concat(_config_config__WEBPACK_IMPORTED_MODULE_2__["backend"], "/img/").concat(league.logo)
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "league-caption"
      }, "".concat(league.displayName, " ").concat(serie))))));
      return '';
    }
  }]);

  return MatchDetails;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (MatchDetails);

/***/ }),

/***/ "./utils/constants.js":
/*!****************************!*\
  !*** ./utils/constants.js ***!
  \****************************/
/*! exports provided: ICON */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICON", function() { return ICON; });
var ICON = {
  DATE: 'calendar alternate outline',
  GAME_SCHEDULED: 'hourglass start',
  GAME_STARTED: 'hourglass half',
  GAME_FINISHED: 'hourglass end',
  BET_PENDING: 'hourglass half',
  BET_WON: 'trophy',
  BET_LOST: 'minus',
  BET_DRAW: 'law',
  BET_CANCELED: 'calendar times'
};

/***/ })

})
//# sourceMappingURL=match.js.aaba0ab51d76055f6f79.hot-update.js.map