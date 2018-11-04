webpackHotUpdate("static\\development\\pages\\admin\\dashboard\\new-match.js",{

/***/ "./components/dashboard/new-match/ApiMatchesList.js":
/*!**********************************************************!*\
  !*** ./components/dashboard/new-match/ApiMatchesList.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _static_css_dashboard_dropzone_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../static/css/dashboard/dropzone.css */ "./static/css/dashboard/dropzone.css");
/* harmony import */ var _static_css_dashboard_dropzone_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_static_css_dashboard_dropzone_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_api_GetMatches__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/api/GetMatches */ "./utils/api/GetMatches.js");
/* harmony import */ var _ApiMatchesItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ApiMatchesItem */ "./components/dashboard/new-match/ApiMatchesItem.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }









var ApiMatchesList =
/*#__PURE__*/
function (_Component) {
  _inherits(ApiMatchesList, _Component);

  function ApiMatchesList(props) {
    var _this;

    _classCallCheck(this, ApiMatchesList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ApiMatchesList).call(this, props));
    _this.timeOptions = [{
      text: 'Next 24 hours',
      value: 24
    }, {
      text: 'Next 2 days',
      value: 48
    }, {
      text: 'Next 3 days',
      value: 72
    }, {
      text: 'Everything',
      value: 9999999
    }];
    _this.leagueOptions = [{
      text: 'All leagues',
      value: 0
    }];
    _this.defaultTimeSpan = 48;
    _this.defaultLeague = 0;
    _this.state = {
      allMatches: '',
      filters: {
        hours: _this.defaultTimeSpan,
        league: _this.defaultLeague
      }
    };
    _this.handleChangeTimeSpan = _this.handleChangeTimeSpan.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleChangeLeague = _this.handleChangeLeague.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(ApiMatchesList, [{
    key: "handleChangeTimeSpan",
    value: function handleChangeTimeSpan(e, _ref) {
      var value = _ref.value;
      this.setState({
        filters: _objectSpread({}, this.state.filters, {
          hours: value
        })
      });
    }
  }, {
    key: "handleChangeLeague",
    value: function handleChangeLeague(e, _ref2) {
      var value = _ref2.value;
      this.setState({
        filters: _objectSpread({}, this.state.filters, {
          league: value
        })
      });
    }
  }, {
    key: "hoursFilter",
    value: function hoursFilter() {
      var matches = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.allMatches;
      var now = new Date();
      var hours = this.state.filters.hours;
      var filteredMatches = matches.filter(function (curr) {
        return (curr.startTime.getTime() - now.getTime()) / 3600000 <= hours ? true : false;
      });
      return filteredMatches;
    }
  }, {
    key: "leaguesFilter",
    value: function leaguesFilter() {
      var matches = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.allMatches;
      var league = this.state.filters.league;
      if (league === 0) return matches;
      var filteredMatches = matches.filter(function (match) {
        return match.league.pandaID === league;
      });
      return filteredMatches;
    }
  }, {
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this2 = this;

        var api_call, api_response, matchesInDb, data, debugedData, matches;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/api/pandascore/upcoming_matches');

              case 2:
                api_call = _context.sent;
                _context.next = 5;
                return Object(_utils_api_GetMatches__WEBPACK_IMPORTED_MODULE_6__["default"])();

              case 5:
                api_response = _context.sent;
                matchesInDb = api_response.data; // Array of matches.

                data = api_call.data.data; // Filter to debug and remove already added matches

                debugedData = data.filter(function (match) {
                  if (!match.id) return false;
                  if (!match.begin_at) return false;
                  if (match.opponents.length !== 2) return false;
                  if (!match.league) return false;
                  if (matchesInDb.some(function (curr) {
                    return curr.pandaID == match.id;
                  })) return false;
                  return true;
                }); // Object refactoring

                matches = debugedData.map(function (match) {
                  if (!_this2.leagueOptions.some(function (curr) {
                    return curr.value === match.league.id;
                  })) _this2.leagueOptions.push({
                    text: match.league.name,
                    value: match.league.id
                  });
                  return {
                    pandaID: match.id,
                    startTime: new Date(match.begin_at),
                    teams: [{
                      pandaID: match.opponents[0].opponent.id,
                      displayName: match.opponents[0].opponent.name,
                      logo: match.opponents[0].opponent.image_url
                    }, {
                      pandaID: match.opponents[1].opponent.id,
                      displayName: match.opponents[1].opponent.name,
                      logo: match.opponents[1].opponent.image_url
                    }],
                    league: {
                      pandaID: match.league.id,
                      displayName: match.league.name,
                      logo: match.league.image_url
                    }
                  };
                });
                this.setState({
                  allMatches: matches
                }); // this.setState({ filters: { ...this.state.filters } });

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      };
    }()
  }, {
    key: "renderItems",
    value: function renderItems() {
      // Apply filters provided by user
      var matches = this.hoursFilter();
      matches = this.leaguesFilter(matches);
      var markup = matches.map(function (match) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ApiMatchesItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
          key: match.pandaID,
          match: match
        });
      });
      return markup;
    }
  }, {
    key: "render",
    value: function render() {
      var filters = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Dropdown"], {
        className: "margin-right-1em",
        defaultValue: this.timeOptions[1].value,
        options: this.timeOptions,
        selection: true,
        onChange: this.handleChangeTimeSpan,
        scrolling: false
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Dropdown"], {
        className: "margin-right-1em",
        defaultValue: this.leagueOptions[0].value,
        options: this.leagueOptions,
        selection: true,
        onChange: this.handleChangeLeague,
        scrolling: false
      }));

      if (this.state.allMatches) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, filters, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"], {
          selectable: true,
          verticalAlign: "middle",
          textAlign: "center",
          inverted: true
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].Header, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].Row, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].HeaderCell, null, "Team 1"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].HeaderCell, null, "Team 2"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].HeaderCell, null, "League"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].HeaderCell, null, "Start date"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].HeaderCell, null))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].Body, null, this.renderItems(this.state.allMatches, this.state.filters))));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Dimmer"], {
          active: true,
          inverted: true,
          size: "large"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Loader"], null, "Loading data from API"));
      }
    }
  }]);

  return ApiMatchesList;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ApiMatchesList);

/***/ })

})
//# sourceMappingURL=new-match.js.fb458594d87246690118.hot-update.js.map