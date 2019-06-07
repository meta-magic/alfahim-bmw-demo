(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./projects/rina-lib/src/lib/components/appointmentdetails/appointment.confirmation.html":
/*!***********************************************************************************************!*\
  !*** ./projects/rina-lib/src/lib/components/appointmentdetails/appointment.confirmation.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<amexio-card-ce>\n  <amexio-header-ce>\n    <amexio-label size=\"medium-bold\">\n      THANK YOU\n    </amexio-label>\n  </amexio-header-ce>\n  <rina-step-box [active-index]=\"8\"></rina-step-box>\n  <amexio-body-ce [align]=\"'start'\">\n    <amexio-row>\n      <amexio-column size=\"3\"></amexio-column>\n      <amexio-column size=\"6\">\n        <amexio-label>{{appointmentMsg}}</amexio-label><br /><br />\n        <amexio-label>Service Location:</amexio-label><br />\n        <amexio-label>Emirates Motor Company</amexio-label><br />\n        <amexio-label>M5, intersection, 17th Street</amexio-label><br />\n        <amexio-label>Phone: +91.0987654321</amexio-label><br /><br />\n      </amexio-column>\n      <amexio-column size=\"3\"></amexio-column>\n    </amexio-row>\n  </amexio-body-ce>\n  <amexio-action-ce [align]=\"'flex-end'\" [border-top]=\"true\">\n    <amexio-button [label]=\"'Close'\" [type]=\"'theme-color'\" [tooltip]=\"'Close'\" [size]=\"'large'\" (onClick)=\"close($event)\">\n    </amexio-button>\n  </amexio-action-ce>\n</amexio-card-ce>\n"

/***/ }),

/***/ "./projects/rina-lib/src/lib/components/appointmentdetails/appointment.confirmation.ts":
/*!*********************************************************************************************!*\
  !*** ./projects/rina-lib/src/lib/components/appointmentdetails/appointment.confirmation.ts ***!
  \*********************************************************************************************/
/*! exports provided: AppoinmentConfirmationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppoinmentConfirmationComponent", function() { return AppoinmentConfirmationComponent; });
/* harmony import */ var projects_rina_lib_src_lib_services_alfahim_personal_details_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/rina-lib/src/lib/services/alfahim/personal.details.service */ "./projects/rina-lib/src/lib/services/alfahim/personal.details.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppoinmentConfirmationComponent = /** @class */ (function () {
    function AppoinmentConfirmationComponent(service) {
        this.service = service;
        this.onConfirm = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.serviceAvailibilityModel = this.service.getPeferredLocation();
    }
    AppoinmentConfirmationComponent.prototype.close = function (event) {
        this.onConfirm.emit(event);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], AppoinmentConfirmationComponent.prototype, "onConfirm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('appointment-msg'),
        __metadata("design:type", String)
    ], AppoinmentConfirmationComponent.prototype, "appointmentMsg", void 0);
    AppoinmentConfirmationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'appointment-confirmation',
            template: __webpack_require__(/*! ./appointment.confirmation.html */ "./projects/rina-lib/src/lib/components/appointmentdetails/appointment.confirmation.html")
        }),
        __metadata("design:paramtypes", [projects_rina_lib_src_lib_services_alfahim_personal_details_service__WEBPACK_IMPORTED_MODULE_0__["PersonalDetailsService"]])
    ], AppoinmentConfirmationComponent);
    return AppoinmentConfirmationComponent;
}());



/***/ }),

/***/ "./projects/rina-lib/src/lib/components/before-confirm/before.confirm.component.html":
/*!*******************************************************************************************!*\
  !*** ./projects/rina-lib/src/lib/components/before-confirm/before.confirm.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<amexio-card-ce>\n  <amexio-header-ce>\n    <amexio-label size=\"medium-bold\">\n      BEFORE YOU CONFIRM\n    </amexio-label>\n  </amexio-header-ce>\n  <rina-step-box [active-index]=\"6\"></rina-step-box>\n\n  <amexio-body-ce [align]=\"'start'\">\n    <amexio-label [size]=\"'medium'\">We've got some iconic Lifestyle Accessories just for you!</amexio-label>\n    <amexio-layout-columns [fit]=\"false\" [orientation]=\"'horizontal'\" [border]=\"false\" [alignment]=\"'start'\">\n      <amexio-layout-item *ngFor=\"let accessiories of accessioriesData\" style=\"min-width:24%;\">\n        <content-card [image-url]=\"'https://demo.amexio.org/alfahim/'+accessiories.imageUrl\" [description]=\"accessiories.description\">\n          <amexio-button [label]=\"'SHOW ME'\" [type]=\"'green'\" [tooltip]=\"'show me'\">\n          </amexio-button>\n        </content-card>\n      </amexio-layout-item>\n    </amexio-layout-columns>\n  </amexio-body-ce>\n  <amexio-action-ce [align]=\"'flex-end'\" [border-top]=\"true\">\n    <amexio-toolbar>\n      <amexio-toolbar-item position-right [seperator-position]=\"'right'\">\n        <amexio-button [label]=\"'Cancel'\" [type]=\"'theme-backgroundcolor'\" [tooltip]=\"'cancel'\" [size]=\"'large'\" (onClick)=\"onCancel($event)\">\n        </amexio-button>\n      </amexio-toolbar-item>\n      <amexio-toolbar-item position-right style=\"padding-left: 5px;\">\n        <amexio-button [label]=\"'Back'\" [type]=\"'theme-backgroundcolor'\" [tooltip]=\"'Back'\" [size]=\"'large'\" (onClick)=\"onBackHandle($event)\">\n        </amexio-button>\n        <amexio-button [label]=\"'SKIP'\" [type]=\"'theme-color'\" [tooltip]=\"'skip'\" [size]=\"'large'\" (onClick)=\"onClickHandle($event)\">\n        </amexio-button>\n      </amexio-toolbar-item>\n    </amexio-toolbar>\n  </amexio-action-ce>\n</amexio-card-ce>\n"

/***/ }),

/***/ "./projects/rina-lib/src/lib/components/before-confirm/before.confirm.component.ts":
/*!*****************************************************************************************!*\
  !*** ./projects/rina-lib/src/lib/components/before-confirm/before.confirm.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: BeforeConfirmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeforeConfirmComponent", function() { return BeforeConfirmComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by dattaram on 24/1/19.
 */

var BeforeConfirmComponent = /** @class */ (function () {
    function BeforeConfirmComponent() {
        this.accessioriesData = [];
        this.onBeforeConfirmClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onBeforeBack = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.steps = [];
        this.steps = ['fa-user ', 'fa-home', 'fa-shopping-cart', 'fa fa-money'];
    }
    BeforeConfirmComponent.prototype.ngOnInit = function () {
        this.accessioriesData = [
            {
                "imageUrl": "assets/images/bmwwatch.jpg",
                "description": "Men's Black Edition Business chronograph watch. Stainless steel case with black PVD coating. Black dial with blue highlights. Stainless steel hands with luminous detail. Stainless steel bracelet strap with black PVD coating. Stopwatch function. Water-resistant to 10 ATM. Diameter 43 mm. Ronda 5021 quartz chronograph movement. Swiss made."
            },
            {
                "imageUrl": "assets/images/bmwcap.jpg",
                "description": "Basic cap. 100% cotton. Metal clasp for adjusting fit. Black B6 695 2242. Black/white B6 695 2243. Navy B6 695 2244"
            },
            {
                "imageUrl": "assets/images/bmwcar.jpg",
                "description": "The annual endurance race of the Mille Miglia attracted a very impressive group of competitors in 1955. Mercedes-Benz had big plans up its sleeve, so it sent over a fleet of four racing cars, all of the type 300 SLR, which was to make its debut here. Piloted by world-famous top drivers, the 300 SLR was intended to be a passport to victory over such hard competitors as Ferrari, Maserati, and Aston Martin. Half of Italy was on its feet to follow the national racing highlight of the year."
            },
            {
                "imageUrl": "assets/images/bmwkey.png",
                "description": "This practical key ring in robust stainless steel echoes the illuminated version of the central Mercedes star. The black PVD-coated background features a diamond pattern while the inner contours of the Mercedes star have a luminous finish which, after exposure to daylight or an artificial light source, glows blue in the dark for up to four hours. The key ring, which measures approx. 9 cm in length, features a flat split ring, engraved with Mercedes-Benz, and three mini split rings for quick removal and replacement of individual keys."
            }
        ];
    };
    BeforeConfirmComponent.prototype.onClickHandle = function (event) {
        this.onBeforeConfirmClick.emit(event);
    };
    BeforeConfirmComponent.prototype.onBackHandle = function (event) {
        this.onBeforeBack.emit(event);
    };
    BeforeConfirmComponent.prototype.onCancel = function (event) {
        this.onClose.emit(event);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], BeforeConfirmComponent.prototype, "onBeforeConfirmClick", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], BeforeConfirmComponent.prototype, "onBeforeBack", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], BeforeConfirmComponent.prototype, "onClose", void 0);
    BeforeConfirmComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'before-confirm',
            template: __webpack_require__(/*! ./before.confirm.component.html */ "./projects/rina-lib/src/lib/components/before-confirm/before.confirm.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], BeforeConfirmComponent);
    return BeforeConfirmComponent;
}());



/***/ }),

/***/ "./projects/rina-lib/src/lib/components/confirmation/service.confirmation.html":
/*!*************************************************************************************!*\
  !*** ./projects/rina-lib/src/lib/components/confirmation/service.confirmation.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-spinner [show]=\"showLoader\" [type]=\"'rectanglebounce'\" [vertical-position]=\"'center'\" [horizontal-position]=\"'center'\" [color]=\"'yellow'\">\n</amexio-spinner>\n\n\n\n<amexio-card-ce class=\"serviceconf\">\n  <amexio-header-ce>\n    <amexio-label size=\"medium-bold\">\n      PLEASE CONFIRM DETAILS\n    </amexio-label>\n  </amexio-header-ce>\n  <rina-step-box [active-index]=\"7\"></rina-step-box>\n  <amexio-body-ce [align]=\"'start'\">\n    <amexio-layout-columns [orientation]=\"'horizontal'\" [border]=\"false\" [alignment]=\"'end'\">\n            <table>\n              <tr style=\"vertical-align: top;text-align: left\" *ngFor=\"let data of serviceConfirmData\">\n                <td>\n                  <b>{{data.fieldName}}</b>\n                </td>\n                <td style=\"word-break: break-all;max-width: 250px\">\n                  {{data.fieldValue}}\n                </td>\n              </tr>\n\n              <tr style=\"vertical-align: top;text-align: left\">\n                <td>\n                  <b>Service Type</b>\n                </td>\n                <td style=\"word-break: break-all;max-width: 250px\">\n                  <ng-container *ngIf=\"extraServiceData && extraServiceData.selectedJobType\">\n                    <ng-container *ngFor=\"let type of extraServiceData.selectedJobType; let index=index\">\n                      {{index+1}}. {{type.typeName}}<br>\n                    </ng-container>\n                  </ng-container>\n                </td>\n              </tr>\n\n              <tr style=\"vertical-align: top;text-align: left\" *ngIf=\"extraServiceData\">\n                <td>\n                  <b>Remarks</b>\n                </td>\n                <td style=\"word-break: break-all;max-width: 250px\">\n                    {{extraServiceData.remarks}}\n                </td>\n              </tr>\n            </table>\n      <amexio-layout-item [fit]=\"true\">\n        <amexio-google-map [initial-zoom-level]=\"8\" [initial-lat]=\"24.4086\" [initial-lng]=\"55.2701\" [height]=\"'100%'\" [data]=\"serviceStations\" [google-map-key]=\"'AIzaSyDKSPX97z-ndeh_Mgq3xkaML2Kp9AwHA9s'\">\n        </amexio-google-map>\n      </amexio-layout-item>\n    </amexio-layout-columns>\n\n  </amexio-body-ce>\n  <amexio-action-ce [align]=\"'flex-end'\" [border-top]=\"true\">\n    <amexio-toolbar>\n      <amexio-toolbar-item position-right [seperator-position]=\"'right'\">\n        <amexio-button [label]=\"'Cancel'\" [type]=\"'theme-backgroundcolor'\" [tooltip]=\"'cancel'\" [size]=\"'large'\" (onClick)=\"onCancel($event)\">\n        </amexio-button>\n      </amexio-toolbar-item>\n      <amexio-toolbar-item position-right style=\"padding-left: 5px;\">\n        <amexio-button [label]=\"'Back'\" (onClick)=\"onBackClick()\" [type]=\"'theme-backgroundcolor'\" [tooltip]=\"'Proceed to preferred location'\" [size]=\"'large'\">\n        </amexio-button>\n        <amexio-button [label]=\"'Confirm'\" [type]=\"'theme-color'\" [tooltip]=\"'Confirm'\" [size]=\"'large'\" (onClick)=\"confirmAppointment($event)\">\n        </amexio-button>\n      </amexio-toolbar-item>\n    </amexio-toolbar>\n  </amexio-action-ce>\n</amexio-card-ce>\n\n"

/***/ }),

/***/ "./projects/rina-lib/src/lib/components/confirmation/service.confirmation.ts":
/*!***********************************************************************************!*\
  !*** ./projects/rina-lib/src/lib/components/confirmation/service.confirmation.ts ***!
  \***********************************************************************************/
/*! exports provided: ServiceConfirmationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceConfirmationComponent", function() { return ServiceConfirmationComponent; });
/* harmony import */ var projects_rina_lib_src_lib_services_alfahim_personal_details_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/rina-lib/src/lib/services/alfahim/personal.details.service */ "./projects/rina-lib/src/lib/services/alfahim/personal.details.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var projects_rina_lib_src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/rina-lib/src/public_api */ "./projects/rina-lib/src/public_api.ts");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _model_shared_personal_details_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../model/shared/personal.details.model */ "./projects/rina-lib/src/lib/model/shared/personal.details.model.ts");
/* harmony import */ var _services_shared_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/shared/http.service */ "./projects/rina-lib/src/lib/services/shared/http.service.ts");
/* harmony import */ var _model_shared_propertygrid_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../model/shared/propertygrid.model */ "./projects/rina-lib/src/lib/model/shared/propertygrid.model.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ServiceConfirmationComponent = /** @class */ (function () {
    function ServiceConfirmationComponent(personalDetailsService, datePipe, _httpService) {
        this.personalDetailsService = personalDetailsService;
        this.datePipe = datePipe;
        this._httpService = _httpService;
        this.serviceLocations = [];
        this.timeSlots = [];
        this.assitantPerson = [];
        this.orderConfirm = true;
        this.serviceStations = [];
        this.extraServiceData = null;
        this.showLoader = false;
        this.serviceConfirmData = [];
        this.onPrevious = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onConfirm = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.personalDetails = new _model_shared_personal_details_model__WEBPACK_IMPORTED_MODULE_4__["PersonalDetails"]();
        if (this.personalDetailsService.getPersonalDetails()) {
            this.personalDetails = this.personalDetailsService.getPersonalDetails();
        }
        this.extraServiceData = this.personalDetailsService.getExtraServiceData();
    }
    ServiceConfirmationComponent.prototype.createServiceDataStructure = function () {
        this.serviceConfirmData = [];
        this.serviceConfirmData.push(new _model_shared_propertygrid_model__WEBPACK_IMPORTED_MODULE_6__["PropertyGridModel"]('Name', this.personalDetails.firstName + ' ' + this.personalDetails.surname));
        this.serviceConfirmData.push(new _model_shared_propertygrid_model__WEBPACK_IMPORTED_MODULE_6__["PropertyGridModel"]('Booking Date', this.datePipe.transform(this.serviceModel.selectedSlotDate, 'MMM dd, yyyy')));
        this.serviceConfirmData.push(new _model_shared_propertygrid_model__WEBPACK_IMPORTED_MODULE_6__["PropertyGridModel"]('Booking Time', this.serviceModel.selectedSlot.toString()));
        this.serviceConfirmData.push(new _model_shared_propertygrid_model__WEBPACK_IMPORTED_MODULE_6__["PropertyGridModel"]('Assitant Name', this.serviceModel.assitantPersonName));
        this.serviceConfirmData.push(new _model_shared_propertygrid_model__WEBPACK_IMPORTED_MODULE_6__["PropertyGridModel"]('Phone no', this.personalDetails.phone));
        this.serviceConfirmData.push(new _model_shared_propertygrid_model__WEBPACK_IMPORTED_MODULE_6__["PropertyGridModel"]('Email Id', this.personalDetails.email));
    };
    ServiceConfirmationComponent.prototype.ngOnInit = function () {
        if (this.serviceModel) {
            this.loadData();
        }
        this.serviceStations = [];
        this.serviceStations.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_3__["GoogleMapOverlays"](Number(this.serviceModel.locationModel.latitude), Number(this.serviceModel.locationModel.longitude), this.serviceModel.locationName + ', UAE', true, 'https://testapi.amexio.org/api/v5.5/assets/images/googlemap/bmwmap.png', { country: 'United Arab Emirates', capital: 'Abu Dhabi' }));
        this.createServiceDataStructure();
    };
    ServiceConfirmationComponent.prototype.confirmAppointment = function (personalDetails) {
        var _this = this;
        this.showLoader = true;
        var response;
        var requestBody = {
            'profileDetails': this.personalDetailsService.getPersonalDetails(),
            'orderDetails': this.personalDetailsService.getPeferredLocation()
        };
        this._httpService.post('booking/confirm', 'post', requestBody).subscribe(function (res) {
            response = res;
        }, function (err) {
            _this.showLoader = false;
        }, function () {
            if (response.success) {
                _this.showLoader = false;
                _this.onConfirm.emit(personalDetails);
            }
            else {
                _this.showLoader = false;
            }
        });
    };
    ServiceConfirmationComponent.prototype.onBackClick = function () {
        this.onPrevious.emit(this.serviceModel);
    };
    ServiceConfirmationComponent.prototype.close = function (event) {
        this.orderConfirm = false;
    };
    ServiceConfirmationComponent.prototype.loadData = function () {
        this.loadLocations();
        this.loadAssitants();
        this.loadWorkingSlots();
    };
    ServiceConfirmationComponent.prototype.loadWorkingSlots = function () {
        this.timeSlots = new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_3__["TimeUtil"]().workingslot1();
    };
    ServiceConfirmationComponent.prototype.loadAssitants = function () {
        var _this = this;
        var response;
        this.personalDetailsService.getAssitantList(this.serviceModel.location).subscribe(function (res) {
            response = res;
        }, 
        // tslint:disable-next-line:no-shadowed-variable
        function (error) {
            console.log('Invalid url');
        }, function () {
            _this.assitantPerson = response;
        });
    };
    ServiceConfirmationComponent.prototype.loadLocations = function () {
        var _this = this;
        var response;
        this.personalDetailsService.getLocations().subscribe(function (res) {
            response = res;
        }, 
        // tslint:disable-next-line:no-shadowed-variable
        function (error) {
            console.log('Invalid url');
        }, function () {
            _this.serviceLocations = response;
        });
    };
    ServiceConfirmationComponent.prototype.onCancel = function (event) {
        this.onClose.emit(event);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('service-model'),
        __metadata("design:type", projects_rina_lib_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ServiceAvailibilityModel"])
    ], ServiceConfirmationComponent.prototype, "serviceModel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ServiceConfirmationComponent.prototype, "onPrevious", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ServiceConfirmationComponent.prototype, "onConfirm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ServiceConfirmationComponent.prototype, "onClose", void 0);
    ServiceConfirmationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'service-confirmation',
            template: __webpack_require__(/*! ./service.confirmation.html */ "./projects/rina-lib/src/lib/components/confirmation/service.confirmation.html")
        }),
        __metadata("design:paramtypes", [projects_rina_lib_src_lib_services_alfahim_personal_details_service__WEBPACK_IMPORTED_MODULE_0__["PersonalDetailsService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"],
            _services_shared_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]])
    ], ServiceConfirmationComponent);
    return ServiceConfirmationComponent;
}());



/***/ }),

/***/ "./projects/rina-lib/src/lib/components/content-card/content.card.component.html":
/*!***************************************************************************************!*\
  !*** ./projects/rina-lib/src/lib/components/content-card/content.card.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<amexio-card-ce>\n  <amexio-body-ce [align]=\"'start'\">\n    <amexio-layout-columns [border]=\"false\" [orientation]=\"'vertical'\" [alignment]=\"'space-between'\">\n      <amexio-layout-item >\n        <amexio-layout-columns [border]=\"false\" [orientation]=\"'horizontal'\" [alignment]=\"'center'\">\n          <amexio-layout-item [ngClass]=\"{'content-card': description}\">\n            <amexio-image [path]=\"imageUrl\">\n            </amexio-image>\n            <br/>\n            <amexio-label [size]=\"'medium-bold'\" *ngIf=\"title\">{{title}}</amexio-label>\n          </amexio-layout-item>\n        </amexio-layout-columns>\n      </amexio-layout-item>\n\n      <amexio-layout-item style=\"max-height: 200px; overflow: auto;\">\n        <rina-property-grid *ngIf=\"propertyData.length > 0\" [key-value-data]=\"propertyData\" [has-border]=\"false\"></rina-property-grid>\n        <p *ngIf=\"description\">{{description}}</p>\n      </amexio-layout-item>\n    </amexio-layout-columns>\n  </amexio-body-ce>\n  <amexio-action-ce [align]=\"'flex-end'\" [border-top]=\"true\">\n    <ng-content></ng-content>\n  </amexio-action-ce>\n</amexio-card-ce>\n"

/***/ }),

/***/ "./projects/rina-lib/src/lib/components/content-card/content.card.component.ts":
/*!*************************************************************************************!*\
  !*** ./projects/rina-lib/src/lib/components/content-card/content.card.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ContentCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentCardComponent", function() { return ContentCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/**
 * Created by dattaram on 24/1/19.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContentCardComponent = /** @class */ (function () {
    function ContentCardComponent() {
        this.propertyData = [];
    }
    ContentCardComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('image-url'),
        __metadata("design:type", String)
    ], ContentCardComponent.prototype, "imageUrl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('title'),
        __metadata("design:type", String)
    ], ContentCardComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('description'),
        __metadata("design:type", String)
    ], ContentCardComponent.prototype, "description", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('property-data'),
        __metadata("design:type", Array)
    ], ContentCardComponent.prototype, "propertyData", void 0);
    ContentCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'content-card',
            template: __webpack_require__(/*! ./content.card.component.html */ "./projects/rina-lib/src/lib/components/content-card/content.card.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], ContentCardComponent);
    return ContentCardComponent;
}());



/***/ }),

/***/ "./projects/rina-lib/src/lib/components/customer-vehicle-list/customer.vehiclelist.component.html":
/*!********************************************************************************************************!*\
  !*** ./projects/rina-lib/src/lib/components/customer-vehicle-list/customer.vehiclelist.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<amexio-card-ce>\n  <amexio-header-ce>\n    <amexio-label size=\"medium-bold\">\n      QUICK BOOKING\n    </amexio-label>\n  </amexio-header-ce>\n  <amexio-body-ce [align]=\"'start'\">\n    <amexio-row>\n      <amexio-column [size]=\"12\">\n        <amexio-label [size]=\"'small-bold'\"> Please select vehicle you would like to get serviced: </amexio-label>\n      </amexio-column><br/>\n    </amexio-row>\n    <amexio-row>\n      <amexio-column [fit]=\"true\" [size]=\"4\" *ngFor=\"let vehicle of contentCardData\">\n        <content-card [title]=\"vehicle.title\" [image-url]=\"vehicle.imageUrl\" [property-data]=\"vehicle.propertyData\">\n          <div *ngIf=\"vehicle.vehicleMetadata.bu === 'CME'\">\n            <amexio-label [font-color]=\"'red'\">Sorry, we are not accepting Service Bookings for CME Business Unit.</amexio-label>\n          </div>\n          <div *ngIf=\"vehicle.vehicleMetadata.bu != 'CME'\" class=\"inputgroup from-group\">\n            <label for=\"{{vehicle.vehicleId}}\" [attr.aria-checked]=\"vehicle.selected\" [attr.aria-disabled]=\"(vehicle.vehicleMetadata.bu === 'CME')\" class=\"input-box-container\" style=\"padding-bottom:0px !important; margin: 5px !important\" (click)=\"selectVehicle(vehicle)\">\n              Select Vehicle\n              <input  style=\"top:0; left:0\" id=\"{{vehicle.vehicleId}}\" type=\"radio\"\n                      name=\"selectvehicle\" [value]=\"vehicle.selected\"\n                      [checked]=\"vehicle.selected\">\n\n              <span class=\"input-box-radiobox-label\"></span>\n            </label>\n          </div>\n        </content-card>\n      </amexio-column>\n    </amexio-row>\n\n  </amexio-body-ce>\n  <amexio-action-ce [align]=\"'flex-end'\" [border-top]=\"true\">\n    <amexio-toolbar>\n      <amexio-toolbar-item position-right [seperator-position]=\"'right'\">\n        <amexio-button [label]=\"'Cancel'\" [type]=\"'theme-backgroundcolor'\" [tooltip]=\"'cancel'\" [size]=\"'large'\" (onClick)=\"onCancel($event)\">\n        </amexio-button>\n      </amexio-toolbar-item>\n      <amexio-toolbar-item position-right style=\"padding-left: 5px;\">\n        <amexio-button [label]=\"'Back'\" [type]=\"'theme-backgroundcolor'\" [tooltip]=\"'Back'\" [size]=\"'large'\" (onClick)=\"onBackHandle($event)\">\n        </amexio-button>\n        <amexio-button [label]=\"'Next'\" [disabled]=\"selectedVehicle === null ? true : false\" [type]=\"'theme-color'\" [tooltip]=\"'Proceed to preferred location'\" [size]=\"'large'\" (onClick)=\"onClickHandle()\">\n        </amexio-button>\n      </amexio-toolbar-item>\n    </amexio-toolbar>\n  </amexio-action-ce>\n</amexio-card-ce>\n"

/***/ }),

/***/ "./projects/rina-lib/src/lib/components/customer-vehicle-list/customer.vehiclelist.component.ts":
/*!******************************************************************************************************!*\
  !*** ./projects/rina-lib/src/lib/components/customer-vehicle-list/customer.vehiclelist.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: CustomerVehicleListComponent, ContentCardData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerVehicleListComponent", function() { return CustomerVehicleListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentCardData", function() { return ContentCardData; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _rinaalfahim_src_app_models_customer_profile_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../rinaalfahim/src/app/models/customer.profile.model */ "./projects/rinaalfahim/src/app/models/customer.profile.model.ts");
/* harmony import */ var _model_shared_propertygrid_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/shared/propertygrid.model */ "./projects/rina-lib/src/lib/model/shared/propertygrid.model.ts");
/* harmony import */ var _model_shared_personal_details_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/shared/personal.details.model */ "./projects/rina-lib/src/lib/model/shared/personal.details.model.ts");
/* harmony import */ var _services_alfahim_personal_details_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/alfahim/personal.details.service */ "./projects/rina-lib/src/lib/services/alfahim/personal.details.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by dattaram on 23/1/19.
 */





var CustomerVehicleListComponent = /** @class */ (function () {
    function CustomerVehicleListComponent(_personalDetailsService) {
        this._personalDetailsService = _personalDetailsService;
        this.contentCardData = [];
        this.onVehicleListNext = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onBack = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.selectedVehicle = null;
        this.selected = false;
    }
    CustomerVehicleListComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.customerProfile && this.customerProfile.vehicles.length > 0) {
            this.customerProfile.vehicles.forEach(function (vehicle) {
                _this.contentCardData.push(new ContentCardData(vehicle.vehicleDetail.image, vehicle.vehicleDetail.modelName, _this.createVehiclePropertyStructure(vehicle), vehicle));
            });
        }
    };
    CustomerVehicleListComponent.prototype.selectVehicle = function (vehicle) {
        this.contentCardData.forEach(function (veh) {
            veh.selected = false;
        });
        vehicle.selected = true;
        if (vehicle.selected) {
            this.selectedVehicle = vehicle;
        }
        else {
            this.selectedVehicle = null;
        }
        this._personalDetailsService.setSelectedVehicleData(vehicle);
    };
    CustomerVehicleListComponent.prototype.createVehiclePropertyStructure = function (vehicle) {
        var vehicleKeyValuedata = [];
        vehicleKeyValuedata.push(new _model_shared_propertygrid_model__WEBPACK_IMPORTED_MODULE_2__["PropertyGridModel"]('Model Year', vehicle.vehicleDetail.modelYear));
        vehicleKeyValuedata.push(new _model_shared_propertygrid_model__WEBPACK_IMPORTED_MODULE_2__["PropertyGridModel"]('License Plate', vehicle.registrationNo));
        return vehicleKeyValuedata;
    };
    CustomerVehicleListComponent.prototype.onClickHandle = function () {
        this.onVehicleListNext.emit(this.createPersonalDetails());
    };
    CustomerVehicleListComponent.prototype.createPersonalDetails = function () {
        var personalDetails = new _model_shared_personal_details_model__WEBPACK_IMPORTED_MODULE_3__["PersonalDetails"]();
        personalDetails.firstName = this.customerProfile.firstName;
        personalDetails.surname = this.customerProfile.lastName;
        personalDetails.email = this.customerProfile.email;
        personalDetails.phone = this.customerProfile.mobile;
        personalDetails.perferredContact = this.customerProfile.preferredModeOfContact;
        if (this.selectedVehicle != null) {
            personalDetails.vehicleType = this.selectedVehicle.vehicleMetadata.vehicleDetail.vehicleClass;
            personalDetails.modelYear = this.selectedVehicle.vehicleMetadata.vehicleDetail.modelYear;
            personalDetails.registrationNumber = this.selectedVehicle.vehicleMetadata.registrationNo;
        }
        return personalDetails;
    };
    CustomerVehicleListComponent.prototype.onBackHandle = function (event) {
        this.onBack.emit(event);
    };
    CustomerVehicleListComponent.prototype.onCancel = function (event) {
        this.onClose.emit(event);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('customer-profile'),
        __metadata("design:type", _rinaalfahim_src_app_models_customer_profile_model__WEBPACK_IMPORTED_MODULE_1__["CustomerProfile"])
    ], CustomerVehicleListComponent.prototype, "customerProfile", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CustomerVehicleListComponent.prototype, "onVehicleListNext", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CustomerVehicleListComponent.prototype, "onBack", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CustomerVehicleListComponent.prototype, "onClose", void 0);
    CustomerVehicleListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'customer-vehicle-list',
            template: __webpack_require__(/*! ./customer.vehiclelist.component.html */ "./projects/rina-lib/src/lib/components/customer-vehicle-list/customer.vehiclelist.component.html")
        }),
        __metadata("design:paramtypes", [_services_alfahim_personal_details_service__WEBPACK_IMPORTED_MODULE_4__["PersonalDetailsService"]])
    ], CustomerVehicleListComponent);
    return CustomerVehicleListComponent;
}());

var ContentCardData = /** @class */ (function () {
    function ContentCardData(_imageUrl, _title, _propertyData, _vehicleMetadata) {
        this.propertyData = [];
        this.imageUrl = _imageUrl;
        this.title = _title;
        this.propertyData = _propertyData;
        this.selected = false;
        this.vehicleMetadata = _vehicleMetadata;
    }
    return ContentCardData;
}());



/***/ }),

/***/ "./projects/rina-lib/src/lib/components/preferred-location/preferred-location.component.html":
/*!***************************************************************************************************!*\
  !*** ./projects/rina-lib/src/lib/components/preferred-location/preferred-location.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<amexio-card-ce>\n  <amexio-header-ce>\n    <amexio-label size=\"medium-bold\">\n      Preferred location\n    </amexio-label>\n  </amexio-header-ce>\n  <rina-step-box [active-index]=\"4\"></rina-step-box>\n  <amexio-body-ce [align]=\"'start'\">\n\n    <service-availiblity-lib #formgroup [service-model]=\"serviceModel\" [start-time]=\"10\" [end-time]=\"15\"></service-availiblity-lib>\n\n  </amexio-body-ce>\n\n  <amexio-action-ce [align]=\"'flex-end'\" [border-top]=\"true\">\n    <amexio-toolbar>\n      <amexio-toolbar-item position-right>\n        <div class=\"amexio-checkbox-style\">\n          <amexio-checkbox [field-label]=\"'Notify SA'\" [(ngModel)]=\"serviceModel.isNotifySA\">\n          </amexio-checkbox>\n        </div>\n\n      </amexio-toolbar-item>\n      <amexio-toolbar-item position-right [seperator-position]=\"'right'\">\n        <amexio-button [label]=\"'Cancel'\" [type]=\"'theme-backgroundcolor'\" [tooltip]=\"'cancel'\" [size]=\"'large'\" (onClick)=\"onCancel($event)\">\n        </amexio-button>\n      </amexio-toolbar-item>\n      <amexio-toolbar-item position-right style=\"padding-left: 5px;\">\n        <amexio-button [label]=\"'Back'\" [type]=\"'theme-backgroundcolor'\" [tooltip]=\"'Proceed to personal profile'\" [size]=\"'large'\" (onClick)=\"backClick($event)\">\n        </amexio-button>\n      </amexio-toolbar-item>\n      <amexio-toolbar-item position-right>\n        <amexio-button [label]=\"'Schedule'\" [disabled]=\"!this.serviceModel.isValidate()\" [type]=\"'theme-color'\" [tooltip]=\"'Proceed to preferred location'\" [size]=\"'large'\" (onClick)=\"scheduleAppointment()\">\n        </amexio-button>\n      </amexio-toolbar-item>\n    </amexio-toolbar>\n  </amexio-action-ce>\n\n</amexio-card-ce>\n"

/***/ }),

/***/ "./projects/rina-lib/src/lib/components/preferred-location/preferred.location.component.ts":
/*!*************************************************************************************************!*\
  !*** ./projects/rina-lib/src/lib/components/preferred-location/preferred.location.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: PreferredLocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreferredLocationComponent", function() { return PreferredLocationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_service_availiblity_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/service.availiblity.model */ "./projects/rina-lib/src/lib/model/service.availiblity.model.ts");
/**
 * Created by dattaram on 18/1/19.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PreferredLocationComponent = /** @class */ (function () {
    function PreferredLocationComponent() {
        this.secondaryButton = 'Back';
        this.onNext = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onPrevious = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.serviceModel = new _model_service_availiblity_model__WEBPACK_IMPORTED_MODULE_1__["ServiceAvailibilityModel"]();
    }
    PreferredLocationComponent.prototype.ngOnInit = function () { };
    PreferredLocationComponent.prototype.scheduleAppointment = function () {
        if (this.serviceModel.appointmentDate) {
            var todayDate = new Date();
            this.serviceModel.serviceTimeLeft = Math.round(Math.abs((this.serviceModel.selectedSlotDate.getTime() - todayDate.getTime()) / (1000 * 60 * 60 * 24)));
        }
        this.onNext.emit(this.serviceModel);
    };
    PreferredLocationComponent.prototype.backClick = function (event) {
        this.onPrevious.emit(event);
    };
    PreferredLocationComponent.prototype.onCancel = function (event) {
        this.onClose.emit(event);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('service-model'),
        __metadata("design:type", _model_service_availiblity_model__WEBPACK_IMPORTED_MODULE_1__["ServiceAvailibilityModel"])
    ], PreferredLocationComponent.prototype, "serviceModel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('Secondary-button'),
        __metadata("design:type", Object)
    ], PreferredLocationComponent.prototype, "secondaryButton", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PreferredLocationComponent.prototype, "onNext", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PreferredLocationComponent.prototype, "onPrevious", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PreferredLocationComponent.prototype, "onClose", void 0);
    PreferredLocationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'preferred-location',
            template: __webpack_require__(/*! ./preferred-location.component.html */ "./projects/rina-lib/src/lib/components/preferred-location/preferred-location.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], PreferredLocationComponent);
    return PreferredLocationComponent;
}());



/***/ }),

/***/ "./projects/rina-lib/src/lib/components/property-grid/propertygrid.component.html":
/*!****************************************************************************************!*\
  !*** ./projects/rina-lib/src/lib/components/property-grid/propertygrid.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-card [class.remove-border]=\"!hasBorder\" [header]=\"false\" [footer]=\"false\">\n    <amexio-body class=\"property-style\">\n          <div *ngIf=\"hasRadio && hasRadioTitle && hasRadioTitleData\"  class=\"inputgroup from-group\">\n            <label [ngClass]=\"{'disabled-Style': hasRadioTitleData.disabled}\" for=\"{{hasRadioTitleData.title}}\" [attr.aria-checked]=\"hasRadioTitleData.selected\"   class=\"input-box-container\" style=\"padding-bottom:0px !important;\" >\n              <b>{{hasRadioTitleData.title}}</b>\n              <input  [attr.disabled]=\"hasRadioTitleData.disabled ? true: null\" (click)=\"selectRadio(hasRadioTitleData)\"  style=\"top:0; left:0\" id=\"{{hasRadioTitleData.title}}\" type=\"radio\"\n                      name=\"selectTitle\" [value]=\"hasRadioTitleData.selected\"\n                      [checked]=\"hasRadioTitleData.selected ? true : null\">\n\n              <span class=\"input-box-radiobox-label\"></span>\n            </label>\n          </div>\n          <div *ngIf=\"!hasRadio && hasRadioTitleData\">\n            <b>{{hasRadioTitleData.title}}</b>\n          </div>\n\n      <ng-container *ngIf=\"data && data.length > 0; else elseBlock\">\n        <amexio-layout-columns [orientation]=\"'horizontal'\" [border]=\"false\" [alignment]=\"'end'\">\n            <amexio-layout-item style=\"width: 20%\" *ngIf=\"hasImage\">\n              <amexio-image [path]=\"image\" [filter]=\"'round'\">\n              </amexio-image>\n            </amexio-layout-item>\n            <amexio-layout-item [fit]=\"true\">\n                <table style=\"padding: 2px;\">\n                  <tr *ngFor=\"let item of data\">\n                    <td>{{item.fieldName}}:</td>\n                    <td style=\"word-break: break-all;\">{{item.fieldValue}}</td>\n                  </tr>\n                </table>\n\n            </amexio-layout-item>\n          </amexio-layout-columns>\n      </ng-container>\n      <ng-template #elseBlock>\n        Account not found\n      </ng-template>\n      <ng-container *ngIf=\"hasBadge && badge \" >\n        <amexio-badge [absolute]=\"true\" [background]=\"'red'\" [color]=\"'white'\" [bottom]=\"'0px'\" [right]=\"'0px'\">\n          <amexio-label size=\"medium-bold\">{{badge}}</amexio-label>\n        </amexio-badge>\n      </ng-container>\n    </amexio-body>\n</amexio-card>\n\n\n"

/***/ }),

/***/ "./projects/rina-lib/src/lib/components/property-grid/propertygrid.component.ts":
/*!**************************************************************************************!*\
  !*** ./projects/rina-lib/src/lib/components/property-grid/propertygrid.component.ts ***!
  \**************************************************************************************/
/*! exports provided: PropertyGridComponnent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyGridComponnent", function() { return PropertyGridComponnent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PropertyGridComponnent = /** @class */ (function () {
    function PropertyGridComponnent() {
        this.hasImage = false;
        this.hasRadioTitle = false;
        this.hasBadge = false;
        this.hasRadio = true;
        this.badge = false;
        this.hasBorder = true;
        this.onPropertySelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    PropertyGridComponnent.prototype.selectRadio = function (selectedObject) {
        this.onPropertySelect.emit(selectedObject);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('key-value-data'),
        __metadata("design:type", Array)
    ], PropertyGridComponnent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('image'),
        __metadata("design:type", String)
    ], PropertyGridComponnent.prototype, "image", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('has-image'),
        __metadata("design:type", Object)
    ], PropertyGridComponnent.prototype, "hasImage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('has-radio-title'),
        __metadata("design:type", Object)
    ], PropertyGridComponnent.prototype, "hasRadioTitle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('has-badge'),
        __metadata("design:type", Object)
    ], PropertyGridComponnent.prototype, "hasBadge", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('has-radio'),
        __metadata("design:type", Object)
    ], PropertyGridComponnent.prototype, "hasRadio", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('badge'),
        __metadata("design:type", Object)
    ], PropertyGridComponnent.prototype, "badge", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('radio-title-data'),
        __metadata("design:type", Object)
    ], PropertyGridComponnent.prototype, "hasRadioTitleData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('has-border'),
        __metadata("design:type", Object)
    ], PropertyGridComponnent.prototype, "hasBorder", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PropertyGridComponnent.prototype, "onPropertySelect", void 0);
    PropertyGridComponnent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'rina-property-grid',
            template: __webpack_require__(/*! ./propertygrid.component.html */ "./projects/rina-lib/src/lib/components/property-grid/propertygrid.component.html")
        })
    ], PropertyGridComponnent);
    return PropertyGridComponnent;
}());



/***/ }),

/***/ "./projects/rina-lib/src/lib/components/service-booking/service.availiblity-lib.component.html":
/*!*****************************************************************************************************!*\
  !*** ./projects/rina-lib/src/lib/components/service-booking/service.availiblity-lib.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <amexio-layout-columns [orientation]=\"'horizontal'\" [fit]=\"true\" [alignment]=\"'start'\" [border]=\"false\">\n      <amexio-layout-item >\n        <amexio-layout-columns [orientation]=\"'vertical'\" [fit]=\"true\" [alignment]=\"'start'\" [border]=\"false\">\n          <amexio-layout-item>\n            <amexio-dropdown [(ngModel)]=\"serviceModel.location\" [enable-sort]=\"true\" [sort]=\"'asc'\" [search]=\"true\" [place-holder]=\"'Select Location'\" name=\"location\" [field-label]=\"'Select Location'\" [data]=\"serviceLocations\" [display-field]=\"'primaryDisplay'\"\n                             [value-field]=\"'primaryKey'\" (onSingleSelect)=\"onLocationClick($event)\">\n            </amexio-dropdown>\n          </amexio-layout-item>\n\n          <amexio-layout-item *ngIf=\"_windowTService.appType != '1'; else notTime\">\n            <amexio-layout-columns [border]=\"false\" [orientation]=\"'horizontal'\" [alignment]=\"'start'\">\n              <amexio-layout-item>\n                <amexio-date-time-picker [field-label]=\"'Select Date'\" [min-date]=\"minDate\" [time-picker]=\"false\" [date-picker]=\"true\" name=\"appointmentDate\" [min-date]=\"todayDate\" [(ngModel)]=\"serviceModel.appointmentDate\">\n                </amexio-date-time-picker>\n              </amexio-layout-item>\n              <amexio-layout-item class=\"timebox-width\">\n                  <amexio-dropdown [(ngModel)]=\"serviceModel.appointmentTime\" [enable-sort]=\"true\" [sort]=\"'asc'\" [search]=\"true\" (onSingleSelect)=\"setTime($event)\" [place-holder]=\"'Select Time'\" name=\"appointmentTime\" [field-label]=\"'Select time'\" [data]=\"timeSlots\" [display-field]=\"'time'\"\n                                   [value-field]=\"'timeId'\">\n                  </amexio-dropdown>\n              </amexio-layout-item>\n            </amexio-layout-columns>\n          </amexio-layout-item>\n\n          <ng-template #notTime>\n            <amexio-layout-item>\n              <amexio-date-time-picker [field-label]=\"'Select Date'\" [min-date]=\"minDate\" [time-picker]=\"false\" [date-picker]=\"true\" name=\"appointmentDate\" [min-date]=\"todayDate\" [(ngModel)]=\"serviceModel.appointmentDate\">\n              </amexio-date-time-picker>\n            </amexio-layout-item>\n          </ng-template>\n\n\n\n\n          <amexio-layout-item>\n            <amexio-dropdown [(ngModel)]=\"serviceModel.assitantPersonId\" [enable-sort]=\"true\" [sort]=\"'asc'\" [search]=\"true\" [place-holder]=\"'Select SA'\" name=\"assitantPerson\" [field-label]=\"'Service Advisor (SA)'\" [data]=\"assitantPerson\" [display-field]=\"'primaryDisplay'\"\n                             [value-field]=\"'primaryKey'\" (onSingleSelect)=\"onAssitantClick($event)\">\n            </amexio-dropdown>\n          </amexio-layout-item>\n\n\n\n          <amexio-layout-item>\n            <amexio-button [label]=\"'CHECK SA AVAILIBLITY'\" [type]=\"'theme-color'\" [tooltip]=\"'CHECK SA AVAILIBLITY'\" (onClick)=\"checkAvailiblity()\"></amexio-button>\n          </amexio-layout-item>\n\n          <amexio-layout-item>\n            <amexio-ee-appointment [height]=\"'200px'\"\n                                   [available-slots-color]=\"'white'\"\n                                   [available-slots-bg-color]=\"'#4CAF50'\"\n                                   [selected-slot-bg-color]=\"'yellow'\"\n                                   [selected-slot-color]=\"'green'\"\n                                   [date]=\"serviceModel.appointmentDate\" [start-time]=\"serviceModel.appointmentTime\"\n                                   [end-time]=\"endTime\" [available-slots]=\"availableslots\" (onSingleSelect)=\"onSlotSelection($event)\">\n\n            </amexio-ee-appointment>\n\n          </amexio-layout-item>\n        </amexio-layout-columns>\n      </amexio-layout-item>\n      <amexio-layout-item [fit]=\"true\">\n        <amexio-google-map [initial-zoom-level]=\"8\" [initial-lat]=\"24.4086\" [initial-lng]=\"55.2701\" [height]=\"'100%'\" [data]=\"serviceStations\" (onMarkerClick)=\"onMarkerClick($event)\" [google-map-key]=\"'AIzaSyDKSPX97z-ndeh_Mgq3xkaML2Kp9AwHA9s'\">\n        </amexio-google-map>\n      </amexio-layout-item>\n\n    </amexio-layout-columns>\n\n"

/***/ }),

/***/ "./projects/rina-lib/src/lib/components/service-booking/service.availiblity-lib.component.ts":
/*!***************************************************************************************************!*\
  !*** ./projects/rina-lib/src/lib/components/service-booking/service.availiblity-lib.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: ServiceAvailiblityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceAvailiblityComponent", function() { return ServiceAvailiblityComponent; });
/* harmony import */ var _services_bookingavailable_service_booking_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/bookingavailable/service.booking.service */ "./projects/rina-lib/src/lib/services/bookingavailable/service.booking.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _services_servicebooking_service_booking_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/servicebooking/service.booking.service */ "./projects/rina-lib/src/lib/services/servicebooking/service.booking.service.ts");
/* harmony import */ var _model_service_availiblity_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../model/service.availiblity.model */ "./projects/rina-lib/src/lib/model/service.availiblity.model.ts");
/* harmony import */ var _services_shared_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/shared/common.service */ "./projects/rina-lib/src/lib/services/shared/common.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var projects_rina_lib_src_lib_model_shared_daterange_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! projects/rina-lib/src/lib/model/shared/daterange.model */ "./projects/rina-lib/src/lib/model/shared/daterange.model.ts");
/* harmony import */ var _services_alfahim_window_toggle_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/alfahim/window.toggle.service */ "./projects/rina-lib/src/lib/services/alfahim/window.toggle.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ServiceAvailiblityComponent = /** @class */ (function () {
    function ServiceAvailiblityComponent(_windowTService, sbService, commonService, bookingAvailableService) {
        this._windowTService = _windowTService;
        this.sbService = sbService;
        this.commonService = commonService;
        this.bookingAvailableService = bookingAvailableService;
        this.startTime = 10;
        this.endTime = 12;
        this.serviceStations = [];
        this.assitantPerson = [];
        this.availableslots = [];
        this.serviceModel = new _model_service_availiblity_model__WEBPACK_IMPORTED_MODULE_4__["ServiceAvailibilityModel"]();
        this.minDate = new _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]('en-US').transform(new Date(), 'dd-MMM-yyyy');
        this.dateRangeModel = new projects_rina_lib_src_lib_model_shared_daterange_model__WEBPACK_IMPORTED_MODULE_7__["DateRangeModel"]();
    }
    ServiceAvailiblityComponent.prototype.checkAvailiblity = function () {
        var _this = this;
        var response;
        this.availableslots = [];
        this.dateRangeModel.inDate = this.serviceModel.appointmentDate;
        this.dateRangeModel.locationid = this.serviceModel.location;
        this.dateRangeModel.type = this._windowTService.appType;
        this.bookingAvailableService.getAllAvailabelSlots(this.dateRangeModel).subscribe(function (resp) {
            response = resp;
        }, function (error) {
        }, function () {
            if (response) {
                _this.availableslots = [];
                response.forEach(function (element) {
                    _this.availableslots.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["AvailableSlotsModel"](new Date(element.datetimeLong), element.data));
                });
            }
        });
    };
    ServiceAvailiblityComponent.prototype.ngOnInit = function () {
        this.initLocation();
        this.initTime();
    };
    ServiceAvailiblityComponent.prototype.onSlotSelection = function (event) {
        this.serviceModel.selectedSlot = event.time;
        this.serviceModel.selectedSlotDate = event.date;
    };
    ServiceAvailiblityComponent.prototype.onAssitantClick = function (event) {
        this.serviceModel.assitantPersonName = event.primaryDisplay;
    };
    ServiceAvailiblityComponent.prototype.initLocation = function () {
        var _this = this;
        var response;
        this.sbService.fetchLocations().subscribe(function (resp) {
            response = resp;
        }, function (error) {
        }, function () {
            _this.serviceLocations = response;
            _this.serviceStations = [];
            _this.serviceLocations.forEach(function (element) {
                if (element) {
                    _this.serviceStations.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GoogleMapOverlays"](Number(element.latitude), Number(element.longitude), element.locationName + ', UAE', true, 'https://testapi.amexio.org/api/v5.5/assets/images/googlemap/bmwmap.png', element));
                }
            });
        });
    };
    ServiceAvailiblityComponent.prototype.initSA = function (id) {
        var _this = this;
        var response;
        var pathVariable = id + '/' + this._windowTService.appType;
        this.sbService.fetchSABasedOnLocation(pathVariable).subscribe(function (resp) {
            response = resp;
        }, function (error) {
        }, function () {
            _this.assitantPerson = response;
        });
    };
    ServiceAvailiblityComponent.prototype.initTime = function () {
        this.timeSlots = this.commonService.workingSlot1();
        if (this.timeSlots && this.timeSlots.length > 0) {
            this.endTime = this.timeSlots.pop().timeId;
        }
    };
    ServiceAvailiblityComponent.prototype.setTime = function (event) {
    };
    ServiceAvailiblityComponent.prototype.onMarkerClick = function (serviceStation) {
        if (serviceStation.primaryKey && this.serviceModel.location !== serviceStation.primaryKey) {
            this.serviceModel.location = serviceStation.primaryKey;
            this.serviceModel.locationName = serviceStation.primaryDisplay;
            this.serviceModel.assitantPersonId = '';
            this.availableslots = [];
            if (serviceStation) {
                this.serviceModel.locationModel.latitude = serviceStation.latitude;
                this.serviceModel.locationModel.longitude = serviceStation.longitude;
            }
            this.initSA(this.serviceModel.location);
        }
    };
    ServiceAvailiblityComponent.prototype.onLocationClick = function (data) {
        if (this.serviceModel.locationName !== data.primaryDisplay) {
            this.serviceModel.assitantPersonId = '';
            this.availableslots = [];
            this.initSA(data.primaryKey);
            this.serviceModel.locationName = data.primaryDisplay;
            this.serviceModel.locationModel.latitude = data.latitude;
            this.serviceModel.locationModel.longitude = data.longitude;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('start-time'),
        __metadata("design:type", Number)
    ], ServiceAvailiblityComponent.prototype, "startTime", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('end-time'),
        __metadata("design:type", Number)
    ], ServiceAvailiblityComponent.prototype, "endTime", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('service-model'),
        __metadata("design:type", _model_service_availiblity_model__WEBPACK_IMPORTED_MODULE_4__["ServiceAvailibilityModel"])
    ], ServiceAvailiblityComponent.prototype, "serviceModel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('is-edit-mode'),
        __metadata("design:type", Boolean)
    ], ServiceAvailiblityComponent.prototype, "isEditModel", void 0);
    ServiceAvailiblityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'service-availiblity-lib',
            template: __webpack_require__(/*! ./service.availiblity-lib.component.html */ "./projects/rina-lib/src/lib/components/service-booking/service.availiblity-lib.component.html")
        }),
        __metadata("design:paramtypes", [_services_alfahim_window_toggle_service__WEBPACK_IMPORTED_MODULE_8__["WindowToogleService"], _services_servicebooking_service_booking_service__WEBPACK_IMPORTED_MODULE_3__["ServiceBookingService"], _services_shared_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"],
            _services_bookingavailable_service_booking_service__WEBPACK_IMPORTED_MODULE_0__["BookingAvailableService"]])
    ], ServiceAvailiblityComponent);
    return ServiceAvailiblityComponent;
}());



/***/ }),

/***/ "./projects/rina-lib/src/lib/components/service-job-type/jobtype.component.html":
/*!**************************************************************************************!*\
  !*** ./projects/rina-lib/src/lib/components/service-job-type/jobtype.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<amexio-card-ce>\n  <amexio-header-ce>\n    <amexio-label size=\"medium-bold\">\n      SELECT SERVICE TYPE\n    </amexio-label>\n  </amexio-header-ce>\n  <rina-step-box [active-index]=\"5\"></rina-step-box>\n  <amexio-body-ce [align]=\"'start'\">\n    <amexio-row>\n      <amexio-column [size]=\"6\">\n        <amexio-listbox [enable-checkbox]=\"true\" [height]=\"300\" [header]=\"'Service Type'\" [data]=\"serviceTypeData\" [display-field]=\"'typeName'\" (selectedRows)=\"getSelectedType($event)\">\n        </amexio-listbox>\n        <amexio-textarea-input field-label=\"Remark\" [(ngModel)]=\"remarks\" name=\"remarks\" place-holder=\"Enter remark\">\n        </amexio-textarea-input>\n      </amexio-column>\n    </amexio-row>\n  </amexio-body-ce>\n  <amexio-action-ce [align]=\"'flex-end'\" [border-top]=\"true\">\n    <amexio-toolbar>\n      <amexio-toolbar-item position-right [seperator-position]=\"'right'\">\n        <amexio-button [label]=\"'Cancel'\" [type]=\"'theme-backgroundcolor'\" [tooltip]=\"'cancel'\" [size]=\"'large'\" (onClick)=\"onCancel($event)\">\n        </amexio-button>\n      </amexio-toolbar-item>\n      <amexio-toolbar-item position-right style=\"padding-left: 5px;\">\n        <amexio-button [label]=\"'Back'\" [type]=\"'theme-backgroundcolor'\" [tooltip]=\"'Back'\" [size]=\"'large'\" (onClick)=\"onBackHandle($event)\">\n        </amexio-button>\n        <amexio-button [label]=\"'Next'\" [type]=\"'theme-color'\" [tooltip]=\"'skip'\" [size]=\"'large'\" (onClick)=\"onNextHandle()\">\n        </amexio-button>\n      </amexio-toolbar-item>\n    </amexio-toolbar>\n  </amexio-action-ce>\n</amexio-card-ce>\n"

/***/ }),

/***/ "./projects/rina-lib/src/lib/components/service-job-type/jobtype.component.ts":
/*!************************************************************************************!*\
  !*** ./projects/rina-lib/src/lib/components/service-job-type/jobtype.component.ts ***!
  \************************************************************************************/
/*! exports provided: ServiceTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceTypeComponent", function() { return ServiceTypeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_alfahim_personal_details_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/alfahim/personal.details.service */ "./projects/rina-lib/src/lib/services/alfahim/personal.details.service.ts");
/**
 * Created by dattaram on 5/2/19.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ServiceTypeComponent = /** @class */ (function () {
    function ServiceTypeComponent(_personalDetailsService) {
        this._personalDetailsService = _personalDetailsService;
        this.serviceTypeData = [];
        this.selectedServiceJobs = [];
        this.remarks = '';
        this.onNext = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onBack = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.resetBindedData();
        this.serviceTypeData = [
            {
                'typeName': 'Check Battery System',
                'typeValue': 'Check Battery System',
            },
            {
                'typeName': 'Horn Check',
                'typeValue': 'Horn Check',
            },
            {
                'typeName': 'Instrument Cluster / Display Instruments Check',
                'typeValue': 'Instrument Cluster / Display Instruments Check',
            },
            {
                'typeName': 'Steering Wheel Heater Check',
                'typeValue': 'Steering Wheel Heater Check',
            },
            {
                'typeName': 'Fuel Indicator Level Check',
                'typeValue': 'Fuel Indicator Level Check',
            },
            {
                'typeName': 'Electrical System Check',
                'typeValue': 'Electrical System Check',
            }
        ];
        this.assignOldData();
    }
    ServiceTypeComponent.prototype.assignOldData = function () {
        var _this = this;
        var dataRef = this._personalDetailsService.getExtraServiceData();
        if (dataRef) {
            this.remarks = dataRef.remarks;
            if (dataRef.selectedJobType) {
                this.selectedServiceJobs = dataRef.selectedJobType;
                dataRef.selectedJobType.forEach(function (selectedItem) {
                    _this.serviceTypeData.forEach(function (item, index) {
                        if (selectedItem.typeValue === item.typeValue) {
                            _this.serviceTypeData[index] = selectedItem;
                        }
                    });
                });
            }
        }
    };
    ServiceTypeComponent.prototype.ngOnInit = function () {
    };
    ServiceTypeComponent.prototype.getSelectedType = function (event) {
        this.selectedServiceJobs = event;
    };
    ServiceTypeComponent.prototype.onNextHandle = function () {
        var createEmitingObj = {
            selectedJobType: this.selectedServiceJobs,
            remarks: this.remarks
        };
        this.onNext.emit(createEmitingObj);
        this.resetBindedData();
    };
    ServiceTypeComponent.prototype.onBackHandle = function (event) {
        this.onBack.emit(event);
    };
    ServiceTypeComponent.prototype.onCancel = function (event) {
        this.onClose.emit(event);
    };
    ServiceTypeComponent.prototype.resetBindedData = function () {
        this.selectedServiceJobs = [];
        this.remarks = '';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ServiceTypeComponent.prototype, "onNext", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ServiceTypeComponent.prototype, "onBack", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ServiceTypeComponent.prototype, "onClose", void 0);
    ServiceTypeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'service-job-type',
            template: __webpack_require__(/*! ./jobtype.component.html */ "./projects/rina-lib/src/lib/components/service-job-type/jobtype.component.html")
        }),
        __metadata("design:paramtypes", [_services_alfahim_personal_details_service__WEBPACK_IMPORTED_MODULE_1__["PersonalDetailsService"]])
    ], ServiceTypeComponent);
    return ServiceTypeComponent;
}());



/***/ }),

/***/ "./projects/rina-lib/src/lib/components/step-box/step-box.component.html":
/*!*******************************************************************************!*\
  !*** ./projects/rina-lib/src/lib/components/step-box/step-box.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!--\n<amexio-steps [icon]=\"true\" >\n  <amexio-step-block *ngFor=\"let item of stepBoxData\" [active]=\"(item.index === activeIndex)\" [icon]=\"item.icon\">\n  </amexio-step-block>\n</amexio-steps>\n-->\n\n\n<br/>\n<div class=\"alfahimstepbox\">\n  <div class=\"alfahimstepboxitems\" [ngClass]=\"{'alfahimstepboxitems-active': (item.index === activeIndex), 'alfahimstepboxitems-deactive': (item.index != activeIndex)}\" [ngClass]=\"{'alfahimstepboxitems-active': true}\" *ngFor=\"let item of stepBoxData\">\n    <div  [attr.class]=\"item.icon\" ></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./projects/rina-lib/src/lib/components/step-box/step-box.component.ts":
/*!*****************************************************************************!*\
  !*** ./projects/rina-lib/src/lib/components/step-box/step-box.component.ts ***!
  \*****************************************************************************/
/*! exports provided: RinaStepBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RinaStepBoxComponent", function() { return RinaStepBoxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by dattaram on 8/2/19.
 */

var RinaStepBoxComponent = /** @class */ (function () {
    function RinaStepBoxComponent() {
        this.stepBoxData = [];
    }
    RinaStepBoxComponent.prototype.ngOnInit = function () {
        this.stepBoxData = [
            {
                "label": "User",
                "icon": "fa fa-user ",
                "active": false,
                "index": 3
            },
            {
                "label": "Location",
                "icon": "fa fa-map-marker ",
                "active": false,
                "index": 4
            },
            {
                "label": "Service Type",
                "icon": "fa fa-cubes ",
                "active": false,
                "index": 5
            },
            {
                "label": "Sale",
                "icon": "fa fa-shopping-cart",
                "active": false,
                "index": 6
            },
            {
                "label": "Confirm",
                "icon": "fa fa-check-circle ",
                "active": false,
                "index": 7
            },
            {
                "label": "Info",
                "icon": "fa fa-info ",
                "active": false,
                "index": 8
            }
        ];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('active-index'),
        __metadata("design:type", Object)
    ], RinaStepBoxComponent.prototype, "activeIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('step-box-data'),
        __metadata("design:type", Array)
    ], RinaStepBoxComponent.prototype, "stepBoxData", void 0);
    RinaStepBoxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'rina-step-box',
            template: __webpack_require__(/*! ./step-box.component.html */ "./projects/rina-lib/src/lib/components/step-box/step-box.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], RinaStepBoxComponent);
    return RinaStepBoxComponent;
}());



/***/ }),

/***/ "./projects/rina-lib/src/lib/model/service.availiblity.model.ts":
/*!**********************************************************************!*\
  !*** ./projects/rina-lib/src/lib/model/service.availiblity.model.ts ***!
  \**********************************************************************/
/*! exports provided: ServiceAvailibilityModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceAvailibilityModel", function() { return ServiceAvailibilityModel; });
/* harmony import */ var projects_rina_lib_src_lib_model_shared_location_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/rina-lib/src/lib/model/shared/location.model */ "./projects/rina-lib/src/lib/model/shared/location.model.ts");

var ServiceAvailibilityModel = /** @class */ (function () {
    function ServiceAvailibilityModel() {
        this.appointmentDate = new Date();
        this.appointmentTime = 10;
        this.selectedSlotDate = new Date();
        this.vehicleName = '';
        this.vehiclePlate = '';
        this.locationModel = new projects_rina_lib_src_lib_model_shared_location_model__WEBPACK_IMPORTED_MODULE_0__["LocationModel"]();
    }
    ServiceAvailibilityModel.prototype.isValidate = function () {
        var isValid = false;
        if (this.location != null && this.appointmentDate != null &&
            this.appointmentTime != null && this.assitantPersonId != null && this.selectedSlot != null) {
            isValid = true;
        }
        else {
            isValid = false;
        }
        return isValid;
    };
    return ServiceAvailibilityModel;
}());



/***/ }),

/***/ "./projects/rina-lib/src/lib/model/shared/base.model.ts":
/*!**************************************************************!*\
  !*** ./projects/rina-lib/src/lib/model/shared/base.model.ts ***!
  \**************************************************************/
/*! exports provided: BaseModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseModel", function() { return BaseModel; });
var BaseModel = /** @class */ (function () {
    function BaseModel() {
    }
    return BaseModel;
}());



/***/ }),

/***/ "./projects/rina-lib/src/lib/model/shared/daterange.model.ts":
/*!*******************************************************************!*\
  !*** ./projects/rina-lib/src/lib/model/shared/daterange.model.ts ***!
  \*******************************************************************/
/*! exports provided: DateRangeModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateRangeModel", function() { return DateRangeModel; });
var DateRangeModel = /** @class */ (function () {
    function DateRangeModel() {
    }
    return DateRangeModel;
}());



/***/ }),

/***/ "./projects/rina-lib/src/lib/model/shared/location.model.ts":
/*!******************************************************************!*\
  !*** ./projects/rina-lib/src/lib/model/shared/location.model.ts ***!
  \******************************************************************/
/*! exports provided: LocationModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationModel", function() { return LocationModel; });
/* harmony import */ var _base_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.model */ "./projects/rina-lib/src/lib/model/shared/base.model.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var LocationModel = /** @class */ (function (_super) {
    __extends(LocationModel, _super);
    function LocationModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return LocationModel;
}(_base_model__WEBPACK_IMPORTED_MODULE_0__["BaseModel"]));



/***/ }),

/***/ "./projects/rina-lib/src/lib/model/shared/personal.details.model.ts":
/*!**************************************************************************!*\
  !*** ./projects/rina-lib/src/lib/model/shared/personal.details.model.ts ***!
  \**************************************************************************/
/*! exports provided: PersonalDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalDetails", function() { return PersonalDetails; });
var PersonalDetails = /** @class */ (function () {
    function PersonalDetails() {
        this.perferredContact = '1';
    }
    return PersonalDetails;
}());



/***/ }),

/***/ "./projects/rina-lib/src/lib/model/shared/propertygrid.model.ts":
/*!**********************************************************************!*\
  !*** ./projects/rina-lib/src/lib/model/shared/propertygrid.model.ts ***!
  \**********************************************************************/
/*! exports provided: PropertyGridModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyGridModel", function() { return PropertyGridModel; });
var PropertyGridModel = /** @class */ (function () {
    function PropertyGridModel(_fieldName, _fieldValue) {
        this.fieldName = _fieldName;
        this.fieldValue = _fieldValue;
    }
    return PropertyGridModel;
}());



/***/ }),

/***/ "./projects/rina-lib/src/lib/rina-lib.components.ts":
/*!**********************************************************!*\
  !*** ./projects/rina-lib/src/lib/rina-lib.components.ts ***!
  \**********************************************************/
/*! exports provided: RINA_COMPONENTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RINA_COMPONENTS", function() { return RINA_COMPONENTS; });
/* harmony import */ var _components_service_booking_service_availiblity_lib_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/service-booking/service.availiblity-lib.component */ "./projects/rina-lib/src/lib/components/service-booking/service.availiblity-lib.component.ts");
/* harmony import */ var _components_preferred_location_preferred_location_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/preferred-location/preferred.location.component */ "./projects/rina-lib/src/lib/components/preferred-location/preferred.location.component.ts");
/* harmony import */ var _components_confirmation_service_confirmation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/confirmation/service.confirmation */ "./projects/rina-lib/src/lib/components/confirmation/service.confirmation.ts");
/* harmony import */ var _components_appointmentdetails_appointment_confirmation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/appointmentdetails/appointment.confirmation */ "./projects/rina-lib/src/lib/components/appointmentdetails/appointment.confirmation.ts");
/* harmony import */ var _components_property_grid_propertygrid_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/property-grid/propertygrid.component */ "./projects/rina-lib/src/lib/components/property-grid/propertygrid.component.ts");
/* harmony import */ var _components_before_confirm_before_confirm_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/before-confirm/before.confirm.component */ "./projects/rina-lib/src/lib/components/before-confirm/before.confirm.component.ts");
/* harmony import */ var _components_content_card_content_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/content-card/content.card.component */ "./projects/rina-lib/src/lib/components/content-card/content.card.component.ts");
/* harmony import */ var _components_customer_vehicle_list_customer_vehiclelist_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/customer-vehicle-list/customer.vehiclelist.component */ "./projects/rina-lib/src/lib/components/customer-vehicle-list/customer.vehiclelist.component.ts");
/* harmony import */ var _components_service_job_type_jobtype_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/service-job-type/jobtype.component */ "./projects/rina-lib/src/lib/components/service-job-type/jobtype.component.ts");
/* harmony import */ var _components_step_box_step_box_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/step-box/step-box.component */ "./projects/rina-lib/src/lib/components/step-box/step-box.component.ts");










var RINA_COMPONENTS = [
    _components_service_booking_service_availiblity_lib_component__WEBPACK_IMPORTED_MODULE_0__["ServiceAvailiblityComponent"],
    _components_preferred_location_preferred_location_component__WEBPACK_IMPORTED_MODULE_1__["PreferredLocationComponent"],
    _components_confirmation_service_confirmation__WEBPACK_IMPORTED_MODULE_2__["ServiceConfirmationComponent"],
    _components_appointmentdetails_appointment_confirmation__WEBPACK_IMPORTED_MODULE_3__["AppoinmentConfirmationComponent"],
    _components_property_grid_propertygrid_component__WEBPACK_IMPORTED_MODULE_4__["PropertyGridComponnent"],
    _components_before_confirm_before_confirm_component__WEBPACK_IMPORTED_MODULE_5__["BeforeConfirmComponent"],
    _components_content_card_content_card_component__WEBPACK_IMPORTED_MODULE_6__["ContentCardComponent"],
    _components_customer_vehicle_list_customer_vehiclelist_component__WEBPACK_IMPORTED_MODULE_7__["CustomerVehicleListComponent"],
    _components_service_job_type_jobtype_component__WEBPACK_IMPORTED_MODULE_8__["ServiceTypeComponent"],
    _components_step_box_step_box_component__WEBPACK_IMPORTED_MODULE_9__["RinaStepBoxComponent"]
];


/***/ }),

/***/ "./projects/rina-lib/src/lib/rina-lib.module.ts":
/*!******************************************************!*\
  !*** ./projects/rina-lib/src/lib/rina-lib.module.ts ***!
  \******************************************************/
/*! exports provided: RinaLibModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RinaLibModule", function() { return RinaLibModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _rina_lib_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rina-lib.components */ "./projects/rina-lib/src/lib/rina-lib.components.ts");
/* harmony import */ var _services_shared_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/shared/http.service */ "./projects/rina-lib/src/lib/services/shared/http.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _services_servicebooking_service_booking_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/servicebooking/service.booking.service */ "./projects/rina-lib/src/lib/services/servicebooking/service.booking.service.ts");
/* harmony import */ var _services_shared_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/shared/common.service */ "./projects/rina-lib/src/lib/services/shared/common.service.ts");
/* harmony import */ var _services_bookingavailable_service_booking_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/bookingavailable/service.booking.service */ "./projects/rina-lib/src/lib/services/bookingavailable/service.booking.service.ts");
/* harmony import */ var _services_alfahim_personal_details_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/alfahim/personal.details.service */ "./projects/rina-lib/src/lib/services/alfahim/personal.details.service.ts");
/* harmony import */ var _services_alfahim_window_toggle_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/alfahim/window.toggle.service */ "./projects/rina-lib/src/lib/services/alfahim/window.toggle.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_shared_notification_loader_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/shared/notification-loader.service */ "./projects/rina-lib/src/lib/services/shared/notification-loader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var RinaLibModule = /** @class */ (function () {
    function RinaLibModule() {
    }
    RinaLibModule_1 = RinaLibModule;
    RinaLibModule.forRoot = function () {
        return {
            ngModule: RinaLibModule_1,
            providers: [_services_shared_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
                _services_servicebooking_service_booking_service__WEBPACK_IMPORTED_MODULE_7__["ServiceBookingService"],
                _services_bookingavailable_service_booking_service__WEBPACK_IMPORTED_MODULE_9__["BookingAvailableService"],
                _services_alfahim_personal_details_service__WEBPACK_IMPORTED_MODULE_10__["PersonalDetailsService"],
                _services_alfahim_window_toggle_service__WEBPACK_IMPORTED_MODULE_11__["WindowToogleService"],
                _services_shared_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"],
                _services_shared_notification_loader_service__WEBPACK_IMPORTED_MODULE_13__["NotificationAndLoaderService"],
                _angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"]
            ],
        };
    };
    var RinaLibModule_1;
    RinaLibModule = RinaLibModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: _rina_lib_components__WEBPACK_IMPORTED_MODULE_1__["RINA_COMPONENTS"],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_4__["AmexioWidgetModule"],
                amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_4__["AmexioEnterpriseModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            exports: _rina_lib_components__WEBPACK_IMPORTED_MODULE_1__["RINA_COMPONENTS"]
        })
    ], RinaLibModule);
    return RinaLibModule;
}());



/***/ }),

/***/ "./projects/rina-lib/src/lib/services/alfahim/personal.details.service.ts":
/*!********************************************************************************!*\
  !*** ./projects/rina-lib/src/lib/services/alfahim/personal.details.service.ts ***!
  \********************************************************************************/
/*! exports provided: PersonalDetailsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalDetailsService", function() { return PersonalDetailsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _service_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service.constant */ "./projects/rina-lib/src/lib/services/service.constant.ts");
/* harmony import */ var projects_rina_lib_src_lib_model_shared_personal_details_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! projects/rina-lib/src/lib/model/shared/personal.details.model */ "./projects/rina-lib/src/lib/model/shared/personal.details.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PersonalDetailsService = /** @class */ (function () {
    function PersonalDetailsService(httpClient) {
        this.httpClient = httpClient;
        this.vehicleName = '';
        this.vehicleRgNo = '';
        this.extraServiceData = null;
    }
    PersonalDetailsService.prototype.getTitles = function () {
        return this.httpClient.get(_service_constant__WEBPACK_IMPORTED_MODULE_2__["SERVICE_URL"].BASE_APP_URL + 'title/');
    };
    PersonalDetailsService.prototype.getVehicles = function () {
        return this.httpClient.get(_service_constant__WEBPACK_IMPORTED_MODULE_2__["SERVICE_URL"].BASE_APP_URL + 'vehicle/');
    };
    PersonalDetailsService.prototype.getVehicleModels = function () {
        return this.httpClient.get(_service_constant__WEBPACK_IMPORTED_MODULE_2__["SERVICE_URL"].BASE_APP_URL + 'vehiclemodel/');
    };
    PersonalDetailsService.prototype.getLocations = function () {
        return this.httpClient.get(_service_constant__WEBPACK_IMPORTED_MODULE_2__["SERVICE_URL"].BASE_APP_URL + 'map/');
    };
    PersonalDetailsService.prototype.getAssitantList = function (id) {
        return this.httpClient.get(_service_constant__WEBPACK_IMPORTED_MODULE_2__["SERVICE_URL"].BASE_APP_URL + 'map/' + id);
    };
    PersonalDetailsService.prototype.getPersonalDetails = function () {
        return this.personalDetails;
    };
    PersonalDetailsService.prototype.setPersonalDetails = function (personalDetails) {
        this.personalDetails = personalDetails;
        this.vehicleName = this.personalDetails.vehicleType;
        this.vehicleRgNo = this.personalDetails.registrationNumber;
    };
    PersonalDetailsService.prototype.setPeferredLocation = function (serviceAvailibilityModel) {
        this.serviceAvailibilityModel = serviceAvailibilityModel;
        this.serviceAvailibilityModel.vehiclePlate = this.vehicleRgNo;
        this.serviceAvailibilityModel.vehicleName = this.vehicleName;
    };
    PersonalDetailsService.prototype.getPeferredLocation = function () {
        return this.serviceAvailibilityModel;
    };
    PersonalDetailsService.prototype.setPersonalDetailsForCcm = function (personalDetails) {
        this.convertIntoPersonalModel(personalDetails);
    };
    PersonalDetailsService.prototype.convertIntoPersonalModel = function (personalDetails) {
        this.personalDetails = new projects_rina_lib_src_lib_model_shared_personal_details_model__WEBPACK_IMPORTED_MODULE_3__["PersonalDetails"]();
        this.personalDetails.firstName = personalDetails.name;
        this.personalDetails.email = personalDetails.email;
        this.personalDetails.phone = personalDetails.mobile;
    };
    PersonalDetailsService.prototype.setExtraServiceData = function (data) {
        this.extraServiceData = data;
    };
    PersonalDetailsService.prototype.getExtraServiceData = function () {
        return this.extraServiceData;
    };
    PersonalDetailsService.prototype.setSelectedVehicleData = function (data) {
        this.selectedVehicleData = data;
        this.vehicleRgNo = this.selectedVehicleData.vehicleMetadata.registrationNo;
        this.vehicleName = this.selectedVehicleData.title;
    };
    PersonalDetailsService.prototype.resetServiceData = function () {
        this.personalDetails = null;
        this.serviceAvailibilityModel = null;
        this.selectedVehicleData = null;
        this.vehicleName = '';
        this.vehicleRgNo = '';
        this.extraServiceData = null;
    };
    PersonalDetailsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PersonalDetailsService);
    return PersonalDetailsService;
}());



/***/ }),

/***/ "./projects/rina-lib/src/lib/services/alfahim/window.toggle.service.ts":
/*!*****************************************************************************!*\
  !*** ./projects/rina-lib/src/lib/services/alfahim/window.toggle.service.ts ***!
  \*****************************************************************************/
/*! exports provided: WindowToogleService, WindowDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowToogleService", function() { return WindowToogleService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowDetails", function() { return WindowDetails; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WindowToogleService = /** @class */ (function () {
    function WindowToogleService() {
        this.isNewUserFlow = false;
        this.appType = '1';
        this.addWindowMap();
    }
    WindowToogleService.prototype.getNextWindow = function (windowNumber) {
        return this.widdownMap.get(windowNumber + 1);
    };
    WindowToogleService.prototype.getPreviousWindow = function (windowNumber) {
        return this.widdownMap.get(windowNumber - 1);
    };
    WindowToogleService.prototype.addWindowMap = function () {
        this.widdownMap = new Map();
        this.widdownMap.set(0, 0);
        this.widdownMap.set(1, 1);
        this.widdownMap.set(2, 2);
        this.widdownMap.set(3, 3);
        this.widdownMap.set(4, 4);
        this.widdownMap.set(5, 5);
        this.widdownMap.set(6, 6);
        this.widdownMap.set(7, 7);
        this.widdownMap.set(8, 8);
        this.widdownMap.set(11, 11);
    };
    WindowToogleService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], WindowToogleService);
    return WindowToogleService;
}());

var WindowDetails = /** @class */ (function () {
    function WindowDetails() {
    }
    return WindowDetails;
}());



/***/ }),

/***/ "./projects/rina-lib/src/lib/services/bookingavailable/service.booking.service.ts":
/*!****************************************************************************************!*\
  !*** ./projects/rina-lib/src/lib/services/bookingavailable/service.booking.service.ts ***!
  \****************************************************************************************/
/*! exports provided: BookingAvailableService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingAvailableService", function() { return BookingAvailableService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/http.service */ "./projects/rina-lib/src/lib/services/shared/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookingAvailableService = /** @class */ (function () {
    function BookingAvailableService(http) {
        this.http = http;
    }
    BookingAvailableService.prototype.getAllAvailabelSlots = function (dateRangeModel) {
        return this.http.post('assistant/available', 'post', dateRangeModel);
    };
    BookingAvailableService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_shared_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], BookingAvailableService);
    return BookingAvailableService;
}());



/***/ }),

/***/ "./projects/rina-lib/src/lib/services/service.constant.ts":
/*!****************************************************************!*\
  !*** ./projects/rina-lib/src/lib/services/service.constant.ts ***!
  \****************************************************************/
/*! exports provided: SERVICE_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERVICE_URL", function() { return SERVICE_URL; });
var SERVICE_URL = {
    BASE_APP_URL: 'https://restapi.amexio.org:8991/alfahim/api/'
};


/***/ }),

/***/ "./projects/rina-lib/src/lib/services/servicebooking/service.booking.service.ts":
/*!**************************************************************************************!*\
  !*** ./projects/rina-lib/src/lib/services/servicebooking/service.booking.service.ts ***!
  \**************************************************************************************/
/*! exports provided: ServiceBookingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceBookingService", function() { return ServiceBookingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/http.service */ "./projects/rina-lib/src/lib/services/shared/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ServiceBookingService = /** @class */ (function () {
    function ServiceBookingService(http) {
        this.http = http;
    }
    ServiceBookingService.prototype.fetchLocations = function () {
        return this.http.fetch('map/', 'get');
    };
    ServiceBookingService.prototype.fetchSABasedOnLocation = function (locationId) {
        return this.http.fetch('map/' + locationId, 'get');
    };
    ServiceBookingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_shared_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], ServiceBookingService);
    return ServiceBookingService;
}());



/***/ }),

/***/ "./projects/rina-lib/src/lib/services/shared/common.service.ts":
/*!*********************************************************************!*\
  !*** ./projects/rina-lib/src/lib/services/shared/common.service.ts ***!
  \*********************************************************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var CommonService = /** @class */ (function () {
    function CommonService() {
    }
    CommonService.prototype.timeData = function () {
        return new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["TimeUtil"]().timeData(false);
    };
    CommonService.prototype.workingSlot1 = function () {
        return new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["TimeUtil"]().workingslot1();
    };
    CommonService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], CommonService);
    return CommonService;
}());



/***/ }),

/***/ "./projects/rina-lib/src/lib/services/shared/http.service.ts":
/*!*******************************************************************!*\
  !*** ./projects/rina-lib/src/lib/services/shared/http.service.ts ***!
  \*******************************************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _service_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service.constant */ "./projects/rina-lib/src/lib/services/service.constant.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
    }
    HttpService.prototype.fetch = function (serviceUrl, methodType) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().append('Content-Type', 'application/json;charset=UTF-8');
        if (methodType === 'post') {
            return this.http.post(_service_constant__WEBPACK_IMPORTED_MODULE_2__["SERVICE_URL"].BASE_APP_URL + serviceUrl, { headers: headers });
        }
        else if (methodType === 'get') {
            return this.http.get(_service_constant__WEBPACK_IMPORTED_MODULE_2__["SERVICE_URL"].BASE_APP_URL + serviceUrl, { headers: headers });
        }
    };
    HttpService.prototype.post = function (serviceUrl, methodType, requestJson) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().append('Content-Type', 'application/json;charset=UTF-8');
        if (methodType === 'post') {
            return this.http.post(_service_constant__WEBPACK_IMPORTED_MODULE_2__["SERVICE_URL"].BASE_APP_URL + serviceUrl, requestJson, { headers: headers });
        }
        else if (methodType === 'get') {
            return this.http.get(_service_constant__WEBPACK_IMPORTED_MODULE_2__["SERVICE_URL"].BASE_APP_URL + serviceUrl, { headers: headers });
        }
    };
    HttpService.prototype.fetchLocalData = function (serviceUrl, methodType) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().append('Content-Type', 'application/json;charset=UTF-8');
        if (methodType === 'post') {
            return this.http.post(serviceUrl, { headers: headers });
        }
        else if (methodType === 'get') {
            return this.http.get(serviceUrl, { headers: headers });
        }
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./projects/rina-lib/src/lib/services/shared/notification-loader.service.ts":
/*!**********************************************************************************!*\
  !*** ./projects/rina-lib/src/lib/services/shared/notification-loader.service.ts ***!
  \**********************************************************************************/
/*! exports provided: NotificationAndLoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationAndLoaderService", function() { return NotificationAndLoaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/**
 * Created by dattaram on 6/2/19.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotificationAndLoaderService = /** @class */ (function () {
    function NotificationAndLoaderService() {
        this.showLoader = false;
    }
    NotificationAndLoaderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], NotificationAndLoaderService);
    return NotificationAndLoaderService;
}());



/***/ }),

/***/ "./projects/rina-lib/src/public_api.ts":
/*!*********************************************!*\
  !*** ./projects/rina-lib/src/public_api.ts ***!
  \*********************************************/
/*! exports provided: RinaLibModule, ServiceAvailibilityModel, CustomerModel, PropertyGridModel, ServiceAvailiblityComponent, PreferredLocationComponent, ServiceConfirmationComponent, AppoinmentConfirmationComponent, PropertyGridComponnent, BeforeConfirmComponent, ContentCardComponent, CustomerVehicleListComponent, ContentCardData, ServiceTypeComponent, RinaStepBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_rina_lib_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/rina-lib.module */ "./projects/rina-lib/src/lib/rina-lib.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RinaLibModule", function() { return _lib_rina_lib_module__WEBPACK_IMPORTED_MODULE_0__["RinaLibModule"]; });

/* harmony import */ var _lib_model_service_availiblity_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/model/service.availiblity.model */ "./projects/rina-lib/src/lib/model/service.availiblity.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceAvailibilityModel", function() { return _lib_model_service_availiblity_model__WEBPACK_IMPORTED_MODULE_1__["ServiceAvailibilityModel"]; });

/* harmony import */ var _rinaalfahim_src_app_models_customer_details_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../rinaalfahim/src/app/models/customer.details.model */ "./projects/rinaalfahim/src/app/models/customer.details.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomerModel", function() { return _rinaalfahim_src_app_models_customer_details_model__WEBPACK_IMPORTED_MODULE_2__["CustomerModel"]; });

/* harmony import */ var _lib_model_shared_propertygrid_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/model/shared/propertygrid.model */ "./projects/rina-lib/src/lib/model/shared/propertygrid.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropertyGridModel", function() { return _lib_model_shared_propertygrid_model__WEBPACK_IMPORTED_MODULE_3__["PropertyGridModel"]; });

/* harmony import */ var _lib_components_service_booking_service_availiblity_lib_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/components/service-booking/service.availiblity-lib.component */ "./projects/rina-lib/src/lib/components/service-booking/service.availiblity-lib.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceAvailiblityComponent", function() { return _lib_components_service_booking_service_availiblity_lib_component__WEBPACK_IMPORTED_MODULE_4__["ServiceAvailiblityComponent"]; });

/* harmony import */ var _lib_components_preferred_location_preferred_location_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/components/preferred-location/preferred.location.component */ "./projects/rina-lib/src/lib/components/preferred-location/preferred.location.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PreferredLocationComponent", function() { return _lib_components_preferred_location_preferred_location_component__WEBPACK_IMPORTED_MODULE_5__["PreferredLocationComponent"]; });

/* harmony import */ var _lib_components_confirmation_service_confirmation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/components/confirmation/service.confirmation */ "./projects/rina-lib/src/lib/components/confirmation/service.confirmation.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceConfirmationComponent", function() { return _lib_components_confirmation_service_confirmation__WEBPACK_IMPORTED_MODULE_6__["ServiceConfirmationComponent"]; });

/* harmony import */ var _lib_components_appointmentdetails_appointment_confirmation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/components/appointmentdetails/appointment.confirmation */ "./projects/rina-lib/src/lib/components/appointmentdetails/appointment.confirmation.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppoinmentConfirmationComponent", function() { return _lib_components_appointmentdetails_appointment_confirmation__WEBPACK_IMPORTED_MODULE_7__["AppoinmentConfirmationComponent"]; });

/* harmony import */ var _lib_components_property_grid_propertygrid_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/components/property-grid/propertygrid.component */ "./projects/rina-lib/src/lib/components/property-grid/propertygrid.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropertyGridComponnent", function() { return _lib_components_property_grid_propertygrid_component__WEBPACK_IMPORTED_MODULE_8__["PropertyGridComponnent"]; });

/* harmony import */ var _lib_components_before_confirm_before_confirm_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/components/before-confirm/before.confirm.component */ "./projects/rina-lib/src/lib/components/before-confirm/before.confirm.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BeforeConfirmComponent", function() { return _lib_components_before_confirm_before_confirm_component__WEBPACK_IMPORTED_MODULE_9__["BeforeConfirmComponent"]; });

/* harmony import */ var _lib_components_content_card_content_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lib/components/content-card/content.card.component */ "./projects/rina-lib/src/lib/components/content-card/content.card.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContentCardComponent", function() { return _lib_components_content_card_content_card_component__WEBPACK_IMPORTED_MODULE_10__["ContentCardComponent"]; });

/* harmony import */ var _lib_components_customer_vehicle_list_customer_vehiclelist_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./lib/components/customer-vehicle-list/customer.vehiclelist.component */ "./projects/rina-lib/src/lib/components/customer-vehicle-list/customer.vehiclelist.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomerVehicleListComponent", function() { return _lib_components_customer_vehicle_list_customer_vehiclelist_component__WEBPACK_IMPORTED_MODULE_11__["CustomerVehicleListComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContentCardData", function() { return _lib_components_customer_vehicle_list_customer_vehiclelist_component__WEBPACK_IMPORTED_MODULE_11__["ContentCardData"]; });

/* harmony import */ var _lib_components_service_job_type_jobtype_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./lib/components/service-job-type/jobtype.component */ "./projects/rina-lib/src/lib/components/service-job-type/jobtype.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceTypeComponent", function() { return _lib_components_service_job_type_jobtype_component__WEBPACK_IMPORTED_MODULE_12__["ServiceTypeComponent"]; });

/* harmony import */ var _lib_components_step_box_step_box_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./lib/components/step-box/step-box.component */ "./projects/rina-lib/src/lib/components/step-box/step-box.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RinaStepBoxComponent", function() { return _lib_components_step_box_step_box_component__WEBPACK_IMPORTED_MODULE_13__["RinaStepBoxComponent"]; });

/*
 * Public API Surface of rina-lib
 */




/* EXPORTED COMPONENT */












/***/ }),

/***/ "./projects/rinaalfahim/src/app/models/customer.details.model.ts":
/*!***********************************************************************!*\
  !*** ./projects/rinaalfahim/src/app/models/customer.details.model.ts ***!
  \***********************************************************************/
/*! exports provided: CustomerModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerModel", function() { return CustomerModel; });
/**
 * Created by dattaram on 14/1/19.
 */
/*export class CustomerDetailsInterface {
  customerId: number;
  mobile: number ;
  name: string;
  companyName: string;
  operatingStatus: string;
  email: string;
  altNumber: number;
  birthday: string;
  anniversary: string;
  profileImageUrl: string;
  callAttempt: number;
  bu: string;
  vehicle: string ;
  dateOfPurchase: string ;
  modelYear: string ;
  registrationNo: string ;
  customerClass: string;
  preferredModeOfContact: string ;
  lastService: string;
  nextService: string;
  openSRs: string;
  vehicleDetails: any[];

}*/
var CustomerModel = /** @class */ (function () {
    function CustomerModel() {
        this.customerId = null;
        this.mobile = null;
        this.name = '';
        this.companyName = '';
        this.operatingStatus = '';
        this.email = '';
        this.altNumber = null;
        this.birthday = '';
        this.anniversary = '';
        this.profileImageUrl = '';
        this.callAttempt = null;
        this.bu = '';
        this.vehicle = '';
        this.dateOfPurchase = '';
        this.modelYear = '';
        this.registrationNo = '';
        this.customerClass = '';
        this.preferredModeOfContact = '';
        this.lastService = '';
        this.nextService = '';
        this.openSRs = '';
        this.vehicleDetails = [];
    }
    return CustomerModel;
}());



/***/ }),

/***/ "./projects/rinaalfahim/src/app/models/customer.profile.model.ts":
/*!***********************************************************************!*\
  !*** ./projects/rinaalfahim/src/app/models/customer.profile.model.ts ***!
  \***********************************************************************/
/*! exports provided: CustomerProfile, Vehicle, Vehicles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerProfile", function() { return CustomerProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vehicle", function() { return Vehicle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vehicles", function() { return Vehicles; });
/**
 * Created by dattaram on 18/1/19.
 */
var CustomerProfile = /** @class */ (function () {
    function CustomerProfile() {
        this.customerId = '';
        this.customerNo = '';
        this.name = '';
        this.firstName = '';
        this.lastName = '';
        this.mobile = '';
        this.companyName = '';
        this.operatingStatus = '';
        this.email = '';
        this.birthday = '';
        this.altNumber = '';
        this.anniversary = '';
        this.profileImageUrl = '';
        this.customerClass = '';
        this.uaeId = '';
        this.preferredModeOfContact = '';
    }
    return CustomerProfile;
}());

var Vehicle = /** @class */ (function () {
    function Vehicle() {
        this.vehicleId = '';
        this.modelName = '';
        this.image = '';
        this.modelYear = '';
        this.engine = '';
        this.horsepower = '';
        this.torque = '';
        this.acceleration = '';
        this.topSpeed = '';
        this.vehicleClass = '';
    }
    return Vehicle;
}());

var Vehicles = /** @class */ (function () {
    function Vehicles() {
        this.vehicleId = '';
        this.registrationNo = '';
        this.dateOfPurchase = '';
        this.bu = '';
        this.lastService = '';
        this.nextService = '';
        this.openSRs = '';
        this.vehicleDetail = new Vehicle();
    }
    return Vehicles;
}());



/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-row>\n    <amexio-column [size]=3>\n        <amexio-card [header]=\"false\" [footer]=\"true\" [footer-align]=\"'right'\">\n            <amexio-image path=\"https://api.amexio.org/api/v5.5/assets/images/carousel/set1/1.jpg\">\n            </amexio-image>\n            <amexio-body>\n                Body\n            </amexio-body>\n            <amexio-image path=\"https://api.amexio.org/api/v5.5/assets/images/carousel/set1/1.jpg\">\n            </amexio-image>\n                <amexio-action>\n                Action\n            </amexio-action>\n        </amexio-card>\n    </amexio-column>\n\n    <amexio-column [size]=3>\n            <amexio-card [header]=\"true\" [footer]=\"true\" [footer-align]=\"'right'\">\n                    <amexio-header>\n                            Header\n                        </amexio-header>\n                <amexio-image path=\"https://api.amexio.org/api/v5.5/assets/images/carousel/set1/1.jpg\">\n                </amexio-image>\n                <amexio-body>\n                    Body\n                </amexio-body>\n                <amexio-action>\n                    Action\n                </amexio-action>\n            </amexio-card>\n        </amexio-column>\n    \n    <amexio-column [size]=3>\n        <amexio-card [header]=\"false\" [footer]=\"true\" [footer-align]=\"'right'\">\n            <amexio-body>\n                <amexio-image path=\"https://api.amexio.org/api/v5.5/assets/images/carousel/set1/1.jpg\">\n                </amexio-image>\n                Body\n            </amexio-body>\n            <amexio-action>\n                Action\n            </amexio-action>\n        </amexio-card>\n    </amexio-column>\n\n    <amexio-column [size]=3>\n        <amexio-card [header]=\"true\" [footer]=\"true\" [footer-align]=\"'right'\">\n            <amexio-header>\n                Header\n            </amexio-header>\n            <amexio-body>\n                <amexio-image path=\"https://api.amexio.org/api/v5.5/assets/images/carousel/set1/1.jpg\">\n                </amexio-image>\n                Body\n            </amexio-body>\n            <amexio-action>\n                Action\n            </amexio-action>\n        </amexio-card>\n    </amexio-column>\n\n</amexio-row>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var projects_rina_lib_src_public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/rina-lib/src/public_api */ "./projects/rina-lib/src/public_api.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'rina';
        this.showWindow = false;
        this.serviceModel = new projects_rina_lib_src_public_api__WEBPACK_IMPORTED_MODULE_1__["ServiceAvailibilityModel"]();
    }
    AppComponent.prototype.onClick = function () {
        this.showWindow = true;
    };
    AppComponent.prototype.scheduleAppointment = function () {
        console.log(this.serviceModel);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var projects_rina_lib_src_public_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! projects/rina-lib/src/public_api */ "./projects/rina-lib/src/public_api.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                projects_rina_lib_src_public_api__WEBPACK_IMPORTED_MODULE_4__["RinaLibModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_6__["AmexioWidgetModule"],
                amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_6__["AmexioEnterpriseModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/travis/build/meta-magic/alfahim-bmw-demo/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map