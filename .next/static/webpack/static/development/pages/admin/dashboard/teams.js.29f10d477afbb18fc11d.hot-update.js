webpackHotUpdate("static\\development\\pages\\admin\\dashboard\\teams.js",{

/***/ "./pages/admin/dashboard/teams.js":
/*!****************************************!*\
  !*** ./pages/admin/dashboard/teams.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_dashboard_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/dashboard/Layout/Layout */ "./components/dashboard/Layout/Layout.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _static_css_dashboard_teams_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../static/css/dashboard/teams.css */ "./static/css/dashboard/teams.css");
/* harmony import */ var _static_css_dashboard_teams_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_static_css_dashboard_teams_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dropzone */ "./node_modules/react-dropzone/dist/es/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../config/config */ "./config/config.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_config_config__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_CookieCall__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../utils/CookieCall */ "./utils/CookieCall.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }











var Teams =
/*#__PURE__*/
function (_Component) {
  _inherits(Teams, _Component);

  function Teams(props) {
    var _this;

    _classCallCheck(this, Teams);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Teams).call(this, props));
    _this.onDrop = _this.onDrop.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleAddTeam = _this.handleAddTeam.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.state = {
      formInputs: {
        name: '',
        logo: false
      },
      formError: {
        name: false,
        logo: false
      },
      formMessage: ''
    };
    return _this;
  }

  _createClass(Teams, [{
    key: "onDrop",
    value: function onDrop(accepted, rejected) {
      this.clearFormErrors();

      var _accepted = _slicedToArray(accepted, 1),
          file = _accepted[0];

      this.setState({
        formInputs: _objectSpread({}, this.state.formInputs, {
          logo: file
        })
      });
    }
  }, {
    key: "handleAddTeam",
    value: function () {
      var _handleAddTeam = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var nameCheck, logoCheck, data, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                nameCheck = !this.state.formInputs.name;
                logoCheck = !this.state.formInputs.logo;
                this.setState({
                  formError: {
                    name: nameCheck,
                    logo: logoCheck
                  }
                });

                if (nameCheck || logoCheck) {
                  _context.next = 11;
                  break;
                }

                data = new FormData();
                data.append('logo', this.state.formInputs.logo);
                data.append('displayName', this.state.formInputs.name);
                _context.next = 9;
                return axios__WEBPACK_IMPORTED_MODULE_7___default()({
                  method: 'post',
                  url: '/backend/new_team',
                  data: data,
                  config: {
                    headers: {
                      'Content-Type': 'multipart/form-data'
                    }
                  }
                });

              case 9:
                response = _context.sent;

                if (response.data.success) {
                  this.setState({
                    formMessage: 'success',
                    formInputs: {
                      name: '',
                      logo: false
                    },
                    formError: {
                      name: false,
                      logo: false
                    }
                  });
                } else this.setState({
                  formMessage: 'error'
                });

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function handleAddTeam() {
        return _handleAddTeam.apply(this, arguments);
      };
    }()
  }, {
    key: "clearFormErrors",
    value: function clearFormErrors() {
      this.setState({
        formError: {
          name: false,
          logo: false
        },
        formMessage: ''
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "Manage Teams"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Divider"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
        columns: "2",
        className: "grid-content"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["GridColumn"], {
        width: "10"
      }, "All teams"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["GridColumn"], {
        width: "6"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"], {
        as: "h2"
      }, "Add New Team"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"], {
        error: true,
        success: true
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Field, {
        required: true,
        error: this.state.formError.name
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Display name"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        onChange: function onChange(e) {
          _this2.clearFormErrors();

          _this2.setState({
            formInputs: _objectSpread({}, _this2.state.formInputs, {
              name: e.target.value
            })
          });
        },
        value: this.state.formInputs.name
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Field, {
        required: true,
        error: this.state.formError.logo
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "PNG Logo"), this.renderDropBox(this.state.formInputs.logo, this.state.formError.logo)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        onClick: function onClick(e) {
          return _this2.handleAddTeam();
        },
        className: "black-bg font-white"
      }, "Add"), this.generateFormMessage(this.state.formMessage)))));
    }
  }, {
    key: "renderDropBox",
    value: function renderDropBox(logo, error) {
      var _this3 = this;

      if (!lodash__WEBPACK_IMPORTED_MODULE_6___default.a.isEmpty(logo)) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Label"], {
          size: "medium",
          image: true,
          className: "font-white dark-orange-bg"
        }, logo.name, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
          onClick: function onClick(e) {
            _this3.setState({
              formInputs: _objectSpread({}, _this3.state.formInputs, {
                logo: false
              })
            });
          },
          name: "delete"
        }));
      } else {
        var classNameModifier = error ? 'dropdown-div-error' : '';
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_dropzone__WEBPACK_IMPORTED_MODULE_5__["default"], {
          className: "dropdown-div ".concat(classNameModifier),
          activeClassName: "dropdown-div-accepted",
          rejectClassName: "dropdown-div-rejected",
          accept: "image/png",
          onDrop: function onDrop(accepted, rejected) {
            return _this3.onDrop(accepted, rejected);
          }
        }, function (_ref) {
          var isDragAccept = _ref.isDragAccept,
              isDragReject = _ref.isDragReject;

          if (isDragAccept) {
            return 'The logo look OK. Now drop it.';
          }

          if (isDragReject) {
            return 'This is not a PNG file. ';
          }

          return 'Drop PNG logo here';
        });
      }
    }
  }, {
    key: "generateFormMessage",
    value: function generateFormMessage(message) {
      console.log(this.props.initial);

      if (message) {
        var success = message === 'success' ? true : false;
        var header = success ? 'Success' : 'There has been a problem';
        var content = success ? 'New team has been succesfuly added to database.' : 'No new team has been added to database. Probably a team with such a name already exist.';
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Message"], {
          success: success,
          error: !success,
          content: content,
          header: header
        });
      }

      return '';
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(props) {
        var req, teams;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                req = props.req;
                _context2.next = 3;
                return Object(_utils_CookieCall__WEBPACK_IMPORTED_MODULE_9__["default"])(req, '/api/teams');

              case 3:
                teams = _context2.sent;
                return _context2.abrupt("return", teams);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return Teams;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_components_dashboard_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__["default"])(Teams));
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/admin\\dashboard\\teams")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=teams.js.29f10d477afbb18fc11d.hot-update.js.map