"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Versions_Show_Builder_Content_Editor_ScreenEditor_ScreenDisplays_Display_D-09f51e"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/NoFormattingRules.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/NoFormattingRules.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SelectFormattingRule_SelectFormattingRuleModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SelectFormattingRule/SelectFormattingRuleModal */ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/SelectFormattingRule/SelectFormattingRuleModal.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['form'],
  components: {
    SelectFormattingRuleModal: _SelectFormattingRule_SelectFormattingRuleModal__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/SelectFormattingRule/SelectFormattingRuleModal.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/SelectFormattingRule/SelectFormattingRuleModal.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/NoFormattingRules.vue?vue&type=template&id=3985963a":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/NoFormattingRules.vue?vue&type=template&id=3985963a ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/SelectFormattingRule/SelectFormattingRuleModal.vue?vue&type=template&id=c979cec8":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/SelectFormattingRule/SelectFormattingRuleModal.vue?vue&type=template&id=c979cec8 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/NoFormattingRules.vue":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/NoFormattingRules.vue ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NoFormattingRules_vue_vue_type_template_id_3985963a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NoFormattingRules.vue?vue&type=template&id=3985963a */ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/NoFormattingRules.vue?vue&type=template&id=3985963a");
/* harmony import */ var _NoFormattingRules_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NoFormattingRules.vue?vue&type=script&lang=js */ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/NoFormattingRules.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_juliantabona_Sites_laravel_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_juliantabona_Sites_laravel_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_NoFormattingRules_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_NoFormattingRules_vue_vue_type_template_id_3985963a__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/NoFormattingRules.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/SelectFormattingRule/SelectFormattingRuleModal.vue":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/SelectFormattingRule/SelectFormattingRuleModal.vue ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SelectFormattingRuleModal_vue_vue_type_template_id_c979cec8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SelectFormattingRuleModal.vue?vue&type=template&id=c979cec8 */ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/SelectFormattingRule/SelectFormattingRuleModal.vue?vue&type=template&id=c979cec8");
/* harmony import */ var _SelectFormattingRuleModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SelectFormattingRuleModal.vue?vue&type=script&lang=js */ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/SelectFormattingRule/SelectFormattingRuleModal.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_juliantabona_Sites_laravel_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_juliantabona_Sites_laravel_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_SelectFormattingRuleModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_SelectFormattingRuleModal_vue_vue_type_template_id_c979cec8__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/SelectFormattingRule/SelectFormattingRuleModal.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/NoFormattingRules.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/NoFormattingRules.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NoFormattingRules_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NoFormattingRules_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../../../../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NoFormattingRules.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/NoFormattingRules.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/SelectFormattingRule/SelectFormattingRuleModal.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/SelectFormattingRule/SelectFormattingRuleModal.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SelectFormattingRuleModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SelectFormattingRuleModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../../../../../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SelectFormattingRuleModal.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/SelectFormattingRule/SelectFormattingRuleModal.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/NoFormattingRules.vue?vue&type=template&id=3985963a":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/NoFormattingRules.vue?vue&type=template&id=3985963a ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NoFormattingRules_vue_vue_type_template_id_3985963a__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NoFormattingRules_vue_vue_type_template_id_3985963a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../../../../../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../../../../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NoFormattingRules.vue?vue&type=template&id=3985963a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/NoFormattingRules.vue?vue&type=template&id=3985963a");


/***/ }),

/***/ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/SelectFormattingRule/SelectFormattingRuleModal.vue?vue&type=template&id=c979cec8":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/SelectFormattingRule/SelectFormattingRuleModal.vue?vue&type=template&id=c979cec8 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SelectFormattingRuleModal_vue_vue_type_template_id_c979cec8__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SelectFormattingRuleModal_vue_vue_type_template_id_c979cec8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../../../../../../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../../../../../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SelectFormattingRuleModal.vue?vue&type=template&id=c979cec8 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/CreateOrUpdate/EventEditor/EventTypes/Formatting/Settings/SelectFormattingRule/SelectFormattingRuleModal.vue?vue&type=template&id=c979cec8");


/***/ })

}]);