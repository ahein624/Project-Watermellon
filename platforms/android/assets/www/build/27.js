webpackJsonp([27],{

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MagazineBookmarkPageModule", function() { return MagazineBookmarkPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__magazine_bookmark__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_magazine_magazine_bookmark_magazine_bookmark_module__ = __webpack_require__(544);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MagazineBookmarkPageModule = (function () {
    function MagazineBookmarkPageModule() {
    }
    MagazineBookmarkPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__magazine_bookmark__["a" /* MagazineBookmarkPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__magazine_bookmark__["a" /* MagazineBookmarkPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_magazine_magazine_bookmark_magazine_bookmark_module__["a" /* MagazineBookmarkModule */]
            ],
        })
    ], MagazineBookmarkPageModule);
    return MagazineBookmarkPageModule;
}());

//# sourceMappingURL=magazine-bookmark.module.js.map

/***/ }),

/***/ 543:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MagazineBookmarkPage; });
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
 * Generated class for the MagazineBookmarkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MagazineBookmarkPage = (function () {
    function MagazineBookmarkPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = {};
        this.data = {};
        this.check_search = false;
        this.events.openDetail = function (item) {
            navCtrl.push('MagazineDetailPage');
        };
    }
    MagazineBookmarkPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MagazineBookmarkPage');
    };
    MagazineBookmarkPage.prototype.show_search = function () {
        if (this.check_search == true) {
            this.check_search = false;
        }
        else {
            this.check_search = true;
        }
    };
    MagazineBookmarkPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-magazine-bookmark',template:/*ion-inline-start:"/Users/andrewhein/Desktop/WestmorelandWorking/src/pages/magazine/magazine-bookmark/magazine-bookmark.html"*/'<!--\n  Generated template for the MagazineBookmarkPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n    <ion-toolbar class="pd-0 transparent skin-light skin skin-transparent">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n\n      <ion-title *ngIf="check_search != true"></ion-title>\n      <ion-searchbar class="light-searchbar round transparent text-white" *ngIf="check_search == true"></ion-searchbar>\n\n      <ion-buttons end class="toolbar-group-btn">\n        <button ion-button small icon-only color="royal" class="mgr-10" (click)="show_search()">\n          <ion-icon class="fs-18" name="ios-search" *ngIf="check_search != true"></ion-icon>\n          <ion-icon class="fs-24" name="ios-close" *ngIf="check_search == true"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n	<magazine-bookmark [data]="data" [events]="events"></magazine-bookmark>\n</ion-content>\n'/*ion-inline-end:"/Users/andrewhein/Desktop/WestmorelandWorking/src/pages/magazine/magazine-bookmark/magazine-bookmark.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], MagazineBookmarkPage);
    return MagazineBookmarkPage;
}());

//# sourceMappingURL=magazine-bookmark.js.map

/***/ }),

/***/ 544:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MagazineBookmarkModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__magazine_bookmark__ = __webpack_require__(545);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MagazineBookmarkModule = (function () {
    function MagazineBookmarkModule() {
    }
    MagazineBookmarkModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__magazine_bookmark__["a" /* MagazineBookmarkComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__magazine_bookmark__["a" /* MagazineBookmarkComponent */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__magazine_bookmark__["a" /* MagazineBookmarkComponent */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], MagazineBookmarkModule);
    return MagazineBookmarkModule;
}());

//# sourceMappingURL=magazine-bookmark.module.js.map

/***/ }),

/***/ 545:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MagazineBookmarkComponent; });
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
 * Generated class for the MagazineBookmarkComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var MagazineBookmarkComponent = (function () {
    function MagazineBookmarkComponent() {
        var _this = this;
        this.onCallbackEvent = function (event) {
            if (_this.events[event]) {
                _this.events[event]();
            }
        };
        console.log('Hello MagazineBookmarkComponent Component');
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], MagazineBookmarkComponent.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], MagazineBookmarkComponent.prototype, "data", void 0);
    MagazineBookmarkComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'magazine-bookmark',template:/*ion-inline-start:"/Users/andrewhein/Desktop/WestmorelandWorking/src/components/magazine/magazine-bookmark/magazine-bookmark.html"*/'\n<div class="white-1">\n  \n  <div class="ani-left-to-right">\n    <ion-row>\n      <ion-col col-4 class="pd-0 wrapper-thumb" (click)="onCallbackEvent(\'openDetail\')">\n        <img src="assets/img/bg15.jpg" alt="">\n      </ion-col>\n      <ion-col col-8 class="pdl-15">\n        <h4 class="fs-14 fw-600 mgb-0 pdt-10" (click)="onCallbackEvent(\'openDetail\')">Lorem Ipsum is simply dummy text of the printing</h4>\n        <p class="group-more fs-12 text-grey-3 mgt-5">\n          <span><ion-icon name="md-time"></ion-icon> Jan 16, 2018</span>\n          <button ion-button icon-left clear small class="fs-12">\n            <ion-icon name="bookmark"></ion-icon>unmark\n          </button>\n        </p>\n      </ion-col>\n    </ion-row>\n    <div class="divider grey-1"></div>\n  </div>\n  <div class="ani-left-to-right">\n    <ion-row>\n      <ion-col col-4 class="pd-0 wrapper-thumb" (click)="onCallbackEvent(\'openDetail\')">\n        <img src="assets/img/bg6.jpg" alt="">\n      </ion-col>\n      <ion-col col-8 class="pdl-15">\n        <h4 class="fs-14 fw-600 mgb-0 pdt-10" (click)="onCallbackEvent(\'openDetail\')">Lorem Ipsum is simply dummy text of the printing</h4>\n        <p class="group-more fs-12 text-grey-3 mgt-5">\n          <span><ion-icon name="md-time"></ion-icon> Jan 16, 2018</span>\n          <button ion-button icon-left clear small class="">\n            <ion-icon name="bookmark"></ion-icon>unmark\n          </button>\n        </p>\n      </ion-col>\n    </ion-row>\n    <div class="divider grey-1"></div>\n  </div>\n  <div class="ani-left-to-right">\n    <ion-row>\n      <ion-col col-4 class="pd-0 wrapper-thumb" (click)="onCallbackEvent(\'openDetail\')">\n        <img src="assets/img/bg16.jpg" alt="">\n      </ion-col>\n      <ion-col col-8 class="pdl-15">\n        <h4 class="fs-14 fw-600 mgb-0 pdt-10" (click)="onCallbackEvent(\'openDetail\')">Lorem Ipsum is simply dummy text of the printing</h4>\n        <p class="group-more fs-12 text-grey-3 mgt-5">\n          <span><ion-icon name="md-time"></ion-icon> Jan 16, 2018</span>\n          <button ion-button icon-left clear small class="">\n            <ion-icon name="bookmark"></ion-icon>unmark\n          </button>\n        </p>\n      </ion-col>\n    </ion-row>\n    <div class="divider grey-1"></div>\n  </div>\n  <div class="ani-left-to-right">\n    <ion-row>\n      <ion-col col-4 class="pd-0 wrapper-thumb" (click)="onCallbackEvent(\'openDetail\')">\n        <img src="assets/img/bg17.jpg" alt="">\n      </ion-col>\n      <ion-col col-8 class="pdl-15">\n        <h4 class="fs-14 fw-600 mgb-0 pdt-10" (click)="onCallbackEvent(\'openDetail\')">Lorem Ipsum is simply dummy text of the printing</h4>\n        <p class="group-more fs-12 text-grey-3 mgt-5">\n          <span><ion-icon name="md-time"></ion-icon> Jan 16, 2018</span>\n          <button ion-button icon-left clear small class="">\n            <ion-icon name="bookmark"></ion-icon>unmark\n          </button>\n        </p>\n      </ion-col>\n    </ion-row>\n    <div class="divider grey-1"></div>\n  </div>\n  <div class="ani-left-to-right">\n    <ion-row>\n      <ion-col col-4 class="pd-0 wrapper-thumb" (click)="onCallbackEvent(\'openDetail\')">\n        <img src="assets/img/bg19.jpg" alt="">\n      </ion-col>\n      <ion-col col-8 class="pdl-15">\n        <h4 class="fs-14 fw-600 mgb-0 pdt-10" (click)="onCallbackEvent(\'openDetail\')">Lorem Ipsum is simply dummy text of the printing</h4>\n        <p class="group-more fs-12 text-grey-3 mgt-5">\n          <span><ion-icon name="md-time"></ion-icon> Jan 16, 2018</span>\n          <button ion-button icon-left clear small class="">\n            <ion-icon name="bookmark"></ion-icon>unmark\n          </button>\n        </p>\n      </ion-col>\n    </ion-row>\n    <div class="divider grey-1"></div>\n  </div>\n  <div class="ani-left-to-right">\n    <ion-row>\n      <ion-col col-4 class="pd-0 wrapper-thumb" (click)="onCallbackEvent(\'openDetail\')">\n        <img src="assets/img/bg11.jpg" alt="">\n      </ion-col>\n      <ion-col col-8 class="pdl-15">\n        <h4 class="fs-14 fw-600 mgb-0 pdt-10" (click)="onCallbackEvent(\'openDetail\')">Lorem Ipsum is simply dummy text of the printing</h4>\n        <p class="group-more fs-12 text-grey-3 mgt-5">\n          <span><ion-icon name="md-time"></ion-icon> Jan 16, 2018</span>\n          <button ion-button icon-left clear small class="">\n            <ion-icon name="bookmark"></ion-icon>unmark\n          </button>\n        </p>\n      </ion-col>\n    </ion-row>\n    <div class="divider grey-1"></div>\n  </div>\n  <div class="ani-left-to-right">\n    <ion-row>\n      <ion-col col-4 class="pd-0 wrapper-thumb" (click)="onCallbackEvent(\'openDetail\')">\n        <img src="assets/img/bg18.jpg" alt="">\n      </ion-col>\n      <ion-col col-8 class="pdl-15">\n        <h4 class="fs-14 fw-600 mgb-0 pdt-10" (click)="onCallbackEvent(\'openDetail\')">Lorem Ipsum is simply dummy text of the printing</h4>\n        <p class="group-more fs-12 text-grey-3 mgt-5">\n          <span><ion-icon name="md-time"></ion-icon> Jan 16, 2018</span>\n          <button ion-button icon-left clear small class="">\n            <ion-icon name="bookmark"></ion-icon>unmark\n          </button>\n        </p>\n      </ion-col>\n    </ion-row>\n    <div class="divider grey-1"></div>\n  </div>\n  <div class="ani-left-to-right">\n    <ion-row>\n      <ion-col col-4 class="pd-0 wrapper-thumb" (click)="onCallbackEvent(\'openDetail\')">\n        <img src="assets/img/bg12.jpg" alt="">\n      </ion-col>\n      <ion-col col-8 class="pdl-15">\n        <h4 class="fs-14 fw-600 mgb-0 pdt-10" (click)="onCallbackEvent(\'openDetail\')">Lorem Ipsum is simply dummy text of the printing</h4>\n        <p class="group-more fs-12 text-grey-3 mgt-5">\n          <span><ion-icon name="md-time"></ion-icon> Jan 16, 2018</span>\n          <button ion-button icon-left clear small class="">\n            <ion-icon name="bookmark"></ion-icon>unmark\n          </button>\n        </p>\n      </ion-col>\n    </ion-row>\n    <div class="divider grey-1"></div>\n  </div>\n\n</div>\n\n'/*ion-inline-end:"/Users/andrewhein/Desktop/WestmorelandWorking/src/components/magazine/magazine-bookmark/magazine-bookmark.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], MagazineBookmarkComponent);
    return MagazineBookmarkComponent;
}());

//# sourceMappingURL=magazine-bookmark.js.map

/***/ })

});
//# sourceMappingURL=27.js.map