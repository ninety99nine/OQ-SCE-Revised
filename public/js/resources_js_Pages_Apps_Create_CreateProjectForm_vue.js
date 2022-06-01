"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Apps_Create_CreateProjectForm_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Apps/Create/CreateProjectForm.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Apps/Create/CreateProjectForm.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Components_Input_DefaultInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/Input/DefaultInput */ "./resources/js/Components/Input/DefaultInput.vue");
/* harmony import */ var _Components_Switch_DefaultSwitch_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/Switch/DefaultSwitch.vue */ "./resources/js/Components/Switch/DefaultSwitch.vue");
/* harmony import */ var _Components_TextArea_DefaultTextArea_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/TextArea/DefaultTextArea.vue */ "./resources/js/Components/TextArea/DefaultTextArea.vue");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    DefaultInput: _Components_Input_DefaultInput__WEBPACK_IMPORTED_MODULE_0__["default"],
    DefaultSwitch: _Components_Switch_DefaultSwitch_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    DefaultTextArea: _Components_TextArea_DefaultTextArea_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: ['form']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Apps/Create/CreateProjectForm.vue?vue&type=template&id=0d418d32":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Apps/Create/CreateProjectForm.vue?vue&type=template&id=0d418d32 ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "text-xs text-gray-400 ml-2"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_DefaultInput = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DefaultInput");

  var _component_DefaultTextArea = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DefaultTextArea");

  var _component_DefaultSwitch = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DefaultSwitch");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DefaultInput, {
    modelValue: $props.form.name,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $props.form.name = $event;
    }),
    label: "Name",
    placeholder: "My App",
    disabled: $props.form.processing,
    error: $props.form.errors.name,
    "class": "mb-6"
  }, null, 8
  /* PROPS */
  , ["modelValue", "disabled", "error"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DefaultTextArea, {
    modelValue: $props.form.description,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $props.form.description = $event;
    }),
    label: "Description",
    placeholder: "This is a budget app",
    disabled: $props.form.processing,
    error: $props.form.errors.description,
    "class": "mb-6"
  }, null, 8
  /* PROPS */
  , ["modelValue", "disabled", "error"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DefaultSwitch, {
    modelValue: $props.form.online,
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $props.form.online = $event;
    }),
    label: "Online",
    disabled: $props.form.processing,
    error: $props.form.errors.online,
    "class": "mb-6"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_1, " — Your app is " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.form.online ? 'online' : 'offline'), 1
      /* TEXT */
      )];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["modelValue", "disabled", "error"]), !$props.form.online ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_DefaultTextArea, {
    key: 0,
    modelValue: $props.form.offline_message,
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $props.form.offline_message = $event;
    }),
    label: "Offline Message",
    placeholder: "This service is currently not available",
    disabled: $props.form.processing,
    error: $props.form.errors.offline_message,
    "class": "mb-4"
  }, null, 8
  /* PROPS */
  , ["modelValue", "disabled", "error"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./resources/js/Pages/Apps/Create/CreateProjectForm.vue":
/*!**************************************************************!*\
  !*** ./resources/js/Pages/Apps/Create/CreateProjectForm.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CreateProjectForm_vue_vue_type_template_id_0d418d32__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateProjectForm.vue?vue&type=template&id=0d418d32 */ "./resources/js/Pages/Apps/Create/CreateProjectForm.vue?vue&type=template&id=0d418d32");
/* harmony import */ var _CreateProjectForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateProjectForm.vue?vue&type=script&lang=js */ "./resources/js/Pages/Apps/Create/CreateProjectForm.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_juliantabona_Sites_laravel_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_juliantabona_Sites_laravel_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_CreateProjectForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_CreateProjectForm_vue_vue_type_template_id_0d418d32__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Apps/Create/CreateProjectForm.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Apps/Create/CreateProjectForm.vue?vue&type=script&lang=js":
/*!**************************************************************************************!*\
  !*** ./resources/js/Pages/Apps/Create/CreateProjectForm.vue?vue&type=script&lang=js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CreateProjectForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CreateProjectForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CreateProjectForm.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Apps/Create/CreateProjectForm.vue?vue&type=script&lang=js");


/***/ }),

/***/ "./resources/js/Pages/Apps/Create/CreateProjectForm.vue?vue&type=template&id=0d418d32":
/*!********************************************************************************************!*\
  !*** ./resources/js/Pages/Apps/Create/CreateProjectForm.vue?vue&type=template&id=0d418d32 ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CreateProjectForm_vue_vue_type_template_id_0d418d32__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CreateProjectForm_vue_vue_type_template_id_0d418d32__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CreateProjectForm.vue?vue&type=template&id=0d418d32 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Apps/Create/CreateProjectForm.vue?vue&type=template&id=0d418d32");


/***/ })

}]);
