webpackJsonp([16],{

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopCheckoutPageModule", function() { return ShopCheckoutPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shop_checkout__ = __webpack_require__(619);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_shop_shop_checkout_shop_checkout_module__ = __webpack_require__(620);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ShopCheckoutPageModule = (function () {
    function ShopCheckoutPageModule() {
    }
    ShopCheckoutPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__shop_checkout__["a" /* ShopCheckoutPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__shop_checkout__["a" /* ShopCheckoutPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_shop_shop_checkout_shop_checkout_module__["a" /* ShopCheckoutModule */]
            ],
        })
    ], ShopCheckoutPageModule);
    return ShopCheckoutPageModule;
}());

//# sourceMappingURL=shop-checkout.module.js.map

/***/ }),

/***/ 619:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopCheckoutPage; });
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
 * Generated class for the ShopCategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ShopCheckoutPage = (function () {
    function ShopCheckoutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = {};
        this.events = {};
        this.events.openList = function (item) {
            navCtrl.push('ShopCheckoutPage');
        };
    }
    ShopCheckoutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ShopCheckoutPage');
    };
    ShopCheckoutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-shop-checkout',template:/*ion-inline-start:"/Users/andrewhein/Desktop/WestmorelandWorking/src/pages/shop/shop-checkout/shop-checkout.html"*/'<!--\n  Generated template for the ShopCategoryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-navbar>\n    <ion-title class="inline-block">cart shop</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n	<shop-checkout [data]="data" [events]="events"></shop-checkout>\n</ion-content>'/*ion-inline-end:"/Users/andrewhein/Desktop/WestmorelandWorking/src/pages/shop/shop-checkout/shop-checkout.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], ShopCheckoutPage);
    return ShopCheckoutPage;
}());

//# sourceMappingURL=shop-checkout.js.map

/***/ }),

/***/ 620:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopCheckoutModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shop_checkout__ = __webpack_require__(621);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ShopCheckoutModule = (function () {
    function ShopCheckoutModule() {
    }
    ShopCheckoutModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__shop_checkout__["a" /* ShopCheckoutComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__shop_checkout__["a" /* ShopCheckoutComponent */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__shop_checkout__["a" /* ShopCheckoutComponent */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], ShopCheckoutModule);
    return ShopCheckoutModule;
}());

//# sourceMappingURL=shop-checkout.module.js.map

/***/ }),

/***/ 621:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopCheckoutComponent; });
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
 * Generated class for the ShopCheckoutComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ShopCheckoutComponent = (function () {
    function ShopCheckoutComponent() {
        var _this = this;
        this.onCallbackEvent = function (event) {
            if (_this.events[event]) {
                _this.events[event]();
            }
        };
        console.log('Hello ShopCheckoutComponent Component');
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ShopCheckoutComponent.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ShopCheckoutComponent.prototype, "data", void 0);
    ShopCheckoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'shop-checkout',template:/*ion-inline-start:"/Users/andrewhein/Desktop/WestmorelandWorking/src/components/shop/shop-checkout/shop-checkout.html"*/'\n\n<div class="white-1">\n  \n  <ion-list class="lst-no-background">\n    <ion-item-sliding>\n      <ion-item class="white-1">\n        <ion-thumbnail item-start>\n          <img src="assets/img/demo1.jpg">\n        </ion-thumbnail>\n        <h2 class="fs-14 fw-600">My Neighbor Totoro</h2>\n        <p class="fs-12">quantity: x1</p>\n        <p class="mgt-10 fw-600 fs-12 text-black" (click)="detail()">Readmore</p>\n        <ion-note item-end class="fs-13 text-black fw-600">$30.00</ion-note>\n      </ion-item>\n      <ion-item-options>\n        <button ion-button class="pink-vs-red fs-13" icon-start>\n          <ion-icon name="md-trash"></ion-icon>Cancel\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n    \n    <ion-item-sliding>\n      <ion-item class="white-1">\n        <ion-thumbnail item-start>\n          <img src="assets/img/demo2.jpg">\n        </ion-thumbnail>\n        <h2 class="fs-14 fw-600">Raiders of the Lost Ark</h2>\n        <p class="fs-12">quantity: x3</p>\n        <p class="mgt-10 fw-600 fs-12 text-black" (click)="detail()">Readmore</p>\n        <ion-note item-end class="fs-13 text-black fw-600">$17.00</ion-note>\n      </ion-item>\n      <ion-item-options>\n        <button ion-button class="pink-vs-red fs-13" icon-start>\n          <ion-icon name="md-trash"></ion-icon>Cancel\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n    \n    <ion-item-sliding>\n      <ion-item class="white-1">\n        <ion-thumbnail item-start>\n          <img src="assets/img/demo3.jpg">\n        </ion-thumbnail>\n        <h2 class="fs-14 fw-600">Ghostbusters</h2>\n        <p class="fs-12">quantity: x2</p>\n        <p class="mgt-10 fw-600 fs-12 text-black" (click)="detail()">Readmore</p>\n        <ion-note item-end class="fs-13 text-black fw-600">$2.60</ion-note>\n      </ion-item>\n      <ion-item-options>\n        <button ion-button class="pink-vs-red fs-13" icon-start>\n          <ion-icon name="md-trash"></ion-icon>Cancel\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n    \n    <ion-item-sliding>\n      <ion-item class="white-1">\n        <ion-thumbnail item-start>\n          <img src="assets/img/demo5.jpg">\n        </ion-thumbnail>\n        <h2 class="fs-14 fw-600">Batman</h2>\n        <p class="fs-12">quantity: x1</p>\n        <p class="mgt-10 fw-600 fs-12 text-black" (click)="detail()">Readmore</p>\n        <ion-note item-end class="fs-13 text-black fw-600">$19.99</ion-note>\n      </ion-item>\n      <ion-item-options>\n        <button ion-button class="pink-vs-red fs-13" icon-start>\n          <ion-icon name="md-trash"></ion-icon>Cancel\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n\n\n  <ion-list no-line class="lst-no-background mgt-50">\n    <ion-item>\n      <h2 class="fs-16 fw-600">Total</h2>\n      <ion-note item-end class="fs-16 text-black fw-600">$69.59</ion-note>\n    </ion-item>\n\n    <ion-item>\n      <h2 class="fs-14 fw-600">Tax 10%</h2>\n      <ion-note item-end class="fs-13 text-black fw-600">6.96</ion-note>\n    </ion-item>\n\n    <ion-item>\n      <h2 class="fs-14 fw-600">Transport fee</h2>\n      <ion-note item-end class="fs-13 text-black fw-600">$3.00</ion-note>\n    </ion-item>\n\n    <ion-item>\n      <h2 class="fs-20 fw-600">Payment</h2>\n      <ion-note item-end class="fs-20 text-black fw-600">$79.55</ion-note>\n    </ion-item>\n  </ion-list>\n\n  <div class="text-right mgt-40 mgb-50">\n    <button ion-button round class="black">Clear Cart</button>\n    <button ion-button round class="lama-vs-coban">Oder</button>\n  </div>\n\n\n\n</div>\n'/*ion-inline-end:"/Users/andrewhein/Desktop/WestmorelandWorking/src/components/shop/shop-checkout/shop-checkout.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ShopCheckoutComponent);
    return ShopCheckoutComponent;
}());

//# sourceMappingURL=shop-checkout.js.map

/***/ })

});
//# sourceMappingURL=16.js.map