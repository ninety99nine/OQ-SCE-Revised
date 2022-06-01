"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Versions_Show_Screen_ScreenDisplays_Create_DeleteScreenModal_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Create/DeleteScreenModal.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Create/DeleteScreenModal.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Modal_DefaultModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/Modal/DefaultModal */ "./resources/js/Components/Modal/DefaultModal.vue");
/* harmony import */ var _stores_VersionBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stores/VersionBuilder */ "./resources/js/Stores/VersionBuilder.js");
/* harmony import */ var _components_Button_PrimaryButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/Button/PrimaryButton */ "./resources/js/Components/Button/PrimaryButton.vue");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    DefaultModal: _components_Modal_DefaultModal__WEBPACK_IMPORTED_MODULE_0__["default"],
    PrimaryButton: _components_Button_PrimaryButton__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: {
    screen: Object,
    showButton: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      useVersionBuilder: (0,_stores_VersionBuilder__WEBPACK_IMPORTED_MODULE_1__.useVersionBuilder)()
    };
  },
  methods: {
    deleteScreen: function deleteScreen(closeModal) {
      //  Check if we have selected this screen for veiwing
      var hasSelectedCurrentScreen = this.useVersionBuilder.hasSelectedSpecificScreen(this.screen); //  Remove the current screen

      this.useVersionBuilder.removeScreen(this.screen); //  Check if we have a screen marked as the first display dcreen

      var hasScreenMarkedAsFirstDisplayScreen = this.useVersionBuilder.hasScreenMarkedAsFirstDisplayScreen();

      if (this.useVersionBuilder.hasScreens) {
        if (hasScreenMarkedAsFirstDisplayScreen == false) {
          //  Mark the first screen as the first display dcreen
          this.useVersionBuilder.markScreenAsFirstDisplayScreen(this.useVersionBuilder.screens[0]);
        }
      } //  Switch to another screen if this screen is selected for veiwing


      if (hasSelectedCurrentScreen) this.useVersionBuilder.selectRecomendedScreen();
      this.$message({
        message: 'Screen deleted successfully',
        type: 'success'
      });
      closeModal();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Create/DeleteScreenModal.vue?vue&type=template&id=4c042f39":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Create/DeleteScreenModal.vue?vue&type=template&id=4c042f39 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Delete Screen");

var _hoisted_2 = {
  "class": "text-sm text-gray-500 mb-5"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Are you sure you want to delete the ");

var _hoisted_4 = {
  "class": "text-blue-500 font-bold"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" screen. After this screen is deleted you cannot recover it again.");

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "class": "h-3 w-3",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "fill-rule": "evenodd",
  d: "M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z",
  "clip-rule": "evenodd"
})], -1
/* HOISTED */
);

var _hoisted_7 = {
  key: 1,
  name: "trigger",
  xmlns: "http://www.w3.org/2000/svg",
  "class": "h-4 w-4 mr-2 hover:text-red-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "2"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
}, null, -1
/* HOISTED */
);

var _hoisted_9 = [_hoisted_8];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_PrimaryButton = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("PrimaryButton");

  var _component_DefaultModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DefaultModal");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Modal "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DefaultModal, {
    defaultText: "Cancel",
    onOpen: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.$emit('open');
    }),
    onClose: _cache[1] || (_cache[1] = function ($event) {
      return _ctx.$emit('close');
    }),
    dangerText: "Delete Screen",
    dangerAction: $options.deleteScreen
  }, {
    title: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_1];
    }),
    trigger: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [$props.showButton ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_PrimaryButton, {
        key: 0,
        name: "trigger",
        "class": "px-3"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_6];
        }),
        _: 1
        /* STABLE */

      })) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_7, _hoisted_9))];
    }),
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.screen.name), 1
      /* TEXT */
      ), _hoisted_5])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["dangerAction"])], 2112
  /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }


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
    screens: function screens(state) {
      var _state$builder$screen;

      return (_state$builder$screen = state.builder.screens) !== null && _state$builder$screen !== void 0 ? _state$builder$screen : [];
    },
    hasScreens: function hasScreens(state) {
      return this.screens.length;
    },
    filteredScreens: function filteredScreens(state) {
      return state.filterScreenSearch ? this.searchScreens(state.filterScreenSearch) : this.screens;
    },
    events: function events(state) {
      var _state$builder$events;

      return (_state$builder$events = state.builder.events) !== null && _state$builder$events !== void 0 ? _state$builder$events : [];
    },
    displays: function displays(state) {
      var _state$builder$displa;

      return (_state$builder$displa = state.builder.displays) !== null && _state$builder$displa !== void 0 ? _state$builder$displa : [];
    },
    filteredEvents: function filteredEvents(state) {
      return state.filterEventSearch ? _this.searchEvents(state.filterEventSearch) : _this.events;
    },
    filteredScreenDisplays: function filteredScreenDisplays(state) {
      return state.filterDisplaySearch ? _this.searchScreenDisplays(state.filterDisplaySearch) : _this.displays;
    }
  },
  actions: {
    setBuilder: function setBuilder(builder) {
      this.builder = builder ? builder : {};
    },
    selectScreen: function selectScreen(input) {
      if (_typeof(input) === 'object') {
        var screen = input;
        this.selectedScreen = screen;
      } else if (typeof input === 'string') {
        var screenId = input;
        this.selectedScreen = this.searchScreens(screenId)[0];
      }
    },
    selectRecomendedScreen: function selectRecomendedScreen() {
      //  If we have screens
      if (this.screens.length) {
        //  Check existence of screen marked as the first screen
        if (this.hasScreenMarkedAsFirstDisplayScreen()) {
          //  Get the screen marked as the first display screen
          var screenMarkedAsFirstDisplay = this.getScreenMarkedAsFirstDisplayScreen(); //  Set the screen as the first to show

          this.selectScreen(screenMarkedAsFirstDisplay);
        } else {
          //  Otherwise get the first listed screen
          this.selectScreen(this.screens[0]);
        }
      }
    },
    hasSelectedSpecificScreen: function hasSelectedSpecificScreen(input) {
      if (_typeof(input) === 'object') {
        var screen = input;
        return this.selectedScreen.id == screen.id;
      } else if (typeof input === 'string') {
        var screenId = input;
        return this.selectedScreen.id == screenId;
      } else {
        return false;
      }
    },
    hasScreenMarkedAsFirstDisplayScreen: function hasScreenMarkedAsFirstDisplayScreen() {
      /**
       *  Check if we have at least one screen marked as the first display screen
       */
      return this.screens.filter(function (screen) {
        return screen.first_display_screen == true;
      }).length ? true : false;
    },
    getScreenMarkedAsFirstDisplayScreen: function getScreenMarkedAsFirstDisplayScreen() {
      /**
       *  Return the first screen marked as the first display screen
       */
      return this.screens.find(function (screen) {
        return screen.first_display_screen == true;
      });
    },
    markScreenAsFirstDisplayScreen: function markScreenAsFirstDisplayScreen(screen) {
      var currScreen = this.searchScreen(screen);
      if (currScreen) currScreen['first_display_screen'] = true;
    },
    searchScreens: function searchScreens(search) {
      return this.screens.filter(function (screen) {
        var matchesScreenId = screen.id.toLowerCase().includes(search.toLowerCase());
        var matchesScreenName = screen.name.toLowerCase().includes(search.toLowerCase());
        return matchesScreenId || matchesScreenName;
      });
    },
    searchScreen: function searchScreen(input) {
      if (_typeof(input) === 'object') {
        var currScreen = input;
        return this.screens.find(function (screen) {
          return screen.id === currScreen.id;
        });
      } else if (typeof input === 'string') {
        var screenId = input;
        return this.screens.find(function (screen) {
          return screen.id === screenId;
        });
      }
    },
    getBlankScreen: function getBlankScreen() {
      /** Determine whether this must be the first display screen by default.
       *  Generally if we don't already have any screen assigned as the
       *  first display screen, then we make this screen the first
       *  display screen by default.
       */
      var isFirstDisplayScreen = this.hasScreenMarkedAsFirstDisplayScreen() == false;
      return {
        id: 'screen_' + this.generateId(),
        name: '',
        events: {
          on_enter: [],
          on_leave: [],
          on_response: []
        },
        repeat: {
          active: {
            selected_type: 'no',
            code: ''
          },
          selected_type: 'repeat_on_number',
          //  repeat_on_number, repeat_on_items, custom_repeat
          repeat_on_number: {
            value: {
              text: '3',
              code_editor_text: '',
              code_editor_mode: false
            },
            total_loops_reference_name: 'total_items',
            loop_index_reference_name: 'loop_index',
            loop_number_reference_name: 'loop_number',
            is_first_loop_reference_name: 'is_first_loop',
            is_last_loop_reference_name: 'is_last_loop',
            on_no_loop: {
              selected_type: 'do_nothing',
              //  do_nothing, link
              link: {
                text: '',
                code_editor_text: '',
                code_editor_mode: false
              }
            },
            after_last_loop: {
              selected_type: 'do_nothing',
              //  do_nothing, link
              link: {
                text: '',
                code_editor_text: '',
                code_editor_mode: false
              }
            }
          },
          repeat_on_items: {
            group_reference: {
              text: '{{ items }}',
              code_editor_text: '',
              code_editor_mode: false
            },
            item_reference_name: 'item',
            total_loops_reference_name: 'total_items',
            loop_index_reference_name: 'item_index',
            loop_number_reference_name: 'item_number',
            is_first_loop_reference_name: 'is_first_item',
            is_last_loop_reference_name: 'is_last_item',
            on_no_loop: {
              selected_type: 'do_nothing',
              //  do_nothing, link
              link: {
                text: '',
                code_editor_text: '',
                code_editor_mode: false
              }
            },
            after_last_loop: {
              selected_type: 'do_nothing',
              //  do_nothing, link
              link: {
                text: '',
                code_editor_text: '',
                code_editor_mode: false
              }
            }
          }
        },
        first_display_screen: isFirstDisplayScreen,
        conditional_displays: {
          active: false,
          code: null
        },
        displays: [],
        markers: []
      };
    },
    getClonedScreen: function getClonedScreen(screen) {
      var clonedScreen = Object.assign({}, screen);
      delete clonedScreen.first_display_screen;
      delete clonedScreen.id;
      return _objectSpread(_objectSpread({}, this.getBlankScreen()), clonedScreen);
    },
    addScreen: function addScreen(screen) {
      this.screens.push(screen);
    },
    removeScreen: function removeScreen(input) {
      if (_typeof(input) === 'object') {
        var screen = input;
        var index = this.screens.map(function (screen) {
          return screen.id;
        }).indexOf(screen.id);
        this.removeScreenByIndex(index);
      } else if (typeof input === 'string') {
        var screenId = input;

        var _index = this.screens.map(function (screen) {
          return screen.id;
        }).indexOf(screenId);

        this.removeScreenByIndex(_index);
      }
    },
    removeScreenByIndex: function removeScreenByIndex(index) {
      this.screens.splice(index, 1);
    },
    generateId: function generateId() {
      return Date.now();
    },
    selectDisplay: function selectDisplay(id) {
      this.selectedDisplay = this.searchScreenDisplays(id)[0];
    },
    searchEvents: function searchEvents(search) {
      return _this.events.filter(function (event) {
        var matchesEventId = event.id.toLowerCase().includes(search.toLowerCase());
        var matchesEventName = event.name.toLowerCase().includes(search.toLowerCase());
        return matchesEventId || matchesEventName;
      });
    },
    searchEventById: function searchEventById(eventId) {
      return _this.events.find(function (event) {
        return event.id === eventId;
      });
    },
    searchScreenDisplays: function searchScreenDisplays(search) {
      return _this.displays.filter(function (display) {
        var matchesDisplayId = display.id.toLowerCase().includes(search.toLowerCase());
        var matchesDisplayName = display.name.toLowerCase().includes(search.toLowerCase());
        return matchesDisplayId || matchesDisplayName;
      });
    },
    searchDisplayById: function searchDisplayById(displayId) {
      return _this.displays.find(function (display) {
        return display.id === displayId;
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Create/DeleteScreenModal.vue":
/*!*********************************************************************************************!*\
  !*** ./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Create/DeleteScreenModal.vue ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DeleteScreenModal_vue_vue_type_template_id_4c042f39__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DeleteScreenModal.vue?vue&type=template&id=4c042f39 */ "./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Create/DeleteScreenModal.vue?vue&type=template&id=4c042f39");
/* harmony import */ var _DeleteScreenModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DeleteScreenModal.vue?vue&type=script&lang=js */ "./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Create/DeleteScreenModal.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_juliantabona_Sites_laravel_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_juliantabona_Sites_laravel_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_DeleteScreenModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_DeleteScreenModal_vue_vue_type_template_id_4c042f39__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Create/DeleteScreenModal.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Create/DeleteScreenModal.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Create/DeleteScreenModal.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DeleteScreenModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DeleteScreenModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DeleteScreenModal.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Create/DeleteScreenModal.vue?vue&type=script&lang=js");


/***/ }),

/***/ "./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Create/DeleteScreenModal.vue?vue&type=template&id=4c042f39":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Create/DeleteScreenModal.vue?vue&type=template&id=4c042f39 ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DeleteScreenModal_vue_vue_type_template_id_4c042f39__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DeleteScreenModal_vue_vue_type_template_id_4c042f39__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DeleteScreenModal.vue?vue&type=template&id=4c042f39 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Create/DeleteScreenModal.vue?vue&type=template&id=4c042f39");


/***/ })

}]);
