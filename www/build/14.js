webpackJsonp([14],{

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopHomePageModule", function() { return ShopHomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shop_home__ = __webpack_require__(625);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_shop_shop_home_shop_home_module__ = __webpack_require__(626);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ShopHomePageModule = (function () {
    function ShopHomePageModule() {
    }
    ShopHomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__shop_home__["a" /* ShopHomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__shop_home__["a" /* ShopHomePage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_shop_shop_home_shop_home_module__["a" /* ShopHomeModule */]
            ],
        })
    ], ShopHomePageModule);
    return ShopHomePageModule;
}());

//# sourceMappingURL=shop-home.module.js.map

/***/ }),

/***/ 625:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopHomePage; });
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
 * Generated class for the ShopHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ShopHomePage = (function () {
    function ShopHomePage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.data = {};
        this.events = {};
        this.check_search = false;
        this.events.openDetail = function (item) {
            var detailProductModal = modalCtrl.create('ShopDetailProductPage', { 'data': item });
            detailProductModal.present();
        };
        this.events.openList = function (item) {
            navCtrl.push('ShopListProductPage');
        };
    }
    ShopHomePage.prototype.openCart = function () {
        this.navCtrl.push('ShopCheckoutPage');
    };
    ShopHomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ShopHomePage');
    };
    ShopHomePage.prototype.show_search = function () {
        if (this.check_search == true) {
            this.check_search = false;
        }
        else {
            this.check_search = true;
        }
    };
    ShopHomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-shop-home',template:/*ion-inline-start:"/Users/andrewhein/Desktop/WestmorelandWorking/src/pages/shop/shop-home/shop-home.html"*/'\n<ion-header >\n    <ion-toolbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title *ngIf="check_search != true"></ion-title>\n      <ion-searchbar class="light-searchbar round transparent text-white" *ngIf="check_search == true"></ion-searchbar>\n\n      <ion-buttons end class="toolbar-group-btn">\n        <button ion-button small icon-only color="royal" class="mgr-10" (click)="show_search()">\n          <ion-icon class="fs-18" name="ios-search" *ngIf="check_search != true"></ion-icon>\n          <ion-icon class="fs-24" name="ios-close" *ngIf="check_search == true"></ion-icon>\n        </button>\n        <button ion-button small icon-only color="royal" class="mgr-10 fs-14" (click)="openCart()">\n          <ion-icon class="fs-20" name="md-basket"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-toolbar>\n    <!-- <expandable-header-shop class="lama-vs-coban" [scrollArea]="shopcontent" headerHeight="45"></expandable-header-shop> -->\n</ion-header>\n\n<ion-content fullscreen #shopcontent>\n	<shop-home [data]="data" [events]="events"></shop-home>\n</ion-content>'/*ion-inline-end:"/Users/andrewhein/Desktop/WestmorelandWorking/src/pages/shop/shop-home/shop-home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */]])
    ], ShopHomePage);
    return ShopHomePage;
}());

//# sourceMappingURL=shop-home.js.map

/***/ }),

/***/ 626:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopHomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shop_home__ = __webpack_require__(627);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ShopHomeModule = (function () {
    function ShopHomeModule() {
    }
    ShopHomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__shop_home__["a" /* ShopHomeComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__shop_home__["a" /* ShopHomeComponent */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__shop_home__["a" /* ShopHomeComponent */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], ShopHomeModule);
    return ShopHomeModule;
}());

//# sourceMappingURL=shop-home.module.js.map

/***/ }),

/***/ 627:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopHomeComponent; });
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
 * Generated class for the ShopHomeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ShopHomeComponent = (function () {
    function ShopHomeComponent() {
        var _this = this;
        this.onCallbackEvent = function (event) {
            if (_this.events[event]) {
                _this.events[event]();
            }
        };
        console.log('Hello ShopHomeComponent Component');
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ShopHomeComponent.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ShopHomeComponent.prototype, "data", void 0);
    ShopHomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'shop-home',template:/*ion-inline-start:"/Users/andrewhein/Desktop/WestmorelandWorking/src/components/shop/shop-home/shop-home.html"*/'\n<div class="white-1">\n  <div class="wrapper-slide">\n    <ion-slides autoplay="2500" loop="true" speed="500" pager="true" class="height-auto" #slide1>\n      <ion-slide (click)="onCallbackEvent(\'openList\')">\n          <img src="assets/img/bg17.jpg" alt="">\n          <div class="slogan black-opct">\n            <div padding class="wrapper-slogan">\n              <h3 class="title text-white fs-20 fw-600"><strong class="fs-40 fw-600">-50% </strong>Christmas Day</h3>\n              <p class="text-white fs-12">Lorem Ipsum is simply dummy text<br/>of the printing</p>\n            </div>\n          </div>\n      </ion-slide>\n\n      <ion-slide (click)="onCallbackEvent(\'openList\')">\n          <img src="assets/img/bg18.jpg" alt="">\n          <div class="slogan black-opct-1">\n            <div padding class="wrapper-slogan text-left">\n              <h3 class="title text-white fs-30 fw-600 mgb-0">Hot Collection</h3>\n              <h4 class="fs-16 uppercase text-white spacing-2 mgt-0">simply dummy</h4>\n              <p class="text-white fs-12">Lorem Ipsum is simply dummy text of the printing</p>\n            </div>\n          </div>\n      </ion-slide>\n\n      <ion-slide (click)="onCallbackEvent(\'openList\')">\n          <img src="assets/img/bg19.jpg" alt="">\n          <div class="slogan black-opct">\n            <div padding class="wrapper-slogan text-right full-width pdr-40">\n              <h3 class="title text-white fs-40 fw-600">Lorem<br/>Ipsum</h3>\n              <div class="divider white"></div>\n              <p class="text-white fs-12">Lorem Ipsum is simply dummy text<br/>of the printing</p>\n            </div>\n          </div>\n      </ion-slide>\n    </ion-slides>\n  </div>\n\n  <ion-row class="white pdt-10 pdb-10">\n    <ion-col col-4 class="text-center stroke-1 stroke-right stroke-white-2" (click)="onCallbackEvent(\'openList\')">\n      <ion-icon class="fs-36 text-grey-3" name="ios-clock-outline"></ion-icon>\n      <p class="fw-600 text-grey-5 mgt-5 mgb-0">New Post</p>\n    </ion-col>\n    <ion-col col-4 class="text-center stroke-1 stroke-right stroke-white-2" (click)="onCallbackEvent(\'openList\')">\n      <ion-icon class="fs-36 text-grey-3" name="ios-people-outline"></ion-icon>\n      <p class="fw-600 text-grey-5 mgt-5 mgb-0">Hot Sale</p>\n    </ion-col>\n    <ion-col col-4 class="text-center" (click)="onCallbackEvent(\'openList\')">\n      <ion-icon class="fs-36 text-grey-3" name="ios-ribbon-outline"></ion-icon>\n      <p class="fw-600 text-grey-5 mgt-5 mgb-0">Offer</p>\n    </ion-col>\n  </ion-row>\n  \n  <div class="white mgt-10">\n    <h4 class="text-center fs-16 fw-600 spacing-1 uppercase pdt-30 mgb-0">Categories you care</h4>\n    <p class="text-grey-3 text-center mgt-5">Choose cat you love</p>\n    <ion-row class="mgt-30">\n      <ion-col col-4 class="pd-0 cat-thumb">\n        <ion-card class="card-img-bg bdra-0 mg-0 full-width" (click)="onCallbackEvent(\'openList\')">\n          <img src="assets/img/demo11.jpg"/>\n          <div class="card-title fs-14 fw-600">São Paulo</div>\n          <div class="card-subtitle mgt-5">41 items</div>\n        </ion-card>\n      </ion-col>\n\n      <ion-col col-4 class="pd-0 cat-thumb">\n        <ion-card class="card-img-bg bdra-0 mg-0 full-width" (click)="onCallbackEvent(\'openList\')">\n          <img src="assets/img/demo12.jpg"/>\n          <div class="card-title fs-14 fw-600">São Paulo</div>\n          <div class="card-subtitle mgt-5">41 items</div>\n        </ion-card>\n      </ion-col>\n      <ion-col col-4 class="pd-0 cat-thumb">\n        <ion-card class="card-img-bg bdra-0 mg-0 full-width" (click)="onCallbackEvent(\'openList\')">\n          <img src="assets/img/demo1.jpg"/>\n          <div class="card-title fs-14 fw-600">São Paulo</div>\n          <div class="card-subtitle mgt-5">41 items</div>\n        </ion-card>\n      </ion-col>\n      <ion-col col-4 class="pd-0 cat-thumb">\n        <ion-card class="card-img-bg bdra-0 mg-0 full-width" (click)="onCallbackEvent(\'openList\')">\n          <img src="assets/img/demo4.jpg"/>\n          <div class="card-title fs-14 fw-600">São Paulo</div>\n          <div class="card-subtitle mgt-5">41 items</div>\n        </ion-card>\n      </ion-col>\n      <ion-col col-4 class="pd-0 cat-thumb">\n        <ion-card class="card-img-bg bdra-0 mg-0 full-width" (click)="onCallbackEvent(\'openList\')">\n          <img src="assets/img/demo5.jpg"/>\n          <div class="card-title fs-14 fw-600">São Paulo</div>\n          <div class="card-subtitle mgt-5">41 items</div>\n        </ion-card>\n      </ion-col>\n      <ion-col col-4 class="pd-0 cat-thumb">\n        <ion-card class="card-img-bg bdra-0 mg-0 full-width" (click)="onCallbackEvent(\'openList\')">\n          <img src="assets/img/demo6.jpg"/>\n          <div class="card-title fs-14 fw-600">São Paulo</div>\n          <div class="card-subtitle mgt-5">41 items</div>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <div class="mg-0 white-1 pdt-10 mgt-20">\n    <h4 class="text-center mgb-0">Top Sale Week</h4>\n    <p class="text-grey-3 text-center mgt-5 pdl-30 pdr-30">The best selling products of the week, do you like them?</p>\n    <ion-row class="pdr-5 mgt-30 pdb-10">\n      <ion-col col-6>\n        <ion-card class="full-width mg-0 shadow-1 featured_item" (click)="onCallbackEvent(\'openDetail\')">\n          <img src="assets/img/demo1.jpg"/>\n          \n          <ion-card-content class="pd-5">\n            <ion-card-title class="fs-13 fw-600 pd-0">Nine Inch Nails Live</ion-card-title>\n            <p class="fw-600 text-grey-4 fs-10">32.00 $</p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      \n      <ion-col col-6>\n        <ion-card class="full-width mg-0 shadow-1 featured_item" (click)="onCallbackEvent(\'openDetail\')">\n          <img src="assets/img/demo2.jpg"/>\n          \n          <ion-card-content class="pd-5">\n            <ion-card-title class="fs-13 fw-600 pd-0">Nine Inch Nails Live</ion-card-title>\n            <p class="fw-600 text-grey-4 fs-10">32.00 $</p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n\n      <ion-col col-6>\n        <ion-card class="full-width mg-0 shadow-1 featured_item" (click)="onCallbackEvent(\'openDetail\')">\n          <img src="assets/img/demo3.jpg"/>\n          \n          <ion-card-content class="pd-5">\n            <ion-card-title class="fs-13 fw-600 pd-0">Nine Inch Nails Live</ion-card-title>\n            <p class="fw-600 text-grey-4 fs-10">32.00 $</p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n\n      <ion-col col-6>\n        <ion-card class="full-width mg-0 shadow-1 featured_item" (click)="onCallbackEvent(\'openDetail\')">\n          <img src="assets/img/demo4.jpg"/>\n          \n          <ion-card-content class="pd-5">\n            <ion-card-title class="fs-13 fw-600 pd-0">Nine Inch Nails Live</ion-card-title>\n            <p class="fw-600 text-grey-4 fs-10">32.00 $</p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n\n      <ion-col col-6>\n        <ion-card class="full-width mg-0 shadow-1 featured_item" (click)="onCallbackEvent(\'openDetail\')">\n          <img src="assets/img/demo5.jpg"/>\n          \n          <ion-card-content class="pd-5">\n            <ion-card-title class="fs-13 fw-600 pd-0">Nine Inch Nails Live</ion-card-title>\n            <p class="fw-600 text-grey-4 fs-10">32.00 $</p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n\n      <ion-col col-6>\n        <ion-card class="full-width mg-0 shadow-1 featured_item" (click)="onCallbackEvent(\'openDetail\')">\n          <img src="assets/img/demo6.jpg"/>\n          \n          <ion-card-content class="pd-5">\n            <ion-card-title class="fs-13 fw-600 pd-0">Nine Inch Nails Live</ion-card-title>\n            <p class="fw-600 text-grey-4 fs-10">32.00 $</p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n\n      <ion-col col-6>\n        <ion-card class="full-width mg-0 shadow-1 featured_item" (click)="onCallbackEvent(\'openDetail\')">\n          <img src="assets/img/demo7.jpg"/>\n          \n          <ion-card-content class="pd-5">\n            <ion-card-title class="fs-13 fw-600 pd-0">Nine Inch Nails Live</ion-card-title>\n            <p class="fw-600 text-grey-4 fs-10">32.00 $</p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n\n      <ion-col col-6>\n        <ion-card class="full-width mg-0 shadow-1 featured_item" (click)="onCallbackEvent(\'openDetail\')">\n          <img src="assets/img/demo8.jpg"/>\n          \n          <ion-card-content class="pd-5">\n            <ion-card-title class="fs-13 fw-600 pd-0">Nine Inch Nails Live</ion-card-title>\n            <p class="fw-600 text-grey-4 fs-10">32.00 $</p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n\n      <ion-col col-6>\n        <ion-card class="full-width mg-0 shadow-1 featured_item" (click)="onCallbackEvent(\'openDetail\')">\n          <img src="assets/img/demo9.jpg"/>\n          \n          <ion-card-content class="pd-5">\n            <ion-card-title class="fs-13 fw-600 pd-0">Nine Inch Nails Live</ion-card-title>\n            <p class="fw-600 text-grey-4 fs-10">32.00 $</p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n\n      <ion-col col-6>\n        <ion-card class="full-width mg-0 shadow-1 featured_item" (click)="onCallbackEvent(\'openDetail\')">\n          <img src="assets/img/demo10.jpg"/>\n          <ion-card-content class="pd-5">\n            <ion-card-title class="fs-13 fw-600 pd-0">Nine Inch Nails Live</ion-card-title>\n            <p class="fw-600 text-grey-4 fs-10">32.00 $</p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </div>\n</div>'/*ion-inline-end:"/Users/andrewhein/Desktop/WestmorelandWorking/src/components/shop/shop-home/shop-home.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ShopHomeComponent);
    return ShopHomeComponent;
}());

//# sourceMappingURL=shop-home.js.map

/***/ })

});
//# sourceMappingURL=14.js.map