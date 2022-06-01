"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Versions_Show_Builder_Content_Editor_EventsEditor_CreateOrUpdate_EventEdit-b75c51"],{

/***/ "./resources/js/Pages/Versions/Show/Builder/Content/Editor/EventsEditor/CreateOrUpdate/EventEditor/EventTypes/validation.js":
/*!**********************************************************************************************************************************!*\
  !*** ./resources/js/Pages/Versions/Show/Builder/Content/Editor/EventsEditor/CreateOrUpdate/EventEditor/EventTypes/validation.js ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var _this = undefined;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  crudApi: function crudApi() {},
  smsApi: function smsApi() {},
  airtimeBillingApi: function airtimeBillingApi() {
    if (['', null].includes(_this.form.event_data.airtime_billing_action)) {
      _this.form.setError('airtime_billing_action', 'The action is required');
    } else if (_this.form.event_data.msisdn.length == 0) {
      _this.form.setError('msisdn', 'The msisdn is required');
    } else if (_this.form.event_data.response_reference_name.length == 0) {
      _this.form.setError('response_reference_name', 'The response reference name is required');
    } else if (_this.form.event_data.airtime_billing_action == 'deduct_fee') {
      if (_this.form.event_data.amount.length == 0) {
        _this.form.setError('amount', 'The amount is required');
      } else if (_this.form.event_data.currency.length == 0) {
        _this.form.setError('currency', 'The currency is required');
      } else if (_this.form.event_data.description.length == 0) {
        _this.form.setError('description', 'The description is required');
      }
    }
  }
});

/***/ })

}]);