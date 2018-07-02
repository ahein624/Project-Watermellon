webpackJsonp([61],{

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicPageModule", function() { return MusicPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__music__ = __webpack_require__(563);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MusicPageModule = (function () {
    function MusicPageModule() {
    }
    MusicPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__music__["a" /* MusicPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__music__["a" /* MusicPage */]),
            ],
        })
    ], MusicPageModule);
    return MusicPageModule;
}());

//# sourceMappingURL=music.module.js.map

/***/ }),

/***/ 563:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MusicPage; });
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
 * Generated class for the MusicPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MusicPage = (function () {
    function MusicPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.musicCategoryPage = 'MusicCategoryPage';
        this.musicHomePage = 'MusicHomePage';
        this.musicFavoriestPage = 'MusicFavoriestPage';
    }
    MusicPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MusicPage');
    };
    MusicPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-music',template:/*ion-inline-start:"/Users/andrewhein/Desktop/WestmorelandWorking/src/pages/music/music.html"*/'<ion-tabs class="shadow-3 skin-dark skin skin-transparent">\n	<ion-tab [root]="musicHomePage" tabTitle="" tabIcon="ios-musical-note"></ion-tab>\n	<ion-tab [root]="musicCategoryPage" tabTitle="" tabIcon="ios-barcode"></ion-tab>\n	<ion-tab [root]="musicFavoriestPage" tabTitle="" tabIcon="ios-heart"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/andrewhein/Desktop/WestmorelandWorking/src/pages/music/music.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], MusicPage);
    return MusicPage;
}());

//# sourceMappingURL=music.js.map

/***/ })

});
//# sourceMappingURL=61.js.map