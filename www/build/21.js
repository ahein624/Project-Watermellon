webpackJsonp([21],{

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicHomePageModule", function() { return MusicHomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__music_home__ = __webpack_require__(769);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_music_music_home_music_home_module__ = __webpack_require__(770);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MusicHomePageModule = (function () {
    function MusicHomePageModule() {
    }
    MusicHomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__music_home__["a" /* MusicHomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__music_home__["a" /* MusicHomePage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_music_music_home_music_home_module__["a" /* MusicHomeModule */]
            ],
        })
    ], MusicHomePageModule);
    return MusicHomePageModule;
}());

//# sourceMappingURL=music-home.module.js.map

/***/ }),

/***/ 769:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MusicHomePage; });
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
 * Generated class for the MusicHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MusicHomePage = (function () {
    function MusicHomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = {};
        this.events = {};
        this.check_search = false;
        this.events.openPlayer = function (item) {
            navCtrl.push('MusicPlayerPage');
        };
    }
    MusicHomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MusicHomePage');
    };
    MusicHomePage.prototype.show_search = function () {
        if (this.check_search == true) {
            this.check_search = false;
        }
        else {
            this.check_search = true;
        }
    };
    MusicHomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-music-home',template:/*ion-inline-start:"D:\Visual Studio\Personal\Project-Watermellon\src\pages\music\music-home\music-home.html"*/'\n\n<ion-header>\n\n    <ion-toolbar>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n\n\n      <ion-title *ngIf="check_search != true"></ion-title>\n\n\n\n      <ion-searchbar class="dark-searchbar round transparent text-white" *ngIf="check_search == true"></ion-searchbar>\n\n\n\n      <ion-buttons end class="toolbar-group-btn">\n\n        <button ion-button small icon-only color="royal" class="mgr-10" (click)="show_search()">\n\n          <ion-icon class="fs-18" name="ios-search" *ngIf="check_search != true"></ion-icon>\n\n          <ion-icon class="fs-24" name="ios-close" *ngIf="check_search == true"></ion-icon>\n\n        </button>\n\n        <button ion-button small icon-only color="royal" class="mgr-10 fs-14">\n\n          <ion-icon class="fs-20" name="md-more"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n    </ion-toolbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content class="lama-vs-coban">\n\n	<music-home [data]="data" [events]="events"></music-home>\n\n</ion-content>'/*ion-inline-end:"D:\Visual Studio\Personal\Project-Watermellon\src\pages\music\music-home\music-home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], MusicHomePage);
    return MusicHomePage;
}());

//# sourceMappingURL=music-home.js.map

/***/ }),

/***/ 770:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MusicHomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__music_home__ = __webpack_require__(771);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MusicHomeModule = (function () {
    function MusicHomeModule() {
    }
    MusicHomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__music_home__["a" /* MusicHomeComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__music_home__["a" /* MusicHomeComponent */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__music_home__["a" /* MusicHomeComponent */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], MusicHomeModule);
    return MusicHomeModule;
}());

//# sourceMappingURL=music-home.module.js.map

/***/ }),

/***/ 771:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MusicHomeComponent; });
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
 * Generated class for the MusicHomeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var MusicHomeComponent = (function () {
    function MusicHomeComponent() {
        var _this = this;
        this.section = "popular";
        this.onCallbackEvent = function (event) {
            if (_this.events[event]) {
                _this.events[event]();
            }
        };
        console.log('Hello MusicHomeComponent Component');
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], MusicHomeComponent.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], MusicHomeComponent.prototype, "events", void 0);
    MusicHomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'music-home',template:/*ion-inline-start:"D:\Visual Studio\Personal\Project-Watermellon\src\components\music\music-home\music-home.html"*/'\n\n\n\n<div padding>\n\n  <ion-toolbar no-border-top class="mgt--10 mgb-10">\n\n    <ion-segment [(ngModel)]="section" class="segment-line-deviation text-white stroke-white">\n\n      <ion-segment-button class="fs-14 pdl-0 pdr-10 text-left" value="popular">\n\n        Popular\n\n      </ion-segment-button>\n\n      <ion-segment-button class="fs-14 pdl-0 pdr-10 text-left" value="trend">\n\n        Trend\n\n      </ion-segment-button>\n\n      <ion-segment-button class="fs-14 pdl-0 pdr-10 text-left" value="chart">\n\n        Chart\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  </ion-toolbar>\n\n\n\n  <h4 class="fs-20 fw-600 text-white mgb-0 spacing-1">New</h4>\n\n  <ion-row class="mgl--10 mgr--70">\n\n    <ion-slides slidesPerView="3" autoplay="2500" loop="true" speed="500" pager="false" class="height-auto">\n\n      <ion-slide class="pd-10" (click)="onCallbackEvent(\'openPlayer\')">\n\n        <div class="thumb-album shadow-2">\n\n          <img src="assets/img/demo1.jpg" alt="">\n\n          <div class="white decor"><span class="inline-block stroke-white"></span></div>\n\n        </div>\n\n        <div class="text-left mgt-5">\n\n          <h5 class="text-white fs-13 mg-0">Name Album</h5>\n\n          <p class="text-grey-1 fs-11 mg-0">description in here</p>\n\n        </div>\n\n      </ion-slide>\n\n      <ion-slide class="pd-10" (click)="onCallbackEvent(\'openPlayer\')">\n\n        <div class="thumb-album shadow-2">\n\n          <img src="assets/img/demo2.jpg" alt="">\n\n          <div class="white decor"><span class="inline-block stroke-white"></span></div>\n\n        </div>\n\n        <div class="text-left mgt-5">\n\n          <h5 class="text-white fs-13 mg-0">Name Album</h5>\n\n          <p class="text-grey-1 fs-11 mg-0">description in here</p>\n\n        </div>\n\n      </ion-slide>\n\n      <ion-slide class="pd-10" (click)="onCallbackEvent(\'openPlayer\')">\n\n        <div class="thumb-album shadow-2">\n\n          <img src="assets/img/demo3.jpg" alt="">\n\n          <div class="white decor"><span class="inline-block stroke-white"></span></div>\n\n        </div>\n\n        <div class="text-left mgt-5">\n\n          <h5 class="text-white fs-13 mg-0">Name Album</h5>\n\n          <p class="text-grey-1 fs-11 mg-0">description in here</p>\n\n        </div>\n\n      </ion-slide>\n\n      <ion-slide class="pd-10" (click)="onCallbackEvent(\'openPlayer\')">\n\n        <div class="thumb-album shadow-2">\n\n          <img src="assets/img/demo5.jpg" alt="">\n\n          <div class="white decor"><span class="inline-block stroke-white"></span></div>\n\n        </div>\n\n        <div class="text-left mgt-5">\n\n          <h5 class="text-white fs-13 mg-0">Name Album</h5>\n\n          <p class="text-grey-1 fs-11 mg-0">description in here</p>\n\n        </div>\n\n      </ion-slide>\n\n    </ion-slides>\n\n  </ion-row>\n\n\n\n\n\n  <h4 class="fs-20 fw-600 text-white mgb-10 mgt-20 spacing-1">Guess you like</h4>\n\n  <ion-list no-lines class="lst-no-background">\n\n    <ion-item class="pdl-0" (click)="onCallbackEvent(\'openPlayer\')">\n\n      <ion-thumbnail item-start class="shadow-2">\n\n        <img src="assets/img/demo1.jpg">\n\n      </ion-thumbnail>\n\n      <h2 class="text-white fs-15">My Neighbor Totoro</h2>\n\n      <p class="text-grey-1 fs-12">Hayao Miyazaki • 1988</p>\n\n      <button ion-button small item-end class="white-opct text-white button-circle">\n\n        <ion-icon class="fs-18" name="ios-play"></ion-icon>\n\n      </button>\n\n    </ion-item>\n\n\n\n    <ion-item class="pdl-0" (click)="onCallbackEvent(\'openPlayer\')">\n\n      <ion-thumbnail item-start class="shadow-2">\n\n        <img src="assets/img/demo2.jpg">\n\n      </ion-thumbnail>\n\n      <h2 class="text-white fs-15">Raiders of the Lost Ark</h2>\n\n      <p class="text-grey-1 fs-12">Steven Spielberg • 1981</p>\n\n      <button ion-button small item-end class="white-opct text-white button-circle">\n\n        <ion-icon class="fs-18" name="ios-play"></ion-icon>\n\n      </button>\n\n    </ion-item>\n\n\n\n    <ion-item class="pdl-0" (click)="onCallbackEvent(\'openPlayer\')">\n\n      <ion-thumbnail item-start class="shadow-2">\n\n        <img src="assets/img/demo3.jpg">\n\n      </ion-thumbnail>\n\n      <h2 class="text-white fs-15">Ghostbusters</h2>\n\n      <p class="text-grey-1 fs-12">Ivan Reitman • 1984</p>\n\n      <button ion-button small item-end class="white-opct text-white button-circle">\n\n        <ion-icon class="fs-18" name="ios-play"></ion-icon>\n\n      </button>\n\n    </ion-item>\n\n\n\n    <ion-item class="pdl-0" (click)="onCallbackEvent(\'openPlayer\')">\n\n      <ion-thumbnail item-start class="shadow-2">\n\n        <img src="assets/img/demo4.jpg">\n\n      </ion-thumbnail>\n\n      <h2 class="text-white fs-15">Batman</h2>\n\n      <p class="text-grey-1 fs-12">Tim Burton • 1988</p>\n\n      <button ion-button small item-end class="white-opct text-white button-circle">\n\n        <ion-icon class="fs-18" name="ios-play"></ion-icon>\n\n      </button>\n\n    </ion-item>\n\n\n\n    <ion-item class="pdl-0" (click)="onCallbackEvent(\'openPlayer\')">\n\n      <ion-thumbnail item-start class="shadow-2">\n\n        <img src="assets/img/demo5.jpg">\n\n      </ion-thumbnail>\n\n      <h2 class="text-white fs-15">My Neighbor Totoro</h2>\n\n      <p class="text-grey-1 fs-12">Hayao Miyazaki • 1988</p>\n\n      <button ion-button small item-end class="white-opct text-white button-circle">\n\n        <ion-icon class="fs-18" name="ios-play"></ion-icon>\n\n      </button>\n\n    </ion-item>\n\n\n\n    <ion-item class="pdl-0" (click)="onCallbackEvent(\'openPlayer\')">\n\n      <ion-thumbnail item-start class="shadow-2">\n\n        <img src="assets/img/demo6.jpg">\n\n      </ion-thumbnail>\n\n      <h2 class="text-white fs-15">Raiders of the Lost Ark</h2>\n\n      <p class="text-grey-1 fs-12">Steven Spielberg • 1981</p>\n\n      <button ion-button small item-end class="white-opct text-white button-circle">\n\n        <ion-icon class="fs-18" name="ios-play"></ion-icon>\n\n      </button>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n</div>'/*ion-inline-end:"D:\Visual Studio\Personal\Project-Watermellon\src\components\music\music-home\music-home.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], MusicHomeComponent);
    return MusicHomeComponent;
}());

//# sourceMappingURL=music-home.js.map

/***/ })

});
//# sourceMappingURL=21.js.map