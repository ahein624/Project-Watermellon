webpackJsonp([26],{

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MagazineCategoryPageModule", function() { return MagazineCategoryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__magazine_category__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_magazine_magazine_category_magazine_category_module__ = __webpack_require__(544);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MagazineCategoryPageModule = (function () {
    function MagazineCategoryPageModule() {
    }
    MagazineCategoryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__magazine_category__["a" /* MagazineCategoryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__magazine_category__["a" /* MagazineCategoryPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_magazine_magazine_category_magazine_category_module__["a" /* MagazineCategoryModule */]
            ],
        })
    ], MagazineCategoryPageModule);
    return MagazineCategoryPageModule;
}());

//# sourceMappingURL=magazine-category.module.js.map

/***/ }),

/***/ 543:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MagazineCategoryPage; });
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
 * Generated class for the MagazineCategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MagazineCategoryPage = (function () {
    function MagazineCategoryPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = {};
        this.data = {};
        this.events.openList = function (item) {
            // let chatModal = modalCtrl.create('ChatConversationPage',{'data':item});
            // chatModal.present();
            navCtrl.push('MagazineListPage');
        };
    }
    MagazineCategoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MagazineCategoryPage');
    };
    MagazineCategoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-magazine-category',template:/*ion-inline-start:"/Users/andrewhein/Desktop/WestmorelandWorking/src/pages/magazine/magazine-category/magazine-category.html"*/'<!--\n  Generated template for the MagazineCategoryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-toolbar class="pd-0 transparent">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title class="inline-block"></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n	<magazine-category [data]="data" [events]="events"></magazine-category>\n</ion-content>'/*ion-inline-end:"/Users/andrewhein/Desktop/WestmorelandWorking/src/pages/magazine/magazine-category/magazine-category.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], MagazineCategoryPage);
    return MagazineCategoryPage;
}());

//# sourceMappingURL=magazine-category.js.map

/***/ }),

/***/ 544:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MagazineCategoryModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__magazine_category__ = __webpack_require__(545);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MagazineCategoryModule = (function () {
    function MagazineCategoryModule() {
    }
    MagazineCategoryModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__magazine_category__["a" /* MagazineCategoryComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__magazine_category__["a" /* MagazineCategoryComponent */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__magazine_category__["a" /* MagazineCategoryComponent */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], MagazineCategoryModule);
    return MagazineCategoryModule;
}());

//# sourceMappingURL=magazine-category.module.js.map

/***/ }),

/***/ 545:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MagazineCategoryComponent; });
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
 * Generated class for the MagazineCategoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var MagazineCategoryComponent = (function () {
    function MagazineCategoryComponent() {
        var _this = this;
        this.onCallbackEvent = function (event) {
            if (_this.events[event]) {
                _this.events[event]();
            }
        };
        console.log('Hello MagazineCategoryComponent Component');
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], MagazineCategoryComponent.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], MagazineCategoryComponent.prototype, "data", void 0);
    MagazineCategoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'magazine-category',template:/*ion-inline-start:"/Users/andrewhein/Desktop/WestmorelandWorking/src/components/magazine/magazine-category/magazine-category.html"*/'\n<div class="white-1">\n  <div class="pst-relative wrapper-categories ani-right-to-left" (click)="onCallbackEvent(\'openList\')">\n    <img src="assets/img/bg10.jpg" alt="">\n    <h3 class="text-white pst-absolute uppercase fw-400 fs-18">Sport</h3>\n  </div>\n  <div class="pst-relative wrapper-categories ani-right-to-left" (click)="onCallbackEvent(\'openList\')">\n    <img src="assets/img/bg8.jpg" alt="">\n    <h3 class="text-white pst-absolute uppercase fw-400 fs-18">Technology</h3>\n  </div>\n  <div class="pst-relative wrapper-categories ani-right-to-left" (click)="onCallbackEvent(\'openList\')">\n    <img src="assets/img/bg9.jpg" alt="">\n    <h3 class="text-white pst-absolute uppercase fw-400 fs-18">Fashion</h3>\n  </div>\n  <div class="pst-relative wrapper-categories ani-right-to-left" (click)="onCallbackEvent(\'openList\')">\n    <img src="assets/img/bg4.jpg" alt="">\n    <h3 class="text-white pst-absolute uppercase fw-400 fs-18">Security</h3>\n  </div>\n  <div class="pst-relative wrapper-categories ani-right-to-left" (click)="onCallbackEvent(\'openList\')">\n    <img src="assets/img/bg15.jpg" alt="">\n    <h3 class="text-white pst-absolute uppercase fw-400 fs-18">BBC</h3>\n  </div>\n  <div class="pst-relative wrapper-categories ani-right-to-left" (click)="onCallbackEvent(\'openList\')">\n    <img src="assets/img/bg12.jpg" alt="">\n    <h3 class="text-white pst-absolute uppercase fw-400 fs-18">Travel</h3>\n  </div>\n  <div class="pst-relative wrapper-categories ani-right-to-left" (click)="onCallbackEvent(\'openList\')">\n    <img src="assets/img/bg5.jpg" alt="">\n    <h3 class="text-white pst-absolute uppercase fw-400 fs-18">Global</h3>\n  </div>\n  <div class="pst-relative wrapper-categories ani-right-to-left" (click)="onCallbackEvent(\'openList\')">\n    <img src="assets/img/bg18.jpg" alt="">\n    <h3 class="text-white pst-absolute uppercase fw-400 fs-18">Life</h3>\n  </div>\n</div>'/*ion-inline-end:"/Users/andrewhein/Desktop/WestmorelandWorking/src/components/magazine/magazine-category/magazine-category.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], MagazineCategoryComponent);
    return MagazineCategoryComponent;
}());

//# sourceMappingURL=magazine-category.js.map

/***/ })

});
//# sourceMappingURL=26.js.map