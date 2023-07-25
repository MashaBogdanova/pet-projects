/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/styles.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/styles.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {


eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/play.svg */ \"./src/assets/images/play.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/replay.svg */ \"./src/assets/images/replay.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/flag.svg */ \"./src/assets/images/flag.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.button {\n  width: 55px;\n  height: 27px;\n  font-size: 0.8em;\n  color: rgba(103, 86, 140, 0.73);\n  border-radius: 0.8em;\n  cursor: pointer;\n}\n.button_primary {\n  background-color: rgba(136, 122, 168, 0.73);\n  border: none;\n}\n.button_primary:hover {\n  background-color: #9588b2;\n}\n.button_secondary {\n  background-color: transparent;\n  border: 2px solid rgba(136, 122, 168, 0.73);\n}\n.button_secondary:hover {\n  background-color: #9588b2;\n}\n.button_circle {\n  width: 27px;\n  height: 27px;\n  border-radius: 50%;\n}\n\n.form {\n  display: flex;\n  align-items: center;\n  gap: 1em;\n}\n\n.input {\n  width: 15em;\n  height: 2.3em;\n  padding: 1em;\n  font-size: 0.9em;\n  color: rgba(103, 86, 140, 0.73);\n  background-color: rgba(242, 200, 194, 0.45);\n  border: none;\n  border-radius: 5px;\n}\n.input_color {\n  width: 2em;\n  height: 2em;\n  margin: 1em;\n  cursor: pointer;\n}\n\n.garage__create-form {\n  display: flex;\n  align-items: center;\n  padding-bottom: 2em;\n}\n.garage__btns {\n  display: flex;\n  align-items: center;\n  gap: 1em;\n}\n.garage__cars {\n  display: flex;\n  flex-direction: column;\n  gap: 2em 0;\n}\n.garage__title {\n  display: flex;\n  width: 100%;\n  padding-bottom: 0.3em;\n}\n\n.car {\n  display: flex;\n  flex-direction: column;\n  gap: 1em;\n  padding: 0.3em;\n  border-bottom: dashed 2px rgb(245, 225, 224);\n}\n.car__info {\n  display: flex;\n  gap: 0.5em;\n  align-items: center;\n}\n.car__move {\n  display: flex;\n  justify-content: space-between;\n  width: 90vw;\n  padding: 0 1em;\n}\n.car__move-wrapper {\n  display: flex;\n  align-items: center;\n  gap: 1em;\n}\n.car__model {\n  font-size: 1.4em;\n  cursor: pointer;\n}\n.car__start-btn {\n  width: 15px;\n  height: 15px;\n  background-color: transparent;\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n  border: none;\n  background-size: 100%;\n  background-repeat: no-repeat;\n  background-position: center;\n  cursor: pointer;\n}\n.car__restart-btn {\n  width: 15px;\n  height: 15px;\n  background-color: transparent;\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n  border: none;\n  background-size: 100%;\n  background-repeat: no-repeat;\n  background-position: center;\n  cursor: pointer;\n}\n.car__icon {\n  width: 30px;\n  height: 30px;\n}\n.car__icon svg {\n  width: 30px;\n  height: 30px;\n}\n.car__icon_animated {\n  animation-name: race;\n  animation-timing-function: linear;\n  animation-fill-mode: both;\n}\n.car__flag {\n  display: flex;\n  justify-self: end;\n  align-self: end;\n  width: 15px;\n  height: 15px;\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});\n  background-size: 100%;\n  background-repeat: no-repeat;\n  background-position: center;\n  border: none;\n}\n\n.hidden {\n  display: none;\n}\n\n@keyframes race {\n  0% {\n    transform: translateX(0);\n  }\n  100% {\n    transform: translateX(85vw);\n  }\n}\n.nav {\n  display: flex;\n  justify-content: center;\n  gap: 1em;\n  padding: 1em 0 2em 0;\n}\n\n.win-table__cell {\n  width: 6em;\n}\n\n.pagination {\n  display: flex;\n  align-items: center;\n  gap: 1em;\n  padding: 2em 0 1em 0;\n}\n.pagination__buttons {\n  display: flex;\n  gap: 1em;\n}\n\nhtml, * {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  padding: 1em;\n  font-size: 12px;\n  background-color: #a999bd;\n  color: rgb(245, 225, 224);\n}\n\nh1 {\n  color: #f2c8c2;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/sass/styles.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/sass/styles.scss":
/*!******************************!*\
  !*** ./src/sass/styles.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/styles.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./src/sass/styles.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/api/addNewCar.ts":
/*!******************************!*\
  !*** ./src/api/addNewCar.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.addNewCar = void 0;\nfunction addNewCar(params) {\n    return __awaiter(this, void 0, void 0, function* () {\n        const url = `http://127.0.0.1:3000/garage`;\n        try {\n            const response = yield fetch(url, {\n                method: 'POST',\n                headers: {\n                    'Content-Type': 'application/json'\n                },\n                body: JSON.stringify(params)\n            });\n            return yield response.json();\n        }\n        catch (e) {\n            console.error(e);\n        }\n    });\n}\nexports.addNewCar = addNewCar;\n\n\n//# sourceURL=webpack:///./src/api/addNewCar.ts?");

/***/ }),

/***/ "./src/api/addWinnerData.ts":
/*!**********************************!*\
  !*** ./src/api/addWinnerData.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.addWinnerData = void 0;\nfunction addWinnerData(params) {\n    return __awaiter(this, void 0, void 0, function* () {\n        const url = `http://127.0.0.1:3000/winners`;\n        try {\n            const response = yield fetch(url, {\n                method: 'POST',\n                headers: {\n                    'Content-Type': 'application/json'\n                },\n                body: JSON.stringify(params)\n            });\n            return yield response.json();\n        }\n        catch (e) {\n            console.error(e);\n        }\n    });\n}\nexports.addWinnerData = addWinnerData;\n\n\n//# sourceURL=webpack:///./src/api/addWinnerData.ts?");

/***/ }),

/***/ "./src/api/fetchCarEngine.ts":
/*!***********************************!*\
  !*** ./src/api/fetchCarEngine.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.fetchCarEngine = void 0;\nfunction fetchCarEngine(params) {\n    return __awaiter(this, void 0, void 0, function* () {\n        if (Number.isInteger(params.id)) {\n            const queryParams = new URLSearchParams({\n                id: String(params.id),\n                status: params.status,\n            });\n            const url = `http://127.0.0.1:3000/engine?${queryParams}`;\n            try {\n                const response = yield fetch(url, {\n                    method: 'PATCH',\n                    headers: {\n                        'Content-Type': 'application/json'\n                    }\n                });\n                if (!response.ok && response.status === 500) {\n                    return 0;\n                }\n                const data = yield response.json();\n                const { velocity, distance } = data;\n                return Math.round((distance / velocity) / 1000);\n            }\n            catch (e) {\n                console.log(e);\n            }\n        }\n    });\n}\nexports.fetchCarEngine = fetchCarEngine;\n\n\n//# sourceURL=webpack:///./src/api/fetchCarEngine.ts?");

/***/ }),

/***/ "./src/api/fetchData.ts":
/*!******************************!*\
  !*** ./src/api/fetchData.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.fetchData = void 0;\nfunction fetchData(pageName, pageNumber, limit) {\n    return __awaiter(this, void 0, void 0, function* () {\n        const url = `http://127.0.0.1:3000/${pageName}?_page=${pageNumber}&_limit=${limit}`;\n        try {\n            return yield fetch(url);\n        }\n        catch (e) {\n            console.error(e);\n        }\n    });\n}\nexports.fetchData = fetchData;\n\n\n//# sourceURL=webpack:///./src/api/fetchData.ts?");

/***/ }),

/***/ "./src/api/fetchWinner.ts":
/*!********************************!*\
  !*** ./src/api/fetchWinner.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.fetchWinner = void 0;\nfunction fetchWinner(id) {\n    return __awaiter(this, void 0, void 0, function* () {\n        const url = `http://127.0.0.1:3000/winners/${id}`;\n        try {\n            const response = yield fetch(url);\n            return yield response;\n        }\n        catch (e) {\n            console.error(e);\n        }\n    });\n}\nexports.fetchWinner = fetchWinner;\n\n\n//# sourceURL=webpack:///./src/api/fetchWinner.ts?");

/***/ }),

/***/ "./src/api/removeCarData.ts":
/*!**********************************!*\
  !*** ./src/api/removeCarData.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.removeCarData = void 0;\nfunction removeCarData(page, id) {\n    return __awaiter(this, void 0, void 0, function* () {\n        const url = `http://127.0.0.1:3000/${page}/${id}`;\n        try {\n            yield fetch(url, {\n                method: 'DELETE'\n            });\n        }\n        catch (e) {\n            console.error(e);\n        }\n    });\n}\nexports.removeCarData = removeCarData;\n\n\n//# sourceURL=webpack:///./src/api/removeCarData.ts?");

/***/ }),

/***/ "./src/api/updateCar.ts":
/*!******************************!*\
  !*** ./src/api/updateCar.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.updateCar = void 0;\nfunction updateCar(params) {\n    return __awaiter(this, void 0, void 0, function* () {\n        if (Number.isInteger(params.id)) {\n            const url = `http://127.0.0.1:3000/garage/${params.id}`;\n            try {\n                const response = yield fetch(url, {\n                    method: 'PUT',\n                    headers: {\n                        'Content-Type': 'application/json'\n                    },\n                    body: JSON.stringify(params)\n                });\n                return yield response.json();\n            }\n            catch (e) {\n                console.error(e);\n            }\n        }\n    });\n}\nexports.updateCar = updateCar;\n\n\n//# sourceURL=webpack:///./src/api/updateCar.ts?");

/***/ }),

/***/ "./src/api/updateWinner.ts":
/*!*********************************!*\
  !*** ./src/api/updateWinner.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.updateWinnerData = void 0;\nfunction updateWinnerData(params, id) {\n    return __awaiter(this, void 0, void 0, function* () {\n        const url = `http://127.0.0.1:3000/winners/${id}`;\n        try {\n            const response = yield fetch(url, {\n                method: 'PUT',\n                headers: {\n                    'Content-Type': 'application/json'\n                },\n                body: JSON.stringify(params)\n            });\n            return yield response.json();\n        }\n        catch (e) {\n            console.error(e);\n        }\n    });\n}\nexports.updateWinnerData = updateWinnerData;\n\n\n//# sourceURL=webpack:///./src/api/updateWinner.ts?");

/***/ }),

/***/ "./src/assets/images/carSVG.ts":
/*!*************************************!*\
  !*** ./src/assets/images/carSVG.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.carSVG = void 0;\nexports.carSVG = '<?xml version=\"1.0\" encoding=\"utf-8\"?>\\n' +\n    '<!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\\n' +\n    '<svg width=\"800px\" height=\"800px\" viewBox=\"0 0 1024 1024\" class=\"icon\"  version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M766.976 508.736c80.576 0 152.448 32.128 199.232 82.176\" fill=\"#AEBCC3\" /><path d=\"M64.704 684.992c10.816 19.2 32.064 32.192 56.576 32.192h784.64c35.84 0 64.832-27.648 64.832-61.76v-17.408h-36.608a15.744 15.744 0 0 1-16.064-15.296V550.912a277.568 277.568 0 0 0-150.144-44.16h1.6l-55.04-0.256c-53.632-115.2-157.504-210.752-294.208-210.752-136.512 0-251.008 89.728-282.176 210.688h-16.832c-35.456 0-56.128 27.392-56.128 61.184\" fill=\"#E8447A\" /><path d=\"M64.704 654.464h13.76a39.168 39.168 0 0 0 40.064-38.272v-17.6c0-21.12-17.92-38.208-40.064-38.208h-13.376\" fill=\"#F5BB1D\" /><path d=\"M160 684.992a101.632 96.832 0 1 0 203.264 0 101.632 96.832 0 1 0-203.264 0Z\" fill=\"#455963\" /><path d=\"M218.88 684.992a42.752 40.768 0 1 0 85.504 0 42.752 40.768 0 1 0-85.504 0Z\" fill=\"#AEBCC3\" /><path d=\"M652.032 684.992a101.568 96.832 0 1 0 203.136 0 101.568 96.832 0 1 0-203.136 0Z\" fill=\"#455963\" /><path d=\"M710.912 684.992a42.752 40.768 0 1 0 85.504 0 42.752 40.768 0 1 0-85.504 0Z\" fill=\"#AEBCC3\" /><path d=\"M966.272 591.104v-0.192a257.92 257.92 0 0 0-48.192-40V622.72c0 8.448 7.232 15.296 16.064 15.296h36.608v-42.304l-4.48-4.608z\" fill=\"#F5BB1D\" /><path d=\"M405.568 335.616c-104.896 6.336-191.296 76.8-216.64 170.816h216.64V335.616zM445.696 506.432h216.64c-41.216-86.848-117.12-159.616-216.64-170.048v170.048z\" fill=\"#631536\" /></svg>';\n\n\n//# sourceURL=webpack:///./src/assets/images/carSVG.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__webpack_require__(/*! ./sass/styles.scss */ \"./src/sass/styles.scss\");\nconst Main_1 = __webpack_require__(/*! ./modules/Main */ \"./src/modules/Main.ts\");\nfunction initialize() {\n    new Main_1.Main();\n}\ninitialize();\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/modules/Car.ts":
/*!****************************!*\
  !*** ./src/modules/Car.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Car = exports.carStatus = void 0;\nconst createElem_1 = __webpack_require__(/*! ../utils/createElem */ \"./src/utils/createElem.ts\");\nconst removeCarData_1 = __webpack_require__(/*! ../api/removeCarData */ \"./src/api/removeCarData.ts\");\nconst createCarForm_1 = __webpack_require__(/*! ../utils/createCarForm */ \"./src/utils/createCarForm.ts\");\nconst sendFormData_1 = __webpack_require__(/*! ../utils/sendFormData */ \"./src/utils/sendFormData.ts\");\nconst updateCar_1 = __webpack_require__(/*! ../api/updateCar */ \"./src/api/updateCar.ts\");\nconst fetchCarEngine_1 = __webpack_require__(/*! ../api/fetchCarEngine */ \"./src/api/fetchCarEngine.ts\");\nconst carSVG_1 = __webpack_require__(/*! ../assets/images/carSVG */ \"./src/assets/images/carSVG.ts\");\nvar carStatus;\n(function (carStatus) {\n    carStatus[\"started\"] = \"started\";\n    carStatus[\"stopped\"] = \"stopped\";\n    carStatus[\"drive\"] = \"drive\";\n})(carStatus || (exports.carStatus = carStatus = {}));\nclass Car {\n    constructor(data) {\n        this.data = data;\n        this.carElem = this.render(this.data);\n        this.carStatus = carStatus.stopped;\n        this.raceTime = 0;\n        Car.getRaceTime(data.id);\n    }\n    render(data) {\n        const car = (0, createElem_1.createElem)({\n            htmlTag: 'article',\n            styles: ['car'],\n            parentClass: '.garage__cars'\n        });\n        // Car information\n        const carInfo = (0, createElem_1.createElem)({ htmlTag: 'div', styles: ['car__info'], parentNode: car });\n        (0, createElem_1.createElem)({ htmlTag: 'h3', styles: ['car__model'], parentNode: carInfo, innerText: `${data.name}` });\n        const carEditor = (0, createCarForm_1.createCarForm)({\n            parent: carInfo,\n            formAdditionalStyle: ['car__edit', 'hidden']\n        });\n        const editBtn = (0, createElem_1.createElem)({\n            htmlTag: 'button',\n            styles: ['button', 'button_secondary'],\n            parentNode: carInfo,\n            innerText: 'Edit'\n        });\n        const removeBtn = (0, createElem_1.createElem)({\n            htmlTag: 'button',\n            styles: ['button', 'button_secondary'],\n            parentNode: carInfo,\n            innerText: 'Remove'\n        });\n        this.onEditBtnPress(editBtn, carEditor);\n        this.onRemoveBtnPress(removeBtn);\n        // Car move\n        const carMove = (0, createElem_1.createElem)({ htmlTag: 'div', styles: ['car__move'], parentNode: car });\n        const carMoveWrapper = (0, createElem_1.createElem)({ htmlTag: 'div', styles: ['car__move-wrapper'], parentNode: carMove });\n        const startBtn = (0, createElem_1.createElem)({\n            htmlTag: 'button',\n            styles: ['button_invisible', 'car__start-btn'],\n            parentNode: carMoveWrapper\n        });\n        const restartBtn = (0, createElem_1.createElem)({\n            htmlTag: 'button',\n            styles: ['button_invisible', 'car__restart-btn'],\n            parentNode: carMoveWrapper\n        });\n        const carIcon = (0, createElem_1.createElem)({\n            htmlTag: 'div',\n            styles: ['car__icon'],\n            parentNode: carMoveWrapper,\n            innerHTML: carSVG_1.carSVG\n        });\n        carIcon.id = data.id.toString();\n        const svgElements = carIcon.getElementsByTagName('path');\n        for (const path of svgElements) {\n            path.setAttribute('fill', `${data.color}`);\n        }\n        (0, createElem_1.createElem)({ htmlTag: 'div', styles: ['car__flag'], parentNode: carMove });\n        this.onMoveBtnPress(startBtn, data.id, carStatus.started, carIcon);\n        this.onMoveBtnPress(restartBtn, data.id, carStatus.stopped, carIcon);\n        return car;\n    }\n    onEditBtnPress(carModel, carEditor) {\n        carModel.addEventListener('click', e => {\n            carModel.classList.add('hidden');\n            carEditor.classList.remove('hidden');\n        });\n        carEditor.addEventListener('submit', e => {\n            e.preventDefault();\n            carEditor.classList.add('hidden');\n            carModel.classList.remove('hidden');\n            (0, sendFormData_1.sendFormData)(e, carEditor, updateCar_1.updateCar, '.car__edit .input', this.data.id);\n        });\n    }\n    onRemoveBtnPress(removeBtn) {\n        removeBtn.addEventListener('click', e => {\n            (0, removeCarData_1.removeCarData)('garage', this.data.id);\n            (0, removeCarData_1.removeCarData)('winners', this.data.id);\n            this.carElem.remove();\n        });\n    }\n    onMoveBtnPress(btn, id, status, carIcon) {\n        btn.addEventListener('click', (e) => __awaiter(this, void 0, void 0, function* () {\n            if (status === carStatus.stopped) {\n                carIcon.removeAttribute('style');\n                carIcon.className = 'car__icon';\n            }\n            else {\n                const time = yield Car.getRaceTime(id);\n                time && Car.race(id, carIcon, time);\n            }\n        }));\n    }\n    static race(id, carIcon, time) {\n        return __awaiter(this, void 0, void 0, function* () {\n            carIcon.classList.add('car__icon_animated');\n            carIcon.setAttribute('style', `animation-duration: ${time}s`);\n            const errorStatus = yield (0, fetchCarEngine_1.fetchCarEngine)({ id, status: carStatus.drive });\n            let stopTime;\n            if (time) {\n                stopTime = Math.ceil(Math.random() * (time / 2));\n                if (errorStatus === 0) {\n                    setTimeout(() => {\n                        carIcon.style.animationPlayState = 'paused';\n                    }, stopTime);\n                    return carStatus.stopped;\n                }\n            }\n            return carStatus.drive;\n        });\n    }\n    static getRaceTime(id) {\n        return __awaiter(this, void 0, void 0, function* () {\n            return yield (0, fetchCarEngine_1.fetchCarEngine)({ id, status: carStatus.started });\n        });\n    }\n}\nexports.Car = Car;\n\n\n//# sourceURL=webpack:///./src/modules/Car.ts?");

/***/ }),

/***/ "./src/modules/Garage.ts":
/*!*******************************!*\
  !*** ./src/modules/Garage.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Garage = void 0;\nconst createElem_1 = __webpack_require__(/*! ../utils/createElem */ \"./src/utils/createElem.ts\");\nconst fetchData_1 = __webpack_require__(/*! ../api/fetchData */ \"./src/api/fetchData.ts\");\nconst Car_1 = __webpack_require__(/*! ./Car */ \"./src/modules/Car.ts\");\nconst createCarForm_1 = __webpack_require__(/*! ../utils/createCarForm */ \"./src/utils/createCarForm.ts\");\nconst sendFormData_1 = __webpack_require__(/*! ../utils/sendFormData */ \"./src/utils/sendFormData.ts\");\nconst addNewCar_1 = __webpack_require__(/*! ../api/addNewCar */ \"./src/api/addNewCar.ts\");\nconst Winners_1 = __webpack_require__(/*! ./Winners */ \"./src/modules/Winners.ts\");\nconst CARS_ON_PAGE = 7;\nclass Garage {\n    constructor() {\n        this.carsData = null;\n        this.totalCarsNumber = 0;\n        this.currentPage = 1;\n        this.garageElem = null;\n        this.winners = new Winners_1.Winners();\n        this.getPageData();\n    }\n    getPageData() {\n        return __awaiter(this, void 0, void 0, function* () {\n            try {\n                const response = yield (0, fetchData_1.fetchData)('garage', this.currentPage, CARS_ON_PAGE);\n                let pageData;\n                if (response) {\n                    pageData = yield response.json();\n                    this.carsData = pageData;\n                    this.totalCarsNumber = Number(response.headers.get('X-Total-Count'));\n                    this.renderPage(pageData);\n                }\n            }\n            catch (error) {\n                console.error(error);\n            }\n        });\n    }\n    renderPage(data) {\n        const garagePage = (0, createElem_1.createElem)({\n            htmlTag: 'section',\n            styles: ['garage'],\n            parentClass: '.body'\n        });\n        this.renderCarCreator(garagePage);\n        this.renderGarageTitle(garagePage, data);\n        this.renderPagination(garagePage);\n        this.renderGaragePage(garagePage, data);\n    }\n    renderCarCreator(garagePage) {\n        (0, createElem_1.createElem)({\n            htmlTag: 'h1',\n            styles: ['garage__create-title'],\n            parentNode: garagePage,\n            innerText: 'Create your own car'\n        });\n        const carCreator = (0, createCarForm_1.createCarForm)({ parent: garagePage, formAdditionalStyle: ['garage__create-form'] });\n        this.onCreateFormSubmit(carCreator);\n    }\n    renderGarageTitle(garagePage, data) {\n        (0, createElem_1.createElem)({\n            htmlTag: 'h1',\n            styles: ['garage__title'],\n            parentNode: garagePage,\n            innerText: `Garage (${this.totalCarsNumber})`\n        });\n        const garageBtns = (0, createElem_1.createElem)({ htmlTag: 'div', styles: ['garage__btns'], parentNode: garagePage });\n        // Race\n        const raceBtn = (0, createElem_1.createElem)({\n            htmlTag: 'button',\n            styles: ['button', 'button_primary'],\n            parentNode: garageBtns,\n            innerText: 'Race'\n        });\n        this.onRaceBtnPress(raceBtn);\n        // Reset\n        const resetBtn = (0, createElem_1.createElem)({\n            htmlTag: 'button',\n            styles: ['button', 'button_primary'],\n            parentNode: garageBtns,\n            innerText: 'Reset'\n        });\n        // Generate cars\n        const generateBtn = (0, createElem_1.createElem)({\n            htmlTag: 'button',\n            styles: ['button', 'button_primary'],\n            parentNode: garageBtns,\n            innerText: 'Generate'\n        });\n        this.onResetBtnPress(resetBtn);\n        this.onGenerateBtnPress(generateBtn);\n    }\n    renderGaragePage(garagePage, data) {\n        const garageCars = (0, createElem_1.createElem)({ htmlTag: 'div', styles: ['garage__cars'], parentNode: garagePage });\n        data.map((carData) => {\n            const car = new Car_1.Car(carData);\n            garageCars.append(car.carElem);\n        });\n        this.garageElem = garagePage;\n    }\n    renderPagination(garagePage) {\n        const pagination = (0, createElem_1.createElem)({ htmlTag: 'div', styles: ['pagination'], parentNode: garagePage });\n        (0, createElem_1.createElem)({\n            htmlTag: 'h2',\n            styles: ['pagination__title'],\n            parentNode: pagination,\n            innerText: `Page #${this.currentPage}`\n        });\n        const paginationBtns = (0, createElem_1.createElem)({ htmlTag: 'div', styles: ['pagination__buttons'], parentNode: pagination });\n        (0, createElem_1.createElem)({\n            htmlTag: 'button',\n            styles: ['button', 'button_primary', 'button_circle'],\n            parentNode: paginationBtns,\n            innerText: '<'\n        });\n        (0, createElem_1.createElem)({\n            htmlTag: 'button',\n            styles: ['button', 'button_primary', 'button_circle'],\n            parentNode: paginationBtns,\n            innerText: '>'\n        });\n        this.onPaginationBtnPress(paginationBtns);\n    }\n    onCreateFormSubmit(carCreator) {\n        carCreator.addEventListener('submit', (e) => __awaiter(this, void 0, void 0, function* () {\n            const newCarData = yield (0, sendFormData_1.sendFormData)(e, carCreator, addNewCar_1.addNewCar, '.garage__create .input');\n            this.carsData.push(newCarData);\n            const car = new Car_1.Car(newCarData);\n            const garageCars = document.querySelector('.garage__cars');\n            garageCars && garageCars.append(car.carElem);\n        }));\n    }\n    onRaceBtnPress(btn) {\n        btn.addEventListener('click', (e) => __awaiter(this, void 0, void 0, function* () {\n            const raceResults = {};\n            for (let car of this.carsData) {\n                const id = car.id;\n                const model = car.name;\n                const time = yield Car_1.Car.getRaceTime(id);\n                if (time) {\n                    raceResults[id] = { time, model };\n                }\n            }\n            for (let car in raceResults) {\n                const carElem = document.getElementById(`${car}`);\n                if (carElem) {\n                    raceResults[car].status = Car_1.Car.race(Number(car), carElem, raceResults[car].time);\n                }\n            }\n            this.getWinner(raceResults);\n        }));\n    }\n    onResetBtnPress(btn) {\n        btn.addEventListener('click', (e) => {\n            for (let car of this.carsData) {\n                const carElem = document.getElementById(`${car.id}`);\n                if (carElem) {\n                    carElem.removeAttribute('style');\n                    carElem.className = 'car__icon';\n                }\n            }\n        });\n    }\n    onGenerateBtnPress(generateBtn) {\n        generateBtn.addEventListener('click', () => {\n            this.generateRandomCars();\n            const garageTitle = document.querySelector('.garage__title');\n            if (garageTitle) {\n                garageTitle.innerHTML = `Garage ${this.carsData.length + 100}`;\n            }\n        });\n    }\n    generateRandomCars() {\n        return __awaiter(this, void 0, void 0, function* () {\n            const firstModelPart = ['Ford', 'Ferrari', 'Mercedes', 'Tesla', 'Opel', 'Mustang', 'BMW', 'Mazda', 'Range Rover', 'KIA'];\n            const secondModelPart = ['Model A', 'Model Q', 'Model Z', 'Model S', 'Model V', 'Model S', 'Model W', 'Model R', 'Model P', \"Model L\"];\n            for (let i = 0; i < 100; i += 1) {\n                const name = `${firstModelPart[Math.floor(Math.random() * 10)]} ${secondModelPart[Math.floor(Math.random() * 10)]}`;\n                const color = `#${((Math.random() * 0xfffff * 1000000).toString(16)).slice(0, 6)}`;\n                const newCarData = yield (0, addNewCar_1.addNewCar)({ name, color });\n                new Car_1.Car(newCarData);\n                this.carsData.push(newCarData);\n            }\n        });\n    }\n    getWinner(raceResults) {\n        return __awaiter(this, void 0, void 0, function* () {\n            let bestResult;\n            let fastestCarId;\n            for (let carId in raceResults) {\n                const status = yield raceResults[carId].status;\n                if (status !== Car_1.carStatus.stopped\n                    && (!bestResult || raceResults[carId].time < bestResult)) {\n                    bestResult = Number(raceResults[carId].time);\n                    fastestCarId = carId;\n                }\n            }\n            if (bestResult && fastestCarId) {\n                this.showWinner(bestResult, raceResults[fastestCarId].model);\n                this.winners.addNewWin(fastestCarId, bestResult);\n            }\n        });\n    }\n    showWinner(time, model) {\n        alert(`${model} finished first (${time} s)!`);\n    }\n    onPaginationBtnPress(paginationBtns) {\n        paginationBtns.addEventListener('click', (e) => {\n            const pressedBtn = e.target;\n            const pressedBtnText = pressedBtn.innerText;\n            if (pressedBtnText === '<' && this.currentPage > 1) {\n                this.currentPage -= 1;\n                const garage = document.querySelector('.garage');\n                garage && garage.remove();\n                this.getPageData();\n            }\n            else if (pressedBtnText === '>' && this.currentPage < Math.ceil(this.totalCarsNumber / CARS_ON_PAGE)) {\n                this.currentPage += 1;\n                const garage = document.querySelector('.garage');\n                garage && garage.remove();\n                this.getPageData();\n            }\n        });\n    }\n}\nexports.Garage = Garage;\n\n\n//# sourceURL=webpack:///./src/modules/Garage.ts?");

/***/ }),

/***/ "./src/modules/Main.ts":
/*!*****************************!*\
  !*** ./src/modules/Main.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Main = void 0;\nconst createElem_1 = __webpack_require__(/*! ../utils/createElem */ \"./src/utils/createElem.ts\");\nconst Garage_1 = __webpack_require__(/*! ./Garage */ \"./src/modules/Garage.ts\");\nconst Winners_1 = __webpack_require__(/*! ./Winners */ \"./src/modules/Winners.ts\");\nclass Main {\n    constructor() {\n        this.garagePage = null;\n        this.winnersPage = null;\n        this.render();\n    }\n    render() {\n        const body = document.getElementsByTagName('body')[0];\n        body.classList.add('body');\n        const nav = (0, createElem_1.createElem)({ htmlTag: 'nav', styles: ['nav'], parentNode: body });\n        const garageBtn = (0, createElem_1.createElem)({\n            htmlTag: 'button',\n            styles: ['button', 'button_primary'],\n            parentNode: nav,\n            innerText: 'Garage'\n        });\n        this.onGarageBtnPress(garageBtn);\n        const winnersBtn = (0, createElem_1.createElem)({\n            htmlTag: 'button',\n            styles: ['button', 'button_primary'],\n            parentNode: nav,\n            innerText: 'Winners'\n        });\n        this.onWinnersBtnPress(winnersBtn);\n        this.renderGaragePage();\n    }\n    onGarageBtnPress(garageBtn) {\n        garageBtn.addEventListener('click', e => {\n            this.renderGaragePage();\n        });\n    }\n    onWinnersBtnPress(winnersBtn) {\n        winnersBtn.addEventListener('click', e => {\n            this.renderWinnersPage();\n        });\n    }\n    renderGaragePage() {\n        const garage = document.querySelector('.garage');\n        if (!garage) {\n            this.garagePage = new Garage_1.Garage();\n        }\n        this.removePage('.winners');\n    }\n    renderWinnersPage() {\n        if (!document.querySelector('.winners')) {\n            this.winnersPage = new Winners_1.Winners();\n            this.winnersPage.getData();\n        }\n        this.removePage('.garage');\n    }\n    removePage(pageSelector) {\n        const pageToRemove = document.querySelector(pageSelector);\n        pageToRemove && pageToRemove.remove();\n    }\n}\nexports.Main = Main;\n\n\n//# sourceURL=webpack:///./src/modules/Main.ts?");

/***/ }),

/***/ "./src/modules/Winners.ts":
/*!********************************!*\
  !*** ./src/modules/Winners.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Winners = void 0;\nconst createElem_1 = __webpack_require__(/*! ../utils/createElem */ \"./src/utils/createElem.ts\");\nconst fetchData_1 = __webpack_require__(/*! ../api/fetchData */ \"./src/api/fetchData.ts\");\nconst fetchWinner_1 = __webpack_require__(/*! ../api/fetchWinner */ \"./src/api/fetchWinner.ts\");\nconst addWinnerData_1 = __webpack_require__(/*! ../api/addWinnerData */ \"./src/api/addWinnerData.ts\");\nconst updateWinner_1 = __webpack_require__(/*! ../api/updateWinner */ \"./src/api/updateWinner.ts\");\nconst HTTP_NOT_FOUND = 404;\nclass Winners {\n    constructor() {\n        this.data = null;\n        this.winnersElem = null;\n    }\n    getData() {\n        return __awaiter(this, void 0, void 0, function* () {\n            try {\n                const response = yield (0, fetchData_1.fetchData)('winners');\n                if (response) {\n                    this.data = yield response.json();\n                }\n                this.render();\n            }\n            catch (error) {\n                console.error(error);\n            }\n        });\n    }\n    getAdditionalData(id) {\n        return __awaiter(this, void 0, void 0, function* () {\n            try {\n                const response = yield (0, fetchData_1.fetchData)(`garage/${id}`);\n                let data;\n                if (response) {\n                    data = yield response.json();\n                }\n                return {\n                    name: data.name,\n                    color: data.color\n                };\n            }\n            catch (error) {\n                console.error(error);\n            }\n        });\n    }\n    render() {\n        const winnersPage = (0, createElem_1.createElem)({\n            htmlTag: 'section',\n            styles: ['winners'],\n            parentClass: '.body'\n        });\n        (0, createElem_1.createElem)({\n            htmlTag: 'h1',\n            styles: ['winners__title'],\n            parentNode: winnersPage,\n            innerText: `Winners (${this.data.length})`\n        });\n        (0, createElem_1.createElem)({\n            htmlTag: 'h2',\n            styles: ['winners__pagination'],\n            parentNode: winnersPage,\n            innerText: `Page #${'1'}`\n        });\n        const table = (0, createElem_1.createElem)({ htmlTag: 'table', styles: ['win-table'], parentNode: winnersPage });\n        this.createTableRow(table, 'Number', 'Car', 'Name', 'Wins', 'Best time (s)');\n        this.data.map((winner, index) => {\n            let carName;\n            let carColor;\n            this.getAdditionalData(winner.id)\n                .then(data => {\n                if (data) {\n                    carName = data.name;\n                    carColor = data.color;\n                }\n                this.createTableRow(table, index.toString(), `${carColor}`, `${carName}`, winner.wins.toString(), winner.time.toString());\n            })\n                .catch(e => console.error(e));\n        });\n        this.winnersElem = winnersPage;\n    }\n    createTableRow(parentNode, winnerPosition, color, model, wins, time) {\n        const row = (0, createElem_1.createElem)({ htmlTag: 'tr', styles: ['win-table__row'], parentNode });\n        (0, createElem_1.createElem)({ htmlTag: 'td', styles: ['win-table__cell'], parentNode: row, innerText: winnerPosition });\n        (0, createElem_1.createElem)({ htmlTag: 'td', styles: ['win-table__cell'], parentNode: row, innerText: color });\n        (0, createElem_1.createElem)({ htmlTag: 'td', styles: ['win-table__cell'], parentNode: row, innerText: model });\n        (0, createElem_1.createElem)({ htmlTag: 'td', styles: ['win-table__cell'], parentNode: row, innerText: wins });\n        (0, createElem_1.createElem)({ htmlTag: 'td', styles: ['win-table__cell'], parentNode: row, innerText: time });\n    }\n    addNewWin(id, time) {\n        return __awaiter(this, void 0, void 0, function* () {\n            const response = yield (0, fetchWinner_1.fetchWinner)(Number(id));\n            if (!response) {\n                return;\n            }\n            if (response.status === HTTP_NOT_FOUND) {\n                const params = {\n                    id: Number(id),\n                    wins: 1,\n                    time\n                };\n                (0, addWinnerData_1.addWinnerData)(params);\n            }\n            else {\n                const winnerData = yield response.json();\n                const params = {\n                    wins: winnerData.wins + 1,\n                    time\n                };\n                (0, updateWinner_1.updateWinnerData)(params, Number(id));\n            }\n        });\n    }\n}\nexports.Winners = Winners;\n\n\n//# sourceURL=webpack:///./src/modules/Winners.ts?");

/***/ }),

/***/ "./src/utils/createCarForm.ts":
/*!************************************!*\
  !*** ./src/utils/createCarForm.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.createCarForm = void 0;\nconst createElem_1 = __webpack_require__(/*! ./createElem */ \"./src/utils/createElem.ts\");\nfunction createCarForm(params) {\n    const form = (0, createElem_1.createElem)({\n        htmlTag: 'form',\n        styles: ['form', ...params.formAdditionalStyle],\n        parentNode: params.parent\n    });\n    (0, createElem_1.createElem)({\n        htmlTag: 'input',\n        styles: ['input'],\n        parentNode: form,\n        attribute: {\n            name: 'placeholder',\n            value: 'Write a car model'\n        },\n        inputName: 'name'\n    });\n    (0, createElem_1.createElem)({\n        htmlTag: 'input',\n        styles: ['input_color'],\n        parentNode: form,\n        attribute: {\n            name: 'type',\n            value: 'color'\n        },\n        inputName: 'color'\n    });\n    (0, createElem_1.createElem)({\n        htmlTag: 'button',\n        styles: ['button', 'button_secondary'],\n        parentNode: form,\n        attribute: {\n            name: 'type',\n            value: 'submit'\n        },\n        innerText: 'Save'\n    });\n    (0, createElem_1.createElem)({\n        htmlTag: 'button',\n        styles: ['button', 'button_secondary'],\n        parentNode: form,\n        attribute: {\n            name: 'type',\n            value: 'reset'\n        },\n        innerText: 'Reset'\n    });\n    return form;\n}\nexports.createCarForm = createCarForm;\n\n\n//# sourceURL=webpack:///./src/utils/createCarForm.ts?");

/***/ }),

/***/ "./src/utils/createElem.ts":
/*!*********************************!*\
  !*** ./src/utils/createElem.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.createElem = void 0;\nfunction createElem(params) {\n    const elem = document.createElement(params.htmlTag);\n    elem.classList.add(...params.styles);\n    if (params.parentNode) {\n        params.parentNode && params.parentNode.append(elem);\n    }\n    if (params.parentClass) {\n        const parent = document.querySelector(params.parentClass);\n        parent && parent.append(elem);\n    }\n    if (params.innerText) {\n        elem.innerText = params.innerText;\n    }\n    if (params.innerHTML) {\n        elem.innerHTML = params.innerHTML;\n    }\n    if (params.attribute) {\n        elem.setAttribute(params.attribute.name, params.attribute.value);\n    }\n    if (params.inputName) {\n        elem.setAttribute('name', params.inputName);\n    }\n    return elem;\n}\nexports.createElem = createElem;\n\n\n//# sourceURL=webpack:///./src/utils/createElem.ts?");

/***/ }),

/***/ "./src/utils/sendFormData.ts":
/*!***********************************!*\
  !*** ./src/utils/sendFormData.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.sendFormData = void 0;\nfunction sendFormData(e, form, apiCallback, inputSelector, carId) {\n    return __awaiter(this, void 0, void 0, function* () {\n        e.preventDefault();\n        const formData = new FormData(form);\n        const name = formData.get('name');\n        const color = formData.get('color');\n        let newCar;\n        if (name.length !== 0 && color.length !== 0) {\n            newCar = yield apiCallback({ name: name, color: color, id: carId });\n            const input = document.querySelector(inputSelector);\n            if (input) {\n                input.value = '';\n            }\n        }\n        return newCar;\n    });\n}\nexports.sendFormData = sendFormData;\n\n\n//# sourceURL=webpack:///./src/utils/sendFormData.ts?");

/***/ }),

/***/ "./src/assets/images/flag.svg":
/*!************************************!*\
  !*** ./src/assets/images/flag.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d8e7472f664ce8992f8e.svg\";\n\n//# sourceURL=webpack:///./src/assets/images/flag.svg?");

/***/ }),

/***/ "./src/assets/images/play.svg":
/*!************************************!*\
  !*** ./src/assets/images/play.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"adc8d1cd7e5c2c483837.svg\";\n\n//# sourceURL=webpack:///./src/assets/images/play.svg?");

/***/ }),

/***/ "./src/assets/images/replay.svg":
/*!**************************************!*\
  !*** ./src/assets/images/replay.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7594ba1bb0919482f7a1.svg\";\n\n//# sourceURL=webpack:///./src/assets/images/replay.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;