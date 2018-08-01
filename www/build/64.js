webpackJsonp([64],{

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MagazinePageModule", function() { return MagazinePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__magazine__ = __webpack_require__(759);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MagazinePageModule = (function () {
    function MagazinePageModule() {
    }
    MagazinePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__magazine__["a" /* MagazinePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__magazine__["a" /* MagazinePage */])
            ],
        })
    ], MagazinePageModule);
    return MagazinePageModule;
}());

//# sourceMappingURL=magazine.module.js.map

/***/ }),

/***/ 759:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MagazinePage; });
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
 * Generated class for the MagazinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MagazinePage = (function () {
    function MagazinePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.magazineHomePage = 'MagazineHomePage';
        this.magazineBookmarkPage = 'MagazineBookmarkPage';
        this.magazineCategoryPage = 'MagazineCategoryPage';
    }
    MagazinePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MagazinePage');
    };
    MagazinePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-magazine',template:/*ion-inline-start:"D:\Visual Studio\Personal\Project-Watermellon\src\pages\magazine\magazine.html"*/'<!--\n\n  Generated template for the MagazinePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.k\n\n-->\n\n<ion-tabs class="shadow-3 skin-light skin skin-transparent" >\n\n	<ion-tab [root]="magazineHomePage" tabTitle="" tabIcon="md-home"></ion-tab>\n\n	<ion-tab [root]="magazineCategoryPage" tabTitle="" tabIcon="md-list-box"></ion-tab>\n\n	<ion-tab [root]="magazineBookmarkPage" tabTitle="" tabIcon="md-bookmark"></ion-tab>\n\n</ion-tabs>'/*ion-inline-end:"D:\Visual Studio\Personal\Project-Watermellon\src\pages\magazine\magazine.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], MagazinePage);
    return MagazinePage;
}());

//# sourceMappingURL=magazine.js.map

/***/ })

});
//# sourceMappingURL=64.js.map