webpackJsonp([23],{

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicCategoryPageModule", function() { return MusicCategoryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__music_category__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_music_music_category_music_category_module__ = __webpack_require__(555);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MusicCategoryPageModule = (function () {
    function MusicCategoryPageModule() {
    }
    MusicCategoryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__music_category__["a" /* MusicCategoryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__music_category__["a" /* MusicCategoryPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_music_music_category_music_category_module__["a" /* MusicCategoryModule */]
            ],
        })
    ], MusicCategoryPageModule);
    return MusicCategoryPageModule;
}());

//# sourceMappingURL=music-category.module.js.map

/***/ }),

/***/ 554:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MusicCategoryPage; });
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
 * Generated class for the MusicCategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MusicCategoryPage = (function () {
    function MusicCategoryPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = {};
        this.events = {};
        this.check_search = false;
        this.events.openList = function (item) {
            navCtrl.push('MusicListPage');
        };
    }
    MusicCategoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MusicCategoryPage');
    };
    MusicCategoryPage.prototype.show_search = function () {
        if (this.check_search == true) {
            this.check_search = false;
        }
        else {
            this.check_search = true;
        }
    };
    MusicCategoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-music-category',template:/*ion-inline-start:"/Users/andrewhein/Desktop/WestmorelandWorking/src/pages/music/music-category/music-category.html"*/'\n\n<ion-header>\n	<ion-toolbar>\n		<button ion-button menuToggle>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n		<ion-title *ngIf="check_search != true"></ion-title>\n		<ion-searchbar class="dark-searchbar round transparent text-white" *ngIf="check_search == true"></ion-searchbar>\n		<ion-buttons end class="toolbar-group-btn">\n			<button ion-button small icon-only color="royal" class="mgr-10" (click)="show_search()">\n				<ion-icon class="fs-18" name="ios-search" *ngIf="check_search != true"></ion-icon>\n				<ion-icon class="fs-24" name="ios-close" *ngIf="check_search == true"></ion-icon>\n			</button>\n			<button ion-button small icon-only color="royal" class="mgr-10 fs-14">\n				<ion-icon class="fs-20" name="md-more"></ion-icon>\n			</button>\n		</ion-buttons>\n	</ion-toolbar>\n</ion-header>\n\n<ion-content class="lama-vs-coban">\n	<music-category [data]="data" [events]="events"></music-category>\n</ion-content>'/*ion-inline-end:"/Users/andrewhein/Desktop/WestmorelandWorking/src/pages/music/music-category/music-category.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], MusicCategoryPage);
    return MusicCategoryPage;
}());

//# sourceMappingURL=music-category.js.map

/***/ }),

/***/ 555:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MusicCategoryModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__music_category__ = __webpack_require__(556);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MusicCategoryModule = (function () {
    function MusicCategoryModule() {
    }
    MusicCategoryModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__music_category__["a" /* MusicCategoryComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__music_category__["a" /* MusicCategoryComponent */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__music_category__["a" /* MusicCategoryComponent */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], MusicCategoryModule);
    return MusicCategoryModule;
}());

//# sourceMappingURL=music-category.module.js.map

/***/ }),

/***/ 556:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MusicCategoryComponent; });
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
 * Generated class for the MusicCategoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var MusicCategoryComponent = (function () {
    function MusicCategoryComponent() {
        var _this = this;
        this.onCallbackEvent = function (event) {
            if (_this.events[event]) {
                _this.events[event]();
            }
        };
        console.log('Hello MusicCategoryComponent Component');
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], MusicCategoryComponent.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], MusicCategoryComponent.prototype, "events", void 0);
    MusicCategoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'music-category',template:/*ion-inline-start:"/Users/andrewhein/Desktop/WestmorelandWorking/src/components/music/music-category/music-category.html"*/'\n<div>\n<ion-card class="card-img-bg-more bdra-0 full-width mg-0" (click)="onCallbackEvent(\'openList\')">\n<img src="assets/img/bg19.jpg"/>\n<ion-card-header class="text-white">\n<button ion-button icon-only small class="button-circle white-opct text-white mgt--5">\n  <ion-icon name="ios-barcode-outline"></ion-icon>\n</button>\n<span class="fs-14 fw-400">23K Followers</span>\n<button ion-button small class="white-opct text-white pull-right mgt--5">Follow</button>\n</ion-card-header>\n<div class="wrapper black-opct">\n  <ion-card-content class="text-white">\n  <span class="info-stt text-white inline-block"><ion-icon class="mgr-5" name="md-stats"></ion-icon>2307 tracks</span>\n  <ion-card-title class="text-white uppercase spacing-1 fw-600 fs-16 pdr-50">Lorem Ipsum is simply dummy text</ion-card-title>\n</ion-card-content>\n</div>\n</ion-card>\n\n<ion-card class="card-img-bg-more bdra-0 full-width mg-0" (click)="onCallbackEvent(\'openList\')">\n<img src="assets/img/bg16.jpg"/>\n<ion-card-header class="text-white">\n<button ion-button icon-only small class="button-circle white-opct text-white mgt--5">\n  <ion-icon name="ios-barcode-outline"></ion-icon>\n</button>\n<span class="fs-14 fw-400">31K Followers</span>\n<button ion-button small class="white-opct text-white pull-right mgt--5">Follow</button>\n</ion-card-header>\n<div class="wrapper black-opct">\n  <ion-card-content class="text-white">\n  <span class="info-stt text-white inline-block"><ion-icon class="mgr-5" name="md-stats"></ion-icon>1059 tracks</span>\n  <ion-card-title class="text-white uppercase spacing-1 fw-600 fs-16 pdr-50">It is a long established fact</ion-card-title>\n</ion-card-content>\n</div>\n</ion-card>\n\n<ion-card class="card-img-bg-more bdra-0 full-width mg-0" (click)="onCallbackEvent(\'openList\')">\n<img src="assets/img/bg17.jpg"/>\n<ion-card-header class="text-white">\n<button ion-button icon-only small class="button-circle white-opct text-white mgt--5">\n  <ion-icon name="ios-barcode-outline"></ion-icon>\n</button>\n<span class="fs-14 fw-400">25K Followers</span>\n<button ion-button small class="white-opct text-white pull-right mgt--5">Follow</button>\n</ion-card-header>\n<div class="wrapper black-opct">\n  <ion-card-content class="text-white">\n  <span class="info-stt text-white inline-block"><ion-icon class="mgr-5" name="md-stats"></ion-icon>203 tracks</span>\n  <ion-card-title class="text-white uppercase spacing-1 fw-600 fs-16 pdr-50">Lorem Ipsum has been the industry\'s</ion-card-title>\n</ion-card-content>\n</div>\n</ion-card>\n\n<ion-card class="card-img-bg-more bdra-0 full-width mg-0" (click)="onCallbackEvent(\'openList\')">\n<img src="assets/img/bg18.jpg"/>\n<ion-card-header class="text-white">\n<button ion-button icon-only small class="button-circle white-opct text-white mgt--5">\n  <ion-icon name="ios-barcode-outline"></ion-icon>\n</button>\n<span class="fs-14 fw-400">1K Followers</span>\n<button ion-button small class="white-opct text-white pull-right mgt--5">Follow</button>\n</ion-card-header>\n<div class="wrapper black-opct">\n  <ion-card-content class="text-white">\n  <span class="info-stt text-white inline-block"><ion-icon class="mgr-5" name="md-stats"></ion-icon>1357 tracks</span>\n  <ion-card-title class="text-white uppercase spacing-1 fw-600 fs-16 pdr-50">Richard McClintock, a Latin professor</ion-card-title>\n</ion-card-content>\n</div>\n</ion-card>\n\n<ion-card class="card-img-bg-more bdra-0 full-width mg-0" (click)="onCallbackEvent(\'openList\')">\n<img src="assets/img/bg12.jpg"/>\n<ion-card-header class="text-white">\n<button ion-button icon-only small class="button-circle white-opct text-white mgt--5">\n  <ion-icon name="ios-barcode-outline"></ion-icon>\n</button>\n<span class="fs-14 fw-400">57K Followers</span>\n<button ion-button small class="white-opct text-white pull-right mgt--5">Follow</button>\n</ion-card-header>\n<div class="wrapper black-opct">\n  <ion-card-content class="text-white">\n  <span class="info-stt text-white inline-block"><ion-icon class="mgr-5" name="md-stats"></ion-icon>5896 tracks</span>\n  <ion-card-title class="text-white uppercase spacing-1 fw-600 fs-16 pdr-50">Lorem Ipsum comes from sections</ion-card-title>\n</ion-card-content>\n</div>\n</ion-card>\n\n<ion-card class="card-img-bg-more bdra-0 full-width mg-0" (click)="onCallbackEvent(\'openList\')">\n<img src="assets/img/bg15.jpg"/>\n<ion-card-header class="text-white">\n<button ion-button icon-only small class="button-circle white-opct text-white mgt--5">\n  <ion-icon name="ios-barcode-outline"></ion-icon>\n</button>\n<span class="fs-14 fw-400">35K Followers</span>\n<button ion-button small class="white-opct text-white pull-right mgt--5">Follow</button>\n</ion-card-header>\n<div class="wrapper black-opct">\n  <ion-card-content class="text-white">\n  <span class="info-stt text-white inline-block"><ion-icon class="mgr-5" name="md-stats"></ion-icon>1737 tracks</span>\n  <ion-card-title class="text-white uppercase spacing-1 fw-600 fs-16 pdr-50">There are many variations of passages</ion-card-title>\n</ion-card-content>\n</div>\n</ion-card>\n\n<ion-card class="card-img-bg-more bdra-0 full-width mg-0" (click)="onCallbackEvent(\'openList\')">\n<img src="assets/img/bg13.jpg"/>\n<ion-card-header class="text-white">\n<button ion-button icon-only small class="button-circle white-opct text-white mgt--5">\n  <ion-icon name="ios-barcode-outline"></ion-icon>\n</button>\n<span class="fs-14 fw-400">18K Followers</span>\n<button ion-button small class="white-opct text-white pull-right mgt--5">Follow</button>\n</ion-card-header>\n<div class="wrapper black-opct">\n  <ion-card-content class="text-white">\n  <span class="info-stt text-white inline-block"><ion-icon class="mgr-5" name="md-stats"></ion-icon>3907 tracks</span>\n  <ion-card-title class="text-white uppercase spacing-1 fw-600 fs-16 pdr-50">The standard chunk of Lorem Ipsum</ion-card-title>\n</ion-card-content>\n</div>\n</ion-card>\n\n<ion-card class="card-img-bg-more bdra-0 full-width mg-0" (click)="onCallbackEvent(\'openList\')">\n<img src="assets/img/bg11.jpg"/>\n<ion-card-header class="text-white">\n<button ion-button icon-only small class="button-circle white-opct text-white mgt--5">\n  <ion-icon name="ios-barcode-outline"></ion-icon>\n</button>\n<span class="fs-14 fw-400">92K Followers</span>\n<button ion-button small class="white-opct text-white pull-right mgt--5">Follow</button>\n</ion-card-header>\n<div class="wrapper black-opct">\n  <ion-card-content class="text-white">\n  <span class="info-stt text-white inline-block"><ion-icon class="mgr-5" name="md-stats"></ion-icon>2307 tracks</span>\n  <ion-card-title class="text-white uppercase spacing-1 fw-600 fs-16 pdr-50">It is a long established fact</ion-card-title>\n</ion-card-content>\n</div>\n</ion-card>\n\n</div>'/*ion-inline-end:"/Users/andrewhein/Desktop/WestmorelandWorking/src/components/music/music-category/music-category.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], MusicCategoryComponent);
    return MusicCategoryComponent;
}());

//# sourceMappingURL=music-category.js.map

/***/ })

});
//# sourceMappingURL=23.js.map