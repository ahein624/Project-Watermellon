webpackJsonp([15],{

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopDetailProductPageModule", function() { return ShopDetailProductPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shop_detail_product__ = __webpack_require__(622);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_shop_shop_detail_product_shop_detail_product_module__ = __webpack_require__(623);
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

/***/ 622:
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
            selector: 'page-shop-detail-product',template:/*ion-inline-start:"/Users/andrewhein/Desktop/WestmorelandWorking/src/pages/shop/shop-detail-product/shop-detail-product.html"*/'<!--\n  Generated template for the ShopDetailProductPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button class="text-black mgl-10 pd-5 fs-32" (click)="dismiss()">\n        <ion-icon name="ios-arrow-round-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title class="inline-block text-ellipsis">Lorem Ipsum is simply</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n	<shop-detail-product [data]="data" [events]="events"></shop-detail-product>\n</ion-content>'/*ion-inline-end:"/Users/andrewhein/Desktop/WestmorelandWorking/src/pages/shop/shop-detail-product/shop-detail-product.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ViewController */]])
    ], ShopDetailProductPage);
    return ShopDetailProductPage;
}());

//# sourceMappingURL=shop-detail-product.js.map

/***/ }),

/***/ 623:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopDetailProductModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shop_detail_product__ = __webpack_require__(624);
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

/***/ 624:
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
            selector: 'shop-detail-product',template:/*ion-inline-start:"/Users/andrewhein/Desktop/WestmorelandWorking/src/components/shop/shop-detail-product/shop-detail-product.html"*/'\n\n<div class="white-1">\n  \n  <div class="wrapper-slide-pagination">\n    <ion-slides autoplay="2500" loop="true" speed="500" pager="true" class="height-auto" #slide3>\n      <ion-slide>\n          <img src="assets/img/demo1.jpg" alt="">\n      </ion-slide>\n\n      <ion-slide>\n          <img src="assets/img/demo2.jpg" alt="">\n      </ion-slide>\n\n      <ion-slide>\n          <img src="assets/img/demo3.jpg" alt="">\n      </ion-slide>\n    </ion-slides>\n    <div class="btn-pagination">\n      <button ion-button clear class="button-circle text-white pull-right" (click)="slide_next()">\n        <ion-icon class="fs-26" name="ios-arrow-dropright"></ion-icon>\n      </button>\n      <button ion-button clear class="button-circle text-white pull-left" (click)="slide_prev()">\n        <ion-icon class="fs-26" name="ios-arrow-dropleft"></ion-icon>\n      </button>\n    </div>\n  </div>\n  \n  <div padding>\n    <div class="">\n      <p class="text-grey-3 fs-12">posted at 08:00 - Dec 24, 2017</p>\n      <h2 class="fs-18 uppercase spacing-1 mg-0">Lorem Ipsum is simply</h2>\n      <p class="fs-18 text-grey-4 mgt-5">$7.90</p>\n      <div>\n        <span class="fs-16">\n          <ion-icon name="md-star"></ion-icon>\n          <ion-icon name="md-star"></ion-icon>\n          <ion-icon name="md-star"></ion-icon>\n          <ion-icon name="md-star"></ion-icon>\n          <ion-icon name="md-star-half"></ion-icon>\n        </span>\n        <button ion-button icon-only class="pull-right button-circle grey-1 text-pink mgt--5">\n          <ion-icon class="fs-18" name="md-heart"></ion-icon>\n        </button>\n      </div>\n    </div>\n    \n    <div class="divider grey-1 mgt-30 mgb-20"></div>\n    \n    <div class="share">\n      <h5 class="text-black fs-12 uppercase">Share with:</h5>\n      <button ion-button class="grey-1 text-grey-4 button-circle"><ion-icon name="logo-facebook"></ion-icon></button>\n      <button ion-button class="grey-1 text-grey-4 button-circle"><ion-icon name="logo-instagram"></ion-icon></button>\n      <button ion-button class="grey-1 text-grey-4 button-circle"><ion-icon name="logo-twitter"></ion-icon></button>\n      <button ion-button class="grey-1 text-grey-4 button-circle"><ion-icon name="logo-google"></ion-icon></button>\n      <button ion-button class="grey-1 text-grey-4 button-circle"><ion-icon name="logo-pinterest"></ion-icon></button>\n    </div>\n    \n    <div class="mgt-30">\n      <h5 class="text-black fs-12 uppercase">Color:</h5>\n      <p class="fs-20 mgt-5">\n        <ion-icon name="md-square" class="text-pink"></ion-icon>\n        <ion-icon name="md-square" class="text-d-purple"></ion-icon>\n        <ion-icon name="md-square" class="text-cyan"></ion-icon>\n        <ion-icon name="md-square" class="text-amber"></ion-icon>\n        <ion-icon name="md-square" class="text-black"></ion-icon>\n      </p>\n    </div>\n\n    <div class="mgt-30">\n      <h5 class="text-black fs-12 uppercase">size:</h5>\n      <span>S</span>\n      <span>M</span>\n      <span>L</span>\n      <span>X</span>\n    </div>\n\n    <div class="mgt-40">\n      <h5 class="text-black fs-12 uppercase">Description:</h5>\n      <p class="text-grey-4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>\n    </div>\n  \n    <div class="mgt-20 mgb-50 text-right">\n      <button ion-button round class="lama-vs-coban">Add To Cart</button>\n    </div>\n    \n\n    <div class="mgt-40">\n      <h5 class="text-black fs-12 uppercase">Product related</h5>\n\n      <ion-row class="mgt-10 mgl--5 mgr--5 pdb-10">\n        <ion-col col-6>\n          <ion-card class="full-width mg-0 shadow-1" (click)="onCallbackEvent(\'openDetail\')">\n            <img src="assets/img/demo1.jpg"/>\n            \n            <ion-card-content class="pd-5">\n              <ion-card-title class="fs-13 fw-600 pd-0">Nine Inch Nails Live</ion-card-title>\n              <p class="fw-600 text-grey-4 fs-10">32.00 $</p>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n        \n        <ion-col col-6>\n          <ion-card class="full-width mg-0 shadow-1" (click)="onCallbackEvent(\'openDetail\')">\n            <img src="assets/img/demo2.jpg"/>\n            \n            <ion-card-content class="pd-5">\n              <ion-card-title class="fs-13 fw-600 pd-0">Nine Inch Nails Live</ion-card-title>\n              <p class="fw-600 text-grey-4 fs-10">32.00 $</p>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n\n        <ion-col col-6>\n          <ion-card class="full-width mg-0 shadow-1" (click)="onCallbackEvent(\'openDetail\')">\n            <img src="assets/img/demo3.jpg"/>\n            \n            <ion-card-content class="pd-5">\n              <ion-card-title class="fs-13 fw-600 pd-0">Nine Inch Nails Live</ion-card-title>\n              <p class="fw-600 text-grey-4 fs-10">32.00 $</p>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n\n        <ion-col col-6>\n          <ion-card class="full-width mg-0 shadow-1" (click)="onCallbackEvent(\'openDetail\')">\n            <img src="assets/img/demo4.jpg"/>\n            \n            <ion-card-content class="pd-5">\n              <ion-card-title class="fs-13 fw-600 pd-0">Nine Inch Nails Live</ion-card-title>\n              <p class="fw-600 text-grey-4 fs-10">32.00 $</p>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n\n</div>\n'/*ion-inline-end:"/Users/andrewhein/Desktop/WestmorelandWorking/src/components/shop/shop-detail-product/shop-detail-product.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ShopDetailProductComponent);
    return ShopDetailProductComponent;
}());

//# sourceMappingURL=shop-detail-product.js.map

/***/ })

});
//# sourceMappingURL=15.js.map