(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$":
/*!****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.[jt]sx?$ ***!
  \****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./hello_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$";

/***/ }),

/***/ "./assets/react/controllers sync recursive \\.(j%7Ct)sx?$":
/*!******************************************************!*\
  !*** ./assets/react/controllers/ sync \.(j%7Ct)sx?$ ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./Main.jsx": "./assets/react/controllers/Main.jsx"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/react/controllers sync recursive \\.(j%7Ct)sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _symfony_ux_react_dist_render_controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/ux-react/dist/render_controller.js */ "./vendor/symfony/ux-react/assets/dist/render_controller.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  'symfony--ux-react--react': _symfony_ux_react_dist_render_controller_js__WEBPACK_IMPORTED_MODULE_0__["default"],
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "./node_modules/core-js/modules/es.reflect.to-string-tag.js");
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }



















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */
var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);
  var _super = _createSuper(_default);
  function _default() {
    _classCallCheck(this, _default);
    return _super.apply(this, arguments);
  }
  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
    }
  }]);
  return _default;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__.Controller);


/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _symfony_ux_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/ux-react */ "./vendor/symfony/ux-react/assets/dist/register_controller.js");
/* harmony import */ var _bootstrap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bootstrap.js */ "./assets/bootstrap.js");
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");


/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)

(0,_symfony_ux_react__WEBPACK_IMPORTED_MODULE_0__.registerReactControllerComponents)(__webpack_require__("./assets/react/controllers sync recursive \\.(j%7Ct)sx?$"));

/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   app: () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");


// Registers Stimulus controllers from controllers.json and in the controllers/ directory
var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$"));
// register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./assets/react/constants.js":
/*!***********************************!*\
  !*** ./assets/react/constants.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   apiUrl: () => (/* binding */ apiUrl)
/* harmony export */ });
// export const apiUrl = 'http://localhost:8000/api/';

var apiUrl = 'http://test.witb7904.odns.fr/api/';

/***/ }),

/***/ "./assets/react/controllers/Main.jsx":
/*!*******************************************!*\
  !*** ./assets/react/controllers/Main.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.parse-float.js */ "./node_modules/core-js/modules/es.parse-float.js");
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../constants */ "./assets/react/constants.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.esm.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.mjs");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }


























function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var Main = function Main() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_26__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    materiaux = _useState2[0],
    setMateriaux = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_26__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    materiels = _useState4[0],
    setMateriels = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_26__.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    personnels = _useState6[0],
    setPersonnels = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_26__.useState)([]),
    _useState8 = _slicedToArray(_useState7, 2),
    materiauPointe = _useState8[0],
    setMateriauPointe = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_26__.useState)([]),
    _useState10 = _slicedToArray(_useState9, 2),
    materielPointe = _useState10[0],
    setMaterielPointe = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_26__.useState)([]),
    _useState12 = _slicedToArray(_useState11, 2),
    personnelPointe = _useState12[0],
    setPersonnelPointe = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_26__.useState)(0),
    _useState14 = _slicedToArray(_useState13, 2),
    selectedItem = _useState14[0],
    setSelectedItem = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_26__.useState)(""),
    _useState16 = _slicedToArray(_useState15, 2),
    itemLabel = _useState16[0],
    setItemLabel = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_26__.useState)([]),
    _useState18 = _slicedToArray(_useState17, 2),
    tabArray = _useState18[0],
    setTabArray = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_26__.useState)(0),
    _useState20 = _slicedToArray(_useState19, 2),
    totalMateriaux = _useState20[0],
    setTotalMateriaux = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_26__.useState)(0),
    _useState22 = _slicedToArray(_useState21, 2),
    totalMateriels = _useState22[0],
    setTotalMateriels = _useState22[1];
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_26__.useState)(0),
    _useState24 = _slicedToArray(_useState23, 2),
    totalPersonnels = _useState24[0],
    setTotalPersonnels = _useState24[1];
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_26__.useState)(false),
    _useState26 = _slicedToArray(_useState25, 2),
    isSaving = _useState26[0],
    setIsSaving = _useState26[1];
  (0,react__WEBPACK_IMPORTED_MODULE_26__.useEffect)(function () {
    loadData();
  }, []);
  var saveItem = function saveItem() {
    var url = "";
    switch (selectedItem) {
      case "MATERIAUX":
        url = "".concat(_constants__WEBPACK_IMPORTED_MODULE_27__.apiUrl, "materiaus");
        break;
      case "MATERIELS":
        url = "".concat(_constants__WEBPACK_IMPORTED_MODULE_27__.apiUrl, "materiels");
        break;
      case "PERSONNELS":
        url = "".concat(_constants__WEBPACK_IMPORTED_MODULE_27__.apiUrl, "personnels");
        break;
      default:
        break;
    }
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        libelle: itemLabel
      })
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      setItemLabel("");
      switch (selectedItem) {
        case "MATERIAUX":
          setMateriaux([].concat(_toConsumableArray(materiaux), [{
            value: data.id,
            label: data.libelle
          }]));
          setTabArray([].concat(_toConsumableArray(materiaux), [{
            value: data.id,
            label: data.libelle
          }]));
          break;
        case "MATERIELS":
          setMateriels([].concat(_toConsumableArray(materiels), [{
            value: data.id,
            label: data.libelle
          }]));
          setTabArray([].concat(_toConsumableArray(materiels), [{
            value: data.id,
            label: data.libelle
          }]));
          break;
        case "PERSONNELS":
          setPersonnels([].concat(_toConsumableArray(personnels), [{
            value: data.id,
            label: data.libelle
          }]));
          setTabArray([].concat(_toConsumableArray(personnels), [{
            value: data.id,
            label: data.libelle
          }]));
          break;
        default:
          break;
      }
      react_toastify__WEBPACK_IMPORTED_MODULE_28__.toast.success("Enregistrement effectué avec succès !");
    });
  };
  var showModalAdd = function showModalAdd(type) {
    setSelectedItem(type);
    switch (type) {
      case "MATERIAUX":
        setTabArray(materiaux);
        break;
      case "MATERIELS":
        setTabArray(materiels);
        break;
      case "PERSONNELS":
        setTabArray(personnels);
        break;
      default:
        setTabArray([]);
        break;
    }
  };
  var loadData = function loadData() {
    fetch("".concat(_constants__WEBPACK_IMPORTED_MODULE_27__.apiUrl, "materiaus"), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      //map data to value and label
      setMateriaux(data.map(function (item) {
        return {
          value: item.id,
          label: item.libelle
        };
      }));
    });
    fetch("".concat(_constants__WEBPACK_IMPORTED_MODULE_27__.apiUrl, "materiels"), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      //map data to value and label
      setMateriels(data.map(function (item) {
        return {
          value: item.id,
          label: item.libelle
        };
      }));
    });
    fetch("".concat(_constants__WEBPACK_IMPORTED_MODULE_27__.apiUrl, "personnels"), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      //map data to value and label
      setPersonnels(data.map(function (item) {
        return {
          value: item.id,
          label: item.libelle
        };
      }));
    });
  };
  var handleMatiereChange = function handleMatiereChange(item, type) {
    var materierePointe = {
      id: item.value,
      libelle: item.label,
      unite: "KG",
      quantite: 0,
      prixUnitaire: 0,
      montant: 0
    };
    switch (type) {
      case "MATERIAUX":
        //item already exist
        if (materiauPointe.find(function (element) {
          return element.id === item.value;
        })) {
          react_toastify__WEBPACK_IMPORTED_MODULE_28__.toast.error("Cet élément existe déjà dans le tableau !");
          return;
        }
        setMateriauPointe([].concat(_toConsumableArray(materiauPointe), [materierePointe]));
        break;
      case "MATERIELS":
        if (materielPointe.find(function (element) {
          return element.id === item.value;
        })) {
          react_toastify__WEBPACK_IMPORTED_MODULE_28__.toast.error("Cet élément existe déjà dans le tableau !");
          return;
        }
        setMaterielPointe([].concat(_toConsumableArray(materielPointe), [materierePointe]));
        break;
      case "PERSONNELS":
        if (personnelPointe.find(function (element) {
          return element.id === item.value;
        })) {
          react_toastify__WEBPACK_IMPORTED_MODULE_28__.toast.error("Cet élément existe déjà dans le tableau !");
          return;
        }
        setPersonnelPointe([].concat(_toConsumableArray(personnelPointe), [materierePointe]));
    }
  };
  var handleQteChange = function handleQteChange(id, value, type) {
    switch (type) {
      case "MATERIAUX":
        setMateriauPointe(materiauPointe.map(function (item) {
          if (item.id === id) {
            item.quantite = parseFloat(value);
            item.montant = item.quantite * item.prixUnitaire;
          }
          return item;
        }));
        setTotalMateriaux(materiauPointe.reduce(function (a, b) {
          return a + (b['montant'] || 0);
        }, 0));
        break;
      case "MATERIELS":
        setMaterielPointe(materielPointe.map(function (item) {
          if (item.id === id) {
            item.quantite = parseFloat(value);
            item.montant = item.quantite * item.prixUnitaire;
          }
          return item;
        }));
        setTotalMateriels(materielPointe.reduce(function (a, b) {
          return a + (b['montant'] || 0);
        }, 0));
        break;
      case "PERSONNELS":
        setPersonnelPointe(personnelPointe.map(function (item) {
          if (item.id === id) {
            item.quantite = parseFloat(value);
            item.montant = item.quantite * item.prixUnitaire;
          }
          return item;
        }));
        setTotalPersonnels(personnelPointe.reduce(function (a, b) {
          return a + (b['montant'] || 0);
        }, 0));
        break;
    }
  };
  var handlePrixUnitaireChange = function handlePrixUnitaireChange(id, value, type) {
    switch (type) {
      case "MATERIAUX":
        setMateriauPointe(materiauPointe.map(function (item) {
          if (item.id === id) {
            item.prixUnitaire = parseFloat(value);
            item.montant = item.quantite * item.prixUnitaire;
          }
          return item;
        }));
        setTotalMateriaux(materiauPointe.reduce(function (a, b) {
          return a + (b['montant'] || 0);
        }, 0));
        break;
      case "MATERIELS":
        setMaterielPointe(materielPointe.map(function (item) {
          if (item.id === id) {
            item.prixUnitaire = parseFloat(value);
            item.montant = item.quantite * item.prixUnitaire;
          }
          return item;
        }));
        setTotalMateriels(materielPointe.reduce(function (a, b) {
          return a + (b['montant'] || 0);
        }, 0));
        break;
      case "PERSONNELS":
        setPersonnelPointe(personnelPointe.map(function (item) {
          if (item.id === id) {
            item.prixUnitaire = parseFloat(value);
            item.montant = item.quantite * item.prixUnitaire;
          }
          return item;
        }));
        setTotalPersonnels(personnelPointe.reduce(function (a, b) {
          return a + (b['montant'] || 0);
        }, 0));
        break;
    }
    setTotalMateriaux(materiauPointe.reduce(function (a, b) {
      return a + (b['montant'] || 0);
    }, 0));
  };
  var saveCoutProduction = function saveCoutProduction() {
    setIsSaving(true);
    setTimeout(function () {
      setIsSaving(false);
      react_toastify__WEBPACK_IMPORTED_MODULE_28__.toast.success("Enregistrement effectué avec succès !");
    }, 5000);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement((react__WEBPACK_IMPORTED_MODULE_26___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement(react_toastify__WEBPACK_IMPORTED_MODULE_28__.ToastContainer, {
    position: 'top-left',
    autoClose: 5000,
    theme: 'dark'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("div", {
    className: "card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("div", {
    className: "card-header d-flex flex-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("h5", null, "Elaboration du cout de production"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("div", {
    className: "row ms-auto g-1 d-flex align-items-end"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("div", {
    className: "col-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("label", {
    htmlFor: "numero"
  }, "Num\xE9ro de cout de production"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("input", {
    type: "text",
    id: "numero",
    className: "form-control"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("div", {
    className: "col-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("button", {
    className: "btn btn-success"
  }, "Charger")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("div", {
    className: "accordion",
    id: "accordionExample"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("div", {
    className: "accordion-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("h2", {
    className: "accordion-header",
    id: "headingOne"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("button", {
    className: "accordion-button",
    type: "button",
    "data-bs-toggle": "collapse",
    "data-bs-target": "#collapseOne",
    "aria-expanded": "false",
    "aria-controls": "collapseOne"
  }, "Mat\xE9riaux")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("div", {
    id: "collapseOne",
    className: "accordion-collapse collapse show",
    "aria-labelledby": "headingOne"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("div", {
    className: "accordion-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("div", {
    className: "row g-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("div", {
    className: "col-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement(react_select__WEBPACK_IMPORTED_MODULE_30__["default"], {
    onChange: function onChange(item) {
      handleMatiereChange(item, 'MATERIAUX');
    },
    options: materiaux
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("table", {
    className: "styled-table mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("th", null, "Mat\xE9riaux"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("th", null, "Unit\xE9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("th", {
    style: {
      width: "15%"
    }
  }, "Quantit\xE9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("th", {
    style: {
      width: "15%"
    }
  }, "Prix Unitaire"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("th", null, "Montant"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("th", null, "Actions"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("tbody", null, materiauPointe.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement((react__WEBPACK_IMPORTED_MODULE_26___default().Fragment), null, materiauPointe.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("tr", {
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("td", null, item.libelle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("td", null, item.unite), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("input", {
      type: "number",
      value: item.quantite,
      onChange: function onChange(event) {
        handleQteChange(item.id, event.target.value, 'MATERIAUX');
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("input", {
      type: "number",
      value: item.prixUnitaire,
      onChange: function onChange(event) {
        handlePrixUnitaireChange(item.id, event.target.value, 'MATERIAUX');
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("td", null, item.montant.toLocaleString('fr-FR'), " FCFA"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("button", {
      className: "btn btn-sm btn-danger"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("i", {
      className: "fa fa-minus"
    }))));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("td", {
    colSpan: "4",
    className: "text-end"
  }, "Total"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("td", {
    colSpan: 2
  }, totalMateriaux.toLocaleString('fr-FR'), " FCFA"))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("td", {
    colSpan: "5"
  }, "Aucun mat\xE9riau point\xE9"))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("div", {
    className: "accordion-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("h2", {
    className: "accordion-header",
    id: "headingTwo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("button", {
    className: "accordion-button",
    type: "button",
    "data-bs-toggle": "collapse",
    "data-bs-target": "#collapseTwo",
    "aria-expanded": "false",
    "aria-controls": "collapseTwo"
  }, "Mat\xE9riels")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("div", {
    id: "collapseTwo",
    className: "accordion-collapse collapse show",
    "aria-labelledby": "headingTwo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("div", {
    className: "accordion-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("div", {
    className: "row g-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("div", {
    className: "col-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement(react_select__WEBPACK_IMPORTED_MODULE_30__["default"], {
    onChange: function onChange(item) {
      handleMatiereChange(item, 'MATERIELS');
    },
    options: materiels
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("table", {
    className: "styled-table mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("th", null, "Mat\xE9riels"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("th", null, "Unit\xE9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("th", {
    style: {
      width: "15%"
    }
  }, "Quantit\xE9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("th", {
    style: {
      width: "15%"
    }
  }, "Prix Unitaire"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("th", null, "Montant"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("th", null, "Actions"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("tbody", null, materielPointe.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement((react__WEBPACK_IMPORTED_MODULE_26___default().Fragment), null, materielPointe.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("tr", {
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("td", null, item.libelle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("td", null, item.unite), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("input", {
      type: "number",
      value: item.quantite,
      onChange: function onChange(event) {
        handleQteChange(item.id, event.target.value, 'MATERIELS');
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("input", {
      type: "number",
      value: item.prixUnitaire,
      onChange: function onChange(event) {
        handlePrixUnitaireChange(item.id, event.target.value, 'MATERIELS');
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("td", null, item.montant.toLocaleString('fr-FR'), " FCFA"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("button", {
      className: "btn btn-sm btn-danger"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("i", {
      className: "fa fa-minus"
    }))));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("td", {
    colSpan: "4",
    className: "text-end"
  }, "Total"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("td", {
    colSpan: 2
  }, totalMateriels.toLocaleString('fr-FR'), " FCFA"))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("td", {
    colSpan: "5"
  }, "Aucun mat\xE9riel point\xE9"))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("div", {
    className: "accordion-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("h2", {
    className: "accordion-header",
    id: "headingThree"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("button", {
    className: "accordion-button",
    type: "button",
    "data-bs-toggle": "collapse",
    "data-bs-target": "#collapseThree",
    "aria-expanded": "false",
    "aria-controls": "collapseThree"
  }, "Personnels")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("div", {
    id: "collapseThree",
    className: "accordion-collapse collapse show",
    "aria-labelledby": "headingThree"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("div", {
    className: "accordion-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("div", {
    className: "row g-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("div", {
    className: "col-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement(react_select__WEBPACK_IMPORTED_MODULE_30__["default"], {
    onChange: function onChange(item) {
      handleMatiereChange(item, 'PERSONNELS');
    },
    options: personnels
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("table", {
    className: "styled-table mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("th", null, "Personnels"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("th", null, "Unit\xE9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("th", {
    style: {
      width: "15%"
    }
  }, "Quantit\xE9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("th", {
    style: {
      width: "15%"
    }
  }, "Prix Unitaire"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("th", null, "Montant"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("th", null, "Actions"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("tbody", null, personnelPointe.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement((react__WEBPACK_IMPORTED_MODULE_26___default().Fragment), null, personnelPointe.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("tr", {
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("td", null, item.libelle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("td", null, item.unite), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("input", {
      type: "number",
      value: item.quantite,
      onChange: function onChange(event) {
        handleQteChange(item.id, event.target.value, 'PERSONNELS');
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("input", {
      type: "number",
      value: item.prixUnitaire,
      onChange: function onChange(event) {
        handlePrixUnitaireChange(item.id, event.target.value, 'PERSONNELS');
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("td", null, item.montant.toLocaleString('fr-FR'), " FCFA"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("button", {
      className: "btn btn-sm btn-danger"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("i", {
      className: "fa fa-minus"
    }))));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("td", {
    colSpan: "4",
    className: "text-end"
  }, "Total"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("td", {
    colSpan: 2
  }, totalPersonnels.toLocaleString('fr-FR'), " FCFA"))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("td", {
    colSpan: "5"
  }, "Aucun personnel point\xE9"))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("div", {
    className: "d-flex justify-content-center mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("button", {
    disabled: isSaving,
    className: "btn btn-success",
    onClick: function onClick() {
      saveCoutProduction();
    }
  }, isSaving ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement((react__WEBPACK_IMPORTED_MODULE_26___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("span", {
    className: "spinner-border spinner-border-sm",
    role: "status",
    "aria-hidden": "true"
  }), " Enregistrement en cours...") : "Enregistrer")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("div", {
    className: "card-footer d-flex flex-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("button", {
    className: "btn btn-info"
  }, "Liste des pointages"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("div", {
    className: "ms-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("button", {
    className: "btn btn-primary",
    "data-bs-toggle": "modal",
    "data-bs-target": "#staticBackdrop",
    onClick: function onClick() {
      showModalAdd("MATERIAUX");
    }
  }, "Ajouter mat\xE9riau"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("button", {
    className: "btn btn-success ms-1",
    "data-bs-toggle": "modal",
    "data-bs-target": "#staticBackdrop",
    onClick: function onClick() {
      showModalAdd("MATERIELS");
    }
  }, "Ajouter mat\xE9riel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("button", {
    className: "btn btn-dark ms-1",
    "data-bs-toggle": "modal",
    "data-bs-target": "#staticBackdrop",
    onClick: function onClick() {
      showModalAdd("PERSONNELS");
    }
  }, "Ajouter mat\xE9riel"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("div", {
    className: "modal fade",
    id: "staticBackdrop",
    "data-bs-backdrop": "static",
    "data-bs-keyboard": "false",
    tabIndex: "-1",
    "aria-labelledby": "staticBackdropLabel",
    "aria-hidden": "true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("div", {
    className: "modal-dialog"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("h1", {
    className: "modal-title fs-5",
    id: "staticBackdropLabel"
  }, " ", selectedItem, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("button", {
    type: "button",
    className: "btn-close",
    "data-bs-dismiss": "modal",
    "aria-label": "Close"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("div", {
    className: "modal-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("div", {
    className: "row g-1 d-flex align-items-end"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("div", {
    className: "col-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("input", {
    type: "text",
    className: "form-control",
    value: itemLabel,
    placeholder: "Libellé " + selectedItem,
    onChange: function onChange(e) {
      return setItemLabel(e.target.value);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("div", {
    className: "col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("button", {
    onClick: function onClick() {
      return saveItem();
    },
    type: "button",
    className: "btn btn-success"
  }, "Enregistrer"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("table", {
    className: "styled-table mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("th", null, "Libell\xE9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("th", {
    style: {
      width: "10%"
    }
  }, "Actions"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("tbody", null, tabArray.length > 0 ? tabArray.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("tr", {
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("td", null, item.label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("button", {
      className: "btn btn-sm btn-danger"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("i", {
      className: "fa fa-minus"
    }))));
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("td", {
    colSpan: "2"
  }, "Aucun \xE9l\xE9ment"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("div", {
    className: "modal-footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("button", {
    type: "button",
    className: "btn btn-secondary",
    "data-bs-dismiss": "modal"
  }, "Fermer")))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);

/***/ }),

/***/ "./vendor/symfony/ux-react/assets/dist/register_controller.js":
/*!********************************************************************!*\
  !*** ./vendor/symfony/ux-react/assets/dist/register_controller.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   registerReactControllerComponents: () => (/* binding */ registerReactControllerComponents)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_12__);













function registerReactControllerComponents(context) {
  var reactControllers = {};
  var importAllReactComponents = function importAllReactComponents(r) {
    r.keys().forEach(function (key) {
      return reactControllers[key] = r(key)["default"];
    });
  };
  importAllReactComponents(context);
  window.resolveReactComponent = function (name) {
    var component = reactControllers["./".concat(name, ".jsx")] || reactControllers["./".concat(name, ".tsx")];
    if (typeof component === 'undefined') {
      var possibleValues = Object.keys(reactControllers).map(function (key) {
        return key.replace('./', '').replace('.jsx', '').replace('.tsx', '');
      });
      throw new Error("React controller \"".concat(name, "\" does not exist. Possible values: ").concat(possibleValues.join(', ')));
    }
    return component;
  };
}


/***/ }),

/***/ "./vendor/symfony/ux-react/assets/dist/render_controller.js":
/*!******************************************************************!*\
  !*** ./vendor/symfony/ux-react/assets/dist/render_controller.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ default_1)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "./node_modules/core-js/modules/es.reflect.to-string-tag.js");
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }



















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var createRoot;
var m = react_dom__WEBPACK_IMPORTED_MODULE_20__;
if (false) {} else {
  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  createRoot = function createRoot(c, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.createRoot(c, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
}
var default_1 = /*#__PURE__*/function (_Controller) {
  _inherits(default_1, _Controller);
  var _super = _createSuper(default_1);
  function default_1() {
    _classCallCheck(this, default_1);
    return _super.apply(this, arguments);
  }
  _createClass(default_1, [{
    key: "connect",
    value: function connect() {
      var props = this.propsValue ? this.propsValue : null;
      this.dispatchEvent('connect', {
        component: this.componentValue,
        props: props
      });
      if (!this.componentValue) {
        throw new Error('No component specified.');
      }
      var component = window.resolveReactComponent(this.componentValue);
      this._renderReactElement( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement(component, props, null));
      this.dispatchEvent('mount', {
        componentName: this.componentValue,
        component: component,
        props: props
      });
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      this.element.root.unmount();
      this.dispatchEvent('unmount', {
        component: this.componentValue,
        props: this.propsValue ? this.propsValue : null
      });
    }
  }, {
    key: "_renderReactElement",
    value: function _renderReactElement(reactElement) {
      var element = this.element;
      if (!element.root) {
        element.root = createRoot(this.element);
      }
      element.root.render(reactElement);
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(name, payload) {
      this.dispatch(name, {
        detail: payload,
        prefix: 'react'
      });
    }
  }]);
  return default_1;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_21__.Controller);
default_1.values = {
  component: String,
  props: Object
};


/***/ }),

/***/ "./assets/styles/app.css":
/*!*******************************!*\
  !*** ./assets/styles/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_core-js_modules_es_ar-84fa39"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSxJQUFJLENBQUNzQixjQUFjO1FBQzlCSCxLQUFLLEVBQUUsSUFBSSxDQUFDQyxVQUFVLEdBQUcsSUFBSSxDQUFDQSxVQUFVLEdBQUc7TUFDL0MsQ0FBQyxDQUFDO0lBQ047RUFBQztJQUFBbEssR0FBQTtJQUFBQyxLQUFBLEVBQ0QsU0FBQW9LLG9CQUFvQkssWUFBWSxFQUFFO01BQzlCLElBQU12SyxPQUFPLEdBQUcsSUFBSSxDQUFDQSxPQUFPO01BQzVCLElBQUksQ0FBQ0EsT0FBTyxDQUFDcUssSUFBSSxFQUFFO1FBQ2ZySyxPQUFPLENBQUNxSyxJQUFJLEdBQUduQixVQUFVLENBQUMsSUFBSSxDQUFDbEosT0FBTyxDQUFDO01BQzNDO01BQ0FBLE9BQU8sQ0FBQ3FLLElBQUksQ0FBQ0csTUFBTSxDQUFDRCxZQUFZLENBQUM7SUFDckM7RUFBQztJQUFBMUssR0FBQTtJQUFBQyxLQUFBLEVBQ0QsU0FBQWtLLGNBQWN0QixJQUFJLEVBQUUrQixPQUFPLEVBQUU7TUFDekIsSUFBSSxDQUFDQyxRQUFRLENBQUNoQyxJQUFJLEVBQUU7UUFBRWlDLE1BQU0sRUFBRUYsT0FBTztRQUFFRyxNQUFNLEVBQUU7TUFBUSxDQUFDLENBQUM7SUFDN0Q7RUFBQztFQUFBLE9BQUFmLFNBQUE7QUFBQSxFQS9CbUIxSywyREFBVTtBQWlDbEMwSyxTQUFTLENBQUNnQixNQUFNLEdBQUc7RUFDZmxDLFNBQVMsRUFBRW1DLE1BQU07RUFDakJoQixLQUFLLEVBQUVqQjtBQUNYLENBQUM7Ozs7Ozs7Ozs7Ozs7QUMxREQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vIFxcLltqdF1zeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvIHN5bmMgXFwuKGolN0N0KXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9NYWluLmpzeCIsIndlYnBhY2s6Ly8vLi92ZW5kb3Ivc3ltZm9ueS91eC1yZWFjdC9hc3NldHMvZGlzdC9yZWdpc3Rlcl9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3ZlbmRvci9zeW1mb255L3V4LXJlYWN0L2Fzc2V0cy9kaXN0L3JlbmRlcl9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLmNzcz8zZmJhIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9oZWxsb19jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSAuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEgXFxcXC5banRdc3g/JFwiOyIsInZhciBtYXAgPSB7XG5cdFwiLi9NYWluLmpzeFwiOiBcIi4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL01haW4uanN4XCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIFxcXFwuKGolN0N0KXN4PyRcIjsiLCJpbXBvcnQgY29udHJvbGxlcl8wIGZyb20gJ0BzeW1mb255L3V4LXJlYWN0L2Rpc3QvcmVuZGVyX2NvbnRyb2xsZXIuanMnO1xuZXhwb3J0IGRlZmF1bHQge1xuICAnc3ltZm9ueS0tdXgtcmVhY3QtLXJlYWN0JzogY29udHJvbGxlcl8wLFxufTsiLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcblxuLypcbiAqIFRoaXMgaXMgYW4gZXhhbXBsZSBTdGltdWx1cyBjb250cm9sbGVyIVxuICpcbiAqIEFueSBlbGVtZW50IHdpdGggYSBkYXRhLWNvbnRyb2xsZXI9XCJoZWxsb1wiIGF0dHJpYnV0ZSB3aWxsIGNhdXNlXG4gKiB0aGlzIGNvbnRyb2xsZXIgdG8gYmUgZXhlY3V0ZWQuIFRoZSBuYW1lIFwiaGVsbG9cIiBjb21lcyBmcm9tIHRoZSBmaWxlbmFtZTpcbiAqIGhlbGxvX2NvbnRyb2xsZXIuanMgLT4gXCJoZWxsb1wiXG4gKlxuICogRGVsZXRlIHRoaXMgZmlsZSBvciBhZGFwdCBpdCBmb3IgeW91ciB1c2UhXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gJ0hlbGxvIFN0aW11bHVzISBFZGl0IG1lIGluIGFzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzJztcbiAgICB9XG59XG4iLCJpbXBvcnQgeyByZWdpc3RlclJlYWN0Q29udHJvbGxlckNvbXBvbmVudHMgfSBmcm9tICdAc3ltZm9ueS91eC1yZWFjdCc7XG5pbXBvcnQgJy4vYm9vdHN0cmFwLmpzJztcbi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5jc3MnO1xuXG5yZWdpc3RlclJlYWN0Q29udHJvbGxlckNvbXBvbmVudHMocmVxdWlyZS5jb250ZXh0KCcuL3JlYWN0L2NvbnRyb2xsZXJzJywgdHJ1ZSwgL1xcLihqfHQpc3g/JC8pKTsiLCJpbXBvcnQgeyBzdGFydFN0aW11bHVzQXBwIH0gZnJvbSAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlJztcblxuLy8gUmVnaXN0ZXJzIFN0aW11bHVzIGNvbnRyb2xsZXJzIGZyb20gY29udHJvbGxlcnMuanNvbiBhbmQgaW4gdGhlIGNvbnRyb2xsZXJzLyBkaXJlY3RvcnlcbmV4cG9ydCBjb25zdCBhcHAgPSBzdGFydFN0aW11bHVzQXBwKHJlcXVpcmUuY29udGV4dChcbiAgICAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIhLi9jb250cm9sbGVycycsXG4gICAgdHJ1ZSxcbiAgICAvXFwuW2p0XXN4PyQvXG4pKTtcbi8vIHJlZ2lzdGVyIGFueSBjdXN0b20sIDNyZCBwYXJ0eSBjb250cm9sbGVycyBoZXJlXG4vLyBhcHAucmVnaXN0ZXIoJ3NvbWVfY29udHJvbGxlcl9uYW1lJywgU29tZUltcG9ydGVkQ29udHJvbGxlcik7XG4iLCIvLyBleHBvcnQgY29uc3QgYXBpVXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvJztcblxuZXhwb3J0IGNvbnN0IGFwaVVybCA9ICdodHRwOi8vdGVzdC53aXRiNzkwNC5vZG5zLmZyL2FwaS8nO1xuIiwiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHthcGlVcmx9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCBTZWxlY3QgZnJvbSAncmVhY3Qtc2VsZWN0JztcbmltcG9ydCB7VG9hc3RDb250YWluZXIsIHRvYXN0fSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XG5cbmltcG9ydCAncmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzcyc7XG5cblxuY29uc3QgTWFpbiA9ICgpID0+IHtcbiAgICBjb25zdCBbbWF0ZXJpYXV4LCBzZXRNYXRlcmlhdXhdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFttYXRlcmllbHMsIHNldE1hdGVyaWVsc10gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW3BlcnNvbm5lbHMsIHNldFBlcnNvbm5lbHNdID0gdXNlU3RhdGUoW10pO1xuXG4gICAgY29uc3QgW21hdGVyaWF1UG9pbnRlLCBzZXRNYXRlcmlhdVBvaW50ZV0gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW21hdGVyaWVsUG9pbnRlLCBzZXRNYXRlcmllbFBvaW50ZV0gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW3BlcnNvbm5lbFBvaW50ZSwgc2V0UGVyc29ubmVsUG9pbnRlXSA9IHVzZVN0YXRlKFtdKTtcblxuICAgIGNvbnN0IFtzZWxlY3RlZEl0ZW0sIHNldFNlbGVjdGVkSXRlbV0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbaXRlbUxhYmVsLCBzZXRJdGVtTGFiZWxdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgICBjb25zdCBbdGFiQXJyYXksIHNldFRhYkFycmF5XSA9IHVzZVN0YXRlKFtdKTtcblxuICAgIGNvbnN0IFt0b3RhbE1hdGVyaWF1eCwgc2V0VG90YWxNYXRlcmlhdXhdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW3RvdGFsTWF0ZXJpZWxzLCBzZXRUb3RhbE1hdGVyaWVsc10gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbdG90YWxQZXJzb25uZWxzLCBzZXRUb3RhbFBlcnNvbm5lbHNdID0gdXNlU3RhdGUoMCk7XG5cbiAgICBjb25zdCBbaXNTYXZpbmcsIHNldElzU2F2aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGxvYWREYXRhKCk7XG4gICAgfSwgW10pO1xuXG4gICAgY29uc3Qgc2F2ZUl0ZW0gPSAoKSA9PiB7XG4gICAgICAgIGxldCB1cmwgPSBcIlwiO1xuXG4gICAgICAgIHN3aXRjaCAoc2VsZWN0ZWRJdGVtKSB7XG4gICAgICAgICAgICBjYXNlIFwiTUFURVJJQVVYXCI6XG4gICAgICAgICAgICAgICAgdXJsID0gYCR7YXBpVXJsfW1hdGVyaWF1c2A7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiTUFURVJJRUxTXCI6XG4gICAgICAgICAgICAgICAgdXJsID0gYCR7YXBpVXJsfW1hdGVyaWVsc2A7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiUEVSU09OTkVMU1wiOlxuICAgICAgICAgICAgICAgIHVybCA9IGAke2FwaVVybH1wZXJzb25uZWxzYDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBmZXRjaCh1cmwsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgbGliZWxsZTogaXRlbUxhYmVsXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIHNldEl0ZW1MYWJlbChcIlwiKTtcblxuICAgICAgICAgICAgICAgIHN3aXRjaCAoc2VsZWN0ZWRJdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJNQVRFUklBVVhcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldE1hdGVyaWF1eChbLi4ubWF0ZXJpYXV4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGRhdGEuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGRhdGEubGliZWxsZVxuICAgICAgICAgICAgICAgICAgICAgICAgfV0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUYWJBcnJheShbLi4ubWF0ZXJpYXV4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGRhdGEuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGRhdGEubGliZWxsZVxuICAgICAgICAgICAgICAgICAgICAgICAgfV0pXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiTUFURVJJRUxTXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRNYXRlcmllbHMoWy4uLm1hdGVyaWVscywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBkYXRhLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBkYXRhLmxpYmVsbGVcbiAgICAgICAgICAgICAgICAgICAgICAgIH1dKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUYWJBcnJheShbLi4ubWF0ZXJpZWxzLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGRhdGEuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGRhdGEubGliZWxsZVxuICAgICAgICAgICAgICAgICAgICAgICAgfV0pXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiUEVSU09OTkVMU1wiOlxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UGVyc29ubmVscyhbLi4ucGVyc29ubmVscywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBkYXRhLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBkYXRhLmxpYmVsbGVcbiAgICAgICAgICAgICAgICAgICAgICAgIH1dKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUYWJBcnJheShbLi4ucGVyc29ubmVscywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBkYXRhLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBkYXRhLmxpYmVsbGVcbiAgICAgICAgICAgICAgICAgICAgICAgIH1dKVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRvYXN0LnN1Y2Nlc3MoXCJFbnJlZ2lzdHJlbWVudCBlZmZlY3R1w6kgYXZlYyBzdWNjw6hzICFcIik7XG4gICAgICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IHNob3dNb2RhbEFkZCA9ICh0eXBlKSA9PiB7XG4gICAgICAgIHNldFNlbGVjdGVkSXRlbSh0eXBlKVxuXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSBcIk1BVEVSSUFVWFwiOlxuICAgICAgICAgICAgICAgIHNldFRhYkFycmF5KG1hdGVyaWF1eCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiTUFURVJJRUxTXCI6XG4gICAgICAgICAgICAgICAgc2V0VGFiQXJyYXkobWF0ZXJpZWxzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJQRVJTT05ORUxTXCI6XG4gICAgICAgICAgICAgICAgc2V0VGFiQXJyYXkocGVyc29ubmVscyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHNldFRhYkFycmF5KFtdKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGxvYWREYXRhID0gKCkgPT4ge1xuICAgICAgICBmZXRjaChgJHthcGlVcmx9bWF0ZXJpYXVzYCwge1xuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAvL21hcCBkYXRhIHRvIHZhbHVlIGFuZCBsYWJlbFxuICAgICAgICAgICAgICAgIHNldE1hdGVyaWF1eChkYXRhLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBpdGVtLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGl0ZW0ubGliZWxsZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICB9KVxuXG5cbiAgICAgICAgZmV0Y2goYCR7YXBpVXJsfW1hdGVyaWVsc2AsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgLy9tYXAgZGF0YSB0byB2YWx1ZSBhbmQgbGFiZWxcbiAgICAgICAgICAgICAgICBzZXRNYXRlcmllbHMoZGF0YS5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogaXRlbS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBpdGVtLmxpYmVsbGVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgfSlcblxuICAgICAgICBmZXRjaChgJHthcGlVcmx9cGVyc29ubmVsc2AsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgLy9tYXAgZGF0YSB0byB2YWx1ZSBhbmQgbGFiZWxcbiAgICAgICAgICAgICAgICBzZXRQZXJzb25uZWxzKGRhdGEubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGl0ZW0uaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogaXRlbS5saWJlbGxlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlTWF0aWVyZUNoYW5nZSA9IChpdGVtLCB0eXBlKSA9PiB7XG4gICAgICAgIGNvbnN0IG1hdGVyaWVyZVBvaW50ZSA9IHtcbiAgICAgICAgICAgIGlkOiBpdGVtLnZhbHVlLFxuICAgICAgICAgICAgbGliZWxsZTogaXRlbS5sYWJlbCxcbiAgICAgICAgICAgIHVuaXRlOiBcIktHXCIsXG4gICAgICAgICAgICBxdWFudGl0ZTogMCxcbiAgICAgICAgICAgIHByaXhVbml0YWlyZTogMCxcbiAgICAgICAgICAgIG1vbnRhbnQ6IDBcbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSBcIk1BVEVSSUFVWFwiOlxuICAgICAgICAgICAgICAgIC8vaXRlbSBhbHJlYWR5IGV4aXN0XG4gICAgICAgICAgICAgICAgaWYgKG1hdGVyaWF1UG9pbnRlLmZpbmQoZWxlbWVudCA9PiBlbGVtZW50LmlkID09PSBpdGVtLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICB0b2FzdC5lcnJvcihcIkNldCDDqWzDqW1lbnQgZXhpc3RlIGTDqWrDoCBkYW5zIGxlIHRhYmxlYXUgIVwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHNldE1hdGVyaWF1UG9pbnRlKFsuLi5tYXRlcmlhdVBvaW50ZSwgbWF0ZXJpZXJlUG9pbnRlXSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiTUFURVJJRUxTXCI6XG5cbiAgICAgICAgICAgICAgICBpZiAobWF0ZXJpZWxQb2ludGUuZmluZChlbGVtZW50ID0+IGVsZW1lbnQuaWQgPT09IGl0ZW0udmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRvYXN0LmVycm9yKFwiQ2V0IMOpbMOpbWVudCBleGlzdGUgZMOpasOgIGRhbnMgbGUgdGFibGVhdSAhXCIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNldE1hdGVyaWVsUG9pbnRlKFsuLi5tYXRlcmllbFBvaW50ZSwgbWF0ZXJpZXJlUG9pbnRlXSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiUEVSU09OTkVMU1wiOlxuXG4gICAgICAgICAgICAgICAgaWYgKHBlcnNvbm5lbFBvaW50ZS5maW5kKGVsZW1lbnQgPT4gZWxlbWVudC5pZCA9PT0gaXRlbS52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9hc3QuZXJyb3IoXCJDZXQgw6lsw6ltZW50IGV4aXN0ZSBkw6lqw6AgZGFucyBsZSB0YWJsZWF1ICFcIik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2V0UGVyc29ubmVsUG9pbnRlKFsuLi5wZXJzb25uZWxQb2ludGUsIG1hdGVyaWVyZVBvaW50ZV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlUXRlQ2hhbmdlID0gKGlkLCB2YWx1ZSwgdHlwZSkgPT4ge1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJNQVRFUklBVVhcIjpcbiAgICAgICAgICAgICAgICBzZXRNYXRlcmlhdVBvaW50ZShtYXRlcmlhdVBvaW50ZS5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmlkID09PSBpZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5xdWFudGl0ZSA9IHBhcnNlRmxvYXQodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5tb250YW50ID0gaXRlbS5xdWFudGl0ZSAqIGl0ZW0ucHJpeFVuaXRhaXJlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgICAgICAgICAgfSkpXG5cbiAgICAgICAgICAgICAgICBzZXRUb3RhbE1hdGVyaWF1eChtYXRlcmlhdVBvaW50ZS5yZWR1Y2UoKGEsIGIpID0+IGEgKyAoYlsnbW9udGFudCddIHx8IDApLCAwKSk7XG5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJNQVRFUklFTFNcIjpcbiAgICAgICAgICAgICAgICBzZXRNYXRlcmllbFBvaW50ZShtYXRlcmllbFBvaW50ZS5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmlkID09PSBpZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5xdWFudGl0ZSA9IHBhcnNlRmxvYXQodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5tb250YW50ID0gaXRlbS5xdWFudGl0ZSAqIGl0ZW0ucHJpeFVuaXRhaXJlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgICAgICAgICAgfSkpXG5cbiAgICAgICAgICAgICAgICBzZXRUb3RhbE1hdGVyaWVscyhtYXRlcmllbFBvaW50ZS5yZWR1Y2UoKGEsIGIpID0+IGEgKyAoYlsnbW9udGFudCddIHx8IDApLCAwKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiUEVSU09OTkVMU1wiOlxuICAgICAgICAgICAgICAgIHNldFBlcnNvbm5lbFBvaW50ZShwZXJzb25uZWxQb2ludGUubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ucXVhbnRpdGUgPSBwYXJzZUZsb2F0KHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ubW9udGFudCA9IGl0ZW0ucXVhbnRpdGUgKiBpdGVtLnByaXhVbml0YWlyZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICAgICAgICAgIH0pKVxuXG4gICAgICAgICAgICAgICAgc2V0VG90YWxQZXJzb25uZWxzKHBlcnNvbm5lbFBvaW50ZS5yZWR1Y2UoKGEsIGIpID0+IGEgKyAoYlsnbW9udGFudCddIHx8IDApLCAwKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVQcml4VW5pdGFpcmVDaGFuZ2UgPSAoaWQsIHZhbHVlLCB0eXBlKSA9PiB7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSBcIk1BVEVSSUFVWFwiOlxuICAgICAgICAgICAgICAgIHNldE1hdGVyaWF1UG9pbnRlKG1hdGVyaWF1UG9pbnRlLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uaWQgPT09IGlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnByaXhVbml0YWlyZSA9IHBhcnNlRmxvYXQodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5tb250YW50ID0gaXRlbS5xdWFudGl0ZSAqIGl0ZW0ucHJpeFVuaXRhaXJlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgICAgICAgICAgfSkpXG5cbiAgICAgICAgICAgICAgICBzZXRUb3RhbE1hdGVyaWF1eChtYXRlcmlhdVBvaW50ZS5yZWR1Y2UoKGEsIGIpID0+IGEgKyAoYlsnbW9udGFudCddIHx8IDApLCAwKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiTUFURVJJRUxTXCI6XG4gICAgICAgICAgICAgICAgc2V0TWF0ZXJpZWxQb2ludGUobWF0ZXJpZWxQb2ludGUubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ucHJpeFVuaXRhaXJlID0gcGFyc2VGbG9hdCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLm1vbnRhbnQgPSBpdGVtLnF1YW50aXRlICogaXRlbS5wcml4VW5pdGFpcmU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgICAgICAgICB9KSlcblxuICAgICAgICAgICAgICAgIHNldFRvdGFsTWF0ZXJpZWxzKG1hdGVyaWVsUG9pbnRlLnJlZHVjZSgoYSwgYikgPT4gYSArIChiWydtb250YW50J10gfHwgMCksIDApKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJQRVJTT05ORUxTXCI6XG4gICAgICAgICAgICAgICAgc2V0UGVyc29ubmVsUG9pbnRlKHBlcnNvbm5lbFBvaW50ZS5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmlkID09PSBpZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5wcml4VW5pdGFpcmUgPSBwYXJzZUZsb2F0KHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ubW9udGFudCA9IGl0ZW0ucXVhbnRpdGUgKiBpdGVtLnByaXhVbml0YWlyZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICAgICAgICAgIH0pKVxuXG4gICAgICAgICAgICAgICAgc2V0VG90YWxQZXJzb25uZWxzKHBlcnNvbm5lbFBvaW50ZS5yZWR1Y2UoKGEsIGIpID0+IGEgKyAoYlsnbW9udGFudCddIHx8IDApLCAwKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBzZXRUb3RhbE1hdGVyaWF1eChtYXRlcmlhdVBvaW50ZS5yZWR1Y2UoKGEsIGIpID0+IGEgKyAoYlsnbW9udGFudCddIHx8IDApLCAwKSk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2F2ZUNvdXRQcm9kdWN0aW9uID0gKCkgPT4ge1xuICAgICAgICBzZXRJc1NhdmluZyh0cnVlKTtcblxuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgc2V0SXNTYXZpbmcoZmFsc2UpO1xuICAgICAgICAgICAgdG9hc3Quc3VjY2VzcyhcIkVucmVnaXN0cmVtZW50IGVmZmVjdHXDqSBhdmVjIHN1Y2PDqHMgIVwiKTtcbiAgICAgICAgfSwgNTAwMClcbiAgICB9XG5cbiAgICByZXR1cm4gPD5cbiAgICAgICAgPFRvYXN0Q29udGFpbmVyIHBvc2l0aW9uPXsndG9wLWxlZnQnfSBhdXRvQ2xvc2U9ezUwMDB9IHRoZW1lPXsnZGFyayd9Lz5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXIgZC1mbGV4IGZsZXgtcm93XCI+XG4gICAgICAgICAgICAgICAgPGg1PkVsYWJvcmF0aW9uIGR1IGNvdXQgZGUgcHJvZHVjdGlvbjwvaDU+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtcy1hdXRvIGctMSBkLWZsZXggYWxpZ24taXRlbXMtZW5kXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLThcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibnVtZXJvXCI+TnVtw6lybyBkZSBjb3V0IGRlIHByb2R1Y3Rpb248L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJudW1lcm9cIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2Vzc1wiPkNoYXJnZXI8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvcmRpb25cIiBpZD1cImFjY29yZGlvbkV4YW1wbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvcmRpb24taXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImFjY29yZGlvbi1oZWFkZXJcIiBpZD1cImhlYWRpbmdPbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImFjY29yZGlvbi1idXR0b25cIiB0eXBlPVwiYnV0dG9uXCIgZGF0YS1icy10b2dnbGU9XCJjb2xsYXBzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWJzLXRhcmdldD1cIiNjb2xsYXBzZU9uZVwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIGFyaWEtY29udHJvbHM9XCJjb2xsYXBzZU9uZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXTDqXJpYXV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiY29sbGFwc2VPbmVcIiBjbGFzc05hbWU9XCJhY2NvcmRpb24tY29sbGFwc2UgY29sbGFwc2Ugc2hvd1wiIGFyaWEtbGFiZWxsZWRieT1cImhlYWRpbmdPbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY29yZGlvbi1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGctMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3Qgb25DaGFuZ2U9eyhpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZU1hdGllcmVDaGFuZ2UoaXRlbSwgJ01BVEVSSUFVWCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gb3B0aW9ucz17bWF0ZXJpYXV4fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInN0eWxlZC10YWJsZSBtdC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk1hdMOpcmlhdXg8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Vbml0w6k8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17e3dpZHRoOiBcIjE1JVwifX0+UXVhbnRpdMOpPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3t3aWR0aDogXCIxNSVcIn19PlByaXggVW5pdGFpcmU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Nb250YW50PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+QWN0aW9uczwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRlcmlhdVBvaW50ZS5sZW5ndGggPiAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRlcmlhdVBvaW50ZS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntpdGVtLmxpYmVsbGV9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2l0ZW0udW5pdGV9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpdGVtLnF1YW50aXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVF0ZUNoYW5nZShpdGVtLmlkLCBldmVudC50YXJnZXQudmFsdWUsICdNQVRFUklBVVgnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2l0ZW0ucHJpeFVuaXRhaXJlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVByaXhVbml0YWlyZUNoYW5nZShpdGVtLmlkLCBldmVudC50YXJnZXQudmFsdWUsICdNQVRFUklBVVgnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57aXRlbS5tb250YW50LnRvTG9jYWxlU3RyaW5nKCdmci1GUicpfSBGQ0ZBPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbSBidG4tZGFuZ2VyXCI+PGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZhIGZhLW1pbnVzXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj1cIjRcIiBjbGFzc05hbWU9XCJ0ZXh0LWVuZFwiPlRvdGFsPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj17Mn0+e3RvdGFsTWF0ZXJpYXV4LnRvTG9jYWxlU3RyaW5nKCdmci1GUicpfSBGQ0ZBPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPVwiNVwiPkF1Y3VuIG1hdMOpcmlhdSBwb2ludMOpPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3JkaW9uLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJhY2NvcmRpb24taGVhZGVyXCIgaWQ9XCJoZWFkaW5nVHdvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJhY2NvcmRpb24tYnV0dG9uXCIgdHlwZT1cImJ1dHRvblwiIGRhdGEtYnMtdG9nZ2xlPVwiY29sbGFwc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1icy10YXJnZXQ9XCIjY29sbGFwc2VUd29cIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiBhcmlhLWNvbnRyb2xzPVwiY29sbGFwc2VUd29cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWF0w6lyaWVsc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJjb2xsYXBzZVR3b1wiIGNsYXNzTmFtZT1cImFjY29yZGlvbi1jb2xsYXBzZSBjb2xsYXBzZSBzaG93XCIgYXJpYS1sYWJlbGxlZGJ5PVwiaGVhZGluZ1R3b1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3JkaW9uLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgZy0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdCBvbkNoYW5nZT17KGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlTWF0aWVyZUNoYW5nZShpdGVtLCAnTUFURVJJRUxTJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSBvcHRpb25zPXttYXRlcmllbHN9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwic3R5bGVkLXRhYmxlIG10LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+TWF0w6lyaWVsczwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlVuaXTDqTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7d2lkdGg6IFwiMTUlXCJ9fT5RdWFudGl0w6k8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17e3dpZHRoOiBcIjE1JVwifX0+UHJpeCBVbml0YWlyZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk1vbnRhbnQ8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5BY3Rpb25zPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGVyaWVsUG9pbnRlLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGVyaWVsUG9pbnRlLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2l0ZW0ubGliZWxsZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57aXRlbS51bml0ZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2l0ZW0ucXVhbnRpdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlUXRlQ2hhbmdlKGl0ZW0uaWQsIGV2ZW50LnRhcmdldC52YWx1ZSwgJ01BVEVSSUVMUycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aXRlbS5wcml4VW5pdGFpcmV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlUHJpeFVuaXRhaXJlQ2hhbmdlKGl0ZW0uaWQsIGV2ZW50LnRhcmdldC52YWx1ZSwgJ01BVEVSSUVMUycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntpdGVtLm1vbnRhbnQudG9Mb2NhbGVTdHJpbmcoJ2ZyLUZSJyl9IEZDRkE8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXNtIGJ0bi1kYW5nZXJcIj48aVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmEgZmEtbWludXNcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPVwiNFwiIGNsYXNzTmFtZT1cInRleHQtZW5kXCI+VG90YWw8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPXsyfT57dG90YWxNYXRlcmllbHMudG9Mb2NhbGVTdHJpbmcoJ2ZyLUZSJyl9IEZDRkE8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj1cIjVcIj5BdWN1biBtYXTDqXJpZWwgcG9pbnTDqTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY29yZGlvbi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiYWNjb3JkaW9uLWhlYWRlclwiIGlkPVwiaGVhZGluZ1RocmVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJhY2NvcmRpb24tYnV0dG9uXCIgdHlwZT1cImJ1dHRvblwiIGRhdGEtYnMtdG9nZ2xlPVwiY29sbGFwc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1icy10YXJnZXQ9XCIjY29sbGFwc2VUaHJlZVwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIGFyaWEtY29udHJvbHM9XCJjb2xsYXBzZVRocmVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBlcnNvbm5lbHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiY29sbGFwc2VUaHJlZVwiIGNsYXNzTmFtZT1cImFjY29yZGlvbi1jb2xsYXBzZSBjb2xsYXBzZSBzaG93XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiaGVhZGluZ1RocmVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvcmRpb24tYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBnLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0IG9uQ2hhbmdlPXsoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVNYXRpZXJlQ2hhbmdlKGl0ZW0sICdQRVJTT05ORUxTJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSBvcHRpb25zPXtwZXJzb25uZWxzfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInN0eWxlZC10YWJsZSBtdC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlBlcnNvbm5lbHM8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Vbml0w6k8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17e3dpZHRoOiBcIjE1JVwifX0+UXVhbnRpdMOpPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3t3aWR0aDogXCIxNSVcIn19PlByaXggVW5pdGFpcmU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Nb250YW50PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+QWN0aW9uczwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZXJzb25uZWxQb2ludGUubGVuZ3RoID4gMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVyc29ubmVsUG9pbnRlLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2l0ZW0ubGliZWxsZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57aXRlbS51bml0ZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2l0ZW0ucXVhbnRpdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlUXRlQ2hhbmdlKGl0ZW0uaWQsIGV2ZW50LnRhcmdldC52YWx1ZSwgJ1BFUlNPTk5FTFMnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2l0ZW0ucHJpeFVuaXRhaXJlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVByaXhVbml0YWlyZUNoYW5nZShpdGVtLmlkLCBldmVudC50YXJnZXQudmFsdWUsICdQRVJTT05ORUxTJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2l0ZW0ubW9udGFudC50b0xvY2FsZVN0cmluZygnZnItRlInKX0gRkNGQTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc20gYnRuLWRhbmdlclwiPjxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmYSBmYS1taW51c1wiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49XCI0XCIgY2xhc3NOYW1lPVwidGV4dC1lbmRcIj5Ub3RhbDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49ezJ9Pnt0b3RhbFBlcnNvbm5lbHMudG9Mb2NhbGVTdHJpbmcoJ2ZyLUZSJyl9IEZDRkE8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49XCI1XCI+QXVjdW4gcGVyc29ubmVsIHBvaW50w6k8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgbXQtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBkaXNhYmxlZD17aXNTYXZpbmd9IGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2Vzc1wiIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYXZlQ291dFByb2R1Y3Rpb24oKVxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1NhdmluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNwaW5uZXItYm9yZGVyIHNwaW5uZXItYm9yZGVyLXNtXCIgcm9sZT1cInN0YXR1c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPiBFbnJlZ2lzdHJlbWVudCBlbiBjb3Vycy4uLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiRW5yZWdpc3RyZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWZvb3RlciBkLWZsZXggZmxleC1yb3dcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4taW5mb1wiPkxpc3RlIGRlcyBwb2ludGFnZXM8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXMtYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1icy10b2dnbGU9XCJtb2RhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1icy10YXJnZXQ9XCIjc3RhdGljQmFja2Ryb3BcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd01vZGFsQWRkKFwiTUFURVJJQVVYXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICBBam91dGVyIG1hdMOpcmlhdVxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2VzcyBtcy0xXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWJzLXRvZ2dsZT1cIm1vZGFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWJzLXRhcmdldD1cIiNzdGF0aWNCYWNrZHJvcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93TW9kYWxBZGQoXCJNQVRFUklFTFNcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIEFqb3V0ZXIgbWF0w6lyaWVsXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYXJrIG1zLTFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYnMtdG9nZ2xlPVwibW9kYWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYnMtdGFyZ2V0PVwiI3N0YXRpY0JhY2tkcm9wXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dNb2RhbEFkZChcIlBFUlNPTk5FTFNcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIEFqb3V0ZXIgbWF0w6lyaWVsXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwgZmFkZVwiIGlkPVwic3RhdGljQmFja2Ryb3BcIiBkYXRhLWJzLWJhY2tkcm9wPVwic3RhdGljXCIgZGF0YS1icy1rZXlib2FyZD1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICAgdGFiSW5kZXg9XCItMVwiIGFyaWEtbGFiZWxsZWRieT1cInN0YXRpY0JhY2tkcm9wTGFiZWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlIGZzLTVcIiBpZD1cInN0YXRpY0JhY2tkcm9wTGFiZWxcIj4ge3NlbGVjdGVkSXRlbX0gPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4tY2xvc2VcIiBkYXRhLWJzLWRpc21pc3M9XCJtb2RhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiQ2xvc2VcIj48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgZy0xIGQtZmxleCBhbGlnbi1pdGVtcy1lbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpdGVtTGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1wiTGliZWxsw6kgXCIgKyBzZWxlY3RlZEl0ZW19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRJdGVtTGFiZWwoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNhdmVJdGVtKCl9IHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIj5FbnJlZ2lzdHJlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInN0eWxlZC10YWJsZSBtdC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkxpYmVsbMOpPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwJVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5BY3Rpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYkFycmF5Lmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRhYkFycmF5Lm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2l0ZW0ubGFiZWx9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbSBidG4tZGFuZ2VyXCI+PGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZhIGZhLW1pbnVzXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPVwiMlwiPkF1Y3VuIMOpbMOpbWVudDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiIGRhdGEtYnMtZGlzbWlzcz1cIm1vZGFsXCI+RmVybWVyPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC8+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluO1xuIiwiZnVuY3Rpb24gcmVnaXN0ZXJSZWFjdENvbnRyb2xsZXJDb21wb25lbnRzKGNvbnRleHQpIHtcbiAgICBjb25zdCByZWFjdENvbnRyb2xsZXJzID0ge307XG4gICAgY29uc3QgaW1wb3J0QWxsUmVhY3RDb21wb25lbnRzID0gKHIpID0+IHtcbiAgICAgICAgci5rZXlzKCkuZm9yRWFjaCgoa2V5KSA9PiAocmVhY3RDb250cm9sbGVyc1trZXldID0gcihrZXkpLmRlZmF1bHQpKTtcbiAgICB9O1xuICAgIGltcG9ydEFsbFJlYWN0Q29tcG9uZW50cyhjb250ZXh0KTtcbiAgICB3aW5kb3cucmVzb2x2ZVJlYWN0Q29tcG9uZW50ID0gKG5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgY29tcG9uZW50ID0gcmVhY3RDb250cm9sbGVyc1tgLi8ke25hbWV9LmpzeGBdIHx8IHJlYWN0Q29udHJvbGxlcnNbYC4vJHtuYW1lfS50c3hgXTtcbiAgICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBjb25zdCBwb3NzaWJsZVZhbHVlcyA9IE9iamVjdC5rZXlzKHJlYWN0Q29udHJvbGxlcnMpLm1hcCgoa2V5KSA9PiBrZXkucmVwbGFjZSgnLi8nLCAnJykucmVwbGFjZSgnLmpzeCcsICcnKS5yZXBsYWNlKCcudHN4JywgJycpKTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgUmVhY3QgY29udHJvbGxlciBcIiR7bmFtZX1cIiBkb2VzIG5vdCBleGlzdC4gUG9zc2libGUgdmFsdWVzOiAke3Bvc3NpYmxlVmFsdWVzLmpvaW4oJywgJyl9YCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgICB9O1xufVxuXG5leHBvcnQgeyByZWdpc3RlclJlYWN0Q29udHJvbGxlckNvbXBvbmVudHMgfTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcmVxdWlyZSQkMCBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5cbnZhciBjcmVhdGVSb290O1xuXG52YXIgbSA9IHJlcXVpcmUkJDA7XG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBjcmVhdGVSb290ID0gbS5jcmVhdGVSb290O1xuICBtLmh5ZHJhdGVSb290O1xufSBlbHNlIHtcbiAgdmFyIGkgPSBtLl9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEO1xuICBjcmVhdGVSb290ID0gZnVuY3Rpb24oYywgbykge1xuICAgIGkudXNpbmdDbGllbnRFbnRyeVBvaW50ID0gdHJ1ZTtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIG0uY3JlYXRlUm9vdChjLCBvKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaS51c2luZ0NsaWVudEVudHJ5UG9pbnQgPSBmYWxzZTtcbiAgICB9XG4gIH07XG59XG5cbmNsYXNzIGRlZmF1bHRfMSBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIGNvbnN0IHByb3BzID0gdGhpcy5wcm9wc1ZhbHVlID8gdGhpcy5wcm9wc1ZhbHVlIDogbnVsbDtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdjb25uZWN0JywgeyBjb21wb25lbnQ6IHRoaXMuY29tcG9uZW50VmFsdWUsIHByb3BzOiBwcm9wcyB9KTtcbiAgICAgICAgaWYgKCF0aGlzLmNvbXBvbmVudFZhbHVlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGNvbXBvbmVudCBzcGVjaWZpZWQuJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29tcG9uZW50ID0gd2luZG93LnJlc29sdmVSZWFjdENvbXBvbmVudCh0aGlzLmNvbXBvbmVudFZhbHVlKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyUmVhY3RFbGVtZW50KFJlYWN0LmNyZWF0ZUVsZW1lbnQoY29tcG9uZW50LCBwcm9wcywgbnVsbCkpO1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ21vdW50Jywge1xuICAgICAgICAgICAgY29tcG9uZW50TmFtZTogdGhpcy5jb21wb25lbnRWYWx1ZSxcbiAgICAgICAgICAgIGNvbXBvbmVudDogY29tcG9uZW50LFxuICAgICAgICAgICAgcHJvcHM6IHByb3BzLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZGlzY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnJvb3QudW5tb3VudCgpO1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ3VubW91bnQnLCB7XG4gICAgICAgICAgICBjb21wb25lbnQ6IHRoaXMuY29tcG9uZW50VmFsdWUsXG4gICAgICAgICAgICBwcm9wczogdGhpcy5wcm9wc1ZhbHVlID8gdGhpcy5wcm9wc1ZhbHVlIDogbnVsbCxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9yZW5kZXJSZWFjdEVsZW1lbnQocmVhY3RFbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmVsZW1lbnQ7XG4gICAgICAgIGlmICghZWxlbWVudC5yb290KSB7XG4gICAgICAgICAgICBlbGVtZW50LnJvb3QgPSBjcmVhdGVSb290KHRoaXMuZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudC5yb290LnJlbmRlcihyZWFjdEVsZW1lbnQpO1xuICAgIH1cbiAgICBkaXNwYXRjaEV2ZW50KG5hbWUsIHBheWxvYWQpIHtcbiAgICAgICAgdGhpcy5kaXNwYXRjaChuYW1lLCB7IGRldGFpbDogcGF5bG9hZCwgcHJlZml4OiAncmVhY3QnIH0pO1xuICAgIH1cbn1cbmRlZmF1bHRfMS52YWx1ZXMgPSB7XG4gICAgY29tcG9uZW50OiBTdHJpbmcsXG4gICAgcHJvcHM6IE9iamVjdCxcbn07XG5cbmV4cG9ydCB7IGRlZmF1bHRfMSBhcyBkZWZhdWx0IH07XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiQ29udHJvbGxlciIsIl9kZWZhdWx0IiwiX0NvbnRyb2xsZXIiLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJfY2xhc3NDYWxsQ2hlY2siLCJhcHBseSIsImFyZ3VtZW50cyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiY29ubmVjdCIsImVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImRlZmF1bHQiLCJyZWdpc3RlclJlYWN0Q29udHJvbGxlckNvbXBvbmVudHMiLCJyZXF1aXJlIiwiY29udGV4dCIsInN0YXJ0U3RpbXVsdXNBcHAiLCJhcHAiLCJhcGlVcmwiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiU2VsZWN0IiwiVG9hc3RDb250YWluZXIiLCJ0b2FzdCIsIk1haW4iLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJtYXRlcmlhdXgiLCJzZXRNYXRlcmlhdXgiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsIm1hdGVyaWVscyIsInNldE1hdGVyaWVscyIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2IiwicGVyc29ubmVscyIsInNldFBlcnNvbm5lbHMiLCJfdXNlU3RhdGU3IiwiX3VzZVN0YXRlOCIsIm1hdGVyaWF1UG9pbnRlIiwic2V0TWF0ZXJpYXVQb2ludGUiLCJfdXNlU3RhdGU5IiwiX3VzZVN0YXRlMTAiLCJtYXRlcmllbFBvaW50ZSIsInNldE1hdGVyaWVsUG9pbnRlIiwiX3VzZVN0YXRlMTEiLCJfdXNlU3RhdGUxMiIsInBlcnNvbm5lbFBvaW50ZSIsInNldFBlcnNvbm5lbFBvaW50ZSIsIl91c2VTdGF0ZTEzIiwiX3VzZVN0YXRlMTQiLCJzZWxlY3RlZEl0ZW0iLCJzZXRTZWxlY3RlZEl0ZW0iLCJfdXNlU3RhdGUxNSIsIl91c2VTdGF0ZTE2IiwiaXRlbUxhYmVsIiwic2V0SXRlbUxhYmVsIiwiX3VzZVN0YXRlMTciLCJfdXNlU3RhdGUxOCIsInRhYkFycmF5Iiwic2V0VGFiQXJyYXkiLCJfdXNlU3RhdGUxOSIsIl91c2VTdGF0ZTIwIiwidG90YWxNYXRlcmlhdXgiLCJzZXRUb3RhbE1hdGVyaWF1eCIsIl91c2VTdGF0ZTIxIiwiX3VzZVN0YXRlMjIiLCJ0b3RhbE1hdGVyaWVscyIsInNldFRvdGFsTWF0ZXJpZWxzIiwiX3VzZVN0YXRlMjMiLCJfdXNlU3RhdGUyNCIsInRvdGFsUGVyc29ubmVscyIsInNldFRvdGFsUGVyc29ubmVscyIsIl91c2VTdGF0ZTI1IiwiX3VzZVN0YXRlMjYiLCJpc1NhdmluZyIsInNldElzU2F2aW5nIiwibG9hZERhdGEiLCJzYXZlSXRlbSIsInVybCIsImNvbmNhdCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwibGliZWxsZSIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiaWQiLCJsYWJlbCIsInN1Y2Nlc3MiLCJzaG93TW9kYWxBZGQiLCJ0eXBlIiwibWFwIiwiaXRlbSIsImhhbmRsZU1hdGllcmVDaGFuZ2UiLCJtYXRlcmllcmVQb2ludGUiLCJ1bml0ZSIsInF1YW50aXRlIiwicHJpeFVuaXRhaXJlIiwibW9udGFudCIsImZpbmQiLCJlcnJvciIsImhhbmRsZVF0ZUNoYW5nZSIsInBhcnNlRmxvYXQiLCJyZWR1Y2UiLCJhIiwiYiIsImhhbmRsZVByaXhVbml0YWlyZUNoYW5nZSIsInNhdmVDb3V0UHJvZHVjdGlvbiIsInNldFRpbWVvdXQiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJwb3NpdGlvbiIsImF1dG9DbG9zZSIsInRoZW1lIiwiY2xhc3NOYW1lIiwiaHRtbEZvciIsIm9uQ2hhbmdlIiwib3B0aW9ucyIsInN0eWxlIiwid2lkdGgiLCJsZW5ndGgiLCJpbmRleCIsImV2ZW50IiwidGFyZ2V0IiwidG9Mb2NhbGVTdHJpbmciLCJjb2xTcGFuIiwiZGlzYWJsZWQiLCJvbkNsaWNrIiwicm9sZSIsInRhYkluZGV4IiwicGxhY2Vob2xkZXIiLCJlIiwicmVhY3RDb250cm9sbGVycyIsImltcG9ydEFsbFJlYWN0Q29tcG9uZW50cyIsInIiLCJrZXlzIiwiZm9yRWFjaCIsIndpbmRvdyIsInJlc29sdmVSZWFjdENvbXBvbmVudCIsIm5hbWUiLCJjb21wb25lbnQiLCJwb3NzaWJsZVZhbHVlcyIsIk9iamVjdCIsInJlcGxhY2UiLCJFcnJvciIsImpvaW4iLCJyZXF1aXJlJCQwIiwiY3JlYXRlUm9vdCIsIm0iLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJoeWRyYXRlUm9vdCIsImkiLCJfX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRCIsImMiLCJvIiwidXNpbmdDbGllbnRFbnRyeVBvaW50IiwiZGVmYXVsdF8xIiwicHJvcHMiLCJwcm9wc1ZhbHVlIiwiZGlzcGF0Y2hFdmVudCIsImNvbXBvbmVudFZhbHVlIiwiX3JlbmRlclJlYWN0RWxlbWVudCIsImNvbXBvbmVudE5hbWUiLCJkaXNjb25uZWN0Iiwicm9vdCIsInVubW91bnQiLCJyZWFjdEVsZW1lbnQiLCJyZW5kZXIiLCJwYXlsb2FkIiwiZGlzcGF0Y2giLCJkZXRhaWwiLCJwcmVmaXgiLCJ2YWx1ZXMiLCJTdHJpbmciXSwic291cmNlUm9vdCI6IiJ9