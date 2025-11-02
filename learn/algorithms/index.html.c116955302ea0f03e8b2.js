/******/ (function(modules) { // webpackBootstrap
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
/***/ (function(module, exports, __webpack_require__) {

	var id = 100;
	          function renderHere(element) {
	            ReactDOM.render(element, document.getElementById('r' + (++id)));
	          }(function () {
	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _coreCodeTabs = __webpack_require__(1);

	var _coreCodeTabs2 = _interopRequireDefault(_coreCodeTabs);

	var _corePrism = __webpack_require__(55);

	var _corePrism2 = _interopRequireDefault(_corePrism);

	var _coreSchemasConnect = __webpack_require__(56);

	var _coreSchemasConnect2 = _interopRequireDefault(_coreSchemasConnect);

	renderHere(React.createElement(_coreCodeTabs2['default'], { schema: _coreSchemasConnect2['default'] }));
	}());
	(function () {
	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _coreCodeTabs = __webpack_require__(1);

	var _coreCodeTabs2 = _interopRequireDefault(_coreCodeTabs);

	var _corePrism = __webpack_require__(55);

	var _corePrism2 = _interopRequireDefault(_corePrism);

	var _coreSchemasHandleMessages = __webpack_require__(57);

	var _coreSchemasHandleMessages2 = _interopRequireDefault(_coreSchemasHandleMessages);

	renderHere(React.createElement(_coreCodeTabs2['default'], { schema: _coreSchemasHandleMessages2['default'] }));
	}());
	(function () {
	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _coreCodeTabs = __webpack_require__(1);

	var _coreCodeTabs2 = _interopRequireDefault(_coreCodeTabs);

	var _corePrism = __webpack_require__(55);

	var _corePrism2 = _interopRequireDefault(_corePrism);

	var _coreSchemasHandleMessagesInitialize = __webpack_require__(58);

	var _coreSchemasHandleMessagesInitialize2 = _interopRequireDefault(_coreSchemasHandleMessagesInitialize);

	renderHere(React.createElement(_coreCodeTabs2['default'], { schema: _coreSchemasHandleMessagesInitialize2['default'] }));
	}());
	(function () {
	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _coreCodeTabs = __webpack_require__(1);

	var _coreCodeTabs2 = _interopRequireDefault(_coreCodeTabs);

	var _corePrism = __webpack_require__(55);

	var _corePrism2 = _interopRequireDefault(_corePrism);

	var _coreSchemasHandleMessagesStart = __webpack_require__(59);

	var _coreSchemasHandleMessagesStart2 = _interopRequireDefault(_coreSchemasHandleMessagesStart);

	renderHere(React.createElement(_coreCodeTabs2['default'], { schema: _coreSchemasHandleMessagesStart2['default'] }));
	}());
	(function () {
	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _coreCodeTabs = __webpack_require__(1);

	var _coreCodeTabs2 = _interopRequireDefault(_coreCodeTabs);

	var _corePrism = __webpack_require__(55);

	var _corePrism2 = _interopRequireDefault(_corePrism);

	var _coreSchemasHandleMessagesStop = __webpack_require__(60);

	var _coreSchemasHandleMessagesStop2 = _interopRequireDefault(_coreSchemasHandleMessagesStop);

	renderHere(React.createElement(_coreCodeTabs2['default'], { schema: _coreSchemasHandleMessagesStop2['default'] }));
	}());
	(function () {
	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _coreCodeTabs = __webpack_require__(1);

	var _coreCodeTabs2 = _interopRequireDefault(_coreCodeTabs);

	var _corePrism = __webpack_require__(55);

	var _corePrism2 = _interopRequireDefault(_corePrism);

	var _coreSchemasReconnect = __webpack_require__(61);

	var _coreSchemasReconnect2 = _interopRequireDefault(_coreSchemasReconnect);

	renderHere(React.createElement(_coreCodeTabs2['default'], { schema: _coreSchemasReconnect2['default'] }));
	}());
	(function () {
	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _coreCodeTabs = __webpack_require__(1);

	var _coreCodeTabs2 = _interopRequireDefault(_coreCodeTabs);

	var _corePrism = __webpack_require__(55);

	var _corePrism2 = _interopRequireDefault(_corePrism);

	var _coreSchemasHandleErrors = __webpack_require__(62);

	var _coreSchemasHandleErrors2 = _interopRequireDefault(_coreSchemasHandleErrors);

	renderHere(React.createElement(_coreCodeTabs2['default'], { schema: _coreSchemasHandleErrors2['default'] }));
	}());
	(function () {
	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _coreCodeTabs = __webpack_require__(1);

	var _coreCodeTabs2 = _interopRequireDefault(_coreCodeTabs);

	var _corePrism = __webpack_require__(55);

	var _corePrism2 = _interopRequireDefault(_corePrism);

	var _coreSchemasSendEvent = __webpack_require__(63);

	var _coreSchemasSendEvent2 = _interopRequireDefault(_coreSchemasSendEvent);

	renderHere(React.createElement(_coreCodeTabs2['default'], { schema: _coreSchemasSendEvent2['default'] }));
	}());


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(2)['default'];

	var _inherits = __webpack_require__(18)['default'];

	var _createClass = __webpack_require__(27)['default'];

	var _classCallCheck = __webpack_require__(30)['default'];

	var _interopRequireDefault = __webpack_require__(31)['default'];

	var _react = __webpack_require__(32);

	var _react2 = _interopRequireDefault(_react);

	var _reactResponsiveTabs = __webpack_require__(33);

	var _reactResponsiveTabs2 = _interopRequireDefault(_reactResponsiveTabs);

	module.exports = (function (_React$Component) {
	  _inherits(CodeTabs, _React$Component);

	  function CodeTabs(props) {
	    _classCallCheck(this, CodeTabs);

	    _get(Object.getPrototypeOf(CodeTabs.prototype), 'constructor', this).call(this, props);

	    this.state = {
	      items: this._getTabs(),
	      selectedTabKey: 0
	    };
	  }

	  _createClass(CodeTabs, [{
	    key: 'render',
	    value: function render() {
	      var _state = this.state;
	      var items = _state.items;
	      var selectedTabKey = _state.selectedTabKey;

	      return _react2['default'].createElement(_reactResponsiveTabs2['default'], { transform: false, items: items, showInkBar: true, selectedTabKey: selectedTabKey });
	    }
	  }, {
	    key: '_getTabs',
	    value: function _getTabs() {
	      return this.props.schema.map(function (s, i) {
	        return {
	          key: i,
	          tabClassName: 'tab',
	          panelClassName: 'panel',
	          title: s.name,
	          getContent: function getContent() {
	            return s.content;
	          }
	        };
	      });
	    }
	  }]);

	  return CodeTabs;
	})(_react2['default'].Component);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var _Object$getOwnPropertyDescriptor = __webpack_require__(3)["default"];

	exports["default"] = function get(_x, _x2, _x3) {
	  var _again = true;

	  _function: while (_again) {
	    var object = _x,
	        property = _x2,
	        receiver = _x3;
	    _again = false;
	    if (object === null) object = Function.prototype;

	    var desc = _Object$getOwnPropertyDescriptor(object, property);

	    if (desc === undefined) {
	      var parent = Object.getPrototypeOf(object);

	      if (parent === null) {
	        return undefined;
	      } else {
	        _x = parent;
	        _x2 = property;
	        _x3 = receiver;
	        _again = true;
	        desc = parent = undefined;
	        continue _function;
	      }
	    } else if ("value" in desc) {
	      return desc.value;
	    } else {
	      var getter = desc.get;

	      if (getter === undefined) {
	        return undefined;
	      }

	      return getter.call(receiver);
	    }
	  }
	};

	exports.__esModule = true;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(4), __esModule: true };

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(5);
	__webpack_require__(6);
	module.exports = function getOwnPropertyDescriptor(it, key){
	  return $.getDesc(it, key);
	};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject = __webpack_require__(7);

	__webpack_require__(11)('getOwnPropertyDescriptor', function($getOwnPropertyDescriptor){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(8)
	  , defined = __webpack_require__(10);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(9);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(12)
	  , core    = __webpack_require__(14)
	  , fails   = __webpack_require__(17);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(13)
	  , core      = __webpack_require__(14)
	  , ctx       = __webpack_require__(15)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(16);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var _Object$create = __webpack_require__(19)["default"];

	var _Object$setPrototypeOf = __webpack_require__(21)["default"];

	exports["default"] = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }

	  subClass.prototype = _Object$create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _Object$setPrototypeOf ? _Object$setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	};

	exports.__esModule = true;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(20), __esModule: true };

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(5);
	module.exports = function create(P, D){
	  return $.create(P, D);
	};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(22), __esModule: true };

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(23);
	module.exports = __webpack_require__(14).Object.setPrototypeOf;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(12);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(24).set});

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var getDesc  = __webpack_require__(5).getDesc
	  , isObject = __webpack_require__(25)
	  , anObject = __webpack_require__(26);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(15)(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ }),
/* 25 */
/***/ (function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(25);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var _Object$defineProperty = __webpack_require__(28)["default"];

	exports["default"] = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;

	      _Object$defineProperty(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	})();

	exports.__esModule = true;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(29), __esModule: true };

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(5);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ }),
/* 30 */
/***/ (function(module, exports) {

	"use strict";

	exports["default"] = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

	exports.__esModule = true;

/***/ }),
/* 31 */
/***/ (function(module, exports) {

	"use strict";

	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};

	exports.__esModule = true;

/***/ }),
/* 32 */
/***/ (function(module, exports) {

	module.exports = React;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(32);

	var _react2 = _interopRequireDefault(_react);

	var _reactResizeDetector = __webpack_require__(34);

	var _reactResizeDetector2 = _interopRequireDefault(_reactResizeDetector);

	var _classnames = __webpack_require__(50);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _lodash = __webpack_require__(49);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _propTypes = __webpack_require__(36);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _ShowMore = __webpack_require__(51);

	var _ShowMore2 = _interopRequireDefault(_ShowMore);

	var _Tab = __webpack_require__(52);

	var _Tab2 = _interopRequireDefault(_Tab);

	var _TabPanel = __webpack_require__(53);

	var _TabPanel2 = _interopRequireDefault(_TabPanel);

	var _InkBar = __webpack_require__(54);

	var _InkBar2 = _interopRequireDefault(_InkBar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var tabPrefix = 'tab-';
	var panelPrefix = 'panel-';

	var Tabs = function (_Component) {
	  _inherits(Tabs, _Component);

	  function Tabs(props) {
	    _classCallCheck(this, Tabs);

	    var _this = _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call(this, props));

	    _this.onResize = function () {
	      if (_this.tabsWrapper) {
	        _this.setState({ blockWidth: _this.tabsWrapper.offsetWidth });
	      }
	    };

	    _this.onChangeTab = function (selectedTabKey) {
	      _this.setState({ selectedTabKey: selectedTabKey });
	      if (_this.props.onChange) {
	        _this.props.onChange(selectedTabKey);
	      }
	    };

	    _this.onFocusTab = function (focusedTabKey) {
	      return function () {
	        return _this.setState({ focusedTabKey: focusedTabKey });
	      };
	    };

	    _this.onBlurTab = function () {
	      return _this.setState({ focusedTabKey: null });
	    };

	    _this.onKeyDown = function (event) {
	      if (event.keyCode === 13 && _this.state.focusedTabKey !== null) {
	        _this.setState({ selectedTabKey: _this.state.focusedTabKey });
	      }
	    };

	    _this.setTabsDimensions = function () {
	      if (!_this.tabsWrapper) {
	        // it shouldn't happens evern. Just paranoic check
	        return;
	      }

	      // initial wrapper width calculation
	      var blockWidth = _this.tabsWrapper.offsetWidth;

	      // calculate width and offset for each tab
	      var tabsTotalWidth = 0;
	      var tabDimensions = {};
	      Object.keys(_this.tabRefs).forEach(function (key) {
	        if (_this.tabRefs[key]) {
	          var width = _this.tabRefs[key].tab.offsetWidth;
	          tabDimensions[key.replace(tabPrefix, '')] = { width: width, offset: tabsTotalWidth };
	          tabsTotalWidth += width;
	        }
	      });

	      _this.setState({ tabDimensions: tabDimensions, tabsTotalWidth: tabsTotalWidth, blockWidth: blockWidth });
	    };

	    _this.getTabs = function () {
	      var _this$props = _this.props,
	          showMore = _this$props.showMore,
	          transform = _this$props.transform,
	          transformWidth = _this$props.transformWidth,
	          items = _this$props.items,
	          allowRemove = _this$props.allowRemove,
	          removeActiveOnly = _this$props.removeActiveOnly,
	          _onRemove = _this$props.onRemove;
	      var _this$state = _this.state,
	          blockWidth = _this$state.blockWidth,
	          tabsTotalWidth = _this$state.tabsTotalWidth,
	          tabDimensions = _this$state.tabDimensions,
	          showMoreWidth = _this$state.showMoreWidth;

	      var selectedTabKey = _this.getSelectedTabKey();
	      var collapsed = blockWidth && transform && blockWidth < transformWidth;

	      var tabIndex = 0;
	      var availableWidth = blockWidth - (tabsTotalWidth > blockWidth ? showMoreWidth : 0);

	      return items.reduce(function (result, item, index) {
	        var _item$key = item.key,
	            key = _item$key === undefined ? index : _item$key,
	            title = item.title,
	            content = item.content,
	            getContent = item.getContent,
	            disabled = item.disabled,
	            tabClassName = item.tabClassName,
	            panelClassName = item.panelClassName;


	        var selected = selectedTabKey === key;
	        var payload = { tabIndex: tabIndex, collapsed: collapsed, selected: selected, disabled: disabled, key: key };
	        var tabPayload = _extends({}, payload, {
	          title: title,
	          onRemove: function onRemove(evt) {
	            if (typeof _onRemove === 'function') {
	              _onRemove(key, evt);
	            }
	          },
	          allowRemove: allowRemove && (!removeActiveOnly || selected),
	          className: tabClassName
	        });

	        var panelPayload = _extends({}, payload, {
	          content: content,
	          getContent: getContent,
	          className: panelClassName
	        });

	        var tabWidth = tabDimensions[key] ? tabDimensions[key].width : 0;

	        tabIndex += 1;

	        /* eslint-disable no-param-reassign */
	        if (
	        // don't need to `Show more` button
	        !showMore ||
	        // initial call
	        !blockWidth ||
	        // collapsed mode
	        collapsed ||
	        // all tabs are fit into the block
	        blockWidth > tabsTotalWidth ||
	        // current tab fit into the block
	        availableWidth - tabWidth > 0) {
	          result.tabsVisible.push(tabPayload);
	        } else {
	          result.tabsHidden.push(tabPayload);
	          if (selected) result.isSelectedTabHidden = true;
	        }
	        /* eslint-enable no-param-reassign */

	        result.panels[key] = panelPayload; // eslint-disable-line no-param-reassign
	        availableWidth -= tabWidth;

	        return result;
	      }, { tabsVisible: [], tabsHidden: [], panels: {}, isSelectedTabHidden: false });
	    };

	    _this.getTabProps = function (_ref) {
	      var title = _ref.title,
	          key = _ref.key,
	          selected = _ref.selected,
	          collapsed = _ref.collapsed,
	          tabIndex = _ref.tabIndex,
	          disabled = _ref.disabled,
	          className = _ref.className,
	          onRemove = _ref.onRemove,
	          allowRemove = _ref.allowRemove;
	      return {
	        selected: selected,
	        allowRemove: allowRemove,
	        children: title,
	        key: tabPrefix + key,
	        id: tabPrefix + key,
	        ref: function ref(e) {
	          return _this.tabRefs[tabPrefix + key] = e;
	        },
	        originalKey: key,
	        onClick: _this.onChangeTab,
	        onFocus: _this.onFocusTab,
	        onBlur: _this.onBlurTab,
	        onRemove: onRemove,
	        panelId: panelPrefix + key,
	        classNames: _this.getClassNamesFor('tab', {
	          selected: selected,
	          collapsed: collapsed,
	          tabIndex: tabIndex,
	          disabled: disabled,
	          className: className
	        })
	      };
	    };

	    _this.getPanelProps = function (_ref2) {
	      var key = _ref2.key,
	          content = _ref2.content,
	          getContent = _ref2.getContent,
	          className = _ref2.className;
	      return {
	        getContent: getContent,
	        children: content,
	        key: panelPrefix + key,
	        id: panelPrefix + key,
	        tabId: tabPrefix + key,
	        classNames: _this.getClassNamesFor('panel', { className: className })
	      };
	    };

	    _this.getShowMoreProps = function (isShown, isSelectedTabHidden, showMoreLabel) {
	      return {
	        onShowMoreChanged: _this.showMoreChanged,
	        isShown: isShown,
	        label: showMoreLabel,
	        hasChildSelected: isSelectedTabHidden
	      };
	    };

	    _this.getClassNamesFor = function (type, _ref3) {
	      var selected = _ref3.selected,
	          collapsed = _ref3.collapsed,
	          tabIndex = _ref3.tabIndex,
	          disabled = _ref3.disabled,
	          _ref3$className = _ref3.className,
	          className = _ref3$className === undefined ? '' : _ref3$className;

	      switch (type) {
	        case 'tab':
	          return (0, _classnames2.default)('RRT__tab', className, _this.props.tabClass, {
	            'RRT__tab--first': !tabIndex,
	            'RRT__tab--selected': selected,
	            'RRT__tab--disabled': disabled,
	            'RRT__tab--collapsed': collapsed
	          });
	        case 'panel':
	          return (0, _classnames2.default)('RRT__panel', className, _this.props.panelClass);
	        default:
	          return '';
	      }
	    };

	    _this.getSelectedTabKey = function () {
	      var items = _this.props.items;
	      var selectedTabKey = _this.state.selectedTabKey;


	      if (typeof selectedTabKey === 'undefined') {
	        if (!items[0]) {
	          return undefined;
	        }

	        return items[0].key || 0;
	      }

	      return selectedTabKey;
	    };

	    _this.showMoreChanged = function (element) {
	      if (!element) {
	        return;
	      }

	      var showMoreWidth = element.offsetWidth;
	      if (_this.state.showMoreWidth === showMoreWidth) {
	        return;
	      }

	      _this.setState({
	        showMoreWidth: showMoreWidth
	      });
	    };

	    _this.tabRefs = {};

	    _this.state = {
	      tabDimensions: {},
	      blockWidth: 0,
	      tabsTotalWidth: 0,
	      showMoreWidth: 40,
	      selectedTabKey: props.selectedTabKey,
	      focusedTabKey: null
	    };

	    _this.onResizeThrottled = (0, _lodash2.default)(_this.onResize, props.resizeThrottle, { trailing: true });
	    return _this;
	  }

	  _createClass(Tabs, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.setTabsDimensions();
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var items = this.props.items;
	      var selectedTabKey = this.state.selectedTabKey;

	      var newState = {};
	      if (items !== nextProps.items) {
	        newState.blockWidth = 0;
	      }

	      if (selectedTabKey !== nextProps.selectedTabKey) {
	        newState.selectedTabKey = nextProps.selectedTabKey;
	      }

	      if (Object.keys(newState).length) {
	        this.setState(newState);
	      }
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      var _state = this.state,
	          selectedTabKey = _state.selectedTabKey,
	          blockWidth = _state.blockWidth,
	          showMoreWidth = _state.showMoreWidth;


	      return this.props.items !== nextProps.items || nextProps.transform !== this.props.transform || nextProps.showMore !== this.props.showMore || nextProps.showInkBar !== this.props.showInkBar || nextProps.allowRemove !== this.props.allowRemove || nextProps.removeActiveOnly !== this.props.removeActiveOnly || nextState.blockWidth !== blockWidth || nextState.showMoreWidth !== showMoreWidth || nextState.selectedTabKey !== selectedTabKey;
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      if (!this.state.blockWidth) {
	        this.setTabsDimensions();
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var _props = this.props,
	          showInkBar = _props.showInkBar,
	          containerClass = _props.containerClass,
	          tabsWrapperClass = _props.tabsWrapperClass,
	          showMore = _props.showMore,
	          transform = _props.transform,
	          transformWidth = _props.transformWidth,
	          showMoreLabel = _props.showMoreLabel;
	      var _state2 = this.state,
	          tabDimensions = _state2.tabDimensions,
	          blockWidth = _state2.blockWidth;

	      var _getTabs = this.getTabs(),
	          tabsVisible = _getTabs.tabsVisible,
	          tabsHidden = _getTabs.tabsHidden,
	          panels = _getTabs.panels,
	          isSelectedTabHidden = _getTabs.isSelectedTabHidden;

	      var collapsed = blockWidth && transform && blockWidth < transformWidth;
	      var selectedTabKey = this.getSelectedTabKey();
	      var selectedTabDimensions = tabDimensions[selectedTabKey] || {};

	      var containerClasses = (0, _classnames2.default)('RRT__container', containerClass);
	      var tabsClasses = (0, _classnames2.default)('RRT__tabs', tabsWrapperClass, { RRT__accordion: collapsed });

	      return _react2.default.createElement(
	        'div',
	        { className: containerClasses, ref: function ref(e) {
	            return _this2.tabsWrapper = e;
	          }, onKeyDown: this.onKeyDown },
	        _react2.default.createElement(
	          'div',
	          { className: tabsClasses },
	          tabsVisible.reduce(function (result, tab) {
	            result.push(_react2.default.createElement(_Tab2.default, _this2.getTabProps(tab)));

	            if (collapsed && selectedTabKey === tab.key) {
	              result.push(_react2.default.createElement(_TabPanel2.default, _this2.getPanelProps(panels[tab.key])));
	            }
	            return result;
	          }, []),
	          !collapsed && _react2.default.createElement(
	            _ShowMore2.default,
	            this.getShowMoreProps(showMore, isSelectedTabHidden, showMoreLabel),
	            tabsHidden.map(function (tab) {
	              return _react2.default.createElement(_Tab2.default, _this2.getTabProps(tab));
	            })
	          )
	        ),
	        showInkBar && !collapsed && !isSelectedTabHidden && _react2.default.createElement(_InkBar2.default, { left: selectedTabDimensions.offset || 0, width: selectedTabDimensions.width || 0 }),
	        !collapsed && panels[selectedTabKey] && _react2.default.createElement(_TabPanel2.default, this.getPanelProps(panels[selectedTabKey])),
	        (showMore || transform) && _react2.default.createElement(_reactResizeDetector2.default, { handleWidth: true, onResize: this.onResizeThrottled })
	      );
	    }
	  }]);

	  return Tabs;
	}(_react.Component);

	exports.default = Tabs;


	Tabs.propTypes = {
	  /* eslint-disable react/no-unused-prop-types */
	  // list of tabs
	  items: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.object]),
	  /* eslint-enable react/no-unused-prop-types */
	  // selected tab key
	  selectedTabKey: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
	  // show 'X' and remove tab
	  allowRemove: _propTypes2.default.bool,
	  // show 'X' closing element only for active tab
	  removeActiveOnly: _propTypes2.default.bool,
	  // move tabs to the special `Show more` tab if they don't fit into a screen
	  showMore: _propTypes2.default.bool,
	  // materialUI-like rail under the selected tab
	  showInkBar: _propTypes2.default.bool,
	  // transform to the accordion on small screens
	  transform: _propTypes2.default.bool,
	  // tabs will be transformed to accodrion for screen sizes below `transformWidth`px
	  transformWidth: _propTypes2.default.number,
	  // onChange active tab callback
	  onChange: _propTypes2.default.func,
	  // onRemove callback
	  onRemove: _propTypes2.default.func,
	  // frequency of onResize recalculation fires
	  resizeThrottle: _propTypes2.default.number,
	  // classnames
	  containerClass: _propTypes2.default.string,
	  tabsWrapperClass: _propTypes2.default.string,
	  tabClass: _propTypes2.default.string,
	  panelClass: _propTypes2.default.string,
	  // labels
	  showMoreLabel: _propTypes2.default.string
	};

	Tabs.defaultProps = {
	  items: [],
	  selectedTabKey: undefined,
	  showMore: true,
	  showInkBar: false,
	  allowRemove: false,
	  removeActiveOnly: false,
	  transform: true,
	  transformWidth: 800,
	  resizeThrottle: 100,
	  containerClass: undefined,
	  tabsWrapperClass: undefined,
	  tabClass: undefined,
	  panelClass: undefined,
	  showMoreLabel: '...',
	  onChange: function onChange() {
	    return null;
	  },
	  onRemove: function onRemove() {
	    return null;
	  }
	};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ResizeDetector = __webpack_require__(35);

	var _ResizeDetector2 = _interopRequireDefault(_ResizeDetector);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _ResizeDetector2.default;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(32);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(36);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _resizeObserverPolyfill = __webpack_require__(47);

	var _resizeObserverPolyfill2 = _interopRequireDefault(_resizeObserverPolyfill);

	var _lodash = __webpack_require__(48);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _lodash3 = __webpack_require__(49);

	var _lodash4 = _interopRequireDefault(_lodash3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var listMode = { debounce: _lodash2.default, throttle: _lodash4.default };

	var styles = {
	  position: 'absolute',
	  width: 0,
	  height: 0,
	  visibility: 'hidden',
	  display: 'none'
	};

	var ResizeDetector = function (_PureComponent) {
	  _inherits(ResizeDetector, _PureComponent);

	  function ResizeDetector(props) {
	    _classCallCheck(this, ResizeDetector);

	    var _this = _possibleConstructorReturn(this, (ResizeDetector.__proto__ || Object.getPrototypeOf(ResizeDetector)).call(this, props));

	    _this.createResizeObserver = function (entries) {
	      var _this$props = _this.props,
	          handleWidth = _this$props.handleWidth,
	          handleHeight = _this$props.handleHeight,
	          onResize = _this$props.onResize;

	      entries.forEach(function (entry) {
	        var _entry$contentRect = entry.contentRect,
	            width = _entry$contentRect.width,
	            height = _entry$contentRect.height;

	        var notifyWidth = handleWidth && _this.width !== width;
	        var notifyHeight = handleHeight && _this.height !== height;
	        if (!_this.skipOnMount && (notifyWidth || notifyHeight)) {
	          onResize(width, height);
	        }
	        _this.width = width;
	        _this.height = height;
	        _this.skipOnMount = false;
	      });
	    };

	    var skipOnMount = props.skipOnMount,
	        refreshMode = props.refreshMode,
	        refreshRate = props.refreshRate;


	    _this.width = undefined;
	    _this.height = undefined;
	    _this.skipOnMount = skipOnMount;

	    var resizeObserver = listMode[refreshMode] && listMode[refreshMode](_this.createResizeObserver, refreshRate) || _this.createResizeObserver;

	    _this.ro = new _resizeObserverPolyfill2.default(resizeObserver);
	    return _this;
	  }

	  _createClass(ResizeDetector, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var resizableElementId = this.props.resizableElementId;

	      var resizableElement = resizableElementId ? document.getElementById(resizableElementId) : this.el.parentElement;
	      this.ro.observe(resizableElement);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      var resizableElementId = this.props.resizableElementId;

	      var resizableElement = resizableElementId ? document.getElementById(resizableElementId) : this.el.parentElement;
	      this.ro.unobserve(resizableElement);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      return _react2.default.createElement('div', {
	        style: styles,
	        ref: function ref(el) {
	          _this2.el = el;
	        }
	      });
	    }
	  }]);

	  return ResizeDetector;
	}(_react.PureComponent);

	exports.default = ResizeDetector;


	ResizeDetector.propTypes = {
	  handleWidth: _propTypes2.default.bool,
	  handleHeight: _propTypes2.default.bool,
	  skipOnMount: _propTypes2.default.bool,
	  refreshRate: _propTypes2.default.number,
	  refreshMode: _propTypes2.default.string,
	  resizableElementId: _propTypes2.default.string,
	  onResize: _propTypes2.default.func
	};

	ResizeDetector.defaultProps = {
	  handleWidth: false,
	  handleHeight: false,
	  skipOnMount: false,
	  refreshRate: 1000,
	  refreshMode: undefined,
	  resizableElementId: '',
	  onResize: function onResize(e) {
	    return e;
	  }
	};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	if (process.env.NODE_ENV !== 'production') {
	  var ReactIs = __webpack_require__(38);

	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  module.exports = __webpack_require__(41)(ReactIs.isElement, throwOnDirectAccess);
	} else {
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = __webpack_require__(46)();
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(37)))

/***/ }),
/* 37 */
/***/ (function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;

	process.listeners = function (name) { return [] }

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	if (process.env.NODE_ENV === 'production') {
	  module.exports = __webpack_require__(39);
	} else {
	  module.exports = __webpack_require__(40);
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(37)))

/***/ }),
/* 39 */
/***/ (function(module, exports) {

	/** @license React v16.13.1
	 * react-is.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
	Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
	function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;exports.Fragment=e;exports.Lazy=t;exports.Memo=r;exports.Portal=d;
	exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;exports.isAsyncMode=function(a){return A(a)||z(a)===l};exports.isConcurrentMode=A;exports.isContextConsumer=function(a){return z(a)===k};exports.isContextProvider=function(a){return z(a)===h};exports.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return z(a)===n};exports.isFragment=function(a){return z(a)===e};exports.isLazy=function(a){return z(a)===t};
	exports.isMemo=function(a){return z(a)===r};exports.isPortal=function(a){return z(a)===d};exports.isProfiler=function(a){return z(a)===g};exports.isStrictMode=function(a){return z(a)===f};exports.isSuspense=function(a){return z(a)===p};
	exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};exports.typeOf=z;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/** @license React v16.13.1
	 * react-is.development.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';



	if (process.env.NODE_ENV !== "production") {
	  (function() {
	'use strict';

	// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.
	var hasSymbol = typeof Symbol === 'function' && Symbol.for;
	var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
	var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
	var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
	var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
	var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
	var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
	var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
	// (unstable) APIs that have been removed. Can we remove the symbols?

	var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
	var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
	var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
	var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
	var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
	var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
	var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
	var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
	var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
	var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
	var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

	function isValidElementType(type) {
	  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
	  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
	}

	function typeOf(object) {
	  if (typeof object === 'object' && object !== null) {
	    var $$typeof = object.$$typeof;

	    switch ($$typeof) {
	      case REACT_ELEMENT_TYPE:
	        var type = object.type;

	        switch (type) {
	          case REACT_ASYNC_MODE_TYPE:
	          case REACT_CONCURRENT_MODE_TYPE:
	          case REACT_FRAGMENT_TYPE:
	          case REACT_PROFILER_TYPE:
	          case REACT_STRICT_MODE_TYPE:
	          case REACT_SUSPENSE_TYPE:
	            return type;

	          default:
	            var $$typeofType = type && type.$$typeof;

	            switch ($$typeofType) {
	              case REACT_CONTEXT_TYPE:
	              case REACT_FORWARD_REF_TYPE:
	              case REACT_LAZY_TYPE:
	              case REACT_MEMO_TYPE:
	              case REACT_PROVIDER_TYPE:
	                return $$typeofType;

	              default:
	                return $$typeof;
	            }

	        }

	      case REACT_PORTAL_TYPE:
	        return $$typeof;
	    }
	  }

	  return undefined;
	} // AsyncMode is deprecated along with isAsyncMode

	var AsyncMode = REACT_ASYNC_MODE_TYPE;
	var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
	var ContextConsumer = REACT_CONTEXT_TYPE;
	var ContextProvider = REACT_PROVIDER_TYPE;
	var Element = REACT_ELEMENT_TYPE;
	var ForwardRef = REACT_FORWARD_REF_TYPE;
	var Fragment = REACT_FRAGMENT_TYPE;
	var Lazy = REACT_LAZY_TYPE;
	var Memo = REACT_MEMO_TYPE;
	var Portal = REACT_PORTAL_TYPE;
	var Profiler = REACT_PROFILER_TYPE;
	var StrictMode = REACT_STRICT_MODE_TYPE;
	var Suspense = REACT_SUSPENSE_TYPE;
	var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

	function isAsyncMode(object) {
	  {
	    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
	      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

	      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
	    }
	  }

	  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
	}
	function isConcurrentMode(object) {
	  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
	}
	function isContextConsumer(object) {
	  return typeOf(object) === REACT_CONTEXT_TYPE;
	}
	function isContextProvider(object) {
	  return typeOf(object) === REACT_PROVIDER_TYPE;
	}
	function isElement(object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	}
	function isForwardRef(object) {
	  return typeOf(object) === REACT_FORWARD_REF_TYPE;
	}
	function isFragment(object) {
	  return typeOf(object) === REACT_FRAGMENT_TYPE;
	}
	function isLazy(object) {
	  return typeOf(object) === REACT_LAZY_TYPE;
	}
	function isMemo(object) {
	  return typeOf(object) === REACT_MEMO_TYPE;
	}
	function isPortal(object) {
	  return typeOf(object) === REACT_PORTAL_TYPE;
	}
	function isProfiler(object) {
	  return typeOf(object) === REACT_PROFILER_TYPE;
	}
	function isStrictMode(object) {
	  return typeOf(object) === REACT_STRICT_MODE_TYPE;
	}
	function isSuspense(object) {
	  return typeOf(object) === REACT_SUSPENSE_TYPE;
	}

	exports.AsyncMode = AsyncMode;
	exports.ConcurrentMode = ConcurrentMode;
	exports.ContextConsumer = ContextConsumer;
	exports.ContextProvider = ContextProvider;
	exports.Element = Element;
	exports.ForwardRef = ForwardRef;
	exports.Fragment = Fragment;
	exports.Lazy = Lazy;
	exports.Memo = Memo;
	exports.Portal = Portal;
	exports.Profiler = Profiler;
	exports.StrictMode = StrictMode;
	exports.Suspense = Suspense;
	exports.isAsyncMode = isAsyncMode;
	exports.isConcurrentMode = isConcurrentMode;
	exports.isContextConsumer = isContextConsumer;
	exports.isContextProvider = isContextProvider;
	exports.isElement = isElement;
	exports.isForwardRef = isForwardRef;
	exports.isFragment = isFragment;
	exports.isLazy = isLazy;
	exports.isMemo = isMemo;
	exports.isPortal = isPortal;
	exports.isProfiler = isProfiler;
	exports.isStrictMode = isStrictMode;
	exports.isSuspense = isSuspense;
	exports.isValidElementType = isValidElementType;
	exports.typeOf = typeOf;
	  })();
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(37)))

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var ReactIs = __webpack_require__(38);
	var assign = __webpack_require__(42);

	var ReactPropTypesSecret = __webpack_require__(43);
	var has = __webpack_require__(44);
	var checkPropTypes = __webpack_require__(45);

	var printWarning = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  printWarning = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	}

	function emptyFunctionThatReturnsNull() {
	  return null;
	}

	module.exports = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */

	  var ANONYMOUS = '<<anonymous>>';

	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bigint: createPrimitiveTypeChecker('bigint'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),

	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    elementType: createElementTypeTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker,
	    exact: createStrictShapeTypeChecker,
	  };

	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/

	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message, data) {
	    this.message = message;
	    this.data = data && typeof data === 'object' ? data: {};
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;

	  function createChainableTypeChecker(validate) {
	    if (process.env.NODE_ENV !== 'production') {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;

	      if (secret !== ReactPropTypesSecret) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          var err = new Error(
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	          err.name = 'Invariant Violation';
	          throw err;
	        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            printWarning(
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
	            );
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }

	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);

	    return chainedCheckType;
	  }

	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);

	        return new PropTypeError(
	          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
	          {expectedType: expectedType}
	        );
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
	  }

	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!ReactIs.isValidElementType(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      if (process.env.NODE_ENV !== 'production') {
	        if (arguments.length > 1) {
	          printWarning(
	            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
	            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
	          );
	        } else {
	          printWarning('Invalid argument supplied to oneOf, expected an array.');
	        }
	      }
	      return emptyFunctionThatReturnsNull;
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }

	      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
	        var type = getPreciseType(value);
	        if (type === 'symbol') {
	          return String(value);
	        }
	        return value;
	      });
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (has(propValue, key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	      return emptyFunctionThatReturnsNull;
	    }

	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        printWarning(
	          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
	          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
	        );
	        return emptyFunctionThatReturnsNull;
	      }
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var expectedTypes = [];
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
	        if (checkerResult == null) {
	          return null;
	        }
	        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
	          expectedTypes.push(checkerResult.data.expectedType);
	        }
	      }
	      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function invalidValidatorError(componentName, location, propFullName, key, type) {
	    return new PropTypeError(
	      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
	      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
	    );
	  }

	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (typeof checker !== 'function') {
	          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createStrictShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      // We need to check all keys in case some are required but missing from props.
	      var allKeys = assign({}, props[propName], shapeTypes);
	      for (var key in allKeys) {
	        var checker = shapeTypes[key];
	        if (has(shapeTypes, key) && typeof checker !== 'function') {
	          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
	        }
	        if (!checker) {
	          return new PropTypeError(
	            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
	            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
	            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
	          );
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }

	    return createChainableTypeChecker(validate);
	  }

	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }

	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }

	        return true;
	      default:
	        return false;
	    }
	  }

	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }

	    // falsy value can't be a Symbol
	    if (!propValue) {
	      return false;
	    }

	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }

	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }

	    return false;
	  }

	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }

	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }

	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }

	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }

	  ReactPropTypes.checkPropTypes = checkPropTypes;
	  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(37)))

/***/ }),
/* 42 */
/***/ (function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/

	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ }),
/* 43 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	module.exports = ReactPropTypesSecret;


/***/ }),
/* 44 */
/***/ (function(module, exports) {

	module.exports = Function.call.bind(Object.prototype.hasOwnProperty);


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var printWarning = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  var ReactPropTypesSecret = __webpack_require__(43);
	  var loggedTypeFailures = {};
	  var has = __webpack_require__(44);

	  printWarning = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) { /**/ }
	  };
	}

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  if (process.env.NODE_ENV !== 'production') {
	    for (var typeSpecName in typeSpecs) {
	      if (has(typeSpecs, typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          if (typeof typeSpecs[typeSpecName] !== 'function') {
	            var err = Error(
	              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
	              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
	              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
	            );
	            err.name = 'Invariant Violation';
	            throw err;
	          }
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	        } catch (ex) {
	          error = ex;
	        }
	        if (error && !(error instanceof Error)) {
	          printWarning(
	            (componentName || 'React class') + ': type specification of ' +
	            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
	            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
	            'You may have forgotten to pass an argument to the type checker ' +
	            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
	            'shape all require an argument).'
	          );
	        }
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;

	          var stack = getStack ? getStack() : '';

	          printWarning(
	            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
	          );
	        }
	      }
	    }
	  }
	}

	/**
	 * Resets warning cache when testing.
	 *
	 * @private
	 */
	checkPropTypes.resetWarningCache = function() {
	  if (process.env.NODE_ENV !== 'production') {
	    loggedTypeFailures = {};
	  }
	}

	module.exports = checkPropTypes;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(37)))

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var ReactPropTypesSecret = __webpack_require__(43);

	function emptyFunction() {}
	function emptyFunctionWithReset() {}
	emptyFunctionWithReset.resetWarningCache = emptyFunction;

	module.exports = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret) {
	      // It is still safe when called from React.
	      return;
	    }
	    var err = new Error(
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	    err.name = 'Invariant Violation';
	    throw err;
	  };
	  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  };
	  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bigint: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,

	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    elementType: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim,
	    exact: getShim,

	    checkPropTypes: emptyFunctionWithReset,
	    resetWarningCache: emptyFunction
	  };

	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {(function (global, factory) {
	     true ? module.exports = factory() :
	    typeof define === 'function' && define.amd ? define(factory) :
	    (global.ResizeObserver = factory());
	}(this, (function () { 'use strict';

	    /**
	     * A collection of shims that provide minimal functionality of the ES6 collections.
	     *
	     * These implementations are not meant to be used outside of the ResizeObserver
	     * modules as they cover only a limited range of use cases.
	     */
	    /* eslint-disable require-jsdoc, valid-jsdoc */
	    var MapShim = (function () {
	        if (typeof Map !== 'undefined') {
	            return Map;
	        }
	        /**
	         * Returns index in provided array that matches the specified key.
	         *
	         * @param {Array<Array>} arr
	         * @param {*} key
	         * @returns {number}
	         */
	        function getIndex(arr, key) {
	            var result = -1;
	            arr.some(function (entry, index) {
	                if (entry[0] === key) {
	                    result = index;
	                    return true;
	                }
	                return false;
	            });
	            return result;
	        }
	        return /** @class */ (function () {
	            function class_1() {
	                this.__entries__ = [];
	            }
	            Object.defineProperty(class_1.prototype, "size", {
	                /**
	                 * @returns {boolean}
	                 */
	                get: function () {
	                    return this.__entries__.length;
	                },
	                enumerable: true,
	                configurable: true
	            });
	            /**
	             * @param {*} key
	             * @returns {*}
	             */
	            class_1.prototype.get = function (key) {
	                var index = getIndex(this.__entries__, key);
	                var entry = this.__entries__[index];
	                return entry && entry[1];
	            };
	            /**
	             * @param {*} key
	             * @param {*} value
	             * @returns {void}
	             */
	            class_1.prototype.set = function (key, value) {
	                var index = getIndex(this.__entries__, key);
	                if (~index) {
	                    this.__entries__[index][1] = value;
	                }
	                else {
	                    this.__entries__.push([key, value]);
	                }
	            };
	            /**
	             * @param {*} key
	             * @returns {void}
	             */
	            class_1.prototype.delete = function (key) {
	                var entries = this.__entries__;
	                var index = getIndex(entries, key);
	                if (~index) {
	                    entries.splice(index, 1);
	                }
	            };
	            /**
	             * @param {*} key
	             * @returns {void}
	             */
	            class_1.prototype.has = function (key) {
	                return !!~getIndex(this.__entries__, key);
	            };
	            /**
	             * @returns {void}
	             */
	            class_1.prototype.clear = function () {
	                this.__entries__.splice(0);
	            };
	            /**
	             * @param {Function} callback
	             * @param {*} [ctx=null]
	             * @returns {void}
	             */
	            class_1.prototype.forEach = function (callback, ctx) {
	                if (ctx === void 0) { ctx = null; }
	                for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
	                    var entry = _a[_i];
	                    callback.call(ctx, entry[1], entry[0]);
	                }
	            };
	            return class_1;
	        }());
	    })();

	    /**
	     * Detects whether window and document objects are available in current environment.
	     */
	    var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document;

	    // Returns global object of a current environment.
	    var global$1 = (function () {
	        if (typeof global !== 'undefined' && global.Math === Math) {
	            return global;
	        }
	        if (typeof self !== 'undefined' && self.Math === Math) {
	            return self;
	        }
	        if (typeof window !== 'undefined' && window.Math === Math) {
	            return window;
	        }
	        // eslint-disable-next-line no-new-func
	        return Function('return this')();
	    })();

	    /**
	     * A shim for the requestAnimationFrame which falls back to the setTimeout if
	     * first one is not supported.
	     *
	     * @returns {number} Requests' identifier.
	     */
	    var requestAnimationFrame$1 = (function () {
	        if (typeof requestAnimationFrame === 'function') {
	            // It's required to use a bounded function because IE sometimes throws
	            // an "Invalid calling object" error if rAF is invoked without the global
	            // object on the left hand side.
	            return requestAnimationFrame.bind(global$1);
	        }
	        return function (callback) { return setTimeout(function () { return callback(Date.now()); }, 1000 / 60); };
	    })();

	    // Defines minimum timeout before adding a trailing call.
	    var trailingTimeout = 2;
	    /**
	     * Creates a wrapper function which ensures that provided callback will be
	     * invoked only once during the specified delay period.
	     *
	     * @param {Function} callback - Function to be invoked after the delay period.
	     * @param {number} delay - Delay after which to invoke callback.
	     * @returns {Function}
	     */
	    function throttle (callback, delay) {
	        var leadingCall = false, trailingCall = false, lastCallTime = 0;
	        /**
	         * Invokes the original callback function and schedules new invocation if
	         * the "proxy" was called during current request.
	         *
	         * @returns {void}
	         */
	        function resolvePending() {
	            if (leadingCall) {
	                leadingCall = false;
	                callback();
	            }
	            if (trailingCall) {
	                proxy();
	            }
	        }
	        /**
	         * Callback invoked after the specified delay. It will further postpone
	         * invocation of the original function delegating it to the
	         * requestAnimationFrame.
	         *
	         * @returns {void}
	         */
	        function timeoutCallback() {
	            requestAnimationFrame$1(resolvePending);
	        }
	        /**
	         * Schedules invocation of the original function.
	         *
	         * @returns {void}
	         */
	        function proxy() {
	            var timeStamp = Date.now();
	            if (leadingCall) {
	                // Reject immediately following calls.
	                if (timeStamp - lastCallTime < trailingTimeout) {
	                    return;
	                }
	                // Schedule new call to be in invoked when the pending one is resolved.
	                // This is important for "transitions" which never actually start
	                // immediately so there is a chance that we might miss one if change
	                // happens amids the pending invocation.
	                trailingCall = true;
	            }
	            else {
	                leadingCall = true;
	                trailingCall = false;
	                setTimeout(timeoutCallback, delay);
	            }
	            lastCallTime = timeStamp;
	        }
	        return proxy;
	    }

	    // Minimum delay before invoking the update of observers.
	    var REFRESH_DELAY = 20;
	    // A list of substrings of CSS properties used to find transition events that
	    // might affect dimensions of observed elements.
	    var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'];
	    // Check if MutationObserver is available.
	    var mutationObserverSupported = typeof MutationObserver !== 'undefined';
	    /**
	     * Singleton controller class which handles updates of ResizeObserver instances.
	     */
	    var ResizeObserverController = /** @class */ (function () {
	        /**
	         * Creates a new instance of ResizeObserverController.
	         *
	         * @private
	         */
	        function ResizeObserverController() {
	            /**
	             * Indicates whether DOM listeners have been added.
	             *
	             * @private {boolean}
	             */
	            this.connected_ = false;
	            /**
	             * Tells that controller has subscribed for Mutation Events.
	             *
	             * @private {boolean}
	             */
	            this.mutationEventsAdded_ = false;
	            /**
	             * Keeps reference to the instance of MutationObserver.
	             *
	             * @private {MutationObserver}
	             */
	            this.mutationsObserver_ = null;
	            /**
	             * A list of connected observers.
	             *
	             * @private {Array<ResizeObserverSPI>}
	             */
	            this.observers_ = [];
	            this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
	            this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
	        }
	        /**
	         * Adds observer to observers list.
	         *
	         * @param {ResizeObserverSPI} observer - Observer to be added.
	         * @returns {void}
	         */
	        ResizeObserverController.prototype.addObserver = function (observer) {
	            if (!~this.observers_.indexOf(observer)) {
	                this.observers_.push(observer);
	            }
	            // Add listeners if they haven't been added yet.
	            if (!this.connected_) {
	                this.connect_();
	            }
	        };
	        /**
	         * Removes observer from observers list.
	         *
	         * @param {ResizeObserverSPI} observer - Observer to be removed.
	         * @returns {void}
	         */
	        ResizeObserverController.prototype.removeObserver = function (observer) {
	            var observers = this.observers_;
	            var index = observers.indexOf(observer);
	            // Remove observer if it's present in registry.
	            if (~index) {
	                observers.splice(index, 1);
	            }
	            // Remove listeners if controller has no connected observers.
	            if (!observers.length && this.connected_) {
	                this.disconnect_();
	            }
	        };
	        /**
	         * Invokes the update of observers. It will continue running updates insofar
	         * it detects changes.
	         *
	         * @returns {void}
	         */
	        ResizeObserverController.prototype.refresh = function () {
	            var changesDetected = this.updateObservers_();
	            // Continue running updates if changes have been detected as there might
	            // be future ones caused by CSS transitions.
	            if (changesDetected) {
	                this.refresh();
	            }
	        };
	        /**
	         * Updates every observer from observers list and notifies them of queued
	         * entries.
	         *
	         * @private
	         * @returns {boolean} Returns "true" if any observer has detected changes in
	         *      dimensions of it's elements.
	         */
	        ResizeObserverController.prototype.updateObservers_ = function () {
	            // Collect observers that have active observations.
	            var activeObservers = this.observers_.filter(function (observer) {
	                return observer.gatherActive(), observer.hasActive();
	            });
	            // Deliver notifications in a separate cycle in order to avoid any
	            // collisions between observers, e.g. when multiple instances of
	            // ResizeObserver are tracking the same element and the callback of one
	            // of them changes content dimensions of the observed target. Sometimes
	            // this may result in notifications being blocked for the rest of observers.
	            activeObservers.forEach(function (observer) { return observer.broadcastActive(); });
	            return activeObservers.length > 0;
	        };
	        /**
	         * Initializes DOM listeners.
	         *
	         * @private
	         * @returns {void}
	         */
	        ResizeObserverController.prototype.connect_ = function () {
	            // Do nothing if running in a non-browser environment or if listeners
	            // have been already added.
	            if (!isBrowser || this.connected_) {
	                return;
	            }
	            // Subscription to the "Transitionend" event is used as a workaround for
	            // delayed transitions. This way it's possible to capture at least the
	            // final state of an element.
	            document.addEventListener('transitionend', this.onTransitionEnd_);
	            window.addEventListener('resize', this.refresh);
	            if (mutationObserverSupported) {
	                this.mutationsObserver_ = new MutationObserver(this.refresh);
	                this.mutationsObserver_.observe(document, {
	                    attributes: true,
	                    childList: true,
	                    characterData: true,
	                    subtree: true
	                });
	            }
	            else {
	                document.addEventListener('DOMSubtreeModified', this.refresh);
	                this.mutationEventsAdded_ = true;
	            }
	            this.connected_ = true;
	        };
	        /**
	         * Removes DOM listeners.
	         *
	         * @private
	         * @returns {void}
	         */
	        ResizeObserverController.prototype.disconnect_ = function () {
	            // Do nothing if running in a non-browser environment or if listeners
	            // have been already removed.
	            if (!isBrowser || !this.connected_) {
	                return;
	            }
	            document.removeEventListener('transitionend', this.onTransitionEnd_);
	            window.removeEventListener('resize', this.refresh);
	            if (this.mutationsObserver_) {
	                this.mutationsObserver_.disconnect();
	            }
	            if (this.mutationEventsAdded_) {
	                document.removeEventListener('DOMSubtreeModified', this.refresh);
	            }
	            this.mutationsObserver_ = null;
	            this.mutationEventsAdded_ = false;
	            this.connected_ = false;
	        };
	        /**
	         * "Transitionend" event handler.
	         *
	         * @private
	         * @param {TransitionEvent} event
	         * @returns {void}
	         */
	        ResizeObserverController.prototype.onTransitionEnd_ = function (_a) {
	            var _b = _a.propertyName, propertyName = _b === void 0 ? '' : _b;
	            // Detect whether transition may affect dimensions of an element.
	            var isReflowProperty = transitionKeys.some(function (key) {
	                return !!~propertyName.indexOf(key);
	            });
	            if (isReflowProperty) {
	                this.refresh();
	            }
	        };
	        /**
	         * Returns instance of the ResizeObserverController.
	         *
	         * @returns {ResizeObserverController}
	         */
	        ResizeObserverController.getInstance = function () {
	            if (!this.instance_) {
	                this.instance_ = new ResizeObserverController();
	            }
	            return this.instance_;
	        };
	        /**
	         * Holds reference to the controller's instance.
	         *
	         * @private {ResizeObserverController}
	         */
	        ResizeObserverController.instance_ = null;
	        return ResizeObserverController;
	    }());

	    /**
	     * Defines non-writable/enumerable properties of the provided target object.
	     *
	     * @param {Object} target - Object for which to define properties.
	     * @param {Object} props - Properties to be defined.
	     * @returns {Object} Target object.
	     */
	    var defineConfigurable = (function (target, props) {
	        for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
	            var key = _a[_i];
	            Object.defineProperty(target, key, {
	                value: props[key],
	                enumerable: false,
	                writable: false,
	                configurable: true
	            });
	        }
	        return target;
	    });

	    /**
	     * Returns the global object associated with provided element.
	     *
	     * @param {Object} target
	     * @returns {Object}
	     */
	    var getWindowOf = (function (target) {
	        // Assume that the element is an instance of Node, which means that it
	        // has the "ownerDocument" property from which we can retrieve a
	        // corresponding global object.
	        var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
	        // Return the local global object if it's not possible extract one from
	        // provided element.
	        return ownerGlobal || global$1;
	    });

	    // Placeholder of an empty content rectangle.
	    var emptyRect = createRectInit(0, 0, 0, 0);
	    /**
	     * Converts provided string to a number.
	     *
	     * @param {number|string} value
	     * @returns {number}
	     */
	    function toFloat(value) {
	        return parseFloat(value) || 0;
	    }
	    /**
	     * Extracts borders size from provided styles.
	     *
	     * @param {CSSStyleDeclaration} styles
	     * @param {...string} positions - Borders positions (top, right, ...)
	     * @returns {number}
	     */
	    function getBordersSize(styles) {
	        var positions = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            positions[_i - 1] = arguments[_i];
	        }
	        return positions.reduce(function (size, position) {
	            var value = styles['border-' + position + '-width'];
	            return size + toFloat(value);
	        }, 0);
	    }
	    /**
	     * Extracts paddings sizes from provided styles.
	     *
	     * @param {CSSStyleDeclaration} styles
	     * @returns {Object} Paddings box.
	     */
	    function getPaddings(styles) {
	        var positions = ['top', 'right', 'bottom', 'left'];
	        var paddings = {};
	        for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
	            var position = positions_1[_i];
	            var value = styles['padding-' + position];
	            paddings[position] = toFloat(value);
	        }
	        return paddings;
	    }
	    /**
	     * Calculates content rectangle of provided SVG element.
	     *
	     * @param {SVGGraphicsElement} target - Element content rectangle of which needs
	     *      to be calculated.
	     * @returns {DOMRectInit}
	     */
	    function getSVGContentRect(target) {
	        var bbox = target.getBBox();
	        return createRectInit(0, 0, bbox.width, bbox.height);
	    }
	    /**
	     * Calculates content rectangle of provided HTMLElement.
	     *
	     * @param {HTMLElement} target - Element for which to calculate the content rectangle.
	     * @returns {DOMRectInit}
	     */
	    function getHTMLElementContentRect(target) {
	        // Client width & height properties can't be
	        // used exclusively as they provide rounded values.
	        var clientWidth = target.clientWidth, clientHeight = target.clientHeight;
	        // By this condition we can catch all non-replaced inline, hidden and
	        // detached elements. Though elements with width & height properties less
	        // than 0.5 will be discarded as well.
	        //
	        // Without it we would need to implement separate methods for each of
	        // those cases and it's not possible to perform a precise and performance
	        // effective test for hidden elements. E.g. even jQuery's ':visible' filter
	        // gives wrong results for elements with width & height less than 0.5.
	        if (!clientWidth && !clientHeight) {
	            return emptyRect;
	        }
	        var styles = getWindowOf(target).getComputedStyle(target);
	        var paddings = getPaddings(styles);
	        var horizPad = paddings.left + paddings.right;
	        var vertPad = paddings.top + paddings.bottom;
	        // Computed styles of width & height are being used because they are the
	        // only dimensions available to JS that contain non-rounded values. It could
	        // be possible to utilize the getBoundingClientRect if only it's data wasn't
	        // affected by CSS transformations let alone paddings, borders and scroll bars.
	        var width = toFloat(styles.width), height = toFloat(styles.height);
	        // Width & height include paddings and borders when the 'border-box' box
	        // model is applied (except for IE).
	        if (styles.boxSizing === 'border-box') {
	            // Following conditions are required to handle Internet Explorer which
	            // doesn't include paddings and borders to computed CSS dimensions.
	            //
	            // We can say that if CSS dimensions + paddings are equal to the "client"
	            // properties then it's either IE, and thus we don't need to subtract
	            // anything, or an element merely doesn't have paddings/borders styles.
	            if (Math.round(width + horizPad) !== clientWidth) {
	                width -= getBordersSize(styles, 'left', 'right') + horizPad;
	            }
	            if (Math.round(height + vertPad) !== clientHeight) {
	                height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
	            }
	        }
	        // Following steps can't be applied to the document's root element as its
	        // client[Width/Height] properties represent viewport area of the window.
	        // Besides, it's as well not necessary as the <html> itself neither has
	        // rendered scroll bars nor it can be clipped.
	        if (!isDocumentElement(target)) {
	            // In some browsers (only in Firefox, actually) CSS width & height
	            // include scroll bars size which can be removed at this step as scroll
	            // bars are the only difference between rounded dimensions + paddings
	            // and "client" properties, though that is not always true in Chrome.
	            var vertScrollbar = Math.round(width + horizPad) - clientWidth;
	            var horizScrollbar = Math.round(height + vertPad) - clientHeight;
	            // Chrome has a rather weird rounding of "client" properties.
	            // E.g. for an element with content width of 314.2px it sometimes gives
	            // the client width of 315px and for the width of 314.7px it may give
	            // 314px. And it doesn't happen all the time. So just ignore this delta
	            // as a non-relevant.
	            if (Math.abs(vertScrollbar) !== 1) {
	                width -= vertScrollbar;
	            }
	            if (Math.abs(horizScrollbar) !== 1) {
	                height -= horizScrollbar;
	            }
	        }
	        return createRectInit(paddings.left, paddings.top, width, height);
	    }
	    /**
	     * Checks whether provided element is an instance of the SVGGraphicsElement.
	     *
	     * @param {Element} target - Element to be checked.
	     * @returns {boolean}
	     */
	    var isSVGGraphicsElement = (function () {
	        // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
	        // interface.
	        if (typeof SVGGraphicsElement !== 'undefined') {
	            return function (target) { return target instanceof getWindowOf(target).SVGGraphicsElement; };
	        }
	        // If it's so, then check that element is at least an instance of the
	        // SVGElement and that it has the "getBBox" method.
	        // eslint-disable-next-line no-extra-parens
	        return function (target) { return (target instanceof getWindowOf(target).SVGElement &&
	            typeof target.getBBox === 'function'); };
	    })();
	    /**
	     * Checks whether provided element is a document element (<html>).
	     *
	     * @param {Element} target - Element to be checked.
	     * @returns {boolean}
	     */
	    function isDocumentElement(target) {
	        return target === getWindowOf(target).document.documentElement;
	    }
	    /**
	     * Calculates an appropriate content rectangle for provided html or svg element.
	     *
	     * @param {Element} target - Element content rectangle of which needs to be calculated.
	     * @returns {DOMRectInit}
	     */
	    function getContentRect(target) {
	        if (!isBrowser) {
	            return emptyRect;
	        }
	        if (isSVGGraphicsElement(target)) {
	            return getSVGContentRect(target);
	        }
	        return getHTMLElementContentRect(target);
	    }
	    /**
	     * Creates rectangle with an interface of the DOMRectReadOnly.
	     * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
	     *
	     * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
	     * @returns {DOMRectReadOnly}
	     */
	    function createReadOnlyRect(_a) {
	        var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
	        // If DOMRectReadOnly is available use it as a prototype for the rectangle.
	        var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
	        var rect = Object.create(Constr.prototype);
	        // Rectangle's properties are not writable and non-enumerable.
	        defineConfigurable(rect, {
	            x: x, y: y, width: width, height: height,
	            top: y,
	            right: x + width,
	            bottom: height + y,
	            left: x
	        });
	        return rect;
	    }
	    /**
	     * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
	     * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
	     *
	     * @param {number} x - X coordinate.
	     * @param {number} y - Y coordinate.
	     * @param {number} width - Rectangle's width.
	     * @param {number} height - Rectangle's height.
	     * @returns {DOMRectInit}
	     */
	    function createRectInit(x, y, width, height) {
	        return { x: x, y: y, width: width, height: height };
	    }

	    /**
	     * Class that is responsible for computations of the content rectangle of
	     * provided DOM element and for keeping track of it's changes.
	     */
	    var ResizeObservation = /** @class */ (function () {
	        /**
	         * Creates an instance of ResizeObservation.
	         *
	         * @param {Element} target - Element to be observed.
	         */
	        function ResizeObservation(target) {
	            /**
	             * Broadcasted width of content rectangle.
	             *
	             * @type {number}
	             */
	            this.broadcastWidth = 0;
	            /**
	             * Broadcasted height of content rectangle.
	             *
	             * @type {number}
	             */
	            this.broadcastHeight = 0;
	            /**
	             * Reference to the last observed content rectangle.
	             *
	             * @private {DOMRectInit}
	             */
	            this.contentRect_ = createRectInit(0, 0, 0, 0);
	            this.target = target;
	        }
	        /**
	         * Updates content rectangle and tells whether it's width or height properties
	         * have changed since the last broadcast.
	         *
	         * @returns {boolean}
	         */
	        ResizeObservation.prototype.isActive = function () {
	            var rect = getContentRect(this.target);
	            this.contentRect_ = rect;
	            return (rect.width !== this.broadcastWidth ||
	                rect.height !== this.broadcastHeight);
	        };
	        /**
	         * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
	         * from the corresponding properties of the last observed content rectangle.
	         *
	         * @returns {DOMRectInit} Last observed content rectangle.
	         */
	        ResizeObservation.prototype.broadcastRect = function () {
	            var rect = this.contentRect_;
	            this.broadcastWidth = rect.width;
	            this.broadcastHeight = rect.height;
	            return rect;
	        };
	        return ResizeObservation;
	    }());

	    var ResizeObserverEntry = /** @class */ (function () {
	        /**
	         * Creates an instance of ResizeObserverEntry.
	         *
	         * @param {Element} target - Element that is being observed.
	         * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
	         */
	        function ResizeObserverEntry(target, rectInit) {
	            var contentRect = createReadOnlyRect(rectInit);
	            // According to the specification following properties are not writable
	            // and are also not enumerable in the native implementation.
	            //
	            // Property accessors are not being used as they'd require to define a
	            // private WeakMap storage which may cause memory leaks in browsers that
	            // don't support this type of collections.
	            defineConfigurable(this, { target: target, contentRect: contentRect });
	        }
	        return ResizeObserverEntry;
	    }());

	    var ResizeObserverSPI = /** @class */ (function () {
	        /**
	         * Creates a new instance of ResizeObserver.
	         *
	         * @param {ResizeObserverCallback} callback - Callback function that is invoked
	         *      when one of the observed elements changes it's content dimensions.
	         * @param {ResizeObserverController} controller - Controller instance which
	         *      is responsible for the updates of observer.
	         * @param {ResizeObserver} callbackCtx - Reference to the public
	         *      ResizeObserver instance which will be passed to callback function.
	         */
	        function ResizeObserverSPI(callback, controller, callbackCtx) {
	            /**
	             * Collection of resize observations that have detected changes in dimensions
	             * of elements.
	             *
	             * @private {Array<ResizeObservation>}
	             */
	            this.activeObservations_ = [];
	            /**
	             * Registry of the ResizeObservation instances.
	             *
	             * @private {Map<Element, ResizeObservation>}
	             */
	            this.observations_ = new MapShim();
	            if (typeof callback !== 'function') {
	                throw new TypeError('The callback provided as parameter 1 is not a function.');
	            }
	            this.callback_ = callback;
	            this.controller_ = controller;
	            this.callbackCtx_ = callbackCtx;
	        }
	        /**
	         * Starts observing provided element.
	         *
	         * @param {Element} target - Element to be observed.
	         * @returns {void}
	         */
	        ResizeObserverSPI.prototype.observe = function (target) {
	            if (!arguments.length) {
	                throw new TypeError('1 argument required, but only 0 present.');
	            }
	            // Do nothing if current environment doesn't have the Element interface.
	            if (typeof Element === 'undefined' || !(Element instanceof Object)) {
	                return;
	            }
	            if (!(target instanceof getWindowOf(target).Element)) {
	                throw new TypeError('parameter 1 is not of type "Element".');
	            }
	            var observations = this.observations_;
	            // Do nothing if element is already being observed.
	            if (observations.has(target)) {
	                return;
	            }
	            observations.set(target, new ResizeObservation(target));
	            this.controller_.addObserver(this);
	            // Force the update of observations.
	            this.controller_.refresh();
	        };
	        /**
	         * Stops observing provided element.
	         *
	         * @param {Element} target - Element to stop observing.
	         * @returns {void}
	         */
	        ResizeObserverSPI.prototype.unobserve = function (target) {
	            if (!arguments.length) {
	                throw new TypeError('1 argument required, but only 0 present.');
	            }
	            // Do nothing if current environment doesn't have the Element interface.
	            if (typeof Element === 'undefined' || !(Element instanceof Object)) {
	                return;
	            }
	            if (!(target instanceof getWindowOf(target).Element)) {
	                throw new TypeError('parameter 1 is not of type "Element".');
	            }
	            var observations = this.observations_;
	            // Do nothing if element is not being observed.
	            if (!observations.has(target)) {
	                return;
	            }
	            observations.delete(target);
	            if (!observations.size) {
	                this.controller_.removeObserver(this);
	            }
	        };
	        /**
	         * Stops observing all elements.
	         *
	         * @returns {void}
	         */
	        ResizeObserverSPI.prototype.disconnect = function () {
	            this.clearActive();
	            this.observations_.clear();
	            this.controller_.removeObserver(this);
	        };
	        /**
	         * Collects observation instances the associated element of which has changed
	         * it's content rectangle.
	         *
	         * @returns {void}
	         */
	        ResizeObserverSPI.prototype.gatherActive = function () {
	            var _this = this;
	            this.clearActive();
	            this.observations_.forEach(function (observation) {
	                if (observation.isActive()) {
	                    _this.activeObservations_.push(observation);
	                }
	            });
	        };
	        /**
	         * Invokes initial callback function with a list of ResizeObserverEntry
	         * instances collected from active resize observations.
	         *
	         * @returns {void}
	         */
	        ResizeObserverSPI.prototype.broadcastActive = function () {
	            // Do nothing if observer doesn't have active observations.
	            if (!this.hasActive()) {
	                return;
	            }
	            var ctx = this.callbackCtx_;
	            // Create ResizeObserverEntry instance for every active observation.
	            var entries = this.activeObservations_.map(function (observation) {
	                return new ResizeObserverEntry(observation.target, observation.broadcastRect());
	            });
	            this.callback_.call(ctx, entries, ctx);
	            this.clearActive();
	        };
	        /**
	         * Clears the collection of active observations.
	         *
	         * @returns {void}
	         */
	        ResizeObserverSPI.prototype.clearActive = function () {
	            this.activeObservations_.splice(0);
	        };
	        /**
	         * Tells whether observer has active observations.
	         *
	         * @returns {boolean}
	         */
	        ResizeObserverSPI.prototype.hasActive = function () {
	            return this.activeObservations_.length > 0;
	        };
	        return ResizeObserverSPI;
	    }());

	    // Registry of internal observers. If WeakMap is not available use current shim
	    // for the Map collection as it has all required methods and because WeakMap
	    // can't be fully polyfilled anyway.
	    var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
	    /**
	     * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
	     * exposing only those methods and properties that are defined in the spec.
	     */
	    var ResizeObserver = /** @class */ (function () {
	        /**
	         * Creates a new instance of ResizeObserver.
	         *
	         * @param {ResizeObserverCallback} callback - Callback that is invoked when
	         *      dimensions of the observed elements change.
	         */
	        function ResizeObserver(callback) {
	            if (!(this instanceof ResizeObserver)) {
	                throw new TypeError('Cannot call a class as a function.');
	            }
	            if (!arguments.length) {
	                throw new TypeError('1 argument required, but only 0 present.');
	            }
	            var controller = ResizeObserverController.getInstance();
	            var observer = new ResizeObserverSPI(callback, controller, this);
	            observers.set(this, observer);
	        }
	        return ResizeObserver;
	    }());
	    // Expose public methods of ResizeObserver.
	    [
	        'observe',
	        'unobserve',
	        'disconnect'
	    ].forEach(function (method) {
	        ResizeObserver.prototype[method] = function () {
	            var _a;
	            return (_a = observers.get(this))[method].apply(_a, arguments);
	        };
	    });

	    var index = (function () {
	        // Export existing implementation if available.
	        if (typeof global$1.ResizeObserver !== 'undefined') {
	            return global$1.ResizeObserver;
	        }
	        return ResizeObserver;
	    })();

	    return index;

	})));

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 48 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/** Used as references for various `Number` constants. */
	var NAN = 0 / 0;

	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';

	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;

	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;

	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;

	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;

	/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max,
	    nativeMin = Math.min;

	/**
	 * Gets the timestamp of the number of milliseconds that have elapsed since
	 * the Unix epoch (1 January 1970 00:00:00 UTC).
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Date
	 * @returns {number} Returns the timestamp.
	 * @example
	 *
	 * _.defer(function(stamp) {
	 *   console.log(_.now() - stamp);
	 * }, _.now());
	 * // => Logs the number of milliseconds it took for the deferred invocation.
	 */
	var now = function() {
	  return root.Date.now();
	};

	/**
	 * Creates a debounced function that delays invoking `func` until after `wait`
	 * milliseconds have elapsed since the last time the debounced function was
	 * invoked. The debounced function comes with a `cancel` method to cancel
	 * delayed `func` invocations and a `flush` method to immediately invoke them.
	 * Provide `options` to indicate whether `func` should be invoked on the
	 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
	 * with the last arguments provided to the debounced function. Subsequent
	 * calls to the debounced function return the result of the last `func`
	 * invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is
	 * invoked on the trailing edge of the timeout only if the debounced function
	 * is invoked more than once during the `wait` timeout.
	 *
	 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
	 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
	 *
	 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	 * for details over the differences between `_.debounce` and `_.throttle`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to debounce.
	 * @param {number} [wait=0] The number of milliseconds to delay.
	 * @param {Object} [options={}] The options object.
	 * @param {boolean} [options.leading=false]
	 *  Specify invoking on the leading edge of the timeout.
	 * @param {number} [options.maxWait]
	 *  The maximum time `func` is allowed to be delayed before it's invoked.
	 * @param {boolean} [options.trailing=true]
	 *  Specify invoking on the trailing edge of the timeout.
	 * @returns {Function} Returns the new debounced function.
	 * @example
	 *
	 * // Avoid costly calculations while the window size is in flux.
	 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
	 *
	 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
	 * jQuery(element).on('click', _.debounce(sendMail, 300, {
	 *   'leading': true,
	 *   'trailing': false
	 * }));
	 *
	 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
	 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
	 * var source = new EventSource('/stream');
	 * jQuery(source).on('message', debounced);
	 *
	 * // Cancel the trailing debounced invocation.
	 * jQuery(window).on('popstate', debounced.cancel);
	 */
	function debounce(func, wait, options) {
	  var lastArgs,
	      lastThis,
	      maxWait,
	      result,
	      timerId,
	      lastCallTime,
	      lastInvokeTime = 0,
	      leading = false,
	      maxing = false,
	      trailing = true;

	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  wait = toNumber(wait) || 0;
	  if (isObject(options)) {
	    leading = !!options.leading;
	    maxing = 'maxWait' in options;
	    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }

	  function invokeFunc(time) {
	    var args = lastArgs,
	        thisArg = lastThis;

	    lastArgs = lastThis = undefined;
	    lastInvokeTime = time;
	    result = func.apply(thisArg, args);
	    return result;
	  }

	  function leadingEdge(time) {
	    // Reset any `maxWait` timer.
	    lastInvokeTime = time;
	    // Start the timer for the trailing edge.
	    timerId = setTimeout(timerExpired, wait);
	    // Invoke the leading edge.
	    return leading ? invokeFunc(time) : result;
	  }

	  function remainingWait(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime,
	        result = wait - timeSinceLastCall;

	    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
	  }

	  function shouldInvoke(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime;

	    // Either this is the first call, activity has stopped and we're at the
	    // trailing edge, the system time has gone backwards and we're treating
	    // it as the trailing edge, or we've hit the `maxWait` limit.
	    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
	      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
	  }

	  function timerExpired() {
	    var time = now();
	    if (shouldInvoke(time)) {
	      return trailingEdge(time);
	    }
	    // Restart the timer.
	    timerId = setTimeout(timerExpired, remainingWait(time));
	  }

	  function trailingEdge(time) {
	    timerId = undefined;

	    // Only invoke if we have `lastArgs` which means `func` has been
	    // debounced at least once.
	    if (trailing && lastArgs) {
	      return invokeFunc(time);
	    }
	    lastArgs = lastThis = undefined;
	    return result;
	  }

	  function cancel() {
	    if (timerId !== undefined) {
	      clearTimeout(timerId);
	    }
	    lastInvokeTime = 0;
	    lastArgs = lastCallTime = lastThis = timerId = undefined;
	  }

	  function flush() {
	    return timerId === undefined ? result : trailingEdge(now());
	  }

	  function debounced() {
	    var time = now(),
	        isInvoking = shouldInvoke(time);

	    lastArgs = arguments;
	    lastThis = this;
	    lastCallTime = time;

	    if (isInvoking) {
	      if (timerId === undefined) {
	        return leadingEdge(lastCallTime);
	      }
	      if (maxing) {
	        // Handle invocations in a tight loop.
	        timerId = setTimeout(timerExpired, wait);
	        return invokeFunc(lastCallTime);
	      }
	    }
	    if (timerId === undefined) {
	      timerId = setTimeout(timerExpired, wait);
	    }
	    return result;
	  }
	  debounced.cancel = cancel;
	  debounced.flush = flush;
	  return debounced;
	}

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && objectToString.call(value) == symbolTag);
	}

	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3.2);
	 * // => 3.2
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3.2');
	 * // => 3.2
	 */
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return NAN;
	  }
	  if (isObject(value)) {
	    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
	    value = isObject(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}

	module.exports = debounce;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 49 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/** Used as references for various `Number` constants. */
	var NAN = 0 / 0;

	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';

	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;

	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;

	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;

	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;

	/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max,
	    nativeMin = Math.min;

	/**
	 * Gets the timestamp of the number of milliseconds that have elapsed since
	 * the Unix epoch (1 January 1970 00:00:00 UTC).
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Date
	 * @returns {number} Returns the timestamp.
	 * @example
	 *
	 * _.defer(function(stamp) {
	 *   console.log(_.now() - stamp);
	 * }, _.now());
	 * // => Logs the number of milliseconds it took for the deferred invocation.
	 */
	var now = function() {
	  return root.Date.now();
	};

	/**
	 * Creates a debounced function that delays invoking `func` until after `wait`
	 * milliseconds have elapsed since the last time the debounced function was
	 * invoked. The debounced function comes with a `cancel` method to cancel
	 * delayed `func` invocations and a `flush` method to immediately invoke them.
	 * Provide `options` to indicate whether `func` should be invoked on the
	 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
	 * with the last arguments provided to the debounced function. Subsequent
	 * calls to the debounced function return the result of the last `func`
	 * invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is
	 * invoked on the trailing edge of the timeout only if the debounced function
	 * is invoked more than once during the `wait` timeout.
	 *
	 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
	 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
	 *
	 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	 * for details over the differences between `_.debounce` and `_.throttle`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to debounce.
	 * @param {number} [wait=0] The number of milliseconds to delay.
	 * @param {Object} [options={}] The options object.
	 * @param {boolean} [options.leading=false]
	 *  Specify invoking on the leading edge of the timeout.
	 * @param {number} [options.maxWait]
	 *  The maximum time `func` is allowed to be delayed before it's invoked.
	 * @param {boolean} [options.trailing=true]
	 *  Specify invoking on the trailing edge of the timeout.
	 * @returns {Function} Returns the new debounced function.
	 * @example
	 *
	 * // Avoid costly calculations while the window size is in flux.
	 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
	 *
	 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
	 * jQuery(element).on('click', _.debounce(sendMail, 300, {
	 *   'leading': true,
	 *   'trailing': false
	 * }));
	 *
	 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
	 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
	 * var source = new EventSource('/stream');
	 * jQuery(source).on('message', debounced);
	 *
	 * // Cancel the trailing debounced invocation.
	 * jQuery(window).on('popstate', debounced.cancel);
	 */
	function debounce(func, wait, options) {
	  var lastArgs,
	      lastThis,
	      maxWait,
	      result,
	      timerId,
	      lastCallTime,
	      lastInvokeTime = 0,
	      leading = false,
	      maxing = false,
	      trailing = true;

	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  wait = toNumber(wait) || 0;
	  if (isObject(options)) {
	    leading = !!options.leading;
	    maxing = 'maxWait' in options;
	    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }

	  function invokeFunc(time) {
	    var args = lastArgs,
	        thisArg = lastThis;

	    lastArgs = lastThis = undefined;
	    lastInvokeTime = time;
	    result = func.apply(thisArg, args);
	    return result;
	  }

	  function leadingEdge(time) {
	    // Reset any `maxWait` timer.
	    lastInvokeTime = time;
	    // Start the timer for the trailing edge.
	    timerId = setTimeout(timerExpired, wait);
	    // Invoke the leading edge.
	    return leading ? invokeFunc(time) : result;
	  }

	  function remainingWait(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime,
	        result = wait - timeSinceLastCall;

	    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
	  }

	  function shouldInvoke(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime;

	    // Either this is the first call, activity has stopped and we're at the
	    // trailing edge, the system time has gone backwards and we're treating
	    // it as the trailing edge, or we've hit the `maxWait` limit.
	    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
	      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
	  }

	  function timerExpired() {
	    var time = now();
	    if (shouldInvoke(time)) {
	      return trailingEdge(time);
	    }
	    // Restart the timer.
	    timerId = setTimeout(timerExpired, remainingWait(time));
	  }

	  function trailingEdge(time) {
	    timerId = undefined;

	    // Only invoke if we have `lastArgs` which means `func` has been
	    // debounced at least once.
	    if (trailing && lastArgs) {
	      return invokeFunc(time);
	    }
	    lastArgs = lastThis = undefined;
	    return result;
	  }

	  function cancel() {
	    if (timerId !== undefined) {
	      clearTimeout(timerId);
	    }
	    lastInvokeTime = 0;
	    lastArgs = lastCallTime = lastThis = timerId = undefined;
	  }

	  function flush() {
	    return timerId === undefined ? result : trailingEdge(now());
	  }

	  function debounced() {
	    var time = now(),
	        isInvoking = shouldInvoke(time);

	    lastArgs = arguments;
	    lastThis = this;
	    lastCallTime = time;

	    if (isInvoking) {
	      if (timerId === undefined) {
	        return leadingEdge(lastCallTime);
	      }
	      if (maxing) {
	        // Handle invocations in a tight loop.
	        timerId = setTimeout(timerExpired, wait);
	        return invokeFunc(lastCallTime);
	      }
	    }
	    if (timerId === undefined) {
	      timerId = setTimeout(timerExpired, wait);
	    }
	    return result;
	  }
	  debounced.cancel = cancel;
	  debounced.flush = flush;
	  return debounced;
	}

	/**
	 * Creates a throttled function that only invokes `func` at most once per
	 * every `wait` milliseconds. The throttled function comes with a `cancel`
	 * method to cancel delayed `func` invocations and a `flush` method to
	 * immediately invoke them. Provide `options` to indicate whether `func`
	 * should be invoked on the leading and/or trailing edge of the `wait`
	 * timeout. The `func` is invoked with the last arguments provided to the
	 * throttled function. Subsequent calls to the throttled function return the
	 * result of the last `func` invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is
	 * invoked on the trailing edge of the timeout only if the throttled function
	 * is invoked more than once during the `wait` timeout.
	 *
	 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
	 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
	 *
	 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	 * for details over the differences between `_.throttle` and `_.debounce`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to throttle.
	 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
	 * @param {Object} [options={}] The options object.
	 * @param {boolean} [options.leading=true]
	 *  Specify invoking on the leading edge of the timeout.
	 * @param {boolean} [options.trailing=true]
	 *  Specify invoking on the trailing edge of the timeout.
	 * @returns {Function} Returns the new throttled function.
	 * @example
	 *
	 * // Avoid excessively updating the position while scrolling.
	 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
	 *
	 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
	 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
	 * jQuery(element).on('click', throttled);
	 *
	 * // Cancel the trailing throttled invocation.
	 * jQuery(window).on('popstate', throttled.cancel);
	 */
	function throttle(func, wait, options) {
	  var leading = true,
	      trailing = true;

	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  if (isObject(options)) {
	    leading = 'leading' in options ? !!options.leading : leading;
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }
	  return debounce(func, wait, {
	    'leading': leading,
	    'maxWait': wait,
	    'trailing': trailing
	  });
	}

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && objectToString.call(value) == symbolTag);
	}

	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3.2);
	 * // => 3.2
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3.2');
	 * // => 3.2
	 */
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return NAN;
	  }
	  if (isObject(value)) {
	    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
	    value = isObject(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}

	module.exports = throttle;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
		Copyright (c) 2018 Jed Watson.
		Licensed under the MIT License (MIT), see
		http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = '';

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (arg) {
					classes = appendClass(classes, parseValue(arg));
				}
			}

			return classes;
		}

		function parseValue (arg) {
			if (typeof arg === 'string' || typeof arg === 'number') {
				return arg;
			}

			if (typeof arg !== 'object') {
				return '';
			}

			if (Array.isArray(arg)) {
				return classNames.apply(null, arg);
			}

			if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
				return arg.toString();
			}

			var classes = '';

			for (var key in arg) {
				if (hasOwn.call(arg, key) && arg[key]) {
					classes = appendClass(classes, key);
				}
			}

			return classes;
		}

		function appendClass (value, newClass) {
			if (!newClass) {
				return value;
			}
		
			if (value) {
				return value + ' ' + newClass;
			}
		
			return value + newClass;
		}

		if (typeof module !== 'undefined' && module.exports) {
			classNames.default = classNames;
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(32);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(50);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _propTypes = __webpack_require__(36);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint jsx-a11y/no-noninteractive-element-interactions: 0, jsx-a11y/no-noninteractive-tabindex: 0 */

	var ShowMore = function (_Component) {
	  _inherits(ShowMore, _Component);

	  function ShowMore() {
	    _classCallCheck(this, ShowMore);

	    var _this = _possibleConstructorReturn(this, (ShowMore.__proto__ || Object.getPrototypeOf(ShowMore)).call(this));

	    _this.onFocus = function () {
	      return _this.setState({ isFocused: true });
	    };

	    _this.onBlur = function () {
	      return _this.setState({ isFocused: false });
	    };

	    _this.onKeyDown = function (event) {
	      var _this$state = _this.state,
	          isFocused = _this$state.isFocused,
	          isHidden = _this$state.isHidden;

	      if (event.keyCode === 13) {
	        if (isFocused) {
	          _this.setState({ isHidden: !_this.state.isHidden });
	        } else if (!isHidden) {
	          _this.setState({ isHidden: true });
	        }
	      }
	    };

	    _this.close = function () {
	      if (!_this.state.isHidden) {
	        _this.setState({ isHidden: true });
	      }
	    };

	    _this.toggleVisibility = function (event) {
	      event.stopPropagation();
	      _this.setState({ isHidden: !_this.state.isHidden });
	    };

	    _this.state = {
	      isFocused: false,
	      isHidden: true
	    };
	    return _this;
	  }

	  _createClass(ShowMore, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      if (typeof window !== 'undefined') {
	        window.addEventListener('click', this.close);
	        window.addEventListener('keydown', this.onKeyDown);
	      }
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      return this.props.children.length !== nextProps.children.length || this.props.isShown !== nextProps.isShown || this.props.hasChildSelected !== nextProps.hasChildSelected || this.state !== nextState;
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      if (typeof window !== 'undefined') {
	        window.removeEventListener('click', this.close);
	        window.removeEventListener('keydown', this.onKeyDown);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          isShown = _props.isShown,
	          children = _props.children,
	          onShowMoreChanged = _props.onShowMoreChanged,
	          hasChildSelected = _props.hasChildSelected,
	          label = _props.label;

	      if (!isShown || !children || !children.length) {
	        return null;
	      }

	      var isListHidden = this.state.isHidden;
	      var showMoreStyles = (0, _classnames2.default)({
	        RRT__showmore: true,
	        'RRT__showmore--selected': hasChildSelected
	      });

	      var listStyles = (0, _classnames2.default)({
	        'RRT__showmore-list': true,
	        'RRT__showmore-list--opened': !isListHidden
	      });

	      var showMoreLabelStyles = (0, _classnames2.default)({
	        'RRT__showmore-label': true,
	        'RRT__showmore-label--selected': !isListHidden
	      });

	      return _react2.default.createElement(
	        'div',
	        {
	          ref: onShowMoreChanged,
	          className: showMoreStyles,
	          role: 'navigation',
	          tabIndex: '0',
	          onFocus: this.onFocus,
	          onBlur: this.onBlur,
	          onClick: this.toggleVisibility
	        },
	        _react2.default.createElement(
	          'div',
	          { className: showMoreLabelStyles },
	          label
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: listStyles, 'aria-hidden': isListHidden, role: 'menu' },
	          children
	        )
	      );
	    }
	  }]);

	  return ShowMore;
	}(_react.Component);

	exports.default = ShowMore;


	ShowMore.propTypes = {
	  children: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.object, _propTypes2.default.string]),
	  hasChildSelected: _propTypes2.default.bool,
	  isShown: _propTypes2.default.bool.isRequired,
	  onShowMoreChanged: _propTypes2.default.func,
	  label: _propTypes2.default.string
	};

	ShowMore.defaultProps = {
	  children: undefined,
	  hasChildSelected: false,
	  label: '...',
	  onShowMoreChanged: function onShowMoreChanged() {
	    return null;
	  }
	};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(32);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(36);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function onTabClick(selected, onClick, originalKey) {
	  return function () {
	    return !selected && onClick(originalKey);
	  };
	}

	var Tab = function (_Component) {
	  _inherits(Tab, _Component);

	  function Tab() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, Tab);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Tab.__proto__ || Object.getPrototypeOf(Tab)).call.apply(_ref, [this].concat(args))), _this), _this.renderRemovableTab = function () {
	      var _this$props = _this.props,
	          children = _this$props.children,
	          onRemove = _this$props.onRemove;

	      return _react2.default.createElement(
	        'div',
	        { className: 'RRT__removable' },
	        _react2.default.createElement(
	          'div',
	          { className: 'RRT__removable-text' },
	          children
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'RRT__removable-icon', onClick: onRemove },
	          'x'
	        )
	      );
	    }, _this.renderTab = function () {
	      var _this$props2 = _this.props,
	          children = _this$props2.children,
	          allowRemove = _this$props2.allowRemove;


	      if (allowRemove) {
	        return _this.renderRemovableTab();
	      }

	      return children;
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Tab, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps) {
	      return this.props.children !== nextProps.children || this.props.selected !== nextProps.selected || this.props.classNames !== nextProps.classNames;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var _props = this.props,
	          id = _props.id,
	          classNames = _props.classNames,
	          selected = _props.selected,
	          disabled = _props.disabled,
	          panelId = _props.panelId,
	          onClick = _props.onClick,
	          onFocus = _props.onFocus,
	          onBlur = _props.onBlur,
	          originalKey = _props.originalKey;


	      return _react2.default.createElement(
	        'div',
	        {
	          ref: function ref(e) {
	            return _this2.tab = e;
	          },
	          role: 'tab',
	          className: classNames,
	          id: id,
	          'aria-selected': selected ? 'true' : 'false',
	          'aria-expanded': selected ? 'true' : 'false',
	          'aria-disabled': disabled ? 'true' : 'false',
	          'aria-controls': panelId,
	          tabIndex: '0',
	          onClick: onTabClick(selected, onClick, originalKey),
	          onFocus: onFocus(originalKey),
	          onBlur: onBlur
	        },
	        this.renderTab()
	      );
	    }
	  }]);

	  return Tab;
	}(_react.Component);

	exports.default = Tab;


	Tab.propTypes = {
	  children: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.object, _propTypes2.default.string]),
	  disabled: _propTypes2.default.bool,

	  // generic props
	  panelId: _propTypes2.default.string.isRequired,
	  selected: _propTypes2.default.bool.isRequired,
	  onClick: _propTypes2.default.func.isRequired,
	  onRemove: _propTypes2.default.func,
	  onFocus: _propTypes2.default.func.isRequired,
	  onBlur: _propTypes2.default.func.isRequired,
	  allowRemove: _propTypes2.default.bool,
	  id: _propTypes2.default.string.isRequired,
	  originalKey: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]).isRequired,
	  classNames: _propTypes2.default.string.isRequired
	};

	Tab.defaultProps = {
	  children: undefined,
	  onRemove: function onRemove() {},
	  allowRemove: false,
	  disabled: false
	};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(32);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(36);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TabPanel = function (_Component) {
	  _inherits(TabPanel, _Component);

	  function TabPanel() {
	    _classCallCheck(this, TabPanel);

	    return _possibleConstructorReturn(this, (TabPanel.__proto__ || Object.getPrototypeOf(TabPanel)).apply(this, arguments));
	  }

	  _createClass(TabPanel, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps) {
	      return this.props.getContent !== nextProps.getContent || this.props.children !== nextProps.children || this.props.classNames !== nextProps.classNames;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          classNames = _props.classNames,
	          id = _props.id,
	          tabId = _props.tabId,
	          children = _props.children,
	          getContent = _props.getContent;


	      return _react2.default.createElement(
	        'div',
	        { className: classNames, role: 'tabpanel', id: id, 'aria-labelledby': tabId, 'aria-hidden': 'false' },
	        getContent && getContent(),
	        !getContent && children
	      );
	    }
	  }]);

	  return TabPanel;
	}(_react.Component);

	exports.default = TabPanel;


	TabPanel.propTypes = {
	  getContent: _propTypes2.default.func,
	  children: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.object, _propTypes2.default.string]),
	  id: _propTypes2.default.string.isRequired,

	  // generic props
	  classNames: _propTypes2.default.string.isRequired,
	  tabId: _propTypes2.default.string.isRequired
	};

	TabPanel.defaultProps = {
	  getContent: undefined,
	  children: undefined
	};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.InkBar = undefined;

	var _react = __webpack_require__(32);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(36);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var InkBar = exports.InkBar = function InkBar(_ref) {
	  var left = _ref.left,
	      width = _ref.width;
	  return _react2.default.createElement(
	    'div',
	    { className: 'RRT__inkbar-wrapper' },
	    _react2.default.createElement('div', { className: 'RRT__inkbar', style: { left: left, width: width } })
	  );
	};

	exports.default = InkBar;


	InkBar.propTypes = {
	  left: _propTypes2.default.number,
	  width: _propTypes2.default.number
	};

	InkBar.defaultProps = {
	  left: 0,
	  width: 0
	};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = PrismComponent;
	var React = __webpack_require__(32);

	function PrismComponent(props) {
	  var lines = [];
	  if (props.line) {
	    props.line.split(',').forEach(function (range) {
	      var parts = range.split('-');
	      if (parts.length === 1) {
	        lines.push(parts[0].trim());
	      } else {
	        var start = parseInt(parts[0].trim(), 10);
	        var end = parseInt(parts[1].trim(), 10);
	        for (var ii = start; ii <= end; ii++) {
	          lines.push(ii);
	        }
	      }
	    });
	  }

	  var language = props.language;
	  var grammar = _.languages[language] || _.languages['javascript'];
	  return React.createElement(
	    'pre',
	    { className: 'prism language-' + language },
	    Token.reactify(_.tokenize(props.children, grammar)),
	    lines.map(function (line, ii) {
	      return React.createElement('div', {
	        className: 'line-highlight',
	        key: ii,
	        style: { height: 21, top: 17 * (line - 1) }
	      });
	    })
	  );
	}

	/* http://prismjs.com/download.html?themes=prism */

	/**
	 * Prism: Lightweight, robust, elegant syntax highlighting
	 * MIT license http://www.opensource.org/licenses/mit-license.php/
	 * @author Lea Verou http://lea.verou.me
	 */

	var Prism;

	// Private helper vars
	var lang = /\blang(?:uage)?-(\w+)\b/i;
	var uniqueId = 0;

	var _ = Prism = {
	  util: {
	    encode: function encode(tokens) {
	      if (tokens instanceof Token) {
	        return new Token(tokens.type, _.util.encode(tokens.content), tokens.alias);
	      } else if (_.util.type(tokens) === 'Array') {
	        return tokens.map(_.util.encode);
	      } else {
	        return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
	      }
	    },

	    type: function type(o) {
	      return Object.prototype.toString.call(o).match(/\[object (\w+)\]/)[1];
	    },

	    objId: function objId(obj) {
	      if (!obj['__id']) {
	        Object.defineProperty(obj, '__id', { value: ++uniqueId });
	      }
	      return obj['__id'];
	    },

	    // Deep clone a language definition (e.g. to extend it)
	    clone: function clone(o) {
	      var type = _.util.type(o);

	      switch (type) {
	        case 'Object':
	          var clone = {};

	          for (var key in o) {
	            if (o.hasOwnProperty(key)) {
	              clone[key] = _.util.clone(o[key]);
	            }
	          }

	          return clone;

	        case 'Array':
	          // Check for existence for IE8
	          return o.map && o.map(function (v) {
	            return _.util.clone(v);
	          });
	      }

	      return o;
	    }
	  },

	  languages: {
	    extend: function extend(id, redef) {
	      var lang = _.util.clone(_.languages[id]);

	      for (var key in redef) {
	        lang[key] = redef[key];
	      }

	      return lang;
	    },

	    /**
	     * Insert a token before another token in a language literal
	     * As this needs to recreate the object (we cannot actually insert before keys in object literals),
	     * we cannot just provide an object, we need anobject and a key.
	     * @param inside The key (or language id) of the parent
	     * @param before The key to insert before. If not provided, the function appends instead.
	     * @param insert Object with the key/value pairs to insert
	     * @param root The object that contains `inside`. If equal to Prism.languages, it can be omitted.
	     */
	    insertBefore: function insertBefore(inside, before, insert, root) {
	      root = root || _.languages;
	      var grammar = root[inside];

	      if (arguments.length == 2) {
	        insert = arguments[1];

	        for (var newToken in insert) {
	          if (insert.hasOwnProperty(newToken)) {
	            grammar[newToken] = insert[newToken];
	          }
	        }

	        return grammar;
	      }

	      var ret = {};

	      for (var token in grammar) {

	        if (grammar.hasOwnProperty(token)) {

	          if (token == before) {

	            for (var newToken in insert) {

	              if (insert.hasOwnProperty(newToken)) {
	                ret[newToken] = insert[newToken];
	              }
	            }
	          }

	          ret[token] = grammar[token];
	        }
	      }

	      // Update references in other language definitions
	      _.languages.DFS(_.languages, function (key, value) {
	        if (value === root[inside] && key != inside) {
	          this[key] = ret;
	        }
	      });

	      return root[inside] = ret;
	    },

	    // Traverse a language definition with Depth First Search
	    DFS: function DFS(o, callback, type, visited) {
	      visited = visited || {};
	      for (var i in o) {
	        if (o.hasOwnProperty(i)) {
	          callback.call(o, i, o[i], type || i);

	          if (_.util.type(o[i]) === 'Object' && !visited[_.util.objId(o[i])]) {
	            visited[_.util.objId(o[i])] = true;
	            _.languages.DFS(o[i], callback, null, visited);
	          } else if (_.util.type(o[i]) === 'Array' && !visited[_.util.objId(o[i])]) {
	            visited[_.util.objId(o[i])] = true;
	            _.languages.DFS(o[i], callback, i, visited);
	          }
	        }
	      }
	    }
	  },
	  plugins: {},

	  highlightAll: function highlightAll(async, callback) {
	    var env = {
	      callback: callback,
	      selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
	    };

	    _.hooks.run("before-highlightall", env);

	    var elements = env.elements || document.querySelectorAll(env.selector);

	    for (var i = 0, element; element = elements[i++];) {
	      _.highlightElement(element, async === true, env.callback);
	    }
	  },

	  highlightElement: function highlightElement(element, async, callback) {
	    // Find language
	    var language,
	        grammar,
	        parent = element;

	    while (parent && !lang.test(parent.className)) {
	      parent = parent.parentNode;
	    }

	    if (parent) {
	      language = (parent.className.match(lang) || [, ''])[1].toLowerCase();
	      grammar = _.languages[language];
	    }

	    // Set language on the element, if not present
	    element.className = element.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;

	    // Set language on the parent, for styling
	    parent = element.parentNode;

	    if (/pre/i.test(parent.nodeName)) {
	      parent.className = parent.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
	    }

	    var code = element.textContent;

	    var env = {
	      element: element,
	      language: language,
	      grammar: grammar,
	      code: code
	    };

	    _.hooks.run('before-sanity-check', env);

	    if (!env.code || !env.grammar) {
	      _.hooks.run('complete', env);
	      return;
	    }

	    _.hooks.run('before-highlight', env);

	    if (async && _self.Worker) {
	      var worker = new Worker(_.filename);

	      worker.onmessage = function (evt) {
	        env.highlightedCode = evt.data;

	        _.hooks.run('before-insert', env);

	        env.element.innerHTML = env.highlightedCode;

	        callback && callback.call(env.element);
	        _.hooks.run('after-highlight', env);
	        _.hooks.run('complete', env);
	      };

	      worker.postMessage(JSON.stringify({
	        language: env.language,
	        code: env.code,
	        immediateClose: true
	      }));
	    } else {
	      env.highlightedCode = _.highlight(env.code, env.grammar, env.language);

	      _.hooks.run('before-insert', env);

	      env.element.innerHTML = env.highlightedCode;

	      callback && callback.call(element);

	      _.hooks.run('after-highlight', env);
	      _.hooks.run('complete', env);
	    }
	  },

	  highlight: function highlight(text, grammar, language) {
	    var tokens = _.tokenize(text, grammar);
	    return Token.stringify(_.util.encode(tokens), language);
	  },

	  tokenize: function tokenize(text, grammar, language) {
	    var Token = _.Token;

	    var strarr = [text];

	    var rest = grammar.rest;

	    if (rest) {
	      for (var token in rest) {
	        grammar[token] = rest[token];
	      }

	      delete grammar.rest;
	    }

	    tokenloop: for (var token in grammar) {
	      if (!grammar.hasOwnProperty(token) || !grammar[token]) {
	        continue;
	      }

	      var patterns = grammar[token];
	      patterns = _.util.type(patterns) === "Array" ? patterns : [patterns];

	      for (var j = 0; j < patterns.length; ++j) {
	        var pattern = patterns[j],
	            inside = pattern.inside,
	            lookbehind = !!pattern.lookbehind,
	            greedy = !!pattern.greedy,
	            lookbehindLength = 0,
	            alias = pattern.alias;

	        if (greedy && !pattern.pattern.global) {
	          // Without the global flag, lastIndex won't work
	          var flags = pattern.pattern.toString().match(/[imuy]*$/)[0];
	          pattern.pattern = RegExp(pattern.pattern.source, flags + "g");
	        }

	        pattern = pattern.pattern || pattern;

	        // Don’t cache length as it changes during the loop
	        for (var i = 0, pos = 0; i < strarr.length; pos += (strarr[i].matchedStr || strarr[i]).length, ++i) {

	          var str = strarr[i];

	          if (strarr.length > text.length) {
	            // Something went terribly wrong, ABORT, ABORT!
	            break tokenloop;
	          }

	          if (str instanceof Token) {
	            continue;
	          }

	          pattern.lastIndex = 0;

	          var match = pattern.exec(str),
	              delNum = 1;

	          // Greedy patterns can override/remove up to two previously matched tokens
	          if (!match && greedy && i != strarr.length - 1) {
	            pattern.lastIndex = pos;
	            match = pattern.exec(text);
	            if (!match) {
	              break;
	            }

	            var from = match.index + (lookbehind ? match[1].length : 0),
	                to = match.index + match[0].length,
	                k = i,
	                p = pos;

	            for (var len = strarr.length; k < len && p < to; ++k) {
	              p += (strarr[k].matchedStr || strarr[k]).length;
	              // Move the index i to the element in strarr that is closest to from
	              if (from >= p) {
	                ++i;
	                pos = p;
	              }
	            }

	            /*
	             * If strarr[i] is a Token, then the match starts inside another Token, which is invalid
	             * If strarr[k - 1] is greedy we are in conflict with another greedy pattern
	             */
	            if (strarr[i] instanceof Token || strarr[k - 1].greedy) {
	              continue;
	            }

	            // Number of tokens to delete and replace with the new match
	            delNum = k - i;
	            str = text.slice(pos, p);
	            match.index -= pos;
	          }

	          if (!match) {
	            continue;
	          }

	          if (lookbehind) {
	            lookbehindLength = match[1].length;
	          }

	          var from = match.index + lookbehindLength,
	              match = match[0].slice(lookbehindLength),
	              to = from + match.length,
	              before = str.slice(0, from),
	              after = str.slice(to);

	          var args = [i, delNum];

	          if (before) {
	            args.push(before);
	          }

	          var wrapped = new Token(token, inside ? _.tokenize(match, inside) : match, alias, match, greedy);

	          args.push(wrapped);

	          if (after) {
	            args.push(after);
	          }

	          Array.prototype.splice.apply(strarr, args);
	        }
	      }
	    }

	    return strarr;
	  },

	  hooks: {
	    all: {},

	    add: function add(name, callback) {
	      var hooks = _.hooks.all;

	      hooks[name] = hooks[name] || [];

	      hooks[name].push(callback);
	    },

	    run: function run(name, env) {
	      var callbacks = _.hooks.all[name];

	      if (!callbacks || !callbacks.length) {
	        return;
	      }

	      for (var i = 0, callback; callback = callbacks[i++];) {
	        callback(env);
	      }
	    }
	  }
	};

	var Token = _.Token = function (type, content, alias, matchedStr, greedy) {
	  this.type = type;
	  this.content = content;
	  this.alias = alias;
	  // Copy of the full string this token was created from
	  this.matchedStr = matchedStr || null;
	  this.greedy = !!greedy;
	};

	Token.stringify = function (o, language, parent) {
	  if (typeof o == 'string') {
	    return o;
	  }

	  if (_.util.type(o) === 'Array') {
	    return o.map(function (element) {
	      return Token.stringify(element, language, o);
	    }).join('');
	  }

	  var env = {
	    type: o.type,
	    content: Token.stringify(o.content, language, parent),
	    tag: 'span',
	    classes: ['token', o.type],
	    attributes: {},
	    language: language,
	    parent: parent
	  };

	  if (env.type == 'comment') {
	    env.attributes['spellcheck'] = 'true';
	  }

	  if (o.alias) {
	    var aliases = _.util.type(o.alias) === 'Array' ? o.alias : [o.alias];
	    Array.prototype.push.apply(env.classes, aliases);
	  }

	  _.hooks.run('wrap', env);

	  var attributes = '';

	  for (var name in env.attributes) {
	    attributes += (attributes ? ' ' : '') + name + '="' + (env.attributes[name] || '') + '"';
	  }

	  return '<' + env.tag + ' class="' + env.classes.join(' ') + '"' + (attributes ? ' ' + attributes : '') + '>' + env.content + '</' + env.tag + '>';
	};

	Token.reactify = function (o, language, parent, key) {
	  if (typeof o == 'string') {
	    return o;
	  }

	  if (_.util.type(o) === 'Array') {
	    return o.map(function (element, i) {
	      return Token.reactify(element, language, o, i);
	    });
	  }

	  var env = {
	    type: o.type,
	    content: Token.reactify(o.content, language, parent),
	    tag: 'span',
	    classes: [o.type],
	    attributes: { key: key },
	    language: language,
	    parent: parent
	  };

	  if (env.type == 'comment') {
	    env.attributes.spellCheck = true;
	  }

	  if (o.alias) {
	    var aliases = _.util.type(o.alias) === 'Array' ? o.alias : [o.alias];
	    Array.prototype.push.apply(env.classes, aliases);
	  }

	  _.hooks.run('wrap', env);

	  env.attributes.className = env.classes.join(' ');

	  return React.DOM[env.tag](env.attributes, env.content);
	};

	Prism.languages.markup = {
	  'comment': /<!--[\w\W]*?-->/,
	  'prolog': /<\?[\w\W]+?\?>/,
	  'doctype': /<!DOCTYPE[\w\W]+?>/,
	  'cdata': /<!\[CDATA\[[\w\W]*?]]>/i,
	  'tag': {
	    pattern: /<\/?[^\s>\/]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,
	    inside: {
	      'tag': {
	        pattern: /^<\/?[^\s>\/]+/i,
	        inside: {
	          'punctuation': /^<\/?/,
	          'namespace': /^[^\s>\/:]+:/
	        }
	      },
	      'attr-value': {
	        pattern: /=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,
	        inside: {
	          'punctuation': /[=>"']/
	        }
	      },
	      'punctuation': /\/?>/,
	      'attr-name': {
	        pattern: /[^\s>\/]+/,
	        inside: {
	          'namespace': /^[^\s>\/:]+:/
	        }
	      }

	    }
	  },
	  'entity': /&#?[\da-z]{1,8};/i
	};

	// Plugin to make entity title show the real entity, idea by Roman Komarov
	Prism.hooks.add('wrap', function (env) {

	  if (env.type === 'entity') {
	    env.attributes['title'] = env.content.replace(/&amp;/, '&');
	  }
	});
	;
	Prism.languages.clike = {
	  'comment': [{
	    pattern: /(^|[^\\])\/\*[\w\W]*?\*\//,
	    lookbehind: true
	  }, {
	    pattern: /(^|[^\\:])\/\/.*/,
	    lookbehind: true
	  }],
	  'string': /("|')(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
	  'class-name': {
	    pattern: /((?:(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,
	    lookbehind: true,
	    inside: {
	      punctuation: /(\.|\\)/
	    }
	  },
	  'keyword': /\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
	  'boolean': /\b(true|false)\b/,
	  'function': /[a-z0-9_]+(?=\()/i,
	  'number': /\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/,
	  'operator': /[-+]{1,2}|!|<=?|>=?|={1,3}|&{1,2}|\|?\||\?|\*|\/|~|\^|%/,
	  'punctuation': /[{}[\];(),.:]/
	};

	Prism.languages.javascript = Prism.languages.extend('clike', {
	  'keyword': /\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|false|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/,
	  'number': /\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,
	  'function': /(?!\d)[a-z0-9_$]+(?=\()/i
	});

	Prism.languages.insertBefore('javascript', 'keyword', {
	  'regex': {
	    pattern: /(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,
	    lookbehind: true
	  }
	});

	Prism.languages.insertBefore('javascript', 'class-name', {
	  'template-string': {
	    pattern: /`(?:\\`|\\?[^`])*`/,
	    inside: {
	      'interpolation': {
	        pattern: /\$\{[^}]+\}/,
	        inside: {
	          'interpolation-punctuation': {
	            pattern: /^\$\{|\}$/,
	            alias: 'punctuation'
	          },
	          rest: Prism.languages.javascript
	        }
	      },
	      'string': /[\s\S]+/
	    }
	  }
	});

	if (Prism.languages.markup) {
	  Prism.languages.insertBefore('markup', 'tag', {
	    'script': {
	      pattern: /<script[\w\W]*?>[\w\W]*?<\/script>/i,
	      inside: {
	        'tag': {
	          pattern: /<script[\w\W]*?>|<\/script>/i,
	          inside: Prism.languages.markup.tag.inside
	        },
	        rest: Prism.languages.javascript
	      },
	      alias: 'language-javascript'
	    }
	  });
	}
	;
	(function (Prism) {

	  var javascript = Prism.util.clone(Prism.languages.javascript);

	  Prism.languages.jsx = Prism.languages.extend('markup', javascript);
	  Prism.languages.jsx.tag.pattern = /<\/?[\w:-]+\s*(?:\s+[\w:-]+(?:=(?:("|')(\\?[\w\W])*?\1|[^\s'">=]+|(\{[\w\W]*?\})))?\s*)*\/?>/i;

	  Prism.languages.jsx.tag.inside['attr-value'].pattern = /=[^\{](?:('|")[\w\W]*?(\1)|[^\s>]+)/i;

	  Prism.languages.insertBefore('inside', 'attr-value', {
	    'script': {
	      pattern: /=(\{[\w\W]*?\})/i,
	      inside: {
	        'function': Prism.languages.javascript['function'],
	        'punctuation': /[={}[\];(),.:]/,
	        'keyword': Prism.languages.javascript.keyword
	      },
	      'alias': 'language-javascript'
	    }
	  }, Prism.languages.jsx.tag);
	})(Prism);

	Prism.languages.json = {
	  'attr-name': {
	    pattern: /"(?:\\.|[^\\"])*"(?=\s*:)/i,
	    greedy: true
	  },
	  string: {
	    pattern: /"(?:\\.|[^\\"])*"/,
	    greedy: true
	  },
	  boolean: /\b(?:true|false)\b/,
	  keyword: /\bnull\b/,
	  number: /(?:\B-|\b)\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\b/,
	  punctuation: /[{}[\],:]/
	};

	Prism.languages.docker = {
	  'keyword': {
	    pattern: /(^\s*)(?:ADD|ARG|CMD|COPY|ENTRYPOINT|ENV|EXPOSE|FROM|HEALTHCHECK|LABEL|MAINTAINER|ONBUILD|RUN|SHELL|STOPSIGNAL|USER|VOLUME|WORKDIR)(?=\s)/mi,
	    lookbehind: true
	  },
	  'string': /("|')(?:(?!\1)[^\\\r\n]|\\(?:\r\n|[\s\S]))*\1/,
	  'comment': /#.*/,
	  'punctuation': /---|\.\.\.|[:[\]{}\-,|>?]/
	};

	Prism.languages.dockerfile = Prism.languages.docker;

	Prism.languages.js = Prism.languages.javascript;

	Prism.languages.java = Prism.languages.extend('clike', {
	  'keyword': /\b(?:abstract|continue|for|new|switch|assert|default|goto|package|synchronized|boolean|do|if|private|this|break|double|implements|protected|throw|byte|else|import|public|throws|case|enum|instanceof|return|transient|catch|extends|int|short|try|char|final|interface|static|void|class|finally|long|strictfp|volatile|const|float|native|super|while)\b/,
	  'number': /\b0b[01]+\b|\b0x[\da-f]*\.?[\da-fp-]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?[df]?/i,
	  'operator': {
	    pattern: /(^|[^.])(?:\+[+=]?|-[-=]?|!=?|<<?=?|>>?>?=?|==?|&[&=]?|\|[|=]?|\*=?|\/=?|%=?|\^=?|[?:~])/m,
	    lookbehind: true
	  }
	});

	Prism.languages.insertBefore('java', 'function', {
	  'annotation': {
	    alias: 'punctuation',
	    pattern: /(^|[^.])@\w+/,
	    lookbehind: true
	  }
	});

	Prism.languages.insertBefore('java', 'class-name', {
	  'generics': {
	    pattern: /<\s*\w+(?:\.\w+)?(?:\s*,\s*\w+(?:\.\w+)?)*>/i,
	    alias: 'function',
	    inside: {
	      keyword: Prism.languages.java.keyword,
	      punctuation: /[<>(),.:]/
	    }
	  }
	});

	Prism.languages.python = {
	  'comment': {
	    pattern: /(^|[^\\])#.*/,
	    lookbehind: true
	  },
	  'triple-quoted-string': {
	    pattern: /("""|''')[\s\S]+?\1/,
	    greedy: true,
	    alias: 'string'
	  },
	  'string': {
	    pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,
	    greedy: true
	  },
	  'function': {
	    pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
	    lookbehind: true
	  },
	  'class-name': {
	    pattern: /(\bclass\s+)\w+/i,
	    lookbehind: true
	  },
	  'keyword': /\b(?:as|assert|async|await|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|nonlocal|pass|print|raise|return|try|while|with|yield)\b/,
	  'builtin': /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
	  'boolean': /\b(?:True|False|None)\b/,
	  'number': /(?:\b(?=\d)|\B(?=\.))(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*\.?\d*|\.\d+)(?:e[+-]?\d+)?j?\b/i,
	  'operator': /[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]|\b(?:or|and|not)\b/,
	  'punctuation': /[{}[\];(),.:]/
	};

	Prism.languages.csharp = Prism.languages.extend('clike', {
	  'keyword': /\b(?:abstract|add|alias|as|ascending|async|await|base|bool|break|byte|case|catch|char|checked|class|const|continue|decimal|default|delegate|descending|do|double|dynamic|else|enum|event|explicit|extern|false|finally|fixed|float|for|foreach|from|get|global|goto|group|if|implicit|in|int|interface|internal|into|is|join|let|lock|long|namespace|new|null|object|operator|orderby|out|override|params|partial|private|protected|public|readonly|ref|remove|return|sbyte|sealed|select|set|short|sizeof|stackalloc|static|string|struct|switch|this|throw|true|try|typeof|uint|ulong|unchecked|unsafe|ushort|using|value|var|virtual|void|volatile|where|while|yield)\b/,
	  'string': [{
	    pattern: /@("|')(?:\1\1|\\[\s\S]|(?!\1)[^\\])*\1/,
	    greedy: true
	  }, {
	    pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*?\1/,
	    greedy: true
	  }],
	  'class-name': [{
	    // (Foo bar, Bar baz)
	    pattern: /\b[A-Z]\w*(?:\.\w+)*\b(?=\s+\w+)/,
	    inside: {
	      punctuation: /\./
	    }
	  }, {
	    // [Foo]
	    pattern: /(\[)[A-Z]\w*(?:\.\w+)*\b/,
	    lookbehind: true,
	    inside: {
	      punctuation: /\./
	    }
	  }, {
	    // class Foo : Bar
	    pattern: /(\b(?:class|interface)\s+[A-Z]\w*(?:\.\w+)*\s*:\s*)[A-Z]\w*(?:\.\w+)*\b/,
	    lookbehind: true,
	    inside: {
	      punctuation: /\./
	    }
	  }, {
	    // class Foo
	    pattern: /((?:\b(?:class|interface|new)\s+)|(?:catch\s+\())[A-Z]\w*(?:\.\w+)*\b/,
	    lookbehind: true,
	    inside: {
	      punctuation: /\./
	    }
	  }],
	  'number': /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)f?/i
	});

	Prism.languages.insertBefore('csharp', 'class-name', {
	  'generic-method': {
	    pattern: /\w+\s*<[^>\r\n]+?>\s*(?=\()/,
	    inside: {
	      'function': /^\w+/,
	      'class-name': {
	        pattern: /\b[A-Z]\w*(?:\.\w+)*\b/,
	        inside: {
	          punctuation: /\./
	        }
	      },
	      keyword: Prism.languages.csharp.keyword,
	      punctuation: /[<>(),.:]/
	    }
	  },
	  'preprocessor': {
	    pattern: /(^\s*)#.*/m,
	    lookbehind: true,
	    alias: 'property',
	    inside: {
	      // highlight preprocessor directives as keywords
	      'directive': {
	        pattern: /(\s*#)\b(?:define|elif|else|endif|endregion|error|if|line|pragma|region|undef|warning)\b/,
	        lookbehind: true,
	        alias: 'keyword'
	      }
	    }
	  }
	});

	Prism.languages.dotnet = Prism.languages.csharp;
	module.exports = exports['default'];

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(31)['default'];

	var _react = __webpack_require__(32);

	var _react2 = _interopRequireDefault(_react);

	var _Prism = __webpack_require__(55);

	var _Prism2 = _interopRequireDefault(_Prism);

	var items = [{
	  name: 'js',
	  content: _react2['default'].createElement(
	    'div',
	    null,
	    _react2['default'].createElement(
	      'div',
	      null,
	      _react2['default'].createElement(
	        _Prism2['default'],
	        { language: 'csharp' },
	        '\n  // create ws client and listen to ws://localhost:3000\n  this._socket = new WebSocket(this._url);\n  this._socket.on(\'open\', () => {\n    log.debug("connected");\n  });\n  '
	      )
	    ),
	    _react2['default'].createElement(
	      'div',
	      null,
	      _react2['default'].createElement(
	        'a',
	        { href: 'https://github.com/kube-HPC/algorithm-node-example/blob/aa5f7b38c1df45c29c752e7d6c70ede00169b994/lib/algorithm-ws.js#L23', target: '_blank' },
	        'code'
	      )
	    )
	  )
	}, {
	  name: 'Java',
	  content: _react2['default'].createElement(
	    _Prism2['default'],
	    { language: 'java' },
	    '\nthis._socket = new WebSocket(this._url);\nthis._socket.on(\'open\', () => {\n  log.debug("connected");\n});'
	  )
	}, {
	  name: 'Python',
	  content: _react2['default'].createElement(
	    _Prism2['default'],
	    { language: 'python' },
	    '\nthis._socket = WebSocket(this._url)\nthis._socket.on(\'open\', () => {\n  log.debug("connected");\n});'
	  )
	}];

	module.exports = items;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(31)['default'];

	var _react = __webpack_require__(32);

	var _react2 = _interopRequireDefault(_react);

	var _Prism = __webpack_require__(55);

	var _Prism2 = _interopRequireDefault(_Prism);

	var items = [{
	  name: 'Js',
	  content: _react2['default'].createElement(
	    'div',
	    null,
	    _react2['default'].createElement(
	      'div',
	      null,
	      _react2['default'].createElement(
	        _Prism2['default'],
	        { language: 'js' },
	        '\n  this._socket.on(\'message\', (message) => {\n    const payload = JSON.parse(message);\n    switch (payload.command) {\n      case messages.incoming.initialize:\n        this._initialize(payload);\n        break;\n      case messages.incoming.start:\n        this._start();\n        break;\n      case messages.incoming.stop:\n        this._stop();\n        break;\n      default:\n        log.debug("unknown message payload.command");\n      } \n    });\n'
	      )
	    ),
	    _react2['default'].createElement(
	      'div',
	      null,
	      _react2['default'].createElement(
	        'a',
	        { href: 'https://github.com/kube-HPC/algorithm-node-example/blob/aa5f7b38c1df45c29c752e7d6c70ede00169b994/lib/algorithm-ws.js#L23', target: '_blank' },
	        'code'
	      )
	    )
	  )
	}, {
	  name: 'Java',
	  content: _react2['default'].createElement(
	    _Prism2['default'],
	    { language: 'js' },
	    '{\n  this._socket = new WebSocket(this._url);\n  this._socket.on(\'open\', () => {\n     log.debug("connected");\n  });\n}'
	  )
	}, {
	  name: 'Python',
	  content: _react2['default'].createElement(
	    _Prism2['default'],
	    { language: 'python' },
	    '{\n  this._socket = new WebSocket(this._url);\n  this._socket.on(\'open\', () => {\n     log.debug("connected");\n  });\n}'
	  )
	}];

	module.exports = items;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(31)['default'];

	var _react = __webpack_require__(32);

	var _react2 = _interopRequireDefault(_react);

	var _Prism = __webpack_require__(55);

	var _Prism2 = _interopRequireDefault(_Prism);

	var items = [{
	  name: 'Js',
	  content: _react2['default'].createElement(
	    'div',
	    null,
	    _react2['default'].createElement(
	      'div',
	      null,
	      _react2['default'].createElement(
	        _Prism2['default'],
	        { language: 'js' },
	        '\n  _initialize(payload) {\n    this._input = payload.data.input;  // store the input\n    this._send(messages.outgoing.initialized);  // send ack event\n  }\n'
	      )
	    ),
	    _react2['default'].createElement(
	      'div',
	      null,
	      _react2['default'].createElement(
	        'a',
	        { href: 'https://github.com/kube-HPC/algorithm-node-example/blob/aa5f7b38c1df45c29c752e7d6c70ede00169b994/lib/algorithm-ws.js#L23', target: '_blank' },
	        'code'
	      )
	    )
	  )
	}, {
	  name: 'Java',
	  content: _react2['default'].createElement(
	    _Prism2['default'],
	    { language: 'js' },
	    '\n_initialize(payload) {\n  this._input = payload.data.input;  // store the input\n  this._send(messages.outgoing.initialized);  // send ack event\n}\n'
	  )
	}, {
	  name: 'Python',
	  content: _react2['default'].createElement(
	    _Prism2['default'],
	    { language: 'js' },
	    '\n_initialize(payload) {\n  this._input = payload.data.input;  // store the input\n  this._send(messages.outgoing.initialized);  // send ack event\n}\n'
	  )
	}];

	module.exports = items;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(31)['default'];

	var _react = __webpack_require__(32);

	var _react2 = _interopRequireDefault(_react);

	var _Prism = __webpack_require__(55);

	var _Prism2 = _interopRequireDefault(_Prism);

	var items = [{
	  name: 'Js',
	  content: _react2['default'].createElement(
	    'div',
	    null,
	    _react2['default'].createElement(
	      'div',
	      null,
	      _react2['default'].createElement(
	        _Prism2['default'],
	        { language: 'js' },
	        '\n  _start() {\n    this._send(messages.outgoing.started);   // send ack event\n    try {\n        // your code goes here...\n        const output = await myAlgorithm.process(this._input);  // use the input\n        // your code goes here...\n\n        // send response\n        this._send(messages.outgoing.done, {\n            data: output\n        });\n    }\n    catch (error) {\n        this._onError(error); // send error event\n    }\n}'
	      )
	    ),
	    _react2['default'].createElement(
	      'div',
	      null,
	      _react2['default'].createElement(
	        'a',
	        { href: 'https://github.com/kube-HPC/algorithm-node-example/blob/aa5f7b38c1df45c29c752e7d6c70ede00169b994/lib/algorithm-ws.js#L23', target: '_blank' },
	        'code'
	      )
	    )
	  )
	}, {
	  name: 'Java',
	  content: _react2['default'].createElement(
	    _Prism2['default'],
	    { language: 'js' },
	    '{\n  this._socket = new WebSocket(this._url);\n  this._socket.on(\'open\', () => {\n     log.debug("connected");\n  });\n}'
	  )
	}, {
	  name: 'Python',
	  content: _react2['default'].createElement(
	    _Prism2['default'],
	    { language: 'js' },
	    '{\n  this._socket = new WebSocket(this._url);\n  this._socket.on(\'open\', () => {\n     log.debug("connected");\n  });\n}'
	  )
	}];

	module.exports = items;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(31)['default'];

	var _react = __webpack_require__(32);

	var _react2 = _interopRequireDefault(_react);

	var _Prism = __webpack_require__(55);

	var _Prism2 = _interopRequireDefault(_Prism);

	var items = [{
	  name: 'Js',
	  content: _react2['default'].createElement(
	    'div',
	    null,
	    _react2['default'].createElement(
	      'div',
	      null,
	      _react2['default'].createElement(
	        _Prism2['default'],
	        { language: 'js' },
	        '\n  _stop() {\n    // your code goes here...\n    // e.g. myAlgorithm.stop();\n    // your code goes here...\n    \n    this._send(messages.outgoing.stopped);  // send ack event\n  }\n'
	      )
	    ),
	    _react2['default'].createElement(
	      'div',
	      null,
	      _react2['default'].createElement(
	        'a',
	        { href: 'https://github.com/kube-HPC/algorithm-node-example/blob/aa5f7b38c1df45c29c752e7d6c70ede00169b994/lib/algorithm-ws.js#L23', target: '_blank' },
	        'code'
	      )
	    )
	  )
	}, {
	  name: 'Java',
	  content: _react2['default'].createElement(
	    _Prism2['default'],
	    { language: 'js' },
	    '{\n  this._socket = new WebSocket(this._url);\n  this._socket.on(\'open\', () => {\n     log.debug("connected");\n  });\n}'
	  )
	}, {
	  name: 'Python',
	  content: _react2['default'].createElement(
	    _Prism2['default'],
	    { language: 'python' },
	    '{\n  this._socket = new WebSocket(this._url);\n  this._socket.on(\'open\', () => {\n     log.debug("connected");\n  });\n}'
	  )
	}];

	module.exports = items;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(31)['default'];

	var _react = __webpack_require__(32);

	var _react2 = _interopRequireDefault(_react);

	var _Prism = __webpack_require__(55);

	var _Prism2 = _interopRequireDefault(_Prism);

	var items = [{
	    name: 'Js',
	    content: _react2['default'].createElement(
	        'div',
	        null,
	        _react2['default'].createElement(
	            'div',
	            null,
	            _react2['default'].createElement(
	                _Prism2['default'],
	                { language: 'js' },
	                '\n    // connect handler        \n    _connect() {\n        this._socket = new WebSocket(this._url);\n        this._socket.on(\'close\', (code, reason) => {\n            switch (code) {\n                case 1000:\n                    log.debug("socket normal closed");\n                    break;\n                default:\n                    this._reconnect();\n                    break;\n            }\n        });\n        this._socket.on(\'error\', (e) => {\n            switch (e.code) {\n                case \'ECONNREFUSED\':\n                    this._reconnect();\n                    break;\n                default:\n                    log.error("error");\n                    break;\n            }\n        });\n    }\n    \n    // reconnect handler \n    _reconnect() {\n      log.debug("socket reconnecting");\n      this._socket.removeAllListeners();\n      setTimeout(() => {\n          this._connect();\n      }, this._reconnectInterval);\n    }\n}'
	            )
	        ),
	        _react2['default'].createElement(
	            'div',
	            null,
	            _react2['default'].createElement(
	                'a',
	                { href: 'https://github.com/kube-HPC/algorithm-node-example/blob/aa5f7b38c1df45c29c752e7d6c70ede00169b994/lib/algorithm-ws.js#L23', target: '_blank' },
	                'code'
	            )
	        )
	    )
	}, {
	    name: 'Java',
	    content: _react2['default'].createElement(
	        _Prism2['default'],
	        { language: 'js' },
	        '{\n  this._socket = new WebSocket(this._url);\n  this._socket.on(\'open\', () => {\n     log.debug("connected");\n  });\n}'
	    )
	}, {
	    name: 'Python',
	    content: _react2['default'].createElement(
	        _Prism2['default'],
	        { language: 'python' },
	        '{\n  this._socket = new WebSocket(this._url);\n  this._socket.on(\'open\', () => {\n     log.debug("connected");\n  });\n}'
	    )
	}];

	module.exports = items;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(31)['default'];

	var _react = __webpack_require__(32);

	var _react2 = _interopRequireDefault(_react);

	var _Prism = __webpack_require__(55);

	var _Prism2 = _interopRequireDefault(_Prism);

	var items = [{
	  name: 'Js',
	  content: _react2['default'].createElement(
	    'div',
	    null,
	    _react2['default'].createElement(
	      'div',
	      null,
	      _react2['default'].createElement(
	        _Prism2['default'],
	        { language: 'js' },
	        '\n  _onError(error) {\n    this._send(messages.outgoing.error, {\n      error: {\n        code: \'Failed\',\n        message: error.message || error,\n        details: error.stackTrace\n      }\n    });\n  }\n  '
	      )
	    ),
	    _react2['default'].createElement(
	      'div',
	      null,
	      _react2['default'].createElement(
	        'a',
	        { href: 'https://github.com/kube-HPC/algorithm-node-example/blob/aa5f7b38c1df45c29c752e7d6c70ede00169b994/lib/algorithm-ws.js#L23', target: '_blank' },
	        'code'
	      )
	    )
	  )
	}, {
	  name: 'Java',
	  content: _react2['default'].createElement(
	    _Prism2['default'],
	    { language: 'js' },
	    '{\n  this._socket = new WebSocket(this._url);\n  this._socket.on(\'open\', () => {\n     log.debug("connected");\n  });\n}'
	  )
	}, {
	  name: 'Python',
	  content: _react2['default'].createElement(
	    _Prism2['default'],
	    { language: 'python' },
	    '{\n  this._socket = new WebSocket(this._url);\n  this._socket.on(\'open\', () => {\n     log.debug("connected");\n  });\n}'
	  )
	}];

	module.exports = items;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(31)['default'];

	var _react = __webpack_require__(32);

	var _react2 = _interopRequireDefault(_react);

	var _Prism = __webpack_require__(55);

	var _Prism2 = _interopRequireDefault(_Prism);

	var items = [{
	  name: 'Js',
	  content: _react2['default'].createElement(
	    'div',
	    null,
	    _react2['default'].createElement(
	      'div',
	      null,
	      _react2['default'].createElement(
	        _Prism2['default'],
	        { language: 'js' },
	        '\n  _send(command, data, error) {\n    try {\n      this._socket.send(JSON.stringify({ command, data, error }));\n    }\n    catch (e) {\n        log.error(e);\n      }\n  }\n  '
	      )
	    ),
	    _react2['default'].createElement(
	      'div',
	      null,
	      _react2['default'].createElement(
	        'a',
	        { href: 'https://github.com/kube-HPC/algorithm-node-example/blob/aa5f7b38c1df45c29c752e7d6c70ede00169b994/lib/algorithm-ws.js#L23', target: '_blank' },
	        'code'
	      )
	    )
	  )
	}, {
	  name: 'Java',
	  content: _react2['default'].createElement(
	    _Prism2['default'],
	    { language: 'js' },
	    '{\n  this._socket = new WebSocket(this._url);\n  this._socket.on(\'open\', () => {\n     log.debug("connected");\n  });\n}'
	  )
	}, {
	  name: 'Python',
	  content: _react2['default'].createElement(
	    _Prism2['default'],
	    { language: 'python' },
	    '{\n  this._socket = new WebSocket(this._url);\n  this._socket.on(\'open\', () => {\n     log.debug("connected");\n  });\n}'
	  )
	}];

	module.exports = items;

/***/ })
/******/ ]);