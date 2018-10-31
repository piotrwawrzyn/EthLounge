webpackHotUpdate("static\\development\\pages\\admin\\dashboard\\tokens.js",{

/***/ "./components/dashboard/tokens/TokenForm.js":
/*!**************************************************!*\
  !*** ./components/dashboard/tokens/TokenForm.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_DropZone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/DropZone */ "./components/dashboard/shared/DropZone.js");
/* harmony import */ var _next_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../next-routes */ "./next-routes.js");
/* harmony import */ var _next_routes__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_next_routes__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shared_FormMessage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/FormMessage */ "./components/dashboard/shared/FormMessage.js");
/* harmony import */ var _utils_api_AddToken__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../utils/api/AddToken */ "./utils/api/AddToken.js");


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










var TokenForm =
/*#__PURE__*/
function (_Component) {
  _inherits(TokenForm, _Component);

  function TokenForm(props) {
    var _this;

    _classCallCheck(this, TokenForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TokenForm).call(this, props));
    _this.onDrop = _this.onDrop.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleAddTeam = _this.handleAddTeam.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.emptyInputs = {
      displayName: '',
      address: '',
      symbol: '',
      decimals: '',
      logo: ''
    };
    _this.noErrors = {
      displayName: false,
      address: false,
      symbol: false,
      decimals: false,
      logo: false
    };
    _this.state = {
      formInputs: _this.emptyInputs,
      formError: _this.noErrors,
      formMessage: ''
    };
    return _this;
  }

  _createClass(TokenForm, [{
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
        var _this$state$formInput, displayName, address, symbol, decimals, logo, displayNameNotValid, addressNotValid, symbolNotValid, decimalsNotValid, logoNotValid, response;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$state$formInput = this.state.formInputs, displayName = _this$state$formInput.displayName, address = _this$state$formInput.address, symbol = _this$state$formInput.symbol, decimals = _this$state$formInput.decimals, logo = _this$state$formInput.logo;
                console.log(!decimals || isNaN(decimals));
                displayNameNotValid = !displayName;
                addressNotValid = !address || address.length !== 42 || !address.startsWith('0x');
                symbolNotValid = !symbol;
                decimalsNotValid = !decimals || isNaN(decimals);
                logoNotValid = !logo;
                this.setState({
                  formError: {
                    displayName: displayNameNotValid,
                    address: addressNotValid,
                    symbol: symbolNotValid,
                    decimals: decimalsNotValid,
                    logo: logoNotValid
                  }
                });

                if (!(displayNameNotValid || addressNotValid || symbolNotValid || logoNotValid || decimalsNotValid)) {
                  _context.next = 10;
                  break;
                }

                return _context.abrupt("return");

              case 10:
                _context.next = 12;
                return Object(_utils_api_AddToken__WEBPACK_IMPORTED_MODULE_8__["default"])({
                  displayName: displayName,
                  address: address,
                  symbol: symbol,
                  decimals: decimals,
                  logo: logo
                });

              case 12:
                response = _context.sent;

                if (response.data.success) {
                  _next_routes__WEBPACK_IMPORTED_MODULE_6__["Router"].pushRoute('/admin/dashboard/tokens');
                  this.setState({
                    formMessage: 'success',
                    formInputs: this.emptyInputs,
                    formErrors: this.noErrors
                  });
                } else this.setState({
                  formMessage: 'error'
                });

              case 14:
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
          displayName: false,
          address: false,
          symbol: false,
          logo: false
        },
        formMessage: ''
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"], {
        error: true,
        success: true
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Field, {
        required: true,
        error: this.state.formError.displayName
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Display name"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        onChange: function onChange(e) {
          _this2.clearFormErrors();

          _this2.setState({
            formInputs: _objectSpread({}, _this2.state.formInputs, {
              displayName: e.target.value
            })
          });
        },
        value: this.state.formInputs.displayName
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Field, {
        required: true,
        error: this.state.formError.symbol
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Symbol"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        onChange: function onChange(e) {
          _this2.clearFormErrors();

          _this2.setState({
            formInputs: _objectSpread({}, _this2.state.formInputs, {
              symbol: e.target.value
            })
          });
        },
        value: this.state.formInputs.symbol
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Field, {
        required: true,
        error: this.state.formError.address
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Address"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        onChange: function onChange(e) {
          _this2.clearFormErrors();

          _this2.setState({
            formInputs: _objectSpread({}, _this2.state.formInputs, {
              address: e.target.value
            })
          });
        },
        value: this.state.formInputs.address
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Field, {
        required: true,
        error: this.state.formError.decimals
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Decimals"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        onChange: function onChange(e) {
          _this2.clearFormErrors();

          _this2.setState({
            formInputs: _objectSpread({}, _this2.state.formInputs, {
              decimals: e.target.value
            })
          });
        },
        value: this.state.formInputs.decimals
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Field, {
        required: true,
        error: this.state.formError.logo
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "PNG Logo"), this.renderDropBox(this.state.formInputs.logo, this.state.formError.logo), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Label"], {
        className: "label-warning"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
        name: "warning circle"
      }), "Please upload only square logos. Preferably 200x200 px.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        icon: true,
        labelPosition: "right",
        onClick: function onClick(e) {
          return _this2.handleAddTeam();
        },
        className: "dark-button"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
        name: "plus"
      }), "Add"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_shared_FormMessage__WEBPACK_IMPORTED_MODULE_7__["default"], {
        message: this.state.formMessage
      }));
    }
  }, {
    key: "renderDropBox",
    value: function renderDropBox(logo, error) {
      var _this3 = this;

      var classNameModifier = error ? 'dropdown-div-error' : '';
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_shared_DropZone__WEBPACK_IMPORTED_MODULE_5__["default"], {
        handleDelete: function handleDelete(e) {
          _this3.setState({
            formInputs: _objectSpread({}, _this3.state.formInputs, {
              logo: false
            })
          });
        },
        droppedImg: logo,
        classNameModifier: classNameModifier,
        onDrop: function onDrop(accepted, rejected) {
          return _this3.onDrop(accepted, rejected);
        }
      });
    }
  }]);

  return TokenForm;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (TokenForm);

/***/ })

})
//# sourceMappingURL=tokens.js.acc34883d420fb5b6b57.hot-update.js.map