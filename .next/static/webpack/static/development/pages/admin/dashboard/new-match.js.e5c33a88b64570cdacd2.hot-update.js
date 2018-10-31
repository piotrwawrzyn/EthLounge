webpackHotUpdate("static\\development\\pages\\admin\\dashboard\\new-match.js",{

/***/ "./components/dashboard/new-match/APImatches.js":
/*!******************************************************!*\
  !*** ./components/dashboard/new-match/APImatches.js ***!
  \******************************************************/
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
/* harmony import */ var _utils_DateFormatter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/DateFormatter */ "./utils/DateFormatter.js");
/* harmony import */ var _utils_api_AddTeam__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/api/AddTeam */ "./utils/api/AddTeam.js");


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







var APImatches =
/*#__PURE__*/
function (_Component) {
  _inherits(APImatches, _Component);

  function APImatches(props) {
    var _this;

    _classCallCheck(this, APImatches);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(APImatches).call(this, props));
    _this.state = {
      matches: ''
    };
    _this.handleAdd = _this.handleAdd.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  } // async addTeamToDatabase(team) {
  //   const { id, name, img } = team;
  //   await axios({
  //     method: 'post'
  //   });
  // }


  _createClass(APImatches, [{
    key: "handleAdd",
    value: function () {
      var _handleAdd = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(match) {
        var pandaID, startTime, teams, league, teamsFromDb, teamsLogoNeeded, i, api_response, leagueFromDb, leagueLogoNeeded;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                pandaID = match.pandaID, startTime = match.startTime, teams = match.teams, league = match.league; // Teams

                _context2.next = 3;
                return teams.map(
                /*#__PURE__*/
                function () {
                  var _ref = _asyncToGenerator(
                  /*#__PURE__*/
                  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(curr) {
                    var api_response;
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/api/teams?apiID=".concat(curr.pandaID));

                          case 2:
                            api_response = _context.sent;
                            return _context.abrupt("return", api_response.data.team);

                          case 4:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee, this);
                  }));

                  return function (_x2) {
                    return _ref.apply(this, arguments);
                  };
                }());

              case 3:
                teamsFromDb = _context2.sent;
                _context2.next = 6;
                return Promise.all(teamsFromDb);

              case 6:
                teamsFromDb = _context2.sent;
                teamsLogoNeeded = [];

                for (i = 0; i < 2; i++) {
                  if (teamsFromDb[i] === null && teams[i].logo === null) ;
                  teamsLogoNeeded.push(teams[i]);

                  if (teamsFromDb[i] === null && teams[i].logo !== null) {
                    Object(_utils_api_AddTeam__WEBPACK_IMPORTED_MODULE_5__["default"])(teams[i]);
                  }
                }

                _context2.next = 11;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/api/leagues?apiID=".concat(league.pandaID));

              case 11:
                api_response = _context2.sent;
                // League
                leagueFromDb = api_response.data.league;
                leagueLogoNeeded = null;
                if (leagueFromDb === null && league.logo === null) ;
                leagueLogoNeeded = league;
                if (leagueFromDb === null && league.logo !== null) ; // ADD LEAGUE TO DATABASE

                if (leagueLogoNeeded === null && teamsLogoNeeded.length === 0) ; // WE DONT NEED ANYTHING, TEAMS AND LEAGUE EXIST. WE CAN CREATE A MATCH NOW

              case 18:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function handleAdd(_x) {
        return _handleAdd.apply(this, arguments);
      };
    }()
  }, {
    key: "getImageFromURL",
    value: function () {
      var _getImageFromURL = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(url) {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                console.log('trying to get image from', url);
                _context3.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(url);

              case 3:
                response = _context3.sent;
                console.log(response);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function getImageFromURL(_x3) {
        return _getImageFromURL.apply(this, arguments);
      };
    }()
  }, {
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var _this2 = this;

        var api_call, data, debugedData, matches, markup;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/api/pandascore/upcoming_matches');

              case 2:
                api_call = _context4.sent;
                // Array of matches.
                data = api_call.data.data; // Filter to debug

                debugedData = data.filter(function (match) {
                  if (!match.id) return false;
                  if (!match.begin_at) return false;
                  if (match.opponents.length !== 2) return false;
                  if (!match.league) return false;
                  return true;
                }); // Object refactoring

                matches = debugedData.map(function (match) {
                  if (!match.opponents[0]) console.log(match);
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
                      logo: match.opponents[0].opponent.image_url
                    }],
                    league: {
                      pandaID: match.league.id,
                      displayName: match.league.name,
                      logo: match.league.image_url
                    }
                  };
                });
                markup = matches.map(function (match) {
                  var date = Object(_utils_DateFormatter__WEBPACK_IMPORTED_MODULE_4__["default"])(match.startTime);
                  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].Row, {
                    key: match.pandaID
                  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].Cell, null, match.teams[0].displayName), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].Cell, null, match.teams[1].displayName), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].Cell, null, match.league.displayName), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].Cell, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Image"], {
                    size: "mini",
                    verticalAlign: "middle",
                    src: match.league.logo
                  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].Cell, null, date.formatedDate), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].Cell, null, date.aprox), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].Cell, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
                    onClick: function onClick(e) {
                      return _this2.handleAdd(match);
                    },
                    name: "plus",
                    circular: true,
                    className: "table-icon"
                  })));
                });
                this.setState({
                  matches: markup
                });

              case 8:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      };
    }()
  }, {
    key: "render",
    value: function render() {
      if (this.state.matches) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"], {
          celled: true,
          fixed: true,
          singleLine: true,
          selectable: true
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].Header, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].Row, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].HeaderCell, null, "Team 1"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].HeaderCell, null, "Team 2"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].HeaderCell, null, "League"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].HeaderCell, null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].HeaderCell, null, "Start date"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].HeaderCell, null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].HeaderCell, null))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].Body, null, this.state.matches));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Dimmer"], {
          active: true,
          inverted: true,
          size: "large"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Loader"], null, " Fetching data from API"));
      }
    }
  }]);

  return APImatches;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (APImatches);

/***/ })

})
//# sourceMappingURL=new-match.js.e5c33a88b64570cdacd2.hot-update.js.map