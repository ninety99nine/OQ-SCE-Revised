"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Versions_Show_Builder_Content_Editor_EventsEditor_CreateOrUpdate_EventEdit-fc4d08"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Alert/PrimaryAlert.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Alert/PrimaryAlert.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({});

/***/ }),

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/CascadeOrCodeEditor/CascadeOrCodeEditor.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/CascadeOrCodeEditor/CascadeOrCodeEditor.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Error_DefaultError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Error/DefaultError */ "./resources/js/Components/Error/DefaultError.vue");
/* harmony import */ var _CodeEditor_HiddenCode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CodeEditor/HiddenCode */ "./resources/js/Components/CodeEditor/HiddenCode/index.vue");
/* harmony import */ var _Popover_InfoPopover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../Popover/InfoPopover */ "./resources/js/Components/Popover/InfoPopover.vue");
/* harmony import */ var _Switch_DefaultSwitch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Switch/DefaultSwitch */ "./resources/js/Components/Switch/DefaultSwitch.vue");
/* harmony import */ var _components_TextEditor_TextEditor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/TextEditor/TextEditor */ "./resources/js/Components/TextEditor/TextEditor.vue");
/* harmony import */ var _components_CodeEditor_CodeEditor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/CodeEditor/CodeEditor */ "./resources/js/Components/CodeEditor/CodeEditor.vue");







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    DefaultError: _Error_DefaultError__WEBPACK_IMPORTED_MODULE_1__["default"],
    InfoPopover: _Popover_InfoPopover__WEBPACK_IMPORTED_MODULE_3__["default"],
    DefaultSwitch: _Switch_DefaultSwitch__WEBPACK_IMPORTED_MODULE_4__["default"],
    TextEditor: _components_TextEditor_TextEditor__WEBPACK_IMPORTED_MODULE_5__["default"],
    CodeEditor: _components_CodeEditor_CodeEditor__WEBPACK_IMPORTED_MODULE_6__["default"],
    HiddenCode: _CodeEditor_HiddenCode__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: {
    //  Below are the cascade and code editor options
    modelValue: Object,
    error: String,
    label: String,
    note: String,
    info: String,
    showCode: {
      type: Boolean,
      "default": false
    },
    //  Below are the cascade options
    selectedValues: Array,
    options: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    placeholder: String,
    //  Below are the code editor options
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
    return {};
  },
  methods: {
    updateLink: function updateLink(values) {
      //  If we have no values
      if (values == null) {
        //  Assign an empty value
        this.modelValue.text = ''; //  Update the selectedValues

        this.$emit('update:selectedValues', []); //  If we have an array of values
      } else if (values.length) {
        //  Get the last value
        var lastValue = values[values.length - 1]; //  Assign the last value

        this.modelValue.text = lastValue; //  Update the selectedValues

        this.$emit('update:selectedValues', values);
      }
    }
  }
});

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
/* harmony import */ var _components_CodeSnippet_DefaultCodeSnippet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/CodeSnippet/DefaultCodeSnippet */ "./resources/js/Components/CodeSnippet/DefaultCodeSnippet.vue");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['modelValue', 'expandable', 'error', //  Below are the code editor options
  'wrap_code', 'read_only', 'autofocus', 'hide_header', 'width', 'height', 'max_width', 'min_width', 'max_height', 'min_height', 'border_radius', 'language_selector', 'languages', 'selector_width', 'selector_height', 'selector_displayed_by_default', 'display_language', 'copy_code', 'z_index', 'font_size', 'theme'],
  components: {
    CodeEditor: _CodeEditor_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    CodeEditorModal: _CodeEditorModal__WEBPACK_IMPORTED_MODULE_1__["default"],
    DefaultCodeSnippet: _components_CodeSnippet_DefaultCodeSnippet__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      localModelValue: this.modelValue,
      showTrailingDots: true,
      setInterval: null,
      changes: 0,
      hints: 0
    };
  },
  watch: {
    modelValue: function modelValue(newValue, oldValue) {
      this.localModelValue = newValue; //  Increment the number of changes

      ++this.changes; //  If we have more than 10 changes to the modelValue

      if (this.changes > 10) {
        //  Hint to expand the code editor
        this.hintExpandable(2);
      }
    },
    localModelValue: function localModelValue(newValue, oldValue) {
      this.$emit('update:modelValue', newValue);
    }
  },
  methods: {
    /**
     *  The expandable property is used by the TextOrCodeEditor component
     *  to support minimizing and maximizing the Code Editor component.
     *
     *  We want to indicate to the user that this feature is available
     *  by using the hintExpandable() and onMouseLeave() events of the
     *  Hidden Code Badge.
     */
    hintExpandable: function hintExpandable(hints) {
      var _this = this;

      if (this.expandable) {
        if (this.setInterval == null) {
          this.hints = hints;
          this.setInterval = setInterval(function () {
            if (_this.hints <= 0) {
              _this.resetInterval();
            } else {
              _this.showTrailingDots = !_this.showTrailingDots;

              if (_this.showTrailingDots == false) {
                --_this.hints;
              }
            }
          }, 5000);
        }
      }
    },
    resetInterval: function resetInterval() {
      clearInterval(this.setInterval);
      this.showTrailingDots = true;
      this.setInterval = null;
    },
    onMouseLeave: function onMouseLeave() {
      this.resetInterval();
    }
  },
  unmounted: function unmounted() {
    this.resetInterval();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/CodeSnippet/DefaultCodeSnippet.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/CodeSnippet/DefaultCodeSnippet.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Popover/InfoPopover.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Popover/InfoPopover.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    'info': String,
    'title': String,
    'size': {
      type: String,
      "default": '4'
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Select/DefaultSelect.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Select/DefaultSelect.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Popover_InfoPopover__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../Popover/InfoPopover */ "./resources/js/Components/Popover/InfoPopover.vue");
/* harmony import */ var _Error_DefaultError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../Error/DefaultError */ "./resources/js/Components/Error/DefaultError.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    InfoPopover: _Popover_InfoPopover__WEBPACK_IMPORTED_MODULE_0__["default"],
    DefaultError: _Error_DefaultError__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    modelValue: [String, Number],
    label: String,
    info: '',
    size: {
      type: String,
      "default": 'xs'
    },
    disabled: {
      type: Boolean,
      "default": false
    },
    placeholder: String,
    error: {
      type: String,
      "default": ''
    },
    options: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    appendClasses: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    prependClasses: {
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  },
  watch: {
    modelValue: function modelValue(newValue, oldValue) {
      console.log('DefaultSelect');
      this.$emit('update:modelValue', newValue);
    }
  },
  methods: {
    updateValue: function updateValue(event) {
      this.$emit('update:modelValue', event.target.value);
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/TextOrCodeEditor/TextOrCodeEditor.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/TextOrCodeEditor/TextOrCodeEditor.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Error_DefaultError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Error/DefaultError */ "./resources/js/Components/Error/DefaultError.vue");
/* harmony import */ var _CodeEditor_HiddenCode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CodeEditor/HiddenCode */ "./resources/js/Components/CodeEditor/HiddenCode/index.vue");
/* harmony import */ var _Popover_InfoPopover__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../Popover/InfoPopover */ "./resources/js/Components/Popover/InfoPopover.vue");
/* harmony import */ var _Switch_DefaultSwitch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Switch/DefaultSwitch */ "./resources/js/Components/Switch/DefaultSwitch.vue");
/* harmony import */ var _components_TextEditor_TextEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/TextEditor/TextEditor */ "./resources/js/Components/TextEditor/TextEditor.vue");
/* harmony import */ var _components_CodeEditor_CodeEditor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/CodeEditor/CodeEditor */ "./resources/js/Components/CodeEditor/CodeEditor.vue");
var _props;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    DefaultError: _Error_DefaultError__WEBPACK_IMPORTED_MODULE_0__["default"],
    InfoPopover: _Popover_InfoPopover__WEBPACK_IMPORTED_MODULE_2__["default"],
    DefaultSwitch: _Switch_DefaultSwitch__WEBPACK_IMPORTED_MODULE_3__["default"],
    TextEditor: _components_TextEditor_TextEditor__WEBPACK_IMPORTED_MODULE_4__["default"],
    CodeEditor: _components_CodeEditor_CodeEditor__WEBPACK_IMPORTED_MODULE_5__["default"],
    HiddenCode: _CodeEditor_HiddenCode__WEBPACK_IMPORTED_MODULE_1__["default"]
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Components/ScreenOrDisplayMarkerSelector.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Components/ScreenOrDisplayMarkerSelector.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _stores_VersionBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stores/VersionBuilder */ "./resources/js/Stores/VersionBuilder.js");
/* harmony import */ var _components_Select_DefaultSelect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/Select/DefaultSelect */ "./resources/js/Components/Select/DefaultSelect.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['modelValue', 'error'],
  components: {
    DefaultSelect: _components_Select_DefaultSelect__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      useVersionBuilder: (0,_stores_VersionBuilder__WEBPACK_IMPORTED_MODULE_0__.useVersionBuilder)()
    };
  },
  watch: {
    modelValue: function modelValue(newValue, oldValue) {
      console.log('ScreenOrDisplaySelector');
      this.$emit('update:modelValue', newValue);
    }
  },
  computed: {
    markerOptions: function markerOptions() {
      return this.useVersionBuilder.screenAndDisplayMarkers.map(function (marker) {
        return {
          label: marker,
          value: marker
        };
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Components/ScreenOrDisplaySelector.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Components/ScreenOrDisplaySelector.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _stores_VersionBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stores/VersionBuilder */ "./resources/js/Stores/VersionBuilder.js");
/* harmony import */ var _components_CascadeOrCodeEditor_CascadeOrCodeEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/CascadeOrCodeEditor/CascadeOrCodeEditor */ "./resources/js/Components/CascadeOrCodeEditor/CascadeOrCodeEditor.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    CascadeOrCodeEditor: _components_CascadeOrCodeEditor_CascadeOrCodeEditor__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    modelValue: Object,
    label: {
      type: String,
      "default": 'Link'
    },
    placeholder: {
      type: String,
      "default": 'Select screen or display'
    },

    /**
     *  Provide a screen to extract the displays as options (Optional)
     */
    screen: Object
  },
  data: function data() {
    return {
      options: [],
      selectedValues: [],
      useVersionBuilder: (0,_stores_VersionBuilder__WEBPACK_IMPORTED_MODULE_0__.useVersionBuilder)()
    };
  },
  methods: {
    getOptions: function getOptions() {
      var options = []; //  Set the screen options

      var screenOptions = this.useVersionBuilder.screens.map(function (screen) {
        return {
          value: screen.id,
          label: screen.name
        };
      }); //  Add the screen options

      options.push({
        label: 'Screens',
        value: 'screens',
        children: screenOptions
      });

      if (this.screen) {
        //  Set the display options
        var displayOptions = this.screen.displays.map(function (display) {
          return {
            value: display.id,
            label: display.name
          };
        }); //  Add the display options

        options.push({
          label: 'Displays',
          value: 'displays',
          children: displayOptions
        });
      }

      return options;
    },
    setSelectedScreenOrDisplay: function setSelectedScreenOrDisplay(id) {
      if (id) {
        //  Set the selected screen
        this.selectedValues = ['screens', id];
      }
    }
  },
  created: function created() {
    this.options = this.getOptions();
    this.setSelectedScreenOrDisplay(this.modelValue.text);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/EventsEditor/CreateOrUpdate/EventEditor/EventTypes/AutoLink copy/Settings/index.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/EventsEditor/CreateOrUpdate/EventEditor/EventTypes/AutoLink copy/Settings/index.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _stores_VersionBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stores/VersionBuilder */ "./resources/js/Stores/VersionBuilder.js");
/* harmony import */ var _components_Alert_PrimaryAlert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/Alert/PrimaryAlert */ "./resources/js/Components/Alert/PrimaryAlert.vue");
/* harmony import */ var _components_Select_DefaultSelect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/Select/DefaultSelect */ "./resources/js/Components/Select/DefaultSelect.vue");
/* harmony import */ var _components_TextOrCodeEditor_TextOrCodeEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/TextOrCodeEditor/TextOrCodeEditor */ "./resources/js/Components/TextOrCodeEditor/TextOrCodeEditor.vue");
/* harmony import */ var _builderComponents_ScreenOrDisplaySelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @builderComponents/ScreenOrDisplaySelector */ "./resources/js/Pages/Versions/Show/Builder/Components/ScreenOrDisplaySelector.vue");
/* harmony import */ var _builderComponents_ScreenOrDisplayMarkerSelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @builderComponents/ScreenOrDisplayMarkerSelector */ "./resources/js/Pages/Versions/Show/Builder/Components/ScreenOrDisplayMarkerSelector.vue");






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['form'],
  components: {
    PrimaryAlert: _components_Alert_PrimaryAlert__WEBPACK_IMPORTED_MODULE_1__["default"],
    DefaultSelect: _components_Select_DefaultSelect__WEBPACK_IMPORTED_MODULE_2__["default"],
    TextOrCodeEditor: _components_TextOrCodeEditor_TextOrCodeEditor__WEBPACK_IMPORTED_MODULE_3__["default"],
    ScreenOrDisplaySelector: _builderComponents_ScreenOrDisplaySelector__WEBPACK_IMPORTED_MODULE_4__["default"],
    ScreenOrDisplayMarkerSelector: _builderComponents_ScreenOrDisplayMarkerSelector__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  data: function data() {
    return {
      useVersionBuilder: (0,_stores_VersionBuilder__WEBPACK_IMPORTED_MODULE_0__.useVersionBuilder)(),
      revisitOptions: [{
        label: 'Home Revisit',
        value: 'home_revisit'
      }, {
        label: 'Screen Revisit',
        value: 'screen_revisit'
      }, {
        label: 'Marked Revisit',
        value: 'marked_revisit'
      }],
      selectOptions: [{
        label: 'Automatic',
        value: 'automatic'
      }, {
        label: 'Manual',
        value: 'manual'
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Alert/PrimaryAlert.vue?vue&type=template&id=798c7978":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Alert/PrimaryAlert.vue?vue&type=template&id=798c7978 ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "inline-flex rounded-md py-2 px-4 bg-blue-100 text-gray-800 text-xs"
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
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "icon", {}, function () {
    return [_hoisted_2];
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")]);
}

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/CascadeOrCodeEditor/CascadeOrCodeEditor.vue?vue&type=template&id=2c12da78":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/CascadeOrCodeEditor/CascadeOrCodeEditor.vue?vue&type=template&id=2c12da78 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  key: 0,
  "class": "ml-2"
};
var _hoisted_3 = {
  key: 1,
  "class": "text-xs text-gray-400 ml-2"
};
var _hoisted_4 = {
  key: 0
};
var _hoisted_5 = {
  "class": "flex justify-end"
};

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Click to hide");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_DefaultSwitch = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DefaultSwitch");

  var _component_HiddenCode = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("HiddenCode");

  var _component_el_cascader = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("el-cascader");

  var _component_InfoPopover = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("InfoPopover");

  var _component_CodeEditor = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("CodeEditor");

  var _component_DefaultError = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DefaultError");

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
  , ["modelValue", "wrap_code", "read_only", "autofocus", "hide_header", "width", "height", "max_width", "min_width", "max_height", "min_height", "border_radius", "language_selector", "languages", "selector_width", "selector_height", "selector_displayed_by_default", "display_language", "copy_code", "z_index", "font_size", "theme"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
    name: "fade",
    mode: "out-in",
    duration: 250
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [$props.modelValue.code_editor_mode == false ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_cascader, {
        "class": "bg-gray-50 border border-gray-300 rounded-lg",
        props: {
          expandTrigger: 'hover'
        },
        placeholder: $props.placeholder,
        modelValue: $props.selectedValues,
        "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
          return $props.selectedValues = $event;
        }),
        onChange: $options.updateLink,
        options: $props.options,
        clearable: ""
      }, null, 8
      /* PROPS */
      , ["placeholder", "modelValue", "onChange", "options"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
    }),
    _: 1
    /* STABLE */

  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Note "), $props.note ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_3, " — " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.note), 1
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
      return [$props.modelValue.code_editor_mode == true && $props.showCode == true ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Hide Code "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "italic px-4 pt-2 rounded-t-md text-xs font-mono shadow-md cursor-pointer -mt-8 mr-8",
        style: {
          color: '#61aeee',
          background: '#282c34'
        },
        onClick: _cache[4] || (_cache[4] = function ($event) {
          return $props.showCode = false;
        })
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default", {}, function () {
        return [_hoisted_6];
      })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Code Editor "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_CodeEditor, {
        modelValue: $props.modelValue.code_editor_text,
        "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
          return $props.modelValue.code_editor_text = $event;
        }),
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
      , ["modelValue", "wrap_code", "read_only", "autofocus", "hide_header", "width", "height", "max_width", "min_width", "max_height", "min_height", "border_radius", "language_selector", "languages", "selector_width", "selector_height", "selector_displayed_by_default", "display_language", "copy_code", "z_index", "font_size", "theme"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
    }),
    _: 3
    /* FORWARDED */

  }), $props.error ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_DefaultError, {
    key: 0,
    error: $props.error,
    "class": "mt-2"
  }, null, 8
  /* PROPS */
  , ["error"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
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
}, " — You cannot edit this code")], -1
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
var _hoisted_2 = {
  key: 0
};
var _hoisted_3 = {
  key: 1
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "mt-1 block animate-bounce"
}, "Click here", -1
/* HOISTED */
);

var _hoisted_5 = [_hoisted_4];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _this = this;

  var _component_CodeEditor = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("CodeEditor");

  var _component_DefaultCodeSnippet = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DefaultCodeSnippet");

  var _component_el_popover = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("el-popover");

  var _component_CodeEditorModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("CodeEditorModal");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_popover, {
    placement: "top",
    width: 800,
    trigger: "hover"
  }, {
    reference: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Code Snippet "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DefaultCodeSnippet, {
        onClick: _cache[1] || (_cache[1] = function ($event) {
          return _this.$emit('click');
        }),
        onMouseenter: _cache[2] || (_cache[2] = function ($event) {
          return $options.hintExpandable(2);
        }),
        onMouseleave: _cache[3] || (_cache[3] = function ($event) {
          return $options.onMouseLeave();
        })
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
            name: "slide-up",
            mode: "out-in",
            appear: ""
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [$data.showTrailingDots ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_2, "...")) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_3, _hoisted_5))];
            }),
            _: 1
            /* STABLE */

          })];
        }),
        _: 1
        /* STABLE */

      })];
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
    _: 1
    /* STABLE */

  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Maximize Icon "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_CodeEditorModal, {
    modelValue: $data.localModelValue,
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $data.localModelValue = $event;
    }),
    width: "w-2/3"
  }, null, 8
  /* PROPS */
  , ["modelValue"])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/CodeSnippet/DefaultCodeSnippet.vue?vue&type=template&id=109234ce":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/CodeSnippet/DefaultCodeSnippet.vue?vue&type=template&id=109234ce ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "italic rounded-md text-xs font-mono shadow-md overflow-hidden px-2 py-1",
  style: {
    color: '#61aeee',
    background: '#282c34'
  }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Popover/InfoPopover.vue?vue&type=template&id=ccc51ddc":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Popover/InfoPopover.vue?vue&type=template&id=ccc51ddc ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  key: 0,
  "class": "text-xs text-gray-600 break-normal"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
}, null, -1
/* HOISTED */
);

var _hoisted_3 = [_hoisted_2];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_el_popover = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("el-popover");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_popover, {
    placement: "top",
    title: $props.title,
    width: 350,
    trigger: "hover"
  }, {
    reference: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(['h-' + $props.size, 'w-' + $props.size, 'text-green-500 hover:text-green-600 cursor-pointer']),
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        "stroke-width": "2"
      }, _hoisted_3, 2
      /* CLASS */
      ))];
    }),
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [$props.info ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.info), 1
      /* TEXT */
      )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")];
    }),
    _: 3
    /* FORWARDED */

  }, 8
  /* PROPS */
  , ["title"])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Select/DefaultSelect.vue?vue&type=template&id=46e19675":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Select/DefaultSelect.vue?vue&type=template&id=46e19675 ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


var _hoisted_1 = ["for"];
var _hoisted_2 = {
  "class": "flex"
};
var _hoisted_3 = ["value", "name", "placeholder", "disabled"];
var _hoisted_4 = ["value"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_InfoPopover = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("InfoPopover");

  var _component_DefaultError = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DefaultError");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(['mb-2', {
      'flex items-center': $props.label && $props.info
    }])
  }, [$props.label ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("label", {
    key: 0,
    "for": $props.label,
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(['block text-' + $props.size + ' font-medium text-gray-900', {
      'mr-2': $props.info
    }])
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.label), 11
  /* TEXT, CLASS, PROPS */
  , _hoisted_1)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.info ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_InfoPopover, {
    key: 1,
    info: $props.info
  }, null, 8
  /* PROPS */
  , ["info"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Append Content "), _ctx.$slots.append ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
    key: 0,
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(['inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md'].concat(_toConsumableArray($props.appendClasses)))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "append")], 2
  /* CLASS */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    value: $props.modelValue,
    onInput: _cache[0] || (_cache[0] = function () {
      return $options.updateValue && $options.updateValue.apply($options, arguments);
    }),
    name: $props.label,
    placeholder: $props.placeholder,
    disabled: $props.disabled,
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(['bg-gray-50 border border-gray-300 text-gray-900 text-' + $props.size + ' focus:ring-transparent focus:border-blue-400 block w-full p-2.5', _ctx.$slots.append ? '' : 'rounded-l-lg', _ctx.$slots.prepend ? '' : 'rounded-r-lg'])
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.options, function (option) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      key: option,
      value: option.value || option.label
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(option.label), 9
    /* TEXT, PROPS */
    , _hoisted_4);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 42
  /* CLASS, PROPS, HYDRATE_EVENTS */
  , _hoisted_3), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Prepend Content "), _ctx.$slots.prepend ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
    key: 1,
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(['inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-l-0 border-gray-300 rounded-r-md'].concat(_toConsumableArray($props.prependClasses)))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "prepend")], 2
  /* CLASS */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DefaultError, {
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

  var _component_InfoPopover = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("InfoPopover");

  var _component_CodeEditor = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("CodeEditor");

  var _component_TextEditor = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("TextEditor");

  var _component_DefaultError = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DefaultError");

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
  , ["modelValue", "wrap_code", "read_only", "autofocus", "hide_header", "width", "height", "max_width", "min_width", "max_height", "min_height", "border_radius", "language_selector", "languages", "selector_width", "selector_height", "selector_displayed_by_default", "display_language", "copy_code", "z_index", "font_size", "theme"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Note "), $props.note ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_2, " — " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.note), 1
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
      , ["modelValue", "wrap_code", "read_only", "autofocus", "hide_header", "width", "height", "max_width", "min_width", "max_height", "min_height", "border_radius", "language_selector", "languages", "selector_width", "selector_height", "selector_displayed_by_default", "display_language", "copy_code", "z_index", "font_size", "theme"])])) : $props.modelValue.code_editor_mode == false ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_TextEditor, {
        key: 1,
        modelValue: $props.modelValue.text,
        "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
          return $props.modelValue.text = $event;
        }),
        size: $props.size,
        height: $props.height,
        placeholder: $props.placeholder
      }, null, 8
      /* PROPS */
      , ["modelValue", "size", "height", "placeholder"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
    }),
    _: 3
    /* FORWARDED */

  }), $props.error ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_DefaultError, {
    key: 0,
    error: $props.error,
    "class": "mt-2"
  }, null, 8
  /* PROPS */
  , ["error"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Components/ScreenOrDisplayMarkerSelector.vue?vue&type=template&id=7b95f3ee":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Components/ScreenOrDisplayMarkerSelector.vue?vue&type=template&id=7b95f3ee ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "class": "h-4 w-4",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z"
})], -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_DefaultSelect = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DefaultSelect");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Screen / Display Marker Selector "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DefaultSelect, {
    modelValue: $props.modelValue,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $props.modelValue = $event;
    }),
    options: $options.markerOptions,
    error: $props.error,
    appendClasses: ['bg-blue-50', 'text-blue-500'],
    label: "Marker",
    placeholder: "Select marker to target screen or display"
  }, {
    append: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_1];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["modelValue", "options", "error"])], 2112
  /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Components/ScreenOrDisplaySelector.vue?vue&type=template&id=cf026758":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Components/ScreenOrDisplaySelector.vue?vue&type=template&id=cf026758 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_CascadeOrCodeEditor = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("CascadeOrCodeEditor");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Cascade Or Code Editor "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_CascadeOrCodeEditor, {
    modelValue: $props.modelValue,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $props.modelValue = $event;
    }),
    selectedValues: $data.selectedValues,
    "onUpdate:selectedValues": _cache[1] || (_cache[1] = function ($event) {
      return $data.selectedValues = $event;
    }),
    options: $data.options,
    label: $props.label,
    placeholder: $props.placeholder
  }, null, 8
  /* PROPS */
  , ["modelValue", "selectedValues", "options", "label", "placeholder"])], 2112
  /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/EventsEditor/CreateOrUpdate/EventEditor/EventTypes/AutoLink copy/Settings/index.vue?vue&type=template&id=4994793c":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/EventsEditor/CreateOrUpdate/EventEditor/EventTypes/AutoLink copy/Settings/index.vue?vue&type=template&id=4994793c ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-justify"
}, " Automatically or manually trigger revisit to a specific screen or display ", -1
/* HOISTED */
);

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" This is the user response value to trigger revisit to a given screen or display ");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_PrimaryAlert = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("PrimaryAlert");

  var _component_DefaultSelect = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DefaultSelect");

  var _component_TextOrCodeEditor = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("TextOrCodeEditor");

  var _component_ScreenOrDisplaySelector = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ScreenOrDisplaySelector");

  var _component_ScreenOrDisplayMarkerSelector = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ScreenOrDisplayMarkerSelector");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Explainer "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_PrimaryAlert, {
    "class": "mb-6"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_1];
    }),
    _: 1
    /* STABLE */

  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Trigger Type "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DefaultSelect, {
    modelValue: $props.form.event_data.general.trigger.selected_type,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $props.form.event_data.general.trigger.selected_type = $event;
    }),
    options: $data.selectOptions,
    label: "Trigger Type",
    placeholder: "Select trigger type",
    error: $props.form.errors.selected_type,
    "class": "mb-6"
  }, null, 8
  /* PROPS */
  , ["modelValue", "options", "error"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Manual Trigger Input "), $props.form.event_data.general.trigger.selected_type == 'manual' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_TextOrCodeEditor, {
    key: 0,
    modelValue: $props.form.event_data.general.trigger.manual.input,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $props.form.event_data.general.trigger.manual.input = $event;
    }),
    label: "Trigger Input",
    note: "User response to trigger revisit",
    placeholder: "1",
    error: $props.form.errors.input,
    "class": "mb-6"
  }, {
    info: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_2];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["modelValue", "error"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Revisit Type "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DefaultSelect, {
    modelValue: $props.form.event_data.revisit_type.selected_type,
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $props.form.event_data.revisit_type.selected_type = $event;
    }),
    options: $data.revisitOptions,
    label: "Revisit Type",
    placeholder: "Select revisit type",
    error: $props.form.errors.selected_type,
    "class": "mb-6"
  }, null, 8
  /* PROPS */
  , ["modelValue", "options", "error"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Revisit Screen / Display "), $props.form.event_data.revisit_type.selected_type == 'screen_revisit' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 1
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Screen / Display Selector "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ScreenOrDisplaySelector, {
    modelValue: $props.form.event_data.revisit_type.screen_revisit.link,
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $props.form.event_data.revisit_type.screen_revisit.link = $event;
    }),
    error: $props.form.errors.link,
    "class": "mb-6"
  }, null, 8
  /* PROPS */
  , ["modelValue", "error"])], 2112
  /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Revisit Marker "), $props.form.event_data.revisit_type.selected_type == 'marked_revisit' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 2
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Screen / Display Marker Selector "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ScreenOrDisplayMarkerSelector, {
    modelValue: $props.form.event_data.revisit_type.marked_revisit.selected_marker,
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $props.form.event_data.revisit_type.marked_revisit.selected_marker = $event;
    }),
    error: $props.form.errors.selected_type,
    "class": "mb-6"
  }, null, 8
  /* PROPS */
  , ["modelValue", "error"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" selected_marker: " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.form.event_data.revisit_type.marked_revisit.selected_marker), 1
  /* TEXT */
  )], 64
  /* STABLE_FRAGMENT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Automatic Replies "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_TextOrCodeEditor, {
    modelValue: $props.form.event_data.general.automatic_replies,
    "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
      return $props.form.event_data.general.automatic_replies = $event;
    }),
    label: "Automatic Replies",
    placeholder: "1*2*3*{{ order.id }}*4",
    note: "User replies",
    error: $props.form.errors.automatic_replies
  }, null, 8
  /* PROPS */
  , ["modelValue", "error"])]);
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
    },
    //  Markers
    screenAndDisplayMarkers: function screenAndDisplayMarkers(state) {
      var markers = [];

      for (var x = 0; x < this.screens.length; x++) {
        var screen = this.screens[x];
        var screenMarkers = screen['markers']; //  Add the screen markers

        markers.push.apply(markers, _toConsumableArray(screenMarkers));

        for (var y = 0; y < screen['displays'].length; y++) {
          var display = screen['displays'][y];
          var displayMarkers = display['content']['markers']; //  Add the display markers

          markers.push.apply(markers, _toConsumableArray(displayMarkers));
        }
      }

      return markers;
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
      var exactMatch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (search !== null && search !== '') {
        return this.globalVariables.filter(function (globalVariable) {
          search = search.toLowerCase();
          var globalVariableName = globalVariable.name.toLowerCase();
          var matchesGlobalVariableName = exactMatch === true ? globalVariableName === search : globalVariableName.includes(search);
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
        hexColor: hexColor,
        comment: ''
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
    //  CRUD Api Event Query Param Methods
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
    //  CRUD Api Event Header Methods
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
    //  CRUD Api Event Body Param Methods
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
    //  CRUD Api Event Status Code Methods
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
    //  CRUD Api Event Status Code Attribute Methods
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
    },
    //  Validation Event
    searchValidationRules: function searchValidationRules(validationRules, search) {
      var exactMatch = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (search !== null && search !== '') {
        search = search.toLowerCase();
        return validationRules.filter(function (param) {
          var matchesValidationRuleName = exactMatch === true ? param.name.toLowerCase() === search : param.name.toLowerCase().includes(search);
          return matchesValidationRuleName;
        });
      } else {
        return validationRules;
      }
    },
    addSelectedValidationRules: function addSelectedValidationRules(validationRules, selectedRules) {
      for (var index = 0; index < selectedRules.length; index++) {
        var selectedRule = selectedRules[index];
        var exists = validationRules.map(function (rule) {
          return rule.type;
        }).includes(selectedRule.type);

        if (exists == false) {
          //  Set the active state details
          selectedRule['active'] = {
            selected_type: 'yes',
            code: ''
          };

          if (selectedRule['type'] !== 'custom_code') {
            //  If we have the value property
            if (selectedRule['value']) {
              //  Restructure the value property structure
              selectedRule['value'] = {
                text: selectedRule['value'],
                code_editor_text: '',
                code_editor_mode: false
              };
            } //  If we have the second value property


            if (selectedRule['value_2']) {
              //  Restructure the value property structure
              selectedRule['value_2'] = {
                text: selectedRule['value_2'],
                code_editor_text: '',
                code_editor_mode: false
              };
            }
          } //  Restructure the error message property structure


          selectedRule['error_msg'] = {
            text: selectedRule['error_msg'],
            code_editor_text: '',
            code_editor_mode: false
          }, //  Set the default color
          selectedRule['hexColor'] = '#CECECE'; //  Add the validation rule

          validationRules.push(selectedRule);
        }
      }
    },
    addValidationRule: function addValidationRule(validationRules, validationRule) {
      validationRules.push(validationRule);
    },
    updateValidationRule: function updateValidationRule(validationRules, validationRule, index) {
      validationRules.splice(index, 1, validationRule);
    },
    removeValidationRuleByIndex: function removeValidationRuleByIndex(validationRules, index) {
      validationRules.splice(index, 1);
    },
    removeValidationRulesByIndexes: function removeValidationRulesByIndexes(validationRules, indexes) {
      lodash__WEBPACK_IMPORTED_MODULE_0___default().pullAt(validationRules, indexes);
    },
    //  Formatting Event
    searchFormattingRules: function searchFormattingRules(formattingRules, search) {
      var exactMatch = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (search !== null && search !== '') {
        search = search.toLowerCase();
        return formattingRules.filter(function (param) {
          var matchesFormattingRuleName = exactMatch === true ? param.name.toLowerCase() === search : param.name.toLowerCase().includes(search);
          return matchesFormattingRuleName;
        });
      } else {
        return formattingRules;
      }
    },
    addSelectedFormattingRules: function addSelectedFormattingRules(formattingRules, selectedRules) {
      for (var index = 0; index < selectedRules.length; index++) {
        var selectedRule = selectedRules[index];
        var exists = formattingRules.map(function (rule) {
          return rule.type;
        }).includes(selectedRule.type);

        if (exists == false) {
          //  Set the active state details
          selectedRule['active'] = {
            selected_type: 'yes',
            code: ''
          };

          if (selectedRule['type'] !== 'custom_code') {
            //  If we have the value property
            if (selectedRule['value']) {
              //  Restructure the value property structure
              selectedRule['value'] = {
                text: selectedRule['value'],
                code_editor_text: '',
                code_editor_mode: false
              };
            } //  If we have the second value property


            if (selectedRule['value_2']) {
              //  Restructure the value property structure
              selectedRule['value_2'] = {
                text: selectedRule['value_2'],
                code_editor_text: '',
                code_editor_mode: false
              };
            }
          } //  Set the default color


          selectedRule['hexColor'] = '#CECECE'; //  Add the formatting rule

          formattingRules.push(selectedRule);
        }
      }
    },
    addFormattingRule: function addFormattingRule(formattingRules, formattingRule) {
      formattingRules.push(formattingRule);
    },
    updateFormattingRule: function updateFormattingRule(formattingRules, formattingRule, index) {
      formattingRules.splice(index, 1, formattingRule);
    },
    removeFormattingRuleByIndex: function removeFormattingRuleByIndex(formattingRules, index) {
      formattingRules.splice(index, 1);
    },
    removeFormattingRulesByIndexes: function removeFormattingRulesByIndexes(formattingRules, indexes) {
      lodash__WEBPACK_IMPORTED_MODULE_0___default().pullAt(formattingRules, indexes);
    }
  }
});

/***/ }),

/***/ "./resources/js/Components/Alert/PrimaryAlert.vue":
/*!********************************************************!*\
  !*** ./resources/js/Components/Alert/PrimaryAlert.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PrimaryAlert_vue_vue_type_template_id_798c7978__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PrimaryAlert.vue?vue&type=template&id=798c7978 */ "./resources/js/Components/Alert/PrimaryAlert.vue?vue&type=template&id=798c7978");
/* harmony import */ var _PrimaryAlert_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PrimaryAlert.vue?vue&type=script&lang=js */ "./resources/js/Components/Alert/PrimaryAlert.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_juliantabona_Sites_laravel_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_juliantabona_Sites_laravel_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_PrimaryAlert_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_PrimaryAlert_vue_vue_type_template_id_798c7978__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Components/Alert/PrimaryAlert.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

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

/***/ "./resources/js/Components/CascadeOrCodeEditor/CascadeOrCodeEditor.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/Components/CascadeOrCodeEditor/CascadeOrCodeEditor.vue ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CascadeOrCodeEditor_vue_vue_type_template_id_2c12da78__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CascadeOrCodeEditor.vue?vue&type=template&id=2c12da78 */ "./resources/js/Components/CascadeOrCodeEditor/CascadeOrCodeEditor.vue?vue&type=template&id=2c12da78");
/* harmony import */ var _CascadeOrCodeEditor_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CascadeOrCodeEditor.vue?vue&type=script&lang=js */ "./resources/js/Components/CascadeOrCodeEditor/CascadeOrCodeEditor.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_juliantabona_Sites_laravel_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_juliantabona_Sites_laravel_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_CascadeOrCodeEditor_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_CascadeOrCodeEditor_vue_vue_type_template_id_2c12da78__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Components/CascadeOrCodeEditor/CascadeOrCodeEditor.vue"]])
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

/***/ "./resources/js/Components/CodeSnippet/DefaultCodeSnippet.vue":
/*!********************************************************************!*\
  !*** ./resources/js/Components/CodeSnippet/DefaultCodeSnippet.vue ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DefaultCodeSnippet_vue_vue_type_template_id_109234ce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DefaultCodeSnippet.vue?vue&type=template&id=109234ce */ "./resources/js/Components/CodeSnippet/DefaultCodeSnippet.vue?vue&type=template&id=109234ce");
/* harmony import */ var _DefaultCodeSnippet_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DefaultCodeSnippet.vue?vue&type=script&lang=js */ "./resources/js/Components/CodeSnippet/DefaultCodeSnippet.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_juliantabona_Sites_laravel_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_juliantabona_Sites_laravel_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_DefaultCodeSnippet_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_DefaultCodeSnippet_vue_vue_type_template_id_109234ce__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Components/CodeSnippet/DefaultCodeSnippet.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Components/Popover/InfoPopover.vue":
/*!*********************************************************!*\
  !*** ./resources/js/Components/Popover/InfoPopover.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _InfoPopover_vue_vue_type_template_id_ccc51ddc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InfoPopover.vue?vue&type=template&id=ccc51ddc */ "./resources/js/Components/Popover/InfoPopover.vue?vue&type=template&id=ccc51ddc");
/* harmony import */ var _InfoPopover_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InfoPopover.vue?vue&type=script&lang=js */ "./resources/js/Components/Popover/InfoPopover.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_juliantabona_Sites_laravel_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_juliantabona_Sites_laravel_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_InfoPopover_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_InfoPopover_vue_vue_type_template_id_ccc51ddc__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Components/Popover/InfoPopover.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Components/Select/DefaultSelect.vue":
/*!**********************************************************!*\
  !*** ./resources/js/Components/Select/DefaultSelect.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DefaultSelect_vue_vue_type_template_id_46e19675__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DefaultSelect.vue?vue&type=template&id=46e19675 */ "./resources/js/Components/Select/DefaultSelect.vue?vue&type=template&id=46e19675");
/* harmony import */ var _DefaultSelect_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DefaultSelect.vue?vue&type=script&lang=js */ "./resources/js/Components/Select/DefaultSelect.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_juliantabona_Sites_laravel_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_juliantabona_Sites_laravel_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_DefaultSelect_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_DefaultSelect_vue_vue_type_template_id_46e19675__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Components/Select/DefaultSelect.vue"]])
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

/***/ "./resources/js/Pages/Versions/Show/Builder/Components/ScreenOrDisplayMarkerSelector.vue":
/*!***********************************************************************************************!*\
  !*** ./resources/js/Pages/Versions/Show/Builder/Components/ScreenOrDisplayMarkerSelector.vue ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ScreenOrDisplayMarkerSelector_vue_vue_type_template_id_7b95f3ee__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ScreenOrDisplayMarkerSelector.vue?vue&type=template&id=7b95f3ee */ "./resources/js/Pages/Versions/Show/Builder/Components/ScreenOrDisplayMarkerSelector.vue?vue&type=template&id=7b95f3ee");
/* harmony import */ var _ScreenOrDisplayMarkerSelector_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ScreenOrDisplayMarkerSelector.vue?vue&type=script&lang=js */ "./resources/js/Pages/Versions/Show/Builder/Components/ScreenOrDisplayMarkerSelector.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_juliantabona_Sites_laravel_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_juliantabona_Sites_laravel_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ScreenOrDisplayMarkerSelector_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ScreenOrDisplayMarkerSelector_vue_vue_type_template_id_7b95f3ee__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Versions/Show/Builder/Components/ScreenOrDisplayMarkerSelector.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Versions/Show/Builder/Components/ScreenOrDisplaySelector.vue":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/Versions/Show/Builder/Components/ScreenOrDisplaySelector.vue ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ScreenOrDisplaySelector_vue_vue_type_template_id_cf026758__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ScreenOrDisplaySelector.vue?vue&type=template&id=cf026758 */ "./resources/js/Pages/Versions/Show/Builder/Components/ScreenOrDisplaySelector.vue?vue&type=template&id=cf026758");
/* harmony import */ var _ScreenOrDisplaySelector_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ScreenOrDisplaySelector.vue?vue&type=script&lang=js */ "./resources/js/Pages/Versions/Show/Builder/Components/ScreenOrDisplaySelector.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_juliantabona_Sites_laravel_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_juliantabona_Sites_laravel_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ScreenOrDisplaySelector_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ScreenOrDisplaySelector_vue_vue_type_template_id_cf026758__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Versions/Show/Builder/Components/ScreenOrDisplaySelector.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/EventsEditor/CreateOrUpdate/EventEditor/EventTypes/AutoLink copy/Settings/index.vue":
/*!*****************************************************************************************************************************************************!*\
  !*** ./resources/js/Pages/Versions/Show/Builder/Content/Editor/EventsEditor/CreateOrUpdate/EventEditor/EventTypes/AutoLink copy/Settings/index.vue ***!
  \*****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_4994793c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=4994793c */ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/EventsEditor/CreateOrUpdate/EventEditor/EventTypes/AutoLink copy/Settings/index.vue?vue&type=template&id=4994793c");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/EventsEditor/CreateOrUpdate/EventEditor/EventTypes/AutoLink copy/Settings/index.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_juliantabona_Sites_laravel_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_juliantabona_Sites_laravel_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_index_vue_vue_type_template_id_4994793c__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Versions/Show/Builder/Content/Editor/EventsEditor/CreateOrUpdate/EventEditor/EventTypes/AutoLink copy/Settings/index.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Components/Alert/PrimaryAlert.vue?vue&type=script&lang=js":
/*!********************************************************************************!*\
  !*** ./resources/js/Components/Alert/PrimaryAlert.vue?vue&type=script&lang=js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PrimaryAlert_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PrimaryAlert_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PrimaryAlert.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Alert/PrimaryAlert.vue?vue&type=script&lang=js");
 

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

/***/ "./resources/js/Components/CascadeOrCodeEditor/CascadeOrCodeEditor.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/Components/CascadeOrCodeEditor/CascadeOrCodeEditor.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CascadeOrCodeEditor_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CascadeOrCodeEditor_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CascadeOrCodeEditor.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/CascadeOrCodeEditor/CascadeOrCodeEditor.vue?vue&type=script&lang=js");
 

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

/***/ "./resources/js/Components/CodeSnippet/DefaultCodeSnippet.vue?vue&type=script&lang=js":
/*!********************************************************************************************!*\
  !*** ./resources/js/Components/CodeSnippet/DefaultCodeSnippet.vue?vue&type=script&lang=js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DefaultCodeSnippet_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DefaultCodeSnippet_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DefaultCodeSnippet.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/CodeSnippet/DefaultCodeSnippet.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Components/Popover/InfoPopover.vue?vue&type=script&lang=js":
/*!*********************************************************************************!*\
  !*** ./resources/js/Components/Popover/InfoPopover.vue?vue&type=script&lang=js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InfoPopover_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InfoPopover_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./InfoPopover.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Popover/InfoPopover.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Components/Select/DefaultSelect.vue?vue&type=script&lang=js":
/*!**********************************************************************************!*\
  !*** ./resources/js/Components/Select/DefaultSelect.vue?vue&type=script&lang=js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DefaultSelect_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DefaultSelect_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DefaultSelect.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Select/DefaultSelect.vue?vue&type=script&lang=js");
 

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

/***/ "./resources/js/Pages/Versions/Show/Builder/Components/ScreenOrDisplayMarkerSelector.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/Pages/Versions/Show/Builder/Components/ScreenOrDisplayMarkerSelector.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ScreenOrDisplayMarkerSelector_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ScreenOrDisplayMarkerSelector_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ScreenOrDisplayMarkerSelector.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Components/ScreenOrDisplayMarkerSelector.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Versions/Show/Builder/Components/ScreenOrDisplaySelector.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/Pages/Versions/Show/Builder/Components/ScreenOrDisplaySelector.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ScreenOrDisplaySelector_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ScreenOrDisplaySelector_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ScreenOrDisplaySelector.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Components/ScreenOrDisplaySelector.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/EventsEditor/CreateOrUpdate/EventEditor/EventTypes/AutoLink copy/Settings/index.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./resources/js/Pages/Versions/Show/Builder/Content/Editor/EventsEditor/CreateOrUpdate/EventEditor/EventTypes/AutoLink copy/Settings/index.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/EventsEditor/CreateOrUpdate/EventEditor/EventTypes/AutoLink copy/Settings/index.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Components/Alert/PrimaryAlert.vue?vue&type=template&id=798c7978":
/*!**************************************************************************************!*\
  !*** ./resources/js/Components/Alert/PrimaryAlert.vue?vue&type=template&id=798c7978 ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PrimaryAlert_vue_vue_type_template_id_798c7978__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PrimaryAlert_vue_vue_type_template_id_798c7978__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PrimaryAlert.vue?vue&type=template&id=798c7978 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Alert/PrimaryAlert.vue?vue&type=template&id=798c7978");


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

/***/ "./resources/js/Components/CascadeOrCodeEditor/CascadeOrCodeEditor.vue?vue&type=template&id=2c12da78":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/Components/CascadeOrCodeEditor/CascadeOrCodeEditor.vue?vue&type=template&id=2c12da78 ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CascadeOrCodeEditor_vue_vue_type_template_id_2c12da78__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CascadeOrCodeEditor_vue_vue_type_template_id_2c12da78__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CascadeOrCodeEditor.vue?vue&type=template&id=2c12da78 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/CascadeOrCodeEditor/CascadeOrCodeEditor.vue?vue&type=template&id=2c12da78");


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

/***/ "./resources/js/Components/CodeSnippet/DefaultCodeSnippet.vue?vue&type=template&id=109234ce":
/*!**************************************************************************************************!*\
  !*** ./resources/js/Components/CodeSnippet/DefaultCodeSnippet.vue?vue&type=template&id=109234ce ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DefaultCodeSnippet_vue_vue_type_template_id_109234ce__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DefaultCodeSnippet_vue_vue_type_template_id_109234ce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DefaultCodeSnippet.vue?vue&type=template&id=109234ce */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/CodeSnippet/DefaultCodeSnippet.vue?vue&type=template&id=109234ce");


/***/ }),

/***/ "./resources/js/Components/Popover/InfoPopover.vue?vue&type=template&id=ccc51ddc":
/*!***************************************************************************************!*\
  !*** ./resources/js/Components/Popover/InfoPopover.vue?vue&type=template&id=ccc51ddc ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InfoPopover_vue_vue_type_template_id_ccc51ddc__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InfoPopover_vue_vue_type_template_id_ccc51ddc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./InfoPopover.vue?vue&type=template&id=ccc51ddc */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Popover/InfoPopover.vue?vue&type=template&id=ccc51ddc");


/***/ }),

/***/ "./resources/js/Components/Select/DefaultSelect.vue?vue&type=template&id=46e19675":
/*!****************************************************************************************!*\
  !*** ./resources/js/Components/Select/DefaultSelect.vue?vue&type=template&id=46e19675 ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DefaultSelect_vue_vue_type_template_id_46e19675__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DefaultSelect_vue_vue_type_template_id_46e19675__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DefaultSelect.vue?vue&type=template&id=46e19675 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Select/DefaultSelect.vue?vue&type=template&id=46e19675");


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

/***/ "./resources/js/Pages/Versions/Show/Builder/Components/ScreenOrDisplayMarkerSelector.vue?vue&type=template&id=7b95f3ee":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/js/Pages/Versions/Show/Builder/Components/ScreenOrDisplayMarkerSelector.vue?vue&type=template&id=7b95f3ee ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ScreenOrDisplayMarkerSelector_vue_vue_type_template_id_7b95f3ee__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ScreenOrDisplayMarkerSelector_vue_vue_type_template_id_7b95f3ee__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ScreenOrDisplayMarkerSelector.vue?vue&type=template&id=7b95f3ee */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Components/ScreenOrDisplayMarkerSelector.vue?vue&type=template&id=7b95f3ee");


/***/ }),

/***/ "./resources/js/Pages/Versions/Show/Builder/Components/ScreenOrDisplaySelector.vue?vue&type=template&id=cf026758":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/Pages/Versions/Show/Builder/Components/ScreenOrDisplaySelector.vue?vue&type=template&id=cf026758 ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ScreenOrDisplaySelector_vue_vue_type_template_id_cf026758__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ScreenOrDisplaySelector_vue_vue_type_template_id_cf026758__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ScreenOrDisplaySelector.vue?vue&type=template&id=cf026758 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Components/ScreenOrDisplaySelector.vue?vue&type=template&id=cf026758");


/***/ }),

/***/ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/EventsEditor/CreateOrUpdate/EventEditor/EventTypes/AutoLink copy/Settings/index.vue?vue&type=template&id=4994793c":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./resources/js/Pages/Versions/Show/Builder/Content/Editor/EventsEditor/CreateOrUpdate/EventEditor/EventTypes/AutoLink copy/Settings/index.vue?vue&type=template&id=4994793c ***!
  \***********************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_4994793c__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_4994793c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=template&id=4994793c */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/EventsEditor/CreateOrUpdate/EventEditor/EventTypes/AutoLink copy/Settings/index.vue?vue&type=template&id=4994793c");


/***/ })

}]);