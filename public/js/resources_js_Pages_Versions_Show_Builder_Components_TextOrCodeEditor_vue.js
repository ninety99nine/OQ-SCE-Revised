"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Versions_Show_Builder_Components_TextOrCodeEditor_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Alert/WarningAlert.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Alert/WarningAlert.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/CodeEditor/CodeEditor.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/CodeEditor/CodeEditor.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Error_DefaultError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Error/DefaultError */ "./resources/js/Components/Error/DefaultError.vue");
/* harmony import */ var _Alert_WarningAlert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Alert/WarningAlert */ "./resources/js/Components/Alert/WarningAlert.vue");
/* harmony import */ var simple_code_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! simple-code-editor */ "./node_modules/simple-code-editor/CodeEditor.vue");
/**
 *  Package Reference: https://github.com/justcaliturner/simple-code-editor
 */



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    DefaultError: _Error_DefaultError__WEBPACK_IMPORTED_MODULE_0__["default"],
    WarningAlert: _Alert_WarningAlert__WEBPACK_IMPORTED_MODULE_1__["default"],
    CodeEditor: simple_code_editor__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: {
    modelValue: {
      type: String
    },
    error: {
      type: String,
      "default": ''
    },
    wrap_code: {
      type: Boolean,
      "default": false
    },
    read_only: {
      type: Boolean,
      "default": false
    },
    autofocus: {
      type: Boolean,
      "default": false
    },
    hide_header: {
      type: Boolean,
      "default": false
    },
    width: {
      type: String,
      "default": "100%" //  540px

    },
    height: {
      type: String,
      "default": "auto"
    },
    max_width: {
      type: String
    },
    min_width: {
      type: String
    },
    max_height: {
      type: String
    },
    min_height: {
      type: String
    },
    border_radius: {
      type: String,
      "default": "12px"
    },
    language_selector: {
      type: Boolean,
      "default": false
    },
    languages: {
      type: Array,
      "default": function _default() {
        return [["PHP", "php"] //  ["cpp", "C++"],
        //  ["python", "Python"],
        ];
      }
    },
    selector_width: {
      type: String,
      "default": "110px"
    },
    selector_height: {
      type: String,
      "default": "auto"
    },
    selector_displayed_by_default: {
      type: Boolean,
      "default": false
    },
    display_language: {
      type: Boolean,
      "default": true
    },
    copy_code: {
      type: Boolean,
      "default": true
    },
    z_index: {
      type: String
    },
    font_size: {
      type: String,
      "default": "12px"
    },
    theme: {
      type: String,
      "default": "dark"
    }
  },
  data: function data() {
    return {
      localModelValue: this.modelValue
    };
  },
  watch: {
    modelValue: function modelValue(newValue, oldValue) {
      this.localModelValue = newValue;
    },
    localModelValue: function localModelValue(newValue, oldValue) {
      this.$emit('update:modelValue', newValue);
    }
  },
  created: function created() {
    //  If the code does not exist
    if (this.localModelValue === null || this.localModelValue === '') {
      //  Set the php tags
      this.localModelValue = '<?php\n\n?>';
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/TextEditor/TextEditor.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/TextEditor/TextEditor.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Error_DefaultError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../Error/DefaultError */ "./resources/js/Components/Error/DefaultError.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    DefaultError: _Error_DefaultError__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    modelValue: String,
    label: String,
    size: {
      type: String,
      "default": 'xs'
    },
    height: {
      type: String,
      "default": 'xs'
    },
    disabled: {
      type: Boolean,
      "default": false
    },
    read_only: {
      type: Boolean,
      "default": false
    },
    placeholder: String,
    error: {
      type: String,
      "default": ''
    }
  },
  data: function data() {
    return {
      isEditting: false,
      contentWithHtmlTags: null,
      contentWithoutHtmlTags: null,
      uniqueId: (0,lodash__WEBPACK_IMPORTED_MODULE_0__.uniqueId)('text-editor-')
    };
  },
  watch: {
    modelValue: function modelValue(newValue, oldValue) {
      this.setDynamicContent(newValue);
    }
  },
  computed: {
    minHeight: function minHeight() {
      if (this.height == 'lg') {
        return '12em';
      } else if (this.height == 'md') {
        return '8em';
      } else if (this.height == 'sm') {
        return '4em';
      } else if (this.height == 'xs') {
        return '0em';
      } else {
        return this.height + 'em';
      }
    }
  },
  methods: {
    onFocus: function onFocus() {
      if (this.read_only == false) {
        this.isEditting = true;
        this.setDynamicContent(this.$refs[this.uniqueId].innerText);
      }
    },
    onBlur: function onBlur() {
      if (this.read_only == false) {
        this.isEditting = false;
        this.setDynamicContent(this.$refs[this.uniqueId].innerText);
        this.$emit('update:modelValue', this.contentWithoutHtmlTags);
      }
    },
    setDynamicContent: function setDynamicContent() {
      var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      //  Insert dynamic content inside curly braces within span tags with special styles
      function wrapInHTMLTags(match, offset, string) {
        return '<span class="bg-blue-100 text-blue-900 shadow-sm rounded-md py-1 px-2 mx-1">' + match + '</span>';
      } //  Replace all matches with nothing (An empty string)


      function replaceWithNothing(match, offset, string) {
        return '';
      }

      if (text !== null) {
        //  This pattern searches for any HTML tags e.g <span ...> or </span>
        var pattern = /([<][a-zA-Z/!][^>]*[>])/g; //  Replace all HTML tags within the text string with nothing

        this.contentWithoutHtmlTags = text.replace(pattern, replaceWithNothing); //  This pattern searches for anything using curly braces e.g {{ user }}

        var pattern = /[{]{2}[\s]*[a-zA-Z_]{1}[a-zA-Z0-9_\.]{0,}[\s]*[}]{2}/g; //  Wrap text with curly braces in HTML tags

        this.contentWithHtmlTags = text.replace(pattern, wrapInHTMLTags);
      } //  Set the formatted text as the content


      this.content = text;
    }
  },
  created: function created() {
    this.setDynamicContent(this.modelValue);
  },
  beforeUnmount: function beforeUnmount() {
    this.onBlur();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Components/TextOrCodeEditor.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Components/TextOrCodeEditor.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../CodeEditor/HiddenCode'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './../Popover/InfoPopover'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../Switch/DefaultSwitch'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _components_TextEditor_TextEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/TextEditor/TextEditor */ "./resources/js/Components/TextEditor/TextEditor.vue");
/* harmony import */ var _components_CodeEditor_CodeEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/CodeEditor/CodeEditor */ "./resources/js/Components/CodeEditor/CodeEditor.vue");
var _props;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    InfoPopover: Object(function webpackMissingModule() { var e = new Error("Cannot find module './../Popover/InfoPopover'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    DefaultSwitch: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../Switch/DefaultSwitch'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    TextEditor: _components_TextEditor_TextEditor__WEBPACK_IMPORTED_MODULE_1__["default"],
    CodeEditor: _components_CodeEditor_CodeEditor__WEBPACK_IMPORTED_MODULE_2__["default"],
    HiddenCode: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../CodeEditor/HiddenCode'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
  },
  props: (_props = {
    //  Below are the text editor and code editor options
    modelValue: Object,
    error: String,
    label: String,
    note: String,
    info: String,
    showCode: {
      type: Boolean,
      "default": false
    },
    //  Below are the text editor options
    size: {
      type: String,
      "default": 'xs'
    },
    height: {
      type: String,
      "default": 'xs'
    },
    disabled: {
      type: Boolean,
      "default": false
    },
    read_only: {
      type: Boolean,
      "default": false
    },
    placeholder: String,
    //  Below are the code editor options
    wrap_code: {
      type: Boolean,
      "default": false
    }
  }, _defineProperty(_props, "read_only", {
    type: Boolean,
    "default": false
  }), _defineProperty(_props, "autofocus", {
    type: Boolean,
    "default": false
  }), _defineProperty(_props, "hide_header", {
    type: Boolean,
    "default": false
  }), _defineProperty(_props, "width", {
    type: String,
    "default": "100%" //  540px

  }), _defineProperty(_props, "height", {
    type: String,
    "default": "auto"
  }), _defineProperty(_props, "max_width", {
    type: String
  }), _defineProperty(_props, "min_width", {
    type: String
  }), _defineProperty(_props, "max_height", {
    type: String
  }), _defineProperty(_props, "min_height", {
    type: String
  }), _defineProperty(_props, "border_radius", {
    type: String,
    "default": "12px"
  }), _defineProperty(_props, "language_selector", {
    type: Boolean,
    "default": false
  }), _defineProperty(_props, "languages", {
    type: Array,
    "default": function _default() {
      return [["PHP", "php"] //  ["cpp", "C++"],
      //  ["python", "Python"],
      ];
    }
  }), _defineProperty(_props, "selector_width", {
    type: String,
    "default": "110px"
  }), _defineProperty(_props, "selector_height", {
    type: String,
    "default": "auto"
  }), _defineProperty(_props, "selector_displayed_by_default", {
    type: Boolean,
    "default": false
  }), _defineProperty(_props, "display_language", {
    type: Boolean,
    "default": true
  }), _defineProperty(_props, "copy_code", {
    type: Boolean,
    "default": true
  }), _defineProperty(_props, "z_index", {
    type: String
  }), _defineProperty(_props, "font_size", {
    type: String,
    "default": "12px"
  }), _defineProperty(_props, "theme", {
    type: String,
    "default": "dark"
  }), _props),
  data: function data() {
    return {};
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Alert/WarningAlert.vue?vue&type=template&id=4917051e":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Alert/WarningAlert.vue?vue&type=template&id=4917051e ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "inline-flex rounded-md py-2 px-4 bg-yellow-100 text-gray-800 text-xs"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  style: {
    width: '16px',
    height: '16px'
  },
  "class": "flex-none mr-2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "class": "w-full",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
})])], -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/CodeEditor/CodeEditor.vue?vue&type=template&id=231c2894":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/CodeEditor/CodeEditor.vue?vue&type=template&id=231c2894 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "flex items-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-gray-800 font-bold text-xs"
}, "Read Only"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-gray-600 text-xs ml-1 italic"
}, " ??? You cannot edit this code")], -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_WarningAlert = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("WarningAlert");

  var _component_CodeEditor = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("CodeEditor", true);

  var _component_DefaultError = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DefaultError");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [$props.read_only ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_WarningAlert, {
    key: 0,
    "class": "mt-2 mb-2 pb-2 border-b border-dotted"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_1];
    }),
    _: 1
    /* STABLE */

  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_CodeEditor, {
    modelValue: $data.localModelValue,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.localModelValue = $event;
    }),
    value: $data.localModelValue,
    wrap_code: $props.wrap_code,
    read_only: $props.read_only,
    autofocus: $props.autofocus,
    hide_header: $props.hide_header,
    width: $props.width,
    height: $props.height,
    max_width: $props.max_width,
    min_width: $props.min_width,
    max_height: $props.max_height,
    min_height: $props.min_height,
    border_radius: $props.border_radius,
    language_selector: $props.language_selector,
    languages: $props.languages,
    selector_width: $props.selector_width,
    selector_height: $props.selector_height,
    selector_displayed_by_default: $props.selector_displayed_by_default,
    display_language: $props.display_language,
    copy_code: $props.copy_code,
    z_index: $props.z_index,
    font_size: $props.font_size,
    theme: $props.theme
  }, null, 8
  /* PROPS */
  , ["modelValue", "value", "wrap_code", "read_only", "autofocus", "hide_header", "width", "height", "max_width", "min_width", "max_height", "min_height", "border_radius", "language_selector", "languages", "selector_width", "selector_height", "selector_displayed_by_default", "display_language", "copy_code", "z_index", "font_size", "theme"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DefaultError, {
    error: $props.error,
    "class": "mt-2"
  }, null, 8
  /* PROPS */
  , ["error"])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/TextEditor/TextEditor.vue?vue&type=template&id=7c49bed8":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/TextEditor/TextEditor.vue?vue&type=template&id=7c49bed8 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = ["for"];
var _hoisted_2 = ["innerHTML"];
var _hoisted_3 = ["id", "innerHTML", "placeholder"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_DefaultError = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DefaultError");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [$props.label ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("label", {
    key: 0,
    "for": $data.uniqueId,
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)('block mb-2 text-' + $props.size + ' font-medium text-gray-900')
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.label), 11
  /* TEXT, CLASS, PROPS */
  , _hoisted_1)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.read_only ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 1,
    innerHTML: $data.contentWithHtmlTags
  }, null, 8
  /* PROPS */
  , _hoisted_2)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 2,
    id: $data.uniqueId,
    ref: $data.uniqueId,
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(['editable-content-field bg-gray-50 border border-gray-300', $props.disabled ? 'text-gray-400 cursor-not-allowed' : 'text-gray-900', 'text-' + $props.size + ' rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5']),
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      minHeight: $options.minHeight
    }),
    innerHTML: $data.isEditting ? $data.contentWithoutHtmlTags : $data.contentWithHtmlTags,
    placeholder: $props.placeholder,
    contenteditable: true,
    resize: true,
    onFocus: _cache[0] || (_cache[0] = function ($event) {
      return $options.onFocus($event);
    }),
    onBlur: _cache[1] || (_cache[1] = function ($event) {
      return $options.onBlur($event);
    })
  }, null, 46
  /* CLASS, STYLE, PROPS, HYDRATE_EVENTS */
  , _hoisted_3)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DefaultError, {
    error: $props.error,
    "class": "mt-2"
  }, null, 8
  /* PROPS */
  , ["error"])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Components/TextOrCodeEditor.vue?vue&type=template&id=59794738":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Components/TextOrCodeEditor.vue?vue&type=template&id=59794738 ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "flex items-center mb-2"
};
var _hoisted_2 = {
  key: 1,
  "class": "text-xs text-gray-400 ml-2"
};
var _hoisted_3 = {
  key: 0
};
var _hoisted_4 = {
  "class": "flex justify-end"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Click to hide");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_DefaultSwitch = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DefaultSwitch");

  var _component_HiddenCode = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("HiddenCode");

  var _component_InfoPopover = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("InfoPopover");

  var _component_CodeEditor = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("CodeEditor");

  var _component_TextEditor = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("TextEditor");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Toggle Text/Code Editor Switch "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DefaultSwitch, {
    modelValue: $props.modelValue.code_editor_mode,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $props.modelValue.code_editor_mode = $event;
    }),
    label: $props.label
  }, null, 8
  /* PROPS */
  , ["modelValue", "label"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Hidden Code "), $props.modelValue.code_editor_mode == true && $props.showCode == false ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_HiddenCode, {
    key: 0,
    "class": "ml-4 cursor-pointer",
    expandable: true,
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $props.showCode = true;
    }),
    modelValue: $props.modelValue.code_editor_text,
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $props.modelValue.code_editor_text = $event;
    }),
    error: $props.error,
    wrap_code: $props.wrap_code,
    read_only: $props.read_only,
    autofocus: $props.autofocus,
    hide_header: $props.hide_header,
    width: $props.width,
    height: $props.height,
    max_width: $props.max_width,
    min_width: $props.min_width,
    max_height: $props.max_height,
    min_height: $props.min_height,
    border_radius: $props.border_radius,
    language_selector: $props.language_selector,
    languages: $props.languages,
    selector_width: $props.selector_width,
    selector_height: $props.selector_height,
    selector_displayed_by_default: $props.selector_displayed_by_default,
    display_language: $props.display_language,
    copy_code: $props.copy_code,
    z_index: $props.z_index,
    font_size: $props.font_size,
    theme: $props.theme
  }, null, 8
  /* PROPS */
  , ["modelValue", "error", "wrap_code", "read_only", "autofocus", "hide_header", "width", "height", "max_width", "min_width", "max_height", "min_height", "border_radius", "language_selector", "languages", "selector_width", "selector_height", "selector_displayed_by_default", "display_language", "copy_code", "z_index", "font_size", "theme"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Note "), $props.note ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_2, " ??? " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.note), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Info Text "), $props.info ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_InfoPopover, {
    key: 2,
    info: $props.info,
    "class": "ml-2"
  }, null, 8
  /* PROPS */
  , ["info"])) : _ctx.$slots.info ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 3
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Info Slot "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_InfoPopover, {
    "class": "ml-2"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "info")];
    }),
    _: 3
    /* FORWARDED */

  })], 2112
  /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
    name: "fade",
    mode: "out-in",
    duration: 250
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [$props.modelValue.code_editor_mode == true && $props.showCode == true ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Hide Code "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "italic px-4 pt-2 rounded-t-md text-xs font-mono shadow-md cursor-pointer -mt-8 mr-8",
        style: {
          color: '#61aeee',
          background: '#282c34'
        },
        onClick: _cache[3] || (_cache[3] = function ($event) {
          return $props.showCode = false;
        })
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default", {}, function () {
        return [_hoisted_5];
      })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_CodeEditor, {
        modelValue: $props.modelValue.code_editor_text,
        "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
          return $props.modelValue.code_editor_text = $event;
        }),
        error: $props.error,
        wrap_code: $props.wrap_code,
        read_only: $props.read_only,
        autofocus: $props.autofocus,
        hide_header: $props.hide_header,
        width: $props.width,
        height: $props.height,
        max_width: $props.max_width,
        min_width: $props.min_width,
        max_height: $props.max_height,
        min_height: $props.min_height,
        border_radius: $props.border_radius,
        language_selector: $props.language_selector,
        languages: $props.languages,
        selector_width: $props.selector_width,
        selector_height: $props.selector_height,
        selector_displayed_by_default: $props.selector_displayed_by_default,
        display_language: $props.display_language,
        copy_code: $props.copy_code,
        z_index: $props.z_index,
        font_size: $props.font_size,
        theme: $props.theme
      }, null, 8
      /* PROPS */
      , ["modelValue", "error", "wrap_code", "read_only", "autofocus", "hide_header", "width", "height", "max_width", "min_width", "max_height", "min_height", "border_radius", "language_selector", "languages", "selector_width", "selector_height", "selector_displayed_by_default", "display_language", "copy_code", "z_index", "font_size", "theme"])])) : $props.modelValue.code_editor_mode == false ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_TextEditor, {
        key: 1,
        modelValue: $props.modelValue.text,
        "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
          return $props.modelValue.text = $event;
        }),
        size: $props.size,
        height: $props.height,
        placeholder: $props.placeholder,
        error: $props.error
      }, null, 8
      /* PROPS */
      , ["modelValue", "size", "height", "placeholder", "error"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
    }),
    _: 3
    /* FORWARDED */

  })]);
}

/***/ }),

/***/ "./resources/js/Components/Alert/WarningAlert.vue":
/*!********************************************************!*\
  !*** ./resources/js/Components/Alert/WarningAlert.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _WarningAlert_vue_vue_type_template_id_4917051e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WarningAlert.vue?vue&type=template&id=4917051e */ "./resources/js/Components/Alert/WarningAlert.vue?vue&type=template&id=4917051e");
/* harmony import */ var _WarningAlert_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WarningAlert.vue?vue&type=script&lang=js */ "./resources/js/Components/Alert/WarningAlert.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_juliantabona_Sites_laravel_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_juliantabona_Sites_laravel_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_WarningAlert_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_WarningAlert_vue_vue_type_template_id_4917051e__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Components/Alert/WarningAlert.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Components/CodeEditor/CodeEditor.vue":
/*!***********************************************************!*\
  !*** ./resources/js/Components/CodeEditor/CodeEditor.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CodeEditor_vue_vue_type_template_id_231c2894__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CodeEditor.vue?vue&type=template&id=231c2894 */ "./resources/js/Components/CodeEditor/CodeEditor.vue?vue&type=template&id=231c2894");
/* harmony import */ var _CodeEditor_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CodeEditor.vue?vue&type=script&lang=js */ "./resources/js/Components/CodeEditor/CodeEditor.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_juliantabona_Sites_laravel_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_juliantabona_Sites_laravel_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_CodeEditor_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_CodeEditor_vue_vue_type_template_id_231c2894__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Components/CodeEditor/CodeEditor.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Components/TextEditor/TextEditor.vue":
/*!***********************************************************!*\
  !*** ./resources/js/Components/TextEditor/TextEditor.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TextEditor_vue_vue_type_template_id_7c49bed8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextEditor.vue?vue&type=template&id=7c49bed8 */ "./resources/js/Components/TextEditor/TextEditor.vue?vue&type=template&id=7c49bed8");
/* harmony import */ var _TextEditor_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TextEditor.vue?vue&type=script&lang=js */ "./resources/js/Components/TextEditor/TextEditor.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_juliantabona_Sites_laravel_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_juliantabona_Sites_laravel_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_TextEditor_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_TextEditor_vue_vue_type_template_id_7c49bed8__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Components/TextEditor/TextEditor.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Versions/Show/Builder/Components/TextOrCodeEditor.vue":
/*!**********************************************************************************!*\
  !*** ./resources/js/Pages/Versions/Show/Builder/Components/TextOrCodeEditor.vue ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TextOrCodeEditor_vue_vue_type_template_id_59794738__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextOrCodeEditor.vue?vue&type=template&id=59794738 */ "./resources/js/Pages/Versions/Show/Builder/Components/TextOrCodeEditor.vue?vue&type=template&id=59794738");
/* harmony import */ var _TextOrCodeEditor_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TextOrCodeEditor.vue?vue&type=script&lang=js */ "./resources/js/Pages/Versions/Show/Builder/Components/TextOrCodeEditor.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_juliantabona_Sites_laravel_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_juliantabona_Sites_laravel_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_TextOrCodeEditor_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_TextOrCodeEditor_vue_vue_type_template_id_59794738__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Versions/Show/Builder/Components/TextOrCodeEditor.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Components/Alert/WarningAlert.vue?vue&type=script&lang=js":
/*!********************************************************************************!*\
  !*** ./resources/js/Components/Alert/WarningAlert.vue?vue&type=script&lang=js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_WarningAlert_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_WarningAlert_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./WarningAlert.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Alert/WarningAlert.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Components/CodeEditor/CodeEditor.vue?vue&type=script&lang=js":
/*!***********************************************************************************!*\
  !*** ./resources/js/Components/CodeEditor/CodeEditor.vue?vue&type=script&lang=js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CodeEditor_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CodeEditor_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CodeEditor.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/CodeEditor/CodeEditor.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Components/TextEditor/TextEditor.vue?vue&type=script&lang=js":
/*!***********************************************************************************!*\
  !*** ./resources/js/Components/TextEditor/TextEditor.vue?vue&type=script&lang=js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TextEditor_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TextEditor_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TextEditor.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/TextEditor/TextEditor.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Versions/Show/Builder/Components/TextOrCodeEditor.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/Pages/Versions/Show/Builder/Components/TextOrCodeEditor.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TextOrCodeEditor_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TextOrCodeEditor_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TextOrCodeEditor.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Components/TextOrCodeEditor.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Components/Alert/WarningAlert.vue?vue&type=template&id=4917051e":
/*!**************************************************************************************!*\
  !*** ./resources/js/Components/Alert/WarningAlert.vue?vue&type=template&id=4917051e ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_WarningAlert_vue_vue_type_template_id_4917051e__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_WarningAlert_vue_vue_type_template_id_4917051e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./WarningAlert.vue?vue&type=template&id=4917051e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Alert/WarningAlert.vue?vue&type=template&id=4917051e");


/***/ }),

/***/ "./resources/js/Components/CodeEditor/CodeEditor.vue?vue&type=template&id=231c2894":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Components/CodeEditor/CodeEditor.vue?vue&type=template&id=231c2894 ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CodeEditor_vue_vue_type_template_id_231c2894__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CodeEditor_vue_vue_type_template_id_231c2894__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CodeEditor.vue?vue&type=template&id=231c2894 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/CodeEditor/CodeEditor.vue?vue&type=template&id=231c2894");


/***/ }),

/***/ "./resources/js/Components/TextEditor/TextEditor.vue?vue&type=template&id=7c49bed8":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Components/TextEditor/TextEditor.vue?vue&type=template&id=7c49bed8 ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TextEditor_vue_vue_type_template_id_7c49bed8__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TextEditor_vue_vue_type_template_id_7c49bed8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TextEditor.vue?vue&type=template&id=7c49bed8 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/TextEditor/TextEditor.vue?vue&type=template&id=7c49bed8");


/***/ }),

/***/ "./resources/js/Pages/Versions/Show/Builder/Components/TextOrCodeEditor.vue?vue&type=template&id=59794738":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/Pages/Versions/Show/Builder/Components/TextOrCodeEditor.vue?vue&type=template&id=59794738 ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TextOrCodeEditor_vue_vue_type_template_id_59794738__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TextOrCodeEditor_vue_vue_type_template_id_59794738__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TextOrCodeEditor.vue?vue&type=template&id=59794738 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Components/TextOrCodeEditor.vue?vue&type=template&id=59794738");


/***/ })

}]);