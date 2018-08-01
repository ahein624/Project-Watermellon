webpackJsonp([25],{

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MagazineHomePageModule", function() { return MagazineHomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__magazine_home__ = __webpack_require__(760);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_magazine_magazine_home_magazine_home_module__ = __webpack_require__(761);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MagazineHomePageModule = (function () {
    function MagazineHomePageModule() {
    }
    MagazineHomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__magazine_home__["a" /* MagazineHomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__magazine_home__["a" /* MagazineHomePage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_magazine_magazine_home_magazine_home_module__["a" /* MagazineHomeModule */]
            ],
        })
    ], MagazineHomePageModule);
    return MagazineHomePageModule;
}());

//# sourceMappingURL=magazine-home.module.js.map

/***/ }),

/***/ 760:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MagazineHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MagazineListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MagazineHomePage = (function () {
    function MagazineHomePage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.data = {};
        this.events = {};
        this.events.openDetail = function (item) {
            // let chatModal = modalCtrl.create('ChatConversationPage',{'data':item});
            // chatModal.present();
            navCtrl.push('MagazineDetailPage');
        };
    }
    MagazineHomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MagazineHomePage');
    };
    MagazineHomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-magazine-home',template:/*ion-inline-start:"D:\Visual Studio\Personal\Project-Watermellon\src\pages\magazine\magazine-home\magazine-home.html"*/'<!--\n\n  Generated template for the MagazineListPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-toolbar class="pd-0 transparent">\n\n      <button ion-button menuToggle class="text-black">\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-searchbar class="light-searchbar round transparent text-white" padding></ion-searchbar>\n\n    </ion-toolbar>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content class="white">\n\n	<magazine-home [data]="data" [events]="events"></magazine-home>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"D:\Visual Studio\Personal\Project-Watermellon\src\pages\magazine\magazine-home\magazine-home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */]])
    ], MagazineHomePage);
    return MagazineHomePage;
}());

//# sourceMappingURL=magazine-home.js.map

/***/ }),

/***/ 761:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MagazineHomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__magazine_home__ = __webpack_require__(762);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MagazineHomeModule = (function () {
    function MagazineHomeModule() {
    }
    MagazineHomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__magazine_home__["a" /* MagazineHomeComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__magazine_home__["a" /* MagazineHomeComponent */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__magazine_home__["a" /* MagazineHomeComponent */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], MagazineHomeModule);
    return MagazineHomeModule;
}());

//# sourceMappingURL=magazine-home.module.js.map

/***/ }),

/***/ 762:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MagazineHomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the MagazineListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var MagazineHomeComponent = (function () {
    function MagazineHomeComponent() {
        var _this = this;
        this.onCallbackEvent = function (event) {
            if (_this.events[event]) {
                _this.events[event]();
            }
        };
        console.log('Hello MagazineHomeComponent Component');
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], MagazineHomeComponent.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], MagazineHomeComponent.prototype, "data", void 0);
    MagazineHomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'magazine-home',template:/*ion-inline-start:"D:\Visual Studio\Personal\Project-Watermellon\src\components\magazine\magazine-home\magazine-home.html"*/'\n\n<div padding class="white-1">\n\n  \n\n  <div class="mgb-30 ani-right-to-left">\n\n    <h2 class="fw-600 fs-30">New Post for You</h2>\n\n    <div class="pink line-decor"></div>\n\n  </div>\n\n  \n\n  <div class="shadow-3 wrapper-news pst-relative mgb-20 ani-bottom-to-left">\n\n    <ion-icon class="left-bookmark" name="ios-bookmark-outline"></ion-icon>\n\n    <ion-row (click)="onCallbackEvent(\'openDetail\')">\n\n      <ion-col col-8 class="pdl-15 pdr-10">\n\n        <h3 class="fw-600 mgt-20 mgb-2">Lorem Ipsum is simply</h3>\n\n        <p class="text-grey-4 mgt-0">Post by Koodinh</p>\n\n        <p class="text-grey-3 fs-12">Tue, Jan 16, 2017</p>\n\n      </ion-col>\n\n      <ion-col col-4 class="pd-0">\n\n        <img src="assets/img/bg3.jpg" alt="">\n\n      </ion-col>\n\n    </ion-row>\n\n  </div>\n\n\n\n  <div class="shadow-3 wrapper-news pst-relative mgb-20 ani-bottom-to-left">\n\n    <ion-icon class="right-bookmark" name="ios-bookmark-outline"></ion-icon>\n\n    <ion-row (click)="onCallbackEvent(\'openDetail\')">\n\n      <ion-col col-4 class="pd-0">\n\n        <img src="assets/img/bg5.jpg" alt="">\n\n      </ion-col>\n\n      <ion-col col-8 class="pdl-15 pdr-10">\n\n        <h3 class="fw-600 mgt-20 mgb-2">Lorem Ipsum is simply</h3>\n\n        <p class="text-grey-4 mgt-0">Post by Koodinh</p>\n\n        <p class="text-grey-3 fs-12">Tue, Jan 16, 2017</p>\n\n      </ion-col>\n\n    </ion-row>\n\n  </div>\n\n\n\n  <div class="shadow-3 wrapper-news pst-relative mgb-20 ani-bottom-to-left">\n\n    <ion-icon class="left-bookmark" name="ios-bookmark-outline"></ion-icon>\n\n    <ion-row (click)="onCallbackEvent(\'openDetail\')">\n\n      <ion-col col-8 class="pdl-15 pdr-10">\n\n        <h3 class="fw-600 mgt-20 mgb-2">Lorem Ipsum is simply</h3>\n\n        <p class="text-grey-4 mgt-0">Post by Koodinh</p>\n\n        <p class="text-grey-3 fs-12">Tue, Jan 16, 2017</p>\n\n      </ion-col>\n\n      <ion-col col-4 class="pd-0">\n\n        <img src="assets/img/bg10.jpg" alt="">\n\n      </ion-col>\n\n    </ion-row>\n\n  </div>\n\n\n\n  <div class="shadow-3 wrapper-news pst-relative mgb-20 ani-bottom-to-left">\n\n    <ion-icon class="right-bookmark" name="ios-bookmark-outline"></ion-icon>\n\n    <ion-row (click)="onCallbackEvent(\'openDetail\')">\n\n      <ion-col col-4 class="pd-0">\n\n        <img src="assets/img/bg14.jpg" alt="">\n\n      </ion-col>\n\n      <ion-col col-8 class="pdl-15 pdr-10">\n\n        <h3 class="fw-600 mgt-20 mgb-2">Lorem Ipsum is simply</h3>\n\n        <p class="text-grey-4 mgt-0">Post by Koodinh</p>\n\n        <p class="text-grey-3 fs-12">Tue, Jan 16, 2017</p>\n\n      </ion-col>\n\n    </ion-row>\n\n  </div>\n\n\n\n  <div class="shadow-3 wrapper-news pst-relative mgb-20 ani-bottom-to-left">\n\n    <ion-icon class="left-bookmark" name="ios-bookmark-outline"></ion-icon>\n\n    <ion-row (click)="onCallbackEvent(\'openDetail\')">\n\n      <ion-col col-8 class="pdl-15 pdr-10">\n\n        <h3 class="fw-600 mgt-20 mgb-2">Lorem Ipsum is simply</h3>\n\n        <p class="text-grey-4 mgt-0">Post by Koodinh</p>\n\n        <p class="text-grey-3 fs-12">Tue, Jan 16, 2017</p>\n\n      </ion-col>\n\n      <ion-col col-4 class="pd-0">\n\n        <img src="assets/img/bg1.jpg" alt="">\n\n      </ion-col>\n\n    </ion-row>\n\n  </div>\n\n\n\n  <div class="shadow-3 wrapper-news pst-relative mgb-20 ani-bottom-to-left">\n\n    <ion-icon class="right-bookmark" name="ios-bookmark-outline"></ion-icon>\n\n    <ion-row (click)="onCallbackEvent(\'openDetail\')">\n\n      <ion-col col-4 class="pd-0">\n\n        <img src="assets/img/bg5.jpg" alt="">\n\n      </ion-col>\n\n      <ion-col col-8 class="pdl-15 pdr-10">\n\n        <h3 class="fw-600 mgt-20 mgb-2">Lorem Ipsum is simply</h3>\n\n        <p class="text-grey-4 mgt-0">Post by Koodinh</p>\n\n        <p class="text-grey-3 fs-12">Tue, Jan 16, 2017</p>\n\n      </ion-col>\n\n    </ion-row>\n\n  </div>\n\n\n\n</div>'/*ion-inline-end:"D:\Visual Studio\Personal\Project-Watermellon\src\components\magazine\magazine-home\magazine-home.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], MagazineHomeComponent);
    return MagazineHomeComponent;
}());

//# sourceMappingURL=magazine-home.js.map

/***/ })

});
//# sourceMappingURL=25.js.map