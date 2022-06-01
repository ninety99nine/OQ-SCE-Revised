"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Versions_Show_Screen_ScreenMenu_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Screen/ScreenMenu.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Screen/ScreenMenu.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _stores_VersionBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stores/VersionBuilder */ "./resources/js/Stores/VersionBuilder.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['screen'],
  data: function data() {
    return {
      hovering: false,
      useVersionBuilder: (0,_stores_VersionBuilder__WEBPACK_IMPORTED_MODULE_0__.useVersionBuilder)()
    };
  },
  computed: {
    active: function active() {
      return this.screen.id === (this.useVersionBuilder.selectedScreen || {}).id;
    }
  },
  methods: {
    selectScreen: function selectScreen() {
      this.useVersionBuilder.selectScreen(this.screen.id);
    },
    deleteScreen: function deleteScreen() {},
    duplicateScreen: function duplicateScreen() {}
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Screen/ScreenMenu.vue?vue&type=template&id=30ea5457":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Screen/ScreenMenu.vue?vue&type=template&id=30ea5457 ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "flex justify-end"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
}, null, -1
/* HOISTED */
);

var _hoisted_3 = [_hoisted_2];

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
}, null, -1
/* HOISTED */
);

var _hoisted_5 = [_hoisted_4];

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "class": "h-4 w-4 cursor-grab hover:text-blue-500 active:cursor-grabbing draggble-screen-handle",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M4 6h16M4 10h16M4 14h16M4 18h16"
})], -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
    onMouseover: _cache[2] || (_cache[2] = function ($event) {
      return $data.hovering = true;
    }),
    onMouseleave: _cache[3] || (_cache[3] = function ($event) {
      return $data.hovering = false;
    }),
    onClick: _cache[4] || (_cache[4] = function () {
      return $options.selectScreen && $options.selectScreen.apply($options, arguments);
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
      'bg-blue-50 shadow': $data.hovering,
      'bg-blue-100 shadow': $options.active
    }, "text-xs text-gray-700 flex justify-between rounded-md cursor-pointer p-2 mb-1"])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-blue-500 font-semibold': $options.active
    })
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.screen.name), 3
  /* TEXT, CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $options.deleteScreen();
    }),
    "class": "h-4 w-4 mr-2 hover:text-red-500",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "stroke-width": "2"
  }, _hoisted_3)), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $options.duplicateScreen();
    }),
    "class": "h-4 w-4 mr-2 hover:text-blue-500",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "stroke-width": "2"
  }, _hoisted_5)), _hoisted_6], 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $data.hovering]])], 34
  /* CLASS, HYDRATE_EVENTS */
  );
}

/***/ }),

/***/ "./resources/js/Stores/VersionBuilder.js":
/*!***********************************************!*\
  !*** ./resources/js/Stores/VersionBuilder.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useVersionBuilder": () => (/* binding */ useVersionBuilder)
/* harmony export */ });
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pinia */ "./node_modules/pinia/dist/pinia.esm-browser.js");
var _this = undefined;


/**
 *  Reference: https://pinia.vuejs.org/core-concepts/
 */

var useVersionBuilder = (0,pinia__WEBPACK_IMPORTED_MODULE_0__.defineStore)('version_builder', {
  state: function state() {
    return {
      builder: {},
      selectedScreen: null,
      selectedDisplay: null,
      filterEventSearch: '',
      filterScreenSearch: '',
      filterDisplaySearch: ''
    };
  },

  /**
   *  Add comments foreach getter to offer typescript support
   */
  getters: {
    events: function events(state) {
      var _state$builder$events;

      return (_state$builder$events = state.builder.events) !== null && _state$builder$events !== void 0 ? _state$builder$events : [];
    },
    screens: function screens(state) {
      var _state$builder$screen;

      return (_state$builder$screen = state.builder.screens) !== null && _state$builder$screen !== void 0 ? _state$builder$screen : [];
    },
    displays: function displays(state) {
      var _state$builder$displa;

      return (_state$builder$displa = state.builder.displays) !== null && _state$builder$displa !== void 0 ? _state$builder$displa : [];
    },
    filteredEvents: function filteredEvents(state) {
      return state.filterEventSearch ? _this.searchEvents(state.filterEventSearch) : _this.events;
    },
    filteredScreens: function filteredScreens(state) {
      var screens = state.filterScreenSearch ? this.searchScreens(state.filterScreenSearch) : this.screens;
      return screens;
    },
    filteredScreenDisplays: function filteredScreenDisplays(state) {
      return state.filterDisplaySearch ? _this.searchScreenDisplays(state.filterDisplaySearch) : _this.displays;
    }
  },
  actions: {
    setBuilder: function setBuilder(builder) {
      this.builder = builder ? builder : {};
    },
    selectScreen: function selectScreen(id) {
      this.selectedScreen = this.searchScreens(id)[0];
    },
    selectDisplay: function selectDisplay(id) {
      this.selectedDisplay = this.searchScreenDisplays(id)[0];
    },
    getEventById: function getEventById(eventId) {
      return _this.events.find(function (event) {
        return event.id === eventId;
      });
    },
    searchScreenById: function searchScreenById(screenId) {
      return _this.screens.find(function (screen) {
        return screen.id === screenId;
      });
    },
    getDisplayById: function getDisplayById(displayId) {
      return _this.displays.find(function (display) {
        return display.id === displayId;
      });
    },
    searchEvents: function searchEvents(search) {
      return _this.events.filter(function (event) {
        var matchesEventId = event.id.toLowerCase().includes(search.toLowerCase());
        var matchesEventName = event.name.toLowerCase().includes(search.toLowerCase());
        return matchesEventId || matchesEventName;
      });
    },
    searchScreens: function searchScreens(search) {
      return this.screens.filter(function (screen) {
        var matchesScreenId = screen.id.toLowerCase().includes(search.toLowerCase());
        var matchesScreenName = screen.name.toLowerCase().includes(search.toLowerCase());
        return matchesScreenId || matchesScreenName;
      });
    },
    searchScreenDisplays: function searchScreenDisplays(search) {
      return _this.displays.filter(function (display) {
        var matchesDisplayId = display.id.toLowerCase().includes(search.toLowerCase());
        var matchesDisplayName = display.name.toLowerCase().includes(search.toLowerCase());
        return matchesDisplayId || matchesDisplayName;
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/Pages/Versions/Show/Screen/ScreenMenu.vue":
/*!****************************************************************!*\
  !*** ./resources/js/Pages/Versions/Show/Screen/ScreenMenu.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ScreenMenu_vue_vue_type_template_id_30ea5457__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ScreenMenu.vue?vue&type=template&id=30ea5457 */ "./resources/js/Pages/Versions/Show/Screen/ScreenMenu.vue?vue&type=template&id=30ea5457");
/* harmony import */ var _ScreenMenu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ScreenMenu.vue?vue&type=script&lang=js */ "./resources/js/Pages/Versions/Show/Screen/ScreenMenu.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_juliantabona_Sites_laravel_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_juliantabona_Sites_laravel_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ScreenMenu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ScreenMenu_vue_vue_type_template_id_30ea5457__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Versions/Show/Screen/ScreenMenu.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Versions/Show/Screen/ScreenMenu.vue?vue&type=script&lang=js":
/*!****************************************************************************************!*\
  !*** ./resources/js/Pages/Versions/Show/Screen/ScreenMenu.vue?vue&type=script&lang=js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ScreenMenu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ScreenMenu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ScreenMenu.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Screen/ScreenMenu.vue?vue&type=script&lang=js");


/***/ }),

/***/ "./resources/js/Pages/Versions/Show/Screen/ScreenMenu.vue?vue&type=template&id=30ea5457":
/*!**********************************************************************************************!*\
  !*** ./resources/js/Pages/Versions/Show/Screen/ScreenMenu.vue?vue&type=template&id=30ea5457 ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ScreenMenu_vue_vue_type_template_id_30ea5457__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ScreenMenu_vue_vue_type_template_id_30ea5457__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ScreenMenu.vue?vue&type=template&id=30ea5457 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Screen/ScreenMenu.vue?vue&type=template&id=30ea5457");


/***/ })

}]);
