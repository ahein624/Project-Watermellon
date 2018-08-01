webpackJsonp([22],{

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicFavoriestPageModule", function() { return MusicFavoriestPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__music_favoriest__ = __webpack_require__(766);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_music_music_favoriest_music_favoriest_module__ = __webpack_require__(767);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MusicFavoriestPageModule = (function () {
    function MusicFavoriestPageModule() {
    }
    MusicFavoriestPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__music_favoriest__["a" /* MusicFavoriestPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__music_favoriest__["a" /* MusicFavoriestPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_music_music_favoriest_music_favoriest_module__["a" /* MusicFavoriestModule */]
            ],
        })
    ], MusicFavoriestPageModule);
    return MusicFavoriestPageModule;
}());

//# sourceMappingURL=music-favoriest.module.js.map

/***/ }),

/***/ 766:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MusicFavoriestPage; });
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
 * Generated class for the MusicFavoriestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MusicFavoriestPage = (function () {
    function MusicFavoriestPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = {};
        this.events = {};
        this.check_search = false;
        this.events.openPlayer = function (item) {
            navCtrl.push('MusicPlayerPage');
        };
    }
    MusicFavoriestPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MusicFavoriestPage');
    };
    MusicFavoriestPage.prototype.show_search = function () {
        if (this.check_search == true) {
            this.check_search = false;
        }
        else {
            this.check_search = true;
        }
    };
    MusicFavoriestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-music-favoriest',template:/*ion-inline-start:"/Users/andrewhein/Desktop/WestmorelandWorking/src/pages/music/music-favoriest/music-favoriest.html"*/'\n<ion-header >\n    <ion-toolbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n\n      <ion-title *ngIf="check_search != true"></ion-title>\n\n      <ion-searchbar class="dark-searchbar round transparent text-white" *ngIf="check_search == true"></ion-searchbar>\n\n      <ion-buttons end class="toolbar-group-btn">\n        <button ion-button small icon-only color="royal" class="mgr-10" (click)="show_search()">\n          <ion-icon class="fs-18" name="ios-search" *ngIf="check_search != true"></ion-icon>\n          <ion-icon class="fs-24" name="ios-close" *ngIf="check_search == true"></ion-icon>\n        </button>\n        <button ion-button small icon-only color="royal" class="mgr-10 fs-14">\n          <ion-icon class="fs-20" name="md-more"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class="lama-vs-coban">\n	<music-favoriest [data]="data" [events]="events"></music-favoriest>\n</ion-content>'/*ion-inline-end:"/Users/andrewhein/Desktop/WestmorelandWorking/src/pages/music/music-favoriest/music-favoriest.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], MusicFavoriestPage);
    return MusicFavoriestPage;
}());

//# sourceMappingURL=music-favoriest.js.map

/***/ }),

/***/ 767:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MusicFavoriestModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__music_favoriest__ = __webpack_require__(768);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MusicFavoriestModule = (function () {
    function MusicFavoriestModule() {
    }
    MusicFavoriestModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__music_favoriest__["a" /* MusicFavoriestComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__music_favoriest__["a" /* MusicFavoriestComponent */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__music_favoriest__["a" /* MusicFavoriestComponent */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], MusicFavoriestModule);
    return MusicFavoriestModule;
}());

//# sourceMappingURL=music-favoriest.module.js.map

/***/ }),

/***/ 768:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MusicFavoriestComponent; });
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
 * Generated class for the MusicFavoriestComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var MusicFavoriestComponent = (function () {
    function MusicFavoriestComponent() {
        var _this = this;
        this.onCallbackEvent = function (event) {
            if (_this.events[event]) {
                _this.events[event]();
            }
        };
        console.log('Hello MusicFavoriestComponent Component');
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], MusicFavoriestComponent.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], MusicFavoriestComponent.prototype, "events", void 0);
    MusicFavoriestComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'music-favoriest',template:/*ion-inline-start:"/Users/andrewhein/Desktop/WestmorelandWorking/src/components/music/music-favoriest/music-favoriest.html"*/'\n\n\n<div>\n  <ion-card class="pst-relative bdra-10 card-title-pst">\n    <div class="pst-relative">\n      <img src="assets/img/demo1.jpg"/>\n      <ion-card-title padding class="fs-18 text-white pdb-10 bold uppercase">Nine Inch Nails Live</ion-card-title>\n    </div>\n    <ion-fab right top>\n      <button ion-fab small class="white-opct">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-fab>\n\n    <ion-list class="lst-no-background mgt-15">\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="assets/img/avt5.jpg">\n        </ion-avatar>\n        <h2>Finn</h2>\n        <p>Listen, I\'ve had a pretty messed up day...</p>\n      </ion-item>\n\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="assets/img/avt1.jpg">\n        </ion-avatar>\n        <h2>Han</h2>\n        <p>I\'ve got enough on my plate as it is, and I...</p>\n      </ion-item>\n    </ion-list>\n\n    <ion-item>\n      <span class="text-grey-4 fs-13 text-bold" item-left>18 tracks</span>\n      <button ion-button icon-left clear item-end class="text-black uppercase bold" (click)="onCallbackEvent(\'openPlayer\')">\n        <ion-icon name="play"></ion-icon>\n        Play\n      </button>\n    </ion-item>\n  </ion-card>\n\n  <ion-card class="pst-relative bdra-10 card-title-pst">\n    <div class="pst-relative">\n      <img src="assets/img/demo2.jpg"/>\n      <ion-card-title padding class="fs-18 text-white pdb-10 bold uppercase">Nine Inch Nails Live</ion-card-title>\n    </div>\n    <ion-fab right top>\n      <button ion-fab small class="white-opct">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-fab>\n\n    <ion-list class="lst-no-background mgt-15">\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="assets/img/avt5.jpg">\n        </ion-avatar>\n        <h2>Finn</h2>\n        <p>Listen, I\'ve had a pretty messed up day...</p>\n      </ion-item>\n\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="assets/img/avt1.jpg">\n        </ion-avatar>\n        <h2>Han</h2>\n        <p>I\'ve got enough on my plate as it is, and I...</p>\n      </ion-item>\n    </ion-list>\n\n    <ion-item>\n      <span class="text-grey-4 fs-13 text-bold" item-left>18 tracks</span>\n      <button ion-button icon-left clear item-end class="text-black uppercase bold" (click)="onCallbackEvent(\'openPlayer\')">\n        <ion-icon name="play"></ion-icon>\n        Play\n      </button>\n    </ion-item>\n  </ion-card>\n\n  <ion-card class="pst-relative bdra-10 card-title-pst">\n    <div class="pst-relative">\n      <img src="assets/img/demo3.jpg"/>\n      <ion-card-title padding class="fs-18 text-white pdb-10 bold uppercase">Nine Inch Nails Live</ion-card-title>\n    </div>\n    <ion-fab right top>\n      <button ion-fab small class="white-opct">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-fab>\n\n    <ion-list class="lst-no-background mgt-15">\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="assets/img/avt5.jpg">\n        </ion-avatar>\n        <h2>Finn</h2>\n        <p>Listen, I\'ve had a pretty messed up day...</p>\n      </ion-item>\n\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="assets/img/avt1.jpg">\n        </ion-avatar>\n        <h2>Han</h2>\n        <p>I\'ve got enough on my plate as it is, and I...</p>\n      </ion-item>\n    </ion-list>\n\n    <ion-item>\n      <span class="text-grey-4 fs-13 text-bold" item-left>18 tracks</span>\n      <button ion-button icon-left clear item-end class="text-black uppercase bold" (click)="onCallbackEvent(\'openPlayer\')">\n        <ion-icon name="play"></ion-icon>\n        Play\n      </button>\n    </ion-item>\n  </ion-card>\n\n  <ion-card class="pst-relative bdra-10 card-title-pst">\n    <div class="pst-relative">\n      <img src="assets/img/demo5.jpg"/>\n      <ion-card-title padding class="fs-18 text-white pdb-10 bold uppercase">Nine Inch Nails Live</ion-card-title>\n    </div>\n    <ion-fab right top>\n      <button ion-fab small class="white-opct">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-fab>\n\n    <ion-list class="lst-no-background mgt-15">\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="assets/img/avt5.jpg">\n        </ion-avatar>\n        <h2>Finn</h2>\n        <p>Listen, I\'ve had a pretty messed up day...</p>\n      </ion-item>\n\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="assets/img/avt1.jpg">\n        </ion-avatar>\n        <h2>Han</h2>\n        <p>I\'ve got enough on my plate as it is, and I...</p>\n      </ion-item>\n    </ion-list>\n\n    <ion-item>\n      <span class="text-grey-4 fs-13 text-bold" item-left>18 tracks</span>\n      <button ion-button icon-left clear item-end class="text-black uppercase bold" (click)="onCallbackEvent(\'openPlayer\')">\n        <ion-icon name="play"></ion-icon>\n        Play\n      </button>\n    </ion-item>\n  </ion-card>\n</div>'/*ion-inline-end:"/Users/andrewhein/Desktop/WestmorelandWorking/src/components/music/music-favoriest/music-favoriest.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], MusicFavoriestComponent);
    return MusicFavoriestComponent;
}());

//# sourceMappingURL=music-favoriest.js.map

/***/ })

});
//# sourceMappingURL=22.js.map