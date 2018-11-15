webpackHotUpdate("static\\development\\pages\\matches\\match.js",{

/***/ "./components/Layout/Menu.js":
/*!***********************************!*\
  !*** ./components/Layout/Menu.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/store */ "./redux/store.js");
/* harmony import */ var ethereum_blockies_base64__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ethereum-blockies-base64 */ "./node_modules/ethereum-blockies-base64/dist/main.js");
/* harmony import */ var ethereum_blockies_base64__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ethereum_blockies_base64__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _MenuUser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MenuUser */ "./components/Layout/MenuUser.js");
/* harmony import */ var _utils_FormValidation_IsUsernameOk__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/FormValidation/IsUsernameOk */ "./utils/FormValidation/IsUsernameOk.js");
/* harmony import */ var _utils_FormValidation_IsPasswordOk__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/FormValidation/IsPasswordOk */ "./utils/FormValidation/IsPasswordOk.js");
/* harmony import */ var _utils_FormValidation_isEmailOk__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/FormValidation/isEmailOk */ "./utils/FormValidation/isEmailOk.js");


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












var TopMenu =
/*#__PURE__*/
function (_Component) {
  _inherits(TopMenu, _Component);

  function TopMenu(props) {
    var _this;

    _classCallCheck(this, TopMenu);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TopMenu).call(this, props));
    _this.handleSignUp = _this.handleSignUp.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.state = {
      username: '',
      email: '',
      password: '',
      password_2: '',
      signUpErrors: [],
      signUpOpen: false,
      signInOpen: false
    };
    return _this;
  }

  _createClass(TopMenu, [{
    key: "renderRightMenu",
    value: function renderRightMenu(user) {
      var _this2 = this;

      switch (user) {
        case false:
          {
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
              className: "auth-buttons"
            }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
              onClick: function onClick(e) {
                return _this2.setState({
                  signInOpen: true
                });
              },
              color: "black"
            }, "Sign in"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
              className: "or"
            }, "or"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
              onClick: function onClick(e) {
                return _this2.setState({
                  signUpOpen: true
                });
              },
              color: "black",
              className: "margin-right-1em"
            }, "Sign up"));
          }

        case null:
          {
            return '';
          }

        default:
          {
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_MenuUser__WEBPACK_IMPORTED_MODULE_7__["default"], {
              user: user
            });
          }
      }
    }
  }, {
    key: "handleSignUp",
    value: function () {
      var _handleSignUp = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this$state, username, password, password_2, email, signUpErrors, isUsernameOk, isPasswordOk, isEmailOk, response;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$state = this.state, username = _this$state.username, password = _this$state.password, password_2 = _this$state.password_2, email = _this$state.email;
                signUpErrors = [];
                isUsernameOk = Object(_utils_FormValidation_IsUsernameOk__WEBPACK_IMPORTED_MODULE_8__["default"])(username);
                if (isUsernameOk !== true) signUpErrors.push(isUsernameOk);
                isPasswordOk = Object(_utils_FormValidation_IsPasswordOk__WEBPACK_IMPORTED_MODULE_9__["default"])(password, password_2);
                if (isPasswordOk !== true) signUpErrors.push(isPasswordOk);
                isEmailOk = Object(_utils_FormValidation_isEmailOk__WEBPACK_IMPORTED_MODULE_10__["default"])(email);
                if (isEmailOk !== true) signUpErrors.push(isEmailOk);

                if (!(signUpErrors.length > 0)) {
                  _context.next = 11;
                  break;
                }

                this.setState({
                  signUpErrors: signUpErrors
                });
                return _context.abrupt("return");

              case 11:
                _context.next = 13;
                return axios__WEBPACK_IMPORTED_MODULE_6___default()({
                  method: 'post',
                  url: '/register',
                  data: {
                    username: username,
                    password: password,
                    email: email
                  },
                  config: {
                    headers: {
                      'Content-Type': 'multipart/form-data'
                    }
                  }
                });

              case 13:
                response = _context.sent;

                if (!response.data.errors) {
                  window.location.href = response.request.responseURL;
                } else {
                  this.setState({
                    signUpErrors: response.data.errors
                  });
                }

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function handleSignUp() {
        return _handleSignUp.apply(this, arguments);
      };
    }()
  }, {
    key: "isButtonDisabled",
    value: function isButtonDisabled(inputs) {
      var ok = inputs.every(function (curr) {
        return curr.length > 0;
      });
      return !ok;
    }
  }, {
    key: "renderAvatar",
    value: function renderAvatar(username) {
      if (Object(_utils_FormValidation_IsUsernameOk__WEBPACK_IMPORTED_MODULE_8__["default"])(username) === true) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "sign-up-avatar-box"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Your avatar:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Image"], {
        src: ethereum_blockies_base64__WEBPACK_IMPORTED_MODULE_5___default()(username)
      }));
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "sign-up-avatar-box"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Your avatar:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Image"], {
        className: "sign-up-avatar-box-img-placeholder",
        src: ethereum_blockies_base64__WEBPACK_IMPORTED_MODULE_5___default()('dfgdasd')
      }));
    }
  }, {
    key: "renderSignUpModal",
    value: function renderSignUpModal(open) {
      var _this3 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
        open: open,
        size: "small"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Modal"].Header, {
        className: "modal-header"
      }, "Sign up as a new user"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Modal"].Content, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Row, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
        width: 10
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Field, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Username"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Input"], {
        onChange: function onChange(e) {
          _this3.setState({
            username: e.target.value
          });

          _this3.resetErrors();
        },
        value: this.state.username
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "sign-up-hint"
      }, "Username should contain between 3 and 15 characters.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Field, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "E-mail"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Input"], {
        onChange: function onChange(e) {
          _this3.setState({
            email: e.target.value
          });

          _this3.resetErrors();
        },
        value: this.state.email
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", null))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Field, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Password"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "password",
        onChange: function onChange(e) {
          _this3.setState({
            password: e.target.value
          });

          _this3.resetErrors();
        },
        value: this.state.password
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "sign-up-hint"
      }, "Password should contain at least 8 characters.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Field, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Repeat password"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "password",
        onChange: function onChange(e) {
          _this3.setState({
            password_2: e.target.value
          });

          _this3.resetErrors();
        },
        value: this.state.password_2
      }))), this.renderSingUpErrors(this.state.signUpErrors)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
        width: 6,
        verticalAlign: "middle",
        textAlign: "center"
      }, this.renderAvatar(this.state.username))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Modal"].Actions, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        className: "dark-button",
        onClick: function onClick(e) {
          _this3.setState({
            signUpOpen: false,
            username: '',
            password: '',
            password_2: '',
            signUpErrors: []
          });
        }
      }, "Back"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        className: "orange-button-dark",
        onClick: function onClick(e) {
          return _this3.handleSignUp();
        },
        disabled: this.isButtonDisabled([this.state.username, this.state.password, this.state.password_2, this.state.email])
      }, "Sign Up")));
    }
  }, {
    key: "renderSignInModal",
    value: function renderSignInModal(open) {
      var _this4 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
        open: open,
        size: "small"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Modal"].Header, {
        className: "modal-header"
      }, "Sign in"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Modal"].Content, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"], {
        id: "login_form",
        action: "/login",
        method: "post"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Field, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Username"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        name: "username",
        onChange: function onChange(e) {
          return _this4.setState({
            username: e.target.value
          });
        },
        value: this.state.username
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Field, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Password"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        name: "password",
        type: "password",
        onChange: function onChange(e) {
          return _this4.setState({
            password: e.target.value
          });
        },
        value: this.state.password
      })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Modal"].Actions, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        className: "dark-button",
        onClick: function onClick(e) {
          _this4.setState({
            signInOpen: false,
            username: '',
            password: ''
          });
        }
      }, "Back"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        type: "submit",
        form: "login_form",
        className: "orange-button-dark",
        disabled: this.isButtonDisabled([this.state.username, this.state.password])
      }, "Sign In")));
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"], {
        inverted: true,
        size: "large",
        className: "top-menu",
        icon: "labeled"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
        className: "item-logo"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Image"], {
        className: "logo",
        src: "/static/img/logo/logo.png"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
        name: "chess knight"
      }), "My Bets"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
        name: "angle double down"
      }), "Deposit"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
        name: "angle double up"
      }), "Withdraw"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
        name: "question circle outline"
      }), "FAQ"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
        className: "menu-right-item",
        position: "right"
      }, this.renderRightMenu(this.props.user)), this.renderSignUpModal(this.state.signUpOpen), this.renderSignInModal(this.state.signInOpen));
    }
  }, {
    key: "resetErrors",
    value: function resetErrors() {
      this.setState({
        signUpErrors: []
      });
    }
  }, {
    key: "renderSingUpErrors",
    value: function renderSingUpErrors(errors) {
      if (errors[0]) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Message"], {
          error: true,
          header: "There were some errors in your sign up form.",
          list: errors
        });
      }

      return '';
    }
  }]);

  return TopMenu;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.login.user
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps)(TopMenu));

/***/ })

})
//# sourceMappingURL=match.js.d866cd966d8c2c953ac2.hot-update.js.map