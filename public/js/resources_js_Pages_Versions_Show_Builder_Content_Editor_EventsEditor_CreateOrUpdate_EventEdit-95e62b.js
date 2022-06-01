"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Versions_Show_Builder_Content_Editor_EventsEditor_CreateOrUpdate_EventEdit-95e62b"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Alert/PrimaryAlert.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Alert/PrimaryAlert.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    size: {
      type: String,
      "default": '4'
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/EventsEditor/CreateOrUpdate/EventEditor/EventTypes/Apis/Crud-Api/Response/CreateOrUpdateStatusCode/CreateOrUpdateStatusCodeModal.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/EventsEditor/CreateOrUpdate/EventEditor/EventTypes/Apis/Crud-Api/Response/CreateOrUpdateStatusCode/CreateOrUpdateStatusCodeModal.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _components_Button_PrimaryButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/Button/PrimaryButton */ "./resources/js/Components/Button/PrimaryButton.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    useForm: _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.useForm,
    PrimaryAlert: _components_Alert_PrimaryAlert__WEBPACK_IMPORTED_MODULE_2__["default"],
    DefaultInput: _components_Input_DefaultInput__WEBPACK_IMPORTED_MODULE_3__["default"],
    DefaultModal: _components_Modal_DefaultModal__WEBPACK_IMPORTED_MODULE_4__["default"],
    PrimaryButton: _components_Button_PrimaryButton__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  props: {
    statusCodes: {
      type: Array
    },
    statusCode: {
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
      useVersionBuilder: (0,_stores_VersionBuilder__WEBPACK_IMPORTED_MODULE_5__.useVersionBuilder)(),
      commonStatusCodes: [//  1xx
      {
        'code': '100',
        'desc': 'Continue'
      }, {
        'code': '101',
        'desc': 'Switching Protocols'
      }, {
        'code': '102',
        'desc': 'Processing (WebDAV)'
      }, {
        'code': '1xx',
        'desc': 'Catch Status: 100 <= x < 200'
      }, //  2xx
      {
        'code': '200',
        'desc': 'OK'
      }, {
        'code': '201',
        'desc': 'Created'
      }, {
        'code': '202',
        'desc': 'Accepted'
      }, {
        'code': '203',
        'desc': 'Non-Authoritative Information'
      }, {
        'code': '204',
        'desc': 'No Content'
      }, {
        'code': '205',
        'desc': 'Reset Content'
      }, {
        'code': '206',
        'desc': 'Partial Content'
      }, {
        'code': '207',
        'desc': 'Multi-Status (WebDAV)'
      }, {
        'code': '208',
        'desc': 'Already Reported (WebDAV)'
      }, {
        'code': '226',
        'desc': 'IM Used'
      }, {
        'code': '2xx',
        'desc': 'Catch Status: 200 <= x < 300'
      }, //  3xx
      {
        'code': '300',
        'desc': 'Multiple Choices'
      }, {
        'code': '301',
        'desc': 'Moved Permanently'
      }, {
        'code': '302',
        'desc': 'Found'
      }, {
        'code': '303',
        'desc': 'See Other'
      }, {
        'code': '304',
        'desc': 'Not Modified'
      }, {
        'code': '305',
        'desc': 'Use Proxy'
      }, {
        'code': '306',
        'desc': '(Unused)'
      }, {
        'code': '307',
        'desc': 'Temporary Redirect'
      }, {
        'code': '308',
        'desc': 'Permanent Redirect (experimental)'
      }, {
        'code': '3xx',
        'desc': 'Catch Status: 200 <= x < 300'
      }, //  4xx
      {
        'code': '400',
        'desc': 'Bad Request'
      }, {
        'code': '401',
        'desc': 'Unauthorized'
      }, {
        'code': '402',
        'desc': 'Payment Required'
      }, {
        'code': '403',
        'desc': 'Forbidden'
      }, {
        'code': '404',
        'desc': 'Not Found'
      }, {
        'code': '405',
        'desc': 'Method Not Allowed'
      }, {
        'code': '406',
        'desc': 'Not Acceptable'
      }, {
        'code': '407',
        'desc': 'Proxy Authentication Required'
      }, {
        'code': '408',
        'desc': 'Request Timeout'
      }, {
        'code': '409',
        'desc': 'Conflict'
      }, {
        'code': '410',
        'desc': 'Gone'
      }, {
        'code': '411',
        'desc': 'Length Required'
      }, {
        'code': '412',
        'desc': 'Precondition Failed'
      }, {
        'code': '413',
        'desc': 'Request Entity Too Large'
      }, {
        'code': '414',
        'desc': 'Request-URI Too Long'
      }, {
        'code': '415',
        'desc': 'Unsupported Media Type'
      }, {
        'code': '416',
        'desc': 'Requested Range Not Satisfiable'
      }, {
        'code': '417',
        'desc': 'Expectation Failed'
      }, {
        'code': '418',
        'desc': 'I\'m a teapot (RFC 2324)'
      }, {
        'code': '420',
        'desc': 'Enhance Your Calm (Twitter)'
      }, {
        'code': '422',
        'desc': 'Unprocessable Entity (WebDAV)'
      }, {
        'code': '423',
        'desc': 'Locked (WebDAV)'
      }, {
        'code': '424',
        'desc': 'Failed Dependency (WebDAV)'
      }, {
        'code': '425',
        'desc': 'Reserved for WebDAV'
      }, {
        'code': '426',
        'desc': 'Upgrade Required'
      }, {
        'code': '428',
        'desc': 'Precondition Required'
      }, {
        'code': '429',
        'desc': 'Too Many Requests'
      }, {
        'code': '431',
        'desc': 'Request Header Fields Too Large'
      }, {
        'code': '449',
        'desc': 'Retry With (Microsoft)'
      }, {
        'code': '450',
        'desc': 'Blocked by Windows Parental Controls (Microsoft)'
      }, {
        'code': '451',
        'desc': 'Unavailable For Legal Reasons'
      }, {
        'code': '499',
        'desc': 'Client Closed Request (Nginx)'
      }, {
        'code': '4xx',
        'desc': 'Catch Status: 400 <= x < 500'
      }, //  5xx
      {
        'code': '500',
        'desc': 'Internal Server Error'
      }, {
        'code': '501',
        'desc': 'Not Implemented'
      }, {
        'code': '502',
        'desc': 'Bad Gateway'
      }, {
        'code': '503',
        'desc': 'Service Unavailable'
      }, {
        'code': '504',
        'desc': 'Gateway Timeout'
      }, {
        'code': '505',
        'desc': 'HTTP Version Not Supported'
      }, {
        'code': '506',
        'desc': 'Variant Also Negotiates (Experimental)'
      }, {
        'code': '507',
        'desc': 'Insufficient Storage (WebDAV)'
      }, {
        'code': '508',
        'desc': 'Loop Detected (WebDAV)'
      }, {
        'code': '509',
        'desc': 'Bandwidth Limit Exceeded (Apache)'
      }, {
        'code': '510',
        'desc': 'Not Extended'
      }, {
        'code': '511',
        'desc': 'Network Authentication Required'
      }, {
        'code': '598',
        'desc': 'Network read timeout error'
      }, {
        'code': '599',
        'desc': 'Network connect timeout error'
      }, {
        'code': '5xx',
        'desc': 'Catch Status: x >= 500'
      }]
    };
  },
  computed: {
    modeInCaps: function modeInCaps() {
      return this.mode.charAt(0).toUpperCase() + this.mode.slice(1);
    },
    matchingStatusCode: function matchingStatusCode() {
      var _this = this;

      var matchingStatusCodes = this.commonStatusCodes.filter(function (commonStatusCode) {
        return commonStatusCode.code === _this.form.status;
      });
      return matchingStatusCodes.length == 0 ? {} : matchingStatusCodes[0];
    }
  },
  methods: {
    resetForm: function resetForm() {
      if (this.mode == 'create') {
        this.form = (0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.useForm)({
          status: ''
        });
      } else if (this.mode == 'clone') {
        this.form = (0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.useForm)((0,_stores_VersionBuilder__WEBPACK_IMPORTED_MODULE_5__.useVersionBuilder)().getClonedStatusCode(this.statusCode));
      } else if (this.mode == 'update') {
        this.form = (0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.useForm)(_objectSpread(_objectSpread({}, (0,_stores_VersionBuilder__WEBPACK_IMPORTED_MODULE_5__.useVersionBuilder)().getBlankStatusCode()), lodash__WEBPACK_IMPORTED_MODULE_0___default().cloneDeep(this.statusCode)));
      }
    },
    createStatusCode: function createStatusCode(closeModal) {
      //  Clear existing errors
      this.form.clearErrors();

      if (this.mode == 'create') {
        this.form = (0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.useForm)( //  Get the blank status code matching the form code
        this.useVersionBuilder.getBlankStatusCode(this.form.status));
      } //  Check if we have an existing statusCode using the same code


      var totalExactMatches = this.useVersionBuilder.searchStatusCodes(this.statusCodes, this.form.status, true).length;

      if (this.form.status.length == 0) {
        this.form.setError('status', 'The status code is required');
      } else if (['create', 'clone'].includes(this.mode) && totalExactMatches) {
        this.form.setError('status', 'This status code is already in use');
      } else if (this.mode == 'update' && totalExactMatches && this.statusCode.code !== this.form.status) {
        this.form.setError('status', 'This status code is already in use');
      }

      if (this.form.hasErrors === false) {
        var statusCode = this.form.data();

        if (this.mode == 'update') {
          this.useVersionBuilder.updateStatusCode(this.statusCodes, statusCode, this.index);
        } else {
          this.useVersionBuilder.addStatusCode(this.statusCodes, statusCode);
        } //  Determine the action name e.g created, cloned or updated


        var actionName = this.mode + 'd';
        this.$message({
          message: 'Status code ' + actionName + ' successfully',
          type: 'success'
        });
        closeModal();
      }
    },
    cancelCreateStatusCode: function cancelCreateStatusCode() {
      //  Clear existing errors
      this.form.clearErrors();
    }
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

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
}, null, -1
/* HOISTED */
);

var _hoisted_3 = [_hoisted_2];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "icon", {}, function () {
    return [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(['h-' + $props.size + ' w-' + $props.size + ' mr-2']),
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor",
      "stroke-width": "2"
    }, _hoisted_3, 2
    /* CLASS */
    ))];
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/EventsEditor/CreateOrUpdate/EventEditor/EventTypes/Apis/Crud-Api/Response/CreateOrUpdateStatusCode/CreateOrUpdateStatusCodeModal.vue?vue&type=template&id=d91ffa16":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/EventsEditor/CreateOrUpdate/EventEditor/EventTypes/Apis/Crud-Api/Response/CreateOrUpdateStatusCode/CreateOrUpdateStatusCodeModal.vue?vue&type=template&id=d91ffa16 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" status code");

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Use "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "font-semibold text-green-500"
}, "1xx"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(", "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "font-semibold text-green-500"
}, "2xx"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(", "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "font-semibold text-green-500"
}, "3xx"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(", "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "font-semibold text-red-500"
}, "4xx"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" or "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "font-semibold text-red-500"
}, "5xx"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" to target a collection of status codes. ")], -1
/* HOISTED */
);

var _hoisted_6 = {
  key: 0,
  "class": "text-xs mt-6"
};

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Meaning: ", -1
/* HOISTED */
);

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
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

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Create Status Code", -1
/* HOISTED */
);

var _hoisted_10 = {
  key: 1,
  name: "trigger",
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
  d: "M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
}, null, -1
/* HOISTED */
);

var _hoisted_12 = [_hoisted_11];
var _hoisted_13 = {
  key: 2,
  xmlns: "http://www.w3.org/2000/svg",
  "class": "h-4 w-4 mr-2 cursor-pointer hover:text-blue-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "2"
};

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
}, null, -1
/* HOISTED */
);

var _hoisted_15 = [_hoisted_14];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_PrimaryAlert = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("PrimaryAlert");

  var _component_DefaultInput = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DefaultInput");

  var _component_PrimaryButton = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("PrimaryButton");

  var _component_DefaultModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DefaultModal");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Modal "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DefaultModal, {
    defaultText: "Cancel",
    onOpen: _cache[1] || (_cache[1] = function ($event) {
      return $options.resetForm();
    }),
    onClose: _cache[2] || (_cache[2] = function ($event) {
      return _ctx.$emit('close');
    }),
    primaryAction: $options.createStatusCode,
    primaryText: $options.modeInCaps + ' Status Code',
    defaultAction: $options.cancelCreateStatusCode
  }, {
    title: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.modeInCaps + ' Status Code'), 1
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
          return [_hoisted_8, _hoisted_9];
        }),
        _: 1
        /* STABLE */

      })) : $props.mode == 'clone' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_10, _hoisted_12)) : $props.mode == 'update' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_13, _hoisted_15)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
    }),
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [$props.mode == 'clone' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.statusCode.name), 1
      /* TEXT */
      ), _hoisted_4])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_PrimaryAlert, {
        "class": "items-center mb-6",
        size: "3"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_5];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DefaultInput, {
        modelValue: $data.form.status,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
          return $data.form.status = $event;
        }),
        label: "Status code",
        placeholder: "200",
        error: $data.form.errors.status
      }, null, 8
      /* PROPS */
      , ["modelValue", "error"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
        name: "fade",
        mode: "out-in",
        appear: ""
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [$options.matchingStatusCode.code ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_6, [_hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
            "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([$data.form.status >= 400 || ['4xx', '5xx'].includes($data.form.status) ? 'text-red-500' : 'text-green-500'])
          }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.matchingStatusCode.desc), 3
          /* TEXT, CLASS */
          )])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
        }),
        _: 1
        /* STABLE */

      })];
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

/***/ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/EventsEditor/CreateOrUpdate/EventEditor/EventTypes/Apis/Crud-Api/Response/CreateOrUpdateStatusCode/CreateOrUpdateStatusCodeModal.vue":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./resources/js/Pages/Versions/Show/Builder/Content/Editor/EventsEditor/CreateOrUpdate/EventEditor/EventTypes/Apis/Crud-Api/Response/CreateOrUpdateStatusCode/CreateOrUpdateStatusCodeModal.vue ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CreateOrUpdateStatusCodeModal_vue_vue_type_template_id_d91ffa16__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateOrUpdateStatusCodeModal.vue?vue&type=template&id=d91ffa16 */ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/EventsEditor/CreateOrUpdate/EventEditor/EventTypes/Apis/Crud-Api/Response/CreateOrUpdateStatusCode/CreateOrUpdateStatusCodeModal.vue?vue&type=template&id=d91ffa16");
/* harmony import */ var _CreateOrUpdateStatusCodeModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateOrUpdateStatusCodeModal.vue?vue&type=script&lang=js */ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/EventsEditor/CreateOrUpdate/EventEditor/EventTypes/Apis/Crud-Api/Response/CreateOrUpdateStatusCode/CreateOrUpdateStatusCodeModal.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_juliantabona_Sites_laravel_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_juliantabona_Sites_laravel_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_CreateOrUpdateStatusCodeModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_CreateOrUpdateStatusCodeModal_vue_vue_type_template_id_d91ffa16__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Versions/Show/Builder/Content/Editor/EventsEditor/CreateOrUpdate/EventEditor/EventTypes/Apis/Crud-Api/Response/CreateOrUpdateStatusCode/CreateOrUpdateStatusCodeModal.vue"]])
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

/***/ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/EventsEditor/CreateOrUpdate/EventEditor/EventTypes/Apis/Crud-Api/Response/CreateOrUpdateStatusCode/CreateOrUpdateStatusCodeModal.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./resources/js/Pages/Versions/Show/Builder/Content/Editor/EventsEditor/CreateOrUpdate/EventEditor/EventTypes/Apis/Crud-Api/Response/CreateOrUpdateStatusCode/CreateOrUpdateStatusCodeModal.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CreateOrUpdateStatusCodeModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CreateOrUpdateStatusCodeModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CreateOrUpdateStatusCodeModal.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/EventsEditor/CreateOrUpdate/EventEditor/EventTypes/Apis/Crud-Api/Response/CreateOrUpdateStatusCode/CreateOrUpdateStatusCodeModal.vue?vue&type=script&lang=js");
 

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

/***/ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/EventsEditor/CreateOrUpdate/EventEditor/EventTypes/Apis/Crud-Api/Response/CreateOrUpdateStatusCode/CreateOrUpdateStatusCodeModal.vue?vue&type=template&id=d91ffa16":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./resources/js/Pages/Versions/Show/Builder/Content/Editor/EventsEditor/CreateOrUpdate/EventEditor/EventTypes/Apis/Crud-Api/Response/CreateOrUpdateStatusCode/CreateOrUpdateStatusCodeModal.vue?vue&type=template&id=d91ffa16 ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CreateOrUpdateStatusCodeModal_vue_vue_type_template_id_d91ffa16__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CreateOrUpdateStatusCodeModal_vue_vue_type_template_id_d91ffa16__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../../../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CreateOrUpdateStatusCodeModal.vue?vue&type=template&id=d91ffa16 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/EventsEditor/CreateOrUpdate/EventEditor/EventTypes/Apis/Crud-Api/Response/CreateOrUpdateStatusCode/CreateOrUpdateStatusCodeModal.vue?vue&type=template&id=d91ffa16");


/***/ })

}]);