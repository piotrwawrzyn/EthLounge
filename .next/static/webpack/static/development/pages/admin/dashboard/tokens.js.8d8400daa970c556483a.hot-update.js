webpackHotUpdate("static\\development\\pages\\admin\\dashboard\\tokens.js",{

/***/ "./components/dashboard/tokens/TokenListItem.js":
/*!******************************************************!*\
  !*** ./components/dashboard/tokens/TokenListItem.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../config/config */ "./config/config.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_config_config__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dropzone */ "./node_modules/react-dropzone/dist/es/index.js");
/* harmony import */ var _next_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../next-routes */ "./next-routes.js");
/* harmony import */ var _next_routes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_next_routes__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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









var TokenListItem =
/*#__PURE__*/
function (_Component) {
  _inherits(TokenListItem, _Component);

  function TokenListItem(props) {
    var _this;

    _classCallCheck(this, TokenListItem);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TokenListItem).call(this, props));
    _this.lastMode;
    _this.id = props.item._id;
    _this.displayName = props.item.displayName;
    _this.symbol = props.item.symbol;
    _this.address = props.item.address;
    _this.decimals = props.item.decimals;
    _this.tokenNameElement;
    _this.tokenSymbolElement;
    _this.tokenDecimalsElement;
    _this.handleEdit = _this.handleEdit.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleDelete = _this.handleDelete.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleUpdate = _this.handleUpdate.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.controlInput = _this.controlInput.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.state = {
      editMode: false,
      newLogo: '',
      newName: props.name,
      logoURL: "".concat(_config_config__WEBPACK_IMPORTED_MODULE_3__["backend"], "/img/tokens/").concat(_this.symbol, ".png")
    };
    return _this;
  }

  _createClass(TokenListItem, [{
    key: "handleEdit",
    value: function handleEdit(event) {
      this.setState({
        editMode: true,
        newDisplayName: this.displayName,
        newSymbol: this.symbol,
        newAddress: this.address,
        newDecimals: this.decimals,
        newLogo: ''
      });
    }
  }, {
    key: "handleDelete",
    value: function () {
      var _handleDelete = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_6___default()({
                  method: 'post',
                  url: '/backend/delete_token',
                  data: {
                    id: this.id
                  }
                });

              case 2:
                _next_routes__WEBPACK_IMPORTED_MODULE_5__["Router"].replaceRoute('/admin/dashboard/teams');

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function handleDelete() {
        return _handleDelete.apply(this, arguments);
      };
    }()
  }, {
    key: "hasSomethingChanged",
    value: function hasSomethingChanged() {
      var _this$state = this.state,
          newDisplayName = _this$state.newDisplayName,
          newSymbol = _this$state.newSymbol,
          newDecimals = _this$state.newDecimals;
      console.log(newDecimals, newSymbol, newDecimals);
      if (this.displayName !== newDisplayName) return true;
      if (this.symbol !== newSymbol) return true;
      if (this.decimals !== newDecimals) return true;
      if (this.state.newLogo) return true;
      return false;
    }
  }, {
    key: "handleUpdate",
    value: function () {
      var _handleUpdate = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var data, logo;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!this.hasSomethingChanged()) {
                  _context2.next = 10;
                  break;
                }

                data = new FormData();
                data.append('id', this.id);
                data.append('displayName', this.state.newDisplayName);
                data.append('symbol', this.state.newSymbol);
                data.append('address', this.state.newAddress);
                data.append('decimals', this.state.newDecimals);
                data.append('logo', this.state.newLogo);
                _context2.next = 10;
                return axios__WEBPACK_IMPORTED_MODULE_6___default()({
                  method: 'post',
                  url: '/backend/update_token',
                  data: data,
                  config: {
                    headers: {
                      'Content-Type': 'multipart/form-data'
                    }
                  }
                });

              case 10:
                logo = this.state.newLogo.preview || this.state.logoURL;
                this.setState({
                  editMode: false,
                  logoURL: logo
                });
                _next_routes__WEBPACK_IMPORTED_MODULE_5__["Router"].replaceRoute('/admin/dashboard/tokens');

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function handleUpdate() {
        return _handleUpdate.apply(this, arguments);
      };
    }()
  }, {
    key: "undo",
    value: function undo() {
      this.setState({
        editMode: false
      });
      this.tokenNameElement.textContent = this.displayName;
      this.tokenSymbolElement.textContent = this.symbol;
      this.tokenDecimalsElement = this.decimals;
    }
  }, {
    key: "onDrop",
    value: function onDrop(accepted, rejected) {
      var _accepted = _slicedToArray(accepted, 1),
          file = _accepted[0];

      this.setState({
        newLogo: file
      });
    }
  }, {
    key: "controlInput",
    value: function controlInput(event) {
      switch (event.target) {
        case this.tokenNameElement:
          {
            this.setState({
              newDisplayName: event.target.textContent
            });
            return;
          }

        case this.tokenSymbolElement:
          {
            this.setState({
              newSymbol: event.target.textContent
            });
            return;
          }

        case this.tokenAddressElement:
          {
            this.setState({
              newAddress: event.target.textContent
            });
            return;
          }

        case this.tokenDecimalsElement:
          {
            this.setState({
              newDecimals: event.target.textContent
            });
            return;
          }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].Row, {
        key: this.id,
        active: this.state.editMode
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].Cell, null, this.id), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].Cell, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        onInput: function onInput(e) {
          return _this2.controlInput(e);
        },
        spellCheck: "false",
        ref: function ref(div) {
          return _this2.tokenNameElement = div;
        },
        suppressContentEditableWarning: true,
        contentEditable: "".concat(this.state.editMode)
      }, "".concat(this.displayName))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].Cell, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        onInput: function onInput(e) {
          return _this2.controlInput(e);
        },
        spellCheck: "false",
        ref: function ref(div) {
          return _this2.tokenSymbolElement = div;
        },
        suppressContentEditableWarning: true,
        contentEditable: "".concat(this.state.editMode)
      }, "".concat(this.symbol))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].Cell, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "".concat(this.address))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].Cell, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        onInput: function onInput(e) {
          return _this2.controlInput(e);
        },
        spellCheck: "false",
        ref: function ref(div) {
          return _this2.tokenDecimalsElement = div;
        },
        suppressContentEditableWarning: true,
        contentEditable: "".concat(this.state.editMode)
      }, "".concat(this.decimals))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].Cell, null, this.renderImage(this.state.newLogo)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].Cell, null, this.renderIcons(this.state.editMode)));
    }
  }, {
    key: "renderImage",
    value: function renderImage(newLogo) {
      var _this3 = this;

      if (this.state.editMode) {
        if (this.state.newLogo) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_dropzone__WEBPACK_IMPORTED_MODULE_4__["default"], {
            style: {},
            accept: "image/png",
            onDrop: function onDrop(accepted, rejected) {
              return _this3.onDrop(accepted, rejected);
            }
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Image"], {
            src: newLogo.preview,
            size: "mini",
            verticalAlign: "middle"
          }));
        } else {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_dropzone__WEBPACK_IMPORTED_MODULE_4__["default"], {
            style: {},
            accept: "image/png",
            onDrop: function onDrop(accepted, rejected) {
              return _this3.onDrop(accepted, rejected);
            }
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Image"], {
            src: this.state.logoURL,
            size: "mini",
            verticalAlign: "middle"
          }));
        }
      }

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Image"], {
        src: this.state.logoURL,
        size: "mini",
        verticalAlign: "middle"
      });
    }
  }, {
    key: "renderIcons",
    value: function renderIcons(editMode) {
      var _this4 = this;

      if (editMode) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Popup"], {
          on: "click",
          trigger: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
            className: "table-icon",
            circular: true,
            name: "check"
          })
        }, "Are you sure?", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          onClick: function onClick(e) {
            return _this4.handleUpdate();
          },
          color: "green",
          size: "mini",
          fluid: true,
          compact: true
        }, "UPDATE")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
          className: "table-icon",
          circular: true,
          name: "chevron right",
          onClick: function onClick(e) {
            return _this4.undo();
          }
        }));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
          className: "table-icon",
          circular: true,
          name: "edit",
          onClick: function onClick(e) {
            return _this4.handleEdit(e);
          }
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Popup"], {
          on: "click",
          trigger: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
            className: "table-icon",
            circular: true,
            name: "delete"
          })
        }, "Are you sure?", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          color: "red",
          size: "mini",
          onClick: function onClick(e) {
            return _this4.handleDelete();
          },
          fluid: true,
          compact: true
        }, "DELETE")));
      }
    }
  }]);

  return TokenListItem;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (TokenListItem);

/***/ })

})
//# sourceMappingURL=tokens.js.8d8400daa970c556483a.hot-update.js.map