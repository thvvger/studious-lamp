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
// export const apiUrl = 'http://localhost:8001/api/';

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
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../constants */ "./assets/react/constants.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.esm.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.mjs");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
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
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_22__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    materiaux = _useState2[0],
    setMateriaux = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_22__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    materiels = _useState4[0],
    setMateriels = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_22__.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    personnels = _useState6[0],
    setPersonnels = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_22__.useState)([]),
    _useState8 = _slicedToArray(_useState7, 2),
    materiauPointe = _useState8[0],
    setMateriauPointe = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_22__.useState)([]),
    _useState10 = _slicedToArray(_useState9, 2),
    materielPointe = _useState10[0],
    setMaterielPointe = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_22__.useState)([]),
    _useState12 = _slicedToArray(_useState11, 2),
    personnelPointe = _useState12[0],
    setPersonnelPointe = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_22__.useState)(0),
    _useState14 = _slicedToArray(_useState13, 2),
    selectedItem = _useState14[0],
    setSelectedItem = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_22__.useState)(""),
    _useState16 = _slicedToArray(_useState15, 2),
    itemLabel = _useState16[0],
    setItemLabel = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_22__.useState)([]),
    _useState18 = _slicedToArray(_useState17, 2),
    tabArray = _useState18[0],
    setTabArray = _useState18[1];
  (0,react__WEBPACK_IMPORTED_MODULE_22__.useEffect)(function () {
    loadData();
  }, []);
  var saveItem = function saveItem() {
    var url = "";
    switch (selectedItem) {
      case "MATERIAUX":
        url = "".concat(_constants__WEBPACK_IMPORTED_MODULE_23__.apiUrl, "materiaus");
        break;
      case "MATERIELS":
        url = "".concat(_constants__WEBPACK_IMPORTED_MODULE_23__.apiUrl, "materiels");
        break;
      case "PERSONNELS":
        url = "".concat(_constants__WEBPACK_IMPORTED_MODULE_23__.apiUrl, "personnels");
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
      react_toastify__WEBPACK_IMPORTED_MODULE_24__.toast.success("Enregistrement effectué avec succès !");
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
    fetch("".concat(_constants__WEBPACK_IMPORTED_MODULE_23__.apiUrl, "materiaus"), {
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
    fetch("".concat(_constants__WEBPACK_IMPORTED_MODULE_23__.apiUrl, "materiels"), {
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
    fetch("".concat(_constants__WEBPACK_IMPORTED_MODULE_23__.apiUrl, "personnels"), {
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement((react__WEBPACK_IMPORTED_MODULE_22___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement(react_toastify__WEBPACK_IMPORTED_MODULE_24__.ToastContainer, {
    position: 'top-left',
    autoClose: 5000,
    theme: 'dark'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    className: "card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    className: "card-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("h5", null, "Elaboration du cout de production")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    className: "accordion",
    id: "accordionExample"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    className: "accordion-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("h2", {
    className: "accordion-header",
    id: "headingOne"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("button", {
    className: "accordion-button",
    type: "button",
    "data-bs-toggle": "collapse",
    "data-bs-target": "#collapseOne",
    "aria-expanded": "false",
    "aria-controls": "collapseOne"
  }, "Mat\xE9riaux")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    id: "collapseOne",
    className: "accordion-collapse collapse show",
    "aria-labelledby": "headingOne"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    className: "accordion-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    className: "row g-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    className: "col-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement(react_select__WEBPACK_IMPORTED_MODULE_26__["default"], {
    options: materiaux
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("table", {
    className: "styled-table mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("th", null, "Mat\xE9riaux"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("th", null, "Unit\xE9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("th", null, "Quantit\xE9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("th", null, "Prix Unitaire"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("th", null, "Actions"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("tbody", null, materiauPointe.length > 0 ? materiauPointe.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("tr", {
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("td", null, item.libelle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("td", null, item.unite), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("td", null, item.quantite), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("td", null, item.prixUnitaire), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("button", {
      className: "btn btn-sm btn-danger"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("i", {
      className: "fa fa-minus"
    }))));
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("td", {
    colSpan: "5"
  }, "Aucun mat\xE9riau point\xE9"))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    className: "accordion-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("h2", {
    className: "accordion-header",
    id: "headingTwo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("button", {
    className: "accordion-button",
    type: "button",
    "data-bs-toggle": "collapse",
    "data-bs-target": "#collapseTwo",
    "aria-expanded": "false",
    "aria-controls": "collapseTwo"
  }, "Mat\xE9riels")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    id: "collapseTwo",
    className: "accordion-collapse collapse show",
    "aria-labelledby": "headingTwo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    className: "accordion-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    className: "row g-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    className: "col-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement(react_select__WEBPACK_IMPORTED_MODULE_26__["default"], {
    options: materiels
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("table", {
    className: "styled-table mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("th", null, "Mat\xE9riels"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("th", null, "Unit\xE9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("th", null, "Quantit\xE9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("th", null, "Prix Unitaire"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("th", null, "Actions"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("tbody", null, materielPointe.length > 0 ? materielPointe.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("tr", {
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("td", null, item.libelle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("td", null, item.unite), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("td", null, item.quantite), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("td", null, item.prixUnitaire), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("button", {
      className: "btn btn-sm btn-danger"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("i", {
      className: "fa fa-minus"
    }))));
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("td", {
    colSpan: "5"
  }, "Aucun mat\xE9riel point\xE9"))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    className: "accordion-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("h2", {
    className: "accordion-header",
    id: "headingThree"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("button", {
    className: "accordion-button",
    type: "button",
    "data-bs-toggle": "collapse",
    "data-bs-target": "#collapseThree",
    "aria-expanded": "false",
    "aria-controls": "collapseThree"
  }, "Personnels")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    id: "collapseThree",
    className: "accordion-collapse collapse show",
    "aria-labelledby": "headingThree"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    className: "accordion-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    className: "row g-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    className: "col-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement(react_select__WEBPACK_IMPORTED_MODULE_26__["default"], {
    options: personnels
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("table", {
    className: "styled-table mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("th", null, "Personnels"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("th", null, "Unit\xE9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("th", null, "Quantit\xE9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("th", null, "Prix Unitaire"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("th", null, "Actions"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("tbody", null, personnelPointe.length > 0 ? personnelPointe.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("tr", {
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("td", null, item.libelle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("td", null, item.unite), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("td", null, item.quantite), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("td", null, item.prixUnitaire), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("button", {
      className: "btn btn-sm btn-danger"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("i", {
      className: "fa fa-minus"
    }))));
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("td", {
    colSpan: "5"
  }, "Aucun personnel point\xE9"))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    className: "d-flex justify-content-center mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("button", {
    className: "btn btn-success"
  }, "Enregistrer le pointage")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    className: "card-footer d-flex flex-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("button", {
    className: "btn btn-info"
  }, "Liste des pointages"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("button", {
    className: "btn ms-1 btn-warning"
  }, "Consulter un pointage"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    className: "ms-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("button", {
    className: "btn btn-primary",
    "data-bs-toggle": "modal",
    "data-bs-target": "#staticBackdrop",
    onClick: function onClick() {
      showModalAdd("MATERIAUX");
    }
  }, "Ajouter mat\xE9riau"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("button", {
    className: "btn btn-success ms-1",
    "data-bs-toggle": "modal",
    "data-bs-target": "#staticBackdrop",
    onClick: function onClick() {
      showModalAdd("MATERIELS");
    }
  }, "Ajouter mat\xE9riel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("button", {
    className: "btn btn-dark ms-1",
    "data-bs-toggle": "modal",
    "data-bs-target": "#staticBackdrop",
    onClick: function onClick() {
      showModalAdd("PERSONNELS");
    }
  }, "Ajouter mat\xE9riel"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    className: "modal fade",
    id: "staticBackdrop",
    "data-bs-backdrop": "static",
    "data-bs-keyboard": "false",
    tabIndex: "-1",
    "aria-labelledby": "staticBackdropLabel",
    "aria-hidden": "true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    className: "modal-dialog"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("h1", {
    className: "modal-title fs-5",
    id: "staticBackdropLabel"
  }, " ", selectedItem, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("button", {
    type: "button",
    className: "btn-close",
    "data-bs-dismiss": "modal",
    "aria-label": "Close"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    className: "modal-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    className: "row g-1 d-flex align-items-end"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    className: "col-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("input", {
    type: "text",
    className: "form-control",
    value: itemLabel,
    placeholder: "Libellé " + selectedItem,
    onChange: function onChange(e) {
      return setItemLabel(e.target.value);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    className: "col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("button", {
    onClick: function onClick() {
      return saveItem();
    },
    type: "button",
    className: "btn btn-success"
  }, "Enregistrer"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("table", {
    className: "styled-table mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("th", null, "Libell\xE9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("th", {
    style: {
      width: "10%"
    }
  }, "Actions"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("tbody", null, tabArray.length > 0 ? tabArray.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("tr", {
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("td", null, item.label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("button", {
      className: "btn btn-sm btn-danger"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("i", {
      className: "fa fa-minus"
    }))));
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("td", {
    colSpan: "2"
  }, "Aucun \xE9l\xE9ment"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    className: "modal-footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("button", {
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_core-js_modules_es_ar-79c3fb"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LltqdF1zeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvIHN5bmMgXFwuKGolN0N0KXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9NYWluLmpzeCIsIndlYnBhY2s6Ly8vLi92ZW5kb3Ivc3ltZm9ueS91eC1yZWFjdC9hc3NldHMvZGlzdC9yZWdpc3Rlcl9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3ZlbmRvci9zeW1mb255L3V4LXJlYWN0L2Fzc2V0cy9kaXN0L3JlbmRlcl9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLmNzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vaGVsbG9fY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhIFxcXFwuW2p0XXN4PyRcIjsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vTWFpbi5qc3hcIjogXCIuL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9NYWluLmpzeFwiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSBcXFxcLihqJTdDdClzeD8kXCI7IiwiaW1wb3J0IGNvbnRyb2xsZXJfMCBmcm9tICdAc3ltZm9ueS91eC1yZWFjdC9kaXN0L3JlbmRlcl9jb250cm9sbGVyLmpzJztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgJ3N5bWZvbnktLXV4LXJlYWN0LS1yZWFjdCc6IGNvbnRyb2xsZXJfMCxcbn07IiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5cbi8qXG4gKiBUaGlzIGlzIGFuIGV4YW1wbGUgU3RpbXVsdXMgY29udHJvbGxlciFcbiAqXG4gKiBBbnkgZWxlbWVudCB3aXRoIGEgZGF0YS1jb250cm9sbGVyPVwiaGVsbG9cIiBhdHRyaWJ1dGUgd2lsbCBjYXVzZVxuICogdGhpcyBjb250cm9sbGVyIHRvIGJlIGV4ZWN1dGVkLiBUaGUgbmFtZSBcImhlbGxvXCIgY29tZXMgZnJvbSB0aGUgZmlsZW5hbWU6XG4gKiBoZWxsb19jb250cm9sbGVyLmpzIC0+IFwiaGVsbG9cIlxuICpcbiAqIERlbGV0ZSB0aGlzIGZpbGUgb3IgYWRhcHQgaXQgZm9yIHlvdXIgdXNlIVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9ICdIZWxsbyBTdGltdWx1cyEgRWRpdCBtZSBpbiBhc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyc7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgcmVnaXN0ZXJSZWFjdENvbnRyb2xsZXJDb21wb25lbnRzIH0gZnJvbSAnQHN5bWZvbnkvdXgtcmVhY3QnO1xuaW1wb3J0ICcuL2Jvb3RzdHJhcC5qcyc7XG4vKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXG4gKi9cblxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxuaW1wb3J0ICcuL3N0eWxlcy9hcHAuY3NzJztcblxucmVnaXN0ZXJSZWFjdENvbnRyb2xsZXJDb21wb25lbnRzKHJlcXVpcmUuY29udGV4dCgnLi9yZWFjdC9jb250cm9sbGVycycsIHRydWUsIC9cXC4oanx0KXN4PyQvKSk7IiwiaW1wb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9IGZyb20gJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZSc7XG5cbi8vIFJlZ2lzdGVycyBTdGltdWx1cyBjb250cm9sbGVycyBmcm9tIGNvbnRyb2xsZXJzLmpzb24gYW5kIGluIHRoZSBjb250cm9sbGVycy8gZGlyZWN0b3J5XG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXG4gICAgJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyIS4vY29udHJvbGxlcnMnLFxuICAgIHRydWUsXG4gICAgL1xcLltqdF1zeD8kL1xuKSk7XG4vLyByZWdpc3RlciBhbnkgY3VzdG9tLCAzcmQgcGFydHkgY29udHJvbGxlcnMgaGVyZVxuLy8gYXBwLnJlZ2lzdGVyKCdzb21lX2NvbnRyb2xsZXJfbmFtZScsIFNvbWVJbXBvcnRlZENvbnRyb2xsZXIpO1xuIiwiLy8gZXhwb3J0IGNvbnN0IGFwaVVybCA9ICdodHRwOi8vbG9jYWxob3N0OjgwMDEvYXBpLyc7XG5cbmV4cG9ydCBjb25zdCBhcGlVcmwgPSAnaHR0cDovL3Rlc3Qud2l0Yjc5MDQub2Rucy5mci9hcGkvJztcbiIsImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7YXBpVXJsfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgU2VsZWN0IGZyb20gJ3JlYWN0LXNlbGVjdCc7XG5pbXBvcnQge1RvYXN0Q29udGFpbmVyLCB0b2FzdH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xuXG5pbXBvcnQgJ3JlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3MnO1xuXG5cbmNvbnN0IE1haW4gPSAoKSA9PiB7XG4gICAgY29uc3QgW21hdGVyaWF1eCwgc2V0TWF0ZXJpYXV4XSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbbWF0ZXJpZWxzLCBzZXRNYXRlcmllbHNdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFtwZXJzb25uZWxzLCBzZXRQZXJzb25uZWxzXSA9IHVzZVN0YXRlKFtdKTtcblxuICAgIGNvbnN0IFttYXRlcmlhdVBvaW50ZSwgc2V0TWF0ZXJpYXVQb2ludGVdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFttYXRlcmllbFBvaW50ZSwgc2V0TWF0ZXJpZWxQb2ludGVdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFtwZXJzb25uZWxQb2ludGUsIHNldFBlcnNvbm5lbFBvaW50ZV0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgICBjb25zdCBbc2VsZWN0ZWRJdGVtLCBzZXRTZWxlY3RlZEl0ZW1dID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW2l0ZW1MYWJlbCwgc2V0SXRlbUxhYmVsXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gICAgY29uc3QgW3RhYkFycmF5LCBzZXRUYWJBcnJheV0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBsb2FkRGF0YSgpO1xuICAgIH0sIFtdKTtcblxuICAgIGNvbnN0IHNhdmVJdGVtID0gKCkgPT4ge1xuICAgICAgICBsZXQgdXJsID0gXCJcIjtcblxuICAgICAgICBzd2l0Y2ggKHNlbGVjdGVkSXRlbSkge1xuICAgICAgICAgICAgY2FzZSBcIk1BVEVSSUFVWFwiOlxuICAgICAgICAgICAgICAgIHVybCA9IGAke2FwaVVybH1tYXRlcmlhdXNgO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIk1BVEVSSUVMU1wiOlxuICAgICAgICAgICAgICAgIHVybCA9IGAke2FwaVVybH1tYXRlcmllbHNgO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIlBFUlNPTk5FTFNcIjpcbiAgICAgICAgICAgICAgICB1cmwgPSBgJHthcGlVcmx9cGVyc29ubmVsc2A7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgZmV0Y2godXJsLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIGxpYmVsbGU6IGl0ZW1MYWJlbFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBzZXRJdGVtTGFiZWwoXCJcIik7XG5cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHNlbGVjdGVkSXRlbSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiTUFURVJJQVVYXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRNYXRlcmlhdXgoWy4uLm1hdGVyaWF1eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBkYXRhLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBkYXRhLmxpYmVsbGVcbiAgICAgICAgICAgICAgICAgICAgICAgIH1dKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGFiQXJyYXkoWy4uLm1hdGVyaWF1eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBkYXRhLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBkYXRhLmxpYmVsbGVcbiAgICAgICAgICAgICAgICAgICAgICAgIH1dKVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIk1BVEVSSUVMU1wiOlxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0TWF0ZXJpZWxzKFsuLi5tYXRlcmllbHMsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZGF0YS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogZGF0YS5saWJlbGxlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGFiQXJyYXkoWy4uLm1hdGVyaWVscywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBkYXRhLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBkYXRhLmxpYmVsbGVcbiAgICAgICAgICAgICAgICAgICAgICAgIH1dKVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIlBFUlNPTk5FTFNcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFBlcnNvbm5lbHMoWy4uLnBlcnNvbm5lbHMsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZGF0YS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogZGF0YS5saWJlbGxlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGFiQXJyYXkoWy4uLnBlcnNvbm5lbHMsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZGF0YS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogZGF0YS5saWJlbGxlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0b2FzdC5zdWNjZXNzKFwiRW5yZWdpc3RyZW1lbnQgZWZmZWN0dcOpIGF2ZWMgc3VjY8OocyAhXCIpO1xuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBzaG93TW9kYWxBZGQgPSAodHlwZSkgPT4ge1xuICAgICAgICBzZXRTZWxlY3RlZEl0ZW0odHlwZSlcblxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJNQVRFUklBVVhcIjpcbiAgICAgICAgICAgICAgICBzZXRUYWJBcnJheShtYXRlcmlhdXgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIk1BVEVSSUVMU1wiOlxuICAgICAgICAgICAgICAgIHNldFRhYkFycmF5KG1hdGVyaWVscyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiUEVSU09OTkVMU1wiOlxuICAgICAgICAgICAgICAgIHNldFRhYkFycmF5KHBlcnNvbm5lbHMpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBzZXRUYWJBcnJheShbXSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBsb2FkRGF0YSA9ICgpID0+IHtcbiAgICAgICAgZmV0Y2goYCR7YXBpVXJsfW1hdGVyaWF1c2AsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgLy9tYXAgZGF0YSB0byB2YWx1ZSBhbmQgbGFiZWxcbiAgICAgICAgICAgICAgICBzZXRNYXRlcmlhdXgoZGF0YS5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogaXRlbS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBpdGVtLmxpYmVsbGVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgfSlcblxuXG4gICAgICAgIGZldGNoKGAke2FwaVVybH1tYXRlcmllbHNgLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIC8vbWFwIGRhdGEgdG8gdmFsdWUgYW5kIGxhYmVsXG4gICAgICAgICAgICAgICAgc2V0TWF0ZXJpZWxzKGRhdGEubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGl0ZW0uaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogaXRlbS5saWJlbGxlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgZmV0Y2goYCR7YXBpVXJsfXBlcnNvbm5lbHNgLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIC8vbWFwIGRhdGEgdG8gdmFsdWUgYW5kIGxhYmVsXG4gICAgICAgICAgICAgICAgc2V0UGVyc29ubmVscyhkYXRhLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBpdGVtLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGl0ZW0ubGliZWxsZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiA8PlxuICAgICAgICA8VG9hc3RDb250YWluZXIgcG9zaXRpb249eyd0b3AtbGVmdCd9IGF1dG9DbG9zZT17NTAwMH0gdGhlbWU9eydkYXJrJ30vPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgIDxoNT5FbGFib3JhdGlvbiBkdSBjb3V0IGRlIHByb2R1Y3Rpb248L2g1PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3JkaW9uXCIgaWQ9XCJhY2NvcmRpb25FeGFtcGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3JkaW9uLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJhY2NvcmRpb24taGVhZGVyXCIgaWQ9XCJoZWFkaW5nT25lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJhY2NvcmRpb24tYnV0dG9uXCIgdHlwZT1cImJ1dHRvblwiIGRhdGEtYnMtdG9nZ2xlPVwiY29sbGFwc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1icy10YXJnZXQ9XCIjY29sbGFwc2VPbmVcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiBhcmlhLWNvbnRyb2xzPVwiY29sbGFwc2VPbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWF0w6lyaWF1eFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImNvbGxhcHNlT25lXCIgY2xhc3NOYW1lPVwiYWNjb3JkaW9uLWNvbGxhcHNlIGNvbGxhcHNlIHNob3dcIiBhcmlhLWxhYmVsbGVkYnk9XCJoZWFkaW5nT25lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvcmRpb24tYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBnLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0IG9wdGlvbnM9e21hdGVyaWF1eH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJzdHlsZWQtdGFibGUgbXQtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5NYXTDqXJpYXV4PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+VW5pdMOpPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+UXVhbnRpdMOpPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+UHJpeCBVbml0YWlyZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkFjdGlvbnM8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0ZXJpYXVQb2ludGUubGVuZ3RoID4gMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IG1hdGVyaWF1UG9pbnRlLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2l0ZW0ubGliZWxsZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2l0ZW0udW5pdGV9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntpdGVtLnF1YW50aXRlfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57aXRlbS5wcml4VW5pdGFpcmV9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXNtIGJ0bi1kYW5nZXJcIj48aVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZhIGZhLW1pbnVzXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj1cIjVcIj5BdWN1biBtYXTDqXJpYXUgcG9pbnTDqTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY29yZGlvbi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiYWNjb3JkaW9uLWhlYWRlclwiIGlkPVwiaGVhZGluZ1R3b1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYWNjb3JkaW9uLWJ1dHRvblwiIHR5cGU9XCJidXR0b25cIiBkYXRhLWJzLXRvZ2dsZT1cImNvbGxhcHNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYnMtdGFyZ2V0PVwiI2NvbGxhcHNlVHdvXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgYXJpYS1jb250cm9scz1cImNvbGxhcHNlVHdvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hdMOpcmllbHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiY29sbGFwc2VUd29cIiBjbGFzc05hbWU9XCJhY2NvcmRpb24tY29sbGFwc2UgY29sbGFwc2Ugc2hvd1wiIGFyaWEtbGFiZWxsZWRieT1cImhlYWRpbmdUd29cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY29yZGlvbi1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGctMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3Qgb3B0aW9ucz17bWF0ZXJpZWxzfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInN0eWxlZC10YWJsZSBtdC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk1hdMOpcmllbHM8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Vbml0w6k8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5RdWFudGl0w6k8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Qcml4IFVuaXRhaXJlPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+QWN0aW9uczwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRlcmllbFBvaW50ZS5sZW5ndGggPiAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gbWF0ZXJpZWxQb2ludGUubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57aXRlbS5saWJlbGxlfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57aXRlbS51bml0ZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2l0ZW0ucXVhbnRpdGV9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntpdGVtLnByaXhVbml0YWlyZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc20gYnRuLWRhbmdlclwiPjxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmEgZmEtbWludXNcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPVwiNVwiPkF1Y3VuIG1hdMOpcmllbCBwb2ludMOpPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3JkaW9uLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJhY2NvcmRpb24taGVhZGVyXCIgaWQ9XCJoZWFkaW5nVGhyZWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImFjY29yZGlvbi1idXR0b25cIiB0eXBlPVwiYnV0dG9uXCIgZGF0YS1icy10b2dnbGU9XCJjb2xsYXBzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWJzLXRhcmdldD1cIiNjb2xsYXBzZVRocmVlXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgYXJpYS1jb250cm9scz1cImNvbGxhcHNlVGhyZWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGVyc29ubmVsc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJjb2xsYXBzZVRocmVlXCIgY2xhc3NOYW1lPVwiYWNjb3JkaW9uLWNvbGxhcHNlIGNvbGxhcHNlIHNob3dcIiBhcmlhLWxhYmVsbGVkYnk9XCJoZWFkaW5nVGhyZWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY29yZGlvbi1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGctMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3Qgb3B0aW9ucz17cGVyc29ubmVsc30vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJzdHlsZWQtdGFibGUgbXQtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5QZXJzb25uZWxzPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+VW5pdMOpPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+UXVhbnRpdMOpPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+UHJpeCBVbml0YWlyZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkFjdGlvbnM8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVyc29ubmVsUG9pbnRlLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBwZXJzb25uZWxQb2ludGUubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57aXRlbS5saWJlbGxlfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57aXRlbS51bml0ZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2l0ZW0ucXVhbnRpdGV9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntpdGVtLnByaXhVbml0YWlyZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc20gYnRuLWRhbmdlclwiPjxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmEgZmEtbWludXNcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPVwiNVwiPkF1Y3VuIHBlcnNvbm5lbCBwb2ludMOpPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBtdC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2Vzc1wiPkVucmVnaXN0cmVyIGxlIHBvaW50YWdlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZm9vdGVyIGQtZmxleCBmbGV4LXJvd1wiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvXCI+TGlzdGUgZGVzIHBvaW50YWdlczwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIG1zLTEgYnRuLXdhcm5pbmdcIj5Db25zdWx0ZXIgdW4gcG9pbnRhZ2U8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXMtYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1icy10b2dnbGU9XCJtb2RhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1icy10YXJnZXQ9XCIjc3RhdGljQmFja2Ryb3BcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd01vZGFsQWRkKFwiTUFURVJJQVVYXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICBBam91dGVyIG1hdMOpcmlhdVxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2VzcyBtcy0xXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWJzLXRvZ2dsZT1cIm1vZGFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWJzLXRhcmdldD1cIiNzdGF0aWNCYWNrZHJvcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93TW9kYWxBZGQoXCJNQVRFUklFTFNcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIEFqb3V0ZXIgbWF0w6lyaWVsXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYXJrIG1zLTFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYnMtdG9nZ2xlPVwibW9kYWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYnMtdGFyZ2V0PVwiI3N0YXRpY0JhY2tkcm9wXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dNb2RhbEFkZChcIlBFUlNPTk5FTFNcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIEFqb3V0ZXIgbWF0w6lyaWVsXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwgZmFkZVwiIGlkPVwic3RhdGljQmFja2Ryb3BcIiBkYXRhLWJzLWJhY2tkcm9wPVwic3RhdGljXCIgZGF0YS1icy1rZXlib2FyZD1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICAgdGFiSW5kZXg9XCItMVwiIGFyaWEtbGFiZWxsZWRieT1cInN0YXRpY0JhY2tkcm9wTGFiZWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlIGZzLTVcIiBpZD1cInN0YXRpY0JhY2tkcm9wTGFiZWxcIj4ge3NlbGVjdGVkSXRlbX0gPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4tY2xvc2VcIiBkYXRhLWJzLWRpc21pc3M9XCJtb2RhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiQ2xvc2VcIj48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgZy0xIGQtZmxleCBhbGlnbi1pdGVtcy1lbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpdGVtTGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1wiTGliZWxsw6kgXCIgKyBzZWxlY3RlZEl0ZW19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRJdGVtTGFiZWwoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNhdmVJdGVtKCl9IHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIj5FbnJlZ2lzdHJlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInN0eWxlZC10YWJsZSBtdC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkxpYmVsbMOpPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwJVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5BY3Rpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYkFycmF5Lmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRhYkFycmF5Lm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2l0ZW0ubGFiZWx9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbSBidG4tZGFuZ2VyXCI+PGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZhIGZhLW1pbnVzXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPVwiMlwiPkF1Y3VuIMOpbMOpbWVudDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiIGRhdGEtYnMtZGlzbWlzcz1cIm1vZGFsXCI+RmVybWVyPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC8+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluO1xuIiwiZnVuY3Rpb24gcmVnaXN0ZXJSZWFjdENvbnRyb2xsZXJDb21wb25lbnRzKGNvbnRleHQpIHtcbiAgICBjb25zdCByZWFjdENvbnRyb2xsZXJzID0ge307XG4gICAgY29uc3QgaW1wb3J0QWxsUmVhY3RDb21wb25lbnRzID0gKHIpID0+IHtcbiAgICAgICAgci5rZXlzKCkuZm9yRWFjaCgoa2V5KSA9PiAocmVhY3RDb250cm9sbGVyc1trZXldID0gcihrZXkpLmRlZmF1bHQpKTtcbiAgICB9O1xuICAgIGltcG9ydEFsbFJlYWN0Q29tcG9uZW50cyhjb250ZXh0KTtcbiAgICB3aW5kb3cucmVzb2x2ZVJlYWN0Q29tcG9uZW50ID0gKG5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgY29tcG9uZW50ID0gcmVhY3RDb250cm9sbGVyc1tgLi8ke25hbWV9LmpzeGBdIHx8IHJlYWN0Q29udHJvbGxlcnNbYC4vJHtuYW1lfS50c3hgXTtcbiAgICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBjb25zdCBwb3NzaWJsZVZhbHVlcyA9IE9iamVjdC5rZXlzKHJlYWN0Q29udHJvbGxlcnMpLm1hcCgoa2V5KSA9PiBrZXkucmVwbGFjZSgnLi8nLCAnJykucmVwbGFjZSgnLmpzeCcsICcnKS5yZXBsYWNlKCcudHN4JywgJycpKTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgUmVhY3QgY29udHJvbGxlciBcIiR7bmFtZX1cIiBkb2VzIG5vdCBleGlzdC4gUG9zc2libGUgdmFsdWVzOiAke3Bvc3NpYmxlVmFsdWVzLmpvaW4oJywgJyl9YCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgICB9O1xufVxuXG5leHBvcnQgeyByZWdpc3RlclJlYWN0Q29udHJvbGxlckNvbXBvbmVudHMgfTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcmVxdWlyZSQkMCBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5cbnZhciBjcmVhdGVSb290O1xuXG52YXIgbSA9IHJlcXVpcmUkJDA7XG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBjcmVhdGVSb290ID0gbS5jcmVhdGVSb290O1xuICBtLmh5ZHJhdGVSb290O1xufSBlbHNlIHtcbiAgdmFyIGkgPSBtLl9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEO1xuICBjcmVhdGVSb290ID0gZnVuY3Rpb24oYywgbykge1xuICAgIGkudXNpbmdDbGllbnRFbnRyeVBvaW50ID0gdHJ1ZTtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIG0uY3JlYXRlUm9vdChjLCBvKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaS51c2luZ0NsaWVudEVudHJ5UG9pbnQgPSBmYWxzZTtcbiAgICB9XG4gIH07XG59XG5cbmNsYXNzIGRlZmF1bHRfMSBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIGNvbnN0IHByb3BzID0gdGhpcy5wcm9wc1ZhbHVlID8gdGhpcy5wcm9wc1ZhbHVlIDogbnVsbDtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdjb25uZWN0JywgeyBjb21wb25lbnQ6IHRoaXMuY29tcG9uZW50VmFsdWUsIHByb3BzOiBwcm9wcyB9KTtcbiAgICAgICAgaWYgKCF0aGlzLmNvbXBvbmVudFZhbHVlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGNvbXBvbmVudCBzcGVjaWZpZWQuJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29tcG9uZW50ID0gd2luZG93LnJlc29sdmVSZWFjdENvbXBvbmVudCh0aGlzLmNvbXBvbmVudFZhbHVlKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyUmVhY3RFbGVtZW50KFJlYWN0LmNyZWF0ZUVsZW1lbnQoY29tcG9uZW50LCBwcm9wcywgbnVsbCkpO1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ21vdW50Jywge1xuICAgICAgICAgICAgY29tcG9uZW50TmFtZTogdGhpcy5jb21wb25lbnRWYWx1ZSxcbiAgICAgICAgICAgIGNvbXBvbmVudDogY29tcG9uZW50LFxuICAgICAgICAgICAgcHJvcHM6IHByb3BzLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZGlzY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnJvb3QudW5tb3VudCgpO1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ3VubW91bnQnLCB7XG4gICAgICAgICAgICBjb21wb25lbnQ6IHRoaXMuY29tcG9uZW50VmFsdWUsXG4gICAgICAgICAgICBwcm9wczogdGhpcy5wcm9wc1ZhbHVlID8gdGhpcy5wcm9wc1ZhbHVlIDogbnVsbCxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9yZW5kZXJSZWFjdEVsZW1lbnQocmVhY3RFbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmVsZW1lbnQ7XG4gICAgICAgIGlmICghZWxlbWVudC5yb290KSB7XG4gICAgICAgICAgICBlbGVtZW50LnJvb3QgPSBjcmVhdGVSb290KHRoaXMuZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudC5yb290LnJlbmRlcihyZWFjdEVsZW1lbnQpO1xuICAgIH1cbiAgICBkaXNwYXRjaEV2ZW50KG5hbWUsIHBheWxvYWQpIHtcbiAgICAgICAgdGhpcy5kaXNwYXRjaChuYW1lLCB7IGRldGFpbDogcGF5bG9hZCwgcHJlZml4OiAncmVhY3QnIH0pO1xuICAgIH1cbn1cbmRlZmF1bHRfMS52YWx1ZXMgPSB7XG4gICAgY29tcG9uZW50OiBTdHJpbmcsXG4gICAgcHJvcHM6IE9iamVjdCxcbn07XG5cbmV4cG9ydCB7IGRlZmF1bHRfMSBhcyBkZWZhdWx0IH07XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiQ29udHJvbGxlciIsIl9kZWZhdWx0IiwiX0NvbnRyb2xsZXIiLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJfY2xhc3NDYWxsQ2hlY2siLCJhcHBseSIsImFyZ3VtZW50cyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiY29ubmVjdCIsImVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImRlZmF1bHQiLCJyZWdpc3RlclJlYWN0Q29udHJvbGxlckNvbXBvbmVudHMiLCJyZXF1aXJlIiwiY29udGV4dCIsInN0YXJ0U3RpbXVsdXNBcHAiLCJhcHAiLCJhcGlVcmwiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiU2VsZWN0IiwiVG9hc3RDb250YWluZXIiLCJ0b2FzdCIsIk1haW4iLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJtYXRlcmlhdXgiLCJzZXRNYXRlcmlhdXgiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsIm1hdGVyaWVscyIsInNldE1hdGVyaWVscyIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2IiwicGVyc29ubmVscyIsInNldFBlcnNvbm5lbHMiLCJfdXNlU3RhdGU3IiwiX3VzZVN0YXRlOCIsIm1hdGVyaWF1UG9pbnRlIiwic2V0TWF0ZXJpYXVQb2ludGUiLCJfdXNlU3RhdGU5IiwiX3VzZVN0YXRlMTAiLCJtYXRlcmllbFBvaW50ZSIsInNldE1hdGVyaWVsUG9pbnRlIiwiX3VzZVN0YXRlMTEiLCJfdXNlU3RhdGUxMiIsInBlcnNvbm5lbFBvaW50ZSIsInNldFBlcnNvbm5lbFBvaW50ZSIsIl91c2VTdGF0ZTEzIiwiX3VzZVN0YXRlMTQiLCJzZWxlY3RlZEl0ZW0iLCJzZXRTZWxlY3RlZEl0ZW0iLCJfdXNlU3RhdGUxNSIsIl91c2VTdGF0ZTE2IiwiaXRlbUxhYmVsIiwic2V0SXRlbUxhYmVsIiwiX3VzZVN0YXRlMTciLCJfdXNlU3RhdGUxOCIsInRhYkFycmF5Iiwic2V0VGFiQXJyYXkiLCJsb2FkRGF0YSIsInNhdmVJdGVtIiwidXJsIiwiY29uY2F0IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJsaWJlbGxlIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJpZCIsImxhYmVsIiwic3VjY2VzcyIsInNob3dNb2RhbEFkZCIsInR5cGUiLCJtYXAiLCJpdGVtIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwicG9zaXRpb24iLCJhdXRvQ2xvc2UiLCJ0aGVtZSIsImNsYXNzTmFtZSIsIm9wdGlvbnMiLCJsZW5ndGgiLCJpbmRleCIsInVuaXRlIiwicXVhbnRpdGUiLCJwcml4VW5pdGFpcmUiLCJjb2xTcGFuIiwib25DbGljayIsInRhYkluZGV4IiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJzdHlsZSIsIndpZHRoIiwicmVhY3RDb250cm9sbGVycyIsImltcG9ydEFsbFJlYWN0Q29tcG9uZW50cyIsInIiLCJrZXlzIiwiZm9yRWFjaCIsIndpbmRvdyIsInJlc29sdmVSZWFjdENvbXBvbmVudCIsIm5hbWUiLCJjb21wb25lbnQiLCJwb3NzaWJsZVZhbHVlcyIsIk9iamVjdCIsInJlcGxhY2UiLCJFcnJvciIsImpvaW4iLCJyZXF1aXJlJCQwIiwiY3JlYXRlUm9vdCIsIm0iLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJoeWRyYXRlUm9vdCIsImkiLCJfX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRCIsImMiLCJvIiwidXNpbmdDbGllbnRFbnRyeVBvaW50IiwiZGVmYXVsdF8xIiwicHJvcHMiLCJwcm9wc1ZhbHVlIiwiZGlzcGF0Y2hFdmVudCIsImNvbXBvbmVudFZhbHVlIiwiX3JlbmRlclJlYWN0RWxlbWVudCIsImNvbXBvbmVudE5hbWUiLCJkaXNjb25uZWN0Iiwicm9vdCIsInVubW91bnQiLCJyZWFjdEVsZW1lbnQiLCJyZW5kZXIiLCJwYXlsb2FkIiwiZGlzcGF0Y2giLCJkZXRhaWwiLCJwcmVmaXgiLCJ2YWx1ZXMiLCJTdHJpbmciXSwic291cmNlUm9vdCI6IiJ9