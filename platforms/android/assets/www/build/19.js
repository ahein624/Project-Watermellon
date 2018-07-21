webpackJsonp([19],{

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicPlayerPageModule", function() { return MusicPlayerPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__music_player__ = __webpack_require__(566);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_music_music_player_music_player_module__ = __webpack_require__(567);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MusicPlayerPageModule = (function () {
    function MusicPlayerPageModule() {
    }
    MusicPlayerPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__music_player__["a" /* MusicPlayerPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__music_player__["a" /* MusicPlayerPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_music_music_player_music_player_module__["a" /* MusicPlayerModule */]
            ],
        })
    ], MusicPlayerPageModule);
    return MusicPlayerPageModule;
}());

//# sourceMappingURL=music-player.module.js.map

/***/ }),

/***/ 566:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MusicPlayerPage; });
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
var MusicPlayerPage = (function () {
    function MusicPlayerPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = {};
        this.events = {};
        this.events.openPlayer = function (item) {
            navCtrl.push('MusicPlayerPage');
        };
    }
    MusicPlayerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MusicPlayerPage');
    };
    MusicPlayerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-music-player',template:/*ion-inline-start:"/Users/andrewhein/Desktop/WestmorelandWorking/src/pages/music/music-player/music-player.html"*/'\n<ion-header>\n  <ion-navbar>\n  	<button ion-button menuToggle class="text-white">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-toolbar>\n      <ion-title class="text-white">play_music</ion-title>\n    </ion-toolbar>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="lama-vs-coban">\n	<music-player [data]="data" [events]="events"></music-player>\n</ion-content>'/*ion-inline-end:"/Users/andrewhein/Desktop/WestmorelandWorking/src/pages/music/music-player/music-player.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], MusicPlayerPage);
    return MusicPlayerPage;
}());

//# sourceMappingURL=music-player.js.map

/***/ }),

/***/ 567:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MusicPlayerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__music_player__ = __webpack_require__(568);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MusicPlayerModule = (function () {
    function MusicPlayerModule() {
    }
    MusicPlayerModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__music_player__["a" /* MusicPlayerComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__music_player__["a" /* MusicPlayerComponent */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__music_player__["a" /* MusicPlayerComponent */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], MusicPlayerModule);
    return MusicPlayerModule;
}());

//# sourceMappingURL=music-player.module.js.map

/***/ }),

/***/ 568:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MusicPlayerComponent; });
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
 * Generated class for the MusicPlayerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var MusicPlayerComponent = (function () {
    function MusicPlayerComponent() {
        var _this = this;
        this.onCallbackEvent = function (event) {
            if (_this.events[event]) {
                _this.events[event]();
            }
        };
        console.log('Hello MusicPlayerComponent Component');
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], MusicPlayerComponent.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], MusicPlayerComponent.prototype, "events", void 0);
    MusicPlayerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'music-player',template:/*ion-inline-start:"/Users/andrewhein/Desktop/WestmorelandWorking/src/components/music/music-player/music-player.html"*/'\n\n\n  <div class="wrapper-player">\n    <div padding class="info-strong text-center">\n      <img class="shadow-3" src="assets/img/demo1.jpg">\n      <div class="text-center mgt-15">\n        <h3 class="pd-0 text-white mg-0 fw-500">Name strong here</h3>\n        <p class="pd-0 text-white mg-0 fs-12">Koodinh | post at March 6, 2018</p>\n      </div>\n    </div>\n\n    <div class="">\n      <ion-item no-lines class="transparent">\n        <ion-range class="pdr-15" min="0" max="100" [(ngModel)]="saturation" color="white"></ion-range>\n      </ion-item>\n      <div padding class="pdt-0">\n        <span class="pull-left text-white fs-13">00:00</span>\n        <span class="pull-right text-white fs-13">03:00</span>\n      </div>\n    </div>\n    \n    <div padding class="pdb-0">\n      <div class="directional text-center">\n        <button ion-button clear class="button-circle button-large text-white">\n          <ion-icon class="fs-24" name="ios-skip-backward-outline"></ion-icon>\n        </button>\n        <button ion-button clear class="button-circle button-large white shadow-3 text-black">\n          <ion-icon class="fs-24" name="ios-pause"></ion-icon>\n        </button>\n        <button ion-button clear class="button-circle button-large text-white">\n          <ion-icon class="fs-24" name="ios-skip-forward-outline"></ion-icon>\n        </button>\n      </div>\n\n      <div class="group-btn-more mgt-15">\n        <button ion-button clear icon-only class="button-circle text-white">\n          <ion-icon name="ios-repeat"></ion-icon>\n        </button>\n        <div class="volume">\n          <ion-item no-lines class="transparent">\n            <ion-range [(ngModel)]="volume" min="0" max="100" color="white">\n              <ion-icon range-left class="text-white" name="ios-volume-off"></ion-icon>\n              <ion-icon range-right class="text-white" name="ios-volume-up"></ion-icon>\n            </ion-range>\n          </ion-item>\n        </div>\n        <button ion-button clear icon-only class="button-circle text-white">\n          <ion-icon name="ios-shuffle"></ion-icon>\n        </button>\n      </div>\n    </div>\n  </div>\n'/*ion-inline-end:"/Users/andrewhein/Desktop/WestmorelandWorking/src/components/music/music-player/music-player.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], MusicPlayerComponent);
    return MusicPlayerComponent;
}());

//# sourceMappingURL=music-player.js.map

/***/ })

});
//# sourceMappingURL=19.js.map