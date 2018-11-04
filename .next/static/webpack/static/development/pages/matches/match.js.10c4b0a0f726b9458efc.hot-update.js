webpackHotUpdate("static\\development\\pages\\matches\\match.js",{

/***/ "./components/Layout/MenuUser.js":
/*!***************************************!*\
  !*** ./components/Layout/MenuUser.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var ethereum_blockies_base64__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ethereum-blockies-base64 */ "./node_modules/ethereum-blockies-base64/dist/main.js");
/* harmony import */ var ethereum_blockies_base64__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ethereum_blockies_base64__WEBPACK_IMPORTED_MODULE_3__);


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





var MenuUser =
/*#__PURE__*/
function (_Component) {
  _inherits(MenuUser, _Component);

  function MenuUser(props) {
    var _this;

    _classCallCheck(this, MenuUser);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MenuUser).call(this, props));
    _this.handleSingOut = _this.handleSignOut.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.state = {
      avatarClassNameModifier: ''
    };
    return _this;
  }

  _createClass(MenuUser, [{
    key: "handleSignOut",
    value: function () {
      var _handleSignOut = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.setState({
                  avatarClassNameModifier: 'avatar-exit'
                });
                _context.next = 3;
                return axios.get('/logout');

              case 3:
                Router.push('/');

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function handleSignOut() {
        return _handleSignOut.apply(this, arguments);
      };
    }()
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          user = _this$props.user,
          avatarClassNameModifier = _this$props.avatarClassNameModifier;
      if (this.state.avatarClassNameModifier) avatarClassNameModifier = this.state.avatarClassNameModifier;
      var username = user.username;
      var usernameStyle = {
        color: 'white'
      };
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
        className: "menu-right"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Row, {
        verticalAlign: "middle"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
        width: 4
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: ethereum_blockies_base64__WEBPACK_IMPORTED_MODULE_3___default()(username),
        className: "user-avatar undragable ".concat(avatarClassNameModifier)
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
        width: 1
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
        width: 10,
        className: "user-column-right"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(GridRow, {
        style: {
          padding: '0'
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Header"], {
        size: "tiny",
        style: usernameStyle
      }, username))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(GridRow, {
        style: {
          padding: '0'
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(GridColumn, {
        width: "3",
        style: {
          padding: '0'
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        size: "small",
        onClick: function onClick(e) {
          return _this2.handleSignOut();
        },
        icon: "power off",
        className: "user-column-right-button orange-button-dark"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(GridColumn, {
        width: "1",
        style: {
          padding: '0.5em'
        }
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(GridColumn, {
        style: {
          padding: '0'
        },
        width: "3"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        size: "small",
        icon: "setting",
        className: "user-column-right-button orange-button-dark"
      })))))));
    }
  }]);

  return MenuUser;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (MenuUser);

/***/ }),

/***/ "./node_modules/ethereum-blockies-base64/dist/main.js":
/*!************************************************************!*\
  !*** ./node_modules/ethereum-blockies-base64/dist/main.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	const pnglib = __webpack_require__(1);
	const hsl2rgb = __webpack_require__(2);

	// The random number is a js implementation of the Xorshift PRNG
	const randseed = new Array(4); // Xorshift: [x, y, z, w] 32 bit values

	function seedrand(seed) {
	  for (let i = 0; i < randseed.length; i++) {
	    randseed[i] = 0;
	  }
	  for (let i = 0; i < seed.length; i++) {
	    randseed[i % 4] = (randseed[i % 4] << 5) - randseed[i % 4] + seed.charCodeAt(i);
	  }
	}

	function rand() {
	  // based on Java's String.hashCode(), expanded to 4 32bit values
	  const t = randseed[0] ^ (randseed[0] << 11);

	  randseed[0] = randseed[1];
	  randseed[1] = randseed[2];
	  randseed[2] = randseed[3];
	  randseed[3] = randseed[3] ^ (randseed[3] >> 19) ^ t ^ (t >> 8);

	  return (randseed[3] >>> 0) / (1 << 31 >>> 0);
	}

	function createColor() {
	  //saturation is the whole color spectrum
	  const h = Math.floor(rand() * 360);
	  //saturation goes from 40 to 100, it avoids greyish colors
	  const s = rand() * 60 + 40;
	  //lightness can be anything from 0 to 100, but probabilities are a bell curve around 50%
	  const l = (rand() + rand() + rand() + rand()) * 25 ;

	  return [h / 360, s / 100, l / 100];
	}

	function createImageData(size) {
	  const width = size; // Only support square icons for now
	  const height = size;

	  const dataWidth = Math.ceil(width / 2);
	  const mirrorWidth = width - dataWidth;

	  const data = [];
	  for (let y = 0; y < height; y++) {
	    let row = [];
	    for (let x = 0; x < dataWidth; x++) {
	      // this makes foreground and background color to have a 43% (1/2.3) probability
	      // spot color has 13% chance
	      row[x] = Math.floor(rand() * 2.3);
	    }
	    const r = row.slice(0, mirrorWidth).reverse();
	    row = row.concat(r);

	    for (let i = 0; i < row.length; i++) {
	      data.push(row[i]);
	    }
	  }

	  return data;
	}

	// Modifies the passed PNG to fill in a specified rectangle
	function fillRect(png, x, y, w, h, color) {
	  for(let i = 0; i < w; i++) {
	    for (let j = 0; j < h; j++) {
	      png.buffer[png.index(x + i, y + j)] = color;
	    }
	  }
	}

	function buildOpts(opts) {
	  if (!opts.seed) {
	    throw new Error('No seed provided');
	  }

	  seedrand(opts.seed);

	  return Object.assign({
	    size: 8,
	    scale: 16,
	    color: createColor(),
	    bgcolor: createColor(),
	    spotcolor: createColor(),
	  }, opts)
	}

	function makeBlockie(address) {
	  const opts = buildOpts({ seed: address.toLowerCase() });

	  const imageData = createImageData(opts.size);
	  const width = Math.sqrt(imageData.length);

	  const p = new pnglib(opts.size * opts.scale, opts.size * opts.scale, 3);
	  const bgcolor = p.color(...hsl2rgb(...opts.bgcolor));
	  const color = p.color(...hsl2rgb(...opts.color));
	  const spotcolor = p.color(...hsl2rgb(...opts.spotcolor));

	  for (let i = 0; i < imageData.length; i++) {
	    const row = Math.floor(i / width);
	    const col = i % width;
	    // if data is 0, leave the background
	    if (imageData[i]) {
	      // if data is 2, choose spot color, if 1 choose foreground
	      const pngColor = imageData[i] == 1 ? color : spotcolor;
	      fillRect(p, col * opts.scale, row * opts.scale, opts.scale, opts.scale, pngColor);
	    }
	  }
	  return `data:image/png;base64,${p.getBase64()}`;
	}

	module.exports = makeBlockie;


/***/ },
/* 1 */
/***/ function(module, exports) {

	/**
	 * A handy class to calculate color values.
	 *
	 * @version 1.0
	 * @author Robert Eisele <robert@xarg.org>
	 * @copyright Copyright (c) 2010, Robert Eisele
	 * @link http://www.xarg.org/2010/03/generate-client-side-png-files-using-javascript/
	 * @license http://www.opensource.org/licenses/bsd-license.php BSD License
	 *
	 */

	// Modified by George Chan <gchan@21cn.com>

	// Further modified by Will O'B <@wbobeirne> to make it
	// UglifyJS and "use strict"; friendly

	module.exports = function(width,height,depth) {


	    // helper functions for that ctx
	    function write(buffer, offs) {
	        for (var i = 2; i < arguments.length; i++) {
	            for (var j = 0; j < arguments[i].length; j++) {
	                buffer[offs++] = arguments[i].charAt(j);
	            }
	        }
	    }

	    function byte2(w) {
	        return String.fromCharCode((w >> 8) & 255, w & 255);
	    }

	    function byte4(w) {
	        return String.fromCharCode((w >> 24) & 255, (w >> 16) & 255, (w >> 8) & 255, w & 255);
	    }

	    function byte2lsb(w) {
	        return String.fromCharCode(w & 255, (w >> 8) & 255);
	    }

	    this.width   = width;
	    this.height  = height;
	    this.depth   = depth;

	    // pixel data and row filter identifier size
	    this.pix_size = height * (width + 1);

	    // deflate header, pix_size, block headers, adler32 checksum
	    this.data_size = 2 + this.pix_size + 5 * Math.floor((0xfffe + this.pix_size) / 0xffff) + 4;

	    // offsets and sizes of Png chunks
	    this.ihdr_offs = 0; // IHDR offset and size
	    this.ihdr_size = 4 + 4 + 13 + 4;
	    this.plte_offs = this.ihdr_offs + this.ihdr_size; // PLTE offset and size
	    this.plte_size = 4 + 4 + 3 * depth + 4;
	    this.trns_offs = this.plte_offs + this.plte_size; // tRNS offset and size
	    this.trns_size = 4 + 4 + depth + 4;
	    this.idat_offs = this.trns_offs + this.trns_size; // IDAT offset and size
	    this.idat_size = 4 + 4 + this.data_size + 4;
	    this.iend_offs = this.idat_offs + this.idat_size; // IEND offset and size
	    this.iend_size = 4 + 4 + 4;
	    this.buffer_size  = this.iend_offs + this.iend_size; // total PNG size

	    this.buffer  = new Array();
	    this.palette = new Object();
	    this.pindex  = 0;

	    var _crc32 = new Array();

	    // initialize buffer with zero bytes
	    for (var i = 0; i < this.buffer_size; i++) {
	        this.buffer[i] = "\x00";
	    }

	    // initialize non-zero elements
	    write(this.buffer, this.ihdr_offs, byte4(this.ihdr_size - 12), 'IHDR', byte4(width), byte4(height), "\x08\x03");
	    write(this.buffer, this.plte_offs, byte4(this.plte_size - 12), 'PLTE');
	    write(this.buffer, this.trns_offs, byte4(this.trns_size - 12), 'tRNS');
	    write(this.buffer, this.idat_offs, byte4(this.idat_size - 12), 'IDAT');
	    write(this.buffer, this.iend_offs, byte4(this.iend_size - 12), 'IEND');

	    // initialize deflate header
	    var header = ((8 + (7 << 4)) << 8) | (3 << 6);
	    header+= 31 - (header % 31);

	    write(this.buffer, this.idat_offs + 8, byte2(header));

	    // initialize deflate block headers
	    for (var i = 0; (i << 16) - 1 < this.pix_size; i++) {
	        var size, bits;
	        if (i + 0xffff < this.pix_size) {
	            size = 0xffff;
	            bits = "\x00";
	        } else {
	            size = this.pix_size - (i << 16) - i;
	            bits = "\x01";
	        }
	        write(this.buffer, this.idat_offs + 8 + 2 + (i << 16) + (i << 2), bits, byte2lsb(size), byte2lsb(~size));
	    }

	    /* Create crc32 lookup table */
	    for (var i = 0; i < 256; i++) {
	        var c = i;
	        for (var j = 0; j < 8; j++) {
	            if (c & 1) {
	                c = -306674912 ^ ((c >> 1) & 0x7fffffff);
	            } else {
	                c = (c >> 1) & 0x7fffffff;
	            }
	        }
	        _crc32[i] = c;
	    }

	    // compute the index into a png for a given pixel
	    this.index = function(x,y) {
	        var i = y * (this.width + 1) + x + 1;
	        var j = this.idat_offs + 8 + 2 + 5 * Math.floor((i / 0xffff) + 1) + i;
	        return j;
	    }

	    // convert a color and build up the palette
	    this.color = function(red, green, blue, alpha) {

	        alpha = alpha >= 0 ? alpha : 255;
	        var color = (((((alpha << 8) | red) << 8) | green) << 8) | blue;

	        if (typeof this.palette[color] == "undefined") {
	            if (this.pindex == this.depth) return "\x00";

	            var ndx = this.plte_offs + 8 + 3 * this.pindex;

	            this.buffer[ndx + 0] = String.fromCharCode(red);
	            this.buffer[ndx + 1] = String.fromCharCode(green);
	            this.buffer[ndx + 2] = String.fromCharCode(blue);
	            this.buffer[this.trns_offs+8+this.pindex] = String.fromCharCode(alpha);

	            this.palette[color] = String.fromCharCode(this.pindex++);
	        }
	        return this.palette[color];
	    }

	    // output a PNG string, Base64 encoded
	    this.getBase64 = function() {

	        var s = this.getDump();

	        var ch = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
	        var c1, c2, c3, e1, e2, e3, e4;
	        var l = s.length;
	        var i = 0;
	        var r = "";

	        do {
	            c1 = s.charCodeAt(i);
	            e1 = c1 >> 2;
	            c2 = s.charCodeAt(i+1);
	            e2 = ((c1 & 3) << 4) | (c2 >> 4);
	            c3 = s.charCodeAt(i+2);
	            if (l < i+2) { e3 = 64; } else { e3 = ((c2 & 0xf) << 2) | (c3 >> 6); }
	            if (l < i+3) { e4 = 64; } else { e4 = c3 & 0x3f; }
	            r+= ch.charAt(e1) + ch.charAt(e2) + ch.charAt(e3) + ch.charAt(e4);
	        } while ((i+= 3) < l);
	        return r;
	    }

	    // output a PNG string
	    this.getDump = function() {
	        // compute adler32 of output pixels + row filter bytes
	        var BASE = 65521; /* largest prime smaller than 65536 */
	        var NMAX = 5552; /* NMAX is the largest n such that 255n(n+1)/2 + (n+1)(BASE-1) <= 2^32-1 */
	        var s1 = 1;
	        var s2 = 0;
	        var n = NMAX;

	        for (var y = 0; y < this.height; y++) {
	            for (var x = -1; x < this.width; x++) {
	                s1+= this.buffer[this.index(x, y)].charCodeAt(0);
	                s2+= s1;
	                if ((n-= 1) == 0) {
	                    s1%= BASE;
	                    s2%= BASE;
	                    n = NMAX;
	                }
	            }
	        }
	        s1%= BASE;
	        s2%= BASE;
	        write(this.buffer, this.idat_offs + this.idat_size - 8, byte4((s2 << 16) | s1));

	        // compute crc32 of the PNG chunks
	        function crc32(png, offs, size) {
	            var crc = -1;
	            for (var i = 4; i < size-4; i += 1) {
	                crc = _crc32[(crc ^ png[offs+i].charCodeAt(0)) & 0xff] ^ ((crc >> 8) & 0x00ffffff);
	            }
	            write(png, offs+size-4, byte4(crc ^ -1));
	        }

	        crc32(this.buffer, this.ihdr_offs, this.ihdr_size);
	        crc32(this.buffer, this.plte_offs, this.plte_size);
	        crc32(this.buffer, this.trns_offs, this.trns_size);
	        crc32(this.buffer, this.idat_offs, this.idat_size);
	        crc32(this.buffer, this.iend_offs, this.iend_size);

	        // convert PNG to string
	        return "\x89PNG\r\n\x1a\n" + this.buffer.join('');
	    }
	};


/***/ },
/* 2 */
/***/ function(module, exports) {

	// https://stackoverflow.com/questions/2353211/hsl-to-rgb-color-conversion
	/**
	 * Converts an HSL color value to RGB. Conversion formula
	 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
	 * Assumes h, s, and l are contained in the set [0, 1] and
	 * returns r, g, and b in the set [0, 255].
	 *
	 * @param   {number}  h       The hue
	 * @param   {number}  s       The saturation
	 * @param   {number}  l       The lightness
	 * @return  {Array}           The RGB representation
	 */

	 function hue2rgb(p, q, t) {
	   if(t < 0) t += 1;
	   if(t > 1) t -= 1;
	   if(t < 1/6) return p + (q - p) * 6 * t;
	   if(t < 1/2) return q;
	   if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
	   return p;
	 }

	function hsl2rgb(h, s, l){
	  let r, g, b;

	  if (s == 0) {
	    r = g = b = l; // achromatic
	  } else {
	    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
	    const p = 2 * l - q;
	    r = hue2rgb(p, q, h + 1/3);
	    g = hue2rgb(p, q, h);
	    b = hue2rgb(p, q, h - 1/3);
	  }

	  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255), 255];
	}

	module.exports = hsl2rgb;


/***/ }
/******/ ])
});
;

/***/ })

})
//# sourceMappingURL=match.js.10c4b0a0f726b9458efc.hot-update.js.map