webpackJsonp([63],{

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(538);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */])
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 538:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_settings_settings__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_menu_menu__ = __webpack_require__(141);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { Http, Headers,URLSearchParams } from '@angular/http';
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomePage = (function () {
    function HomePage(navCtrl, navParams, settingsProvider, menuCtrl, menuProvider, actions) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.settingsProvider = settingsProvider;
        this.menuCtrl = menuCtrl;
        this.menuProvider = menuProvider;
        this.params = {};
        this.events = {};
        this.data = {};
        this.open_more = new Array();
        this.pages = this.menuProvider.getContent();
        var that = this;
        this.settingsProvider.getSettings().then(function (data) {
            _this.settings = data;
            _this.menuCtrl.enable(true, _this.settings.menu_id);
        });
    }
    HomePage.prototype.openPage = function (menuItem) {
        var _this = this;
        if (menuItem.subPage != undefined) {
            this.navCtrl.popToRoot().then(function () {
                _this.navCtrl.setRoot(menuItem.page, { 'subPage': menuItem.subPage, 'pages': menuItem.pages });
            });
        }
        else {
            if (menuItem.layout != undefined && menuItem.layout == 'tabs') {
                this.navCtrl.popToRoot().then(function () {
                    _this.navCtrl.push(menuItem.page);
                });
            }
            else {
                this.navCtrl.popToRoot().then(function () {
                    _this.navCtrl.setRoot(menuItem.page);
                });
            }
        }
    };
    HomePage.prototype.slide_next = function () {
        this.slide3.slideNext();
    };
    HomePage.prototype.slide_prev = function () {
        this.slide3.slidePrev();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('slide'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "slide3", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/andrewhein/Desktop/WestmorelandWorking/src/pages/home/home.html"*/'<!--\n  Generated template for the HomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header *ngIf="settings!=null" class="{{settings.skin.main_skin}}">\n<ion-navbar>\n<button ion-button menuToggle>\n  <ion-icon name="menu"></ion-icon>\n</button>\n<ion-title>Home</ion-title>\n</ion-navbar>\n</ion-header>\n\n<ion-content *ngIf="settings!=null" class="{{settings.skin.main_bg}}">\n\n<div *ngIf="settings.dashboard_type == 1">\n  <div class="wrapper-slide">\n    <div class="wrapper-slide-pagination">\n      <ion-slides autoplay="3000" loop="true" speed="1000" pager="false" class="height-auto" #slide>\n      <ion-slide>\n      <img src="assets/img/home1.jpg" alt="">\n    </ion-slide>\n\n    <ion-slide>\n    <img src="assets/img/home2.jpg" alt="">\n  </ion-slide>\n\n  <ion-slide>\n  <img src="assets/img/home3.jpg" alt="">\n</ion-slide>\n</ion-slides>\n<div class="btn-pagination">\n  <button ion-button clear class="button-circle text-white pull-right" (click)="slide_next()">\n    <ion-icon class="fs-26" name="ios-arrow-dropright"></ion-icon>\n  </button>\n  <button ion-button clear class="button-circle text-white pull-left" (click)="slide_prev()">\n    <ion-icon class="fs-26" name="ios-arrow-dropleft"></ion-icon>\n  </button>\n</div>\n</div>\n</div>\n\n<div padding>\n  <div *ngFor="let tree of pages" class="mgt-20 mgb-40">\n    <h6 class="uppercase fs-13 fw-500 text-grey-4">{{tree.title}}</h6>\n    <ion-row class="mgt-10 mgb-20 mgl--5 mgr--5">\n    <ion-col col-6 *ngFor="let item of tree.group, let i = index">\n    <div class="shadow-2 white-opct-1 pd-15 text-center" (click)="openPage(item)">\n      <ion-icon class="fs-22 text-grey-5 mgt-10" name="{{item.icon}}"></ion-icon>\n      <h2 class="text-grey-5 fs-12 spacing-1 mg-5 uppercase fw-600 text-ellipsis">{{item.title}}</h2>\n    </div>\n  </ion-col>\n</ion-row>\n</div>\n</div>\n\n</div>\n\n\n<div *ngIf="settings.dashboard_type == 2">\n  <ion-card class="card-more-content bdra-5" *ngFor="let tree of pages, let i = index">\n  <div [ngClass]="{\'active\' : (open_more[i] == true)}" class="wrapper">\n    <div class="thumb">\n      <img src="assets/img/{{\'bg\' + (i + 1) + \'.jpg\'}}"/>\n\n      <ion-card-content class="black-opct text-white">\n      <ion-card-title class="text-white uppercase spacing-1 fw-600 fs-16">{{tree.title}}</ion-card-title>\n      <span class="info-stt text-white inline-block"><ion-icon name="md-stats"></ion-icon>5 items</span>\n    </ion-card-content>\n\n    <ion-item class="btn-open-more transparent">\n    <ion-label class="text-white"><ion-icon name="md-list"></ion-icon></ion-label>\n    <ion-checkbox [(ngModel)]="open_more[i]" class="hidden-checkbox" color="dark"></ion-checkbox>\n    </ion-item>\n</div>\n\n<ion-list class="tree mgb-0" *ngFor="let item of tree.group, let i = index">\n<ion-row>\n<button ion-item class="fs-14" (click)="openPage(item)">\n  <ion-label class="text-grey-5">\n  <ion-icon class="fs-22 text-grey-5 mgt-10" name="{{item.icon}}" style="margin-top: -3px!important"></ion-icon>\n  {{item.title}}\n</ion-label>\n</button>\n\n</ion-row>\n</ion-list>\n\n</div>\n</ion-card>\n</div>\n\n\n<div *ngIf="settings.dashboard_type == 3">\n  <ion-list *ngFor="let tree of pages" no-lines class="lst-no-background mgb-40">\n  <ion-list-header class="mgt-10 mgb-10 uppercase fs-13 fw-500">{{tree.title}}</ion-list-header>\n  <button ion-item *ngFor="let item of tree.group, let i = index" (click)="openPage(item)">\n    {{item.title}}\n  </button>\n</ion-list>\n</div>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/andrewhein/Desktop/WestmorelandWorking/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_settings_settings__["a" /* SettingsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_menu_menu__["a" /* MenuProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=63.js.map