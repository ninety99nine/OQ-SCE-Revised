"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Apps_Show_Version_mixin_js"],{

/***/ "./resources/js/Pages/Apps/Show/Version/mixin.js":
/*!*******************************************************!*\
  !*** ./resources/js/Pages/Apps/Show/Version/mixin.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    version: Object,
    appPayload: Object
  },
  data: function data() {
    return {
      moment: moment,
      showingOptions: false,
      modalIsClosed: true
    };
  },
  methods: {
    showVersion: function showVersion() {
      this.$inertia.get(route('version.show', {
        project: this.route().params.project,
        app: this.route().params.app,
        version: this.version.id
      }));
    },
    modalClosed: function modalClosed() {
      this.modalIsClosed = true;
      this.hideOptions();
    },
    modalOpened: function modalOpened() {
      this.modalIsClosed = false;
    },
    showOptions: function showOptions() {
      this.showingOptions = true;
    },
    hideOptions: function hideOptions() {
      //  Hide options if the modal is closed
      if (this.modalIsClosed == true) {
        this.showingOptions = false;
      }
    }
  }
});

/***/ })

}]);