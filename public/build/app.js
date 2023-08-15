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
var apiUrl = 'http://localhost:8001/api/';

// export const apiUrl = 'http://test.witb7904.odns.fr/api/';

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
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../constants */ "./assets/react/constants.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.esm.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.mjs");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
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
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_25__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    materiaux = _useState2[0],
    setMateriaux = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_25__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    materiels = _useState4[0],
    setMateriels = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_25__.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    personnels = _useState6[0],
    setPersonnels = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_25__.useState)([]),
    _useState8 = _slicedToArray(_useState7, 2),
    materiauPointe = _useState8[0],
    setMateriauPointe = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_25__.useState)([]),
    _useState10 = _slicedToArray(_useState9, 2),
    materielPointe = _useState10[0],
    setMaterielPointe = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_25__.useState)([]),
    _useState12 = _slicedToArray(_useState11, 2),
    personnelPointe = _useState12[0],
    setPersonnelPointe = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_25__.useState)(0),
    _useState14 = _slicedToArray(_useState13, 2),
    selectedItem = _useState14[0],
    setSelectedItem = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_25__.useState)(""),
    _useState16 = _slicedToArray(_useState15, 2),
    itemLabel = _useState16[0],
    setItemLabel = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_25__.useState)([]),
    _useState18 = _slicedToArray(_useState17, 2),
    tabArray = _useState18[0],
    setTabArray = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_25__.useState)(0),
    _useState20 = _slicedToArray(_useState19, 2),
    totalMateriaux = _useState20[0],
    setTotalMateriaux = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_25__.useState)(0),
    _useState22 = _slicedToArray(_useState21, 2),
    totalMateriels = _useState22[0],
    setTotalMateriels = _useState22[1];
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_25__.useState)(0),
    _useState24 = _slicedToArray(_useState23, 2),
    totalPersonnels = _useState24[0],
    setTotalPersonnels = _useState24[1];
  (0,react__WEBPACK_IMPORTED_MODULE_25__.useEffect)(function () {
    loadData();
  }, []);
  var saveItem = function saveItem() {
    var url = "";
    switch (selectedItem) {
      case "MATERIAUX":
        url = "".concat(_constants__WEBPACK_IMPORTED_MODULE_26__.apiUrl, "materiaus");
        break;
      case "MATERIELS":
        url = "".concat(_constants__WEBPACK_IMPORTED_MODULE_26__.apiUrl, "materiels");
        break;
      case "PERSONNELS":
        url = "".concat(_constants__WEBPACK_IMPORTED_MODULE_26__.apiUrl, "personnels");
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
      react_toastify__WEBPACK_IMPORTED_MODULE_27__.toast.success("Enregistrement effectué avec succès !");
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
    fetch("".concat(_constants__WEBPACK_IMPORTED_MODULE_26__.apiUrl, "materiaus"), {
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
    fetch("".concat(_constants__WEBPACK_IMPORTED_MODULE_26__.apiUrl, "materiels"), {
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
    fetch("".concat(_constants__WEBPACK_IMPORTED_MODULE_26__.apiUrl, "personnels"), {
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
      prixUnitaire: 0
    };
    switch (type) {
      case "MATERIAUX":
        //item already exist
        if (materiauPointe.find(function (element) {
          return element.id === item.value;
        })) {
          react_toastify__WEBPACK_IMPORTED_MODULE_27__.toast.error("Cet élément existe déjà dans le tableau !");
          return;
        }
        setMateriauPointe([].concat(_toConsumableArray(materiauPointe), [materierePointe]));
        break;
      case "MATERIELS":
        if (materielPointe.find(function (element) {
          return element.id === item.value;
        })) {
          react_toastify__WEBPACK_IMPORTED_MODULE_27__.toast.error("Cet élément existe déjà dans le tableau !");
          return;
        }
        setMaterielPointe([].concat(_toConsumableArray(materielPointe), [materierePointe]));
        break;
      case "PERSONNELS":
        if (personnelPointe.find(function (element) {
          return element.id === item.value;
        })) {
          react_toastify__WEBPACK_IMPORTED_MODULE_27__.toast.error("Cet élément existe déjà dans le tableau !");
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement((react__WEBPACK_IMPORTED_MODULE_25___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement(react_toastify__WEBPACK_IMPORTED_MODULE_27__.ToastContainer, {
    position: 'top-left',
    autoClose: 5000,
    theme: 'dark'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("div", {
    className: "card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("div", {
    className: "card-header d-flex flex-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("h5", null, "Elaboration du cout de production"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("div", {
    className: "row ms-auto g-1 d-flex align-items-end"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("div", {
    className: "col-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("label", {
    htmlFor: "numero"
  }, "Num\xE9ro de cout de production"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("input", {
    type: "text",
    id: "numero",
    className: "form-control"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("div", {
    className: "col-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("button", {
    className: "btn btn-success"
  }, "Charger")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("div", {
    className: "accordion",
    id: "accordionExample"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("div", {
    className: "accordion-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("h2", {
    className: "accordion-header",
    id: "headingOne"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("button", {
    className: "accordion-button",
    type: "button",
    "data-bs-toggle": "collapse",
    "data-bs-target": "#collapseOne",
    "aria-expanded": "false",
    "aria-controls": "collapseOne"
  }, "Mat\xE9riaux")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("div", {
    id: "collapseOne",
    className: "accordion-collapse collapse show",
    "aria-labelledby": "headingOne"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("div", {
    className: "accordion-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("div", {
    className: "row g-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("div", {
    className: "col-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement(react_select__WEBPACK_IMPORTED_MODULE_29__["default"], {
    onChange: function onChange(item) {
      handleMatiereChange(item, 'MATERIAUX');
    },
    options: materiaux
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("table", {
    className: "styled-table mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("th", null, "Mat\xE9riaux"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("th", null, "Unit\xE9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("th", {
    style: {
      width: "15%"
    }
  }, "Quantit\xE9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("th", {
    style: {
      width: "15%"
    }
  }, "Prix Unitaire"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("th", null, "Montant"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("th", null, "Actions"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("tbody", null, materiauPointe.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement((react__WEBPACK_IMPORTED_MODULE_25___default().Fragment), null, materiauPointe.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("tr", {
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("td", null, item.libelle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("td", null, item.unite), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("input", {
      type: "number",
      value: item.quantite,
      onChange: function onChange(event) {
        handleQteChange(item.id, event.target.value, 'MATERIAUX');
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("input", {
      type: "number",
      value: item.prixUnitaire,
      onChange: function onChange(event) {
        handlePrixUnitaireChange(item.id, event.target.value, 'MATERIAUX');
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("td", null, item.montant), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("button", {
      className: "btn btn-sm btn-danger"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("i", {
      className: "fa fa-minus"
    }))));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("td", {
    colSpan: "4",
    className: "text-end"
  }, "Total"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("td", {
    colSpan: 2
  }, totalMateriaux))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("td", {
    colSpan: "5"
  }, "Aucun mat\xE9riau point\xE9"))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("div", {
    className: "accordion-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("h2", {
    className: "accordion-header",
    id: "headingTwo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("button", {
    className: "accordion-button",
    type: "button",
    "data-bs-toggle": "collapse",
    "data-bs-target": "#collapseTwo",
    "aria-expanded": "false",
    "aria-controls": "collapseTwo"
  }, "Mat\xE9riels")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("div", {
    id: "collapseTwo",
    className: "accordion-collapse collapse show",
    "aria-labelledby": "headingTwo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("div", {
    className: "accordion-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("div", {
    className: "row g-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("div", {
    className: "col-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement(react_select__WEBPACK_IMPORTED_MODULE_29__["default"], {
    onChange: function onChange(item) {
      handleMatiereChange(item, 'MATERIELS');
    },
    options: materiels
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("table", {
    className: "styled-table mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("th", null, "Mat\xE9riels"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("th", null, "Unit\xE9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("th", {
    style: {
      width: "15%"
    }
  }, "Quantit\xE9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("th", {
    style: {
      width: "15%"
    }
  }, "Prix Unitaire"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("th", null, "Montant"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("th", null, "Actions"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("tbody", null, materielPointe.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement((react__WEBPACK_IMPORTED_MODULE_25___default().Fragment), null, materielPointe.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("tr", {
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("td", null, item.libelle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("td", null, item.unite), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("input", {
      type: "number",
      value: item.quantite,
      onChange: function onChange(event) {
        handleQteChange(item.id, event.target.value, 'MATERIELS');
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("input", {
      type: "number",
      value: item.prixUnitaire,
      onChange: function onChange(event) {
        handlePrixUnitaireChange(item.id, event.target.value, 'MATERIELS');
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("td", null, item.montant), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("button", {
      className: "btn btn-sm btn-danger"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("i", {
      className: "fa fa-minus"
    }))));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("td", {
    colSpan: "4",
    className: "text-end"
  }, "Total"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("td", {
    colSpan: 2
  }, totalMateriels))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("td", {
    colSpan: "5"
  }, "Aucun mat\xE9riel point\xE9"))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("div", {
    className: "accordion-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("h2", {
    className: "accordion-header",
    id: "headingThree"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("button", {
    className: "accordion-button",
    type: "button",
    "data-bs-toggle": "collapse",
    "data-bs-target": "#collapseThree",
    "aria-expanded": "false",
    "aria-controls": "collapseThree"
  }, "Personnels")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("div", {
    id: "collapseThree",
    className: "accordion-collapse collapse show",
    "aria-labelledby": "headingThree"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("div", {
    className: "accordion-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("div", {
    className: "row g-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("div", {
    className: "col-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement(react_select__WEBPACK_IMPORTED_MODULE_29__["default"], {
    onChange: function onChange(item) {
      handleMatiereChange(item, 'PERSONNELS');
    },
    options: personnels
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("table", {
    className: "styled-table mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("th", null, "Personnels"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("th", null, "Unit\xE9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("th", {
    style: {
      width: "15%"
    }
  }, "Quantit\xE9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("th", {
    style: {
      width: "15%"
    }
  }, "Prix Unitaire"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("th", null, "Montant"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("th", null, "Actions"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("tbody", null, personnelPointe.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement((react__WEBPACK_IMPORTED_MODULE_25___default().Fragment), null, personnelPointe.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("tr", {
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("td", null, item.libelle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("td", null, item.unite), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("input", {
      type: "number",
      value: item.quantite,
      onChange: function onChange(event) {
        handleQteChange(item.id, event.target.value, 'PERSONNELS');
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("input", {
      type: "number",
      value: item.prixUnitaire,
      onChange: function onChange(event) {
        handlePrixUnitaireChange(item.id, event.target.value, 'PERSONNELS');
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("td", null, item.montant), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("button", {
      className: "btn btn-sm btn-danger"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("i", {
      className: "fa fa-minus"
    }))));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("td", {
    colSpan: "4",
    className: "text-end"
  }, "Total"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("td", {
    colSpan: 2
  }, totalPersonnels))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("td", {
    colSpan: "5"
  }, "Aucun personnel point\xE9"))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("div", {
    className: "d-flex justify-content-center mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("button", {
    className: "btn btn-success"
  }, "Enregistrer le pointage")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("div", {
    className: "card-footer d-flex flex-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("button", {
    className: "btn btn-info"
  }, "Liste des pointages"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("div", {
    className: "ms-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("button", {
    className: "btn btn-primary",
    "data-bs-toggle": "modal",
    "data-bs-target": "#staticBackdrop",
    onClick: function onClick() {
      showModalAdd("MATERIAUX");
    }
  }, "Ajouter mat\xE9riau"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("button", {
    className: "btn btn-success ms-1",
    "data-bs-toggle": "modal",
    "data-bs-target": "#staticBackdrop",
    onClick: function onClick() {
      showModalAdd("MATERIELS");
    }
  }, "Ajouter mat\xE9riel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("button", {
    className: "btn btn-dark ms-1",
    "data-bs-toggle": "modal",
    "data-bs-target": "#staticBackdrop",
    onClick: function onClick() {
      showModalAdd("PERSONNELS");
    }
  }, "Ajouter mat\xE9riel"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("div", {
    className: "modal fade",
    id: "staticBackdrop",
    "data-bs-backdrop": "static",
    "data-bs-keyboard": "false",
    tabIndex: "-1",
    "aria-labelledby": "staticBackdropLabel",
    "aria-hidden": "true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("div", {
    className: "modal-dialog"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("h1", {
    className: "modal-title fs-5",
    id: "staticBackdropLabel"
  }, " ", selectedItem, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("button", {
    type: "button",
    className: "btn-close",
    "data-bs-dismiss": "modal",
    "aria-label": "Close"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("div", {
    className: "modal-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("div", {
    className: "row g-1 d-flex align-items-end"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("div", {
    className: "col-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("input", {
    type: "text",
    className: "form-control",
    value: itemLabel,
    placeholder: "Libellé " + selectedItem,
    onChange: function onChange(e) {
      return setItemLabel(e.target.value);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("div", {
    className: "col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("button", {
    onClick: function onClick() {
      return saveItem();
    },
    type: "button",
    className: "btn btn-success"
  }, "Enregistrer"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("table", {
    className: "styled-table mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("th", null, "Libell\xE9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("th", {
    style: {
      width: "10%"
    }
  }, "Actions"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("tbody", null, tabArray.length > 0 ? tabArray.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("tr", {
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("td", null, item.label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("button", {
      className: "btn btn-sm btn-danger"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("i", {
      className: "fa fa-minus"
    }))));
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("td", {
    colSpan: "2"
  }, "Aucun \xE9l\xE9ment"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("div", {
    className: "modal-footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("button", {
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_core-js_modules_es_ar-32fb05"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SSxDQUFDM0osT0FBTyxDQUFDNEosSUFBSSxDQUFDQyxPQUFPLENBQUMsQ0FBQztNQUMzQixJQUFJLENBQUNOLGFBQWEsQ0FBQyxTQUFTLEVBQUU7UUFDMUJyQixTQUFTLEVBQUUsSUFBSSxDQUFDc0IsY0FBYztRQUM5QkgsS0FBSyxFQUFFLElBQUksQ0FBQ0MsVUFBVSxHQUFHLElBQUksQ0FBQ0EsVUFBVSxHQUFHO01BQy9DLENBQUMsQ0FBQztJQUNOO0VBQUM7SUFBQXpKLEdBQUE7SUFBQUMsS0FBQSxFQUNELFNBQUEySixvQkFBb0JLLFlBQVksRUFBRTtNQUM5QixJQUFNOUosT0FBTyxHQUFHLElBQUksQ0FBQ0EsT0FBTztNQUM1QixJQUFJLENBQUNBLE9BQU8sQ0FBQzRKLElBQUksRUFBRTtRQUNmNUosT0FBTyxDQUFDNEosSUFBSSxHQUFHbkIsVUFBVSxDQUFDLElBQUksQ0FBQ3pJLE9BQU8sQ0FBQztNQUMzQztNQUNBQSxPQUFPLENBQUM0SixJQUFJLENBQUNHLE1BQU0sQ0FBQ0QsWUFBWSxDQUFDO0lBQ3JDO0VBQUM7SUFBQWpLLEdBQUE7SUFBQUMsS0FBQSxFQUNELFNBQUF5SixjQUFjdEIsSUFBSSxFQUFFK0IsT0FBTyxFQUFFO01BQ3pCLElBQUksQ0FBQ0MsUUFBUSxDQUFDaEMsSUFBSSxFQUFFO1FBQUVpQyxNQUFNLEVBQUVGLE9BQU87UUFBRUcsTUFBTSxFQUFFO01BQVEsQ0FBQyxDQUFDO0lBQzdEO0VBQUM7RUFBQSxPQUFBZixTQUFBO0FBQUEsRUEvQm1CakssMkRBQVU7QUFpQ2xDaUssU0FBUyxDQUFDZ0IsTUFBTSxHQUFHO0VBQ2ZsQyxTQUFTLEVBQUVtQyxNQUFNO0VBQ2pCaEIsS0FBSyxFQUFFakI7QUFDWCxDQUFDOzs7Ozs7Ozs7Ozs7O0FDMUREIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLyBcXC5banRdc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzLyBzeW5jIFxcLihqJTdDdClzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMuanNvbiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0L2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvTWFpbi5qc3giLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL3N5bWZvbnkvdXgtcmVhY3QvYXNzZXRzL2Rpc3QvcmVnaXN0ZXJfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi92ZW5kb3Ivc3ltZm9ueS91eC1yZWFjdC9hc3NldHMvZGlzdC9yZW5kZXJfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5jc3MiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2hlbGxvX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIC4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzISBcXFxcLltqdF1zeD8kXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL01haW4uanN4XCI6IFwiLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvTWFpbi5qc3hcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgXFxcXC4oaiU3Q3Qpc3g/JFwiOyIsImltcG9ydCBjb250cm9sbGVyXzAgZnJvbSAnQHN5bWZvbnkvdXgtcmVhY3QvZGlzdC9yZW5kZXJfY29udHJvbGxlci5qcyc7XG5leHBvcnQgZGVmYXVsdCB7XG4gICdzeW1mb255LS11eC1yZWFjdC0tcmVhY3QnOiBjb250cm9sbGVyXzAsXG59OyIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuXG4vKlxuICogVGhpcyBpcyBhbiBleGFtcGxlIFN0aW11bHVzIGNvbnRyb2xsZXIhXG4gKlxuICogQW55IGVsZW1lbnQgd2l0aCBhIGRhdGEtY29udHJvbGxlcj1cImhlbGxvXCIgYXR0cmlidXRlIHdpbGwgY2F1c2VcbiAqIHRoaXMgY29udHJvbGxlciB0byBiZSBleGVjdXRlZC4gVGhlIG5hbWUgXCJoZWxsb1wiIGNvbWVzIGZyb20gdGhlIGZpbGVuYW1lOlxuICogaGVsbG9fY29udHJvbGxlci5qcyAtPiBcImhlbGxvXCJcbiAqXG4gKiBEZWxldGUgdGhpcyBmaWxlIG9yIGFkYXB0IGl0IGZvciB5b3VyIHVzZSFcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBjb25uZWN0KCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSAnSGVsbG8gU3RpbXVsdXMhIEVkaXQgbWUgaW4gYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMnO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IHJlZ2lzdGVyUmVhY3RDb250cm9sbGVyQ29tcG9uZW50cyB9IGZyb20gJ0BzeW1mb255L3V4LXJlYWN0JztcbmltcG9ydCAnLi9ib290c3RyYXAuanMnO1xuLypcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAqXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxuICovXG5cbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcbmltcG9ydCAnLi9zdHlsZXMvYXBwLmNzcyc7XG5cbnJlZ2lzdGVyUmVhY3RDb250cm9sbGVyQ29tcG9uZW50cyhyZXF1aXJlLmNvbnRleHQoJy4vcmVhY3QvY29udHJvbGxlcnMnLCB0cnVlLCAvXFwuKGp8dClzeD8kLykpOyIsImltcG9ydCB7IHN0YXJ0U3RpbXVsdXNBcHAgfSBmcm9tICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UnO1xuXG4vLyBSZWdpc3RlcnMgU3RpbXVsdXMgY29udHJvbGxlcnMgZnJvbSBjb250cm9sbGVycy5qc29uIGFuZCBpbiB0aGUgY29udHJvbGxlcnMvIGRpcmVjdG9yeVxuZXhwb3J0IGNvbnN0IGFwcCA9IHN0YXJ0U3RpbXVsdXNBcHAocmVxdWlyZS5jb250ZXh0KFxuICAgICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlciEuL2NvbnRyb2xsZXJzJyxcbiAgICB0cnVlLFxuICAgIC9cXC5banRdc3g/JC9cbikpO1xuLy8gcmVnaXN0ZXIgYW55IGN1c3RvbSwgM3JkIHBhcnR5IGNvbnRyb2xsZXJzIGhlcmVcbi8vIGFwcC5yZWdpc3Rlcignc29tZV9jb250cm9sbGVyX25hbWUnLCBTb21lSW1wb3J0ZWRDb250cm9sbGVyKTtcbiIsImV4cG9ydCBjb25zdCBhcGlVcmwgPSAnaHR0cDovL2xvY2FsaG9zdDo4MDAxL2FwaS8nO1xuXG4vLyBleHBvcnQgY29uc3QgYXBpVXJsID0gJ2h0dHA6Ly90ZXN0LndpdGI3OTA0Lm9kbnMuZnIvYXBpLyc7XG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge2FwaVVybH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IFNlbGVjdCBmcm9tICdyZWFjdC1zZWxlY3QnO1xuaW1wb3J0IHtUb2FzdENvbnRhaW5lciwgdG9hc3R9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcblxuaW1wb3J0ICdyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzJztcblxuXG5jb25zdCBNYWluID0gKCkgPT4ge1xuICAgIGNvbnN0IFttYXRlcmlhdXgsIHNldE1hdGVyaWF1eF0gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW21hdGVyaWVscywgc2V0TWF0ZXJpZWxzXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbcGVyc29ubmVscywgc2V0UGVyc29ubmVsc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgICBjb25zdCBbbWF0ZXJpYXVQb2ludGUsIHNldE1hdGVyaWF1UG9pbnRlXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbbWF0ZXJpZWxQb2ludGUsIHNldE1hdGVyaWVsUG9pbnRlXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbcGVyc29ubmVsUG9pbnRlLCBzZXRQZXJzb25uZWxQb2ludGVdID0gdXNlU3RhdGUoW10pO1xuXG4gICAgY29uc3QgW3NlbGVjdGVkSXRlbSwgc2V0U2VsZWN0ZWRJdGVtXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtpdGVtTGFiZWwsIHNldEl0ZW1MYWJlbF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICAgIGNvbnN0IFt0YWJBcnJheSwgc2V0VGFiQXJyYXldID0gdXNlU3RhdGUoW10pO1xuXG4gICAgY29uc3QgW3RvdGFsTWF0ZXJpYXV4LCBzZXRUb3RhbE1hdGVyaWF1eF0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbdG90YWxNYXRlcmllbHMsIHNldFRvdGFsTWF0ZXJpZWxzXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFt0b3RhbFBlcnNvbm5lbHMsIHNldFRvdGFsUGVyc29ubmVsc10gPSB1c2VTdGF0ZSgwKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGxvYWREYXRhKCk7XG4gICAgfSwgW10pO1xuXG4gICAgY29uc3Qgc2F2ZUl0ZW0gPSAoKSA9PiB7XG4gICAgICAgIGxldCB1cmwgPSBcIlwiO1xuXG4gICAgICAgIHN3aXRjaCAoc2VsZWN0ZWRJdGVtKSB7XG4gICAgICAgICAgICBjYXNlIFwiTUFURVJJQVVYXCI6XG4gICAgICAgICAgICAgICAgdXJsID0gYCR7YXBpVXJsfW1hdGVyaWF1c2A7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiTUFURVJJRUxTXCI6XG4gICAgICAgICAgICAgICAgdXJsID0gYCR7YXBpVXJsfW1hdGVyaWVsc2A7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiUEVSU09OTkVMU1wiOlxuICAgICAgICAgICAgICAgIHVybCA9IGAke2FwaVVybH1wZXJzb25uZWxzYDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBmZXRjaCh1cmwsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgbGliZWxsZTogaXRlbUxhYmVsXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIHNldEl0ZW1MYWJlbChcIlwiKTtcblxuICAgICAgICAgICAgICAgIHN3aXRjaCAoc2VsZWN0ZWRJdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJNQVRFUklBVVhcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldE1hdGVyaWF1eChbLi4ubWF0ZXJpYXV4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGRhdGEuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGRhdGEubGliZWxsZVxuICAgICAgICAgICAgICAgICAgICAgICAgfV0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUYWJBcnJheShbLi4ubWF0ZXJpYXV4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGRhdGEuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGRhdGEubGliZWxsZVxuICAgICAgICAgICAgICAgICAgICAgICAgfV0pXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiTUFURVJJRUxTXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRNYXRlcmllbHMoWy4uLm1hdGVyaWVscywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBkYXRhLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBkYXRhLmxpYmVsbGVcbiAgICAgICAgICAgICAgICAgICAgICAgIH1dKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUYWJBcnJheShbLi4ubWF0ZXJpZWxzLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGRhdGEuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGRhdGEubGliZWxsZVxuICAgICAgICAgICAgICAgICAgICAgICAgfV0pXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiUEVSU09OTkVMU1wiOlxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UGVyc29ubmVscyhbLi4ucGVyc29ubmVscywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBkYXRhLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBkYXRhLmxpYmVsbGVcbiAgICAgICAgICAgICAgICAgICAgICAgIH1dKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUYWJBcnJheShbLi4ucGVyc29ubmVscywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBkYXRhLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBkYXRhLmxpYmVsbGVcbiAgICAgICAgICAgICAgICAgICAgICAgIH1dKVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRvYXN0LnN1Y2Nlc3MoXCJFbnJlZ2lzdHJlbWVudCBlZmZlY3R1w6kgYXZlYyBzdWNjw6hzICFcIik7XG4gICAgICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IHNob3dNb2RhbEFkZCA9ICh0eXBlKSA9PiB7XG4gICAgICAgIHNldFNlbGVjdGVkSXRlbSh0eXBlKVxuXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSBcIk1BVEVSSUFVWFwiOlxuICAgICAgICAgICAgICAgIHNldFRhYkFycmF5KG1hdGVyaWF1eCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiTUFURVJJRUxTXCI6XG4gICAgICAgICAgICAgICAgc2V0VGFiQXJyYXkobWF0ZXJpZWxzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJQRVJTT05ORUxTXCI6XG4gICAgICAgICAgICAgICAgc2V0VGFiQXJyYXkocGVyc29ubmVscyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHNldFRhYkFycmF5KFtdKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGxvYWREYXRhID0gKCkgPT4ge1xuICAgICAgICBmZXRjaChgJHthcGlVcmx9bWF0ZXJpYXVzYCwge1xuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAvL21hcCBkYXRhIHRvIHZhbHVlIGFuZCBsYWJlbFxuICAgICAgICAgICAgICAgIHNldE1hdGVyaWF1eChkYXRhLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBpdGVtLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGl0ZW0ubGliZWxsZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICB9KVxuXG5cbiAgICAgICAgZmV0Y2goYCR7YXBpVXJsfW1hdGVyaWVsc2AsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgLy9tYXAgZGF0YSB0byB2YWx1ZSBhbmQgbGFiZWxcbiAgICAgICAgICAgICAgICBzZXRNYXRlcmllbHMoZGF0YS5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogaXRlbS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBpdGVtLmxpYmVsbGVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgfSlcblxuICAgICAgICBmZXRjaChgJHthcGlVcmx9cGVyc29ubmVsc2AsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgLy9tYXAgZGF0YSB0byB2YWx1ZSBhbmQgbGFiZWxcbiAgICAgICAgICAgICAgICBzZXRQZXJzb25uZWxzKGRhdGEubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGl0ZW0uaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogaXRlbS5saWJlbGxlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlTWF0aWVyZUNoYW5nZSA9IChpdGVtLCB0eXBlKSA9PiB7XG4gICAgICAgIGNvbnN0IG1hdGVyaWVyZVBvaW50ZSA9IHtcbiAgICAgICAgICAgIGlkOiBpdGVtLnZhbHVlLFxuICAgICAgICAgICAgbGliZWxsZTogaXRlbS5sYWJlbCxcbiAgICAgICAgICAgIHVuaXRlOiBcIktHXCIsXG4gICAgICAgICAgICBxdWFudGl0ZTogMCxcbiAgICAgICAgICAgIHByaXhVbml0YWlyZTogMFxuICAgICAgICB9XG5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIFwiTUFURVJJQVVYXCI6XG4gICAgICAgICAgICAgICAgLy9pdGVtIGFscmVhZHkgZXhpc3RcbiAgICAgICAgICAgICAgICBpZiAobWF0ZXJpYXVQb2ludGUuZmluZChlbGVtZW50ID0+IGVsZW1lbnQuaWQgPT09IGl0ZW0udmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRvYXN0LmVycm9yKFwiQ2V0IMOpbMOpbWVudCBleGlzdGUgZMOpasOgIGRhbnMgbGUgdGFibGVhdSAhXCIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc2V0TWF0ZXJpYXVQb2ludGUoWy4uLm1hdGVyaWF1UG9pbnRlLCBtYXRlcmllcmVQb2ludGVdKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJNQVRFUklFTFNcIjpcblxuICAgICAgICAgICAgICAgIGlmIChtYXRlcmllbFBvaW50ZS5maW5kKGVsZW1lbnQgPT4gZWxlbWVudC5pZCA9PT0gaXRlbS52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9hc3QuZXJyb3IoXCJDZXQgw6lsw6ltZW50IGV4aXN0ZSBkw6lqw6AgZGFucyBsZSB0YWJsZWF1ICFcIik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2V0TWF0ZXJpZWxQb2ludGUoWy4uLm1hdGVyaWVsUG9pbnRlLCBtYXRlcmllcmVQb2ludGVdKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJQRVJTT05ORUxTXCI6XG5cbiAgICAgICAgICAgICAgICBpZiAocGVyc29ubmVsUG9pbnRlLmZpbmQoZWxlbWVudCA9PiBlbGVtZW50LmlkID09PSBpdGVtLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICB0b2FzdC5lcnJvcihcIkNldCDDqWzDqW1lbnQgZXhpc3RlIGTDqWrDoCBkYW5zIGxlIHRhYmxlYXUgIVwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZXRQZXJzb25uZWxQb2ludGUoWy4uLnBlcnNvbm5lbFBvaW50ZSwgbWF0ZXJpZXJlUG9pbnRlXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVRdGVDaGFuZ2UgPSAoaWQsIHZhbHVlLCB0eXBlKSA9PiB7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSBcIk1BVEVSSUFVWFwiOlxuICAgICAgICAgICAgICAgIHNldE1hdGVyaWF1UG9pbnRlKG1hdGVyaWF1UG9pbnRlLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uaWQgPT09IGlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnF1YW50aXRlID0gcGFyc2VGbG9hdCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLm1vbnRhbnQgPSBpdGVtLnF1YW50aXRlICogaXRlbS5wcml4VW5pdGFpcmU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgICAgICAgICB9KSlcblxuICAgICAgICAgICAgICAgIHNldFRvdGFsTWF0ZXJpYXV4KG1hdGVyaWF1UG9pbnRlLnJlZHVjZSgoYSwgYikgPT4gYSArIChiWydtb250YW50J10gfHwgMCksIDApKTtcblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIk1BVEVSSUVMU1wiOlxuICAgICAgICAgICAgICAgIHNldE1hdGVyaWVsUG9pbnRlKG1hdGVyaWVsUG9pbnRlLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uaWQgPT09IGlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnF1YW50aXRlID0gcGFyc2VGbG9hdCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLm1vbnRhbnQgPSBpdGVtLnF1YW50aXRlICogaXRlbS5wcml4VW5pdGFpcmU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgICAgICAgICB9KSlcblxuICAgICAgICAgICAgICAgIHNldFRvdGFsTWF0ZXJpZWxzKG1hdGVyaWVsUG9pbnRlLnJlZHVjZSgoYSwgYikgPT4gYSArIChiWydtb250YW50J10gfHwgMCksIDApKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJQRVJTT05ORUxTXCI6XG4gICAgICAgICAgICAgICAgc2V0UGVyc29ubmVsUG9pbnRlKHBlcnNvbm5lbFBvaW50ZS5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmlkID09PSBpZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5xdWFudGl0ZSA9IHBhcnNlRmxvYXQodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5tb250YW50ID0gaXRlbS5xdWFudGl0ZSAqIGl0ZW0ucHJpeFVuaXRhaXJlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgICAgICAgICAgfSkpXG5cbiAgICAgICAgICAgICAgICBzZXRUb3RhbFBlcnNvbm5lbHMocGVyc29ubmVsUG9pbnRlLnJlZHVjZSgoYSwgYikgPT4gYSArIChiWydtb250YW50J10gfHwgMCksIDApKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVByaXhVbml0YWlyZUNoYW5nZSA9IChpZCwgdmFsdWUsIHR5cGUpID0+IHtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIFwiTUFURVJJQVVYXCI6XG4gICAgICAgICAgICAgICAgc2V0TWF0ZXJpYXVQb2ludGUobWF0ZXJpYXVQb2ludGUubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ucHJpeFVuaXRhaXJlID0gcGFyc2VGbG9hdCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLm1vbnRhbnQgPSBpdGVtLnF1YW50aXRlICogaXRlbS5wcml4VW5pdGFpcmU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgICAgICAgICB9KSlcblxuICAgICAgICAgICAgICAgIHNldFRvdGFsTWF0ZXJpYXV4KG1hdGVyaWF1UG9pbnRlLnJlZHVjZSgoYSwgYikgPT4gYSArIChiWydtb250YW50J10gfHwgMCksIDApKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJNQVRFUklFTFNcIjpcbiAgICAgICAgICAgICAgICBzZXRNYXRlcmllbFBvaW50ZShtYXRlcmllbFBvaW50ZS5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmlkID09PSBpZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5wcml4VW5pdGFpcmUgPSBwYXJzZUZsb2F0KHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ubW9udGFudCA9IGl0ZW0ucXVhbnRpdGUgKiBpdGVtLnByaXhVbml0YWlyZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICAgICAgICAgIH0pKVxuXG4gICAgICAgICAgICAgICAgc2V0VG90YWxNYXRlcmllbHMobWF0ZXJpZWxQb2ludGUucmVkdWNlKChhLCBiKSA9PiBhICsgKGJbJ21vbnRhbnQnXSB8fCAwKSwgMCkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIlBFUlNPTk5FTFNcIjpcbiAgICAgICAgICAgICAgICBzZXRQZXJzb25uZWxQb2ludGUocGVyc29ubmVsUG9pbnRlLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uaWQgPT09IGlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnByaXhVbml0YWlyZSA9IHBhcnNlRmxvYXQodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5tb250YW50ID0gaXRlbS5xdWFudGl0ZSAqIGl0ZW0ucHJpeFVuaXRhaXJlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgICAgICAgICAgfSkpXG5cbiAgICAgICAgICAgICAgICBzZXRUb3RhbFBlcnNvbm5lbHMocGVyc29ubmVsUG9pbnRlLnJlZHVjZSgoYSwgYikgPT4gYSArIChiWydtb250YW50J10gfHwgMCksIDApKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHNldFRvdGFsTWF0ZXJpYXV4KG1hdGVyaWF1UG9pbnRlLnJlZHVjZSgoYSwgYikgPT4gYSArIChiWydtb250YW50J10gfHwgMCksIDApKTtcbiAgICB9XG5cbiAgICByZXR1cm4gPD5cbiAgICAgICAgPFRvYXN0Q29udGFpbmVyIHBvc2l0aW9uPXsndG9wLWxlZnQnfSBhdXRvQ2xvc2U9ezUwMDB9IHRoZW1lPXsnZGFyayd9Lz5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXIgZC1mbGV4IGZsZXgtcm93XCI+XG4gICAgICAgICAgICAgICAgPGg1PkVsYWJvcmF0aW9uIGR1IGNvdXQgZGUgcHJvZHVjdGlvbjwvaDU+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtcy1hdXRvIGctMSBkLWZsZXggYWxpZ24taXRlbXMtZW5kXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLThcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibnVtZXJvXCI+TnVtw6lybyBkZSBjb3V0IGRlIHByb2R1Y3Rpb248L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJudW1lcm9cIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2Vzc1wiPkNoYXJnZXI8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvcmRpb25cIiBpZD1cImFjY29yZGlvbkV4YW1wbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvcmRpb24taXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImFjY29yZGlvbi1oZWFkZXJcIiBpZD1cImhlYWRpbmdPbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImFjY29yZGlvbi1idXR0b25cIiB0eXBlPVwiYnV0dG9uXCIgZGF0YS1icy10b2dnbGU9XCJjb2xsYXBzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWJzLXRhcmdldD1cIiNjb2xsYXBzZU9uZVwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIGFyaWEtY29udHJvbHM9XCJjb2xsYXBzZU9uZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXTDqXJpYXV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiY29sbGFwc2VPbmVcIiBjbGFzc05hbWU9XCJhY2NvcmRpb24tY29sbGFwc2UgY29sbGFwc2Ugc2hvd1wiIGFyaWEtbGFiZWxsZWRieT1cImhlYWRpbmdPbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY29yZGlvbi1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGctMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3Qgb25DaGFuZ2U9eyhpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZU1hdGllcmVDaGFuZ2UoaXRlbSwgJ01BVEVSSUFVWCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gb3B0aW9ucz17bWF0ZXJpYXV4fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInN0eWxlZC10YWJsZSBtdC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk1hdMOpcmlhdXg8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Vbml0w6k8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17e3dpZHRoOiBcIjE1JVwifX0+UXVhbnRpdMOpPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3t3aWR0aDogXCIxNSVcIn19PlByaXggVW5pdGFpcmU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Nb250YW50PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+QWN0aW9uczwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRlcmlhdVBvaW50ZS5sZW5ndGggPiAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRlcmlhdVBvaW50ZS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntpdGVtLmxpYmVsbGV9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2l0ZW0udW5pdGV9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpdGVtLnF1YW50aXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVF0ZUNoYW5nZShpdGVtLmlkLCBldmVudC50YXJnZXQudmFsdWUsICdNQVRFUklBVVgnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2l0ZW0ucHJpeFVuaXRhaXJlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVByaXhVbml0YWlyZUNoYW5nZShpdGVtLmlkLCBldmVudC50YXJnZXQudmFsdWUsICdNQVRFUklBVVgnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57aXRlbS5tb250YW50fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc20gYnRuLWRhbmdlclwiPjxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmYSBmYS1taW51c1wiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49XCI0XCIgY2xhc3NOYW1lPVwidGV4dC1lbmRcIj5Ub3RhbDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49ezJ9Pnt0b3RhbE1hdGVyaWF1eH08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49XCI1XCI+QXVjdW4gbWF0w6lyaWF1IHBvaW50w6k8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvcmRpb24taXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImFjY29yZGlvbi1oZWFkZXJcIiBpZD1cImhlYWRpbmdUd29cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImFjY29yZGlvbi1idXR0b25cIiB0eXBlPVwiYnV0dG9uXCIgZGF0YS1icy10b2dnbGU9XCJjb2xsYXBzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWJzLXRhcmdldD1cIiNjb2xsYXBzZVR3b1wiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIGFyaWEtY29udHJvbHM9XCJjb2xsYXBzZVR3b1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXTDqXJpZWxzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImNvbGxhcHNlVHdvXCIgY2xhc3NOYW1lPVwiYWNjb3JkaW9uLWNvbGxhcHNlIGNvbGxhcHNlIHNob3dcIiBhcmlhLWxhYmVsbGVkYnk9XCJoZWFkaW5nVHdvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvcmRpb24tYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBnLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0IG9uQ2hhbmdlPXsoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVNYXRpZXJlQ2hhbmdlKGl0ZW0sICdNQVRFUklFTFMnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IG9wdGlvbnM9e21hdGVyaWVsc30vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJzdHlsZWQtdGFibGUgbXQtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5NYXTDqXJpZWxzPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+VW5pdMOpPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3t3aWR0aDogXCIxNSVcIn19PlF1YW50aXTDqTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7d2lkdGg6IFwiMTUlXCJ9fT5Qcml4IFVuaXRhaXJlPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+TW9udGFudDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkFjdGlvbnM8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0ZXJpZWxQb2ludGUubGVuZ3RoID4gMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0ZXJpZWxQb2ludGUubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57aXRlbS5saWJlbGxlfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntpdGVtLnVuaXRlfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aXRlbS5xdWFudGl0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVRdGVDaGFuZ2UoaXRlbS5pZCwgZXZlbnQudGFyZ2V0LnZhbHVlLCAnTUFURVJJRUxTJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpdGVtLnByaXhVbml0YWlyZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVQcml4VW5pdGFpcmVDaGFuZ2UoaXRlbS5pZCwgZXZlbnQudGFyZ2V0LnZhbHVlLCAnTUFURVJJRUxTJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2l0ZW0ubW9udGFudH08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXNtIGJ0bi1kYW5nZXJcIj48aVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmEgZmEtbWludXNcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPVwiNFwiIGNsYXNzTmFtZT1cInRleHQtZW5kXCI+VG90YWw8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPXsyfT57dG90YWxNYXRlcmllbHN9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49XCI1XCI+QXVjdW4gbWF0w6lyaWVsIHBvaW50w6k8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvcmRpb24taXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImFjY29yZGlvbi1oZWFkZXJcIiBpZD1cImhlYWRpbmdUaHJlZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYWNjb3JkaW9uLWJ1dHRvblwiIHR5cGU9XCJidXR0b25cIiBkYXRhLWJzLXRvZ2dsZT1cImNvbGxhcHNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYnMtdGFyZ2V0PVwiI2NvbGxhcHNlVGhyZWVcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiBhcmlhLWNvbnRyb2xzPVwiY29sbGFwc2VUaHJlZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQZXJzb25uZWxzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImNvbGxhcHNlVGhyZWVcIiBjbGFzc05hbWU9XCJhY2NvcmRpb24tY29sbGFwc2UgY29sbGFwc2Ugc2hvd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImhlYWRpbmdUaHJlZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3JkaW9uLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgZy0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdCBvbkNoYW5nZT17KGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlTWF0aWVyZUNoYW5nZShpdGVtLCAnUEVSU09OTkVMUycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gb3B0aW9ucz17cGVyc29ubmVsc30vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJzdHlsZWQtdGFibGUgbXQtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5QZXJzb25uZWxzPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+VW5pdMOpPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3t3aWR0aDogXCIxNSVcIn19PlF1YW50aXTDqTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7d2lkdGg6IFwiMTUlXCJ9fT5Qcml4IFVuaXRhaXJlPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+TW9udGFudDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkFjdGlvbnM8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVyc29ubmVsUG9pbnRlLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcnNvbm5lbFBvaW50ZS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntpdGVtLmxpYmVsbGV9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2l0ZW0udW5pdGV9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpdGVtLnF1YW50aXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVF0ZUNoYW5nZShpdGVtLmlkLCBldmVudC50YXJnZXQudmFsdWUsICdQRVJTT05ORUxTJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpdGVtLnByaXhVbml0YWlyZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVQcml4VW5pdGFpcmVDaGFuZ2UoaXRlbS5pZCwgZXZlbnQudGFyZ2V0LnZhbHVlLCAnUEVSU09OTkVMUycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntpdGVtLm1vbnRhbnR9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbSBidG4tZGFuZ2VyXCI+PGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZhIGZhLW1pbnVzXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj1cIjRcIiBjbGFzc05hbWU9XCJ0ZXh0LWVuZFwiPlRvdGFsPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj17Mn0+e3RvdGFsUGVyc29ubmVsc308L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49XCI1XCI+QXVjdW4gcGVyc29ubmVsIHBvaW50w6k8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgbXQtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIj5FbnJlZ2lzdHJlciBsZSBwb2ludGFnZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWZvb3RlciBkLWZsZXggZmxleC1yb3dcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4taW5mb1wiPkxpc3RlIGRlcyBwb2ludGFnZXM8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXMtYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1icy10b2dnbGU9XCJtb2RhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1icy10YXJnZXQ9XCIjc3RhdGljQmFja2Ryb3BcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd01vZGFsQWRkKFwiTUFURVJJQVVYXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICBBam91dGVyIG1hdMOpcmlhdVxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2VzcyBtcy0xXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWJzLXRvZ2dsZT1cIm1vZGFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWJzLXRhcmdldD1cIiNzdGF0aWNCYWNrZHJvcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93TW9kYWxBZGQoXCJNQVRFUklFTFNcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIEFqb3V0ZXIgbWF0w6lyaWVsXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYXJrIG1zLTFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYnMtdG9nZ2xlPVwibW9kYWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYnMtdGFyZ2V0PVwiI3N0YXRpY0JhY2tkcm9wXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dNb2RhbEFkZChcIlBFUlNPTk5FTFNcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIEFqb3V0ZXIgbWF0w6lyaWVsXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwgZmFkZVwiIGlkPVwic3RhdGljQmFja2Ryb3BcIiBkYXRhLWJzLWJhY2tkcm9wPVwic3RhdGljXCIgZGF0YS1icy1rZXlib2FyZD1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICAgdGFiSW5kZXg9XCItMVwiIGFyaWEtbGFiZWxsZWRieT1cInN0YXRpY0JhY2tkcm9wTGFiZWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlIGZzLTVcIiBpZD1cInN0YXRpY0JhY2tkcm9wTGFiZWxcIj4ge3NlbGVjdGVkSXRlbX0gPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4tY2xvc2VcIiBkYXRhLWJzLWRpc21pc3M9XCJtb2RhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiQ2xvc2VcIj48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgZy0xIGQtZmxleCBhbGlnbi1pdGVtcy1lbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpdGVtTGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1wiTGliZWxsw6kgXCIgKyBzZWxlY3RlZEl0ZW19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRJdGVtTGFiZWwoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNhdmVJdGVtKCl9IHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIj5FbnJlZ2lzdHJlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInN0eWxlZC10YWJsZSBtdC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkxpYmVsbMOpPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwJVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5BY3Rpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYkFycmF5Lmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRhYkFycmF5Lm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2l0ZW0ubGFiZWx9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbSBidG4tZGFuZ2VyXCI+PGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZhIGZhLW1pbnVzXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPVwiMlwiPkF1Y3VuIMOpbMOpbWVudDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiIGRhdGEtYnMtZGlzbWlzcz1cIm1vZGFsXCI+RmVybWVyPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC8+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluO1xuIiwiZnVuY3Rpb24gcmVnaXN0ZXJSZWFjdENvbnRyb2xsZXJDb21wb25lbnRzKGNvbnRleHQpIHtcbiAgICBjb25zdCByZWFjdENvbnRyb2xsZXJzID0ge307XG4gICAgY29uc3QgaW1wb3J0QWxsUmVhY3RDb21wb25lbnRzID0gKHIpID0+IHtcbiAgICAgICAgci5rZXlzKCkuZm9yRWFjaCgoa2V5KSA9PiAocmVhY3RDb250cm9sbGVyc1trZXldID0gcihrZXkpLmRlZmF1bHQpKTtcbiAgICB9O1xuICAgIGltcG9ydEFsbFJlYWN0Q29tcG9uZW50cyhjb250ZXh0KTtcbiAgICB3aW5kb3cucmVzb2x2ZVJlYWN0Q29tcG9uZW50ID0gKG5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgY29tcG9uZW50ID0gcmVhY3RDb250cm9sbGVyc1tgLi8ke25hbWV9LmpzeGBdIHx8IHJlYWN0Q29udHJvbGxlcnNbYC4vJHtuYW1lfS50c3hgXTtcbiAgICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBjb25zdCBwb3NzaWJsZVZhbHVlcyA9IE9iamVjdC5rZXlzKHJlYWN0Q29udHJvbGxlcnMpLm1hcCgoa2V5KSA9PiBrZXkucmVwbGFjZSgnLi8nLCAnJykucmVwbGFjZSgnLmpzeCcsICcnKS5yZXBsYWNlKCcudHN4JywgJycpKTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgUmVhY3QgY29udHJvbGxlciBcIiR7bmFtZX1cIiBkb2VzIG5vdCBleGlzdC4gUG9zc2libGUgdmFsdWVzOiAke3Bvc3NpYmxlVmFsdWVzLmpvaW4oJywgJyl9YCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgICB9O1xufVxuXG5leHBvcnQgeyByZWdpc3RlclJlYWN0Q29udHJvbGxlckNvbXBvbmVudHMgfTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcmVxdWlyZSQkMCBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5cbnZhciBjcmVhdGVSb290O1xuXG52YXIgbSA9IHJlcXVpcmUkJDA7XG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBjcmVhdGVSb290ID0gbS5jcmVhdGVSb290O1xuICBtLmh5ZHJhdGVSb290O1xufSBlbHNlIHtcbiAgdmFyIGkgPSBtLl9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEO1xuICBjcmVhdGVSb290ID0gZnVuY3Rpb24oYywgbykge1xuICAgIGkudXNpbmdDbGllbnRFbnRyeVBvaW50ID0gdHJ1ZTtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIG0uY3JlYXRlUm9vdChjLCBvKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaS51c2luZ0NsaWVudEVudHJ5UG9pbnQgPSBmYWxzZTtcbiAgICB9XG4gIH07XG59XG5cbmNsYXNzIGRlZmF1bHRfMSBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIGNvbnN0IHByb3BzID0gdGhpcy5wcm9wc1ZhbHVlID8gdGhpcy5wcm9wc1ZhbHVlIDogbnVsbDtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdjb25uZWN0JywgeyBjb21wb25lbnQ6IHRoaXMuY29tcG9uZW50VmFsdWUsIHByb3BzOiBwcm9wcyB9KTtcbiAgICAgICAgaWYgKCF0aGlzLmNvbXBvbmVudFZhbHVlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGNvbXBvbmVudCBzcGVjaWZpZWQuJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29tcG9uZW50ID0gd2luZG93LnJlc29sdmVSZWFjdENvbXBvbmVudCh0aGlzLmNvbXBvbmVudFZhbHVlKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyUmVhY3RFbGVtZW50KFJlYWN0LmNyZWF0ZUVsZW1lbnQoY29tcG9uZW50LCBwcm9wcywgbnVsbCkpO1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ21vdW50Jywge1xuICAgICAgICAgICAgY29tcG9uZW50TmFtZTogdGhpcy5jb21wb25lbnRWYWx1ZSxcbiAgICAgICAgICAgIGNvbXBvbmVudDogY29tcG9uZW50LFxuICAgICAgICAgICAgcHJvcHM6IHByb3BzLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZGlzY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnJvb3QudW5tb3VudCgpO1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ3VubW91bnQnLCB7XG4gICAgICAgICAgICBjb21wb25lbnQ6IHRoaXMuY29tcG9uZW50VmFsdWUsXG4gICAgICAgICAgICBwcm9wczogdGhpcy5wcm9wc1ZhbHVlID8gdGhpcy5wcm9wc1ZhbHVlIDogbnVsbCxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9yZW5kZXJSZWFjdEVsZW1lbnQocmVhY3RFbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmVsZW1lbnQ7XG4gICAgICAgIGlmICghZWxlbWVudC5yb290KSB7XG4gICAgICAgICAgICBlbGVtZW50LnJvb3QgPSBjcmVhdGVSb290KHRoaXMuZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudC5yb290LnJlbmRlcihyZWFjdEVsZW1lbnQpO1xuICAgIH1cbiAgICBkaXNwYXRjaEV2ZW50KG5hbWUsIHBheWxvYWQpIHtcbiAgICAgICAgdGhpcy5kaXNwYXRjaChuYW1lLCB7IGRldGFpbDogcGF5bG9hZCwgcHJlZml4OiAncmVhY3QnIH0pO1xuICAgIH1cbn1cbmRlZmF1bHRfMS52YWx1ZXMgPSB7XG4gICAgY29tcG9uZW50OiBTdHJpbmcsXG4gICAgcHJvcHM6IE9iamVjdCxcbn07XG5cbmV4cG9ydCB7IGRlZmF1bHRfMSBhcyBkZWZhdWx0IH07XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiQ29udHJvbGxlciIsIl9kZWZhdWx0IiwiX0NvbnRyb2xsZXIiLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJfY2xhc3NDYWxsQ2hlY2siLCJhcHBseSIsImFyZ3VtZW50cyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiY29ubmVjdCIsImVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImRlZmF1bHQiLCJyZWdpc3RlclJlYWN0Q29udHJvbGxlckNvbXBvbmVudHMiLCJyZXF1aXJlIiwiY29udGV4dCIsInN0YXJ0U3RpbXVsdXNBcHAiLCJhcHAiLCJhcGlVcmwiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiU2VsZWN0IiwiVG9hc3RDb250YWluZXIiLCJ0b2FzdCIsIk1haW4iLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJtYXRlcmlhdXgiLCJzZXRNYXRlcmlhdXgiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsIm1hdGVyaWVscyIsInNldE1hdGVyaWVscyIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2IiwicGVyc29ubmVscyIsInNldFBlcnNvbm5lbHMiLCJfdXNlU3RhdGU3IiwiX3VzZVN0YXRlOCIsIm1hdGVyaWF1UG9pbnRlIiwic2V0TWF0ZXJpYXVQb2ludGUiLCJfdXNlU3RhdGU5IiwiX3VzZVN0YXRlMTAiLCJtYXRlcmllbFBvaW50ZSIsInNldE1hdGVyaWVsUG9pbnRlIiwiX3VzZVN0YXRlMTEiLCJfdXNlU3RhdGUxMiIsInBlcnNvbm5lbFBvaW50ZSIsInNldFBlcnNvbm5lbFBvaW50ZSIsIl91c2VTdGF0ZTEzIiwiX3VzZVN0YXRlMTQiLCJzZWxlY3RlZEl0ZW0iLCJzZXRTZWxlY3RlZEl0ZW0iLCJfdXNlU3RhdGUxNSIsIl91c2VTdGF0ZTE2IiwiaXRlbUxhYmVsIiwic2V0SXRlbUxhYmVsIiwiX3VzZVN0YXRlMTciLCJfdXNlU3RhdGUxOCIsInRhYkFycmF5Iiwic2V0VGFiQXJyYXkiLCJfdXNlU3RhdGUxOSIsIl91c2VTdGF0ZTIwIiwidG90YWxNYXRlcmlhdXgiLCJzZXRUb3RhbE1hdGVyaWF1eCIsIl91c2VTdGF0ZTIxIiwiX3VzZVN0YXRlMjIiLCJ0b3RhbE1hdGVyaWVscyIsInNldFRvdGFsTWF0ZXJpZWxzIiwiX3VzZVN0YXRlMjMiLCJfdXNlU3RhdGUyNCIsInRvdGFsUGVyc29ubmVscyIsInNldFRvdGFsUGVyc29ubmVscyIsImxvYWREYXRhIiwic2F2ZUl0ZW0iLCJ1cmwiLCJjb25jYXQiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImxpYmVsbGUiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsIl90b0NvbnN1bWFibGVBcnJheSIsImlkIiwibGFiZWwiLCJzdWNjZXNzIiwic2hvd01vZGFsQWRkIiwidHlwZSIsIm1hcCIsIml0ZW0iLCJoYW5kbGVNYXRpZXJlQ2hhbmdlIiwibWF0ZXJpZXJlUG9pbnRlIiwidW5pdGUiLCJxdWFudGl0ZSIsInByaXhVbml0YWlyZSIsImZpbmQiLCJlcnJvciIsImhhbmRsZVF0ZUNoYW5nZSIsInBhcnNlRmxvYXQiLCJtb250YW50IiwicmVkdWNlIiwiYSIsImIiLCJoYW5kbGVQcml4VW5pdGFpcmVDaGFuZ2UiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJwb3NpdGlvbiIsImF1dG9DbG9zZSIsInRoZW1lIiwiY2xhc3NOYW1lIiwiaHRtbEZvciIsIm9uQ2hhbmdlIiwib3B0aW9ucyIsInN0eWxlIiwid2lkdGgiLCJsZW5ndGgiLCJpbmRleCIsImV2ZW50IiwidGFyZ2V0IiwiY29sU3BhbiIsIm9uQ2xpY2siLCJ0YWJJbmRleCIsInBsYWNlaG9sZGVyIiwiZSIsInJlYWN0Q29udHJvbGxlcnMiLCJpbXBvcnRBbGxSZWFjdENvbXBvbmVudHMiLCJyIiwia2V5cyIsImZvckVhY2giLCJ3aW5kb3ciLCJyZXNvbHZlUmVhY3RDb21wb25lbnQiLCJuYW1lIiwiY29tcG9uZW50IiwicG9zc2libGVWYWx1ZXMiLCJPYmplY3QiLCJyZXBsYWNlIiwiRXJyb3IiLCJqb2luIiwicmVxdWlyZSQkMCIsImNyZWF0ZVJvb3QiLCJtIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwiaHlkcmF0ZVJvb3QiLCJpIiwiX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQiLCJjIiwibyIsInVzaW5nQ2xpZW50RW50cnlQb2ludCIsImRlZmF1bHRfMSIsInByb3BzIiwicHJvcHNWYWx1ZSIsImRpc3BhdGNoRXZlbnQiLCJjb21wb25lbnRWYWx1ZSIsIl9yZW5kZXJSZWFjdEVsZW1lbnQiLCJjb21wb25lbnROYW1lIiwiZGlzY29ubmVjdCIsInJvb3QiLCJ1bm1vdW50IiwicmVhY3RFbGVtZW50IiwicmVuZGVyIiwicGF5bG9hZCIsImRpc3BhdGNoIiwiZGV0YWlsIiwicHJlZml4IiwidmFsdWVzIiwiU3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==