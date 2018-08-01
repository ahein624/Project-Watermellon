webpackJsonp([37],{

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MagazineDetailPageModule", function() { return MagazineDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__magazine_detail__ = __webpack_require__(755);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_blog_blog_post_detail_blog_post_detail_module__ = __webpack_require__(553);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MagazineDetailPageModule = (function () {
    function MagazineDetailPageModule() {
    }
    MagazineDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__magazine_detail__["a" /* MagazineDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__magazine_detail__["a" /* MagazineDetailPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_blog_blog_post_detail_blog_post_detail_module__["a" /* BlogPostDetailModule */]
            ],
        })
    ], MagazineDetailPageModule);
    return MagazineDetailPageModule;
}());

//# sourceMappingURL=magazine-detail.module.js.map

/***/ }),

/***/ 553:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogPostDetailModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__blog_post_detail__ = __webpack_require__(554);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BlogPostDetailModule = (function () {
    function BlogPostDetailModule() {
    }
    BlogPostDetailModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__blog_post_detail__["a" /* BlogPostDetailComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__blog_post_detail__["a" /* BlogPostDetailComponent */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__blog_post_detail__["a" /* BlogPostDetailComponent */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], BlogPostDetailModule);
    return BlogPostDetailModule;
}());

//# sourceMappingURL=blog-post-detail.module.js.map

/***/ }),

/***/ 554:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogPostDetailComponent; });
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
 * Generated class for the BlogPostDetailComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var BlogPostDetailComponent = (function () {
    function BlogPostDetailComponent() {
        var _this = this;
        this.onCallbackEvent = function (event) {
            if (_this.events[event]) {
                _this.events[event]();
            }
        };
        console.log('Hello BlogPostDetailComponent Component');
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], BlogPostDetailComponent.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], BlogPostDetailComponent.prototype, "events", void 0);
    BlogPostDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'blog-post-detail',template:/*ion-inline-start:"D:\Visual Studio\Personal\Project-Watermellon\src\components\blog\blog-post-detail\blog-post-detail.html"*/'<div class="white-1 blog-detail">\n\n  \n\n  <img src="assets/img/bg6.jpg" class="ani-left-to-right" alt="">\n\n  <ion-row padding>\n\n    <h2 class="title text-center fw-800 mgt-20 ani-bottom-to-top">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>\n\n    <p class="date text-grey-3 fs-13 text-center ani-fade-out">Nov 23, 2017 at 07:00</p>\n\n    \n\n    <div class="info text-center mgt-15 mgb-40 block ani-bottom-to-top">\n\n      <span class="fs-13 grey-2 pdl-10 pdr-10 pdt-5 pdb-5 text-grey-5"><ion-icon class="mgr-10" name="ios-eye"></ion-icon>200</span>\n\n      <span class="fs-13 grey-2 pdl-10 pdr-10 pdt-5 pdb-5 text-grey-5"><ion-icon class="mgr-10" name="ios-chatbubbles"></ion-icon>34</span>\n\n      <span class="fs-13 grey-2 pdl-10 pdr-10 pdt-5 pdb-5 text-grey-5"><ion-icon class="mgr-10" name="ios-person"></ion-icon>by <b>Koodinh</b></span>\n\n    </div>\n\n\n\n    <div class="txt-post text-center preface pdt-30 ani-top-to-bottom">Mauris ac ligula elit. Nulla pulvinar eget leo ut aliquet. Praesent sit amet luctus quam. Nam fringilla iaculis mi, ut maximus mauris molestie feugiat. Curabitur nec scelerisque elit. Nunc eu odio facilisis, tempor enim eget, venenatis sem.</div>\n\n  </ion-row>\n\n    \n\n  <ion-slides pager class="height-auto mgt-20 mgb-30 ani-bottom-to-top">\n\n    <ion-slide>\n\n      <img src="assets/img/bg20.jpg" alt="">\n\n    </ion-slide>\n\n\n\n    <ion-slide>\n\n      <img src="assets/img/bg12.jpg" alt="">\n\n    </ion-slide>\n\n\n\n    <ion-slide>\n\n      <img src="assets/img/bg15.jpg" alt="">\n\n    </ion-slide>\n\n  </ion-slides>\n\n    \n\n\n\n  <ion-row padding class="ani-bottom-to-top">\n\n    <div class="txt-post">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel ipsum in purus mollis dictum eget vitae purus. Nulla ultrices est odio, a maximus velit pretium ac. Donec vel elementum mi. Proin elementum pulvinar neque, in lacinia nibh tempus auctor. Nam sapien velit, commodo ac nibh a, maximus ullamcorper nunc. Integer luctus tortor dignissim, dictum neque at, scelerisque purus. Vivamus nec erat vel magna posuere euismod. Sed ac augue eu tellus tincidunt fermentum eget sit amet nunc. Donec sit amet mi libero. Cras nunc arcu, ultrices nec sapien eu, convallis posuere libero. Pellentesque vulputate lacus eros, at lobortis lorem egestas et. Vestibulum tempus quam in efficitur lobortis. Maecenas consectetur consequat sem pharetra aliquet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</div>\n\n\n\n    <div class="quote grey-1 pd-20 mgt-20 mgb-20 fw-600 fs-16">\n\n      Nunc feugiat eros nunc, et vestibulum metus mollis et. Nullam eu viverra velit, id ultrices nisl.\n\n    </div>\n\n\n\n    <div class="txt-post">Morbi laoreet magna elit, id dapibus massa varius consequat. Praesent rhoncus nunc quam, eu mollis velit commodo ut. Etiam euismod elit mi, non auctor velit blandit ut. Aenean vitae pulvinar mi, ac pretium tellus. Morbi eu auctor sem, sollicitudin cursus felis. Praesent vestibulum velit sed eros iaculis ornare. Praesent diam diam, pellentesque eget scelerisque sed, bibendum ut risus. Sed sed fermentum sem. Integer vel justo felis. Proin eget quam est.</div>\n\n    \n\n    <div class="excerpts grey-1 pdt-30 pd-20 mgt-20 mgb-20">\n\n      <ion-icon class="fs-30 pull-left mgr-15" name="quote"></ion-icon>\n\n      <p class="fs-16">Curabitur nec scelerisque elit. Nunc eu odio facilisis, tempor enim eget, venenatis sem.</p>\n\n      <ion-list no-lines class="lst-no-background">\n\n        <ion-item>\n\n          <ion-avatar item-start>\n\n            <img src="assets/img/avt5.jpg">\n\n          </ion-avatar>\n\n          <h2 class="fs-16 fw-600">LuanThanh</h2>\n\n          <h3>Designer</h3>\n\n        </ion-item>\n\n      </ion-list>\n\n    </div>\n\n\n\n    <div class="txt-post">In sit amet ipsum sagittis, convallis ipsum fringilla, interdum ante. Etiam vel tincidunt mauris. Nunc feugiat eros nunc, et vestibulum metus mollis et. Nullam eu viverra velit, id ultrices nisl. Donec non enim elementum, laoreet sapien id, feugiat tellus.</div>\n\n  </ion-row>\n\n  \n\n\n\n  <ion-row padding class="mgt-20 mgb-50 pdt-10 pdb-5 stroke stroke-1 stroke-grey-1 ani-right-to-left">\n\n    <p>Share with: \n\n      <button ion-button outline small color="light" class="pull-right mgt--5 text-blue stroke-blue stroke-1 button-circle">\n\n        <ion-icon name="logo-facebook"></ion-icon>\n\n      </button>\n\n      <button ion-button outline small color="light" class="pull-right mgt--5 text-cyan stroke-cyan stroke-1 button-circle">\n\n        <ion-icon name="logo-twitter"></ion-icon>\n\n      </button>\n\n      <button ion-button outline small color="light" class="pull-right mgt--5 text-red stroke-red stroke-1 button-circle">\n\n        <ion-icon name="logo-google"></ion-icon>\n\n      </button>\n\n      <button ion-button outline small color="light" class="pull-right mgt--5 text-brown stroke-brown stroke-1 button-circle">\n\n        <ion-icon name="logo-instagram"></ion-icon>\n\n      </button>\n\n      <button ion-button outline small color="light" class="pull-right mgt--5 text-pink stroke-pink stroke-1 button-circle">\n\n        <ion-icon name="logo-pinterest"></ion-icon>\n\n      </button>\n\n    </p>\n\n  </ion-row>\n\n\n\n\n\n  <div class="ani-bottom-to-top">\n\n    <p padding class="fs-18 fw-600"><ion-icon class="mgr-10 ani-left-to-right" name="ios-chatbubbles">\n\n      </ion-icon>Comments: <b class="text-red">34</b>\n\n    </p>\n\n\n\n    <ion-list no-lines class="grey-2 lst-comments ani-fade-out">\n\n      <ion-item>\n\n        <ion-avatar item-start>\n\n          <img src="assets/img/avt6.jpg">\n\n        </ion-avatar>\n\n        \n\n        <ion-item class="grey-1 fs-14 bdra-5">\n\n          <ion-textarea type="text" placeholder="Background color"></ion-textarea>\n\n        </ion-item>\n\n\n\n        <button ion-button small icon-left class="pdl-0 blue text-white bdra-5">\n\n          <ion-icon class="fs-16" name="ios-add"></ion-icon>Add comment\n\n        </button>\n\n\n\n      </ion-item>\n\n    </ion-list>\n\n  </div>\n\n  \n\n\n\n  <ion-list no-lines class="lst-no-background lst-comments ani-bottom-to-top">\n\n    <ion-item class="ani-bottom-to-left">\n\n      <ion-avatar item-start>\n\n        <img src="assets/img/avt1.jpg">\n\n      </ion-avatar>\n\n      <ion-row>\n\n        <h2 class="fs-16 fw-600">LuanThanh</h2>\n\n        <span class="pull-right mgl-20 fs-13 text-grey-2 mgt-5">04:00 am</span>\n\n      </ion-row>\n\n      <ion-row class="mgt-10">\n\n        <p class="text-cm">Morbi laoreet magna elit, id dapibus massa varius consequat. Praesent rhoncus nunc quam, eu mollis velit commodo ut.</p>\n\n        <button ion-button clear small icon-left class="pdl-0">\n\n          <ion-icon class="fs-16" name="ios-chatbubbles-outline"></ion-icon>Reply\n\n        </button>\n\n        <button ion-button clear small icon-left class="">\n\n          <ion-icon class="fs-16" name="ios-heart-outline"></ion-icon>Like\n\n        </button>\n\n      </ion-row>\n\n    </ion-item>\n\n    \n\n    <ion-item class="ani-bottom-to-left">\n\n      <ion-avatar item-start>\n\n        <img src="assets/img/avt2.jpg">\n\n      </ion-avatar>\n\n      <ion-row>\n\n        <h2 class="fs-16 fw-600">LuanThanh</h2>\n\n        <span class="pull-right mgl-20 fs-13 text-grey-2 mgt-5">04:00 am</span>\n\n      </ion-row>\n\n      <ion-row class="mgt-10">\n\n        <p class="text-cm">Morbi laoreet magna elit, id dapibus massa varius consequat. Praesent rhoncus nunc quam, eu mollis velit commodo ut.</p>\n\n        <button ion-button clear small icon-left class="pdl-0">\n\n          <ion-icon class="fs-16" name="ios-chatbubbles-outline"></ion-icon>Reply\n\n        </button>\n\n        <button ion-button clear small icon-left class="">\n\n          <ion-icon class="fs-16" name="ios-heart-outline"></ion-icon>Like\n\n        </button>\n\n      </ion-row>\n\n    </ion-item>\n\n\n\n    <ion-item class="ani-bottom-to-left">\n\n      <ion-avatar item-start>\n\n        <img src="assets/img/avt3.jpg">\n\n      </ion-avatar>\n\n      <ion-row>\n\n        <h2 class="fs-16 fw-600">LuanThanh</h2>\n\n        <span class="pull-right mgl-20 fs-13 text-grey-2 mgt-5">04:00 am</span>\n\n      </ion-row>\n\n      <ion-row class="mgt-10">\n\n        <p class="text-cm">Morbi laoreet magna elit, id dapibus massa varius consequat. Praesent rhoncus nunc quam, eu mollis velit commodo ut.</p>\n\n        <button ion-button clear small icon-left class="pdl-0">\n\n          <ion-icon class="fs-16" name="ios-chatbubbles-outline"></ion-icon>Reply\n\n        </button>\n\n        <button ion-button clear small icon-left class="">\n\n          <ion-icon class="fs-16" name="ios-heart-outline"></ion-icon>Like\n\n        </button>\n\n      </ion-row>\n\n    </ion-item>\n\n\n\n    <ion-item class="ani-bottom-to-left">\n\n      <ion-avatar item-start>\n\n        <img src="assets/img/avt4.jpg">\n\n      </ion-avatar>\n\n      <ion-row>\n\n        <h2 class="fs-16 fw-600">LuanThanh</h2>\n\n        <span class="pull-right mgl-20 fs-13 text-grey-2 mgt-5">04:00 am</span>\n\n      </ion-row>\n\n      <ion-row class="mgt-10">\n\n        <p class="text-cm">Morbi laoreet magna elit, id dapibus massa varius consequat. Praesent rhoncus nunc quam, eu mollis velit commodo ut.</p>\n\n        <button ion-button clear small icon-left class="pdl-0">\n\n          <ion-icon class="fs-16" name="ios-chatbubbles-outline"></ion-icon>Reply\n\n        </button>\n\n        <button ion-button clear small icon-left class="">\n\n          <ion-icon class="fs-16" name="ios-heart-outline"></ion-icon>Like\n\n        </button>\n\n      </ion-row>\n\n    </ion-item>\n\n\n\n    <ion-item class="ani-bottom-to-left">\n\n      <ion-avatar item-start>\n\n        <img src="assets/img/avt5.jpg">\n\n      </ion-avatar>\n\n      <ion-row>\n\n        <h2 class="fs-16 fw-600">LuanThanh</h2>\n\n        <span class="pull-right mgl-20 fs-13 text-grey-2 mgt-5">04:00 am</span>\n\n      </ion-row>\n\n      <ion-row class="mgt-10">\n\n        <p class="text-cm">Morbi laoreet magna elit, id dapibus massa varius consequat. Praesent rhoncus nunc quam, eu mollis velit commodo ut.</p>\n\n        <button ion-button clear small icon-left class="pdl-0">\n\n          <ion-icon class="fs-16" name="ios-chatbubbles-outline"></ion-icon>Reply\n\n        </button>\n\n        <button ion-button clear small icon-left class="">\n\n          <ion-icon class="fs-16" name="ios-heart-outline"></ion-icon>Like\n\n        </button>\n\n      </ion-row>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <button ion-button block icon-left clear class="mgb-30 text-grey-5">\n\n    <ion-icon name="ios-add"></ion-icon>\n\n    More comment\n\n  </button>\n\n\n\n</div>\n\n'/*ion-inline-end:"D:\Visual Studio\Personal\Project-Watermellon\src\components\blog\blog-post-detail\blog-post-detail.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], BlogPostDetailComponent);
    return BlogPostDetailComponent;
}());

//# sourceMappingURL=blog-post-detail.js.map

/***/ }),

/***/ 755:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MagazineDetailPage; });
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
 * Generated class for the MagazineListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MagazineDetailPage = (function () {
    function MagazineDetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = {};
        this.events = {};
        this.events.openDetail = function (item) {
            // let chatModal = modalCtrl.create('ChatConversationPage',{'data':item});
            // chatModal.present();
            navCtrl.push('MagazineDetailPage');
        };
    }
    MagazineDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MagazineDetailPage');
    };
    MagazineDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-magazine-detail',template:/*ion-inline-start:"D:\Visual Studio\Personal\Project-Watermellon\src\pages\magazine\magazine-detail\magazine-detail.html"*/'<!--\n\n  Generated template for the MagazineListPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title class="inline-block">Detail magazine</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content class="white">\n\n	<blog-post-detail [data]="data" [events]="events"></blog-post-detail>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"D:\Visual Studio\Personal\Project-Watermellon\src\pages\magazine\magazine-detail\magazine-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], MagazineDetailPage);
    return MagazineDetailPage;
}());

//# sourceMappingURL=magazine-detail.js.map

/***/ })

});
//# sourceMappingURL=37.js.map