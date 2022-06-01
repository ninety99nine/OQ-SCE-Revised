"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Versions_Show_Builder_Content_Editor_EventsEditor_CreateOrUpdate_EventEdit-622640"],{

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
/* harmony import */ var _Badges_PrimaryBadge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Badges/PrimaryBadge */ "./resources/js/Components/Badges/PrimaryBadge.vue");
/* harmony import */ var _CodeEditor_HiddenCode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CodeEditor/HiddenCode */ "./resources/js/Components/CodeEditor/HiddenCode/index.vue");
/* harmony import */ var _Switch_DefaultSwitch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Switch/DefaultSwitch */ "./resources/js/Components/Switch/DefaultSwitch.vue");
/* harmony import */ var _components_TextEditor_TextEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/TextEditor/TextEditor */ "./resources/js/Components/TextEditor/TextEditor.vue");
/* harmony import */ var _components_CodeEditor_CodeEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/CodeEditor/CodeEditor */ "./resources/js/Components/CodeEditor/CodeEditor.vue");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    DefaultSwitch: _Switch_DefaultSwitch__WEBPACK_IMPORTED_MODULE_2__["default"],
    PrimaryBadge: _Badges_PrimaryBadge__WEBPACK_IMPORTED_MODULE_0__["default"],
    TextEditor: _components_TextEditor_TextEditor__WEBPACK_IMPORTED_MODULE_3__["default"],
    CodeEditor: _components_CodeEditor_CodeEditor__WEBPACK_IMPORTED_MODULE_4__["default"],
    HiddenCode: _CodeEditor_HiddenCode__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: ['modelValue', 'label', 'note', 'error', //  Below are the text editor options
  'label', 'size', 'height', 'disabled', 'placeholder', //  Below are the code editor options
  'wrap_code', 'read_only', 'autofocus', 'hide_header', 'width', 'height', 'max_width', 'min_width', 'max_height', 'min_height', 'border_radius', 'language_selector', 'languages', 'selector_width', 'selector_height', 'selector_displayed_by_default', 'display_language', 'copy_code', 'z_index', 'font_size', 'theme'],
  data: function data() {
    return {
      showCode: this.modelValue.code_editor_mode == false
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/EventsEditor/CreateOrUpdate/EventEditor/EventTypes/Apis/Crud-Api/Body/CreateOrUpdateParam/CreateOrUpdateQueryModal.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/EventsEditor/CreateOrUpdate/EventEditor/EventTypes/Apis/Crud-Api/Body/CreateOrUpdateParam/CreateOrUpdateQueryModal.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");
/* harmony import */ var _components_Input_DefaultInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/Input/DefaultInput */ "./resources/js/Components/Input/DefaultInput.vue");
/* harmony import */ var _components_Modal_DefaultModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/Modal/DefaultModal */ "./resources/js/Components/Modal/DefaultModal.vue");
/* harmony import */ var _stores_VersionBuilder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @stores/VersionBuilder */ "./resources/js/Stores/VersionBuilder.js");
/* harmony import */ var _components_Button_PrimaryButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/Button/PrimaryButton */ "./resources/js/Components/Button/PrimaryButton.vue");
/* harmony import */ var _components_TextOrCodeEditor_TextOrCodeEditor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/TextOrCodeEditor/TextOrCodeEditor */ "./resources/js/Components/TextOrCodeEditor/TextOrCodeEditor.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    useForm: _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__.useForm,
    DefaultInput: _components_Input_DefaultInput__WEBPACK_IMPORTED_MODULE_1__["default"],
    DefaultModal: _components_Modal_DefaultModal__WEBPACK_IMPORTED_MODULE_2__["default"],
    PrimaryButton: _components_Button_PrimaryButton__WEBPACK_IMPORTED_MODULE_4__["default"],
    TextOrCodeEditor: _components_TextOrCodeEditor_TextOrCodeEditor__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  props: {
    params: {
      type: Array
    },
    param: {
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
      useVersionBuilder: (0,_stores_VersionBuilder__WEBPACK_IMPORTED_MODULE_3__.useVersionBuilder)()
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
        this.form = (0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__.useForm)((0,_stores_VersionBuilder__WEBPACK_IMPORTED_MODULE_3__.useVersionBuilder)().getBlankBodyParam());
      } else if (this.mode == 'clone') {
        this.form = (0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__.useForm)((0,_stores_VersionBuilder__WEBPACK_IMPORTED_MODULE_3__.useVersionBuilder)().getClonedBodyParam(this.param));
      } else if (this.mode == 'update') {
        this.form = (0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__.useForm)(_objectSpread(_objectSpread({}, (0,_stores_VersionBuilder__WEBPACK_IMPORTED_MODULE_3__.useVersionBuilder)().getBlankBodyParam()), this.param));
      }
    },
    createParam: function createParam(closeModal) {
      //  Clear existing errors
      this.form.clearErrors(); //  Check if we have an existing param using the same name

      var totalExactMatches = this.useVersionBuilder.searchBodyParams(this.params, this.form.name, true).length;

      if (this.form.name.length == 0) {
        this.form.setError('name', 'The param name is required');
      } else if (this.form.value.code_editor_mode == false && (this.form.value.text == '' || this.form.value.text == null)) {
        this.form.setError('value', 'The value is required');
      } else if (this.form.value.code_editor_mode == true && (this.form.value.code_editor_text == '' || this.form.value.code_editor_text == null)) {
        this.form.setError('value', 'The code is required');
      } else if (['create', 'clone'].includes(this.mode) && totalExactMatches) {
        this.form.setError('name', 'This param name is already in use');
      } else if (this.mode == 'update' && totalExactMatches && this.param.name !== this.form.name) {
        this.form.setError('name', 'This param name is already in use');
      }

      if (this.form.hasErrors === false) {
        var param = this.form.data();

        if (this.mode == 'update') {
          this.useVersionBuilder.updateBodyParam(this.params, param, this.index);
        } else {
          this.useVersionBuilder.addBodyParam(this.params, param);
        } //  Determine the action name e.g created, cloned or updated


        var actionName = this.mode + 'd';
        this.$message({
          message: 'Param ' + actionName + ' successfully',
          type: 'success'
        });
        closeModal();
      }
    },
    cancelCreateParam: function cancelCreateParam() {
      //  Clear existing errors
      this.form.clearErrors();
    }
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
var _hoisted_2 = {
  "class": "bg-gray-800 italic px-2 py-1 rounded-md text-blue-400 text-xs font-mono shadow-md"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Hidden code ...");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_CodeEditor = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("CodeEditor");

  var _component_el_popover = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("el-popover");

  var _component_CodeEditorModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("CodeEditorModal");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_popover, {
    placement: "top",
    width: 800,
    trigger: "hover"
  }, {
    reference: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Text "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default", {}, function () {
        return [_hoisted_3];
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
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.localModelValue = $event;
    }),
    width: "w-2/3"
  }, null, 8
  /* PROPS */
  , ["modelValue"])]);
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

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "class": "h-4 w-4 mr-2",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
})], -1
/* HOISTED */
);

var _hoisted_3 = {
  key: 1,
  "class": "text-xs text-gray-400 ml-2"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_DefaultSwitch = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DefaultSwitch");

  var _component_PrimaryBadge = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("PrimaryBadge");

  var _component_CodeEditor = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("CodeEditor");

  var _component_HiddenCode = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("HiddenCode");

  var _component_TextEditor = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("TextEditor");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Toggle Text/Code Editor Switch "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DefaultSwitch, {
    modelValue: $props.modelValue.code_editor_mode,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $props.modelValue.code_editor_mode = $event;
    }),
    label: $props.label
  }, null, 8
  /* PROPS */
  , ["modelValue", "label"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Show Code Badge "), $props.modelValue.code_editor_mode ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_PrimaryBadge, {
    key: 0,
    "class": "flex w-fit cursor-pointer mx-2",
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $data.showCode = !$data.showCode;
    })
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.showCode ? 'Hide Code' : 'Show Code'), 1
      /* TEXT */
      )];
    }),
    _: 1
    /* STABLE */

  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Note "), $props.note ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_3, " — " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.note), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
    name: "fade",
    mode: "out-in",
    duration: 250
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [$props.modelValue.code_editor_mode == true && $data.showCode == true ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_CodeEditor, {
        key: 0,
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
      , ["modelValue", "error", "wrap_code", "read_only", "autofocus", "hide_header", "width", "height", "max_width", "min_width", "max_height", "min_height", "border_radius", "language_selector", "languages", "selector_width", "selector_height", "selector_displayed_by_default", "display_language", "copy_code", "z_index", "font_size", "theme"])) : $props.modelValue.code_editor_mode == true && $data.showCode == false ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_HiddenCode, {
        key: 1,
        modelValue: $props.modelValue.code_editor_text,
        "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
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
      , ["modelValue", "error", "wrap_code", "read_only", "autofocus", "hide_header", "width", "height", "max_width", "min_width", "max_height", "min_height", "border_radius", "language_selector", "languages", "selector_width", "selector_height", "selector_displayed_by_default", "display_language", "copy_code", "z_index", "font_size", "theme"])) : $props.modelValue.code_editor_mode == false ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_TextEditor, {
        key: 2,
        modelValue: $props.modelValue.text,
        "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
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
    _: 1
    /* STABLE */

  })]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/EventsEditor/CreateOrUpdate/EventEditor/EventTypes/Apis/Crud-Api/Body/CreateOrUpdateParam/CreateOrUpdateQueryModal.vue?vue&type=template&id=cffa8526":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/EventsEditor/CreateOrUpdate/EventEditor/EventTypes/Apis/Crud-Api/Body/CreateOrUpdateParam/CreateOrUpdateQueryModal.vue?vue&type=template&id=cffa8526 ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" param");

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

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Create Param", -1
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
    primaryAction: $options.createParam,
    primaryText: $options.modeInCaps + ' Param',
    defaultAction: $options.cancelCreateParam
  }, {
    title: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.modeInCaps + ' Param'), 1
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
      return [$props.mode == 'clone' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.param.name), 1
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

/***/ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/EventsEditor/CreateOrUpdate/EventEditor/EventTypes/Apis/Crud-Api/Body/CreateOrUpdateParam/CreateOrUpdateQueryModal.vue":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./resources/js/Pages/Versions/Show/Builder/Content/Editor/EventsEditor/CreateOrUpdate/EventEditor/EventTypes/Apis/Crud-Api/Body/CreateOrUpdateParam/CreateOrUpdateQueryModal.vue ***!
  \****************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CreateOrUpdateQueryModal_vue_vue_type_template_id_cffa8526__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateOrUpdateQueryModal.vue?vue&type=template&id=cffa8526 */ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/EventsEditor/CreateOrUpdate/EventEditor/EventTypes/Apis/Crud-Api/Body/CreateOrUpdateParam/CreateOrUpdateQueryModal.vue?vue&type=template&id=cffa8526");
/* harmony import */ var _CreateOrUpdateQueryModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateOrUpdateQueryModal.vue?vue&type=script&lang=js */ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/EventsEditor/CreateOrUpdate/EventEditor/EventTypes/Apis/Crud-Api/Body/CreateOrUpdateParam/CreateOrUpdateQueryModal.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_juliantabona_Sites_laravel_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_juliantabona_Sites_laravel_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_CreateOrUpdateQueryModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_CreateOrUpdateQueryModal_vue_vue_type_template_id_cffa8526__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Versions/Show/Builder/Content/Editor/EventsEditor/CreateOrUpdate/EventEditor/EventTypes/Apis/Crud-Api/Body/CreateOrUpdateParam/CreateOrUpdateQueryModal.vue"]])
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

/***/ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/EventsEditor/CreateOrUpdate/EventEditor/EventTypes/Apis/Crud-Api/Body/CreateOrUpdateParam/CreateOrUpdateQueryModal.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./resources/js/Pages/Versions/Show/Builder/Content/Editor/EventsEditor/CreateOrUpdate/EventEditor/EventTypes/Apis/Crud-Api/Body/CreateOrUpdateParam/CreateOrUpdateQueryModal.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CreateOrUpdateQueryModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CreateOrUpdateQueryModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CreateOrUpdateQueryModal.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/EventsEditor/CreateOrUpdate/EventEditor/EventTypes/Apis/Crud-Api/Body/CreateOrUpdateParam/CreateOrUpdateQueryModal.vue?vue&type=script&lang=js");


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

/***/ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/EventsEditor/CreateOrUpdate/EventEditor/EventTypes/Apis/Crud-Api/Body/CreateOrUpdateParam/CreateOrUpdateQueryModal.vue?vue&type=template&id=cffa8526":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./resources/js/Pages/Versions/Show/Builder/Content/Editor/EventsEditor/CreateOrUpdate/EventEditor/EventTypes/Apis/Crud-Api/Body/CreateOrUpdateParam/CreateOrUpdateQueryModal.vue?vue&type=template&id=cffa8526 ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CreateOrUpdateQueryModal_vue_vue_type_template_id_cffa8526__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CreateOrUpdateQueryModal_vue_vue_type_template_id_cffa8526__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../../../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CreateOrUpdateQueryModal.vue?vue&type=template&id=cffa8526 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/EventsEditor/CreateOrUpdate/EventEditor/EventTypes/Apis/Crud-Api/Body/CreateOrUpdateParam/CreateOrUpdateQueryModal.vue?vue&type=template&id=cffa8526");


/***/ })

}]);
