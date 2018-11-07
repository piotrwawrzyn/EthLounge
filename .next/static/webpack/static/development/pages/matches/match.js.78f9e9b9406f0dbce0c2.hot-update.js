webpackHotUpdate("static\\development\\pages\\matches\\match.js",{

/***/ "./components/match/Teams.js":
/*!***********************************!*\
  !*** ./components/match/Teams.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/config */ "./config/config.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_config_config__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_match_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/match/actions */ "./redux/match/actions.js");
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/store */ "./redux/store.js");
/* harmony import */ var _utils_DateFormatter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/DateFormatter */ "./utils/DateFormatter.js");
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








var Teams =
/*#__PURE__*/
function (_Component) {
  _inherits(Teams, _Component);

  function Teams(props) {
    var _this;

    _classCallCheck(this, Teams);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Teams).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClick", function (user, team, pickedTeam) {
      if (user) {
        if (pickedTeam._id === team._id) {
          _redux_store__WEBPACK_IMPORTED_MODULE_4__["default"].dispatch(Object(_redux_match_actions__WEBPACK_IMPORTED_MODULE_3__["pickTeam"])({}));
          return;
        }

        _redux_store__WEBPACK_IMPORTED_MODULE_4__["default"].dispatch(Object(_redux_match_actions__WEBPACK_IMPORTED_MODULE_3__["pickTeam"])(team));
      }
    });

    return _this;
  }

  _createClass(Teams, [{
    key: "renderTeamLabel",
    value: function renderTeamLabel(user, team, pickedTeam) {
      var _this2 = this;

      var style = user ? {
        cursor: 'pointer'
      } : {};
      var classNameModifier = pickedTeam._id == team._id ? ' team-label-picked' : '';
      var teamCaption = pickedTeam._id == team._id ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "team-name team-name-picked"
      }, team.displayName) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "team-name"
      }, team.displayName);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        onClick: function onClick(event) {
          _this2.handleClick(user, team, pickedTeam);
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
        size: "huge",
        style: style,
        className: "team-label".concat(classNameModifier)
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
        className: "undragable",
        src: "".concat(_config_config__WEBPACK_IMPORTED_MODULE_2__["backend"], "/img/teams/").concat(team._id, ".png")
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: style
      }, teamCaption), ' ');
    }
  }, {
    key: "renderOdds",
    value: function renderOdds(match, index) {
      var percentageAndOdds = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "team-percentage"
      }, match.teams[index].percentages, "%"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "team-odds"
      }, "x ", match.teams[index].odds.toFixed(2)));
      if (index === 0) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
        color: "black",
        ribbon: true
      }, percentageAndOdds);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
        color: "black",
        ribbon: "right"
      }, percentageAndOdds);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          teams = _this$props.teams,
          pickedTeam = _this$props.pickedTeam,
          match = _this$props.match,
          user = _this$props.user;
      if (teams) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
        className: "teams-grid",
        padded: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
        width: 2
      }, this.renderOdds(match, 0)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
        width: 5,
        verticalAlign: "middle",
        textAlign: "center"
      }, this.renderTeamLabel(user, match.teams[0], pickedTeam)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
        width: 2,
        verticalAlign: "middle",
        textAlign: "center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
        color: "black"
      }, "VS")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
        width: 5,
        verticalAlign: "middle",
        textAlign: "center"
      }, this.renderTeamLabel(user, match.teams[1], pickedTeam)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
        width: 2
      }, this.renderOdds(match, 1))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, null))));
      return '';
    }
  }]);

  return Teams;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Teams);

/***/ })

})
//# sourceMappingURL=match.js.78f9e9b9406f0dbce0c2.hot-update.js.map