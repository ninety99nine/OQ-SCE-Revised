"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Versions_Show_Screen_Create_CreateOrUpdateVersionModal_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Screen/Create/CreateOrUpdateVersionModal.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Screen/Create/CreateOrUpdateVersionModal.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './CreateOrUpdateVersionForm'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@components/Modal/DefaultModal'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@components/Button/DangerButton.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@components/Button/PrimaryButton.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    useForm: _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__.useForm,
    CreateOrUpdateVersionForm: Object(function webpackMissingModule() { var e = new Error("Cannot find module './CreateOrUpdateVersionForm'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    DefaultModal: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@components/Modal/DefaultModal'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    DangerButton: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@components/Button/DangerButton.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    PrimaryButton: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@components/Button/PrimaryButton.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
  },
  props: {
    version: {
      type: Object,
      "default": null
    },
    mode: {
      type: String,
      "default": 'Create'
    }
  },
  data: function data() {
    return {
      form: this.getForm()
    };
  },
  methods: {
    getForm: function getForm() {
      //  If we are updating
      if (this.version && this.mode == 'Update') {
        return (0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__.useForm)({
          description: this.version.description,
          number: this.version.number,
          reset_builder: false,
          delete_code: '',
          //  Indicate that we should return to the app view
          destination: 'app.show'
        }); //  If we are deleting
      } else if (this.version && this.mode == 'Delete') {
        return (0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__.useForm)({
          delete_code: ''
        }); //  If we are creating
      } else if (this.mode == 'Create') {
        return (0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__.useForm)({
          description: '',
          number: ''
        });
      } else {
        return (0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__.useForm)({});
      }
    },
    handleAction: function handleAction(closeModal) {
      //  If we are updating
      if (this.version && this.mode == 'Update') {
        this.updateVersion(closeModal); //  If we are deleting
      } else if (this.version && this.mode == 'Delete') {
        this.deleteVersion(closeModal); //  If we are creating
      } else if (this.mode == 'Create') {
        this.createVersion(closeModal);
      }
    },
    createVersion: function createVersion(closeModal) {
      var self = this; //  Clear existing errors

      this.form.clearErrors(); //  Attempt to create version

      this.form.post(route('versions.create', {
        project: this.route().params.project,
        app: this.route().params.app
      }), {
        preserveState: true,
        preserveScroll: true,
        onSuccess: function onSuccess() {
          self.$message({
            message: 'Version created successfully',
            type: 'success'
          });
          self.form.reset();
          closeModal();
        },
        onError: function onError(errors) {
          self.$message({
            message: 'Sorry, we found some mistakes',
            type: 'error'
          });
        }
      });
    },
    updateVersion: function updateVersion(closeModal) {
      var self = this; //  Clear existing errors

      this.form.clearErrors(); //  Attempt to create version

      this.form.put(route('version.update', {
        project: this.route().params.project,
        app: this.route().params.app,
        version: this.version.id
      }), {
        preserveState: true,
        preserveScroll: true,
        onSuccess: function onSuccess() {
          self.$message({
            message: 'Version updated successfully',
            type: 'success'
          });
          self.form.defaults();
          closeModal();
        },
        onError: function onError(errors) {
          self.$message({
            message: 'Sorry, we found some mistakes',
            type: 'error'
          });
        }
      });
    },
    deleteVersion: function deleteVersion(closeModal) {
      var self = this; //  Clear existing errors

      this.form.clearErrors(); //  Attempt to create version

      this.form["delete"](route('version.delete', {
        project: this.route().params.project,
        app: this.route().params.app,
        version: this.version.id
      }), {
        preserveState: true,
        preserveScroll: true,
        onSuccess: function onSuccess() {
          self.$message({
            message: 'Version deleted successfully',
            type: 'success'
          });
          self.form.reset();
          closeModal();
        },
        onError: function onError(errors) {
          self.$message({
            message: 'Sorry, we found some mistakes',
            type: 'error'
          });
        }
      });
    },
    cancelCreateVersion: function cancelCreateVersion() {
      //  Clear existing errors
      this.form.clearErrors(); //  Reset the form

      this.form.reset();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Screen/Create/CreateOrUpdateVersionModal.vue?vue&type=template&id=37f67454":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Screen/Create/CreateOrUpdateVersionModal.vue?vue&type=template&id=37f67454 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "class": "h-4 w-4 mr-2",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
})], -1
/* HOISTED */
);

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Edit ");

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "class": "h-4 w-4 mr-2",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
})], -1
/* HOISTED */
);

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "class": "h-4 w-4 mr-2",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "fill-rule": "evenodd",
  d: "M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z",
  "clip-rule": "evenodd"
})], -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_CreateOrUpdateVersionForm = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("CreateOrUpdateVersionForm");

  var _component_PrimaryButton = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("PrimaryButton");

  var _component_DangerButton = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DangerButton");

  var _component_DefaultModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DefaultModal");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Create Version Modal "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DefaultModal, {
    defaultText: "Cancel",
    onOpen: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.$emit('open');
    }),
    onClose: _cache[1] || (_cache[1] = function ($event) {
      return _ctx.$emit('close');
    }),
    defaultAction: $options.cancelCreateVersion,
    isLoading: $data.form.processing,
    dangerText: $props.mode == 'Delete' ? $props.mode + ' Version' : '',
    dangerAction: $options.handleAction,
    primaryText: ['Create', 'Update'].includes($props.mode) ? $props.mode == 'Create' ? $props.mode + ' Version' : 'Save Changes' : '',
    primaryAction: $options.handleAction
  }, {
    title: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.mode) + " Version", 1
      /* TEXT */
      )];
    }),
    trigger: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Update "), $props.mode == 'Update' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_PrimaryButton, {
        key: 0,
        disabled: $data.form.processing,
        name: "trigger"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_1, _hoisted_2];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["disabled"])) : $props.mode == 'Delete' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        key: 1
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Delete "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DangerButton, {
        disabled: $data.form.processing,
        name: "trigger"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.mode), 1
          /* TEXT */
          )];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["disabled"])], 2112
      /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
      )) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        key: 2
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Create "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_PrimaryButton, {
        disabled: $data.form.processing,
        name: "trigger"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.mode) + " Version ", 1
          /* TEXT */
          )];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["disabled"])], 2112
      /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
      ))];
    }),
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_CreateOrUpdateVersionForm, {
        form: $data.form,
        version: $props.version,
        mode: $props.mode
      }, null, 8
      /* PROPS */
      , ["form", "version", "mode"])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["defaultAction", "isLoading", "dangerText", "dangerAction", "primaryText", "primaryAction"])], 2112
  /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  );
}

/***/ }),

/***/ "./resources/js/Pages/Versions/Show/Screen/Create/CreateOrUpdateVersionModal.vue":
/*!***************************************************************************************!*\
  !*** ./resources/js/Pages/Versions/Show/Screen/Create/CreateOrUpdateVersionModal.vue ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CreateOrUpdateVersionModal_vue_vue_type_template_id_37f67454__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateOrUpdateVersionModal.vue?vue&type=template&id=37f67454 */ "./resources/js/Pages/Versions/Show/Screen/Create/CreateOrUpdateVersionModal.vue?vue&type=template&id=37f67454");
/* harmony import */ var _CreateOrUpdateVersionModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateOrUpdateVersionModal.vue?vue&type=script&lang=js */ "./resources/js/Pages/Versions/Show/Screen/Create/CreateOrUpdateVersionModal.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_juliantabona_Sites_laravel_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_juliantabona_Sites_laravel_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_CreateOrUpdateVersionModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_CreateOrUpdateVersionModal_vue_vue_type_template_id_37f67454__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Versions/Show/Screen/Create/CreateOrUpdateVersionModal.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Versions/Show/Screen/Create/CreateOrUpdateVersionModal.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/Pages/Versions/Show/Screen/Create/CreateOrUpdateVersionModal.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CreateOrUpdateVersionModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CreateOrUpdateVersionModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CreateOrUpdateVersionModal.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Screen/Create/CreateOrUpdateVersionModal.vue?vue&type=script&lang=js");


/***/ }),

/***/ "./resources/js/Pages/Versions/Show/Screen/Create/CreateOrUpdateVersionModal.vue?vue&type=template&id=37f67454":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/Pages/Versions/Show/Screen/Create/CreateOrUpdateVersionModal.vue?vue&type=template&id=37f67454 ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CreateOrUpdateVersionModal_vue_vue_type_template_id_37f67454__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CreateOrUpdateVersionModal_vue_vue_type_template_id_37f67454__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CreateOrUpdateVersionModal.vue?vue&type=template&id=37f67454 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Screen/Create/CreateOrUpdateVersionModal.vue?vue&type=template&id=37f67454");


/***/ })

}]);
