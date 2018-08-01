webpackJsonp([24],{

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MagazineListPageModule", function() { return MagazineListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__magazine_list__ = __webpack_require__(756);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_magazine_magazine_list_magazine_list_module__ = __webpack_require__(757);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MagazineListPageModule = (function () {
    function MagazineListPageModule() {
    }
    MagazineListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__magazine_list__["a" /* MagazineListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__magazine_list__["a" /* MagazineListPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_magazine_magazine_list_magazine_list_module__["a" /* MagazineListModule */]
            ],
        })
    ], MagazineListPageModule);
    return MagazineListPageModule;
}());

//# sourceMappingURL=magazine-list.module.js.map

/***/ }),

/***/ 756:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MagazineListPage; });
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
var MagazineListPage = (function () {
    function MagazineListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = {};
        this.events = {};
        this.events.openDetail = function (item) {
            navCtrl.push('MagazineDetailPage');
        };
    }
    MagazineListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MagazineListPage');
    };
    MagazineListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-magazine-list',template:/*ion-inline-start:"D:\Visual Studio\Personal\Project-Watermellon\src\pages\magazine\magazine-list\magazine-list.html"*/'<!--\n\n  Generated template for the MagazineListPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-toolbar class="pd-0 transparent">\n\n      <button ion-button menuToggle class="text-white">\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-searchbar class="light-searchbar round transparent text-white" padding></ion-searchbar>\n\n    </ion-toolbar>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content class="white">\n\n	<magazine-list [data]="data" [events]="events"></magazine-list>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"D:\Visual Studio\Personal\Project-Watermellon\src\pages\magazine\magazine-list\magazine-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], MagazineListPage);
    return MagazineListPage;
}());

//# sourceMappingURL=magazine-list.js.map

/***/ }),

/***/ 757:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MagazineListModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__magazine_list__ = __webpack_require__(758);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MagazineListModule = (function () {
    function MagazineListModule() {
    }
    MagazineListModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__magazine_list__["a" /* MagazineListComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__magazine_list__["a" /* MagazineListComponent */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__magazine_list__["a" /* MagazineListComponent */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], MagazineListModule);
    return MagazineListModule;
}());

//# sourceMappingURL=magazine-list.module.js.map

/***/ }),

/***/ 758:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MagazineListComponent; });
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
var MagazineListComponent = (function () {
    function MagazineListComponent() {
        var _this = this;
        this.onCallbackEvent = function (event) {
            if (_this.events[event]) {
                _this.events[event]();
            }
        };
        console.log('Hello MagazineListComponent Component');
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], MagazineListComponent.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], MagazineListComponent.prototype, "data", void 0);
    MagazineListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'magazine-list',template:/*ion-inline-start:"D:\Visual Studio\Personal\Project-Watermellon\src\components\magazine\magazine-list\magazine-list.html"*/'\n\n<div padding class="white-1">\n\n\n\n  <div class="white shadow-3 mgb-20 ani-bottom-to-top">\n\n    <div class="pd-15" (click)="onCallbackEvent(\'openDetail\')">\n\n      <h2 class="">Lorem Impsum</h2>\n\n      <p class="">posted at JAN 15, 2018</p>\n\n      <p class="text-grey-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy</p>\n\n    </div>\n\n    <div (click)="onCallbackEvent(\'openDetail\')">\n\n      <img src="assets/img/bg12.jpg" alt="">\n\n    </div>\n\n    <ion-row class="pd-10 pdb-20">\n\n      <ion-col col-4 text-left class="text-grey-4">\n\n        <ion-icon name="md-eye"></ion-icon>100\n\n      </ion-col>\n\n      <ion-col col-4 text-center class="text-grey-4">\n\n        <ion-icon name="ios-chatbubbles-outline"></ion-icon> 40\n\n      </ion-col>\n\n      <ion-col col-4 text-right class="text-grey-4">\n\n        <ion-icon name="md-share"></ion-icon> 2\n\n      </ion-col>\n\n    </ion-row>\n\n  </div>\n\n\n\n  <div class="white shadow-3 mgb-20 ani-bottom-to-top">\n\n    <div class="pd-15" (click)="onCallbackEvent(\'openDetail\')">\n\n      <h2 class="">Lorem Impsum</h2>\n\n      <p class="">posted at JAN 15, 2018</p>\n\n      <p class="text-grey-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy</p>\n\n    </div>\n\n    <div (click)="onCallbackEvent(\'openDetail\')">\n\n      <img src="assets/img/bg19.jpg" alt="">\n\n    </div>\n\n    <ion-row class="pd-10 pdb-20">\n\n      <ion-col col-4 text-left class="text-grey-4">\n\n        <ion-icon name="md-eye"></ion-icon>100\n\n      </ion-col>\n\n      <ion-col col-4 text-center class="text-grey-4">\n\n        <ion-icon name="ios-chatbubbles-outline"></ion-icon> 40\n\n      </ion-col>\n\n      <ion-col col-4 text-right class="text-grey-4">\n\n        <ion-icon name="md-share"></ion-icon> 2\n\n      </ion-col>\n\n    </ion-row>\n\n  </div>\n\n\n\n  <div class="white shadow-3 mgb-20 ani-bottom-to-top">\n\n    <div class="pd-15" (click)="onCallbackEvent(\'openDetail\')">\n\n      <h2 class="">Lorem Impsum</h2>\n\n      <p class="">posted at JAN 15, 2018</p>\n\n      <p class="text-grey-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy</p>\n\n    </div>\n\n    <div (click)="onCallbackEvent(\'openDetail\')">\n\n      <img src="assets/img/bg11.jpg" alt="">\n\n    </div>\n\n    <ion-row class="pd-10 pdb-20">\n\n      <ion-col col-4 text-left class="text-grey-4">\n\n        <ion-icon name="md-eye"></ion-icon>100\n\n      </ion-col>\n\n      <ion-col col-4 text-center class="text-grey-4">\n\n        <ion-icon name="ios-chatbubbles-outline"></ion-icon> 40\n\n      </ion-col>\n\n      <ion-col col-4 text-right class="text-grey-4">\n\n        <ion-icon name="md-share"></ion-icon> 2\n\n      </ion-col>\n\n    </ion-row>\n\n  </div>\n\n\n\n  <div class="white shadow-3 mgb-20 ani-bottom-to-top">\n\n    <div class="pd-15" (click)="onCallbackEvent(\'openDetail\')">\n\n      <h2 class="">Lorem Impsum</h2>\n\n      <p class="">posted at JAN 15, 2018</p>\n\n      <p class="text-grey-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy</p>\n\n    </div>\n\n    <div (click)="onCallbackEvent(\'openDetail\')">\n\n      <img src="assets/img/bg16.jpg" alt="">\n\n    </div>\n\n    <ion-row class="pd-10 pdb-20">\n\n      <ion-col col-4 text-left class="text-grey-4">\n\n        <ion-icon name="md-eye"></ion-icon>100\n\n      </ion-col>\n\n      <ion-col col-4 text-center class="text-grey-4">\n\n        <ion-icon name="ios-chatbubbles-outline"></ion-icon> 40\n\n      </ion-col>\n\n      <ion-col col-4 text-right class="text-grey-4">\n\n        <ion-icon name="md-share"></ion-icon> 2\n\n      </ion-col>\n\n    </ion-row>\n\n  </div>\n\n\n\n  <div class="white shadow-3 mgb-20 ani-bottom-to-top">\n\n    <div class="pd-15" (click)="onCallbackEvent(\'openDetail\')">\n\n      <h2 class="">Lorem Impsum</h2>\n\n      <p class="">posted at JAN 15, 2018</p>\n\n      <p class="text-grey-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy</p>\n\n    </div>\n\n    <div (click)="onCallbackEvent(\'openDetail\')">\n\n      <img src="assets/img/bg17.jpg" alt="">\n\n    </div>\n\n    <ion-row class="pd-10 pdb-20">\n\n      <ion-col col-4 text-left class="text-grey-4">\n\n        <ion-icon name="md-eye"></ion-icon>100\n\n      </ion-col>\n\n      <ion-col col-4 text-center class="text-grey-4">\n\n        <ion-icon name="ios-chatbubbles-outline"></ion-icon> 40\n\n      </ion-col>\n\n      <ion-col col-4 text-right class="text-grey-4">\n\n        <ion-icon name="md-share"></ion-icon> 2\n\n      </ion-col>\n\n    </ion-row>\n\n  </div>\n\n\n\n  <div class="white shadow-3 mgb-20 ani-bottom-to-top">\n\n    <div class="pd-15" (click)="onCallbackEvent(\'openDetail\')">\n\n      <h2 class="">Lorem Impsum</h2>\n\n      <p class="">posted at JAN 15, 2018</p>\n\n      <p class="text-grey-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy</p>\n\n    </div>\n\n    <div (click)="onCallbackEvent(\'openDetail\')">\n\n      <img src="assets/img/bg13.jpg" alt="">\n\n    </div>\n\n    <ion-row class="pd-10 pdb-20">\n\n      <ion-col col-4 text-left class="text-grey-4">\n\n        <ion-icon name="md-eye"></ion-icon>100\n\n      </ion-col>\n\n      <ion-col col-4 text-center class="text-grey-4">\n\n        <ion-icon name="ios-chatbubbles-outline"></ion-icon> 40\n\n      </ion-col>\n\n      <ion-col col-4 text-right class="text-grey-4">\n\n        <ion-icon name="md-share"></ion-icon> 2\n\n      </ion-col>\n\n    </ion-row>\n\n  </div>\n\n\n\n</div>'/*ion-inline-end:"D:\Visual Studio\Personal\Project-Watermellon\src\components\magazine\magazine-list\magazine-list.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], MagazineListComponent);
    return MagazineListComponent;
}());

//# sourceMappingURL=magazine-list.js.map

/***/ })

});
//# sourceMappingURL=24.js.map