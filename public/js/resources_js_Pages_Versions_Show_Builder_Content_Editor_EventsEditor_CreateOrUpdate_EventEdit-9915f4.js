"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Versions_Show_Builder_Content_Editor_EventsEditor_CreateOrUpdate_EventEdit-9915f4"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Badges/PrimaryBadge.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Badges/PrimaryBadge.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _Switch_DefaultSwitch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Switch/DefaultSwitch */ "./resources/js/Components/Switch/DefaultSwitch.vue");
/* harmony import */ var _Badges_PrimaryBadge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Badges/PrimaryBadge */ "./resources/js/Components/Badges/PrimaryBadge.vue");
/* harmony import */ var _Error_DefaultError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Error/DefaultError */ "./resources/js/Components/Error/DefaultError.vue");
/* harmony import */ var simple_code_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! simple-code-editor */ "./node_modules/simple-code-editor/CodeEditor.vue");
/**
 *  Package Reference: https://github.com/justcaliturner/simple-code-editor
 */




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    DefaultSwitch: _Switch_DefaultSwitch__WEBPACK_IMPORTED_MODULE_0__["default"],
    PrimaryBadge: _Badges_PrimaryBadge__WEBPACK_IMPORTED_MODULE_1__["default"],
    DefaultError: _Error_DefaultError__WEBPACK_IMPORTED_MODULE_2__["default"],
    CodeEditor: simple_code_editor__WEBPACK_IMPORTED_MODULE_3__["default"]
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/CodeEditor/HiddenCode/CodeEditorModal.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/CodeEditor/HiddenCode/CodeEditorModal.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CodeEditor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../CodeEditor */ "./resources/js/Components/CodeEditor/CodeEditor.vue");
/* harmony import */ var _components_Modal_DefaultModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/Modal/DefaultModal */ "./resources/js/Components/Modal/DefaultModal.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['modelValue'],
  components: {
    CodeEditor: _CodeEditor__WEBPACK_IMPORTED_MODULE_0__["default"],
    DefaultModal: _components_Modal_DefaultModal__WEBPACK_IMPORTED_MODULE_1__["default"]
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
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/CodeEditor/HiddenCode/index.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/CodeEditor/HiddenCode/index.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CodeEditor_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../CodeEditor.vue */ "./resources/js/Components/CodeEditor/CodeEditor.vue");
/* harmony import */ var _CodeEditorModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CodeEditorModal */ "./resources/js/Components/CodeEditor/HiddenCode/CodeEditorModal.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['modelValue', 'error', //  Below are the code editor options
  'wrap_code', 'read_only', 'autofocus', 'hide_header', 'width', 'height', 'max_width', 'min_width', 'max_height', 'min_height', 'border_radius', 'language_selector', 'languages', 'selector_width', 'selector_height', 'selector_displayed_by_default', 'display_language', 'copy_code', 'z_index', 'font_size', 'theme'],
  components: {
    CodeEditor: _CodeEditor_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    CodeEditorModal: _CodeEditorModal__WEBPACK_IMPORTED_MODULE_1__["default"]
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
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/SearchBar/DefaultSearchBar.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/SearchBar/DefaultSearchBar.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    modelValue: String,
    placeholder: {
      type: String,
      "default": 'Search...'
    },
    totalResults: Number
  },
  data: function data() {
    return {
      loading: false
    };
  },
  methods: {
    updateValue: function updateValue(event) {
      this.loading = true; //  Update the v-model immediately

      this.$emit('update:modelValue', event.target.value); //  Start emit search half a second after typing stops

      this.onSearch(event);
    },
    onSearch: (0,lodash__WEBPACK_IMPORTED_MODULE_0__.debounce)(function (event) {
      this.loading = false;
      this.$emit('onSearch', event.target.value);
    }, 500)
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

      if (text) {
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/TextOrCodeEditor/TextOrCodeEditor.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/TextOrCodeEditor/TextOrCodeEditor.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CodeEditor_HiddenCode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../CodeEditor/HiddenCode */ "./resources/js/Components/CodeEditor/HiddenCode/index.vue");
/* harmony import */ var _Switch_DefaultSwitch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Switch/DefaultSwitch */ "./resources/js/Components/Switch/DefaultSwitch.vue");
/* harmony import */ var _components_TextEditor_TextEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/TextEditor/TextEditor */ "./resources/js/Components/TextEditor/TextEditor.vue");
/* harmony import */ var _components_CodeEditor_CodeEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/CodeEditor/CodeEditor */ "./resources/js/Components/CodeEditor/CodeEditor.vue");
var _props;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    DefaultSwitch: _Switch_DefaultSwitch__WEBPACK_IMPORTED_MODULE_1__["default"],
    TextEditor: _components_TextEditor_TextEditor__WEBPACK_IMPORTED_MODULE_2__["default"],
    CodeEditor: _components_CodeEditor_CodeEditor__WEBPACK_IMPORTED_MODULE_3__["default"],
    HiddenCode: _CodeEditor_HiddenCode__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: (_props = {
    //  Below are the text editor and code editor options
    modelValue: Object,
    error: String,
    label: String,
    note: String,
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/EventsEditor/CreateOrUpdate/EventEditor/EventTypes/Apis/Crud-Api copy/Headers/CreateOrUpdateHeader/CreateOrUpdateHeaderModal.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/EventsEditor/CreateOrUpdate/EventEditor/EventTypes/Apis/Crud-Api copy/Headers/CreateOrUpdateHeader/CreateOrUpdateHeaderModal.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");
/* harmony import */ var _components_Input_DefaultInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/Input/DefaultInput */ "./resources/js/Components/Input/DefaultInput.vue");
/* harmony import */ var _components_Modal_DefaultModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/Modal/DefaultModal */ "./resources/js/Components/Modal/DefaultModal.vue");
/* harmony import */ var _stores_VersionBuilder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @stores/VersionBuilder */ "./resources/js/Stores/VersionBuilder.js");
/* harmony import */ var _components_Button_PrimaryButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/Button/PrimaryButton */ "./resources/js/Components/Button/PrimaryButton.vue");
/* harmony import */ var _components_TextOrCodeEditor_TextOrCodeEditor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/TextOrCodeEditor/TextOrCodeEditor */ "./resources/js/Components/TextOrCodeEditor/TextOrCodeEditor.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    useForm: _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.useForm,
    DefaultInput: _components_Input_DefaultInput__WEBPACK_IMPORTED_MODULE_2__["default"],
    DefaultModal: _components_Modal_DefaultModal__WEBPACK_IMPORTED_MODULE_3__["default"],
    PrimaryButton: _components_Button_PrimaryButton__WEBPACK_IMPORTED_MODULE_5__["default"],
    TextOrCodeEditor: _components_TextOrCodeEditor_TextOrCodeEditor__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  props: {
    headers: {
      type: Array
    },
    header: {
      type: Object,
      "default": null
    },
    index: {
      type: Number,
      "default": null
    },
    mode: {
      type: String,
      "default": null,
      validator: function validator(value) {
        return ['create', 'clone', 'update'].includes(value);
      }
    }
  },
  data: function data() {
    return {
      form: null,
      useVersionBuilder: (0,_stores_VersionBuilder__WEBPACK_IMPORTED_MODULE_4__.useVersionBuilder)()
    };
  },
  computed: {
    modeInCaps: function modeInCaps() {
      return this.mode.charAt(0).toUpperCase() + this.mode.slice(1);
    }
  },
  methods: {
    resetForm: function resetForm() {
      if (this.mode == 'create') {
        this.form = (0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.useForm)((0,_stores_VersionBuilder__WEBPACK_IMPORTED_MODULE_4__.useVersionBuilder)().getBlankHeader());
      } else if (this.mode == 'clone') {
        this.form = (0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.useForm)((0,_stores_VersionBuilder__WEBPACK_IMPORTED_MODULE_4__.useVersionBuilder)().getClonedHeader(this.header));
      } else if (this.mode == 'update') {
        this.form = (0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.useForm)(_objectSpread(_objectSpread({}, (0,_stores_VersionBuilder__WEBPACK_IMPORTED_MODULE_4__.useVersionBuilder)().getBlankHeader()), lodash__WEBPACK_IMPORTED_MODULE_0___default().cloneDeep(this.header)));
      }
    },
    createHeader: function createHeader(closeModal) {
      //  Clear existing errors
      this.form.clearErrors(); //  Check if we have an existing header using the same name

      var totalExactMatches = this.useVersionBuilder.searchHeaders(this.headers, this.form.name, true).length;

      if (this.form.name.length == 0) {
        this.form.setError('name', 'The header name is required');
      } else if (this.form.value.code_editor_mode == false && (this.form.value.text == '' || this.form.value.text == null)) {
        this.form.setError('value', 'The value is required');
      } else if (this.form.value.code_editor_mode == true && (this.form.value.code_editor_text == '' || this.form.value.code_editor_text == null)) {
        this.form.setError('value', 'The code is required');
      } else if (['create', 'clone'].includes(this.mode) && totalExactMatches) {
        this.form.setError('name', 'This header name is already in use');
      } else if (this.mode == 'update' && totalExactMatches && this.header.name !== this.form.name) {
        this.form.setError('name', 'This header name is already in use');
      }

      if (this.form.hasErrors === false) {
        var header = this.form.data();

        if (this.mode == 'update') {
          this.useVersionBuilder.updateHeader(this.headers, header, this.index);
        } else {
          this.useVersionBuilder.addHeader(this.headers, header);
        } //  Determine the action name e.g created, cloned or updated


        var actionName = this.mode + 'd';
        this.$message({
          message: 'Header ' + actionName + ' successfully',
          type: 'success'
        });
        closeModal();
      }
    },
    cancelCreateHeader: function cancelCreateHeader() {
      //  Clear existing errors
      this.form.clearErrors();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/EventsEditor/CreateOrUpdate/EventEditor/EventTypes/Apis/Crud-Api copy/Headers/DeleteHeader/DeleteHeaderModal.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/EventsEditor/CreateOrUpdate/EventEditor/EventTypes/Apis/Crud-Api copy/Headers/DeleteHeader/DeleteHeaderModal.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Button_DangerButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/Button/DangerButton */ "./resources/js/Components/Button/DangerButton.vue");
/* harmony import */ var _components_Modal_DefaultModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/Modal/DefaultModal */ "./resources/js/Components/Modal/DefaultModal.vue");
/* harmony import */ var _stores_VersionBuilder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stores/VersionBuilder */ "./resources/js/Stores/VersionBuilder.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    DangerButton: _components_Button_DangerButton__WEBPACK_IMPORTED_MODULE_0__["default"],
    DefaultModal: _components_Modal_DefaultModal__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    header: Object,
    index: Number,
    indexes: Array,
    headers: Array,
    mode: {
      type: String,
      "default": 'single',
      validator: function validator(value) {
        return ['single', 'multiple'].includes(value);
      }
    }
  },
  data: function data() {
    return {
      useVersionBuilder: (0,_stores_VersionBuilder__WEBPACK_IMPORTED_MODULE_2__.useVersionBuilder)()
    };
  },
  methods: {
    deleteHeader: function deleteHeader(closeModal) {
      if (this.mode == 'single') {
        this.useVersionBuilder.removeHeaderByIndex(this.headers, this.index);
        this.$message({
          message: 'Header deleted successfully',
          type: 'success'
        });
        this.$emit('deleted');
      } else if (this.mode == 'multiple' && this.indexes.length) {
        this.useVersionBuilder.removeHeadersByIndexes(this.headers, this.indexes);
        this.$message({
          message: (this.indexes == 1 ? 'Header' : 'Queries') + ' deleted successfully',
          type: 'success'
        });
        this.$emit('deleted');
      }

      closeModal();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/EventsEditor/CreateOrUpdate/EventEditor/EventTypes/Apis/Crud-Api copy/Headers/index.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/EventsEditor/CreateOrUpdate/EventEditor/EventTypes/Apis/Crud-Api copy/Headers/index.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuedraggable */ "./node_modules/vuedraggable/dist/vuedraggable.umd.js");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuedraggable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_TextEditor_TextEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/TextEditor/TextEditor */ "./resources/js/Components/TextEditor/TextEditor.vue");
/* harmony import */ var _components_CodeEditor_HiddenCode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/CodeEditor/HiddenCode */ "./resources/js/Components/CodeEditor/HiddenCode/index.vue");
/* harmony import */ var _stores_VersionBuilder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @stores/VersionBuilder */ "./resources/js/Stores/VersionBuilder.js");
/* harmony import */ var _components_Button_DangerButton_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/Button/DangerButton.vue */ "./resources/js/Components/Button/DangerButton.vue");
/* harmony import */ var _components_SearchBar_DefaultSearchBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/SearchBar/DefaultSearchBar */ "./resources/js/Components/SearchBar/DefaultSearchBar.vue");
/* harmony import */ var _DeleteHeader_DeleteHeaderModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DeleteHeader/DeleteHeaderModal */ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/EventsEditor/CreateOrUpdate/EventEditor/EventTypes/Apis/Crud-Api copy/Headers/DeleteHeader/DeleteHeaderModal.vue");
/* harmony import */ var _CreateOrUpdateHeader_CreateOrUpdateHeaderModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CreateOrUpdateHeader/CreateOrUpdateHeaderModal */ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/EventsEditor/CreateOrUpdate/EventEditor/EventTypes/Apis/Crud-Api copy/Headers/CreateOrUpdateHeader/CreateOrUpdateHeaderModal.vue");








/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['form'],
  components: {
    draggable: (vuedraggable__WEBPACK_IMPORTED_MODULE_0___default()),
    TextEditor: _components_TextEditor_TextEditor__WEBPACK_IMPORTED_MODULE_1__["default"],
    HiddenCode: _components_CodeEditor_HiddenCode__WEBPACK_IMPORTED_MODULE_2__["default"],
    DefaultSearchBar: _components_SearchBar_DefaultSearchBar__WEBPACK_IMPORTED_MODULE_5__["default"],
    CreateOrUpdateHeaderModal: _CreateOrUpdateHeader_CreateOrUpdateHeaderModal__WEBPACK_IMPORTED_MODULE_7__["default"],
    DangerButton: _components_Button_DangerButton_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    DeleteHeaderModal: _DeleteHeader_DeleteHeaderModal__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  data: function data() {
    return {
      headers: ['Name', 'Value'],
      useVersionBuilder: (0,_stores_VersionBuilder__WEBPACK_IMPORTED_MODULE_3__.useVersionBuilder)(),
      globalCheckboxChecked: false,
      checkedIndexes: [],
      searchIndexes: [],
      hasResults: true,
      totalResults: 0,
      searchTerm: '',
      data: []
    };
  },
  watch: {
    'form.event_data.headers': {
      handler: function handler(after, before) {
        //  Start a search using the given search term
        this.startSearch(this.searchTerm);
      },
      deep: true
    },
    searchTerm: function searchTerm(newSearchTerm, oldSearchTerm) {
      //  Start a search using the given search term
      this.startSearch(newSearchTerm);
    }
  },
  methods: {
    startSearch: function startSearch(searchTerm) {
      var _this = this;

      //  Reset the search indexes
      this.searchIndexes = [];
      this.form.event_data.headers.map(function (header, index) {
        //  Convert the serach term to lowercase
        searchTerm = searchTerm.toLowerCase(); //  Check if we have the search term

        var hasSearchTerm = searchTerm !== ''; //  Check if the header name matches the search term

        var nameMatchesSearchTerm = header.name.toLowerCase().includes(searchTerm); //  Check if the header text value matches the search term

        var textValueMatchesSearchTerm = header.value.code_editor_mode == false && (header.value.text || '').toString().toLowerCase().includes(searchTerm); //  Check if the header code value matches the search term

        var codeValueMatchesSearchTerm = header.value.code_editor_mode == true && (header.value.code_editor_text || '').toString().toLowerCase().includes(searchTerm); //  Determine if we have a match from the possible matches above

        var matchesSearchTerm = nameMatchesSearchTerm || textValueMatchesSearchTerm || codeValueMatchesSearchTerm; //  If we do not have the search term or the search term has a matching result

        if (hasSearchTerm == false || hasSearchTerm == true && matchesSearchTerm == true) {
          //  Indicate that this header must be shown within the search results
          _this.searchIndexes.push(index);
        } else {}
      });
      this.totalResults = this.searchIndexes.length;
      this.hasResults = this.totalResults > 0;
    },
    toggleSingleCheckmark: function toggleSingleCheckmark(index) {
      var removeAt = this.checkedIndexes.indexOf(index); //  If this index already exists

      if (removeAt >= 0) {
        //  Remove the index (This will uncheck the checkbox)
        this.checkedIndexes.splice(removeAt, 1).sort();
      } else {
        //  Add the index (This will check the checkbox)
        this.checkedIndexes.push(index);
        this.checkedIndexes.sort();
      }
    },
    toggleMultipleCheckmarks: function toggleMultipleCheckmarks(event) {
      var _this2 = this;

      //  Uncheck the checked checkboxes
      this.checkedIndexes = [];

      if (event.target.checked) {
        //  Check all the checkboxes
        this.form.event_data.headers.forEach(function (header, index) {
          return _this2.checkedIndexes.push(index);
        });
      }
    },
    resetCheckboxes: function resetCheckboxes() {
      this.checkedIndexes = [];
      this.globalCheckboxChecked = false;
    }
  },
  created: function created() {
    //  Start a search using the given search term (which is an empty search term)
    this.startSearch(this.searchTerm);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Badges/PrimaryBadge.vue?vue&type=template&id=6f9f5936":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Badges/PrimaryBadge.vue?vue&type=template&id=6f9f5936 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "bg-blue-50 text-blue-500 border border-blue-500 text-xs px-2.5 py-0.5 rounded"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")]);
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

var _hoisted_1 = {
  key: 0,
  "class": "mt-2 mb-2 pb-2 border-b border-dotted"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"flex items-center p-2 rounded-md bg-yellow-100\"><svg xmlns=\"http://www.w3.org/2000/svg\" class=\"h-4 w-4 mr-1\" viewBox=\"0 0 20 20\" fill=\"currentColor\"><path fill-rule=\"evenodd\" d=\"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z\" clip-rule=\"evenodd\"></path></svg><span class=\"text-gray-600 font-bold text-xs\">Read Only</span><span class=\"text-gray-500 text-xs ml-1 italic\"> — You cannot edit this code</span></div>", 1);

var _hoisted_3 = [_hoisted_2];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_CodeEditor = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("CodeEditor", true);

  var _component_DefaultError = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DefaultError");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [$props.read_only ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, _hoisted_3)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_CodeEditor, {
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/CodeEditor/HiddenCode/CodeEditorModal.vue?vue&type=template&id=c5772016":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/CodeEditor/HiddenCode/CodeEditorModal.vue?vue&type=template&id=c5772016 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Code Editor");

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  name: "trigger",
  xmlns: "http://www.w3.org/2000/svg",
  "class": "h-4 w-4 ml-2 cursor-pointer hover:text-blue-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
})], -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_CodeEditor = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("CodeEditor");

  var _component_DefaultModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DefaultModal");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Modal "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DefaultModal, {
    defaultText: "Done",
    onOpen: _cache[1] || (_cache[1] = function ($event) {
      return _ctx.$emit('open');
    }),
    onClose: _cache[2] || (_cache[2] = function ($event) {
      return _ctx.$emit('close');
    })
  }, {
    title: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_1];
    }),
    trigger: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_2];
    }),
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_CodeEditor, {
        modelValue: $data.localModelValue,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
          return $data.localModelValue = $event;
        }),
        max_height: "500px"
      }, null, 8
      /* PROPS */
      , ["modelValue"])];
    }),
    _: 1
    /* STABLE */

  })], 2112
  /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/CodeEditor/HiddenCode/index.vue?vue&type=template&id=04d99cd4":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/CodeEditor/HiddenCode/index.vue?vue&type=template&id=04d99cd4 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "flex items-center"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("...");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _this = this;

  var _component_CodeEditor = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("CodeEditor");

  var _component_el_popover = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("el-popover");

  var _component_CodeEditorModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("CodeEditorModal");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_popover, {
    placement: "top",
    width: 800,
    trigger: "hover"
  }, {
    reference: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Text "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "italic px-2 py-1 rounded-md text-xs font-mono shadow-md",
        style: {
          color: '#61aeee',
          background: '#282c34'
        },
        onClick: _cache[1] || (_cache[1] = function ($event) {
          return _this.$emit('click');
        })
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default", {}, function () {
        return [_hoisted_2];
      })])];
    }),
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_CodeEditor, {
        modelValue: $data.localModelValue,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
          return $data.localModelValue = $event;
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
      , ["modelValue", "error", "wrap_code", "read_only", "autofocus", "hide_header", "width", "height", "max_width", "min_width", "max_height", "min_height", "border_radius", "language_selector", "languages", "selector_width", "selector_height", "selector_displayed_by_default", "display_language", "copy_code", "z_index", "font_size", "theme"])];
    }),
    _: 3
    /* FORWARDED */

  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Maximize Icon "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_CodeEditorModal, {
    modelValue: $data.localModelValue,
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $data.localModelValue = $event;
    }),
    width: "w-2/3"
  }, null, 8
  /* PROPS */
  , ["modelValue"])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/SearchBar/DefaultSearchBar.vue?vue&type=template&id=cafcf00e":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/SearchBar/DefaultSearchBar.vue?vue&type=template&id=cafcf00e ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "flex items-center"
};
var _hoisted_2 = {
  "class": "relative"
};
var _hoisted_3 = ["value", "placeholder"];
var _hoisted_4 = {
  key: 0,
  role: "status",
  "class": "inline w-4 h-4 text-blue-500 animate-spin absolute right-0 top-0 mt-3 mr-4",
  viewBox: "0 0 100 101",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
  fill: "#E5E7EB"
}, null, -1
/* HOISTED */
);

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
  fill: "currentColor"
}, null, -1
/* HOISTED */
);

var _hoisted_7 = [_hoisted_5, _hoisted_6];
var _hoisted_8 = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  "class": "text-gray-400 h-4 w-4 absolute right-0 top-0 mt-3 mr-4",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "2"
};

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
}, null, -1
/* HOISTED */
);

var _hoisted_10 = [_hoisted_9];
var _hoisted_11 = {
  key: 0,
  "class": "ml-4"
};
var _hoisted_12 = {
  key: 0,
  "class": "text-gray-500 text-xs"
};
var _hoisted_13 = {
  key: 1,
  "class": "text-gray-500 text-xs"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    value: $props.modelValue,
    onInput: _cache[0] || (_cache[0] = function () {
      return $options.updateValue && $options.updateValue.apply($options, arguments);
    }),
    type: "text",
    placeholder: $props.placeholder,
    "class": "w-full text-gray-500 border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-xs focus:outline-none"
  }, null, 40
  /* PROPS, HYDRATE_EVENTS */
  , _hoisted_3), $data.loading ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_4, _hoisted_7)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_8, _hoisted_10))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
    name: "fade"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [$props.modelValue ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_11, [$props.totalResults ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_12, "Found " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.totalResults + ($props.totalResults == 1 ? ' Result' : ' Results')), 1
      /* TEXT */
      )) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_13, "No Results"))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
    }),
    _: 1
    /* STABLE */

  })]);
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/TextOrCodeEditor/TextOrCodeEditor.vue?vue&type=template&id=4d238b54":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/TextOrCodeEditor/TextOrCodeEditor.vue?vue&type=template&id=4d238b54 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
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
  , ["modelValue", "error", "wrap_code", "read_only", "autofocus", "hide_header", "width", "height", "max_width", "min_width", "max_height", "min_height", "border_radius", "language_selector", "languages", "selector_width", "selector_height", "selector_displayed_by_default", "display_language", "copy_code", "z_index", "font_size", "theme"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Note "), $props.note ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_2, " — " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.note), 1
  /* TEXT */
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/EventsEditor/CreateOrUpdate/EventEditor/EventTypes/Apis/Crud-Api copy/Headers/CreateOrUpdateHeader/CreateOrUpdateHeaderModal.vue?vue&type=template&id=583d934e":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/EventsEditor/CreateOrUpdate/EventEditor/EventTypes/Apis/Crud-Api copy/Headers/CreateOrUpdateHeader/CreateOrUpdateHeaderModal.vue?vue&type=template&id=583d934e ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  key: 0,
  "class": "text-sm text-gray-500 mb-5"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Cloning ");

var _hoisted_3 = {
  "class": "text-blue-500 font-bold"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" header");

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "class": "h-3 w-3 mr-2",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "fill-rule": "evenodd",
  d: "M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z",
  "clip-rule": "evenodd"
})], -1
/* HOISTED */
);

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Create Header", -1
/* HOISTED */
);

var _hoisted_7 = {
  key: 1,
  name: "trigger",
  xmlns: "http://www.w3.org/2000/svg",
  "class": "h-4 w-4 mr-2 cursor-pointer hover:text-blue-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "2"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
}, null, -1
/* HOISTED */
);

var _hoisted_9 = [_hoisted_8];
var _hoisted_10 = {
  key: 2,
  xmlns: "http://www.w3.org/2000/svg",
  "class": "h-4 w-4 mr-2 cursor-pointer hover:text-blue-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "2"
};

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
}, null, -1
/* HOISTED */
);

var _hoisted_12 = [_hoisted_11];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_DefaultInput = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DefaultInput");

  var _component_TextOrCodeEditor = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("TextOrCodeEditor");

  var _component_PrimaryButton = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("PrimaryButton");

  var _component_DefaultModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DefaultModal");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Modal "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DefaultModal, {
    defaultText: "Cancel",
    onOpen: _cache[2] || (_cache[2] = function ($event) {
      return $options.resetForm();
    }),
    onClose: _cache[3] || (_cache[3] = function ($event) {
      return _ctx.$emit('close');
    }),
    primaryAction: $options.createHeader,
    primaryText: $options.modeInCaps + ' Header',
    defaultAction: $options.cancelCreateHeader
  }, {
    title: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.modeInCaps + ' Header'), 1
      /* TEXT */
      )];
    }),
    trigger: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [$props.mode == 'create' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_PrimaryButton, {
        key: 0,
        name: "trigger",
        "class": "px-3"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_5, _hoisted_6];
        }),
        _: 1
        /* STABLE */

      })) : $props.mode == 'clone' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_7, _hoisted_9)) : $props.mode == 'update' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_10, _hoisted_12)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
    }),
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [$props.mode == 'clone' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.header.name), 1
      /* TEXT */
      ), _hoisted_4])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DefaultInput, {
        modelValue: $data.form.name,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
          return $data.form.name = $event;
        }),
        label: "Name",
        error: $data.form.errors.name,
        "class": "mb-6"
      }, null, 8
      /* PROPS */
      , ["modelValue", "error"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_TextOrCodeEditor, {
        modelValue: $data.form.value,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
          return $data.form.value = $event;
        }),
        label: "Value",
        error: $data.form.errors.value,
        "class": "mb-4"
      }, null, 8
      /* PROPS */
      , ["modelValue", "error"])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["primaryAction", "primaryText", "defaultAction"])], 2112
  /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/EventsEditor/CreateOrUpdate/EventEditor/EventTypes/Apis/Crud-Api copy/Headers/DeleteHeader/DeleteHeaderModal.vue?vue&type=template&id=ea1d2d0e":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/EventsEditor/CreateOrUpdate/EventEditor/EventTypes/Apis/Crud-Api copy/Headers/DeleteHeader/DeleteHeaderModal.vue?vue&type=template&id=ea1d2d0e ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Delete Header");

var _hoisted_2 = {
  key: 0,
  "class": "text-sm text-gray-500 mb-5"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Are you sure you want to delete the ");

var _hoisted_4 = {
  "class": "text-blue-500 font-bold"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" header. After this header is deleted you cannot recover it again.");

var _hoisted_6 = {
  "class": "text-sm text-gray-500 mb-5"
};

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Are you sure you want to delete ");

var _hoisted_8 = {
  "class": "text-blue-500 font-bold"
};
var _hoisted_9 = {
  key: 0,
  name: "trigger",
  xmlns: "http://www.w3.org/2000/svg",
  "class": "h-4 w-4 mr-2 hover:text-red-500 cursor-pointer",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "2"
};

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
}, null, -1
/* HOISTED */
);

var _hoisted_11 = [_hoisted_10];
var _hoisted_12 = {
  key: 0,
  "class": "flex items-center justify-end"
};
var _hoisted_13 = {
  "class": "text-gray-500 text-xs mr-4"
};

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "class": "h-4 w-4 mr-1",
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

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Delete", -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_DangerButton = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DangerButton");

  var _component_DefaultModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DefaultModal");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Modal "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DefaultModal, {
    defaultText: "Cancel",
    onOpen: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.$emit('open');
    }),
    onClose: _cache[1] || (_cache[1] = function ($event) {
      return _ctx.$emit('close');
    }),
    dangerText: "Delete Header",
    dangerAction: $options.deleteHeader
  }, {
    title: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_1];
    }),
    trigger: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [$props.mode == 'single' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_9, _hoisted_11)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
        name: "fade"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [$props.mode == 'multiple' && $props.indexes.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.indexes.length + ($props.indexes.length == 1 ? ' header' : ' headers')) + " selected", 1
          /* TEXT */
          ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DangerButton, {
            "class": "mr-2"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [_hoisted_14, _hoisted_15];
            }),
            _: 1
            /* STABLE */

          })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
        }),
        _: 1
        /* STABLE */

      })];
    }),
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [$props.mode == 'single' && $props.header ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.header.name), 1
      /* TEXT */
      ), _hoisted_5])) : $props.mode == 'multiple' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        key: 1
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Modal Content (If we are deleting multiple header) "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_6, [_hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.indexes.length), 1
      /* TEXT */
      ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.indexes.length == 1 ? 'header' : 'headers') + ". After " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.indexes.length == 1 ? 'this header is deleted you cannot recover it again' : 'these headers are deleted you cannot recover them again') + ".", 1
      /* TEXT */
      )])], 2112
      /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
      )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/EventsEditor/CreateOrUpdate/EventEditor/EventTypes/Apis/Crud-Api copy/Headers/index.vue?vue&type=template&id=5db9f667":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/EventsEditor/CreateOrUpdate/EventEditor/EventTypes/Apis/Crud-Api copy/Headers/index.vue?vue&type=template&id=5db9f667 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "grid grid-cols-12 mb-4 items-center"
};
var _hoisted_2 = {
  "class": "col-span-6"
};
var _hoisted_3 = {
  "class": "col-span-6"
};
var _hoisted_4 = {
  "class": "flex items-center justify-end"
};
var _hoisted_5 = {
  "class": "relative overflow-x-auto shadow-md"
};
var _hoisted_6 = {
  "class": "w-full text-sm text-left text-gray-500"
};
var _hoisted_7 = {
  "class": "text-xs text-gray-700 uppercase bg-gray-50"
};
var _hoisted_8 = {
  key: 0,
  scope: "col",
  "class": "p-4"
};
var _hoisted_9 = {
  "class": "flex items-center"
};

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "checkbox-all",
  "class": "sr-only"
}, "checkbox", -1
/* HOISTED */
);

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col",
  "class": "px-6 py-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "sr-only"
}, "Edit")], -1
/* HOISTED */
);

var _hoisted_12 = {
  key: 0,
  "class": "group border-b hover:bg-gray-50"
};
var _hoisted_13 = {
  key: 0,
  "class": "w-4 p-4"
};
var _hoisted_14 = {
  "class": "flex items-center"
};
var _hoisted_15 = ["checked", "onChange"];

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "checkbox-table-1",
  "class": "sr-only"
}, "checkbox", -1
/* HOISTED */
);

var _hoisted_17 = {
  scope: "row",
  "class": "px-6 py-4 text-xs whitespace-nowrap font-medium text-gray-900"
};
var _hoisted_18 = {
  scope: "row",
  "class": "px-6 py-4 text-xs whitespace-nowrap font-normal text-gray-500"
};
var _hoisted_19 = {
  scope: "row"
};
var _hoisted_20 = {
  "class": "flex justify-end"
};
var _hoisted_21 = {
  "class": "opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-end mr-4"
};

var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "class": "h-4 w-4 hover:text-blue-500 cursor-grab active:cursor-grabbing draggble-handle",
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

var _hoisted_23 = {
  key: 0,
  "class": "flex items-center bg-gray-50 p-8"
};

var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-gray-500 text-xs"
}, "No Results", -1
/* HOISTED */
);

var _hoisted_25 = [_hoisted_24];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_DefaultSearchBar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DefaultSearchBar");

  var _component_DeleteHeaderModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DeleteHeaderModal");

  var _component_CreateOrUpdateHeaderModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("CreateOrUpdateHeaderModal");

  var _component_HiddenCode = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("HiddenCode");

  var _component_TextEditor = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("TextEditor");

  var _component_draggable = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("draggable");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Search Bar "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DefaultSearchBar, {
    modelValue: $data.searchTerm,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.searchTerm = $event;
    }),
    placeholder: "Search",
    totalResults: $data.totalResults
  }, null, 8
  /* PROPS */
  , ["modelValue", "totalResults"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
    name: "fade",
    mode: "out-in"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
        key: $data.checkedIndexes.length
      }, [$data.checkedIndexes.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_DeleteHeaderModal, {
        key: 0,
        headers: $props.form.event_data.headers,
        indexes: $data.checkedIndexes,
        mode: "multiple",
        onDeleted: _cache[1] || (_cache[1] = function ($event) {
          return $options.resetCheckboxes();
        })
      }, null, 8
      /* PROPS */
      , ["headers", "indexes"])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_CreateOrUpdateHeaderModal, {
        key: 1,
        headers: $props.form.event_data.headers,
        mode: "create"
      }, null, 8
      /* PROPS */
      , ["headers"]))]))];
    }),
    _: 1
    /* STABLE */

  })])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Table "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Table Header Checkbox "), $data.hasResults ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("th", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: "checkbox-all",
    type: "checkbox",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $data.globalCheckboxChecked = $event;
    }),
    onChange: _cache[3] || (_cache[3] = function ($event) {
      return $options.toggleMultipleCheckmarks($event);
    }),
    "class": "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
  }, null, 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.globalCheckboxChecked]]), _hoisted_10])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Table Header Columns Names "), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.headers, function (header, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("th", {
      key: index,
      scope: "col",
      "class": "px-6 py-3"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(header), 1
    /* TEXT */
    )]);
  }), 128
  /* KEYED_FRAGMENT */
  )), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Table Header Edit Action "), _hoisted_11])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Table Draggable Rows "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_draggable, {
    tag: "tbody",
    invertSwap: true,
    handle: ".draggble-handle",
    "item-key": "crud-api-headers",
    "ghost-class": "bg-yellow-100",
    modelValue: $props.form.event_data.headers,
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $props.form.event_data.headers = $event;
    })
  }, {
    item: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref) {
      var element = _ref.element,
          index = _ref.index;
      return [$data.searchIndexes.includes(index) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Table Body Checkbox "), $data.hasResults ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("td", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        id: "checkbox-table-1",
        type: "checkbox",
        checked: $data.checkedIndexes.includes(index),
        onChange: function onChange($event) {
          return $options.toggleSingleCheckmark(index);
        },
        "class": "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
      }, null, 40
      /* PROPS, HYDRATE_EVENTS */
      , _hoisted_15), _hoisted_16])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Name "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(element.name), 1
      /* TEXT */
      )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Value "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Code Editor Value "), element.value.code_editor_mode ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_HiddenCode, {
        key: 0,
        modelValue: element.value.code_editor_text,
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return element.value.code_editor_text = $event;
        }
      }, null, 8
      /* PROPS */
      , ["modelValue", "onUpdate:modelValue"])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        key: 1
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" String Value "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_TextEditor, {
        modelValue: element.value.text,
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return element.value.text = $event;
        },
        read_only: true
      }, null, 8
      /* PROPS */
      , ["modelValue", "onUpdate:modelValue"])], 2112
      /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
      ))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Update Modal Button "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_CreateOrUpdateHeaderModal, {
        headers: $props.form.event_data.headers,
        header: element,
        index: index,
        mode: "update"
      }, null, 8
      /* PROPS */
      , ["headers", "header", "index"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Clone Modal Button "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_CreateOrUpdateHeaderModal, {
        headers: $props.form.event_data.headers,
        header: element,
        mode: "clone"
      }, null, 8
      /* PROPS */
      , ["headers", "header"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Delete Modal Button "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DeleteHeaderModal, {
        headers: $props.form.event_data.headers,
        header: element,
        index: index,
        mode: "single"
      }, null, 8
      /* PROPS */
      , ["headers", "header", "index"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Move Icon "), _hoisted_22])])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["modelValue"])]), $data.hasResults == false ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_23, _hoisted_25)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]);
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
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pinia */ "./node_modules/pinia/dist/pinia.esm-browser.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
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

var useVersionBuilder = (0,pinia__WEBPACK_IMPORTED_MODULE_1__.defineStore)('version_builder', {
  state: function state() {
    return {
      builder: {},
      selectedScreen: null,
      selectedDisplay: null,
      selectedConfigMenu: null,
      filterEventSearch: '',
      filterScreenSearch: '',
      filterDisplaySearch: ''
    };
  },

  /**
   *  Add comments foreach getter to offer typescript support
   */
  getters: {
    //  Screen related getters
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
    //  Display related getters
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
    //  Global variable related getters
    globalVariables: function globalVariables(state) {
      var _state$builder$global;

      return (_state$builder$global = state.builder.global_variables) !== null && _state$builder$global !== void 0 ? _state$builder$global : [];
    },
    //  Global event related getters
    globalEvents: function globalEvents(state) {
      var _state$builder$global2;

      return (_state$builder$global2 = state.builder.global_events) !== null && _state$builder$global2 !== void 0 ? _state$builder$global2 : [];
    },
    //  Event related getters
    screenEvents: function screenEvents(state) {
      if (!state.selectedScreen) return [];
      return [].concat(_toConsumableArray(state.selectedScreen.events.on_enter.collection), _toConsumableArray(state.selectedScreen.events.on_leave.collection), _toConsumableArray(state.selectedScreen.events.on_response.collection));
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
    selectConfigMenu: function selectConfigMenu(menuName) {
      this.unselectScreen();
      this.unselectDisplay();
      this.selectedConfigMenu = menuName;
    },
    unselectConfigMenu: function unselectConfigMenu() {
      this.selectedConfigMenu = null;
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

      this.unselectDisplay();
      this.unselectConfigMenu();
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
      var exactMatch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return this.screens.filter(function (screen) {
        var matchesScreenId = exactMatch === true ? screen.id.toLowerCase() === search.toLowerCase() : screen.id.toLowerCase().includes(search.toLowerCase());
        var matchesScreenName = exactMatch === true ? screen.name.toLowerCase() === search.toLowerCase() : screen.name.toLowerCase().includes(search.toLowerCase());
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
      var clonedScreen = lodash__WEBPACK_IMPORTED_MODULE_0___default().cloneDeep(screen);

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
      var currDisplay = this.searchScreenDisplayById(display);
      if (currDisplay) currDisplay['first_display'] = true;
    },
    searchScreenDisplays: function searchScreenDisplays(search) {
      var exactMatch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return this.screenDisplays.filter(function (display) {
        var matchesDisplayId = exactMatch === true ? display.id.toLowerCase() === search.toLowerCase() : display.id.toLowerCase().includes(search.toLowerCase());
        var matchesDisplayName = exactMatch === true ? display.name.toLowerCase() === search.toLowerCase() : display.name.toLowerCase().includes(search.toLowerCase());
        return matchesDisplayId || matchesDisplayName;
      });
    },
    searchScreenDisplayById: function searchScreenDisplayById(input) {
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
      var clonedDisplay = lodash__WEBPACK_IMPORTED_MODULE_0___default().cloneDeep(display);

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
    },
    //  Global Variable Methods
    searchGlobalVariables: function searchGlobalVariables(search) {
      if (search !== null && search !== '') {
        return this.globalVariables.filter(function (globalVariable) {
          var matchesGlobalVariableName = globalVariable.name.toLowerCase().includes(search.toLowerCase());
          return matchesGlobalVariableName;
        });
      } else {
        return this.globalVariables;
      }
    },
    getBlankGlobalVariable: function getBlankGlobalVariable() {
      return {
        name: '',
        type: 'string',
        value: {
          string: '',
          integer: '0',
          "boolean": 'false',
          code: null
        },
        is_global: false,
        is_constant: false
      };
    },
    getClonedGlobalVariable: function getClonedGlobalVariable(globalVariable) {
      var clonedGlobalVariable = lodash__WEBPACK_IMPORTED_MODULE_0___default().cloneDeep(globalVariable);

      return _objectSpread(_objectSpread({}, this.getBlankGlobalVariable()), clonedGlobalVariable);
    },
    addGlobalVariable: function addGlobalVariable(globalVariable) {
      this.globalVariables.push(globalVariable);
    },
    updateGlobalVariable: function updateGlobalVariable(globalVariable, index) {
      this.globalVariables.splice(index, 1, globalVariable);
    },
    removeGlobalVariableByIndex: function removeGlobalVariableByIndex(index) {
      this.globalVariables.splice(index, 1);
    },
    removeGlobalVariablesByIndexes: function removeGlobalVariablesByIndexes(indexes) {
      lodash__WEBPACK_IMPORTED_MODULE_0___default().pullAt(this.globalVariables, indexes);
    },
    //  Event Methods
    searchEvents: function searchEvents(events, search) {
      var exactMatch = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (search !== null && search !== '') {
        search = search.toLowerCase();
        return events.filter(function (event) {
          var matchesEventId = exactMatch === true ? event.id.toLowerCase() === search : event.id.toLowerCase().includes(search);
          var matchesEventName = exactMatch === true ? event.name.toLowerCase() === search : event.name.toLowerCase().includes(search);
          return matchesEventId || matchesEventName;
        });
      } else {
        return events;
      }
    },
    suggestEventName: function suggestEventName(events, originalName) {
      var tries = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      //  Suggest a name
      var suggestedName = tries == 0 ? originalName : originalName + ' ' + tries; //  Check if we have an existing event using the same name

      var totalExactMatches = this.searchEvents(events, suggestedName, true).length; //  If the suggested name exists

      if (totalExactMatches > 0) {
        //  Try another name
        return this.suggestEventName(events, originalName, ++tries);
      } else {
        //  Return the suggested name
        return suggestedName;
      }
    },
    getBlankEvent: function getBlankEvent(type) {
      var event = {};

      if (type == 'CRUD API') {
        event = this.get_CRUD_API_Event();
      } else if (type == 'SMS API') {
        event = this.get_SMS_API_Event();
      } else if (type == 'Airtime Billing API') {
        event = this.get_Airtime_Billing_API_Event();
      } else if (type == 'Orange Money API') {
        event = this.get_Orange_Money_API_Event();
      } else if (type == 'Validation') {
        event = this.get_Validation_Event();
      } else if (type == 'Formatting') {
        event = this.get_Formatting_Event();
      } else if (type == 'Set Property') {
        event = this.get_Set_Property_Event();
      } else if (type == 'Custom Code') {
        event = this.get_Custom_Code_Event();
      } else if (type == 'Auto Link') {
        event = this.get_Auto_Link_Event();
      } else if (type == 'Auto Reply') {
        event = this.get_Auto_Reply_Event();
      } else if (type == 'Revisit') {
        event = this.get_Revisit_Event();
      } else if (type == 'Redirect') {
        event = this.get_Redirect_Event();
      } else if (type == 'Manage User Account') {
        event = this.get_Manage_User_Account_Event();
      } else if (type == 'Notification') {
        event = this.get_Notification_Event();
      } else if (type == 'Event Collection') {
        event = this.get_Event_Collection_Event();
      } else if (type == 'Terminate Session') {
        event = this.get_Terminate_Session_Event();
      } //  Set the Hex Color according to the event color scheme otherwise set default color


      var hexColor = this.builder.color_scheme.event_colors[type] || '#CECECE';
      var id = 'event_' + this.generateId(); //  Overide the general event structure with the relevant event specific data

      return Object.assign({
        id: id,
        name: type,
        type: type,
        global: false,
        active: {
          selected_type: 'yes',
          code: ''
        },
        run_next_events: {
          selected_type: 'yes',
          code: ''
        },
        event_data: {//  Specific event data goes here
        },
        hexColor: hexColor
      }, event);
    },
    get_CRUD_API_Event: function get_CRUD_API_Event() {
      return {
        event_data: {
          url: {
            text: '',
            code_editor_text: '',
            code_editor_mode: false
          },
          name: 'Get Items',
          method: 'get',
          trigger: 'on-enter',
          query_params: [],
          form_data: {
            convert_to_json: true,
            use_custom_code: false,
            params: [],
            code: ''
          },
          headers: [],
          response: {
            general: {
              default_success_message: {
                text: 'Completed successfully',
                code_editor_text: '',
                code_editor_mode: false
              },
              default_error_message: {
                text: 'Sorry, we are experiencing technical difficulties',
                code_editor_text: '',
                code_editor_mode: false
              }
            },
            selected_type: 'automatic',
            //  automatic, manual
            automatic: {
              on_handle_success: 'use_default_success_msg',
              //  do_nothing, use_default_success_msg
              on_handle_error: 'use_default_error_msg' //  do_nothing, use_default_error_msg

            },
            manual: {
              response_status_handles: [{
                status: '200',
                reference_name: 'response',
                //  e.g "response", "api_response", "api_data",
                attributes: [{
                  name: '',
                  //  e.g items_response
                  value: '{{ response }}' //  e.g {{ response }}

                }],
                on_handle: {
                  selected_type: 'use_custom_msg',
                  //  do_nothing, use_custom_msg
                  use_custom_msg: {
                    text: '',
                    code_editor_text: '',
                    code_editor_mode: false
                  }
                }
              }]
            }
          }
        }
      };
    },
    get_SMS_API_Event: function get_SMS_API_Event() {
      return {
        event_data: {
          sender: {
            text: '',
            code_editor_text: '',
            code_editor_mode: false
          },
          recipient: {
            text: '{{ ussd.msisdn }}',
            code_editor_text: '',
            code_editor_mode: false
          },
          message: {
            text: '',
            code_editor_text: '',
            code_editor_mode: false
          }
        }
      };
    },
    get_Airtime_Billing_API_Event: function get_Airtime_Billing_API_Event() {
      return {
        event_data: {
          //  Required fields (By Mobile network)
          airtime_billing_action: 'deduct_fee',
          //  deduct_fee, get_product_inventory_data, get_usage_consumption_data
          cancel_on_insufficient_funds: true,
          msisdn: {
            text: '{{ ussd.msisdn }}',
            code_editor_text: '',
            code_editor_mode: false
          },
          amount: {
            text: '1.00',
            code_editor_text: '',
            code_editor_mode: false
          },
          currency: {
            text: 'BWP',
            code_editor_text: '',
            code_editor_mode: false
          },
          description: {
            text: '',
            code_editor_text: '',
            code_editor_mode: false
          },
          //  Optional fields (By Mobile network)
          product_id: {
            text: '',
            code_editor_text: '',
            code_editor_mode: false
          },
          service_id: {
            text: '',
            code_editor_text: '',
            code_editor_mode: false
          },
          purchase_category_code: {
            text: '',
            code_editor_text: '',
            code_editor_mode: false
          },
          on_behalf_of: {
            text: '',
            code_editor_text: '',
            code_editor_mode: false
          },
          //  Optional fields (By Our platform)
          response_reference_name: 'airtime_billing_response',
          insufficient_funds_message: {
            text: '',
            code_editor_text: '',
            code_editor_mode: false
          },
          show_successful_payment_message: 'yes_then_terminate',
          //  yes_then_terminate, yes_then_do_not_terminate, no_then_terminate, no_then_do_not_terminate
          successful_payment_message: {
            text: '',
            code_editor_text: '',
            code_editor_mode: false
          }
        }
      };
    },
    get_Orange_Money_API_Event: function get_Orange_Money_API_Event() {
      return {
        event_data: {
          msisdn: {
            text: '{{ ussd.msisdn }}',
            code_editor_text: '',
            code_editor_mode: false
          },
          amount: {
            text: '',
            code_editor_text: '',
            code_editor_mode: false
          },
          payment_reference: {
            text: '',
            code_editor_text: '',
            code_editor_mode: false
          },
          merchant_code: {
            text: '',
            code_editor_text: '',
            code_editor_mode: false
          },
          endpoint: {
            text: '',
            code_editor_text: '',
            code_editor_mode: false
          }
        }
      };
    },
    get_Validation_Event: function get_Validation_Event() {
      return {
        event_data: {
          target: {
            text: '',
            //  e.g "{{ product.quantity }}"
            code_editor_text: '',
            code_editor_mode: false
          },
          rules: []
        }
      };
    },
    get_Formatting_Event: function get_Formatting_Event() {
      return {
        event_data: {
          target: {
            text: '',
            //  e.g "{{ product.quantity }}"
            code_editor_text: '',
            code_editor_mode: false
          },
          reference_name: '',
          //  e.g "product_name"
          rules: []
        }
      };
    },
    get_Set_Property_Event: function get_Set_Property_Event() {
      return {
        event_data: {
          reference_name: '',
          //  e.g "product_name"
          property: {
            text: '',
            //  e.g "{{ product.quantity }}"
            code_editor_text: '',
            code_editor_mode: false
          }
        }
      };
    },
    get_Custom_Code_Event: function get_Custom_Code_Event() {
      return {
        event_data: {
          code: ''
        }
      };
    },
    get_Auto_Link_Event: function get_Auto_Link_Event() {
      return {
        event_data: {
          trigger: {
            selected_type: 'automatic',
            //  automatic, manual
            manual: {
              input: {
                text: '',
                code_editor_text: '',
                code_editor_mode: false
              }
            }
          },
          link: {
            text: '',
            code_editor_text: '',
            code_editor_mode: false
          }
        }
      };
    },
    get_Auto_Reply_Event: function get_Auto_Reply_Event() {
      return {
        event_data: {
          automatic_replies: {
            text: '',
            code_editor_text: '',
            code_editor_mode: false
          }
        }
      };
    },
    get_Revisit_Event: function get_Revisit_Event() {
      return {
        event_data: {
          general: {
            trigger: {
              selected_type: 'automatic',
              //  automatic, manual
              manual: {
                input: {
                  text: '',
                  code_editor_text: '',
                  code_editor_mode: false
                }
              }
            },
            automatic_replies: {
              text: '',
              code_editor_text: '',
              code_editor_mode: false
            }
          },
          revisit_type: {
            selected_type: 'home_revisit',
            //  home_revisit, screen_revisit, marked_revisit
            screen_revisit: {
              link: {
                text: '',
                code_editor_text: '',
                code_editor_mode: false
              }
            },
            marked_revisit: {
              selected_marker: ''
            }
          }
        }
      };
    },
    get_Redirect_Event: function get_Redirect_Event() {
      return {
        event_data: {
          general: {
            trigger: {
              selected_type: 'automatic',
              //  automatic, manual
              manual: {
                input: {
                  text: '',
                  code_editor_text: '',
                  code_editor_mode: false
                }
              }
            }
          },
          service_code: {
            text: '',
            code_editor_text: '',
            code_editor_mode: false
          }
        }
      };
    },
    get_Manage_User_Account_Event: function get_Manage_User_Account_Event() {
      return {
        event_data: {
          action: 'create_or_update',
          //  create_or_update, check_existence
          first_name: {
            text: '',
            code_editor_text: '',
            code_editor_mode: false
          },
          last_name: {
            text: '',
            code_editor_text: '',
            code_editor_mode: false
          },
          mobile_number: {
            text: '{{ ussd.msisdn }}',
            code_editor_text: '',
            code_editor_mode: false
          },
          additional_fields: [],
          user_account_reference_name: 'user_account',
          has_account_reference_name: 'has_account'
        }
      };
    },
    get_Notification_Event: function get_Notification_Event() {
      return {
        event_data: {
          message: {
            text: '',
            code_editor_text: '',
            code_editor_mode: false
          },
          continue_text: {
            text: 'Continue',
            code_editor_text: '',
            code_editor_mode: false
          },
          msisdn: {
            text: '{{ ussd.msisdn }}',
            code_editor_text: '',
            code_editor_mode: false
          }
        }
      };
    },
    get_Event_Collection_Event: function get_Event_Collection_Event() {
      return {
        event_data: {
          events: []
        }
      };
    },
    get_Terminate_Session_Event: function get_Terminate_Session_Event() {
      return {};
    },
    getClonedEvent: function getClonedEvent(event) {
      var clonedEvent = lodash__WEBPACK_IMPORTED_MODULE_0___default().cloneDeep(event);

      delete clonedEvent.id;
      return _objectSpread(_objectSpread({}, this.getBlankEvent()), clonedEvent);
    },
    addEvent: function addEvent(events, event) {
      events.push(event);
    },
    updateEvent: function updateEvent(events, event, index) {
      events.splice(index, 1, event);
    },
    removeEventByIndex: function removeEventByIndex(events, index) {
      events.splice(index, 1);
    },
    removeEventsByIndexes: function removeEventsByIndexes(events, indexes) {
      lodash__WEBPACK_IMPORTED_MODULE_0___default().pullAt(events, indexes);
    },
    //  CRUD Api Query Param Methods
    searchQueryParams: function searchQueryParams(queryParams, search) {
      var exactMatch = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (search !== null && search !== '') {
        search = search.toLowerCase();
        return queryParams.filter(function (queryParam) {
          var matchesQueryParamName = exactMatch === true ? queryParam.name.toLowerCase() === search : queryParam.name.toLowerCase().includes(search);
          return matchesQueryParamName;
        });
      } else {
        return queryParams;
      }
    },
    getBlankQueryParam: function getBlankQueryParam() {
      return {
        name: '',
        value: {
          text: '',
          code_editor_text: '',
          code_editor_mode: false
        }
      };
    },
    getClonedQueryParam: function getClonedQueryParam(queryParam) {
      var clonedQueryParam = lodash__WEBPACK_IMPORTED_MODULE_0___default().cloneDeep(queryParam);

      return _objectSpread(_objectSpread({}, this.getBlankQueryParam()), clonedQueryParam);
    },
    addQueryParam: function addQueryParam(queryParams, queryParam) {
      queryParams.push(queryParam);
    },
    updateQueryParam: function updateQueryParam(queryParams, queryParam, index) {
      queryParams.splice(index, 1, queryParam);
    },
    removeQueryParamByIndex: function removeQueryParamByIndex(queryParams, index) {
      queryParams.splice(index, 1);
    },
    removeQueryParamsByIndexes: function removeQueryParamsByIndexes(queryParams, indexes) {
      lodash__WEBPACK_IMPORTED_MODULE_0___default().pullAt(queryParams, indexes);
    },
    //  CRUD Api Header Methods
    searchHeaders: function searchHeaders(headers, search) {
      var exactMatch = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (search !== null && search !== '') {
        search = search.toLowerCase();
        return headers.filter(function (header) {
          var matchesHeaderName = exactMatch === true ? header.name.toLowerCase() === search : header.name.toLowerCase().includes(search);
          return matchesHeaderName;
        });
      } else {
        return headers;
      }
    },
    getBlankHeader: function getBlankHeader() {
      return {
        name: '',
        value: {
          text: '',
          code_editor_text: '',
          code_editor_mode: false
        }
      };
    },
    getClonedHeader: function getClonedHeader(header) {
      var clonedHeader = lodash__WEBPACK_IMPORTED_MODULE_0___default().cloneDeep(header);

      return _objectSpread(_objectSpread({}, this.getBlankHeader()), clonedHeader);
    },
    addHeader: function addHeader(headers, header) {
      headers.push(header);
    },
    updateHeader: function updateHeader(headers, header, index) {
      headers.splice(index, 1, header);
    },
    removeHeaderByIndex: function removeHeaderByIndex(headers, index) {
      headers.splice(index, 1);
    },
    removeHeadersByIndexes: function removeHeadersByIndexes(headers, indexes) {
      lodash__WEBPACK_IMPORTED_MODULE_0___default().pullAt(headers, indexes);
    },
    //  CRUD Api Body Param Methods
    searchBodyParams: function searchBodyParams(params, search) {
      var exactMatch = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (search !== null && search !== '') {
        search = search.toLowerCase();
        return params.filter(function (param) {
          var matchesBodyParamName = exactMatch === true ? param.name.toLowerCase() === search : param.name.toLowerCase().includes(search);
          return matchesBodyParamName;
        });
      } else {
        return params;
      }
    },
    getBlankBodyParam: function getBlankBodyParam() {
      return {
        name: '',
        value: {
          text: '',
          code_editor_text: '',
          code_editor_mode: false
        }
      };
    },
    getClonedBodyParam: function getClonedBodyParam(param) {
      var clonedBodyParam = lodash__WEBPACK_IMPORTED_MODULE_0___default().cloneDeep(param);

      return _objectSpread(_objectSpread({}, this.getBlankBodyParam()), clonedBodyParam);
    },
    addBodyParam: function addBodyParam(params, param) {
      params.push(param);
    },
    updateBodyParam: function updateBodyParam(params, param, index) {
      params.splice(index, 1, param);
    },
    removeBodyParamByIndex: function removeBodyParamByIndex(params, index) {
      params.splice(index, 1);
    },
    removeBodyParamsByIndexes: function removeBodyParamsByIndexes(params, indexes) {
      lodash__WEBPACK_IMPORTED_MODULE_0___default().pullAt(params, indexes);
    },
    //  CRUD Api Status Code Methods
    searchStatusCodes: function searchStatusCodes(statusCodes, search) {
      var exactMatch = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (search !== null && search !== '') {
        search = search.toLowerCase();
        return statusCodes.filter(function (statusCode) {
          var matchesStatusCode = exactMatch === true ? statusCode.status.toLowerCase() === search : statusCode.status.toLowerCase().includes(search);
          return matchesStatusCode;
        });
      } else {
        return statusCodes;
      }
    },
    getBlankStatusCode: function getBlankStatusCode(statusCode) {
      return {
        status: statusCode,
        //  e.g "100", "200" and "300"
        reference_name: 'response',
        //  e.g "response", "api_response", "api_data",
        attributes: [{
          name: '',
          value: ''
        }],
        on_handle: {
          selected_type: 'use_custom_msg',
          //  do_nothing, use_custom_msg
          use_custom_msg: {
            text: '',
            code_editor_text: '',
            code_editor_mode: false
          }
        }
      };
    },
    getClonedStatusCode: function getClonedStatusCode(statusCode) {
      var clonedStatusCode = lodash__WEBPACK_IMPORTED_MODULE_0___default().cloneDeep(statusCode);

      return _objectSpread(_objectSpread({}, this.getBlankStatusCode()), clonedStatusCode);
    },
    addStatusCode: function addStatusCode(statusCodes, statusCode) {
      statusCodes.push(statusCode);
    },
    updateStatusCode: function updateStatusCode(statusCodes, statusCode, index) {
      statusCodes.splice(index, 1, statusCode);
    },
    removeStatusCodeByIndex: function removeStatusCodeByIndex(statusCodes, index) {
      statusCodes.splice(index, 1);
    },
    removeStatusCodesByIndexes: function removeStatusCodesByIndexes(statusCodes, indexes) {
      lodash__WEBPACK_IMPORTED_MODULE_0___default().pullAt(statusCodes, indexes);
    },
    //  CRUD Api Status Code Attribute Methods
    searchStatusCodeAttributes: function searchStatusCodeAttributes(attributes, search) {
      var exactMatch = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (search !== null && search !== '') {
        search = search.toLowerCase();
        return attributes.filter(function (attribute) {
          var matchesStatusCodeAttribute = exactMatch === true ? attribute.name.toLowerCase() === search : attribute.name.toLowerCase().includes(search);
          return matchesStatusCodeAttribute;
        });
      } else {
        return attributes;
      }
    },
    getBlankStatusCodeAttribute: function getBlankStatusCodeAttribute(attribute) {
      return {
        name: '',
        value: {
          text: '',
          code_editor_text: '',
          code_editor_mode: false
        }
      };
    },
    getClonedStatusCodeAttribute: function getClonedStatusCodeAttribute(attribute) {
      var clonedStatusCodeAttribute = lodash__WEBPACK_IMPORTED_MODULE_0___default().cloneDeep(attribute);

      return _objectSpread(_objectSpread({}, this.getBlankStatusCodeAttribute()), clonedStatusCodeAttribute);
    },
    addStatusCodeAttribute: function addStatusCodeAttribute(attributes, attribute) {
      attributes.push(attribute);
    },
    updateStatusCodeAttribute: function updateStatusCodeAttribute(attributes, attribute, index) {
      attributes.splice(index, 1, attribute);
    },
    removeStatusCodeAttributeByIndex: function removeStatusCodeAttributeByIndex(attributes, index) {
      attributes.splice(index, 1);
    },
    removeStatusCodeAttributesByIndexes: function removeStatusCodeAttributesByIndexes(attributes, indexes) {
      lodash__WEBPACK_IMPORTED_MODULE_0___default().pullAt(attributes, indexes);
    }
  }
});

/***/ }),

/***/ "./resources/js/Components/Badges/PrimaryBadge.vue":
/*!*********************************************************!*\
  !*** ./resources/js/Components/Badges/PrimaryBadge.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PrimaryBadge_vue_vue_type_template_id_6f9f5936__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PrimaryBadge.vue?vue&type=template&id=6f9f5936 */ "./resources/js/Components/Badges/PrimaryBadge.vue?vue&type=template&id=6f9f5936");
/* harmony import */ var _PrimaryBadge_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PrimaryBadge.vue?vue&type=script&lang=js */ "./resources/js/Components/Badges/PrimaryBadge.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_juliantabona_Sites_laravel_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_juliantabona_Sites_laravel_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_PrimaryBadge_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_PrimaryBadge_vue_vue_type_template_id_6f9f5936__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Components/Badges/PrimaryBadge.vue"]])
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

/***/ "./resources/js/Components/CodeEditor/HiddenCode/CodeEditorModal.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/Components/CodeEditor/HiddenCode/CodeEditorModal.vue ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CodeEditorModal_vue_vue_type_template_id_c5772016__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CodeEditorModal.vue?vue&type=template&id=c5772016 */ "./resources/js/Components/CodeEditor/HiddenCode/CodeEditorModal.vue?vue&type=template&id=c5772016");
/* harmony import */ var _CodeEditorModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CodeEditorModal.vue?vue&type=script&lang=js */ "./resources/js/Components/CodeEditor/HiddenCode/CodeEditorModal.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_juliantabona_Sites_laravel_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_juliantabona_Sites_laravel_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_CodeEditorModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_CodeEditorModal_vue_vue_type_template_id_c5772016__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Components/CodeEditor/HiddenCode/CodeEditorModal.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Components/CodeEditor/HiddenCode/index.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/Components/CodeEditor/HiddenCode/index.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_04d99cd4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=04d99cd4 */ "./resources/js/Components/CodeEditor/HiddenCode/index.vue?vue&type=template&id=04d99cd4");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./resources/js/Components/CodeEditor/HiddenCode/index.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_juliantabona_Sites_laravel_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_juliantabona_Sites_laravel_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_index_vue_vue_type_template_id_04d99cd4__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Components/CodeEditor/HiddenCode/index.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Components/SearchBar/DefaultSearchBar.vue":
/*!****************************************************************!*\
  !*** ./resources/js/Components/SearchBar/DefaultSearchBar.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DefaultSearchBar_vue_vue_type_template_id_cafcf00e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DefaultSearchBar.vue?vue&type=template&id=cafcf00e */ "./resources/js/Components/SearchBar/DefaultSearchBar.vue?vue&type=template&id=cafcf00e");
/* harmony import */ var _DefaultSearchBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DefaultSearchBar.vue?vue&type=script&lang=js */ "./resources/js/Components/SearchBar/DefaultSearchBar.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_juliantabona_Sites_laravel_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_juliantabona_Sites_laravel_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_DefaultSearchBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_DefaultSearchBar_vue_vue_type_template_id_cafcf00e__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Components/SearchBar/DefaultSearchBar.vue"]])
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

/***/ "./resources/js/Components/TextOrCodeEditor/TextOrCodeEditor.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/Components/TextOrCodeEditor/TextOrCodeEditor.vue ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TextOrCodeEditor_vue_vue_type_template_id_4d238b54__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextOrCodeEditor.vue?vue&type=template&id=4d238b54 */ "./resources/js/Components/TextOrCodeEditor/TextOrCodeEditor.vue?vue&type=template&id=4d238b54");
/* harmony import */ var _TextOrCodeEditor_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TextOrCodeEditor.vue?vue&type=script&lang=js */ "./resources/js/Components/TextOrCodeEditor/TextOrCodeEditor.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_juliantabona_Sites_laravel_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_juliantabona_Sites_laravel_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_TextOrCodeEditor_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_TextOrCodeEditor_vue_vue_type_template_id_4d238b54__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Components/TextOrCodeEditor/TextOrCodeEditor.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/EventsEditor/CreateOrUpdate/EventEditor/EventTypes/Apis/Crud-Api copy/Headers/CreateOrUpdateHeader/CreateOrUpdateHeaderModal.vue":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./resources/js/Pages/Versions/Show/Builder/Content/Editor/EventsEditor/CreateOrUpdate/EventEditor/EventTypes/Apis/Crud-Api copy/Headers/CreateOrUpdateHeader/CreateOrUpdateHeaderModal.vue ***!
  \**************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CreateOrUpdateHeaderModal_vue_vue_type_template_id_583d934e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateOrUpdateHeaderModal.vue?vue&type=template&id=583d934e */ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/EventsEditor/CreateOrUpdate/EventEditor/EventTypes/Apis/Crud-Api copy/Headers/CreateOrUpdateHeader/CreateOrUpdateHeaderModal.vue?vue&type=template&id=583d934e");
/* harmony import */ var _CreateOrUpdateHeaderModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateOrUpdateHeaderModal.vue?vue&type=script&lang=js */ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/EventsEditor/CreateOrUpdate/EventEditor/EventTypes/Apis/Crud-Api copy/Headers/CreateOrUpdateHeader/CreateOrUpdateHeaderModal.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_juliantabona_Sites_laravel_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_juliantabona_Sites_laravel_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_CreateOrUpdateHeaderModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_CreateOrUpdateHeaderModal_vue_vue_type_template_id_583d934e__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Versions/Show/Builder/Content/Editor/EventsEditor/CreateOrUpdate/EventEditor/EventTypes/Apis/Crud-Api copy/Headers/CreateOrUpdateHeader/CreateOrUpdateHeaderModal.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/EventsEditor/CreateOrUpdate/EventEditor/EventTypes/Apis/Crud-Api copy/Headers/DeleteHeader/DeleteHeaderModal.vue":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./resources/js/Pages/Versions/Show/Builder/Content/Editor/EventsEditor/CreateOrUpdate/EventEditor/EventTypes/Apis/Crud-Api copy/Headers/DeleteHeader/DeleteHeaderModal.vue ***!
  \**********************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DeleteHeaderModal_vue_vue_type_template_id_ea1d2d0e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DeleteHeaderModal.vue?vue&type=template&id=ea1d2d0e */ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/EventsEditor/CreateOrUpdate/EventEditor/EventTypes/Apis/Crud-Api copy/Headers/DeleteHeader/DeleteHeaderModal.vue?vue&type=template&id=ea1d2d0e");
/* harmony import */ var _DeleteHeaderModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DeleteHeaderModal.vue?vue&type=script&lang=js */ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/EventsEditor/CreateOrUpdate/EventEditor/EventTypes/Apis/Crud-Api copy/Headers/DeleteHeader/DeleteHeaderModal.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_juliantabona_Sites_laravel_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_juliantabona_Sites_laravel_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_DeleteHeaderModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_DeleteHeaderModal_vue_vue_type_template_id_ea1d2d0e__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Versions/Show/Builder/Content/Editor/EventsEditor/CreateOrUpdate/EventEditor/EventTypes/Apis/Crud-Api copy/Headers/DeleteHeader/DeleteHeaderModal.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/EventsEditor/CreateOrUpdate/EventEditor/EventTypes/Apis/Crud-Api copy/Headers/index.vue":
/*!*********************************************************************************************************************************************************!*\
  !*** ./resources/js/Pages/Versions/Show/Builder/Content/Editor/EventsEditor/CreateOrUpdate/EventEditor/EventTypes/Apis/Crud-Api copy/Headers/index.vue ***!
  \*********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_5db9f667__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=5db9f667 */ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/EventsEditor/CreateOrUpdate/EventEditor/EventTypes/Apis/Crud-Api copy/Headers/index.vue?vue&type=template&id=5db9f667");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/EventsEditor/CreateOrUpdate/EventEditor/EventTypes/Apis/Crud-Api copy/Headers/index.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_juliantabona_Sites_laravel_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_juliantabona_Sites_laravel_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_index_vue_vue_type_template_id_5db9f667__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Versions/Show/Builder/Content/Editor/EventsEditor/CreateOrUpdate/EventEditor/EventTypes/Apis/Crud-Api copy/Headers/index.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Components/Badges/PrimaryBadge.vue?vue&type=script&lang=js":
/*!*********************************************************************************!*\
  !*** ./resources/js/Components/Badges/PrimaryBadge.vue?vue&type=script&lang=js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PrimaryBadge_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PrimaryBadge_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PrimaryBadge.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Badges/PrimaryBadge.vue?vue&type=script&lang=js");
 

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

/***/ "./resources/js/Components/CodeEditor/HiddenCode/CodeEditorModal.vue?vue&type=script&lang=js":
/*!***************************************************************************************************!*\
  !*** ./resources/js/Components/CodeEditor/HiddenCode/CodeEditorModal.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CodeEditorModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CodeEditorModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CodeEditorModal.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/CodeEditor/HiddenCode/CodeEditorModal.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Components/CodeEditor/HiddenCode/index.vue?vue&type=script&lang=js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Components/CodeEditor/HiddenCode/index.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/CodeEditor/HiddenCode/index.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Components/SearchBar/DefaultSearchBar.vue?vue&type=script&lang=js":
/*!****************************************************************************************!*\
  !*** ./resources/js/Components/SearchBar/DefaultSearchBar.vue?vue&type=script&lang=js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DefaultSearchBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DefaultSearchBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DefaultSearchBar.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/SearchBar/DefaultSearchBar.vue?vue&type=script&lang=js");
 

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

/***/ "./resources/js/Components/TextOrCodeEditor/TextOrCodeEditor.vue?vue&type=script&lang=js":
/*!***********************************************************************************************!*\
  !*** ./resources/js/Components/TextOrCodeEditor/TextOrCodeEditor.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TextOrCodeEditor_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TextOrCodeEditor_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TextOrCodeEditor.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/TextOrCodeEditor/TextOrCodeEditor.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/EventsEditor/CreateOrUpdate/EventEditor/EventTypes/Apis/Crud-Api copy/Headers/CreateOrUpdateHeader/CreateOrUpdateHeaderModal.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./resources/js/Pages/Versions/Show/Builder/Content/Editor/EventsEditor/CreateOrUpdate/EventEditor/EventTypes/Apis/Crud-Api copy/Headers/CreateOrUpdateHeader/CreateOrUpdateHeaderModal.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CreateOrUpdateHeaderModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CreateOrUpdateHeaderModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CreateOrUpdateHeaderModal.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/EventsEditor/CreateOrUpdate/EventEditor/EventTypes/Apis/Crud-Api copy/Headers/CreateOrUpdateHeader/CreateOrUpdateHeaderModal.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/EventsEditor/CreateOrUpdate/EventEditor/EventTypes/Apis/Crud-Api copy/Headers/DeleteHeader/DeleteHeaderModal.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./resources/js/Pages/Versions/Show/Builder/Content/Editor/EventsEditor/CreateOrUpdate/EventEditor/EventTypes/Apis/Crud-Api copy/Headers/DeleteHeader/DeleteHeaderModal.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DeleteHeaderModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DeleteHeaderModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DeleteHeaderModal.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/EventsEditor/CreateOrUpdate/EventEditor/EventTypes/Apis/Crud-Api copy/Headers/DeleteHeader/DeleteHeaderModal.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/EventsEditor/CreateOrUpdate/EventEditor/EventTypes/Apis/Crud-Api copy/Headers/index.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./resources/js/Pages/Versions/Show/Builder/Content/Editor/EventsEditor/CreateOrUpdate/EventEditor/EventTypes/Apis/Crud-Api copy/Headers/index.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/EventsEditor/CreateOrUpdate/EventEditor/EventTypes/Apis/Crud-Api copy/Headers/index.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Components/Badges/PrimaryBadge.vue?vue&type=template&id=6f9f5936":
/*!***************************************************************************************!*\
  !*** ./resources/js/Components/Badges/PrimaryBadge.vue?vue&type=template&id=6f9f5936 ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PrimaryBadge_vue_vue_type_template_id_6f9f5936__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PrimaryBadge_vue_vue_type_template_id_6f9f5936__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PrimaryBadge.vue?vue&type=template&id=6f9f5936 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Badges/PrimaryBadge.vue?vue&type=template&id=6f9f5936");


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

/***/ "./resources/js/Components/CodeEditor/HiddenCode/CodeEditorModal.vue?vue&type=template&id=c5772016":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/Components/CodeEditor/HiddenCode/CodeEditorModal.vue?vue&type=template&id=c5772016 ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CodeEditorModal_vue_vue_type_template_id_c5772016__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CodeEditorModal_vue_vue_type_template_id_c5772016__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CodeEditorModal.vue?vue&type=template&id=c5772016 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/CodeEditor/HiddenCode/CodeEditorModal.vue?vue&type=template&id=c5772016");


/***/ }),

/***/ "./resources/js/Components/CodeEditor/HiddenCode/index.vue?vue&type=template&id=04d99cd4":
/*!***********************************************************************************************!*\
  !*** ./resources/js/Components/CodeEditor/HiddenCode/index.vue?vue&type=template&id=04d99cd4 ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_04d99cd4__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_04d99cd4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=template&id=04d99cd4 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/CodeEditor/HiddenCode/index.vue?vue&type=template&id=04d99cd4");


/***/ }),

/***/ "./resources/js/Components/SearchBar/DefaultSearchBar.vue?vue&type=template&id=cafcf00e":
/*!**********************************************************************************************!*\
  !*** ./resources/js/Components/SearchBar/DefaultSearchBar.vue?vue&type=template&id=cafcf00e ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DefaultSearchBar_vue_vue_type_template_id_cafcf00e__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DefaultSearchBar_vue_vue_type_template_id_cafcf00e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DefaultSearchBar.vue?vue&type=template&id=cafcf00e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/SearchBar/DefaultSearchBar.vue?vue&type=template&id=cafcf00e");


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

/***/ "./resources/js/Components/TextOrCodeEditor/TextOrCodeEditor.vue?vue&type=template&id=4d238b54":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/Components/TextOrCodeEditor/TextOrCodeEditor.vue?vue&type=template&id=4d238b54 ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TextOrCodeEditor_vue_vue_type_template_id_4d238b54__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TextOrCodeEditor_vue_vue_type_template_id_4d238b54__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TextOrCodeEditor.vue?vue&type=template&id=4d238b54 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/TextOrCodeEditor/TextOrCodeEditor.vue?vue&type=template&id=4d238b54");


/***/ }),

/***/ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/EventsEditor/CreateOrUpdate/EventEditor/EventTypes/Apis/Crud-Api copy/Headers/CreateOrUpdateHeader/CreateOrUpdateHeaderModal.vue?vue&type=template&id=583d934e":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./resources/js/Pages/Versions/Show/Builder/Content/Editor/EventsEditor/CreateOrUpdate/EventEditor/EventTypes/Apis/Crud-Api copy/Headers/CreateOrUpdateHeader/CreateOrUpdateHeaderModal.vue?vue&type=template&id=583d934e ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CreateOrUpdateHeaderModal_vue_vue_type_template_id_583d934e__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CreateOrUpdateHeaderModal_vue_vue_type_template_id_583d934e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../../../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CreateOrUpdateHeaderModal.vue?vue&type=template&id=583d934e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/EventsEditor/CreateOrUpdate/EventEditor/EventTypes/Apis/Crud-Api copy/Headers/CreateOrUpdateHeader/CreateOrUpdateHeaderModal.vue?vue&type=template&id=583d934e");


/***/ }),

/***/ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/EventsEditor/CreateOrUpdate/EventEditor/EventTypes/Apis/Crud-Api copy/Headers/DeleteHeader/DeleteHeaderModal.vue?vue&type=template&id=ea1d2d0e":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./resources/js/Pages/Versions/Show/Builder/Content/Editor/EventsEditor/CreateOrUpdate/EventEditor/EventTypes/Apis/Crud-Api copy/Headers/DeleteHeader/DeleteHeaderModal.vue?vue&type=template&id=ea1d2d0e ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DeleteHeaderModal_vue_vue_type_template_id_ea1d2d0e__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DeleteHeaderModal_vue_vue_type_template_id_ea1d2d0e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../../../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DeleteHeaderModal.vue?vue&type=template&id=ea1d2d0e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/EventsEditor/CreateOrUpdate/EventEditor/EventTypes/Apis/Crud-Api copy/Headers/DeleteHeader/DeleteHeaderModal.vue?vue&type=template&id=ea1d2d0e");


/***/ }),

/***/ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/EventsEditor/CreateOrUpdate/EventEditor/EventTypes/Apis/Crud-Api copy/Headers/index.vue?vue&type=template&id=5db9f667":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./resources/js/Pages/Versions/Show/Builder/Content/Editor/EventsEditor/CreateOrUpdate/EventEditor/EventTypes/Apis/Crud-Api copy/Headers/index.vue?vue&type=template&id=5db9f667 ***!
  \***************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_5db9f667__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_5db9f667__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=template&id=5db9f667 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/EventsEditor/CreateOrUpdate/EventEditor/EventTypes/Apis/Crud-Api copy/Headers/index.vue?vue&type=template&id=5db9f667");


/***/ })

}]);