"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Versions_Show_Screen_ScreenDisplays_Display_Display_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Tabs/DefaultTabs.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Tabs/DefaultTabs.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    color: {
      type: String,
      "default": 'blue'
    },
    tabs: {
      type: Array,
      "default": function _default() {
        return [
          /*  Example Below
          {
              label: 'Example 1',
              active: true
          },
          {
              label: 'Example 2',
              active: false
          },
          {
              label: 'Example 3',
              active: false
          }
          */
        ];
      }
    }
  },
  data: function data() {
    return {};
  },
  methods: {
    isFirst: function isFirst(index) {
      return index === 0;
    },
    isLast: function isLast(index) {
      return index === this.tabs.length - 1;
    },
    onClick: function onClick(tab, index) {
      for (var i = 0; i < this.tabs.length; i++) {
        this.tabs[i]['active'] = false;
      }

      this.tabs[index]['active'] = true;
      this.$emit('click', index, tab, this.tabs);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Display/Display.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Display/Display.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DisplayAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DisplayAction */ "./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Display/DisplayAction/index.vue");
/* harmony import */ var _DisplayEvents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DisplayEvents */ "./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Display/DisplayEvents/index.vue");
/* harmony import */ var _DisplayNavigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DisplayNavigation */ "./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Display/DisplayNavigation/index.vue");
/* harmony import */ var _DisplayPagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DisplayPagination */ "./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Display/DisplayPagination/index.vue");
/* harmony import */ var _DisplayInstruction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DisplayInstruction */ "./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Display/DisplayInstruction/index.vue");
/* harmony import */ var _components_Tabs_DefaultTabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/Tabs/DefaultTabs */ "./resources/js/Components/Tabs/DefaultTabs.vue");
/* harmony import */ var _components_Input_DefaultInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/Input/DefaultInput */ "./resources/js/Components/Input/DefaultInput.vue");
/* harmony import */ var _stores_VersionBuilder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @stores/VersionBuilder */ "./resources/js/Stores/VersionBuilder.js");








/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    DisplayInstruction: _DisplayInstruction__WEBPACK_IMPORTED_MODULE_4__["default"],
    DisplayAction: _DisplayAction__WEBPACK_IMPORTED_MODULE_0__["default"],
    DisplayNavigation: _DisplayNavigation__WEBPACK_IMPORTED_MODULE_2__["default"],
    DisplayEvents: _DisplayEvents__WEBPACK_IMPORTED_MODULE_1__["default"],
    DisplayPagination: _DisplayPagination__WEBPACK_IMPORTED_MODULE_3__["default"],
    DefaultTabs: _components_Tabs_DefaultTabs__WEBPACK_IMPORTED_MODULE_5__["default"],
    DefaultInput: _components_Input_DefaultInput__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  data: function data() {
    return {
      useVersionBuilder: (0,_stores_VersionBuilder__WEBPACK_IMPORTED_MODULE_7__.useVersionBuilder)(),
      tabs: [{
        label: 'Instruction',
        active: true,
        value: 1
      }, {
        label: 'Action',
        active: false,
        value: 2
      }, {
        label: 'Events',
        active: false,
        value: 3
      }, {
        label: 'Pagination',
        active: false,
        value: 4
      }, {
        label: 'Navigation',
        active: false,
        value: 5
      }]
    };
  },
  computed: {
    display: function display() {
      return this.useVersionBuilder.selectedDisplay;
    },
    activeTab: function activeTab() {
      return this.tabs.find(function (tab) {
        return tab.active;
      }).value;
    }
  },
  methods: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Display/DisplayAction/index.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Display/DisplayAction/index.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Display/DisplayEvents/index.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Display/DisplayEvents/index.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Display/DisplayInstruction/index.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Display/DisplayInstruction/index.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Display/DisplayNavigation/index.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Display/DisplayNavigation/index.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Display/DisplayPagination/index.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Display/DisplayPagination/index.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Tabs/DefaultTabs.vue?vue&type=template&id=73762379":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Tabs/DefaultTabs.vue?vue&type=template&id=73762379 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "text-xs font-medium text-center text-gray-500 cursor-pointer rounded-lg divide-x divide-gray-200 shadow sm:flex"
};
var _hoisted_2 = ["onClick"];
var _hoisted_3 = {
  key: 1,
  "class": "bg-green-50"
};
var _hoisted_4 = {
  key: 2,
  "class": "bg-green-100"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("ul", _hoisted_1, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.tabs, function (tab, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(['flex items-center justify-center p-2 w-full', {
        'rounded-l-lg': $options.isFirst(index) && !$options.isLast(index),
        'rounded-r-lg': !$options.isFirst(index) && $options.isLast(index)
      }, tab.active ? 'text-' + $props.color + '-500 bg-' + $props.color + '-100' : 'text-gray-700 bg-white']),
      key: tab.label,
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
        return $options.onClick(tab, index);
      }, ["stop"])
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(tab.label), 1
    /* TEXT */
    ), tab.count ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
      key: 0,
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(['inline-flex items-center py-1 px-2 ml-2 text-xs text-' + $props.color + '-500 rounded-full', tab.active ? 'font-semibold bg-' + $props.color + '-50 border border-white' : 'border'])
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(tab.count), 3
    /* TEXT, CLASS */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Just to load the tailwind css color classes i need here "),  false ? (0) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),  false ? (0) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10
    /* CLASS, PROPS */
    , _hoisted_2);
  }), 128
  /* KEYED_FRAGMENT */
  ))]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Display/Display.vue?vue&type=template&id=5febede2":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Display/Display.vue?vue&type=template&id=5febede2 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  key: 0
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_DefaultInput = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DefaultInput");

  var _component_DefaultTabs = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DefaultTabs");

  var _component_DisplayInstruction = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DisplayInstruction");

  var _component_DisplayAction = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DisplayAction");

  var _component_DisplayEvents = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DisplayEvents");

  var _component_DisplayPagination = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DisplayPagination");

  var _component_DisplayNavigation = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DisplayNavigation");

  return $options.display ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DefaultInput, {
    modelValue: $options.display.name,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $options.display.name = $event;
    }),
    placeholder: "Home",
    "class": "mb-6"
  }, null, 8
  /* PROPS */
  , ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DefaultTabs, {
    tabs: $data.tabs,
    "class": "mb-8",
    color: "green"
  }, null, 8
  /* PROPS */
  , ["tabs"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DisplayInstruction, null, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $options.activeTab == 1]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DisplayAction, null, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $options.activeTab == 2]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DisplayEvents, null, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $options.activeTab == 3]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DisplayPagination, null, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $options.activeTab == 4]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DisplayNavigation, null, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $options.activeTab == 5]])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Display/DisplayAction/index.vue?vue&type=template&id=eb818c30":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Display/DisplayAction/index.vue?vue&type=template&id=eb818c30 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return " Action ";
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Display/DisplayEvents/index.vue?vue&type=template&id=374f9d0b":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Display/DisplayEvents/index.vue?vue&type=template&id=374f9d0b ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return " Events ";
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Display/DisplayInstruction/index.vue?vue&type=template&id=d80a5f1c":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Display/DisplayInstruction/index.vue?vue&type=template&id=d80a5f1c ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return " Instruction ";
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Display/DisplayNavigation/index.vue?vue&type=template&id=3eeb24c6":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Display/DisplayNavigation/index.vue?vue&type=template&id=3eeb24c6 ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return " Navigation ";
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Display/DisplayPagination/index.vue?vue&type=template&id=96c0ba68":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Display/DisplayPagination/index.vue?vue&type=template&id=96c0ba68 ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return " Pagination ";
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
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


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
    totalScreens: function totalScreens(state) {
      return this.screens.length;
    },
    hasScreens: function hasScreens(state) {
      return this.totalScreens > 0;
    },
    filteredScreens: function filteredScreens(state) {
      return state.filterScreenSearch ? this.searchScreens(state.filterScreenSearch) : this.screens;
    },
    screenDisplays: function screenDisplays(state) {
      var _displays;

      return (_displays = (state.selectedScreen || {}).displays) !== null && _displays !== void 0 ? _displays : [];
    },
    totalScreenDisplays: function totalScreenDisplays(state) {
      return this.screenDisplays.length;
    },
    hasScreenDisplays: function hasScreenDisplays(state) {
      return this.totalScreenDisplays > 0;
    },
    filteredScreenDisplays: function filteredScreenDisplays(state) {
      return state.filterDisplaySearch ? this.searchScreenDisplays(state.filterDisplaySearch) : this.screenDisplays;
    },
    screenEvents: function screenEvents(state) {
      if (!state.selectedScreen) return [];
      return [].concat(_toConsumableArray(state.selectedScreen.events.on_enter), _toConsumableArray(state.selectedScreen.events.on_leave), _toConsumableArray(state.selectedScreen.events.on_response));
    },
    totalScreenEvents: function totalScreenEvents(state) {
      return this.screenEvents.length;
    },
    hasScreenEvents: function hasScreenEvents(state) {
      return this.totalScreenEvents > 0;
    }
  },
  actions: {
    setBuilder: function setBuilder(builder) {
      this.builder = builder ? builder : {};
    },
    generateId: function generateId() {
      return Date.now();
    },
    //  Screen Methods
    selectScreen: function selectScreen(input) {
      if (_typeof(input) === 'object') {
        var screen = input;
        this.selectedScreen = screen;
      } else if (typeof input === 'string') {
        var screenId = input;
        this.selectedScreen = this.searchScreens(screenId)[0];
      }
    },
    unselectScreen: function unselectScreen() {
      this.selectedScreen = null;
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
      var id = 'screen_' + this.generateId();
      return {
        id: id,
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
    //  Display Methods
    selectDisplay: function selectDisplay(input) {
      if (_typeof(input) === 'object') {
        var display = input;
        this.selectedDisplay = display;
      } else if (typeof input === 'string') {
        var displayId = input;
        this.selectedDisplay = this.searchScreenDisplays(displayId)[0];
      }
    },
    unselectDisplay: function unselectDisplay() {
      this.selectedDisplay = null;
    },
    selectRecomendedDisplay: function selectRecomendedDisplay() {
      //  If we have displays
      if (this.screenDisplays.length) {
        //  Check existence of display marked as the first display
        if (this.hasDisplayMarkedAsFirstDisplay()) {
          //  Get the display marked as the first display
          var displayMarkedAsFirstDisplay = this.getDisplayMarkedAsFirstDisplay(); //  Set the display as the first to show

          this.selectDisplay(displayMarkedAsFirstDisplay);
        } else {
          //  Otherwise get the first listed display
          this.selectDisplay(this.screenDisplays[0]);
        }
      }
    },
    hasSelectedSpecificDisplay: function hasSelectedSpecificDisplay(input) {
      if (this.selectedDisplay && _typeof(input) === 'object') {
        var display = input;
        return this.selectedDisplay.id == display.id;
      } else if (this.selectedDisplay && typeof input === 'string') {
        var displayId = input;
        return this.selectedDisplay.id == displayId;
      } else {
        return false;
      }
    },
    hasDisplayMarkedAsFirstDisplay: function hasDisplayMarkedAsFirstDisplay() {
      /**
       *  Check if we have at least one display marked as the first display
       */
      return this.screenDisplays.filter(function (display) {
        return display.first_display == true;
      }).length ? true : false;
    },
    getDisplayMarkedAsFirstDisplay: function getDisplayMarkedAsFirstDisplay() {
      /**
       *  Return the first display marked as the first display
       */
      return this.screenDisplays.find(function (display) {
        return display.first_display == true;
      });
    },
    markDisplayAsFirstDisplay: function markDisplayAsFirstDisplay(display) {
      var currDisplay = this.searchDisplay(display);
      if (currDisplay) currDisplay['first_display'] = true;
    },
    searchScreenDisplays: function searchScreenDisplays(search) {
      return this.screenDisplays.filter(function (display) {
        var matchesDisplayId = display.id.toLowerCase().includes(search.toLowerCase());
        var matchesDisplayName = display.name.toLowerCase().includes(search.toLowerCase());
        return matchesDisplayId || matchesDisplayName;
      });
    },
    searchDisplay: function searchDisplay(input) {
      if (_typeof(input) === 'object') {
        var currDisplay = input;
        return this.screenDisplays.find(function (display) {
          return display.id === currDisplay.id;
        });
      } else if (typeof input === 'string') {
        var displayId = input;
        return this.screenDisplays.find(function (display) {
          return display.id === displayId;
        });
      }
    },
    getBlankDisplay: function getBlankDisplay() {
      /** Determine whether this must be the first display by default.
       *  Generally if we don't already have any display assigned as the
       *  first display, then we make this display the first
       *  display by default.
       */
      var isFirstDisplay = this.hasDisplayMarkedAsFirstDisplay() == false;
      var id = 'display_' + this.generateId();
      return {
        id: id,
        name: '',
        hexColor: '#CECECE',
        first_display: isFirstDisplay,
        content: {
          //  Display marker settings
          markers: [],
          //  Display description settings
          description: {
            text: '',
            code_editor_text: '',
            code_editor_mode: false
          },
          //  Display action settings
          action: {
            selected_type: 'no_action',
            //  no_action, input_value, select_option
            input_value: {
              selected_type: 'single_value_input',
              //  single_value_input, multi_value_input
              single_value_input: {
                reference_name: null,
                link: {
                  text: '',
                  code_editor_text: '',
                  code_editor_mode: false
                }
              },
              multi_value_input: {
                separator: 'spaces',
                reference_names: ['first_name', 'last_name'],
                link: {
                  text: '',
                  code_editor_text: '',
                  code_editor_mode: false
                }
              }
            },
            select_option: {
              selected_type: 'static_options',
              //  static_options, dynamic_options, code_editor_options
              static_options: {
                options: [
                  /*  Example option
                  {
                      name: {
                          text: '1. My Option',
                          code_editor_text: '',
                          code_editor_mode: false
                      },
                      active: {
                          selected_type: 'yes',
                          code: ''
                      },
                      value: {
                          text: '',
                          code_editor_text: '',
                          code_editor_mode: false
                      },
                      input: {
                          text: '1',
                          code_editor_text: '',
                          code_editor_mode: false
                      },
                      separator: {
                          top: {
                              text: '',
                              code_editor_text: '',
                              code_editor_mode: false
                          },
                          bottom: {
                              text: '',
                              code_editor_text: '',
                              code_editor_mode: false
                          }
                      },
                      link:{
                          text: '',
                          code_editor_text: '',
                          code_editor_mode: false
                      },
                      hexColor: '#CECECE',
                      comment: ''
                  }
                  */
                ],
                reference_name: '',
                no_results_message: {
                  text: 'No options found',
                  code_editor_text: '',
                  code_editor_mode: false
                },
                incorrect_option_selected_message: {
                  text: 'You selected an incorrect option. Go back and try again',
                  code_editor_text: '',
                  code_editor_mode: false
                }
              },
              dynamic_options: {
                group_reference: {
                  text: '{{ items }}',
                  code_editor_text: '',
                  code_editor_mode: false
                },
                template_reference_name: 'item',
                template_display_name: {
                  text: '',
                  code_editor_text: '',
                  code_editor_mode: false
                },
                template_value: {
                  text: '',
                  code_editor_text: '',
                  code_editor_mode: false
                },
                reference_name: 'selected_item',
                no_results_message: {
                  text: 'No items found',
                  code_editor_text: '',
                  code_editor_mode: false
                },
                incorrect_option_selected_message: {
                  text: 'You selected an incorrect option. Go back and try again',
                  code_editor_text: '',
                  code_editor_mode: false
                },
                link: {
                  text: '',
                  code_editor_text: '',
                  code_editor_mode: false
                }
              },
              code_editor_options: {
                code_editor_text: null,
                reference_name: 'selected_item',
                no_results_message: {
                  text: 'No items found',
                  code_editor_text: '',
                  code_editor_mode: false
                },
                incorrect_option_selected_message: {
                  text: 'You selected an incorrect option. Go back and try again',
                  code_editor_text: '',
                  code_editor_mode: false
                }
              }
            }
          },
          //  Repeat navigation settings
          screen_repeat_navigation: {
            forward_navigation: [],
            backward_navigation: []
          },
          //  Event settings
          events: {
            on_enter: [],
            on_leave: [],
            on_response: []
          },
          //  Pagination settings
          pagination: {
            use_global_pagination: true,
            active: {
              selected_type: 'yes',
              code: ''
            },
            content_target: {
              selected_type: 'both' //  instruction, action, both

            },
            paginate_by_line_breaks: true,
            slice: {
              separation_type: 'words',
              //  characters, words
              start: {
                text: '0',
                code_editor_text: '',
                code_editor_mode: false
              },
              end: {
                text: '160',
                code_editor_text: '',
                code_editor_mode: false
              }
            },
            scroll_down: {
              name: {
                text: '99. Next',
                code_editor_text: '',
                code_editor_mode: false
              },
              input: {
                text: '99',
                code_editor_text: '',
                code_editor_mode: false
              },
              visible: true
            },
            scroll_up: {
              name: {
                text: '88. Prev',
                code_editor_text: '',
                code_editor_mode: false
              },
              input: {
                text: '88',
                code_editor_text: '',
                code_editor_mode: false
              },
              visible: true
            },
            trailing_end: {
              text: '...',
              code_editor_text: '',
              code_editor_mode: false
            },
            break_line_before_trail: false,
            break_line_after_trail: false
          }
        }
      };
    },
    getClonedDisplay: function getClonedDisplay(display) {
      var clonedDisplay = Object.assign({}, display);
      delete clonedDisplay.first_display;
      delete clonedDisplay.id;
      return _objectSpread(_objectSpread({}, this.getBlankDisplay()), clonedDisplay);
    },
    addDisplay: function addDisplay(display) {
      this.screenDisplays.push(display);
    },
    removeDisplay: function removeDisplay(input) {
      if (_typeof(input) === 'object') {
        var display = input;
        var index = this.screenDisplays.map(function (display) {
          return display.id;
        }).indexOf(display.id);
        this.removeDisplayByIndex(index);
      } else if (typeof input === 'string') {
        var displayId = input;

        var _index2 = this.screenDisplays.map(function (display) {
          return display.id;
        }).indexOf(displayId);

        this.removeDisplayByIndex(_index2);
      }
    },
    removeDisplayByIndex: function removeDisplayByIndex(index) {
      this.screenDisplays.splice(index, 1);
    }
  }
});

/***/ }),

/***/ "./resources/js/Components/Tabs/DefaultTabs.vue":
/*!******************************************************!*\
  !*** ./resources/js/Components/Tabs/DefaultTabs.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DefaultTabs_vue_vue_type_template_id_73762379__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DefaultTabs.vue?vue&type=template&id=73762379 */ "./resources/js/Components/Tabs/DefaultTabs.vue?vue&type=template&id=73762379");
/* harmony import */ var _DefaultTabs_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DefaultTabs.vue?vue&type=script&lang=js */ "./resources/js/Components/Tabs/DefaultTabs.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_juliantabona_Sites_laravel_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_juliantabona_Sites_laravel_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_DefaultTabs_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_DefaultTabs_vue_vue_type_template_id_73762379__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Components/Tabs/DefaultTabs.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Display/Display.vue":
/*!************************************************************************************!*\
  !*** ./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Display/Display.vue ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Display_vue_vue_type_template_id_5febede2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Display.vue?vue&type=template&id=5febede2 */ "./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Display/Display.vue?vue&type=template&id=5febede2");
/* harmony import */ var _Display_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Display.vue?vue&type=script&lang=js */ "./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Display/Display.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_juliantabona_Sites_laravel_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_juliantabona_Sites_laravel_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Display_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Display_vue_vue_type_template_id_5febede2__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Display/Display.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Display/DisplayAction/index.vue":
/*!************************************************************************************************!*\
  !*** ./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Display/DisplayAction/index.vue ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_eb818c30__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=eb818c30 */ "./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Display/DisplayAction/index.vue?vue&type=template&id=eb818c30");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Display/DisplayAction/index.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_juliantabona_Sites_laravel_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_juliantabona_Sites_laravel_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_index_vue_vue_type_template_id_eb818c30__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Display/DisplayAction/index.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Display/DisplayEvents/index.vue":
/*!************************************************************************************************!*\
  !*** ./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Display/DisplayEvents/index.vue ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_374f9d0b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=374f9d0b */ "./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Display/DisplayEvents/index.vue?vue&type=template&id=374f9d0b");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Display/DisplayEvents/index.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_juliantabona_Sites_laravel_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_juliantabona_Sites_laravel_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_index_vue_vue_type_template_id_374f9d0b__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Display/DisplayEvents/index.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Display/DisplayInstruction/index.vue":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Display/DisplayInstruction/index.vue ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_d80a5f1c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=d80a5f1c */ "./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Display/DisplayInstruction/index.vue?vue&type=template&id=d80a5f1c");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Display/DisplayInstruction/index.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_juliantabona_Sites_laravel_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_juliantabona_Sites_laravel_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_index_vue_vue_type_template_id_d80a5f1c__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Display/DisplayInstruction/index.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Display/DisplayNavigation/index.vue":
/*!****************************************************************************************************!*\
  !*** ./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Display/DisplayNavigation/index.vue ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_3eeb24c6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=3eeb24c6 */ "./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Display/DisplayNavigation/index.vue?vue&type=template&id=3eeb24c6");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Display/DisplayNavigation/index.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_juliantabona_Sites_laravel_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_juliantabona_Sites_laravel_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_index_vue_vue_type_template_id_3eeb24c6__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Display/DisplayNavigation/index.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Display/DisplayPagination/index.vue":
/*!****************************************************************************************************!*\
  !*** ./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Display/DisplayPagination/index.vue ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_96c0ba68__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=96c0ba68 */ "./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Display/DisplayPagination/index.vue?vue&type=template&id=96c0ba68");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Display/DisplayPagination/index.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_juliantabona_Sites_laravel_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_juliantabona_Sites_laravel_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_index_vue_vue_type_template_id_96c0ba68__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Display/DisplayPagination/index.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Components/Tabs/DefaultTabs.vue?vue&type=script&lang=js":
/*!******************************************************************************!*\
  !*** ./resources/js/Components/Tabs/DefaultTabs.vue?vue&type=script&lang=js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DefaultTabs_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DefaultTabs_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DefaultTabs.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Tabs/DefaultTabs.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Display/Display.vue?vue&type=script&lang=js":
/*!************************************************************************************************************!*\
  !*** ./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Display/Display.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Display_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Display_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Display.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Display/Display.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Display/DisplayAction/index.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Display/DisplayAction/index.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Display/DisplayAction/index.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Display/DisplayEvents/index.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Display/DisplayEvents/index.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Display/DisplayEvents/index.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Display/DisplayInstruction/index.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Display/DisplayInstruction/index.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Display/DisplayInstruction/index.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Display/DisplayNavigation/index.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Display/DisplayNavigation/index.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Display/DisplayNavigation/index.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Display/DisplayPagination/index.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Display/DisplayPagination/index.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Display/DisplayPagination/index.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Components/Tabs/DefaultTabs.vue?vue&type=template&id=73762379":
/*!************************************************************************************!*\
  !*** ./resources/js/Components/Tabs/DefaultTabs.vue?vue&type=template&id=73762379 ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DefaultTabs_vue_vue_type_template_id_73762379__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DefaultTabs_vue_vue_type_template_id_73762379__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DefaultTabs.vue?vue&type=template&id=73762379 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Tabs/DefaultTabs.vue?vue&type=template&id=73762379");


/***/ }),

/***/ "./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Display/Display.vue?vue&type=template&id=5febede2":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Display/Display.vue?vue&type=template&id=5febede2 ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Display_vue_vue_type_template_id_5febede2__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Display_vue_vue_type_template_id_5febede2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Display.vue?vue&type=template&id=5febede2 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Display/Display.vue?vue&type=template&id=5febede2");


/***/ }),

/***/ "./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Display/DisplayAction/index.vue?vue&type=template&id=eb818c30":
/*!******************************************************************************************************************************!*\
  !*** ./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Display/DisplayAction/index.vue?vue&type=template&id=eb818c30 ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_eb818c30__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_eb818c30__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=template&id=eb818c30 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Display/DisplayAction/index.vue?vue&type=template&id=eb818c30");


/***/ }),

/***/ "./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Display/DisplayEvents/index.vue?vue&type=template&id=374f9d0b":
/*!******************************************************************************************************************************!*\
  !*** ./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Display/DisplayEvents/index.vue?vue&type=template&id=374f9d0b ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_374f9d0b__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_374f9d0b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=template&id=374f9d0b */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Display/DisplayEvents/index.vue?vue&type=template&id=374f9d0b");


/***/ }),

/***/ "./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Display/DisplayInstruction/index.vue?vue&type=template&id=d80a5f1c":
/*!***********************************************************************************************************************************!*\
  !*** ./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Display/DisplayInstruction/index.vue?vue&type=template&id=d80a5f1c ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_d80a5f1c__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_d80a5f1c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=template&id=d80a5f1c */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Display/DisplayInstruction/index.vue?vue&type=template&id=d80a5f1c");


/***/ }),

/***/ "./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Display/DisplayNavigation/index.vue?vue&type=template&id=3eeb24c6":
/*!**********************************************************************************************************************************!*\
  !*** ./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Display/DisplayNavigation/index.vue?vue&type=template&id=3eeb24c6 ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_3eeb24c6__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_3eeb24c6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=template&id=3eeb24c6 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Display/DisplayNavigation/index.vue?vue&type=template&id=3eeb24c6");


/***/ }),

/***/ "./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Display/DisplayPagination/index.vue?vue&type=template&id=96c0ba68":
/*!**********************************************************************************************************************************!*\
  !*** ./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Display/DisplayPagination/index.vue?vue&type=template&id=96c0ba68 ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_96c0ba68__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_96c0ba68__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=template&id=96c0ba68 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Screen/ScreenDisplays/Display/DisplayPagination/index.vue?vue&type=template&id=96c0ba68");


/***/ })

}]);