"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Apps_Create_CreateOrUpdateAppForm_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Apps/Create/CreateOrUpdateAppForm.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Apps/Create/CreateOrUpdateAppForm.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Input_DefaultInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/Input/DefaultInput */ "./resources/js/Components/Input/DefaultInput.vue");
/* harmony import */ var _components_Select_DefaultSelect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/Select/DefaultSelect */ "./resources/js/Components/Select/DefaultSelect.vue");
/* harmony import */ var _components_Switch_DefaultSwitch_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/Switch/DefaultSwitch.vue */ "./resources/js/Components/Switch/DefaultSwitch.vue");
/* harmony import */ var _components_TextArea_DefaultTextArea_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/TextArea/DefaultTextArea.vue */ "./resources/js/Components/TextArea/DefaultTextArea.vue");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    DefaultInput: _components_Input_DefaultInput__WEBPACK_IMPORTED_MODULE_0__["default"],
    DefaultSelect: _components_Select_DefaultSelect__WEBPACK_IMPORTED_MODULE_1__["default"],
    DefaultSwitch: _components_Switch_DefaultSwitch_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    DefaultTextArea: _components_TextArea_DefaultTextArea_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  props: {
    form: Object,
    mode: String,
    app: {
      type: Object,
      "default": null
    },
    versionOptions: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    sharedShortCodes: {
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  },
  computed: {
    sharedShortCodeOptions: function sharedShortCodeOptions() {
      return this.sharedShortCodes.map(function (option) {
        return {
          label: option.code,
          value: option.code
        };
      });
    },
    selectableVersionOptions: function selectableVersionOptions() {
      var options = (this.app || {}).versions ? this.app.versions : this.versionOptions;
      return options.map(function (option) {
        return {
          label: option.number,
          value: option.id
        };
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Apps/Create/CreateOrUpdateAppForm.vue?vue&type=template&id=81888ce4":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Apps/Create/CreateOrUpdateAppForm.vue?vue&type=template&id=81888ce4 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "text-sm text-gray-500 mb-5"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Once you delete this app, there is no going back. Please be certain. Enter the delete code ");

var _hoisted_3 = {
  "class": "text-gray-800 font-bold"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" to confirm this action.");

var _hoisted_5 = {
  "class": "text-xs text-gray-400 ml-2"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_DefaultInput = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DefaultInput");

  var _component_DefaultTextArea = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DefaultTextArea");

  var _component_DefaultSwitch = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DefaultSwitch");

  var _component_DefaultSelect = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DefaultSelect");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Delete "), $props.mode == 'Delete' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 0
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.app.delete_code), 1
  /* TEXT */
  ), _hoisted_4]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DefaultInput, {
    modelValue: $props.form.delete_code,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $props.form.delete_code = $event;
    }),
    label: "Reset code",
    placeholder: "Enter the reset code",
    disabled: $props.form.processing || $props.form.processing,
    error: $props.form.errors.delete_code,
    "class": "mb-6"
  }, null, 8
  /* PROPS */
  , ["modelValue", "disabled", "error"])], 64
  /* STABLE_FRAGMENT */
  )) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 1
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Create / Update "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DefaultInput, {
    modelValue: $props.form.name,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
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
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
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
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $props.form.online = $event;
    }),
    label: "Online",
    disabled: $props.form.processing,
    error: $props.form.errors.online,
    "class": "mb-6"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_5, " — Your app is " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.form.online ? 'online' : 'offline'), 1
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
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
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
  )), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Create "), $props.mode == 'Create' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_DefaultSelect, {
    key: 2,
    modelValue: $props.form.shared_short_code,
    "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
      return $props.form.shared_short_code = $event;
    }),
    options: $options.sharedShortCodeOptions,
    label: "Shared Short Code",
    placeholder: "Select a shared shortcode",
    disabled: $props.form.processing,
    error: $props.form.errors.shared_short_code,
    "class": "mb-6"
  }, null, 8
  /* PROPS */
  , ["modelValue", "options", "disabled", "error"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Update "), $props.mode == 'Update' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_DefaultSelect, {
    key: 3,
    modelValue: $props.form.active_version_id,
    "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
      return $props.form.active_version_id = $event;
    }),
    options: $options.selectableVersionOptions,
    label: "Active version",
    placeholder: "Select a version",
    disabled: $props.form.processing,
    error: $props.form.errors.active_version_id,
    "class": "mb-6"
  }, null, 8
  /* PROPS */
  , ["modelValue", "options", "disabled", "error"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./resources/js/Pages/Apps/Create/CreateOrUpdateAppForm.vue":
/*!******************************************************************!*\
  !*** ./resources/js/Pages/Apps/Create/CreateOrUpdateAppForm.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CreateOrUpdateAppForm_vue_vue_type_template_id_81888ce4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateOrUpdateAppForm.vue?vue&type=template&id=81888ce4 */ "./resources/js/Pages/Apps/Create/CreateOrUpdateAppForm.vue?vue&type=template&id=81888ce4");
/* harmony import */ var _CreateOrUpdateAppForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateOrUpdateAppForm.vue?vue&type=script&lang=js */ "./resources/js/Pages/Apps/Create/CreateOrUpdateAppForm.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_juliantabona_Sites_laravel_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_juliantabona_Sites_laravel_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_CreateOrUpdateAppForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_CreateOrUpdateAppForm_vue_vue_type_template_id_81888ce4__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Apps/Create/CreateOrUpdateAppForm.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Apps/Create/CreateOrUpdateAppForm.vue?vue&type=script&lang=js":
/*!******************************************************************************************!*\
  !*** ./resources/js/Pages/Apps/Create/CreateOrUpdateAppForm.vue?vue&type=script&lang=js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CreateOrUpdateAppForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CreateOrUpdateAppForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CreateOrUpdateAppForm.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Apps/Create/CreateOrUpdateAppForm.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Apps/Create/CreateOrUpdateAppForm.vue?vue&type=template&id=81888ce4":
/*!************************************************************************************************!*\
  !*** ./resources/js/Pages/Apps/Create/CreateOrUpdateAppForm.vue?vue&type=template&id=81888ce4 ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CreateOrUpdateAppForm_vue_vue_type_template_id_81888ce4__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CreateOrUpdateAppForm_vue_vue_type_template_id_81888ce4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CreateOrUpdateAppForm.vue?vue&type=template&id=81888ce4 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Apps/Create/CreateOrUpdateAppForm.vue?vue&type=template&id=81888ce4");


/***/ })

}]);