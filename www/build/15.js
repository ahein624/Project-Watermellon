webpackJsonp([15],{

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopDetailProductPageModule", function() { return ShopDetailProductPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shop_detail_product__ = __webpack_require__(901);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_shop_shop_detail_product_shop_detail_product_module__ = __webpack_require__(902);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ShopDetailProductPageModule = (function () {
    function ShopDetailProductPageModule() {
    }
    ShopDetailProductPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__shop_detail_product__["a" /* ShopDetailProductPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__shop_detail_product__["a" /* ShopDetailProductPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_shop_shop_detail_product_shop_detail_product_module__["a" /* ShopDetailProductModule */]
            ],
        })
    ], ShopDetailProductPageModule);
    return ShopDetailProductPageModule;
}());

//# sourceMappingURL=shop-detail-product.module.js.map

/***/ }),

/***/ 901:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopDetailProductPage; });
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
 * Generated class for the ShopDetailProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ShopDetailProductPage = (function () {
    function ShopDetailProductPage(navCtrl, navParams, modalCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.data = {};
        this.events = {};
        this.events.openDetail = function (item) {
            var chatModal = modalCtrl.create('ShopDetailProductPage', { 'data': item });
            chatModal.present();
        };
    }
    ShopDetailProductPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ShopDetailProductPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ShopDetailProductPage');
    };
    ShopDetailProductPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-shop-detail-product',template:/*ion-inline-start:"D:\Visual Studio\Personal\Project-Watermellon\src\pages\shop\shop-detail-product\shop-detail-product.html"*/'<!--\n\n  Generated template for the ShopDetailProductPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons start>\n\n      <button ion-button class="text-black mgl-10 pd-5 fs-32" (click)="dismiss()">\n\n        <ion-icon name="ios-arrow-round-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title class="inline-block text-ellipsis">Lorem Ipsum is simply</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n	<shop-detail-product [data]="data" [events]="events"></shop-detail-product>\n\n</ion-content>'/*ion-inline-end:"D:\Visual Studio\Personal\Project-Watermellon\src\pages\shop\shop-detail-product\shop-detail-product.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ViewController */]])
    ], ShopDetailProductPage);
    return ShopDetailProductPage;
}());

//# sourceMappingURL=shop-detail-product.js.map

/***/ }),

/***/ 902:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopDetailProductModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shop_detail_product__ = __webpack_require__(903);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ShopDetailProductModule = (function () {
    function ShopDetailProductModule() {
    }
    ShopDetailProductModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__shop_detail_product__["a" /* ShopDetailProductComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__shop_detail_product__["a" /* ShopDetailProductComponent */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__shop_detail_product__["a" /* ShopDetailProductComponent */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], ShopDetailProductModule);
    return ShopDetailProductModule;
}());

//# sourceMappingURL=shop-detail-product.module.js.map

/***/ }),

/***/ 903:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopDetailProductComponent; });
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
 * Generated class for the ShopDetailProductComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ShopDetailProductComponent = (function () {
    function ShopDetailProductComponent() {
        var _this = this;
        this.onCallbackEvent = function (event) {
            if (_this.events[event]) {
                _this.events[event]();
            }
        };
        console.log('Hello ShopDetailProductComponent Component');
    }
    ShopDetailProductComponent.prototype.slide_next = function () {
        this.slide3.slideNext();
    };
    ShopDetailProductComponent.prototype.slide_prev = function () {
        this.slide3.slidePrev();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ShopDetailProductComponent.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ShopDetailProductComponent.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('slide3'),
        __metadata("design:type", Object)
    ], ShopDetailProductComponent.prototype, "slide3", void 0);
    ShopDetailProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'shop-detail-product',template:/*ion-inline-start:"D:\Visual Studio\Personal\Project-Watermellon\src\components\shop\shop-detail-product\shop-detail-product.html"*/'\n\n\n\n<div class="white-1">\n\n  \n\n  <div class="wrapper-slide-pagination">\n\n    <ion-slides autoplay="2500" loop="true" speed="500" pager="true" class="height-auto" #slide3>\n\n      <ion-slide>\n\n          <img src="assets/img/demo1.jpg" alt="">\n\n      </ion-slide>\n\n\n\n      <ion-slide>\n\n          <img src="assets/img/demo2.jpg" alt="">\n\n      </ion-slide>\n\n\n\n      <ion-slide>\n\n          <img src="assets/img/demo3.jpg" alt="">\n\n      </ion-slide>\n\n    </ion-slides>\n\n    <div class="btn-pagination">\n\n      <button ion-button clear class="button-circle text-white pull-right" (click)="slide_next()">\n\n        <ion-icon class="fs-26" name="ios-arrow-dropright"></ion-icon>\n\n      </button>\n\n      <button ion-button clear class="button-circle text-white pull-left" (click)="slide_prev()">\n\n        <ion-icon class="fs-26" name="ios-arrow-dropleft"></ion-icon>\n\n      </button>\n\n    </div>\n\n  </div>\n\n  \n\n  <div padding>\n\n    <div class="">\n\n      <p class="text-grey-3 fs-12">posted at 08:00 - Dec 24, 2017</p>\n\n      <h2 class="fs-18 uppercase spacing-1 mg-0">Lorem Ipsum is simply</h2>\n\n      <p class="fs-18 text-grey-4 mgt-5">$7.90</p>\n\n      <div>\n\n        <span class="fs-16">\n\n          <ion-icon name="md-star"></ion-icon>\n\n          <ion-icon name="md-star"></ion-icon>\n\n          <ion-icon name="md-star"></ion-icon>\n\n          <ion-icon name="md-star"></ion-icon>\n\n          <ion-icon name="md-star-half"></ion-icon>\n\n        </span>\n\n        <button ion-button icon-only class="pull-right button-circle grey-1 text-pink mgt--5">\n\n          <ion-icon class="fs-18" name="md-heart"></ion-icon>\n\n        </button>\n\n      </div>\n\n    </div>\n\n    \n\n    <div class="divider grey-1 mgt-30 mgb-20"></div>\n\n    \n\n    <div class="share">\n\n      <h5 class="text-black fs-12 uppercase">Share with:</h5>\n\n      <button ion-button class="grey-1 text-grey-4 button-circle"><ion-icon name="logo-facebook"></ion-icon></button>\n\n      <button ion-button class="grey-1 text-grey-4 button-circle"><ion-icon name="logo-instagram"></ion-icon></button>\n\n      <button ion-button class="grey-1 text-grey-4 button-circle"><ion-icon name="logo-twitter"></ion-icon></button>\n\n      <button ion-button class="grey-1 text-grey-4 button-circle"><ion-icon name="logo-google"></ion-icon></button>\n\n      <button ion-button class="grey-1 text-grey-4 button-circle"><ion-icon name="logo-pinterest"></ion-icon></button>\n\n    </div>\n\n    \n\n    <div class="mgt-30">\n\n      <h5 class="text-black fs-12 uppercase">Color:</h5>\n\n      <p class="fs-20 mgt-5">\n\n        <ion-icon name="md-square" class="text-pink"></ion-icon>\n\n        <ion-icon name="md-square" class="text-d-purple"></ion-icon>\n\n        <ion-icon name="md-square" class="text-cyan"></ion-icon>\n\n        <ion-icon name="md-square" class="text-amber"></ion-icon>\n\n        <ion-icon name="md-square" class="text-black"></ion-icon>\n\n      </p>\n\n    </div>\n\n\n\n    <div class="mgt-30">\n\n      <h5 class="text-black fs-12 uppercase">size:</h5>\n\n      <span>S</span>\n\n      <span>M</span>\n\n      <span>L</span>\n\n      <span>X</span>\n\n    </div>\n\n\n\n    <div class="mgt-40">\n\n      <h5 class="text-black fs-12 uppercase">Description:</h5>\n\n      <p class="text-grey-4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>\n\n    </div>\n\n  \n\n    <div class="mgt-20 mgb-50 text-right">\n\n      <button ion-button round class="lama-vs-coban">Add To Cart</button>\n\n    </div>\n\n    \n\n\n\n    <div class="mgt-40">\n\n      <h5 class="text-black fs-12 uppercase">Product related</h5>\n\n\n\n      <ion-row class="mgt-10 mgl--5 mgr--5 pdb-10">\n\n        <ion-col col-6>\n\n          <ion-card class="full-width mg-0 shadow-1" (click)="onCallbackEvent(\'openDetail\')">\n\n            <img src="assets/img/demo1.jpg"/>\n\n            \n\n            <ion-card-content class="pd-5">\n\n              <ion-card-title class="fs-13 fw-600 pd-0">Nine Inch Nails Live</ion-card-title>\n\n              <p class="fw-600 text-grey-4 fs-10">32.00 $</p>\n\n            </ion-card-content>\n\n          </ion-card>\n\n        </ion-col>\n\n        \n\n        <ion-col col-6>\n\n          <ion-card class="full-width mg-0 shadow-1" (click)="onCallbackEvent(\'openDetail\')">\n\n            <img src="assets/img/demo2.jpg"/>\n\n            \n\n            <ion-card-content class="pd-5">\n\n              <ion-card-title class="fs-13 fw-600 pd-0">Nine Inch Nails Live</ion-card-title>\n\n              <p class="fw-600 text-grey-4 fs-10">32.00 $</p>\n\n            </ion-card-content>\n\n          </ion-card>\n\n        </ion-col>\n\n\n\n        <ion-col col-6>\n\n          <ion-card class="full-width mg-0 shadow-1" (click)="onCallbackEvent(\'openDetail\')">\n\n            <img src="assets/img/demo3.jpg"/>\n\n            \n\n            <ion-card-content class="pd-5">\n\n              <ion-card-title class="fs-13 fw-600 pd-0">Nine Inch Nails Live</ion-card-title>\n\n              <p class="fw-600 text-grey-4 fs-10">32.00 $</p>\n\n            </ion-card-content>\n\n          </ion-card>\n\n        </ion-col>\n\n\n\n        <ion-col col-6>\n\n          <ion-card class="full-width mg-0 shadow-1" (click)="onCallbackEvent(\'openDetail\')">\n\n            <img src="assets/img/demo4.jpg"/>\n\n            \n\n            <ion-card-content class="pd-5">\n\n              <ion-card-title class="fs-13 fw-600 pd-0">Nine Inch Nails Live</ion-card-title>\n\n              <p class="fw-600 text-grey-4 fs-10">32.00 $</p>\n\n            </ion-card-content>\n\n          </ion-card>\n\n        </ion-col>\n\n      </ion-row>\n\n    </div>\n\n  </div>\n\n\n\n</div>\n\n'/*ion-inline-end:"D:\Visual Studio\Personal\Project-Watermellon\src\components\shop\shop-detail-product\shop-detail-product.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ShopDetailProductComponent);
    return ShopDetailProductComponent;
}());

//# sourceMappingURL=shop-detail-product.js.map

/***/ })

});
//# sourceMappingURL=15.js.map