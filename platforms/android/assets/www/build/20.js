webpackJsonp([20],{

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicListPageModule", function() { return MusicListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__music_list__ = __webpack_require__(564);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_music_music_list_music_list_module__ = __webpack_require__(565);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MusicListPageModule = (function () {
    function MusicListPageModule() {
    }
    MusicListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__music_list__["a" /* MusicListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__music_list__["a" /* MusicListPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_music_music_list_music_list_module__["a" /* MusicListModule */]
            ],
        })
    ], MusicListPageModule);
    return MusicListPageModule;
}());

//# sourceMappingURL=music-list.module.js.map

/***/ }),

/***/ 564:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MusicListPage; });
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
var MusicListPage = (function () {
    function MusicListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = {};
        this.events = {};
        this.check_search = false;
        this.events.openPlayer = function (item) {
            navCtrl.push('MusicPlayerPage');
        };
    }
    MusicListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MusicListPage');
    };
    MusicListPage.prototype.show_search = function () {
        if (this.check_search == true) {
            this.check_search = false;
        }
        else {
            this.check_search = true;
        }
    };
    MusicListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-music-list',template:/*ion-inline-start:"/Users/andrewhein/Desktop/WestmorelandWorking/src/pages/music/music-list/music-list.html"*/'\n\n<ion-header>\n  <ion-navbar>\n    <ion-toolbar>\n      <ion-title *ngIf="check_search != true">list_music</ion-title>\n\n      <ion-searchbar class="dark-searchbar round transparent text-white" *ngIf="check_search == true"></ion-searchbar>\n\n      <ion-buttons end class="toolbar-group-btn">\n        <button ion-button small icon-only color="royal" class="mgr-10" (click)="show_search()">\n          <ion-icon class="fs-18" name="ios-search" *ngIf="check_search != true"></ion-icon>\n          <ion-icon class="fs-24" name="ios-close" *ngIf="check_search == true"></ion-icon>\n        </button>\n        <button ion-button small icon-only color="royal" class="mgr-10 fs-14">\n          <ion-icon class="fs-20" name="md-more"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="lama-vs-coban">\n	<music-list [data]="data" [events]="events"></music-list>\n</ion-content>'/*ion-inline-end:"/Users/andrewhein/Desktop/WestmorelandWorking/src/pages/music/music-list/music-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], MusicListPage);
    return MusicListPage;
}());

//# sourceMappingURL=music-list.js.map

/***/ }),

/***/ 565:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MusicListModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__music_list__ = __webpack_require__(566);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MusicListModule = (function () {
    function MusicListModule() {
    }
    MusicListModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__music_list__["a" /* MusicListComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__music_list__["a" /* MusicListComponent */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__music_list__["a" /* MusicListComponent */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], MusicListModule);
    return MusicListModule;
}());

//# sourceMappingURL=music-list.module.js.map

/***/ }),

/***/ 566:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MusicListComponent; });
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
 * Generated class for the MusicCategoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var MusicListComponent = (function () {
    function MusicListComponent() {
        var _this = this;
        this.onCallbackEvent = function (event) {
            if (_this.events[event]) {
                _this.events[event]();
            }
        };
        console.log('Hello MusicListComponent Component');
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], MusicListComponent.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], MusicListComponent.prototype, "events", void 0);
    MusicListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'music-list',template:/*ion-inline-start:"/Users/andrewhein/Desktop/WestmorelandWorking/src/components/music/music-list/music-list.html"*/'<ion-list no-lines class="lst-no-background">\n  <ion-item class="" (click)="onCallbackEvent(\'openPlayer\')">\n    <ion-thumbnail item-start class="shadow-2">\n      <img src="assets/img/demo1.jpg">\n    </ion-thumbnail>\n    <h2 class="text-white fs-15">My Neighbor Totoro</h2>\n    <p class="text-grey-1 fs-12">Hayao Miyazaki • 1988</p>\n    <button ion-button small item-end class="white-opct text-white button-circle">\n      <ion-icon class="fs-18" name="ios-play"></ion-icon>\n    </button>\n  </ion-item>\n\n  <ion-item class="" (click)="onCallbackEvent(\'openPlayer\')">\n    <ion-thumbnail item-start class="shadow-2">\n      <img src="assets/img/demo2.jpg">\n    </ion-thumbnail>\n    <h2 class="text-white fs-15">Raiders of the Lost Ark</h2>\n    <p class="text-grey-1 fs-12">Steven Spielberg • 1981</p>\n    <button ion-button small item-end class="white-opct text-white button-circle">\n      <ion-icon class="fs-18" name="ios-play"></ion-icon>\n    </button>\n  </ion-item>\n\n  <ion-item class="" (click)="onCallbackEvent(\'openPlayer\')">\n    <ion-thumbnail item-start class="shadow-2">\n      <img src="assets/img/demo3.jpg">\n    </ion-thumbnail>\n    <h2 class="text-white fs-15">Ghostbusters</h2>\n    <p class="text-grey-1 fs-12">Ivan Reitman • 1984</p>\n    <button ion-button small item-end class="white-opct text-white button-circle">\n      <ion-icon class="fs-18" name="ios-play"></ion-icon>\n    </button>\n  </ion-item>\n\n  <ion-item class="" (click)="onCallbackEvent(\'openPlayer\')">\n    <ion-thumbnail item-start class="shadow-2">\n      <img src="assets/img/demo4.jpg">\n    </ion-thumbnail>\n    <h2 class="text-white fs-15">Batman</h2>\n    <p class="text-grey-1 fs-12">Tim Burton • 1988</p>\n    <button ion-button small item-end class="white-opct text-white button-circle">\n      <ion-icon class="fs-18" name="ios-play"></ion-icon>\n    </button>\n  </ion-item>\n\n  <ion-item class="" (click)="onCallbackEvent(\'openPlayer\')">\n    <ion-thumbnail item-start class="shadow-2">\n      <img src="assets/img/demo5.jpg">\n    </ion-thumbnail>\n    <h2 class="text-white fs-15">My Neighbor Totoro</h2>\n    <p class="text-grey-1 fs-12">Hayao Miyazaki • 1988</p>\n    <button ion-button small item-end class="white-opct text-white button-circle">\n      <ion-icon class="fs-18" name="ios-play"></ion-icon>\n    </button>\n  </ion-item>\n\n  <ion-item class="" (click)="onCallbackEvent(\'openPlayer\')">\n    <ion-thumbnail item-start class="shadow-2">\n      <img src="assets/img/demo6.jpg">\n    </ion-thumbnail>\n    <h2 class="text-white fs-15">Raiders of the Lost Ark</h2>\n    <p class="text-grey-1 fs-12">Steven Spielberg • 1981</p>\n    <button ion-button small item-end class="white-opct text-white button-circle">\n      <ion-icon class="fs-18" name="ios-play"></ion-icon>\n    </button>\n  </ion-item>\n\n  <ion-item class="" (click)="onCallbackEvent(\'openPlayer\')">\n    <ion-thumbnail item-start class="shadow-2">\n      <img src="assets/img/demo7.jpg">\n    </ion-thumbnail>\n    <h2 class="text-white fs-15">My Neighbor Totoro</h2>\n    <p class="text-grey-1 fs-12">Hayao Miyazaki • 1988</p>\n    <button ion-button small item-end class="white-opct text-white button-circle">\n      <ion-icon class="fs-18" name="ios-play"></ion-icon>\n    </button>\n  </ion-item>\n\n  <ion-item class="" (click)="onCallbackEvent(\'openPlayer\')">\n    <ion-thumbnail item-start class="shadow-2">\n      <img src="assets/img/demo8.jpg">\n    </ion-thumbnail>\n    <h2 class="text-white fs-15">Raiders of the Lost Ark</h2>\n    <p class="text-grey-1 fs-12">Steven Spielberg • 1981</p>\n    <button ion-button small item-end class="white-opct text-white button-circle">\n      <ion-icon class="fs-18" name="ios-play"></ion-icon>\n    </button>\n  </ion-item>\n\n  <ion-item class="" (click)="onCallbackEvent(\'openPlayer\')">\n    <ion-thumbnail item-start class="shadow-2">\n      <img src="assets/img/demo9.jpg">\n    </ion-thumbnail>\n    <h2 class="text-white fs-15">Ghostbusters</h2>\n    <p class="text-grey-1 fs-12">Ivan Reitman • 1984</p>\n    <button ion-button small item-end class="white-opct text-white button-circle">\n      <ion-icon class="fs-18" name="ios-play"></ion-icon>\n    </button>\n  </ion-item>\n\n  <ion-item class="" (click)="onCallbackEvent(\'openPlayer\')">\n    <ion-thumbnail item-start class="shadow-2">\n      <img src="assets/img/demo10.jpg">\n    </ion-thumbnail>\n    <h2 class="text-white fs-15">Batman</h2>\n    <p class="text-grey-1 fs-12">Tim Burton • 1988</p>\n    <button ion-button small item-end class="white-opct text-white button-circle">\n      <ion-icon class="fs-18" name="ios-play"></ion-icon>\n    </button>\n  </ion-item>\n\n  <ion-item class="" (click)="onCallbackEvent(\'openPlayer\')">\n    <ion-thumbnail item-start class="shadow-2">\n      <img src="assets/img/demo11.jpg">\n    </ion-thumbnail>\n    <h2 class="text-white fs-15">My Neighbor Totoro</h2>\n    <p class="text-grey-1 fs-12">Hayao Miyazaki • 1988</p>\n    <button ion-button small item-end class="white-opct text-white button-circle">\n      <ion-icon class="fs-18" name="ios-play"></ion-icon>\n    </button>\n  </ion-item>\n\n  <ion-item class="" (click)="onCallbackEvent(\'openPlayer\')">\n    <ion-thumbnail item-start class="shadow-2">\n      <img src="assets/img/demo12.jpg">\n    </ion-thumbnail>\n    <h2 class="text-white fs-15">Raiders of the Lost Ark</h2>\n    <p class="text-grey-1 fs-12">Steven Spielberg • 1981</p>\n    <button ion-button small item-end class="white-opct text-white button-circle">\n      <ion-icon class="fs-18" name="ios-play"></ion-icon>\n    </button>\n  </ion-item>\n\n  <ion-item class="" (click)="onCallbackEvent(\'openPlayer\')">\n    <ion-thumbnail item-start class="shadow-2">\n      <img src="assets/img/demo13.jpg">\n    </ion-thumbnail>\n    <h2 class="text-white fs-15">Raiders of the Lost Ark</h2>\n    <p class="text-grey-1 fs-12">Steven Spielberg • 1981</p>\n    <button ion-button small item-end class="white-opct text-white button-circle">\n      <ion-icon class="fs-18" name="ios-play"></ion-icon>\n    </button>\n  </ion-item>\n\n  <ion-item class="" (click)="onCallbackEvent(\'openPlayer\')">\n    <ion-thumbnail item-start class="shadow-2">\n      <img src="assets/img/demo14.jpg">\n    </ion-thumbnail>\n    <h2 class="text-white fs-15">Raiders of the Lost Ark</h2>\n    <p class="text-grey-1 fs-12">Steven Spielberg • 1981</p>\n    <button ion-button small item-end class="white-opct text-white button-circle">\n      <ion-icon class="fs-18" name="ios-play"></ion-icon>\n    </button>\n  </ion-item>\n\n  <ion-item class="" (click)="onCallbackEvent(\'openPlayer\')">\n    <ion-thumbnail item-start class="shadow-2">\n      <img src="assets/img/demo15.jpg">\n    </ion-thumbnail>\n    <h2 class="text-white fs-15">Raiders of the Lost Ark</h2>\n    <p class="text-grey-1 fs-12">Steven Spielberg • 1981</p>\n    <button ion-button small item-end class="white-opct text-white button-circle">\n      <ion-icon class="fs-18" name="ios-play"></ion-icon>\n    </button>\n  </ion-item>\n\n  <ion-item class="" (click)="onCallbackEvent(\'openPlayer\')">\n    <ion-thumbnail item-start class="shadow-2">\n      <img src="assets/img/demo16.jpg">\n    </ion-thumbnail>\n    <h2 class="text-white fs-15">Raiders of the Lost Ark</h2>\n    <p class="text-grey-1 fs-12">Steven Spielberg • 1981</p>\n    <button ion-button small item-end class="white-opct text-white button-circle">\n      <ion-icon class="fs-18" name="ios-play"></ion-icon>\n    </button>\n  </ion-item>\n</ion-list>\n\n'/*ion-inline-end:"/Users/andrewhein/Desktop/WestmorelandWorking/src/components/music/music-list/music-list.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], MusicListComponent);
    return MusicListComponent;
}());

//# sourceMappingURL=music-list.js.map

/***/ })

});
//# sourceMappingURL=20.js.map