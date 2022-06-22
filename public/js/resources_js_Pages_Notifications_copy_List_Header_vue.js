"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Notifications_copy_List_Header_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Notifications copy/List/Header.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Notifications copy/List/Header.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Select_DefaultSelect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/Select/DefaultSelect */ "./resources/js/Components/Select/DefaultSelect.vue");
/* harmony import */ var _components_SearchBar_DefaultSearchBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/SearchBar/DefaultSearchBar */ "./resources/js/Components/SearchBar/DefaultSearchBar.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['showingOnNotificationsMenu'],
  components: {
    DefaultSelect: _components_Select_DefaultSelect__WEBPACK_IMPORTED_MODULE_0__["default"],
    DefaultSearchBar: _components_SearchBar_DefaultSearchBar__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    var _this$route$params$ty;

    return {
      //  General stats
      totalNotifications: this.$page.props.statistics.totalNotifications,
      type: (_this$route$params$ty = this.route().params.type) !== null && _this$route$params$ty !== void 0 ? _this$route$params$ty : 'any',
      typeOptions: [{
        label: 'Any',
        value: 'any'
      }, {
        label: 'Success',
        value: 'success'
      }, {
        label: 'Fail',
        value: 'fail'
      }],
      selectedVersion: this.route().params.version,
      versionOptions: this.$page.props.versionOptions.map(function (option) {
        return {
          label: option.number,
          value: option.id
        };
      }),
      search: this.route().params.search,
      refreshContentInterval: null
    };
  },
  methods: {
    refreshContent: function refreshContent() {
      var url;

      if (route().current() === 'notifications.show') {
        url = route(route().current(), {
          project: this.route().params.project,
          app: this.route().params.app,
          version: this.selectedVersion
        });
      } else if (route().current() === 'account.notifications.show') {
        url = route(route().current(), {
          project: this.route().params.project,
          account: this.route().params.account,
          app: this.route().params.app,
          version: this.selectedVersion
        });
      }

      var data = {
        type: this.type,
        search: this.search
      };
      var options = {
        preserveScroll: true,
        preserveState: true,
        replace: true
      };
      this.$inertia.get(url, data, options);
    },
    cleanUp: function cleanUp() {
      clearInterval(this.refreshContentInterval);
      this.refreshContentInterval = null;
    }
  },
  created: function created() {
    //  Keep refreshing this page content every 3 seconds
    this.refreshContentInterval = setInterval(function () {
      this.refreshContent();
    }.bind(this), 3000);
  },
  unmounted: function unmounted() {
    this.cleanUp();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Notifications copy/List/Header.vue?vue&type=template&id=73f82ba5":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Notifications copy/List/Header.vue?vue&type=template&id=73f82ba5 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "flex items-center justify-between mb-6"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
  "class": "text-xl font-semibold text-gray-700 mb-2"
}, "Notifications", -1
/* HOISTED */
);

var _hoisted_3 = {
  "class": "flex divide-x border rounded-md py-2 px-6"
};
var _hoisted_4 = {
  "class": "text-center text-xs m-auto"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "mb-2 text-gray-400"
}, "Total", -1
/* HOISTED */
);

var _hoisted_6 = {
  "class": "flex items-end justify-between mb-6"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_DefaultSelect = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DefaultSelect");

  var _component_DefaultSearchBar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DefaultSearchBar");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([($data.totalNotifications == 0 ? 'text-gray-300' : 'text-blue-500') + ' font-semibold text-lg'])
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.totalNotifications), 3
  /* TEXT, CLASS */
  )])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DefaultSelect, {
    modelValue: $data.selectedVersion,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.selectedVersion = $event;
    }),
    options: $data.versionOptions,
    onChange: _cache[1] || (_cache[1] = function ($event) {
      return $options.refreshContent();
    }),
    label: "Filter by version",
    placeholder: "Select version",
    "class": "w-40"
  }, null, 8
  /* PROPS */
  , ["modelValue", "options"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DefaultSelect, {
    modelValue: $data.type,
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $data.type = $event;
    }),
    options: $data.typeOptions,
    onChange: _cache[3] || (_cache[3] = function ($event) {
      return $options.refreshContent();
    }),
    label: "Filter by type",
    placeholder: "Select type",
    "class": "w-40"
  }, null, 8
  /* PROPS */
  , ["modelValue", "options"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DefaultSearchBar, {
    modelValue: $data.search,
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $data.search = $event;
    }),
    onOnSearch: $options.refreshContent,
    placeholder: "Search notifications"
  }, null, 8
  /* PROPS */
  , ["modelValue", "onOnSearch"])])]);
}

/***/ }),

/***/ "./resources/js/Pages/Notifications copy/List/Header.vue":
/*!***************************************************************!*\
  !*** ./resources/js/Pages/Notifications copy/List/Header.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Header_vue_vue_type_template_id_73f82ba5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header.vue?vue&type=template&id=73f82ba5 */ "./resources/js/Pages/Notifications copy/List/Header.vue?vue&type=template&id=73f82ba5");
/* harmony import */ var _Header_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.vue?vue&type=script&lang=js */ "./resources/js/Pages/Notifications copy/List/Header.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_juliantabona_Sites_OQ_SCE_Revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_juliantabona_Sites_OQ_SCE_Revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Header_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Header_vue_vue_type_template_id_73f82ba5__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Notifications copy/List/Header.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Notifications copy/List/Header.vue?vue&type=script&lang=js":
/*!***************************************************************************************!*\
  !*** ./resources/js/Pages/Notifications copy/List/Header.vue?vue&type=script&lang=js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Header_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Header_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Header.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Notifications copy/List/Header.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Notifications copy/List/Header.vue?vue&type=template&id=73f82ba5":
/*!*********************************************************************************************!*\
  !*** ./resources/js/Pages/Notifications copy/List/Header.vue?vue&type=template&id=73f82ba5 ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Header_vue_vue_type_template_id_73f82ba5__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Header_vue_vue_type_template_id_73f82ba5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Header.vue?vue&type=template&id=73f82ba5 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Notifications copy/List/Header.vue?vue&type=template&id=73f82ba5");


/***/ })

}]);