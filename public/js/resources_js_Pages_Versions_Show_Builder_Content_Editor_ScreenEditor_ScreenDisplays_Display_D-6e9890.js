"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Versions_Show_Builder_Content_Editor_ScreenEditor_ScreenDisplays_Display_D-6e9890"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/CloneOrUpdateFormattingRule/CloneOrUpdateFormattingRuleModal.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/CloneOrUpdateFormattingRule/CloneOrUpdateFormattingRuleModal.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");
/* harmony import */ var _components_Alert_PrimaryAlert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/Alert/PrimaryAlert */ "./resources/js/Components/Alert/PrimaryAlert.vue");
/* harmony import */ var _components_Input_DefaultInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/Input/DefaultInput */ "./resources/js/Components/Input/DefaultInput.vue");
/* harmony import */ var _components_Modal_DefaultModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/Modal/DefaultModal */ "./resources/js/Components/Modal/DefaultModal.vue");
/* harmony import */ var _stores_VersionBuilder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @stores/VersionBuilder */ "./resources/js/Stores/VersionBuilder.js");
/* harmony import */ var _components_CodeEditor_CodeEditor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/CodeEditor/CodeEditor */ "./resources/js/Components/CodeEditor/CodeEditor.vue");
/* harmony import */ var _components_TextArea_DefaultTextArea__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/TextArea/DefaultTextArea */ "./resources/js/Components/TextArea/DefaultTextArea.vue");
/* harmony import */ var _builderComponents_SelectActiveState__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @builderComponents/SelectActiveState */ "./resources/js/Pages/Versions/Show/Builder/Components/SelectActiveState.vue");
/* harmony import */ var _components_TextOrCodeEditor_TextOrCodeEditor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @components/TextOrCodeEditor/TextOrCodeEditor */ "./resources/js/Components/TextOrCodeEditor/TextOrCodeEditor.vue");










/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    useForm: _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.useForm,
    PrimaryAlert: _components_Alert_PrimaryAlert__WEBPACK_IMPORTED_MODULE_2__["default"],
    DefaultInput: _components_Input_DefaultInput__WEBPACK_IMPORTED_MODULE_3__["default"],
    DefaultModal: _components_Modal_DefaultModal__WEBPACK_IMPORTED_MODULE_4__["default"],
    CodeEditor: _components_CodeEditor_CodeEditor__WEBPACK_IMPORTED_MODULE_6__["default"],
    DefaultTextArea: _components_TextArea_DefaultTextArea__WEBPACK_IMPORTED_MODULE_7__["default"],
    SelectActiveState: _builderComponents_SelectActiveState__WEBPACK_IMPORTED_MODULE_8__["default"],
    TextOrCodeEditor: _components_TextOrCodeEditor_TextOrCodeEditor__WEBPACK_IMPORTED_MODULE_9__["default"]
  },
  props: {
    rules: {
      type: Array
    },
    rule: {
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
        return ['clone', 'update'].includes(value);
      }
    }
  },
  data: function data() {
    return {
      form: null,
      useVersionBuilder: (0,_stores_VersionBuilder__WEBPACK_IMPORTED_MODULE_5__.useVersionBuilder)()
    };
  },
  computed: {
    modeInCaps: function modeInCaps() {
      return this.mode.charAt(0).toUpperCase() + this.mode.slice(1);
    },
    valueLabel: function valueLabel() {
      if (this.form.type == 'convert_to_money') {
        return 'Currency Symbol';
      } else if (this.form.type == 'substr') {
        return 'Start Index';
      } else if (['replace_with', 'replace_first_with', 'replace_last_with'].includes(this.form.type)) {
        return 'Search';
      } else if (this.form.type == 'plural_or_singular') {
        return 'Word';
      } else if (this.form.type == 'random_string') {
        return 'Number of random characters';
      } else {
        return this.form.type.split('_').map(function (word) {
          return word.charAt(0).toUpperCase() + word.slice(1);
        }).join(' ');
      }
    },
    value2Label: function value2Label() {
      if (this.form.type == 'limit') {
        return 'Trailing characters';
      } else if (this.form.type == 'substr') {
        return 'Length';
      } else if (['replace_with', 'replace_first_with', 'replace_last_with'].includes(this.form.type)) {
        return 'Replace';
      }
    }
  },
  methods: {
    resetForm: function resetForm() {
      this.form = (0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.useForm)(lodash__WEBPACK_IMPORTED_MODULE_0___default().cloneDeep(this.rule));
    },
    submitFormattingRule: function submitFormattingRule(closeModal) {
      //  Clear existing errors
      this.form.clearErrors(); //  Check if we have an existing rule using the same name

      var totalExactMatches = this.useVersionBuilder.searchFormattingRules(this.rules, this.form.name, true).length;

      if (this.form.name.length == 0) {
        this.form.setError('name', 'The rule name is required');
      }

      if (this.mode == 'clone' && totalExactMatches) {
        this.form.setError('name', 'This name is already in use');
      } else if (this.mode == 'update' && totalExactMatches && this.form.name !== this.form.name) {
        this.form.setError('name', 'This name is already in use');
      }

      if (this.form.hasOwnProperty('value')) {
        if (this.form.value.code_editor_mode == false && (this.form.value.text == '' || this.form.value.text == null)) {
          this.form.setError('value', 'The value is required');
        } else if (this.form.value.code_editor_mode == true && (this.form.value.code_editor_text == '' || this.form.value.code_editor_text == null)) {
          this.form.setError('value', 'The value is required');
        }
      }

      if (this.form.hasOwnProperty('value_2')) {
        if (this.form.value_2.code_editor_mode == false && (this.form.value_2.text == '' || this.form.value_2.text == null)) {
          this.form.setError('value_2', 'The value is required');
        } else if (this.form.value_2.code_editor_mode == true && (this.form.value_2.code_editor_text == '' || this.form.value_2.code_editor_text == null)) {
          this.form.setError('value_2', 'The value is required');
        }
      }

      if (this.form.hasErrors === false) {
        var rule = this.form.data();

        if (this.mode == 'update') {
          this.useVersionBuilder.updateFormattingRule(this.rules, rule, this.index);
        } else {
          this.useVersionBuilder.addFormattingRule(this.rules, rule);
        } //  Determine the action name e.g cloned or updated


        var actionName = this.mode + 'd';
        this.$message({
          message: 'Formatting rule ' + actionName + ' successfully',
          type: 'success'
        });
        closeModal();
      }
    },
    cancelCreateFormattingRule: function cancelCreateFormattingRule() {
      //  Clear existing errors
      this.form.clearErrors();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/DeleteFormattingRule/DeleteFormattingRuleModal.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/DeleteFormattingRule/DeleteFormattingRuleModal.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    rule: Object,
    index: Number,
    indexes: Array,
    rules: Array,
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
    deleteFormattingRule: function deleteFormattingRule(closeModal) {
      if (this.mode == 'single') {
        this.useVersionBuilder.removeFormattingRuleByIndex(this.rules, this.index);
        this.$message({
          message: 'Formatting rule deleted successfully',
          type: 'success'
        });
        this.$emit('deleted');
      } else if (this.mode == 'multiple' && this.indexes.length) {
        this.useVersionBuilder.removeFormattingRulesByIndexes(this.rules, this.indexes);
        this.$message({
          message: (this.indexes == 1 ? 'Formatting rule' : 'Formatting rules') + ' deleted successfully',
          type: 'success'
        });
        this.$emit('deleted');
      }

      closeModal();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/FormattingRule.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/FormattingRule.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue3_slide_up_down__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue3-slide-up-down */ "./node_modules/vue3-slide-up-down/dist/vue3-slide-up-down.es.js");
/* harmony import */ var _components_Popover_InfoPopover__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/Popover/InfoPopover */ "./resources/js/Components/Popover/InfoPopover.vue");
/* harmony import */ var _components_Badges_SuccessBadge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/Badges/SuccessBadge */ "./resources/js/Components/Badges/SuccessBadge.vue");
/* harmony import */ var _components_Badges_PrimaryBadge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/Badges/PrimaryBadge */ "./resources/js/Components/Badges/PrimaryBadge.vue");
/* harmony import */ var _components_Badges_WarningBadge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/Badges/WarningBadge */ "./resources/js/Components/Badges/WarningBadge.vue");
/* harmony import */ var _DeleteFormattingRule_DeleteFormattingRuleModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DeleteFormattingRule/DeleteFormattingRuleModal */ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/DeleteFormattingRule/DeleteFormattingRuleModal.vue");
/* harmony import */ var _CloneOrUpdateFormattingRule_CloneOrUpdateFormattingRuleModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CloneOrUpdateFormattingRule/CloneOrUpdateFormattingRuleModal */ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/CloneOrUpdateFormattingRule/CloneOrUpdateFormattingRuleModal.vue");







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['rules', 'rule', 'index'],
  components: {
    SlideUpDown: vue3_slide_up_down__WEBPACK_IMPORTED_MODULE_0__["default"],
    InfoPopover: _components_Popover_InfoPopover__WEBPACK_IMPORTED_MODULE_1__["default"],
    SuccessBadge: _components_Badges_SuccessBadge__WEBPACK_IMPORTED_MODULE_2__["default"],
    PrimaryBadge: _components_Badges_PrimaryBadge__WEBPACK_IMPORTED_MODULE_3__["default"],
    WarningBadge: _components_Badges_WarningBadge__WEBPACK_IMPORTED_MODULE_4__["default"],
    DeleteFormattingRuleModal: _DeleteFormattingRule_DeleteFormattingRuleModal__WEBPACK_IMPORTED_MODULE_5__["default"],
    CloneOrUpdateFormattingRuleModal: _CloneOrUpdateFormattingRule_CloneOrUpdateFormattingRuleModal__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  data: function data() {
    return {
      active: false
    };
  },
  computed: {
    ruleType: function ruleType() {
      return this.rule.type.split('_').join(' ').toLowerCase();
    }
  },
  methods: {
    toggleSelection: function toggleSelection() {
      this.active = !this.active;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/FormattingRules.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/FormattingRules.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuedraggable */ "./node_modules/vuedraggable/dist/vuedraggable.umd.js");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuedraggable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FormattingRule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormattingRule */ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/FormattingRule.vue");
/* harmony import */ var _NoFormattingRules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NoFormattingRules */ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/NoFormattingRules.vue");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['modelValue', 'form', 'searchTerm'],
  components: {
    draggable: (vuedraggable__WEBPACK_IMPORTED_MODULE_0___default()),
    FormattingRule: _FormattingRule__WEBPACK_IMPORTED_MODULE_1__["default"],
    NoFormattingRules: _NoFormattingRules__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  computed: {
    filteredRules: {
      get: function get() {
        var _this = this;

        return this.modelValue.filter(function (formattingRule) {
          var matchesEventName = formattingRule.name.toLowerCase().includes(_this.searchTerm.toLowerCase());
          return _this.searchTerm == '' || matchesEventName;
        });
      },
      set: function set(minifiedEvents) {
        //  Allow re-ordering when the search term filtering input is empty
        if (this.searchTerm == '') {
          var rules = minifiedEvents;
          this.$emit('update:modelValue', rules);
        } else {
          this.$message({
            message: 'You cannot reorder rules while searching formatting rules',
            type: 'warning'
          });
        }
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/NoFormattingRules.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/NoFormattingRules.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SelectFormattingRule_SelectFormattingRuleModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SelectFormattingRule/SelectFormattingRuleModal */ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/SelectFormattingRule/SelectFormattingRuleModal.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['form'],
  components: {
    SelectFormattingRuleModal: _SelectFormattingRule_SelectFormattingRuleModal__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/SelectFormattingRule/SelectFormattingRuleModal.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/SelectFormattingRule/SelectFormattingRuleModal.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Alert_PrimaryAlert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/Alert/PrimaryAlert */ "./resources/js/Components/Alert/PrimaryAlert.vue");
/* harmony import */ var _components_Modal_DefaultModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/Modal/DefaultModal */ "./resources/js/Components/Modal/DefaultModal.vue");
/* harmony import */ var _stores_VersionBuilder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @stores/VersionBuilder */ "./resources/js/Stores/VersionBuilder.js");
/* harmony import */ var _components_Button_PrimaryButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/Button/PrimaryButton */ "./resources/js/Components/Button/PrimaryButton.vue");
/* harmony import */ var _components_SearchBar_DefaultSearchBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/SearchBar/DefaultSearchBar */ "./resources/js/Components/SearchBar/DefaultSearchBar.vue");






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    form: Object,
    showButtonText: {
      type: Boolean,
      "default": false
    }
  },
  components: {
    PrimaryAlert: _components_Alert_PrimaryAlert__WEBPACK_IMPORTED_MODULE_1__["default"],
    DefaultModal: _components_Modal_DefaultModal__WEBPACK_IMPORTED_MODULE_2__["default"],
    PrimaryButton: _components_Button_PrimaryButton__WEBPACK_IMPORTED_MODULE_4__["default"],
    DefaultSearchBar: _components_SearchBar_DefaultSearchBar__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  data: function data() {
    return {
      useVersionBuilder: (0,_stores_VersionBuilder__WEBPACK_IMPORTED_MODULE_3__.useVersionBuilder)(),
      headers: ['Rule', 'Description'],
      checkedIndexes: [],
      searchIndexes: [],
      availableRules: [{
        name: 'Capitalize',
        type: 'capitalize',
        comment: 'Capitalize the first letter of each word'
      }, {
        name: 'Uppercase',
        type: 'uppercase',
        comment: 'Set every character to uppercase'
      }, {
        name: 'Lowercase',
        type: 'lowercase',
        comment: 'Set every character to lowercase'
      }, {
        name: 'Trim',
        type: 'trim',
        comment: 'Remove whitespace at the start and end of the target value'
      }, {
        name: 'Trim (Left)',
        type: 'trim_left',
        comment: 'Remove whitespace at the start of the target value'
      }, {
        name: 'Trim (Right)',
        type: 'trim_right',
        comment: 'Remove whitespace at the end of the target value'
      }, {
        value: 'P',
        name: 'Convert To Money',
        type: 'convert_to_money',
        comment: 'Convert a given number to represent money format e.g "25" into "P25.00"'
      }, {
        value: '10',
        value_2: '...',
        name: 'Limit',
        type: 'limit',
        comment: 'Limit the number of characters of the target value'
      }, {
        value: '5',
        value_2: '10',
        name: 'Substr',
        type: 'substr',
        comment: 'Returns the portion of the target value specified by the start and length parameters'
      }, {
        name: 'Remove Letters',
        type: 'remove_letters',
        comment: 'Remove numbers from the target value e.g "abc123def" into "123"'
      }, {
        name: 'Remove Numbers',
        type: 'remove_numbers',
        comment: 'Remove letters from the target value e.g "abc123def" into "abcdef"'
      }, {
        name: 'Remove Symbols',
        type: 'remove_symbols',
        comment: 'Remove symbols from the target value. It will remove everything except letters, numbers and spaces e.g "+26771234567" into "26771234567"'
      }, {
        name: 'Remove Spaces',
        type: 'remove_spaces',
        comment: 'Remove white spaces from the target value e.g "Remove spaces here" into "Removespaceshere"'
      }, {
        value: 'That',
        value_2: 'This',
        name: 'Replace With',
        type: 'replace_with',
        comment: 'Replace every occurence of a value with another value within the target value e.g replace "that" with "this" in the sentence "We love to play with that"'
      }, {
        value: 'That',
        value_2: 'This',
        name: 'Replace First With',
        type: 'replace_first_with',
        comment: 'Replace the first occurence of a value with another value within the target value e.g replace "that" with "this" in the sentence "We love to play with that"'
      }, {
        value: 'That',
        value_2: 'This',
        name: 'Replace Last With',
        type: 'replace_last_with',
        comment: 'Replace the last occurence of a value with another value within the target value e.g replace "that" with "this" in the sentence "We love to play with that"'
      }, {
        value: 'child',
        name: 'Plural Or Singular',
        type: 'plural_or_singular',
        comment: 'Convert a string to its plural or singular form based on the target value e.g return "child" if the target value is "1" and "children" if the target value is greater than "1"'
      }, {
        value: '40',
        name: 'Random String',
        type: 'random_string',
        comment: 'Generate a random string of the specified length e.g "40" will return a random 40 character string'
      }, {
        name: 'Set To Null',
        type: 'set_to_null',
        comment: 'Set the target value equal to Null'
      }, {
        name: 'Set To True',
        type: 'set_to_true',
        comment: 'Set the target value equal to True'
      }, {
        name: 'Set To False',
        type: 'set_to_false',
        comment: 'Set the target value equal to False'
      }, {
        name: 'Set To Empty String',
        type: 'set_to_empty_string',
        comment: 'Set the target value equal to Empty String'
      }, {
        name: 'Set To Empty Array',
        type: 'set_to_empty_array',
        comment: 'Set the target value equal to Empty Array'
      }, {
        value: '',
        name: 'Custom Code',
        type: 'custom_code',
        comment: 'Formats the target value using custom code for increased flexibility'
      }],
      hasResults: true,
      totalResults: 0,
      searchTerm: ''
    };
  },
  watch: {
    searchTerm: function searchTerm(newSearchTerm, oldSearchTerm) {
      //  Start a search using the given search term
      this.startSearch(newSearchTerm);
    }
  },
  computed: {
    totalCheckmarkSelected: function totalCheckmarkSelected() {
      var _this = this;

      return this.availableRules.filter(function (rule, index) {
        return _this.checkmarkSelected(rule, index);
      }).length;
    }
  },
  methods: {
    startSearch: function startSearch(searchTerm) {
      var _this2 = this;

      //  Reset the search indexes
      this.searchIndexes = [];
      this.availableRules.map(function (rule, index) {
        //  Convert the serach term to lowercase
        searchTerm = searchTerm.toLowerCase(); //  Check if we have the search term

        var hasSearchTerm = searchTerm !== ''; //  Check if the rule name matches the search term

        var nameMatchesSearchTerm = rule.name.toLowerCase().includes(searchTerm); //  Check if the rule comment matches the search term

        var commentMatchesSearchTerm = rule.comment.toLowerCase().includes(searchTerm); //  Determine if we have a match from the possible matches above

        var matchesSearchTerm = nameMatchesSearchTerm || commentMatchesSearchTerm; //  If we do not have the search term or the search term has a matching result

        if (hasSearchTerm == false || hasSearchTerm == true && matchesSearchTerm == true) {
          //  Indicate that this rule must be shown within the search results
          _this2.searchIndexes.push(index);
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
    checkmarkSelected: function checkmarkSelected(rule, index) {
      return this.checkedIndexes.includes(index) || this.form.event_data.rules.map(function (rule) {
        return rule.type;
      }).includes(rule.type);
    },
    addSelectedFormattingRules: function addSelectedFormattingRules(closeModal) {
      var _this3 = this;

      var selectedRules = lodash__WEBPACK_IMPORTED_MODULE_0___default().cloneDeep(this.availableRules.filter(function (rule, index) {
        return _this3.checkmarkSelected(rule, index);
      }));

      this.useVersionBuilder.addSelectedFormattingRules(this.form.event_data.rules, selectedRules);
      this.$message({
        message: 'Formatting rules added',
        type: 'success'
      });
      closeModal();
    },
    reset: function reset() {
      this.searchTerm = '';
      this.checkedIndexes = [];
      this.startSearch(this.searchTerm);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/index.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/index.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FormattingRules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormattingRules */ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/FormattingRules.vue");
/* harmony import */ var _components_Input_VariableInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/Input/VariableInput */ "./resources/js/Components/Input/VariableInput.vue");
/* harmony import */ var _components_SearchBar_DefaultSearchBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/SearchBar/DefaultSearchBar */ "./resources/js/Components/SearchBar/DefaultSearchBar.vue");
/* harmony import */ var _components_TextOrCodeEditor_TextOrCodeEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/TextOrCodeEditor/TextOrCodeEditor */ "./resources/js/Components/TextOrCodeEditor/TextOrCodeEditor.vue");
/* harmony import */ var _SelectFormattingRule_SelectFormattingRuleModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SelectFormattingRule/SelectFormattingRuleModal */ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/SelectFormattingRule/SelectFormattingRuleModal.vue");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['form'],
  components: {
    FormattingRules: _FormattingRules__WEBPACK_IMPORTED_MODULE_0__["default"],
    VariableInput: _components_Input_VariableInput__WEBPACK_IMPORTED_MODULE_1__["default"],
    DefaultSearchBar: _components_SearchBar_DefaultSearchBar__WEBPACK_IMPORTED_MODULE_2__["default"],
    TextOrCodeEditor: _components_TextOrCodeEditor_TextOrCodeEditor__WEBPACK_IMPORTED_MODULE_3__["default"],
    SelectFormattingRuleModal: _SelectFormattingRule_SelectFormattingRuleModal__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      searchTerm: ''
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/CloneOrUpdateFormattingRule/CloneOrUpdateFormattingRuleModal.vue?vue&type=template&id=3d089a36":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/CloneOrUpdateFormattingRule/CloneOrUpdateFormattingRuleModal.vue?vue&type=template&id=3d089a36 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" rule");

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-justify"
}, " Write code to munipulate the target value. Make sure to return the final result. ", -1
/* HOISTED */
);

var _hoisted_6 = {
  key: 0,
  name: "trigger",
  xmlns: "http://www.w3.org/2000/svg",
  "class": "h-4 w-4 mr-2 cursor-pointer hover:text-blue-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "2"
};

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
}, null, -1
/* HOISTED */
);

var _hoisted_8 = [_hoisted_7];
var _hoisted_9 = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  "class": "h-4 w-4 mr-2 cursor-pointer hover:text-blue-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "2"
};

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
}, null, -1
/* HOISTED */
);

var _hoisted_11 = [_hoisted_10];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_SelectActiveState = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("SelectActiveState");

  var _component_DefaultInput = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DefaultInput");

  var _component_PrimaryAlert = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("PrimaryAlert");

  var _component_CodeEditor = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("CodeEditor");

  var _component_TextOrCodeEditor = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("TextOrCodeEditor");

  var _component_DefaultTextArea = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DefaultTextArea");

  var _component_DefaultModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DefaultModal");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Modal "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DefaultModal, {
    defaultText: "Cancel",
    onOpen: _cache[6] || (_cache[6] = function ($event) {
      return $options.resetForm();
    }),
    onClose: _cache[7] || (_cache[7] = function ($event) {
      return _ctx.$emit('close');
    }),
    primaryAction: $options.submitFormattingRule,
    defaultAction: $options.cancelCreateFormattingRule,
    primaryText: $options.modeInCaps + ' Formatting Rule'
  }, {
    title: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.modeInCaps + ' Formatting Rule'), 1
      /* TEXT */
      )];
    }),
    trigger: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [$props.mode == 'clone' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_6, _hoisted_8)) : $props.mode == 'update' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_9, _hoisted_11)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
    }),
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [$props.mode == 'clone' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.rule.name), 1
      /* TEXT */
      ), _hoisted_4])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_SelectActiveState, {
        modelValue: $data.form.active,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
          return $data.form.active = $event;
        }),
        "class": "mb-6"
      }, null, 8
      /* PROPS */
      , ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DefaultInput, {
        modelValue: $data.form.name,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
          return $data.form.name = $event;
        }),
        label: "Name",
        error: $data.form.errors.name,
        "class": "mb-6"
      }, null, 8
      /* PROPS */
      , ["modelValue", "error"]), $data.form.type == 'custom_code' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_PrimaryAlert, {
        key: 1,
        "class": "mb-6"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_5];
        }),
        _: 1
        /* STABLE */

      })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.form.type == 'custom_code' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_CodeEditor, {
        key: 2,
        modelValue: $data.form.value,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
          return $data.form.value = $event;
        }),
        "class": "mb-6",
        height: "300px"
      }, null, 8
      /* PROPS */
      , ["modelValue"])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        key: 3
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Value "), $data.form.hasOwnProperty('value') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_TextOrCodeEditor, {
        key: 0,
        modelValue: $data.form.value,
        "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
          return $data.form.value = $event;
        }),
        label: $options.valueLabel,
        error: $data.form.errors.value,
        "class": "mb-6"
      }, null, 8
      /* PROPS */
      , ["modelValue", "label", "error"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Value 2 "), $data.form.hasOwnProperty('value_2') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_TextOrCodeEditor, {
        key: 1,
        modelValue: $data.form.value_2,
        "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
          return $data.form.value_2 = $event;
        }),
        label: $options.value2Label,
        error: $data.form.errors.value_2,
        "class": "mb-6"
      }, null, 8
      /* PROPS */
      , ["modelValue", "label", "error"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64
      /* STABLE_FRAGMENT */
      )), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DefaultTextArea, {
        modelValue: $data.form.comment,
        "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
          return $data.form.comment = $event;
        }),
        label: "Comment"
      }, null, 8
      /* PROPS */
      , ["modelValue"])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["primaryAction", "defaultAction", "primaryText"])], 2112
  /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/DeleteFormattingRule/DeleteFormattingRuleModal.vue?vue&type=template&id=284c1868":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/DeleteFormattingRule/DeleteFormattingRuleModal.vue?vue&type=template&id=284c1868 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Delete Formatting Rule");

var _hoisted_2 = {
  key: 0,
  "class": "text-sm text-gray-500 mb-5"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Are you sure you want to delete the ");

var _hoisted_4 = {
  "class": "text-blue-500 font-bold"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" formatting rule. After this formatting rule is deleted you cannot recover it again.");

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
    dangerText: "Delete Formatting Rule",
    dangerAction: $options.deleteFormattingRule
  }, {
    title: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_1];
    }),
    trigger: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [$props.mode == 'single' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_9, _hoisted_11)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
        name: "fade"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [$props.mode == 'multiple' && $props.indexes.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.indexes.length + ($props.indexes.length == 1 ? ' rule' : ' rules')) + " selected", 1
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
      return [$props.mode == 'single' && $props.rule ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.rule.name), 1
      /* TEXT */
      ), _hoisted_5])) : $props.mode == 'multiple' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        key: 1
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Modal Content (If we are deleting multiple rule) "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_6, [_hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.indexes.length), 1
      /* TEXT */
      ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.indexes.length == 1 ? 'formatting rule' : 'formatting rules') + ". After " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.indexes.length == 1 ? 'this formatting rule is deleted you cannot recover it again' : 'these formatting rules are deleted you cannot recover them again') + ".", 1
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/FormattingRule.vue?vue&type=template&id=e3b7c6a2":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/FormattingRule.vue?vue&type=template&id=e3b7c6a2 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "col-span-6 flex items-center"
};
var _hoisted_2 = {
  "class": "col-span-6 flex justify-end items-center relative"
};
var _hoisted_3 = {
  "class": "flex items-center text-gray-400 text-xs opacity-100 group-hover:opacity-0"
};
var _hoisted_4 = {
  "class": "mr-4"
};
var _hoisted_5 = {
  "class": "mr-2"
};

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Active");

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Inactive");

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Conditional");

var _hoisted_9 = {
  "class": "absolute right-0 flex justify-end opacity-0 group-hover:opacity-100"
};

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "class": "h-4 w-4 cursor-grab hover:text-blue-500 active:cursor-grabbing draggble-handle",
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

var _hoisted_11 = {
  "class": "ml-4 mr-1"
};

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "border-t border-dashed pt-4 mt-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "text-xs text-gray-600 break-normal"
}, "Formatting rule details ...")], -1
/* HOISTED */
);

var _hoisted_13 = {
  "class": "p-4"
};
var _hoisted_14 = {
  "class": "text-xs"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_SuccessBadge = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("SuccessBadge");

  var _component_WarningBadge = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("WarningBadge");

  var _component_PrimaryBadge = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("PrimaryBadge");

  var _component_InfoPopover = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("InfoPopover");

  var _component_CloneOrUpdateFormattingRuleModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("CloneOrUpdateFormattingRuleModal");

  var _component_DeleteFormattingRuleModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DeleteFormattingRuleModal");

  var _component_SlideUpDown = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("SlideUpDown");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(['rounded-md border', $data.active ? 'shadow-sm border-2 my-4' : 'mb-2']),
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      borderLeftColor: $props.rule.hexColor,
      borderLeftWidth: '4px'
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $options.toggleSelection();
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(['grid grid-cols-12 group text-xs text-gray-700 py-2 px-4 cursor-pointer', $data.active ? 'border-b border-dashed bg-blue-50 rounded-t-md' : 'bg-gray-50 rounded-md'])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [$props.rule.name ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-blue-500 font-semibold': $data.active
    })
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.rule.name), 3
  /* TEXT, CLASS */
  )) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 1,
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(['text-red-500', {
      'font-semibold italic': $data.active
    }])
  }, "No name", 2
  /* CLASS */
  ))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.ruleType), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [$props.rule.active.selected_type == 'yes' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_SuccessBadge, {
    key: 0
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_6];
    }),
    _: 1
    /* STABLE */

  })) : $props.rule.active.selected_type == 'no' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_WarningBadge, {
    key: 1
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_7];
    }),
    _: 1
    /* STABLE */

  })) : $props.rule.active.selected_type == 'conditional' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_PrimaryBadge, {
    key: 2
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_8];
    }),
    _: 1
    /* STABLE */

  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Info Icon "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_InfoPopover, {
    size: "5"
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Edit Icon "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_CloneOrUpdateFormattingRuleModal, {
    rules: $props.rules,
    rule: $props.rule,
    index: $props.index,
    mode: "update"
  }, null, 8
  /* PROPS */
  , ["rules", "rule", "index"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Delete Icon "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DeleteFormattingRuleModal, {
    rules: $props.rules,
    rule: $props.rule,
    index: $props.index
  }, null, 8
  /* PROPS */
  , ["rules", "rule", "index"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Clone Icon "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_CloneOrUpdateFormattingRuleModal, {
    rules: $props.rules,
    rule: $props.rule,
    mode: "clone"
  }, null, 8
  /* PROPS */
  , ["rules", "rule"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Move Icon "), _hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Info Icon "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_InfoPopover, {
    title: $props.rule.type
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_12];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["title"])])])])], 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_SlideUpDown, {
    modelValue: $data.active,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.active = $event;
    }),
    duration: 300
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.rule.comment ? $props.rule.comment : 'No comments'), 1
      /* TEXT */
      )])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["modelValue"])], 6
  /* CLASS, STYLE */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/FormattingRules.vue?vue&type=template&id=3a0b1a54":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/FormattingRules.vue?vue&type=template&id=3a0b1a54 ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_FormattingRule = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("FormattingRule");

  var _component_NoFormattingRules = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("NoFormattingRules");

  var _component_draggable = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("draggable");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_draggable, {
    invertSwap: true,
    handle: ".draggble-handle",
    "ghost-class": "bg-yellow-100",
    "item-key": "formatting-rules",
    modelValue: $options.filteredRules,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $options.filteredRules = $event;
    })
  }, {
    item: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref) {
      var element = _ref.element,
          index = _ref.index;
      return [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_FormattingRule, {
        rules: $props.modelValue,
        rule: element,
        index: index,
        key: element.id
      }, null, 8
      /* PROPS */
      , ["rules", "rule", "index"]))];
    }),
    footer: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [$options.filteredRules.length == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_NoFormattingRules, {
        key: 0,
        form: $props.form
      }, null, 8
      /* PROPS */
      , ["form"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["modelValue"]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/NoFormattingRules.vue?vue&type=template&id=c09a1f5a":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/NoFormattingRules.vue?vue&type=template&id=c09a1f5a ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "flex items-center justify-between bg-white rounded-sm border border-dashed border-gray-400 p-5"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"flex\"><svg xmlns=\"http://www.w3.org/2000/svg\" class=\"h-12 w-12 mr-4\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"1\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z\"></path></svg><div><p class=\"text-gray-800 text-md mb-1\">No formatting rules</p><p class=\"text-gray-600 text-xs\">Go ahead and create your first formatting rule</p></div></div>", 1);

var _hoisted_3 = {
  "class": "flex justify-end"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_SelectFormattingRuleModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("SelectFormattingRuleModal");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Add Formatting Rule Button & Modal "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_SelectFormattingRuleModal, {
    form: $props.form,
    showButtonText: true
  }, null, 8
  /* PROPS */
  , ["form"])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/SelectFormattingRule/SelectFormattingRuleModal.vue?vue&type=template&id=3bd6532c":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/SelectFormattingRule/SelectFormattingRuleModal.vue?vue&type=template&id=3bd6532c ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Add Formatting Rules");

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-justify"
}, " Click to select one or many formatting rules ", -1
/* HOISTED */
);

var _hoisted_3 = {
  "class": "shadow-md"
};
var _hoisted_4 = {
  "class": "w-full text-sm text-left text-gray-500"
};
var _hoisted_5 = {
  "class": "text-xs text-gray-700 uppercase bg-gray-50"
};

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col",
  "class": "px-6 py-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "sr-only"
}, "Action")], -1
/* HOISTED */
);

var _hoisted_7 = ["onClick"];
var _hoisted_8 = {
  scope: "row",
  "class": "px-6 py-4 text-xs font-medium text-gray-900"
};
var _hoisted_9 = {
  scope: "row",
  "class": "px-6 py-4 text-xs text-gray-500"
};
var _hoisted_10 = {
  "class": "p-4"
};
var _hoisted_11 = {
  "class": "flex items-center justify-center"
};
var _hoisted_12 = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  "class": "h-4 w-4 text-green-500",
  viewBox: "0 0 20 20",
  fill: "currentColor"
};

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "fill-rule": "evenodd",
  d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
  "clip-rule": "evenodd"
}, null, -1
/* HOISTED */
);

var _hoisted_14 = [_hoisted_13];
var _hoisted_15 = {
  key: 0,
  "class": "flex items-center bg-gray-50 p-8"
};

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-gray-500 text-xs"
}, "No Results", -1
/* HOISTED */
);

var _hoisted_17 = [_hoisted_16];

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
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

var _hoisted_19 = {
  key: 0,
  "class": "ml-2"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_DefaultSearchBar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DefaultSearchBar");

  var _component_PrimaryAlert = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("PrimaryAlert");

  var _component_PrimaryButton = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("PrimaryButton");

  var _component_DefaultModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DefaultModal");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Modal "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DefaultModal, {
    width: "w-1/2",
    onOpen: _cache[1] || (_cache[1] = function ($event) {
      return $options.reset();
    }),
    defaultText: "Cancel",
    primaryAction: $options.addSelectedFormattingRules,
    primaryText: 'Add ' + $options.totalCheckmarkSelected + ($options.totalCheckmarkSelected == 1 ? ' Rule' : ' Rules')
  }, {
    title: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_1];
    }),
    trigger: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_PrimaryButton, {
        "class": "px-3"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_18, $props.showButtonText ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_19, "Create Formatting Rule")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
        }),
        _: 1
        /* STABLE */

      })];
    }),
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DefaultSearchBar, {
        modelValue: $data.searchTerm,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
          return $data.searchTerm = $event;
        }),
        placeholder: "Search",
        totalResults: $data.totalResults,
        "class": "mb-4"
      }, null, 8
      /* PROPS */
      , ["modelValue", "totalResults"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_PrimaryAlert, {
        "class": "mb-4"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_2];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Table Header Columns Names "), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.headers, function (header, index) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("th", {
          key: index,
          scope: "col",
          "class": "px-6 py-3"
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(header), 1
        /* TEXT */
        )]);
      }), 128
      /* KEYED_FRAGMENT */
      )), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Table Header Action "), _hoisted_6])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Table Body "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.availableRules, function (rule, index) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          key: index
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Table Rows "), $data.searchIndexes.includes(index) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
          key: 0,
          "class": "'group border-b cursor-pointer hover:bg-gray-50",
          onClick: function onClick($event) {
            return $options.toggleSingleCheckmark(index);
          }
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Name "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(rule.name), 1
        /* TEXT */
        )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Comment "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(rule.comment), 1
        /* TEXT */
        )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Selected Indicator "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [$options.checkmarkSelected(rule, index) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_12, _hoisted_14)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])], 8
        /* PROPS */
        , _hoisted_7)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64
        /* STABLE_FRAGMENT */
        );
      }), 128
      /* KEYED_FRAGMENT */
      ))])]), $data.hasResults == false ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_15, _hoisted_17)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["primaryAction", "primaryText"])], 2112
  /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/index.vue?vue&type=template&id=07619734":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/index.vue?vue&type=template&id=07619734 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, " Provide an alternative variable name to capture the value after formatting. If the alternative name is not provided, the target variable name will be referenced to capture the formatted value. ", -1
/* HOISTED */
);

var _hoisted_2 = {
  "class": "flex items-center justify-between border-b border-dotted pb-4 mb-4"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  "class": "text-sm font-semibold tracking-tight text-gray-600"
}, "Formatting Rules", -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_TextOrCodeEditor = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("TextOrCodeEditor");

  var _component_VariableInput = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("VariableInput");

  var _component_DefaultSearchBar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DefaultSearchBar");

  var _component_SelectFormattingRuleModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("SelectFormattingRuleModal");

  var _component_FormattingRules = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("FormattingRules");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Target "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_TextOrCodeEditor, {
    modelValue: $props.form.event_data.target,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $props.form.event_data.target = $event;
    }),
    label: "Target",
    placeholder: "{{ first_name }}",
    note: "The variable to format",
    error: $props.form.errors.target,
    "class": "mb-6"
  }, null, 8
  /* PROPS */
  , ["modelValue", "error"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Alternative Reference Name "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_VariableInput, {
    modelValue: $props.form.event_data.reference_name,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $props.form.event_data.reference_name = $event;
    }),
    label: "Alternative Reference",
    placeholder: "{{ first_name_capitalized }}",
    note: "Alternative variable to capture formatted value (Optional)",
    error: $props.form.errors.reference_name,
    onOnSetError: _cache[2] || (_cache[2] = function ($event) {
      return $props.form.setError('reference_name', $event);
    }),
    onOnClearError: _cache[3] || (_cache[3] = function ($event) {
      return $props.form.clearErrors('reference_name');
    }),
    "class": "mb-6"
  }, {
    info: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_1];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["modelValue", "error"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Title "), _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Search Bar "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DefaultSearchBar, {
    modelValue: $data.searchTerm,
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $data.searchTerm = $event;
    }),
    placeholder: "Search formatting rules"
  }, null, 8
  /* PROPS */
  , ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Add Formatting Rule Button & Modal "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_SelectFormattingRuleModal, {
    form: $props.form
  }, null, 8
  /* PROPS */
  , ["form"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Formatting Rules "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FormattingRules, {
    modelValue: $props.form.event_data.rules,
    "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
      return $props.form.event_data.rules = $event;
    }),
    form: $props.form,
    searchTerm: $data.searchTerm
  }, null, 8
  /* PROPS */
  , ["modelValue", "form", "searchTerm"])]);
}

/***/ }),

/***/ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/CloneOrUpdateFormattingRule/CloneOrUpdateFormattingRuleModal.vue":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/CloneOrUpdateFormattingRule/CloneOrUpdateFormattingRuleModal.vue ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CloneOrUpdateFormattingRuleModal_vue_vue_type_template_id_3d089a36__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CloneOrUpdateFormattingRuleModal.vue?vue&type=template&id=3d089a36 */ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/CloneOrUpdateFormattingRule/CloneOrUpdateFormattingRuleModal.vue?vue&type=template&id=3d089a36");
/* harmony import */ var _CloneOrUpdateFormattingRuleModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CloneOrUpdateFormattingRuleModal.vue?vue&type=script&lang=js */ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/CloneOrUpdateFormattingRule/CloneOrUpdateFormattingRuleModal.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_juliantabona_Sites_laravel_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_juliantabona_Sites_laravel_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_CloneOrUpdateFormattingRuleModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_CloneOrUpdateFormattingRuleModal_vue_vue_type_template_id_3d089a36__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/CloneOrUpdateFormattingRule/CloneOrUpdateFormattingRuleModal.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/DeleteFormattingRule/DeleteFormattingRuleModal.vue":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/DeleteFormattingRule/DeleteFormattingRuleModal.vue ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DeleteFormattingRuleModal_vue_vue_type_template_id_284c1868__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DeleteFormattingRuleModal.vue?vue&type=template&id=284c1868 */ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/DeleteFormattingRule/DeleteFormattingRuleModal.vue?vue&type=template&id=284c1868");
/* harmony import */ var _DeleteFormattingRuleModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DeleteFormattingRuleModal.vue?vue&type=script&lang=js */ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/DeleteFormattingRule/DeleteFormattingRuleModal.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_juliantabona_Sites_laravel_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_juliantabona_Sites_laravel_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_DeleteFormattingRuleModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_DeleteFormattingRuleModal_vue_vue_type_template_id_284c1868__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/DeleteFormattingRule/DeleteFormattingRuleModal.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/FormattingRule.vue":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/FormattingRule.vue ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FormattingRule_vue_vue_type_template_id_e3b7c6a2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormattingRule.vue?vue&type=template&id=e3b7c6a2 */ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/FormattingRule.vue?vue&type=template&id=e3b7c6a2");
/* harmony import */ var _FormattingRule_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormattingRule.vue?vue&type=script&lang=js */ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/FormattingRule.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_juliantabona_Sites_laravel_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_juliantabona_Sites_laravel_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_FormattingRule_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_FormattingRule_vue_vue_type_template_id_e3b7c6a2__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/FormattingRule.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/FormattingRules.vue":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/FormattingRules.vue ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FormattingRules_vue_vue_type_template_id_3a0b1a54__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormattingRules.vue?vue&type=template&id=3a0b1a54 */ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/FormattingRules.vue?vue&type=template&id=3a0b1a54");
/* harmony import */ var _FormattingRules_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormattingRules.vue?vue&type=script&lang=js */ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/FormattingRules.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_juliantabona_Sites_laravel_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_juliantabona_Sites_laravel_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_FormattingRules_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_FormattingRules_vue_vue_type_template_id_3a0b1a54__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/FormattingRules.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/NoFormattingRules.vue":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/NoFormattingRules.vue ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NoFormattingRules_vue_vue_type_template_id_c09a1f5a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NoFormattingRules.vue?vue&type=template&id=c09a1f5a */ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/NoFormattingRules.vue?vue&type=template&id=c09a1f5a");
/* harmony import */ var _NoFormattingRules_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NoFormattingRules.vue?vue&type=script&lang=js */ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/NoFormattingRules.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_juliantabona_Sites_laravel_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_juliantabona_Sites_laravel_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_NoFormattingRules_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_NoFormattingRules_vue_vue_type_template_id_c09a1f5a__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/NoFormattingRules.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/SelectFormattingRule/SelectFormattingRuleModal.vue":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/SelectFormattingRule/SelectFormattingRuleModal.vue ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SelectFormattingRuleModal_vue_vue_type_template_id_3bd6532c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SelectFormattingRuleModal.vue?vue&type=template&id=3bd6532c */ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/SelectFormattingRule/SelectFormattingRuleModal.vue?vue&type=template&id=3bd6532c");
/* harmony import */ var _SelectFormattingRuleModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SelectFormattingRuleModal.vue?vue&type=script&lang=js */ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/SelectFormattingRule/SelectFormattingRuleModal.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_juliantabona_Sites_laravel_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_juliantabona_Sites_laravel_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_SelectFormattingRuleModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_SelectFormattingRuleModal_vue_vue_type_template_id_3bd6532c__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/SelectFormattingRule/SelectFormattingRuleModal.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/index.vue":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/index.vue ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_07619734__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=07619734 */ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/index.vue?vue&type=template&id=07619734");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/index.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_juliantabona_Sites_laravel_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_juliantabona_Sites_laravel_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_index_vue_vue_type_template_id_07619734__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/index.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/CloneOrUpdateFormattingRule/CloneOrUpdateFormattingRuleModal.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/CloneOrUpdateFormattingRule/CloneOrUpdateFormattingRuleModal.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CloneOrUpdateFormattingRuleModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CloneOrUpdateFormattingRuleModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../../../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../../../../../../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CloneOrUpdateFormattingRuleModal.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/CloneOrUpdateFormattingRule/CloneOrUpdateFormattingRuleModal.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/DeleteFormattingRule/DeleteFormattingRuleModal.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/DeleteFormattingRule/DeleteFormattingRuleModal.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DeleteFormattingRuleModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DeleteFormattingRuleModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../../../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../../../../../../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DeleteFormattingRuleModal.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/DeleteFormattingRule/DeleteFormattingRuleModal.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/FormattingRule.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/FormattingRule.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FormattingRule_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FormattingRule_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../../../../../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./FormattingRule.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/FormattingRule.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/FormattingRules.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/FormattingRules.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FormattingRules_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FormattingRules_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../../../../../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./FormattingRules.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/FormattingRules.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/NoFormattingRules.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/NoFormattingRules.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NoFormattingRules_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NoFormattingRules_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../../../../../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NoFormattingRules.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/NoFormattingRules.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/SelectFormattingRule/SelectFormattingRuleModal.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/SelectFormattingRule/SelectFormattingRuleModal.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SelectFormattingRuleModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SelectFormattingRuleModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../../../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../../../../../../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SelectFormattingRuleModal.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/SelectFormattingRule/SelectFormattingRuleModal.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/index.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/index.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../../../../../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/index.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/CloneOrUpdateFormattingRule/CloneOrUpdateFormattingRuleModal.vue?vue&type=template&id=3d089a36":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/CloneOrUpdateFormattingRule/CloneOrUpdateFormattingRuleModal.vue?vue&type=template&id=3d089a36 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CloneOrUpdateFormattingRuleModal_vue_vue_type_template_id_3d089a36__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CloneOrUpdateFormattingRuleModal_vue_vue_type_template_id_3d089a36__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../../../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../../../../../../../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../../../../../../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CloneOrUpdateFormattingRuleModal.vue?vue&type=template&id=3d089a36 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/CloneOrUpdateFormattingRule/CloneOrUpdateFormattingRuleModal.vue?vue&type=template&id=3d089a36");


/***/ }),

/***/ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/DeleteFormattingRule/DeleteFormattingRuleModal.vue?vue&type=template&id=284c1868":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/DeleteFormattingRule/DeleteFormattingRuleModal.vue?vue&type=template&id=284c1868 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DeleteFormattingRuleModal_vue_vue_type_template_id_284c1868__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DeleteFormattingRuleModal_vue_vue_type_template_id_284c1868__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../../../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../../../../../../../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../../../../../../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DeleteFormattingRuleModal.vue?vue&type=template&id=284c1868 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/DeleteFormattingRule/DeleteFormattingRuleModal.vue?vue&type=template&id=284c1868");


/***/ }),

/***/ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/FormattingRule.vue?vue&type=template&id=e3b7c6a2":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/FormattingRule.vue?vue&type=template&id=e3b7c6a2 ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FormattingRule_vue_vue_type_template_id_e3b7c6a2__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FormattingRule_vue_vue_type_template_id_e3b7c6a2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../../../../../../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../../../../../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./FormattingRule.vue?vue&type=template&id=e3b7c6a2 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/FormattingRule.vue?vue&type=template&id=e3b7c6a2");


/***/ }),

/***/ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/FormattingRules.vue?vue&type=template&id=3a0b1a54":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/FormattingRules.vue?vue&type=template&id=3a0b1a54 ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FormattingRules_vue_vue_type_template_id_3a0b1a54__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FormattingRules_vue_vue_type_template_id_3a0b1a54__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../../../../../../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../../../../../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./FormattingRules.vue?vue&type=template&id=3a0b1a54 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/FormattingRules.vue?vue&type=template&id=3a0b1a54");


/***/ }),

/***/ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/NoFormattingRules.vue?vue&type=template&id=c09a1f5a":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/NoFormattingRules.vue?vue&type=template&id=c09a1f5a ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NoFormattingRules_vue_vue_type_template_id_c09a1f5a__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NoFormattingRules_vue_vue_type_template_id_c09a1f5a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../../../../../../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../../../../../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NoFormattingRules.vue?vue&type=template&id=c09a1f5a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/NoFormattingRules.vue?vue&type=template&id=c09a1f5a");


/***/ }),

/***/ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/SelectFormattingRule/SelectFormattingRuleModal.vue?vue&type=template&id=3bd6532c":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/SelectFormattingRule/SelectFormattingRuleModal.vue?vue&type=template&id=3bd6532c ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SelectFormattingRuleModal_vue_vue_type_template_id_3bd6532c__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SelectFormattingRuleModal_vue_vue_type_template_id_3bd6532c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../../../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../../../../../../../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../../../../../../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SelectFormattingRuleModal.vue?vue&type=template&id=3bd6532c */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/SelectFormattingRule/SelectFormattingRuleModal.vue?vue&type=template&id=3bd6532c");


/***/ }),

/***/ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/index.vue?vue&type=template&id=07619734":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/index.vue?vue&type=template&id=07619734 ***!
  \************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_07619734__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_07619734__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../../../../../../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../../../../../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=template&id=07619734 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayAction/SelectAction/StaticOptions/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/index.vue?vue&type=template&id=07619734");


/***/ })

}]);