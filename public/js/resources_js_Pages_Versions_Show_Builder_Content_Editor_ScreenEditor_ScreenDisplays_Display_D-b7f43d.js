"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Versions_Show_Builder_Content_Editor_ScreenEditor_ScreenDisplays_Display_D-b7f43d"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/CreateOrUpdate/CreateOrUpdateNavigationModal.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/CreateOrUpdate/CreateOrUpdateNavigationModal.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module './NavigationEditor'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validation */ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/CreateOrUpdate/validation.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './NavigationSelector'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");
/* harmony import */ var _components_Modal_DefaultModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/Modal/DefaultModal */ "./resources/js/Components/Modal/DefaultModal.vue");
/* harmony import */ var _stores_VersionBuilder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @stores/VersionBuilder */ "./resources/js/Stores/VersionBuilder.js");
/* harmony import */ var _components_Button_PrimaryButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/Button/PrimaryButton */ "./resources/js/Components/Button/PrimaryButton.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    useForm: _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_3__.useForm,
    NavigationEditor: Object(function webpackMissingModule() { var e = new Error("Cannot find module './NavigationEditor'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    NavigationSelector: Object(function webpackMissingModule() { var e = new Error("Cannot find module './NavigationSelector'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    DefaultModal: _components_Modal_DefaultModal__WEBPACK_IMPORTED_MODULE_4__["default"],
    PrimaryButton: _components_Button_PrimaryButton__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  props: {
    navigations: {
      type: Object,
      "default": function _default() {
        return [];
      }
    },
    navigation: {
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
      useVersionBuilder: (0,_stores_VersionBuilder__WEBPACK_IMPORTED_MODULE_5__.useVersionBuilder)()
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
        this.form = (0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_3__.useForm)({
          name: ''
        });
      } else if (this.mode == 'clone') {
        this.form = (0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_3__.useForm)(this.useVersionBuilder.getClonedNavigation(this.navigation));
      } else if (this.mode == 'update') {
        this.form = (0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_3__.useForm)(_objectSpread(_objectSpread({}, this.useVersionBuilder.getBlankNavigation()), lodash__WEBPACK_IMPORTED_MODULE_0___default().cloneDeep(this.navigation)));
      }
    },
    createNavigation: function createNavigation(closeModal) {
      //  Clear existing errors
      this.form.clearErrors();

      if (this.mode == 'create') {
        this.form = (0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_3__.useForm)(_objectSpread(_objectSpread({}, this.useVersionBuilder.getBlankNavigation(this.form.name)), {
          name: this.useVersionBuilder.suggestNavigationName(this.navigations, this.form.name)
        }));
      } //  Check if we have an existing navigation using the same name


      var totalExactMatches = this.useVersionBuilder.searchNavigations(this.navigations, this.form.name, true).length;

      if (this.form.name.length == 0) {
        this.form.setError('name', 'The navigation name is required');
      } else if (this.form.name.length < 3) {
        this.form.setError('name', 'The navigation name is too short');
      } else if (this.form.name.length > 50) {
        this.form.setError('name', 'The navigation name is too long');
      } else if (['create', 'clone'].includes(this.mode) && totalExactMatches) {
        this.form.setError('name', 'This navigation name is already in use');
      } else if (this.mode == 'update' && totalExactMatches && this.navigation.name !== this.form.name) {
        this.form.setError('name', 'This navigation name is already in use');
      } else if (['update', 'clone'].includes(this.mode)) {
        //  Validate on navigation type
        if (this.form.type == 'CRUD API') {
          _validation__WEBPACK_IMPORTED_MODULE_2__["default"].crudApi(this.form);
        } else if (this.form.type == 'SMS API') {
          _validation__WEBPACK_IMPORTED_MODULE_2__["default"].smsApi(this.form);
        } else if (this.form.type == 'Airtime Billing API') {
          _validation__WEBPACK_IMPORTED_MODULE_2__["default"].airtimeBillingApi(this.form);
        } else if (this.form.type == 'Orange Money API') {
          _validation__WEBPACK_IMPORTED_MODULE_2__["default"].orangeMoneyApi(this.form);
        } else if (this.form.type == 'Validation') {
          _validation__WEBPACK_IMPORTED_MODULE_2__["default"].validation(this.form);
        } else if (this.form.type == 'Formatting') {
          _validation__WEBPACK_IMPORTED_MODULE_2__["default"].formatting(this.form);
        } else if (this.form.type == 'Set Property') {
          _validation__WEBPACK_IMPORTED_MODULE_2__["default"].setProperty(this.form);
        } else if (this.form.type == 'Custom Code') {
          _validation__WEBPACK_IMPORTED_MODULE_2__["default"].customCode(this.form);
        } else if (this.form.type == 'Auto Link') {
          _validation__WEBPACK_IMPORTED_MODULE_2__["default"].autoLink(this.form);
        } else if (this.form.type == 'Auto Reply') {
          _validation__WEBPACK_IMPORTED_MODULE_2__["default"].autoReply(this.form);
        } else if (this.form.type == 'Revisit') {
          _validation__WEBPACK_IMPORTED_MODULE_2__["default"].revisit(this.form);
        } else if (this.form.type == 'Redirect') {
          _validation__WEBPACK_IMPORTED_MODULE_2__["default"].redirect(this.form);
        } else if (this.form.type == 'Notification') {
          _validation__WEBPACK_IMPORTED_MODULE_2__["default"].notification(this.form);
        } else if (this.form.type == 'Navigation Collection') {
          _validation__WEBPACK_IMPORTED_MODULE_2__["default"].navigationCollection(this.form);
        } else if (this.form.type == 'Terminate Session') {
          _validation__WEBPACK_IMPORTED_MODULE_2__["default"].terminateSession(this.form);
        } else if (this.form.type == 'Database') {
          _validation__WEBPACK_IMPORTED_MODULE_2__["default"].database(this.form);
        }
      }

      if (this.form.hasErrors === false) {
        var navigation = this.form.data();

        if (this.mode == 'update') {
          this.useVersionBuilder.updateNavigation(this.navigations, navigation, this.index);
        } else {
          this.useVersionBuilder.addNavigation(this.navigations, navigation);
        } //  Determine the action name e.g created, cloned or updated


        var actionName = this.mode + 'd';
        this.$message({
          message: 'Navigation ' + actionName + ' successfully',
          type: 'success'
        });
        closeModal();
      } else {
        this.$message({
          message: 'Sorry, we found some mistakes',
          type: 'error'
        });
      }
    },
    cancelCreateNavigation: function cancelCreateNavigation() {
      //  Clear existing errors
      this.form.clearErrors();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/Delete/DeleteNavigationModal.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/Delete/DeleteNavigationModal.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    navigations: {
      type: Object,
      "default": function _default() {
        return [];
      }
    },
    navigation: {
      type: Object,
      "default": null
    },
    index: {
      type: Number,
      "default": null
    },
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
    deleteNavigation: function deleteNavigation(closeModal) {
      //  Remove the current navigation
      this.useVersionBuilder.removeNavigationByIndex(this.navigations, this.index);
      this.$message({
        message: 'Navigation deleted successfully',
        type: 'success'
      });
      closeModal();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/NavigationMenu.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/NavigationMenu.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CreateOrUpdate_CreateOrUpdateNavigationModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateOrUpdate/CreateOrUpdateNavigationModal */ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/CreateOrUpdate/CreateOrUpdateNavigationModal.vue");
/* harmony import */ var _components_Badges_SuccessBadge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/Badges/SuccessBadge */ "./resources/js/Components/Badges/SuccessBadge.vue");
/* harmony import */ var _components_Badges_PrimaryBadge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/Badges/PrimaryBadge */ "./resources/js/Components/Badges/PrimaryBadge.vue");
/* harmony import */ var _components_Badges_WarningBadge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/Badges/WarningBadge */ "./resources/js/Components/Badges/WarningBadge.vue");
/* harmony import */ var _stores_VersionBuilder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @stores/VersionBuilder */ "./resources/js/Stores/VersionBuilder.js");
/* harmony import */ var _components_Popover_InfoPopover__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/Popover/InfoPopover */ "./resources/js/Components/Popover/InfoPopover.vue");
/* harmony import */ var _Delete_DeleteNavigationModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Delete/DeleteNavigationModal */ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/Delete/DeleteNavigationModal.vue");
/* harmony import */ var vue3_slide_up_down__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue3-slide-up-down */ "./node_modules/vue3-slide-up-down/dist/vue3-slide-up-down.es.js");








/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['navigations', 'navigation', 'index'],
  components: {
    SuccessBadge: _components_Badges_SuccessBadge__WEBPACK_IMPORTED_MODULE_1__["default"],
    PrimaryBadge: _components_Badges_PrimaryBadge__WEBPACK_IMPORTED_MODULE_2__["default"],
    WarningBadge: _components_Badges_WarningBadge__WEBPACK_IMPORTED_MODULE_3__["default"],
    DeleteNavigationModal: _Delete_DeleteNavigationModal__WEBPACK_IMPORTED_MODULE_6__["default"],
    CreateOrUpdateNavigationModal: _CreateOrUpdate_CreateOrUpdateNavigationModal__WEBPACK_IMPORTED_MODULE_0__["default"],
    InfoPopover: _components_Popover_InfoPopover__WEBPACK_IMPORTED_MODULE_5__["default"],
    SlideUpDown: vue3_slide_up_down__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  data: function data() {
    return {
      active: false,
      useVersionBuilder: (0,_stores_VersionBuilder__WEBPACK_IMPORTED_MODULE_4__.useVersionBuilder)()
    };
  },
  methods: {
    toggleSelection: function toggleSelection() {
      this.active = !this.active;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/NavigationMenus.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/NavigationMenus.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuedraggable */ "./node_modules/vuedraggable/dist/vuedraggable.umd.js");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuedraggable__WEBPACK_IMPORTED_MODULE_0__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module './NoNavigations'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _NavigationMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavigationMenu */ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/NavigationMenu.vue");
/* harmony import */ var _stores_VersionBuilder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @stores/VersionBuilder */ "./resources/js/Stores/VersionBuilder.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['modelValue', 'searchTerm'],
  components: {
    NoNavigations: Object(function webpackMissingModule() { var e = new Error("Cannot find module './NoNavigations'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    draggable: (vuedraggable__WEBPACK_IMPORTED_MODULE_0___default()),
    NavigationMenu: _NavigationMenu__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      useVersionBuilder: (0,_stores_VersionBuilder__WEBPACK_IMPORTED_MODULE_3__.useVersionBuilder)()
    };
  },
  computed: {
    filteredNavigations: {
      get: function get() {
        var _this = this;

        return this.modelValue.filter(function (navigation) {
          var matchesNavigationId = navigation.id.toLowerCase().includes(_this.searchTerm.toLowerCase());
          var matchesNavigationName = navigation.name.toLowerCase().includes(_this.searchTerm.toLowerCase());
          var matchesNavigationType = navigation.type.toLowerCase().includes(_this.searchTerm.toLowerCase());
          return _this.searchTerm == '' || matchesNavigationId || matchesNavigationName || matchesNavigationType;
        });
      },
      set: function set(navigations) {
        //  Allow re-ordering when the navigation filtering input is empty
        if (this.searchTerm == '') {
          this.$emit('update:modelValue', navigations);
        } else {
          this.$message({
            message: 'You cannot reorder navigations while searching navigations',
            type: 'warning'
          });
        }
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/index.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/index.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NavigationMenus_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavigationMenus.vue */ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/NavigationMenus.vue");
/* harmony import */ var vue3_slide_up_down__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue3-slide-up-down */ "./node_modules/vue3-slide-up-down/dist/vue3-slide-up-down.es.js");
/* harmony import */ var _stores_VersionBuilder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stores/VersionBuilder */ "./resources/js/Stores/VersionBuilder.js");
/* harmony import */ var _components_SearchBar_DefaultSearchBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/SearchBar/DefaultSearchBar */ "./resources/js/Components/SearchBar/DefaultSearchBar.vue");
/* harmony import */ var _CreateOrUpdate_CreateOrUpdateNavigationModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CreateOrUpdate/CreateOrUpdateNavigationModal */ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/CreateOrUpdate/CreateOrUpdateNavigationModal.vue");
/* harmony import */ var _components_SwitchAndCodeEditor_SwitchAndCodeEditor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/SwitchAndCodeEditor/SwitchAndCodeEditor */ "./resources/js/Components/SwitchAndCodeEditor/SwitchAndCodeEditor.vue");






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    navigations: Object,
    title: String,
    note: String,
    highlight: {
      type: Boolean,
      "default": true
    },
    collapsable: {
      type: Boolean,
      "default": true
    }
  },
  components: {
    NavigationMenus: _NavigationMenus_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    SlideUpDown: vue3_slide_up_down__WEBPACK_IMPORTED_MODULE_1__["default"],
    DefaultSearchBar: _components_SearchBar_DefaultSearchBar__WEBPACK_IMPORTED_MODULE_3__["default"],
    CreateOrUpdateNavigationModal: _CreateOrUpdate_CreateOrUpdateNavigationModal__WEBPACK_IMPORTED_MODULE_4__["default"],
    SwitchAndCodeEditor: _components_SwitchAndCodeEditor_SwitchAndCodeEditor__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  data: function data() {
    return {
      searchTerm: '',
      isShowingNavigations: false,
      canShowNavigationsSummary: false,
      useVersionBuilder: (0,_stores_VersionBuilder__WEBPACK_IMPORTED_MODULE_2__.useVersionBuilder)()
    };
  },
  computed: {
    screen: function screen() {
      return this.useVersionBuilder.selectedScreen;
    }
  },
  created: function created() {
    var _this = this;

    setTimeout(function () {
      _this.isShowingNavigations = true;
      _this.canShowNavigationsSummary = true;
    }, 100);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/CreateOrUpdate/CreateOrUpdateNavigationModal.vue?vue&type=template&id=61e195e5":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/CreateOrUpdate/CreateOrUpdateNavigationModal.vue?vue&type=template&id=61e195e5 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
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

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  name: "trigger",
  xmlns: "http://www.w3.org/2000/svg",
  "class": "h-4 w-4 mr-2 cursor-pointer hover:text-blue-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
})], -1
/* HOISTED */
);

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "class": "h-4 w-4 mr-2 cursor-pointer hover:text-blue-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
})], -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_NavigationSelector = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("NavigationSelector");

  var _component_NavigationEditor = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("NavigationEditor");

  var _component_PrimaryButton = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("PrimaryButton");

  var _component_DefaultModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DefaultModal");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Modal "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DefaultModal, {
    defaultText: "Cancel",
    onOpen: _cache[0] || (_cache[0] = function ($event) {
      return $options.resetForm();
    }),
    onClose: _cache[1] || (_cache[1] = function ($event) {
      return _ctx.$emit('close');
    }),
    primaryAction: $options.createNavigation,
    defaultAction: $options.cancelCreateNavigation,
    width: $props.mode == 'create' ? 'w-2/5' : 'w-1/2',
    primaryText: $props.mode == 'update' ? 'Update Navigation' : ''
  }, {
    title: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.modeInCaps + ' Navigation'), 1
      /* TEXT */
      )];
    }),
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref) {
      var firePrimaryAction = _ref.firePrimaryAction;
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Navigation Selector "), $props.mode == 'create' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_NavigationSelector, {
        key: 0,
        form: $data.form,
        firePrimaryAction: firePrimaryAction
      }, null, 8
      /* PROPS */
      , ["form", "firePrimaryAction"])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        key: 1
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Navigation Editor "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_NavigationEditor, {
        form: $data.form,
        navigation: $props.navigation,
        mode: $props.mode
      }, null, 8
      /* PROPS */
      , ["form", "navigation", "mode"])], 2112
      /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
      ))];
    }),
    trigger: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [$props.mode == 'create' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_PrimaryButton, {
        key: 0,
        name: "trigger",
        "class": "px-3"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")];
        }),
        _: 3
        /* FORWARDED */

      })) : $props.mode == 'clone' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        key: 1
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Clone Icon "), _hoisted_2], 2112
      /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
      )) : $props.mode == 'update' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        key: 2
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Edit Icon "), _hoisted_3], 2112
      /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
      )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
    }),
    _: 3
    /* FORWARDED */

  }, 8
  /* PROPS */
  , ["primaryAction", "defaultAction", "width", "primaryText"])], 2112
  /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/Delete/DeleteNavigationModal.vue?vue&type=template&id=f9428b76":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/Delete/DeleteNavigationModal.vue?vue&type=template&id=f9428b76 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Delete Navigation");

var _hoisted_2 = {
  "class": "text-sm text-gray-500 mb-5"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Are you sure you want to delete the ");

var _hoisted_4 = {
  "class": "text-blue-500 font-bold"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" navigation. After this navigation is deleted you cannot recover it again.");

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
    dangerText: "Delete Navigation",
    dangerAction: $options.deleteNavigation
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
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.navigation.name), 1
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/NavigationMenu.vue?vue&type=template&id=29d6464e":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/NavigationMenu.vue?vue&type=template&id=29d6464e ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  "class": "flex text-gray-400 text-xs transition-all duration-300 opacity-100 group-hover:opacity-0"
};
var _hoisted_4 = {
  "class": "mr-4"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Active");

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Inactive");

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Conditional");

var _hoisted_8 = {
  "class": "absolute right-8 flex justify-end transition-all duration-300 opacity-0 group-hover:opacity-100"
};

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
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

var _hoisted_10 = {
  "class": "ml-4 mr-1"
};

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "border-t border-dashed pt-4 mt-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "text-xs text-gray-600 break-normal"
}, "Navigation details ...")], -1
/* HOISTED */
);

var _hoisted_12 = {
  "class": "p-4"
};
var _hoisted_13 = {
  "class": "text-xs"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_SuccessBadge = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("SuccessBadge");

  var _component_WarningBadge = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("WarningBadge");

  var _component_PrimaryBadge = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("PrimaryBadge");

  var _component_CreateOrUpdateNavigationModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("CreateOrUpdateNavigationModal");

  var _component_DeleteNavigationModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DeleteNavigationModal");

  var _component_InfoPopover = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("InfoPopover");

  var _component_SlideUpDown = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("SlideUpDown");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(['rounded-md border', $data.active ? 'shadow-sm border-2 my-4' : 'mb-2']),
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      borderLeftColor: $props.navigation.hexColor,
      borderLeftWidth: '4px'
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $options.toggleSelection();
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(['grid grid-cols-12 group text-xs text-gray-700 py-2 px-4 cursor-pointer', $data.active ? 'border-b border-dashed bg-blue-50 rounded-tr-md' : 'bg-gray-50 rounded-r-md']),
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      backgroundColor: $props.navigation.hexColor + '05'
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [$props.navigation.name ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-blue-500 font-semibold': $data.active
    })
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.navigation.name), 3
  /* TEXT, CLASS */
  )) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 1,
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(['text-red-500', {
      'font-semibold italic': $data.active
    }])
  }, "No name", 2
  /* CLASS */
  ))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.navigation.type), 1
  /* TEXT */
  ), $props.navigation.active.selected_type == 'yes' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_SuccessBadge, {
    key: 0
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_5];
    }),
    _: 1
    /* STABLE */

  })) : $props.navigation.active.selected_type == 'no' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_WarningBadge, {
    key: 1
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_6];
    }),
    _: 1
    /* STABLE */

  })) : $props.navigation.active.selected_type == 'conditional' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_PrimaryBadge, {
    key: 2
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_7];
    }),
    _: 1
    /* STABLE */

  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Edit Icon "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_CreateOrUpdateNavigationModal, {
    navigations: $props.navigations,
    navigation: $props.navigation,
    index: $props.index,
    mode: "update"
  }, null, 8
  /* PROPS */
  , ["navigations", "navigation", "index"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Delete Icon "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DeleteNavigationModal, {
    navigations: $props.navigations,
    navigation: $props.navigation,
    index: $props.index
  }, null, 8
  /* PROPS */
  , ["navigations", "navigation", "index"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Clone Icon "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_CreateOrUpdateNavigationModal, {
    navigations: $props.navigations,
    navigation: $props.navigation,
    mode: "clone"
  }, null, 8
  /* PROPS */
  , ["navigations", "navigation"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Move Icon "), _hoisted_9]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Info Popover "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_InfoPopover, {
    title: $props.navigation.type
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_11];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["title"])])])], 6
  /* CLASS, STYLE */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_SlideUpDown, {
    modelValue: $data.active,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.active = $event;
    }),
    duration: 300
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.navigation.comment ? $props.navigation.comment : 'No comments'), 1
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/NavigationMenus.vue?vue&type=template&id=149e2495":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/NavigationMenus.vue?vue&type=template&id=149e2495 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_NavigationMenu = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("NavigationMenu");

  var _component_NoNavigations = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("NoNavigations");

  var _component_draggable = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("draggable");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_draggable, {
    invertSwap: true,
    handle: ".draggble-handle",
    "item-key": "navigation-menus",
    "ghost-class": "bg-yellow-100",
    modelValue: $options.filteredNavigations,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $options.filteredNavigations = $event;
    })
  }, {
    item: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref) {
      var element = _ref.element,
          index = _ref.index;
      return [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_NavigationMenu, {
        navigations: $props.modelValue,
        navigation: element,
        index: index,
        key: element.id
      }, null, 8
      /* PROPS */
      , ["navigations", "navigation", "index"]))];
    }),
    footer: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [$options.filteredNavigations.length == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_NoNavigations, {
        key: 0,
        navigations: $props.modelValue
      }, null, 8
      /* PROPS */
      , ["navigations"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["modelValue"]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/index.vue?vue&type=template&id=79aea387":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/index.vue?vue&type=template&id=79aea387 ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "flex items-center justify-between border-b border-dotted pb-4 mb-4"
};
var _hoisted_2 = {
  key: 0,
  "class": "flex items-center"
};
var _hoisted_3 = {
  key: 0,
  "class": "text-sm font-semibold tracking-tight text-gray-600"
};
var _hoisted_4 = {
  key: 1,
  "class": "text-xs text-gray-400 ml-2"
};
var _hoisted_5 = {
  "class": "flex items-center"
};
var _hoisted_6 = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  "class": "h-6 w-6 cursor-pointer",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "2"
};

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
}, null, -1
/* HOISTED */
);

var _hoisted_8 = [_hoisted_7];
var _hoisted_9 = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  "class": "h-6 w-6 cursor-pointer",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "2"
};

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"
}, null, -1
/* HOISTED */
);

var _hoisted_11 = [_hoisted_10];
var _hoisted_12 = {
  key: 0
};

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "mr-2"
}, "📌", -1
/* HOISTED */
);

var _hoisted_14 = {
  key: 0,
  "class": "text-blue-500 font-bold text-xs"
};
var _hoisted_15 = {
  key: 1,
  "class": "text-blue-500 font-bold text-xs"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_DefaultSearchBar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DefaultSearchBar");

  var _component_CreateOrUpdateNavigationModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("CreateOrUpdateNavigationModal");

  var _component_SwitchAndCodeEditor = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("SwitchAndCodeEditor");

  var _component_NavigationMenus = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("NavigationMenus");

  var _component_SlideUpDown = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("SlideUpDown");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'p-4 rounded-lg bg-gray-50 shadow-md border': $props.highlight
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [$props.title || $props.note ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Navigation Title "), $props.title ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("h5", _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.title), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Note "), $props.note ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_4, " — " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.note), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
    name: "fade"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [$data.isShowingNavigations ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_DefaultSearchBar, {
        key: 0,
        modelValue: $data.searchTerm,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
          return $data.searchTerm = $event;
        }),
        placeholder: "Search navigations"
      }, null, 8
      /* PROPS */
      , ["modelValue"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
    }),
    _: 1
    /* STABLE */

  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Collapse Arrows "), $props.collapsable ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    onClick: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $data.isShowingNavigations = !$data.isShowingNavigations;
    }, ["stop"])),
    "class": "text-gray-400 mr-8"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
    name: "fade",
    mode: "out-in"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [$data.isShowingNavigations ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_6, _hoisted_8)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_9, _hoisted_11))];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Add Navigation Button & Modal "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_CreateOrUpdateNavigationModal, {
    navigations: $props.navigations.collection,
    mode: "create"
  }, null, 8
  /* PROPS */
  , ["navigations"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_SlideUpDown, {
    modelValue: $data.isShowingNavigations,
    "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
      return $data.isShowingNavigations = $event;
    }),
    duration: 300
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" If this supports conditional navigations "), $props.navigations.hasOwnProperty('conditional') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        key: 0
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Conditional Navigations Code Editor "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_SwitchAndCodeEditor, {
        modelValue: $props.navigations.conditional.code,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
          return $props.navigations.conditional.code = $event;
        }),
        active: $props.navigations.conditional.active,
        "onUpdate:active": _cache[3] || (_cache[3] = function ($event) {
          return $props.navigations.conditional.active = $event;
        }),
        max_height: "200px",
        "class": "mb-4",
        info: "Write code to conditionally select navigations to run as well as their order of execution",
        note: "Select navigations conditionally"
      }, null, 8
      /* PROPS */
      , ["modelValue", "active"])], 2112
      /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
      )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Navigation Menus "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_NavigationMenus, {
        modelValue: $props.navigations.collection,
        "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
          return $props.navigations.collection = $event;
        }),
        searchTerm: $data.searchTerm,
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(['transition-all duration-1000', $data.isShowingNavigations ? 'mb-0' : 'mb-8'])
      }, null, 8
      /* PROPS */
      , ["modelValue", "searchTerm", "class"])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
    name: "fade"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [$data.canShowNavigationsSummary == true && $data.isShowingNavigations == false ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_12, [_hoisted_13, $props.navigations.collection.length == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_14, "No Navigations")) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_15, "Found " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.navigations.collection.length) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.navigations.collection.length == 1 ? ' Navigation' : ' Navigations'), 1
      /* TEXT */
      ))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
    }),
    _: 1
    /* STABLE */

  })], 2
  /* CLASS */
  );
}

/***/ }),

/***/ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/CreateOrUpdate/validation.js":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/CreateOrUpdate/validation.js ***!
  \*********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  crudApi: function crudApi(form) {
    if (form.event_data.url.code_editor_mode == false && ['', null].includes(form.event_data.url.text)) {
      form.setError('url', 'The url is required');
    } else if (form.event_data.url.code_editor_mode == true && ['', null].includes(form.event_data.url.code_editor_text)) {
      form.setError('url', 'The url is required');
    }

    if (form.event_data.query_params.length > 0) {
      for (var index = 0; index < form.event_data.query_params.length; index++) {
        var query_param = form.event_data.query_params[index];

        if (['', null].includes(query_param.name)) {
          form.setError('query_params', 'The query param name is required');
        } else if (query_param.value.code_editor_mode == false && ['', null].includes(query_param.value.text)) {
          form.setError('query_params', 'The query param value is required');
        } else if (query_param.value.code_editor_mode == true && ['', null].includes(query_param.value.code_editor_text)) {
          form.setError('query_params', 'The query param value is required');
        }
      }
    }

    if (form.event_data.headers.length > 0) {
      for (var _index = 0; _index < form.event_data.headers.length; _index++) {
        var header = form.event_data.headers[_index];

        if (['', null].includes(header.name)) {
          form.setError('headers', 'The header name is required');
        } else if (header.value.code_editor_mode == false && ['', null].includes(header.value.text)) {
          form.setError('headers', 'The header value is required');
        } else if (header.value.code_editor_mode == true && ['', null].includes(header.value.code_editor_text)) {
          form.setError('headers', 'The header value is required');
        }
      }
    }

    if (form.event_data.form_data.params.length > 0) {
      for (var _index2 = 0; _index2 < form.event_data.form_data.params.length; _index2++) {
        var _header = form.event_data.form_data.params[_index2];

        if (['', null].includes(_header.name)) {
          form.setError('form_data_params', 'The form body name is required');
        } else if (_header.value.code_editor_mode == false && ['', null].includes(_header.value.text)) {
          form.setError('form_data_params', 'The form body value is required');
        } else if (_header.value.code_editor_mode == true && ['', null].includes(_header.value.code_editor_text)) {
          form.setError('form_data_params', 'The form body value is required');
        }
      }
    }

    if (form.event_data.response.selected_type == 'automatic') {
      if (form.event_data.response.general.default_success_message.code_editor_mode == false && ['', null].includes(form.event_data.response.general.default_success_message.text)) {
        form.setError('default_success_message', 'The default success message is required');
      } else if (form.event_data.response.general.default_success_message.code_editor_mode == true && ['', null].includes(form.event_data.response.general.default_success_message.code_editor_text)) {
        form.setError('default_success_message', 'The default success message is required');
      }

      if (form.event_data.response.general.default_error_message.code_editor_mode == false && ['', null].includes(form.event_data.response.general.default_error_message.text)) {
        form.setError('default_error_message', 'The default error message is required');
      } else if (form.event_data.response.general.default_error_message.code_editor_mode == true && ['', null].includes(form.event_data.response.general.default_error_message.code_editor_text)) {
        form.setError('default_error_message', 'The default error message is required');
      }
    }

    if (form.event_data.response.selected_type == 'manual') {
      for (var x = 0; x < form.event_data.response.manual.response_status_handles.length; x++) {
        var status_handle = form.event_data.response.manual.response_status_handles[x];

        for (var y = 0; y < status_handle.attributes.length; y++) {
          var attribute = status_handle.attributes[y];

          if (['', null].includes(attribute.name)) {
            form.setError('status_handle_attributes', 'The response attribute is required');
          } else if (attribute.code_editor_mode == false && ['', null].includes(attribute.text)) {
            form.setError('status_handle_attributes', 'The response attribute is required');
          } else if (attribute.code_editor_mode == true && ['', null].includes(attribute.code_editor_text)) {
            form.setError('status_handle_attributes', 'The response attribute is required');
          }
        }
      }
    }

    form.event_data.response.manual.response_status_handles;
  },
  smsApi: function smsApi(form) {
    if (form.event_data.sender.code_editor_mode == false && ['', null].includes(form.event_data.sender.text)) {
      form.setError('sender', 'The sender is required');
    } else if (form.event_data.sender.code_editor_mode == true && ['', null].includes(form.event_data.sender.code_editor_text)) {
      form.setError('sender', 'The sender is required');
    }

    if (form.event_data.recipient.code_editor_mode == false && ['', null].includes(form.event_data.recipient.text)) {
      form.setError('recipient', 'The recipient is required');
    } else if (form.event_data.recipient.code_editor_mode == true && ['', null].includes(form.event_data.recipient.code_editor_text)) {
      form.setError('recipient', 'The recipient is required');
    }

    if (form.event_data.message.code_editor_mode == false && ['', null].includes(form.event_data.message.text)) {
      form.setError('message', 'The message is required');
    } else if (form.event_data.message.code_editor_mode == true && ['', null].includes(form.event_data.message.code_editor_text)) {
      form.setError('message', 'The message is required');
    }
  },
  orangeMoneyApi: function orangeMoneyApi(form) {
    if (form.event_data.msisdn.code_editor_mode == false && ['', null].includes(form.event_data.msisdn.text)) {
      form.setError('msisdn', 'The msisdn is required');
    } else if (form.event_data.msisdn.code_editor_mode == true && ['', null].includes(form.event_data.msisdn.code_editor_text)) {
      form.setError('msisdn', 'The msisdn is required');
    }

    if (form.event_data.amount.code_editor_mode == false && ['', null].includes(form.event_data.amount.text)) {
      form.setError('amount', 'The amount is required');
    } else if (form.event_data.amount.code_editor_mode == true && ['', null].includes(form.event_data.amount.code_editor_text)) {
      form.setError('amount', 'The amount is required');
    }

    if (form.event_data.payment_reference.code_editor_mode == false && ['', null].includes(form.event_data.payment_reference.text)) {
      form.setError('payment_reference', 'The payment reference number is required');
    } else if (form.event_data.payment_reference.code_editor_mode == true && ['', null].includes(form.event_data.payment_reference.code_editor_text)) {
      form.setError('payment_reference', 'The payment reference number is required');
    }

    if (form.event_data.merchant_code.code_editor_mode == false && ['', null].includes(form.event_data.merchant_code.text)) {
      form.setError('merchant_code', 'The merchant code is required');
    } else if (form.event_data.merchant_code.code_editor_mode == true && ['', null].includes(form.event_data.merchant_code.code_editor_text)) {
      form.setError('merchant_code', 'The merchant code is required');
    }
    /*  At the moment this field is not required, so let's disable its validation
     if( form.event_data.endpoint.code_editor_mode == false && ['', null].includes(form.event_data.endpoint.text) ) {
         form.setError('endpoint', 'The endpoint is required');
     }else if( form.event_data.endpoint.code_editor_mode == true && ['', null].includes(form.event_data.endpoint.code_editor_text) ) {
         form.setError('endpoint', 'The endpoint is required');
     }
     */

  },
  airtimeBillingApi: function airtimeBillingApi(form) {
    if (['', null].includes(form.event_data.airtime_billing_action)) {
      form.setError('airtime_billing_action', 'The action is required');
    }

    if (['', null].includes(form.event_data.response_reference_name)) {
      form.setError('response_reference_name', 'The response reference name is required');
    }

    if (form.event_data.msisdn.code_editor_mode == false && ['', null].includes(form.event_data.msisdn.text)) {
      form.setError('msisdn', 'The msisdn is required');
    } else if (form.event_data.msisdn.code_editor_mode == true && ['', null].includes(form.event_data.msisdn.code_editor_text)) {
      form.setError('msisdn', 'The msisdn is required');
    }

    if (form.event_data.amount.code_editor_mode == false && ['', null].includes(form.event_data.amount.text)) {
      form.setError('amount', 'The amount is required');
    } else if (form.event_data.amount.code_editor_mode == true && ['', null].includes(form.event_data.amount.code_editor_text)) {
      form.setError('amount', 'The amount is required');
    }

    if (form.event_data.currency.code_editor_mode == false && ['', null].includes(form.event_data.currency.text)) {
      form.setError('currency', 'The currency is required');
    } else if (form.event_data.currency.code_editor_mode == true && ['', null].includes(form.event_data.currency.code_editor_text)) {
      form.setError('currency', 'The currency is required');
    }

    if (form.event_data.description.code_editor_mode == false && ['', null].includes(form.event_data.description.text)) {
      form.setError('description', 'The description is required');
    } else if (form.event_data.description.code_editor_mode == true && ['', null].includes(form.event_data.description.code_editor_text)) {
      form.setError('description', 'The description is required');
    }
  },
  validation: function validation(form) {
    if (form.event_data.target.code_editor_mode == false && ['', null].includes(form.event_data.target.text)) {
      form.setError('target', 'The target is required');
    } else if (form.event_data.target.code_editor_mode == true && ['', null].includes(form.event_data.target.code_editor_text)) {
      form.setError('target', 'The target is required');
    }
  },
  formatting: function formatting(form) {
    if (form.event_data.target.code_editor_mode == false && ['', null].includes(form.event_data.target.text)) {
      form.setError('target', 'The target is required');
    } else if (form.event_data.target.code_editor_mode == true && ['', null].includes(form.event_data.target.code_editor_text)) {
      form.setError('target', 'The target is required');
    }
  },
  setProperty: function setProperty(form) {
    if (['', null].includes(form.event_data.reference_name)) {
      form.setError('reference_name', 'The property reference name is required');
    }
  },
  customCode: function customCode(form) {
    if (['', null].includes(form.event_data.code)) {
      form.setError('reference_name', 'The custom code is required');
    }
  },
  autoLink: function autoLink(form) {
    if (['', null].includes(form.event_data.trigger.selected_type)) {
      form.setError('selected_type', 'The trigger type is required');
    }

    if (form.event_data.trigger.selected_type == 'manual') {
      if (form.event_data.trigger.manual.input.code_editor_mode == false && ['', null].includes(form.event_data.trigger.manual.input.text)) {
        form.setError('input', 'The trigger input is required');
      } else if (form.event_data.trigger.manual.input.code_editor_mode == true && ['', null].includes(form.event_data.trigger.manual.input.code_editor_text)) {
        form.setError('input', 'The trigger input is required');
      }
    }

    if (form.event_data.link.code_editor_mode == false && ['', null].includes(form.event_data.link.text)) {
      form.setError('link', 'The link is required');
    } else if (form.event_data.link.code_editor_mode == true && ['', null].includes(form.event_data.link.code_editor_text)) {
      form.setError('link', 'The link is required');
    }
  },
  autoReply: function autoReply(form) {
    if (form.event_data.automatic_replies.code_editor_mode == false && ['', null].includes(form.event_data.automatic_replies.text)) {
      form.setError('automatic_replies', 'The replies are required');
    } else if (form.event_data.automatic_replies.code_editor_mode == true && ['', null].includes(form.event_data.automatic_replies.code_editor_text)) {
      form.setError('automatic_replies', 'The replies are required');
    }
  },
  revisit: function revisit(form) {
    if (['', null].includes(form.event_data.general.trigger.selected_type)) {
      form.setError('trigger_selected_type', 'The trigger type is required');
    }

    if (form.event_data.general.trigger.selected_type == 'manual') {
      if (form.event_data.general.trigger.manual.input.code_editor_mode == false && ['', null].includes(form.event_data.general.trigger.manual.input.text)) {
        form.setError('input', 'The trigger input is required');
      } else if (form.event_data.general.trigger.manual.input.code_editor_mode == true && ['', null].includes(form.event_data.general.trigger.manual.input.code_editor_text)) {
        form.setError('input', 'The trigger input is required');
      }
    }

    if (['', null].includes(form.event_data.revisit_type.selected_type)) {
      form.setError('revisit_selected_type', 'The trigger type is required');
    }

    if (form.event_data.revisit_type.selected_type == 'screen_revisit') {
      if (form.event_data.revisit_type.screen_revisit.link.code_editor_mode == false && ['', null].includes(form.event_data.revisit_type.screen_revisit.link.text)) {
        form.setError('link', 'The link is required');
      } else if (form.event_data.revisit_type.screen_revisit.link.code_editor_mode == true && ['', null].includes(form.event_data.revisit_type.screen_revisit.link.code_editor_text)) {
        form.setError('link', 'The link is required');
      }
    }

    if (form.event_data.revisit_type.selected_type == 'marked_revisit') {
      if (['', null].includes(form.event_data.revisit_type.marked_revisit.selected_marker)) {
        form.setError('selected_marker', 'The marker is required');
      }
    }
  },
  redirect: function redirect(form) {
    if (['', null].includes(form.event_data.general.trigger.selected_type)) {
      form.setError('selected_type', 'The trigger type is required');
    }

    if (form.event_data.general.trigger.selected_type == 'manual') {
      if (form.event_data.general.trigger.manual.input.code_editor_mode == false && ['', null].includes(form.event_data.general.trigger.manual.input.text)) {
        form.setError('input', 'The trigger input is required');
      } else if (form.event_data.general.trigger.manual.input.code_editor_mode == true && ['', null].includes(form.event_data.general.trigger.manual.input.code_editor_text)) {
        form.setError('input', 'The trigger input is required');
      }
    }

    if (form.event_data.service_code.code_editor_mode == false && ['', null].includes(form.event_data.service_code.text)) {
      form.setError('service_code', 'The service code is required');
    } else if (form.event_data.service_code.code_editor_mode == true && ['', null].includes(form.event_data.service_code.code_editor_text)) {
      form.setError('service_code', 'The service code is required');
    }
  },
  notification: function notification(form) {
    if (form.event_data.message.code_editor_mode == false && ['', null].includes(form.event_data.message.text)) {
      form.setError('message', 'The message is required');
    } else if (form.event_data.message.code_editor_mode == true && ['', null].includes(form.event_data.message.code_editor_text)) {
      form.setError('message', 'The message is required');
    }

    if (form.event_data.continue_text.code_editor_mode == false && ['', null].includes(form.event_data.continue_text.text)) {
      form.setError('continue_text', 'The continue text is required');
    } else if (form.event_data.continue_text.code_editor_mode == true && ['', null].includes(form.event_data.continue_text.code_editor_text)) {
      form.setError('continue_text', 'The continue text is required');
    }

    if (form.event_data.msisdn.code_editor_mode == false && ['', null].includes(form.event_data.msisdn.text)) {
      form.setError('msisdn', 'The msisdn is required');
    } else if (form.event_data.msisdn.code_editor_mode == true && ['', null].includes(form.event_data.msisdn.code_editor_text)) {
      form.setError('msisdn', 'The msisdn is required');
    }
  },
  eventCollection: function eventCollection(form) {
    if (form.event_data.events.collection.length == 0) {
      form.setError('events', 'The events are required');
    }
  },
  terminateSession: function terminateSession(form) {},
  database: function database(form) {
    if (['', null].includes(form.event_data.action)) {
      form.setError('action', 'The action is required');
    }

    if (['', null].includes(form.event_data.reference_name)) {
      form.setError('reference_name', 'The reference name is required');
    }

    if (['create', 'update', 'read_or_create', 'create_or_update'].includes(form.event_data.action)) {
      if (form.event_data.additional_fields.length == 0) {
        form.setError('additional_fields', 'The variables are required');
      }

      if (form.event_data.action == 'update' && ['', null].includes(form.event_data.update_approach)) {
        form.setError('update_approach', 'The update approach is required');
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/CreateOrUpdate/CreateOrUpdateNavigationModal.vue":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/CreateOrUpdate/CreateOrUpdateNavigationModal.vue ***!
  \*****************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CreateOrUpdateNavigationModal_vue_vue_type_template_id_61e195e5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateOrUpdateNavigationModal.vue?vue&type=template&id=61e195e5 */ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/CreateOrUpdate/CreateOrUpdateNavigationModal.vue?vue&type=template&id=61e195e5");
/* harmony import */ var _CreateOrUpdateNavigationModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateOrUpdateNavigationModal.vue?vue&type=script&lang=js */ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/CreateOrUpdate/CreateOrUpdateNavigationModal.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_juliantabona_Sites_laravel_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_juliantabona_Sites_laravel_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_CreateOrUpdateNavigationModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_CreateOrUpdateNavigationModal_vue_vue_type_template_id_61e195e5__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/CreateOrUpdate/CreateOrUpdateNavigationModal.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/Delete/DeleteNavigationModal.vue":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/Delete/DeleteNavigationModal.vue ***!
  \*************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DeleteNavigationModal_vue_vue_type_template_id_f9428b76__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DeleteNavigationModal.vue?vue&type=template&id=f9428b76 */ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/Delete/DeleteNavigationModal.vue?vue&type=template&id=f9428b76");
/* harmony import */ var _DeleteNavigationModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DeleteNavigationModal.vue?vue&type=script&lang=js */ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/Delete/DeleteNavigationModal.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_juliantabona_Sites_laravel_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_juliantabona_Sites_laravel_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_DeleteNavigationModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_DeleteNavigationModal_vue_vue_type_template_id_f9428b76__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/Delete/DeleteNavigationModal.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/NavigationMenu.vue":
/*!***********************************************************************************************************************************************************!*\
  !*** ./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/NavigationMenu.vue ***!
  \***********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NavigationMenu_vue_vue_type_template_id_29d6464e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavigationMenu.vue?vue&type=template&id=29d6464e */ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/NavigationMenu.vue?vue&type=template&id=29d6464e");
/* harmony import */ var _NavigationMenu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavigationMenu.vue?vue&type=script&lang=js */ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/NavigationMenu.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_juliantabona_Sites_laravel_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_juliantabona_Sites_laravel_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_NavigationMenu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_NavigationMenu_vue_vue_type_template_id_29d6464e__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/NavigationMenu.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/NavigationMenus.vue":
/*!************************************************************************************************************************************************************!*\
  !*** ./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/NavigationMenus.vue ***!
  \************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NavigationMenus_vue_vue_type_template_id_149e2495__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavigationMenus.vue?vue&type=template&id=149e2495 */ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/NavigationMenus.vue?vue&type=template&id=149e2495");
/* harmony import */ var _NavigationMenus_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavigationMenus.vue?vue&type=script&lang=js */ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/NavigationMenus.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_juliantabona_Sites_laravel_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_juliantabona_Sites_laravel_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_NavigationMenus_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_NavigationMenus_vue_vue_type_template_id_149e2495__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/NavigationMenus.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/index.vue":
/*!**************************************************************************************************************************************************!*\
  !*** ./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/index.vue ***!
  \**************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_79aea387__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=79aea387 */ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/index.vue?vue&type=template&id=79aea387");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/index.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_juliantabona_Sites_laravel_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_juliantabona_Sites_laravel_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_index_vue_vue_type_template_id_79aea387__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/index.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/CreateOrUpdate/CreateOrUpdateNavigationModal.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/CreateOrUpdate/CreateOrUpdateNavigationModal.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CreateOrUpdateNavigationModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CreateOrUpdateNavigationModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CreateOrUpdateNavigationModal.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/CreateOrUpdate/CreateOrUpdateNavigationModal.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/Delete/DeleteNavigationModal.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/Delete/DeleteNavigationModal.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DeleteNavigationModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DeleteNavigationModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DeleteNavigationModal.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/Delete/DeleteNavigationModal.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/NavigationMenu.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/NavigationMenu.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NavigationMenu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NavigationMenu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NavigationMenu.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/NavigationMenu.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/NavigationMenus.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/NavigationMenus.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NavigationMenus_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NavigationMenus_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NavigationMenus.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/NavigationMenus.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/index.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/index.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/index.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/CreateOrUpdate/CreateOrUpdateNavigationModal.vue?vue&type=template&id=61e195e5":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/CreateOrUpdate/CreateOrUpdateNavigationModal.vue?vue&type=template&id=61e195e5 ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CreateOrUpdateNavigationModal_vue_vue_type_template_id_61e195e5__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CreateOrUpdateNavigationModal_vue_vue_type_template_id_61e195e5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CreateOrUpdateNavigationModal.vue?vue&type=template&id=61e195e5 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/CreateOrUpdate/CreateOrUpdateNavigationModal.vue?vue&type=template&id=61e195e5");


/***/ }),

/***/ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/Delete/DeleteNavigationModal.vue?vue&type=template&id=f9428b76":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/Delete/DeleteNavigationModal.vue?vue&type=template&id=f9428b76 ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DeleteNavigationModal_vue_vue_type_template_id_f9428b76__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DeleteNavigationModal_vue_vue_type_template_id_f9428b76__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DeleteNavigationModal.vue?vue&type=template&id=f9428b76 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/Delete/DeleteNavigationModal.vue?vue&type=template&id=f9428b76");


/***/ }),

/***/ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/NavigationMenu.vue?vue&type=template&id=29d6464e":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/NavigationMenu.vue?vue&type=template&id=29d6464e ***!
  \*****************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NavigationMenu_vue_vue_type_template_id_29d6464e__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NavigationMenu_vue_vue_type_template_id_29d6464e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NavigationMenu.vue?vue&type=template&id=29d6464e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/NavigationMenu.vue?vue&type=template&id=29d6464e");


/***/ }),

/***/ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/NavigationMenus.vue?vue&type=template&id=149e2495":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/NavigationMenus.vue?vue&type=template&id=149e2495 ***!
  \******************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NavigationMenus_vue_vue_type_template_id_149e2495__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NavigationMenus_vue_vue_type_template_id_149e2495__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NavigationMenus.vue?vue&type=template&id=149e2495 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/NavigationMenus.vue?vue&type=template&id=149e2495");


/***/ }),

/***/ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/index.vue?vue&type=template&id=79aea387":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/index.vue?vue&type=template&id=79aea387 ***!
  \********************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_79aea387__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_79aea387__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=template&id=79aea387 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Versions/Show/Builder/Content/Editor/ScreenEditor/ScreenDisplays/Display/DisplayNavigation/NavigationEditor/index.vue?vue&type=template&id=79aea387");


/***/ })

}]);