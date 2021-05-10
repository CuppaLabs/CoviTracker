(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/solomon301/Documents/GitHub/CoviTracker/src/main.ts */"zUnb");


/***/ }),

/***/ "2cyP":
/*!***************************************************************!*\
  !*** ./src/app/daterangepicker/daterange-picker.component.ts ***!
  \***************************************************************/
/*! exports provided: CustomAdapter, CustomDateParserFormatter, NgbdDatepickerRangePopup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomAdapter", function() { return CustomAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomDateParserFormatter", function() { return CustomDateParserFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdDatepickerRangePopup", function() { return NgbdDatepickerRangePopup; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.services */ "8Kc9");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






function NgbdDatepickerRangePopup_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function NgbdDatepickerRangePopup_ng_template_5_Template_span_mouseenter_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const date_r5 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.hoveredDate = date_r5; })("mouseleave", function NgbdDatepickerRangePopup_ng_template_5_Template_span_mouseleave_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.hoveredDate = null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const date_r5 = ctx.$implicit;
    const focused_r6 = ctx.focused;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("focused", focused_r6)("range", ctx_r2.isRange(date_r5))("faded", ctx_r2.isHovered(date_r5) || ctx_r2.isInside(date_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", date_r5.day, " ");
} }
/**
 * This Service handles how the date is represented in scripts i.e. ngModel.
 */
class CustomAdapter extends _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateAdapter"] {
    constructor() {
        super(...arguments);
        this.DELIMITER = '-';
    }
    fromModel(value) {
        if (value) {
            let date = value.split(this.DELIMITER);
            return {
                day: parseInt(date[0], 10),
                month: parseInt(date[1], 10),
                year: parseInt(date[2], 10)
            };
        }
        return null;
    }
    toModel(date) {
        return date ? date.day + this.DELIMITER + date.month + this.DELIMITER + date.year : null;
    }
}
CustomAdapter.ɵfac = function CustomAdapter_Factory(t) { return ɵCustomAdapter_BaseFactory(t || CustomAdapter); };
CustomAdapter.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CustomAdapter, factory: CustomAdapter.ɵfac });
const ɵCustomAdapter_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](CustomAdapter);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomAdapter, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();
/**
 * This Service handles how the date is rendered and parsed from keyboard i.e. in the bound input field.
 */
class CustomDateParserFormatter extends _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateParserFormatter"] {
    constructor() {
        super(...arguments);
        this.DELIMITER = '/';
    }
    parse(value) {
        if (value) {
            let date = value.split(this.DELIMITER);
            return {
                day: parseInt(date[0], 10),
                month: parseInt(date[1], 10),
                year: parseInt(date[2], 10)
            };
        }
        return null;
    }
    format(date) {
        return date ? date.day + this.DELIMITER + date.month + this.DELIMITER + date.year : '';
    }
}
CustomDateParserFormatter.ɵfac = function CustomDateParserFormatter_Factory(t) { return ɵCustomDateParserFormatter_BaseFactory(t || CustomDateParserFormatter); };
CustomDateParserFormatter.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CustomDateParserFormatter, factory: CustomDateParserFormatter.ɵfac });
const ɵCustomDateParserFormatter_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](CustomDateParserFormatter);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomDateParserFormatter, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();
class NgbdDatepickerRangePopup {
    constructor(appService, calendar, formatter) {
        this.appService = appService;
        this.calendar = calendar;
        this.formatter = formatter;
        this.hoveredDate = null;
        this.fromDate = calendar.getToday();
        this.toDate = calendar.getNext(calendar.getToday(), 'd', 7);
    }
    onDateSelection(date) {
        if (!this.fromDate && !this.toDate) {
            this.fromDate = date;
            //this.maxDate = this.calendar.getNext(this.fromDate, 'd', 7);
        }
        else if (this.fromDate && !this.toDate && date && date.after(this.fromDate)) {
            this.toDate = date;
            this.maxDate = null;
            this.appService.setDate(this.fromDate.day + '-' + this.fromDate.month + '-' + this.fromDate.year);
        }
        else {
            this.toDate = null;
            this.fromDate = date;
            this.maxDate = this.calendar.getNext(this.fromDate, 'd', 7);
        }
    }
    isHovered(date) {
        return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
    }
    isInside(date) {
        return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
    }
    isRange(date) {
        return date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) || this.isHovered(date);
    }
    validateInput(currentValue, input) {
        const parsed = this.formatter.parse(input);
        return parsed && this.calendar.isValid(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDate"].from(parsed)) ? _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDate"].from(parsed) : currentValue;
    }
}
NgbdDatepickerRangePopup.ɵfac = function NgbdDatepickerRangePopup_Factory(t) { return new (t || NgbdDatepickerRangePopup)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_2__["AppServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCalendar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CustomDateParserFormatter)); };
NgbdDatepickerRangePopup.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgbdDatepickerRangePopup, selectors: [["ngbd-datepicker-range-popup"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            CustomDateParserFormatter,
            { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateAdapter"], useClass: CustomAdapter },
            { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateParserFormatter"], useClass: CustomDateParserFormatter }
        ])], decls: 19, vars: 7, consts: [[1, "form-inline"], [1, "form-group", "hidden"], [1, "input-group"], ["name", "datepicker", "ngbDatepicker", "", "outsideDays", "hidden", "tabindex", "-1", 1, "form-control", 3, "autoClose", "displayMonths", "dayTemplate", "maxDate", "startDate", "dateSelect"], ["datepicker", "ngbDatepicker"], ["t", ""], [1, "form-group", "calendar-rangepicker"], ["placeholder", "yyyy-mm-dd", "name", "dpFromDate", 1, "form-control", 3, "value", "input"], ["dpFromDate", ""], ["placeholder", "yyyy-mm-dd", "name", "dpToDate", 1, "form-control", 3, "value", "input"], ["dpToDate", ""], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-outline-secondary", "calendar-icon", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-calendar3"], ["d", "M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"], ["d", "M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"], [1, "custom-day", 3, "mouseenter", "mouseleave"]], template: function NgbdDatepickerRangePopup_Template(rf, ctx) { if (rf & 1) {
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dateSelect", function NgbdDatepickerRangePopup_Template_input_dateSelect_3_listener($event) { return ctx.onDateSelection($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NgbdDatepickerRangePopup_ng_template_5_Template, 2, 7, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function NgbdDatepickerRangePopup_Template_input_input_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10); return ctx.fromDate = ctx.validateInput(ctx.fromDate, _r3.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function NgbdDatepickerRangePopup_Template_input_input_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13); return ctx.toDate = ctx.validateInput(ctx.toDate, _r4.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgbdDatepickerRangePopup_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "svg", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "path", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autoClose", "true")("displayMonths", 2)("dayTemplate", _r1)("maxDate", ctx.maxDate)("startDate", ctx.fromDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.formatter.format(ctx.fromDate));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.formatter.format(ctx.toDate));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbInputDatepicker"]], styles: [".form-group.hidden[_ngcontent-%COMP%] {\n      width: 0;\n      margin: 0;\n      border: none;\n      padding: 0;\n    }\n    .custom-day[_ngcontent-%COMP%] {\n      text-align: center;\n      padding: 0.185rem 0.25rem;\n      display: inline-block;\n      height: 2rem;\n      width: 2rem;\n    }\n    .custom-day.focused[_ngcontent-%COMP%] {\n      background-color: #e6e6e6;\n    }\n    .custom-day.range[_ngcontent-%COMP%], .custom-day[_ngcontent-%COMP%]:hover {\n      background-color: rgb(2, 117, 216);\n      color: white;\n    }\n    .custom-day.faded[_ngcontent-%COMP%] {\n      background-color: rgba(2, 117, 216, 0.5);\n    }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbdDatepickerRangePopup, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngbd-datepicker-range-popup',
                templateUrl: './daterange-picker.component.html',
                styles: [`
    .form-group.hidden {
      width: 0;
      margin: 0;
      border: none;
      padding: 0;
    }
    .custom-day {
      text-align: center;
      padding: 0.185rem 0.25rem;
      display: inline-block;
      height: 2rem;
      width: 2rem;
    }
    .custom-day.focused {
      background-color: #e6e6e6;
    }
    .custom-day.range, .custom-day:hover {
      background-color: rgb(2, 117, 216);
      color: white;
    }
    .custom-day.faded {
      background-color: rgba(2, 117, 216, 0.5);
    }
  `],
                providers: [
                    CustomDateParserFormatter,
                    { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateAdapter"], useClass: CustomAdapter },
                    { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateParserFormatter"], useClass: CustomDateParserFormatter }
                ]
            }]
    }], function () { return [{ type: _app_services__WEBPACK_IMPORTED_MODULE_2__["AppServices"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCalendar"] }, { type: CustomDateParserFormatter }]; }, null); })();


/***/ }),

/***/ "8Kc9":
/*!*********************************!*\
  !*** ./src/app/app.services.ts ***!
  \*********************************/
/*! exports provided: AppServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppServices", function() { return AppServices; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment.prod */ "cxbk");







class AppServices {
    constructor(http) {
        this.http = http;
        this.statesCollection = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({});
        this.districtsCollection = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({});
        this.selectedDate = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](moment__WEBPACK_IMPORTED_MODULE_2__(new Date(), 'DD-MM-YYYY', false).format('DD-MM-YYYY'));
    }
    setDate(date) {
        this.selectedDate.next(moment__WEBPACK_IMPORTED_MODULE_2__(date, 'DD-MM-YYYY', false).format('DD-MM-YYYY'));
    }
    getDistricts() {
        return this.http.get('/assets/content/districts.json');
    }
    getStates() {
        return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl + '/admin/location/states');
    }
    getDistrictsByState(stateId) {
        return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl + '/admin/location/districts/' + stateId);
    }
    getVaccineAvailabilityByDistrict(districtId, date) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]()
            .set('district_id', districtId)
            .set('date', date);
        return this.http.get(`${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl}/appointment/sessions/public/calendarByDistrict?${params.toString()}`);
    }
    getAllTotals() {
        return this.http.get('https://disease.sh/v3/covid-19/all');
    }
    getAllHistorical() {
        return this.http.get('https://disease.sh/v3/covid-19/historical/all?lastdays=all');
    }
}
AppServices.ɵfac = function AppServices_Factory(t) { return new (t || AppServices)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
AppServices.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AppServices, factory: AppServices.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppServices, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "HzKK":
/*!***********************************************************!*\
  !*** ./src/app/vaccine-tracker/vaccine-tracker.router.ts ***!
  \***********************************************************/
/*! exports provided: VaccineTrackerRouterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VaccineTrackerRouterModule", function() { return VaccineTrackerRouterModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _vaccine_tracker_vaccine_tracker_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vaccine-tracker/vaccine-tracker.component */ "QB/e");





const appRoutes = [{
        path: "",
        component: _vaccine_tracker_vaccine_tracker_component__WEBPACK_IMPORTED_MODULE_2__["VaccineTrackerComponent"]
    }];
class VaccineTrackerRouterModule {
}
VaccineTrackerRouterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: VaccineTrackerRouterModule });
VaccineTrackerRouterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function VaccineTrackerRouterModule_Factory(t) { return new (t || VaccineTrackerRouterModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(appRoutes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](VaccineTrackerRouterModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](VaccineTrackerRouterModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(appRoutes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "QB/e":
/*!******************************************************************************!*\
  !*** ./src/app/vaccine-tracker/vaccine-tracker/vaccine-tracker.component.ts ***!
  \******************************************************************************/
/*! exports provided: VaccineTrackerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VaccineTrackerComponent", function() { return VaccineTrackerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_app_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/app.services */ "8Kc9");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/table */ "rEr+");










function VaccineTrackerComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function VaccineTrackerComponent_div_12_Template_input_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const item_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.changeSelection(item_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r5.isChecked)("checked", item_r5.isChecked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5.label);
} }
function VaccineTrackerComponent_ng_template_18_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const day_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](day_r9);
} }
function VaccineTrackerComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Hospital");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "p-sortIcon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Availability");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, VaccineTrackerComponent_ng_template_18_th_9_Template, 2, 1, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.week);
} }
function VaccineTrackerComponent_ng_template_19_td_14_div_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;
    const center_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", center_r10.sessions[i_r13].available_capacity, " ");
} }
function VaccineTrackerComponent_ng_template_19_td_14_div_1_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;
    const center_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", center_r10.sessions[i_r13].available_capacity, " ");
} }
function VaccineTrackerComponent_ng_template_19_td_14_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, VaccineTrackerComponent_ng_template_19_td_14_div_1_span_2_Template, 2, 1, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, VaccineTrackerComponent_ng_template_19_td_14_div_1_span_3_Template, 2, 1, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "small", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const center_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", center_r10.sessions[i_r13].available_capacity > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", center_r10.sessions[i_r13].available_capacity === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", center_r10.sessions[i_r13].min_age_limit, "+");
} }
function VaccineTrackerComponent_ng_template_19_td_14_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " 0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "small", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VaccineTrackerComponent_ng_template_19_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VaccineTrackerComponent_ng_template_19_td_14_div_1_Template, 6, 3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, VaccineTrackerComponent_ng_template_19_td_14_div_2_Template, 6, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r13 = ctx.index;
    const center_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", center_r10.sessions[i_r13]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !center_r10.sessions[i_r13]);
} }
function VaccineTrackerComponent_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VaccineTrackerComponent_ng_template_19_Template_a_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const center_r10 = ctx.$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.openMap(center_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "View on map");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, VaccineTrackerComponent_ng_template_19_td_14_Template, 3, 2, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const center_r10 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", center_r10.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](center_r10.fee_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", center_r10.block_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](center_r10.pincode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.week);
} }
function VaccineTrackerComponent_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No vaccination centers available.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["name", "block_name", "fee_type", "pincode"]; };
class VaccineTrackerComponent {
    constructor(filterService, router, route, appService) {
        this.filterService = filterService;
        this.router = router;
        this.route = route;
        this.appService = appService;
        this.centers = [];
        this.cachedCenters = [];
        this.loading = true;
        this.statesCollection = {};
        this.districtsCollection = {};
        this.districtId = 0;
        this.week = [];
        this.selectedCities = [];
        this.checkedIDs = [];
        this.selectedItemsList = [];
        this.ageOptions = [
            {
                id: 'C001',
                label: '18+',
                isChecked: true,
                value: 18
            },
            {
                id: 'C002',
                label: '45+',
                isChecked: true,
                value: 45
            }
        ];
    }
    ngOnInit() {
        this.loading = true;
        const districtId = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([this.route.params, this.appService.statesCollection,
            this.appService.districtsCollection, this.appService.selectedDate])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(([params, states, districts, date]) => {
            this.statesCollection = states;
            this.districtsCollection = districts;
            this.districtId = params.id;
            const navigation = this.router.getCurrentNavigation();
            if (Object.keys(states).length && Object.keys(districts).length) {
                this.week = [];
                for (let i = 0; i < 7; i++) {
                    this.week.push(moment__WEBPACK_IMPORTED_MODULE_1__(date, 'DD-MM-YYYY', false).add(i, 'days').format('MMMM D'));
                }
                return this.appService.getVaccineAvailabilityByDistrict(params.id, date);
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({ centers: [] });
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => {
            return data;
        })).subscribe((data) => {
            this.centers = data.centers;
            this.cachedCenters = data.centers;
            this.loading = false;
        });
        this.fetchCheckedIDs();
    }
    changeSelection(item) {
        item.isChecked = !item.isChecked;
        this.fetchSelectedItems();
    }
    fetchSelectedItems() {
        this.selectedItemsList = this.ageOptions.filter((value, index) => {
            return value.isChecked;
        });
        this.filterList();
    }
    fetchCheckedIDs() {
        this.checkedIDs = [];
        this.ageOptions.forEach((value, index) => {
            if (value.isChecked) {
                this.checkedIDs.push(value.id);
            }
        });
    }
    filterList() {
        if (this.selectedItemsList.length == 1) {
            let filteredArray = this.centers.filter((element) => element.sessions.some((subElement) => subElement.min_age_limit === this.selectedItemsList[0].value));
            this.centers = filteredArray;
        }
        else {
            this.centers = this.cachedCenters;
        }
    }
    openMap(center) {
        window.open('http://maps.google.com/?q=' + center.name + ' ' + center.address + ' ' + center.pincode);
    }
}
VaccineTrackerComponent.ɵfac = function VaccineTrackerComponent_Factory(t) { return new (t || VaccineTrackerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__["FilterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_app_services__WEBPACK_IMPORTED_MODULE_6__["AppServices"])); };
VaccineTrackerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VaccineTrackerComponent, selectors: [["app-vaccine-tracker"]], decls: 21, vars: 9, consts: [[1, "row", "pt-2", "pb-3"], [1, "col-auto", "me-auto"], [1, "mb-0"], [2, "font-size", "10px"], [1, "pb-2"], [1, "col-auto", "age-options"], [2, "margin-right", "10px"], ["class", "form-check form-check-inline", 4, "ngFor", "ngForOf"], [1, "col-lg-5"], ["type", "text", "placeholder", "Search by Hospital/Address/fees type/Pincode", 1, "form-control", "custom-input", 3, "input"], [1, "custom-column-height"], ["sortField", "name", "scrollHeight", "flex", 3, "value", "scrollable", "globalFilterFields", "loading"], ["dt1", ""], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "form-check", "form-check-inline"], ["type", "checkbox", 1, "form-check-input", 3, "value", "checked", "change"], ["for", "inlineCheckbox1", 1, "form-check-label"], ["pSortableColumn", "name", "rowspan", "2", 2, "width", "20%"], ["field", "name"], ["pSortableColumn", "block_name", "rowspan", "2", 2, "width", "20%", "border-right", "1px solid #fff"], ["colspan", "7", 2, "text-align", "center"], ["style", "text-align: center;", 4, "ngFor", "ngForOf"], [2, "text-align", "center"], [2, "width", "20%"], [1, "badge", "bg-info"], [1, "btn", "btn-link", "btn-sm", "map-btn", 3, "click"], [4, "ngIf"], ["class", "badge bg-success", 4, "ngIf"], ["class", "badge bg-danger", 4, "ngIf"], [1, "age-limit"], [1, "badge", "bg-success"], [1, "badge", "bg-danger"], [1, "age-limit", 2, "visibility", "hidden"], ["colspan", "9", 2, "text-align", "center"]], template: function VaccineTrackerComponent_Template(rf, ctx) { if (rf & 1) {
        const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "small", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "small", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "small", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Age Limit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, VaccineTrackerComponent_div_12_Template, 4, 3, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function VaccineTrackerComponent_Template_input_input_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17); return _r1.filterGlobal($event.target.value, "contains"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p-table", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, VaccineTrackerComponent_ng_template_18_Template, 10, 1, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, VaccineTrackerComponent_ng_template_19_Template, 15, 5, "ng-template", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, VaccineTrackerComponent_ng_template_20_Template, 3, 0, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.districtsCollection[ctx.districtId] == null ? null : ctx.districtsCollection[ctx.districtId].district_name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.centers.length, " Centers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.statesCollection[ctx.districtsCollection[ctx.districtId] == null ? null : ctx.districtsCollection[ctx.districtId].state_id]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ageOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.centers)("scrollable", true)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0))("loading", ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], primeng_table__WEBPACK_IMPORTED_MODULE_8__["Table"], primeng_api__WEBPACK_IMPORTED_MODULE_4__["PrimeTemplate"], primeng_table__WEBPACK_IMPORTED_MODULE_8__["SortableColumn"], primeng_table__WEBPACK_IMPORTED_MODULE_8__["SortIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], styles: [".age-options[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  padding: 0px 0px;\n}\n\n.map-btn[_ngcontent-%COMP%] {\n  padding-left: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3ZhY2NpbmUtdHJhY2tlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFDQTtFQUNJLGlCQUFBO0FBRUoiLCJmaWxlIjoidmFjY2luZS10cmFja2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFnZS1vcHRpb25zIHtcbiAgICBmb250LXNpemU6IDAuODVyZW07XG4gICAgcGFkZGluZzogMHB4IDBweDtcbn1cbi5tYXAtYnRuIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbn1cbi5hZ2UtbGltaXQge1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VaccineTrackerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-vaccine-tracker',
                templateUrl: './vaccine-tracker.component.html',
                styleUrls: ['./vaccine-tracker.component.scss']
            }]
    }], function () { return [{ type: primeng_api__WEBPACK_IMPORTED_MODULE_4__["FilterService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: src_app_app_services__WEBPACK_IMPORTED_MODULE_6__["AppServices"] }]; }, null); })();


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.services */ "8Kc9");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/service-worker */ "Jho9");
/* harmony import */ var _check_for_update_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./check-for-update.service */ "kW9T");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _daterangepicker_daterange_picker_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./daterangepicker/daterange-picker.component */ "2cyP");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng2_adsense__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-adsense */ "Cvm2");
/* harmony import */ var _filter_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./filter.pipe */ "i6q1");













function AppComponent_option_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const state_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", state_r2.state_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](state_r2.state_name);
} }
const _c0 = function (a1) { return ["vaccineTracker/district", a1]; };
function AppComponent_span_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const district_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, district_r3.district_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", district_r3.district_name, " ");
} }
class AppComponent {
    constructor(appService, updates, checkForUpdateService, router, activatedRoute) {
        this.appService = appService;
        this.updates = updates;
        this.checkForUpdateService = checkForUpdateService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.districts = [];
        this.districtSearch = '';
        this.stateSearch = 'All';
        this.states = [];
        this.updates.available.subscribe((event) => {
            this.updateToLatest();
        });
        this.updates.activated.subscribe(event => {
            console.log('old version was', event.previous);
            console.log('new version is', event.current);
        });
    }
    showInfo(link) {
    }
    updateToLatest() {
        console.log('Updating to latest version.');
        this.updates.activateUpdate().then(() => document.location.reload());
    }
    ngOnInit() {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([this.appService.getDistricts(), this.appService.getStates()])
            .pipe()
            .subscribe(([districts, states]) => {
            this.districts = districts;
            this.states = states.states;
            const statesCollection = {};
            const districtsCollection = {};
            states.states.forEach(state => {
                statesCollection[state.state_id] = state.state_name;
            });
            districts.forEach(district => {
                districtsCollection[district.district_id] = district;
            });
            if (!this.router.url.includes('vaccineTracker/district')) {
                this.router.navigate(['vaccineTracker/district/582']);
            }
            this.appService.statesCollection.next(statesCollection);
            this.appService.districtsCollection.next(districtsCollection);
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_2__["AppServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_service_worker__WEBPACK_IMPORTED_MODULE_3__["SwUpdate"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_check_for_update_service__WEBPACK_IMPORTED_MODULE_4__["CheckForUpdateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 63, vars: 18, consts: [[1, "navbar", "navbar-expand-lg", "fixed-top", "cuppa-navbar"], [1, "container-fluid"], ["href", "#", 1, "navbar-brand", "cuppa-brand", "col-lg-2"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", "ham-btn"], ["xmlns", "http://www.w3.org/2000/svg", "width", "32", "height", "32", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-list"], ["fill-rule", "evenodd", "d", "M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"], ["href", "#", 1, "navbar-brand", "cuppa-brand"], ["src", "assets/img/vaccine2.png", "height", "30", "alt", ""], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "me-auto", "mb-2", "mb-lg-0", "d-none", "d-sm-block", "d-md-none", "d-lg-block"], [1, "nav-item", "calendar-container"], [1, "navbar-nav", "m2-auto", "mb-2", "mb-lg-0"], [1, "nav-item"], ["href", "https://www.who.int/emergencies/diseases/novel-coronavirus-2019/question-and-answers-hub/q-a-detail/coronavirus-disease-covid-19\n          ", "target", "_blank", 1, "nav-link"], ["href", "http://cuppalabs.github.io/aboutme", "target", "_blank", 1, "nav-link"], [1, "nav-item", "power-title"], ["target", "__blank", "href", "https://cuppalabs.github.io", 2, "float", "right"], ["src", "assets/img/cuppa-logo-coffee11.png", "height", "20", "alt", ""], [1, "row", "d-flex"], ["id", "sidebarMenu2", 1, "col", "d-md-block", "sidebar2", "collapse"], [1, "position-sticky"], [1, "nav", "flex-column"], ["aria-label", "Default select example", 1, "form-select", "state-select", 3, "ngModel", "ngModelChange"], ["selected", "", "value", "All"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "placeholder", "Search District", 1, "form-control", "custom-input", 3, "ngModel", "ngModelChange"], ["id", "sidebarMenu", 1, "col", "d-md-block", "sidebar", "collapse"], [4, "ngFor", "ngForOf"], [1, "col", "center-content", "pt-2"], [1, "mobile-picker"], [1, "col", "ad-container", "custom-column-height"], [3, "adClient", "adSlot", "display", "width", "height"], [1, "footer"], ["href", "https://cuppalabs.github.io", 2, "color", "#fff"], ["target", "__blank", "href", "https://www.flaticon.com"], [3, "value"], ["routerLinkActive", "active", 1, "nav-link", "lit-item-link", 3, "routerLink"], ["data-feather", "home"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Covi Tracker ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "ngbd-datepicker-range-popup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "WHO Safety Guidelines");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "About Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Powered by");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "nav", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ul", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "select", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_select_ngModelChange_31_listener($event) { return ctx.stateSearch = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "All States");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, AppComponent_option_34_Template, 2, 2, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_35_listener($event) { return ctx.districtSearch = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "nav", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "ul", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, AppComponent_span_39_Template, 5, 4, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](40, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "main", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "ngbd-datepicker-range-popup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "ng-adsense", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "ng-adsense", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "footer", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "\u00A9 2009-2021 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Cuppa Labs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Made in India");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, ". All rights reserved and copyrighted to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Pradeep Kumar Terli");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Icon made by Freepik from ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "www.flaticon.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.stateSearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.states);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.districtSearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](40, 14, ctx.districts, ctx.districtSearch, ctx.stateSearch));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("adClient", "ca-pub-4525567075133342")("adSlot", 2263435109)("display", "inline-block")("width", 300)("height", 250);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("adClient", "ca-pub-4525567075133342")("adSlot", 6386579727)("display", "inline-block")("width", 300)("height", 250);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbNavbar"], _daterangepicker_daterange_picker_component__WEBPACK_IMPORTED_MODULE_7__["NgbdDatepickerRangePopup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"], ng2_adsense__WEBPACK_IMPORTED_MODULE_10__["AdsenseComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkActive"]], pipes: [_filter_pipe__WEBPACK_IMPORTED_MODULE_11__["SearchPipe"]], styles: [".example-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.mat-toolbar[_ngcontent-%COMP%] {\n  position: sticky;\n  position: -webkit-sticky;\n  \n  top: 0;\n  \n  z-index: 1000;\n  \n}\n\n.left-section[_ngcontent-%COMP%] {\n  max-width: 250px !important;\n  width: 250px !important;\n  position: fixed;\n  display: flex;\n  height: calc(100vh - 64px);\n  overflow: auto;\n  border-right: 1px solid #ccc;\n}\n\n.center-section[_ngcontent-%COMP%] {\n  max-width: initial !important;\n  margin-left: 250px;\n  padding-top: 10px;\n}\n\n.right-section[_ngcontent-%COMP%] {\n  max-width: 300px !important;\n}\n\n.mat-grid-list[_ngcontent-%COMP%] {\n  height: calc(100vh - 64px) !important;\n}\n\n.left-sidebar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 65px;\n  height: calc(100vh - 75px);\n  padding-right: 0px;\n  overflow: hidden;\n}\n\n.left-sidebar[_ngcontent-%COMP%], .right-sidebar[_ngcontent-%COMP%] {\n  width: 260px;\n}\n\n.left-sidebar[_ngcontent-%COMP%]:hover {\n  overflow: auto;\n}\n\n.outer-wrapper[_ngcontent-%COMP%] {\n  padding: 30px;\n}\n\n.center-content[_ngcontent-%COMP%] {\n  border-right: 1px solid #dee2e6;\n}\n\n@media (min-width: 768px) {\n  .center-content[_ngcontent-%COMP%] {\n    margin-left: 250px;\n  }\n}\n\n.nav-sub[_ngcontent-%COMP%] {\n  width: 100%;\n  box-shadow: none;\n  margin-bottom: 6px;\n  padding: 0px;\n  margin-top: 50px;\n}\n\n.nav-wrapper[_ngcontent-%COMP%] {\n  padding: 0px 10px;\n}\n\n.list-group-item[_ngcontent-%COMP%] {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n\n.sidebar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: calc(51px + 6rem);\n  \n  bottom: 0;\n  \n  left: 0;\n  z-index: 100;\n  \n  padding: 0;\n  \n  overflow: auto;\n  width: 250px;\n  border-right: 1px solid #dee2e6;\n  background: #2b4c81;\n}\n\n.sidebar2[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 55px;\n  \n  \n  left: 0;\n  z-index: 100;\n  \n  padding: 0;\n  \n  overflow: auto;\n  width: 250px;\n  border-right: 1px solid #dee2e6;\n}\n\n@media (max-width: 767.98px) {\n  .sidebar[_ngcontent-%COMP%] {\n    top: 5rem;\n  }\n}\n\n.sidebar-sticky[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0;\n  height: calc(100vh - 48px);\n  padding-top: 0.5rem;\n  overflow-x: hidden;\n  overflow-y: auto;\n  \n}\n\n.sidebar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   .feather[_ngcontent-%COMP%] {\n  margin-right: 4px;\n  color: #727272;\n}\n\n.sidebar[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  background: #007bff;\n  color: #fff;\n}\n\n.sidebar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover   .feather[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]   .feather[_ngcontent-%COMP%] {\n  color: inherit;\n}\n\n.sidebar-heading[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  text-transform: uppercase;\n}\n\n.ad-container[_ngcontent-%COMP%] {\n  flex: 0 0 300px;\n  height: calc(100vh - 60px);\n  overflow: auto;\n  position: relative;\n  display: none;\n}\n\n.state-select[_ngcontent-%COMP%] {\n  border-radius: 0;\n  font-size: 0.85rem;\n  color: #757373;\n  border-right: 0;\n  border-bottom: 0;\n  border-color: #dee2e6;\n  height: 3rem;\n  max-height: 46px;\n}\n\n.lit-item-link[_ngcontent-%COMP%] {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n\n.sidebar2[_ngcontent-%COMP%]   .custom-input[_ngcontent-%COMP%] {\n  border-right: 0;\n  border-color: #dee2e6;\n  height: 3rem;\n  max-height: 46px;\n}\n\n.footer[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 5px 0;\n  border: none;\n  background-color: #1D262D;\n  color: #BAC8D3;\n  font-size: 0.5rem;\n  text-align: center;\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n\n.footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.power-title[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  display: block;\n  text-align: right;\n  padding-top: 7px;\n}\n\n.power-title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-top: -5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNJLGNBQUE7QUFISjs7QUFLRTtFQUNFLGdCQUFBO0VBQ0Esd0JBQUE7RUFBMEIseUJBQUE7RUFDMUIsTUFBQTtFQUFRLHlDQUFBO0VBQ1IsYUFBQTtFQUFlLCtEQUFBO0FBQ25COztBQUNBO0VBQ0ksMkJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7QUFFSjs7QUFBQTtFQUNJLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUdKOztBQURBO0VBQ0ksMkJBQUE7QUFJSjs7QUFGQTtFQUNJLHFDQUFBO0FBS0o7O0FBSEE7RUFDSSxlQUFBO0VBQ0EsU0FBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQU1KOztBQUpBO0VBQ0ksWUFBQTtBQU9KOztBQUxBO0VBQ0ksY0FBQTtBQVFKOztBQUpBO0VBQ0ksYUFBQTtBQU9KOztBQUxBO0VBQ0UsK0JBQUE7QUFRRjs7QUFOQTtFQUNJO0lBQ0ksa0JBQUE7RUFTTjtBQUNGOztBQVBBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFTSjs7QUFQQTtFQUNJLGlCQUFBO0FBVUo7O0FBUkE7RUFDSSxtQkFBQTtFQUNBLHNCQUFBO0FBV0o7O0FBTkE7RUFDSSxlQUFBO0VBQ0Esc0JBQUE7RUFDQTs7R0FBQTtFQUdBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFBYyxzQkFBQTtFQUNkLFVBQUE7RUFBWSxxQkFBQTtFQUNaLGNBQUE7RUFDQSxZQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQkFBQTtBQVdKOztBQVRFO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFDQTs7R0FBQTtFQUdBLGVBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUFjLHNCQUFBO0VBQ2QsVUFBQTtFQUFZLHFCQUFBO0VBQ1osY0FBQTtFQUNBLFlBQUE7RUFDQSwrQkFBQTtBQWNKOztBQVZFO0VBQ0U7SUFDRSxTQUFBO0VBYUo7QUFDRjs7QUFWRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQWtCLDZEQUFBO0FBYXRCOztBQVZFO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0FBYUo7O0FBVkU7RUFDRSxtQkFBQTtFQUNBLFdBQUE7QUFhSjs7QUFWRTs7RUFFRSxjQUFBO0FBYUo7O0FBVkU7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0FBYUo7O0FBWEE7RUFDRSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBY0Y7O0FBWEE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBY0Y7O0FBWkE7RUFDRSxtQkFBQTtFQUNBLHNCQUFBO0FBZUY7O0FBYkE7RUFDRSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFnQkY7O0FBZEE7RUFDRSxTQUFBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUFpQko7O0FBZkE7RUFDRSxTQUFBO0FBa0JGOztBQWhCQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFtQkY7O0FBakJBO0VBQ0UsZ0JBQUE7QUFvQkYiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIm5vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9mdW5jdGlvbnNcIjtcblxuQGltcG9ydCBcIm5vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy92YXJpYWJsZXNcIjtcblxuLmV4YW1wbGUtc3BhY2VyIHtcbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgfVxuICAubWF0LXRvb2xiYXIge1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5OyAvKiBGb3IgbWFjT1MvaU9TIFNhZmFyaSAqL1xuICAgIHRvcDogMDsgLyogU2V0cyB0aGUgc3RpY2t5IHRvb2xiYXIgdG8gYmUgb24gdG9wICovXG4gICAgei1pbmRleDogMTAwMDsgLyogRW5zdXJlIHRoYXQgeW91ciBhcHAncyBjb250ZW50IGRvZXNuJ3Qgb3ZlcmxhcCB0aGUgdG9vbGJhciAqL1xufVxuLmxlZnQtc2VjdGlvbiB7XG4gICAgbWF4LXdpZHRoOiAyNTBweCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAyNTBweCAhaW1wb3J0YW50O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDY0cHgpO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjY2M7XG59XG4uY2VudGVyLXNlY3Rpb24ge1xuICAgIG1heC13aWR0aDogaW5pdGlhbCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAyNTBweDtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbn1cbi5yaWdodC1zZWN0aW9uIHtcbiAgICBtYXgtd2lkdGg6IDMwMHB4ICFpbXBvcnRhbnQ7XG59XG4ubWF0LWdyaWQtbGlzdCB7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjRweCkgIWltcG9ydGFudDtcbn1cbi5sZWZ0LXNpZGViYXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDY1cHg7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzVweCk7XG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG4ubGVmdC1zaWRlYmFyLCAucmlnaHQtc2lkZWJhciB7XG4gICAgd2lkdGg6IDI2MHB4O1xufVxuLmxlZnQtc2lkZWJhcjpob3ZlciB7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG5cbn1cblxuLm91dGVyLXdyYXBwZXIge1xuICAgIHBhZGRpbmc6IDMwcHg7XG59XG4uY2VudGVyLWNvbnRlbnR7XG4gIGJvcmRlci1yaWdodDogJGJvcmRlci13aWR0aCBzb2xpZCAkZ3JheS0zMDA7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHsgXG4gICAgLmNlbnRlci1jb250ZW50IHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI1MHB4O1xuICAgIH1cbn1cbi5uYXYtc3Vie1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuLm5hdi13cmFwcGVyIHtcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcbn1cbi5saXN0LWdyb3VwLWl0ZW0ge1xuICAgIHBhZGRpbmctdG9wOiAwLjVyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcbn1cblxuXG5cbi5zaWRlYmFyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiBjYWxjKDUxcHggKyA2cmVtKTtcbiAgICAvKiBydGw6cmF3OlxuICAgIHJpZ2h0OiAwO1xuICAgICovXG4gICAgYm90dG9tOiAwO1xuICAgIC8qIHJ0bDpyZW1vdmUgKi9cbiAgICBsZWZ0OiAwO1xuICAgIHotaW5kZXg6IDEwMDsgLyogQmVoaW5kIHRoZSBuYXZiYXIgKi9cbiAgICBwYWRkaW5nOiAwOyAvKiBIZWlnaHQgb2YgbmF2YmFyICovXG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIGJvcmRlci1yaWdodDogJGJvcmRlci13aWR0aCBzb2xpZCAkZ3JheS0zMDA7XG4gICAgYmFja2dyb3VuZDogIzJiNGM4MTtcbiAgfVxuICAuc2lkZWJhcjIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDU1cHg7XG4gICAgLyogcnRsOnJhdzpcbiAgICByaWdodDogMDtcbiAgICAqL1xuICAgIC8qIHJ0bDpyZW1vdmUgKi9cbiAgICBsZWZ0OiAwO1xuICAgIHotaW5kZXg6IDEwMDsgLyogQmVoaW5kIHRoZSBuYXZiYXIgKi9cbiAgICBwYWRkaW5nOiAwOyAvKiBIZWlnaHQgb2YgbmF2YmFyICovXG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIGJvcmRlci1yaWdodDogJGJvcmRlci13aWR0aCBzb2xpZCAkZ3JheS0zMDA7XG4gIH1cbiAgXG4gIFxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcbiAgICAuc2lkZWJhciB7XG4gICAgICB0b3A6IDVyZW07XG4gICAgfVxuICB9XG4gIFxuICAuc2lkZWJhci1zdGlja3kge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDA7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNDhweCk7XG4gICAgcGFkZGluZy10b3A6IC41cmVtO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICBvdmVyZmxvdy15OiBhdXRvOyAvKiBTY3JvbGxhYmxlIGNvbnRlbnRzIGlmIHZpZXdwb3J0IGlzIHNob3J0ZXIgdGhhbiBjb250ZW50LiAqL1xuICB9XG5cbiAgLnNpZGViYXIgLm5hdi1saW5rIC5mZWF0aGVyIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgICBjb2xvcjogIzcyNzI3MjtcbiAgfVxuICBcbiAgLnNpZGViYXIgLm5hdi1saW5rLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogIzAwN2JmZjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuICBcbiAgLnNpZGViYXIgLm5hdi1saW5rOmhvdmVyIC5mZWF0aGVyLFxuICAuc2lkZWJhciAubmF2LWxpbmsuYWN0aXZlIC5mZWF0aGVyIHtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgfVxuICBcbiAgLnNpZGViYXItaGVhZGluZyB7XG4gICAgZm9udC1zaXplOiAuNzVyZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxuLmFkLWNvbnRhaW5lciB7XG4gIGZsZXg6IDAgMCAzMDBweDtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjBweCk7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zdGF0ZS1zZWxlY3R7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgY29sb3I6ICM3NTczNzM7XG4gIGJvcmRlci1yaWdodDogMDtcbiAgYm9yZGVyLWJvdHRvbTogMDtcbiAgYm9yZGVyLWNvbG9yOiAjZGVlMmU2O1xuICBoZWlnaHQ6IDNyZW07XG4gIG1heC1oZWlnaHQ6IDQ2cHg7XG59XG4ubGl0LWl0ZW0tbGluayB7XG4gIHBhZGRpbmctdG9wOiAwLjVyZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XG59XG4uc2lkZWJhcjIgLmN1c3RvbS1pbnB1dHtcbiAgYm9yZGVyLXJpZ2h0OiAwO1xuICBib3JkZXItY29sb3I6ICNkZWUyZTY7XG4gIGhlaWdodDogM3JlbTtcbiAgbWF4LWhlaWdodDogNDZweDtcbn1cbi5mb290ZXIge1xuICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogNXB4IDA7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxRDI2MkQ7XG4gICAgY29sb3I6ICNCQUM4RDM7XG4gICAgZm9udC1zaXplOiAwLjVyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICByaWdodDogMDtcbn1cbi5mb290ZXIgcCB7XG4gIG1hcmdpbjogMDtcbn1cbi5wb3dlci10aXRsZSBzbWFsbHtcbiAgZm9udC1zaXplOiAwLjY1cmVtO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBhZGRpbmctdG9wOiA3cHg7XG59XG4ucG93ZXItdGl0bGUgIGltZ3tcbiAgbWFyZ2luLXRvcDogLTVweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _app_services__WEBPACK_IMPORTED_MODULE_2__["AppServices"] }, { type: _angular_service_worker__WEBPACK_IMPORTED_MODULE_3__["SwUpdate"] }, { type: _check_for_update_service__WEBPACK_IMPORTED_MODULE_4__["CheckForUpdateService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.router */ "qb35");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/service-worker */ "Jho9");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _check_for_update_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./check-for-update.service */ "kW9T");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var ng2_adsense__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-adsense */ "Cvm2");
/* harmony import */ var _vaccine_tracker_vaccine_tracker_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./vaccine-tracker/vaccine-tracker.module */ "roKd");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.services */ "8Kc9");
/* harmony import */ var _filter_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./filter.pipe */ "i6q1");
/* harmony import */ var _daterangepicker_daterange_picker_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./daterangepicker/daterange-picker.component */ "2cyP");
/* harmony import */ var _daterangepicker_clickoutside_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./daterangepicker/clickoutside.directive */ "niuK");





















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_app_services__WEBPACK_IMPORTED_MODULE_13__["AppServices"], _check_for_update_service__WEBPACK_IMPORTED_MODULE_8__["CheckForUpdateService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _app_router__WEBPACK_IMPORTED_MODULE_5__["AppRouterModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _vaccine_tracker_vaccine_tracker_module__WEBPACK_IMPORTED_MODULE_12__["VaccineTrackerModule"],
            ng2_adsense__WEBPACK_IMPORTED_MODULE_11__["AdsenseModule"].forRoot(),
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_6__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].production }),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_6__["ServiceWorkerModule"].register('ngsw-worker.js', {
                enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].production,
                // Register the ServiceWorker as soon as the app is stable
                // or after 30 seconds (whichever comes first).
                registrationStrategy: 'registerWhenStable:30000'
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _filter_pipe__WEBPACK_IMPORTED_MODULE_14__["SearchPipe"],
        _daterangepicker_daterange_picker_component__WEBPACK_IMPORTED_MODULE_15__["NgbdDatepickerRangePopup"],
        _daterangepicker_clickoutside_directive__WEBPACK_IMPORTED_MODULE_16__["ClickOutsideDirective"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _app_router__WEBPACK_IMPORTED_MODULE_5__["AppRouterModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _vaccine_tracker_vaccine_tracker_module__WEBPACK_IMPORTED_MODULE_12__["VaccineTrackerModule"], ng2_adsense__WEBPACK_IMPORTED_MODULE_11__["AdsenseModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_6__["ServiceWorkerModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_6__["ServiceWorkerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _filter_pipe__WEBPACK_IMPORTED_MODULE_14__["SearchPipe"],
                    _daterangepicker_daterange_picker_component__WEBPACK_IMPORTED_MODULE_15__["NgbdDatepickerRangePopup"],
                    _daterangepicker_clickoutside_directive__WEBPACK_IMPORTED_MODULE_16__["ClickOutsideDirective"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _app_router__WEBPACK_IMPORTED_MODULE_5__["AppRouterModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _vaccine_tracker_vaccine_tracker_module__WEBPACK_IMPORTED_MODULE_12__["VaccineTrackerModule"],
                    ng2_adsense__WEBPACK_IMPORTED_MODULE_11__["AdsenseModule"].forRoot(),
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"],
                    _angular_service_worker__WEBPACK_IMPORTED_MODULE_6__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].production }),
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                    _angular_service_worker__WEBPACK_IMPORTED_MODULE_6__["ServiceWorkerModule"].register('ngsw-worker.js', {
                        enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].production,
                        // Register the ServiceWorker as soon as the app is stable
                        // or after 30 seconds (whichever comes first).
                        registrationStrategy: 'registerWhenStable:30000'
                    })
                ],
                providers: [_app_services__WEBPACK_IMPORTED_MODULE_13__["AppServices"], _check_for_update_service__WEBPACK_IMPORTED_MODULE_8__["CheckForUpdateService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
                entryComponents: [],
            }]
    }], null, null); })();


/***/ }),

/***/ "cxbk":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: true,
    baseUrl: 'https://cdn-api.co-vin.in/api/v2',
    dashboardResources: 'https://dashboard.cowin.gov.in'
};


/***/ }),

/***/ "i6q1":
/*!********************************!*\
  !*** ./src/app/filter.pipe.ts ***!
  \********************************/
/*! exports provided: SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPipe", function() { return SearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SearchPipe {
    transform(value, districtSearch, stateSearch) {
        if (!districtSearch && stateSearch === 'All') {
            return value;
        }
        else if (districtSearch && stateSearch === 'All') {
            return (value || []).filter(item => item.hasOwnProperty('district_name') && new RegExp(districtSearch, 'gi').test(item['district_name']));
        }
        else if (districtSearch && stateSearch !== 'All') {
            return (value || []).filter(item => item.hasOwnProperty('district_name') && new RegExp(districtSearch, 'gi').test(item['district_name'])
                && item.state_id === parseInt(stateSearch));
        }
        else if (!districtSearch && stateSearch !== 'All') {
            return (value || []).filter(item => item.hasOwnProperty('state_id') && item.state_id === parseInt(stateSearch));
        }
    }
}
SearchPipe.ɵfac = function SearchPipe_Factory(t) { return new (t || SearchPipe)(); };
SearchPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "search", type: SearchPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'search'
            }]
    }], null, null); })();


/***/ }),

/***/ "kW9T":
/*!*********************************************!*\
  !*** ./src/app/check-for-update.service.ts ***!
  \*********************************************/
/*! exports provided: CheckForUpdateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckForUpdateService", function() { return CheckForUpdateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/service-worker */ "Jho9");





class CheckForUpdateService {
    constructor(appRef, updates) {
        // Allow the app to stabilize first, before starting polling for updates with `interval()`.
        const appIsStable$ = appRef.isStable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])(isStable => isStable === true));
        const everySixHours$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(24 * 60 * 60 * 1000);
        const everySixHoursOnceAppIsStable$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["concat"])(appIsStable$, everySixHours$);
        everySixHoursOnceAppIsStable$.subscribe(() => {
            console.log("checking for update");
            updates.checkForUpdate();
        });
    }
}
CheckForUpdateService.ɵfac = function CheckForUpdateService_Factory(t) { return new (t || CheckForUpdateService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_service_worker__WEBPACK_IMPORTED_MODULE_3__["SwUpdate"])); };
CheckForUpdateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CheckForUpdateService, factory: CheckForUpdateService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckForUpdateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"] }, { type: _angular_service_worker__WEBPACK_IMPORTED_MODULE_3__["SwUpdate"] }]; }, null); })();


/***/ }),

/***/ "niuK":
/*!***********************************************************!*\
  !*** ./src/app/daterangepicker/clickoutside.directive.ts ***!
  \***********************************************************/
/*! exports provided: ClickOutsideDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClickOutsideDirective", function() { return ClickOutsideDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ClickOutsideDirective {
    constructor(_elementRef) {
        this._elementRef = _elementRef;
        this.clickOutside = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    onClick(event, targetElement) {
        if (!targetElement) {
            return;
        }
        const clickedInside = this._elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.clickOutside.emit(event);
        }
    }
}
ClickOutsideDirective.ɵfac = function ClickOutsideDirective_Factory(t) { return new (t || ClickOutsideDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
ClickOutsideDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ClickOutsideDirective, selectors: [["", "clickOutside", ""]], hostBindings: function ClickOutsideDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClickOutsideDirective_click_HostBindingHandler($event) { return ctx.onClick($event, $event.target); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("touchstart", function ClickOutsideDirective_touchstart_HostBindingHandler($event) { return ctx.onClick($event, $event.target); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, outputs: { clickOutside: "clickOutside" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClickOutsideDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[clickOutside]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { clickOutside: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:click', ['$event', '$event.target']]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:touchstart', ['$event', '$event.target']]
        }] }); })();


/***/ }),

/***/ "qb35":
/*!*******************************!*\
  !*** ./src/app/app.router.ts ***!
  \*******************************/
/*! exports provided: AppRouterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRouterModule", function() { return AppRouterModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");




const appRoutes = [{
        path: "vaccineTracker/district/:id",
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./vaccine-tracker/vaccine-tracker.module */ "roKd")).then(m => m.VaccineTrackerModule)
    }];
class AppRouterModule {
}
AppRouterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRouterModule });
AppRouterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppRouterModule_Factory(t) { return new (t || AppRouterModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes, { useHash: false })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRouterModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppRouterModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes, { useHash: false })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "roKd":
/*!***********************************************************!*\
  !*** ./src/app/vaccine-tracker/vaccine-tracker.module.ts ***!
  \***********************************************************/
/*! exports provided: VaccineTrackerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VaccineTrackerModule", function() { return VaccineTrackerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _vaccine_tracker_vaccine_tracker_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vaccine-tracker/vaccine-tracker.component */ "QB/e");
/* harmony import */ var _vaccine_tracker_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vaccine-tracker.router */ "HzKK");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/table */ "rEr+");






class VaccineTrackerModule {
}
VaccineTrackerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: VaccineTrackerModule });
VaccineTrackerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function VaccineTrackerModule_Factory(t) { return new (t || VaccineTrackerModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            primeng_table__WEBPACK_IMPORTED_MODULE_4__["TableModule"],
            _vaccine_tracker_router__WEBPACK_IMPORTED_MODULE_3__["VaccineTrackerRouterModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](VaccineTrackerModule, { declarations: [_vaccine_tracker_vaccine_tracker_component__WEBPACK_IMPORTED_MODULE_2__["VaccineTrackerComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        primeng_table__WEBPACK_IMPORTED_MODULE_4__["TableModule"],
        _vaccine_tracker_router__WEBPACK_IMPORTED_MODULE_3__["VaccineTrackerRouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VaccineTrackerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_vaccine_tracker_vaccine_tracker_component__WEBPACK_IMPORTED_MODULE_2__["VaccineTrackerComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    primeng_table__WEBPACK_IMPORTED_MODULE_4__["TableModule"],
                    _vaccine_tracker_router__WEBPACK_IMPORTED_MODULE_3__["VaccineTrackerRouterModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map