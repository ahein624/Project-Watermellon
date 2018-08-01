webpackJsonp([7],{

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogPageModule", function() { return BlogPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__blog__ = __webpack_require__(703);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_blog_blog_basic_blog_basic_module__ = __webpack_require__(704);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_blog_blog_timeline_blog_timeline_module__ = __webpack_require__(706);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_blog_blog_post_detail_blog_post_detail_module__ = __webpack_require__(553);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var BlogPageModule = (function () {
    function BlogPageModule() {
    }
    BlogPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__blog__["a" /* BlogPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__blog__["a" /* BlogPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_blog_blog_basic_blog_basic_module__["a" /* BlogBasicModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_blog_blog_timeline_blog_timeline_module__["a" /* BlogTimelineModule */],
                __WEBPACK_IMPORTED_MODULE_5__components_blog_blog_post_detail_blog_post_detail_module__["a" /* BlogPostDetailModule */]
            ],
        })
    ], BlogPageModule);
    return BlogPageModule;
}());

//# sourceMappingURL=blog.module.js.map

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
            selector: 'blog-post-detail',template:/*ion-inline-start:"/Users/andrewhein/Desktop/WestmorelandWorking/src/components/blog/blog-post-detail/blog-post-detail.html"*/'<div class="white-1 blog-detail">\n  \n  <img src="assets/img/bg6.jpg" class="ani-left-to-right" alt="">\n  <ion-row padding>\n    <h2 class="title text-center fw-800 mgt-20 ani-bottom-to-top">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>\n    <p class="date text-grey-3 fs-13 text-center ani-fade-out">Nov 23, 2017 at 07:00</p>\n    \n    <div class="info text-center mgt-15 mgb-40 block ani-bottom-to-top">\n      <span class="fs-13 grey-2 pdl-10 pdr-10 pdt-5 pdb-5 text-grey-5"><ion-icon class="mgr-10" name="ios-eye"></ion-icon>200</span>\n      <span class="fs-13 grey-2 pdl-10 pdr-10 pdt-5 pdb-5 text-grey-5"><ion-icon class="mgr-10" name="ios-chatbubbles"></ion-icon>34</span>\n      <span class="fs-13 grey-2 pdl-10 pdr-10 pdt-5 pdb-5 text-grey-5"><ion-icon class="mgr-10" name="ios-person"></ion-icon>by <b>Koodinh</b></span>\n    </div>\n\n    <div class="txt-post text-center preface pdt-30 ani-top-to-bottom">Mauris ac ligula elit. Nulla pulvinar eget leo ut aliquet. Praesent sit amet luctus quam. Nam fringilla iaculis mi, ut maximus mauris molestie feugiat. Curabitur nec scelerisque elit. Nunc eu odio facilisis, tempor enim eget, venenatis sem.</div>\n  </ion-row>\n    \n  <ion-slides pager class="height-auto mgt-20 mgb-30 ani-bottom-to-top">\n    <ion-slide>\n      <img src="assets/img/bg20.jpg" alt="">\n    </ion-slide>\n\n    <ion-slide>\n      <img src="assets/img/bg12.jpg" alt="">\n    </ion-slide>\n\n    <ion-slide>\n      <img src="assets/img/bg15.jpg" alt="">\n    </ion-slide>\n  </ion-slides>\n    \n\n  <ion-row padding class="ani-bottom-to-top">\n    <div class="txt-post">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel ipsum in purus mollis dictum eget vitae purus. Nulla ultrices est odio, a maximus velit pretium ac. Donec vel elementum mi. Proin elementum pulvinar neque, in lacinia nibh tempus auctor. Nam sapien velit, commodo ac nibh a, maximus ullamcorper nunc. Integer luctus tortor dignissim, dictum neque at, scelerisque purus. Vivamus nec erat vel magna posuere euismod. Sed ac augue eu tellus tincidunt fermentum eget sit amet nunc. Donec sit amet mi libero. Cras nunc arcu, ultrices nec sapien eu, convallis posuere libero. Pellentesque vulputate lacus eros, at lobortis lorem egestas et. Vestibulum tempus quam in efficitur lobortis. Maecenas consectetur consequat sem pharetra aliquet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</div>\n\n    <div class="quote grey-1 pd-20 mgt-20 mgb-20 fw-600 fs-16">\n      Nunc feugiat eros nunc, et vestibulum metus mollis et. Nullam eu viverra velit, id ultrices nisl.\n    </div>\n\n    <div class="txt-post">Morbi laoreet magna elit, id dapibus massa varius consequat. Praesent rhoncus nunc quam, eu mollis velit commodo ut. Etiam euismod elit mi, non auctor velit blandit ut. Aenean vitae pulvinar mi, ac pretium tellus. Morbi eu auctor sem, sollicitudin cursus felis. Praesent vestibulum velit sed eros iaculis ornare. Praesent diam diam, pellentesque eget scelerisque sed, bibendum ut risus. Sed sed fermentum sem. Integer vel justo felis. Proin eget quam est.</div>\n    \n    <div class="excerpts grey-1 pdt-30 pd-20 mgt-20 mgb-20">\n      <ion-icon class="fs-30 pull-left mgr-15" name="quote"></ion-icon>\n      <p class="fs-16">Curabitur nec scelerisque elit. Nunc eu odio facilisis, tempor enim eget, venenatis sem.</p>\n      <ion-list no-lines class="lst-no-background">\n        <ion-item>\n          <ion-avatar item-start>\n            <img src="assets/img/avt5.jpg">\n          </ion-avatar>\n          <h2 class="fs-16 fw-600">LuanThanh</h2>\n          <h3>Designer</h3>\n        </ion-item>\n      </ion-list>\n    </div>\n\n    <div class="txt-post">In sit amet ipsum sagittis, convallis ipsum fringilla, interdum ante. Etiam vel tincidunt mauris. Nunc feugiat eros nunc, et vestibulum metus mollis et. Nullam eu viverra velit, id ultrices nisl. Donec non enim elementum, laoreet sapien id, feugiat tellus.</div>\n  </ion-row>\n  \n\n  <ion-row padding class="mgt-20 mgb-50 pdt-10 pdb-5 stroke stroke-1 stroke-grey-1 ani-right-to-left">\n    <p>Share with: \n      <button ion-button outline small color="light" class="pull-right mgt--5 text-blue stroke-blue stroke-1 button-circle">\n        <ion-icon name="logo-facebook"></ion-icon>\n      </button>\n      <button ion-button outline small color="light" class="pull-right mgt--5 text-cyan stroke-cyan stroke-1 button-circle">\n        <ion-icon name="logo-twitter"></ion-icon>\n      </button>\n      <button ion-button outline small color="light" class="pull-right mgt--5 text-red stroke-red stroke-1 button-circle">\n        <ion-icon name="logo-google"></ion-icon>\n      </button>\n      <button ion-button outline small color="light" class="pull-right mgt--5 text-brown stroke-brown stroke-1 button-circle">\n        <ion-icon name="logo-instagram"></ion-icon>\n      </button>\n      <button ion-button outline small color="light" class="pull-right mgt--5 text-pink stroke-pink stroke-1 button-circle">\n        <ion-icon name="logo-pinterest"></ion-icon>\n      </button>\n    </p>\n  </ion-row>\n\n\n  <div class="ani-bottom-to-top">\n    <p padding class="fs-18 fw-600"><ion-icon class="mgr-10 ani-left-to-right" name="ios-chatbubbles">\n      </ion-icon>Comments: <b class="text-red">34</b>\n    </p>\n\n    <ion-list no-lines class="grey-2 lst-comments ani-fade-out">\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="assets/img/avt6.jpg">\n        </ion-avatar>\n        \n        <ion-item class="grey-1 fs-14 bdra-5">\n          <ion-textarea type="text" placeholder="Background color"></ion-textarea>\n        </ion-item>\n\n        <button ion-button small icon-left class="pdl-0 blue text-white bdra-5">\n          <ion-icon class="fs-16" name="ios-add"></ion-icon>Add comment\n        </button>\n\n      </ion-item>\n    </ion-list>\n  </div>\n  \n\n  <ion-list no-lines class="lst-no-background lst-comments ani-bottom-to-top">\n    <ion-item class="ani-bottom-to-left">\n      <ion-avatar item-start>\n        <img src="assets/img/avt1.jpg">\n      </ion-avatar>\n      <ion-row>\n        <h2 class="fs-16 fw-600">LuanThanh</h2>\n        <span class="pull-right mgl-20 fs-13 text-grey-2 mgt-5">04:00 am</span>\n      </ion-row>\n      <ion-row class="mgt-10">\n        <p class="text-cm">Morbi laoreet magna elit, id dapibus massa varius consequat. Praesent rhoncus nunc quam, eu mollis velit commodo ut.</p>\n        <button ion-button clear small icon-left class="pdl-0">\n          <ion-icon class="fs-16" name="ios-chatbubbles-outline"></ion-icon>Reply\n        </button>\n        <button ion-button clear small icon-left class="">\n          <ion-icon class="fs-16" name="ios-heart-outline"></ion-icon>Like\n        </button>\n      </ion-row>\n    </ion-item>\n    \n    <ion-item class="ani-bottom-to-left">\n      <ion-avatar item-start>\n        <img src="assets/img/avt2.jpg">\n      </ion-avatar>\n      <ion-row>\n        <h2 class="fs-16 fw-600">LuanThanh</h2>\n        <span class="pull-right mgl-20 fs-13 text-grey-2 mgt-5">04:00 am</span>\n      </ion-row>\n      <ion-row class="mgt-10">\n        <p class="text-cm">Morbi laoreet magna elit, id dapibus massa varius consequat. Praesent rhoncus nunc quam, eu mollis velit commodo ut.</p>\n        <button ion-button clear small icon-left class="pdl-0">\n          <ion-icon class="fs-16" name="ios-chatbubbles-outline"></ion-icon>Reply\n        </button>\n        <button ion-button clear small icon-left class="">\n          <ion-icon class="fs-16" name="ios-heart-outline"></ion-icon>Like\n        </button>\n      </ion-row>\n    </ion-item>\n\n    <ion-item class="ani-bottom-to-left">\n      <ion-avatar item-start>\n        <img src="assets/img/avt3.jpg">\n      </ion-avatar>\n      <ion-row>\n        <h2 class="fs-16 fw-600">LuanThanh</h2>\n        <span class="pull-right mgl-20 fs-13 text-grey-2 mgt-5">04:00 am</span>\n      </ion-row>\n      <ion-row class="mgt-10">\n        <p class="text-cm">Morbi laoreet magna elit, id dapibus massa varius consequat. Praesent rhoncus nunc quam, eu mollis velit commodo ut.</p>\n        <button ion-button clear small icon-left class="pdl-0">\n          <ion-icon class="fs-16" name="ios-chatbubbles-outline"></ion-icon>Reply\n        </button>\n        <button ion-button clear small icon-left class="">\n          <ion-icon class="fs-16" name="ios-heart-outline"></ion-icon>Like\n        </button>\n      </ion-row>\n    </ion-item>\n\n    <ion-item class="ani-bottom-to-left">\n      <ion-avatar item-start>\n        <img src="assets/img/avt4.jpg">\n      </ion-avatar>\n      <ion-row>\n        <h2 class="fs-16 fw-600">LuanThanh</h2>\n        <span class="pull-right mgl-20 fs-13 text-grey-2 mgt-5">04:00 am</span>\n      </ion-row>\n      <ion-row class="mgt-10">\n        <p class="text-cm">Morbi laoreet magna elit, id dapibus massa varius consequat. Praesent rhoncus nunc quam, eu mollis velit commodo ut.</p>\n        <button ion-button clear small icon-left class="pdl-0">\n          <ion-icon class="fs-16" name="ios-chatbubbles-outline"></ion-icon>Reply\n        </button>\n        <button ion-button clear small icon-left class="">\n          <ion-icon class="fs-16" name="ios-heart-outline"></ion-icon>Like\n        </button>\n      </ion-row>\n    </ion-item>\n\n    <ion-item class="ani-bottom-to-left">\n      <ion-avatar item-start>\n        <img src="assets/img/avt5.jpg">\n      </ion-avatar>\n      <ion-row>\n        <h2 class="fs-16 fw-600">LuanThanh</h2>\n        <span class="pull-right mgl-20 fs-13 text-grey-2 mgt-5">04:00 am</span>\n      </ion-row>\n      <ion-row class="mgt-10">\n        <p class="text-cm">Morbi laoreet magna elit, id dapibus massa varius consequat. Praesent rhoncus nunc quam, eu mollis velit commodo ut.</p>\n        <button ion-button clear small icon-left class="pdl-0">\n          <ion-icon class="fs-16" name="ios-chatbubbles-outline"></ion-icon>Reply\n        </button>\n        <button ion-button clear small icon-left class="">\n          <ion-icon class="fs-16" name="ios-heart-outline"></ion-icon>Like\n        </button>\n      </ion-row>\n    </ion-item>\n  </ion-list>\n\n  <button ion-button block icon-left clear class="mgb-30 text-grey-5">\n    <ion-icon name="ios-add"></ion-icon>\n    More comment\n  </button>\n\n</div>\n'/*ion-inline-end:"/Users/andrewhein/Desktop/WestmorelandWorking/src/components/blog/blog-post-detail/blog-post-detail.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], BlogPostDetailComponent);
    return BlogPostDetailComponent;
}());

//# sourceMappingURL=blog-post-detail.js.map

/***/ }),

/***/ 703:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogPage; });
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
 * Generated class for the BlogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BlogPage = (function () {
    function BlogPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.params = {};
        this.data = {};
        this.page = this.navParams.get('page');
        this.data = {
            txtFromYou: 'Form You',
            txtFromDay: 'From Day',
        };
        // this.events.openConversation=function(item){
        //   let chatModal = modalCtrl.create('ChatConversationPage',{'data':item});
        //   chatModal.present();
        // }
    }
    BlogPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BlogPage');
    };
    BlogPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-blog',template:/*ion-inline-start:"/Users/andrewhein/Desktop/WestmorelandWorking/src/pages/blog/blog.html"*/'<!--\n  Generated template for the BlogPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>blog</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <blog-basic *ngIf="page.name==1" [data]="data" [events]="events"></blog-basic>\n    <blog-timeline *ngIf="page.name==2" [data]="data" [events]="events"></blog-timeline>\n    <blog-post-detail *ngIf="page.name==3" [data]="data" [events]="events"></blog-post-detail>\n</ion-content>\n'/*ion-inline-end:"/Users/andrewhein/Desktop/WestmorelandWorking/src/pages/blog/blog.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], BlogPage);
    return BlogPage;
}());

//# sourceMappingURL=blog.js.map

/***/ }),

/***/ 704:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogBasicModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__blog_basic__ = __webpack_require__(705);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BlogBasicModule = (function () {
    function BlogBasicModule() {
    }
    BlogBasicModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__blog_basic__["a" /* BlogBasicComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__blog_basic__["a" /* BlogBasicComponent */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__blog_basic__["a" /* BlogBasicComponent */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], BlogBasicModule);
    return BlogBasicModule;
}());

//# sourceMappingURL=blog-basic.module.js.map

/***/ }),

/***/ 705:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogBasicComponent; });
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
 * Generated class for the BlogBasicComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var BlogBasicComponent = (function () {
    function BlogBasicComponent() {
        var _this = this;
        this.onCallbackEvent = function (event) {
            if (_this.events[event]) {
                _this.events[event]();
            }
        };
        console.log('Hello BlogBasicComponent Component');
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], BlogBasicComponent.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], BlogBasicComponent.prototype, "events", void 0);
    BlogBasicComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'blog-basic',template:/*ion-inline-start:"/Users/andrewhein/Desktop/WestmorelandWorking/src/components/blog/blog-basic/blog-basic.html"*/'<div class="white-1" *ngIf="data!=null">\n  	<ion-card class="bdra-5 ani-left-to-right">\n	    <img src="assets/img/bg17.jpg"/>\n	    <ion-card-content>\n	      	<ion-card-title class="fs-18 fw-600">Nine Inch Nails Live. Are you telling me that you built a time machine...</ion-card-title>\n	      	<p>The most popular industrial group ever, and largelyresponsible for bringing the music to a mass audience.</p>\n	    </ion-card-content>\n\n	    <ion-row>\n	      	<ion-col>\n		        <button ion-button icon-left clear small class="text-black">\n		          	<ion-icon name="thumbs-up"></ion-icon>\n		          	<div>120</div>\n		        </button>\n	      	</ion-col>\n	      	<ion-col center text-center>\n		        <button ion-button icon-left clear small class="text-black">\n		          	<ion-icon name="text"></ion-icon>\n		          	<div>40</div>\n		        </button>\n	      	</ion-col>\n	      	<ion-col right text-right>\n	        	<button ion-button icon-left clear small class="text-black fs-20">\n	          		<ion-icon name="ios-more"></ion-icon>\n	        	</button>\n	      	</ion-col>\n	    </ion-row>\n  	</ion-card>\n\n  	<ion-card class="bdra-5 d-purple ani-left-to-right">\n	    <ion-card-content>\n	    	<span class="text-grey-4 inline-block mgt-20 white fs-11 bdra-5 pd-5 uppercase">\n	    		<ion-icon name="quote" class="fs-20 mgr-5"></ion-icon>quote\n	    	</span>\n	      	<ion-card-title class="fs-22 text-white mgt-20 fw-600">Etiam rutrum iaculis nisi, eu faucibus arcu malesuada eu.</ion-card-title>\n	    </ion-card-content>\n\n	    <ion-row>\n	      	<ion-col col-3>\n	        	<button ion-button icon-left clear small class="text-white-2">\n	          		<ion-icon name="thumbs-up"></ion-icon>\n	          		<div>120</div>\n	        	</button>\n	      	</ion-col>\n	      	<ion-col col-3>\n	        	<button ion-button icon-left clear small class="text-white-2">\n	          		<ion-icon name="text"></ion-icon>\n	          		<div>40</div>\n	        	</button>\n	      	</ion-col>\n	    </ion-row>\n\n	    <ion-item class="mgt-30 transparent pdb-15">\n	      	<ion-avatar item-start class="mgt-6 mgb-6">\n	        	<img src="assets/img/avt1.jpg">\n	      	</ion-avatar>\n	      	<h2 class="fs-14 text-white">Marty McFly</h2>\n	      	<p class="fs-10 text-grey-1">November 5, 1955</p>\n	    </ion-item>\n  	</ion-card>\n	\n\n\n   	<ion-card padding class="bdra-5 ani-left-to-right">\n		<p class="uppercase fs-13 mgb-15 spacing-1 fw-600">Nov 27, 2017</p>\n\n	    <img src="assets/img/bg20.jpg"/>\n		\n		<ion-card-content>\n		  	<p class="">Travel</p>\n	      	<ion-card-title class="fs-18">Largelyresponsible for bringing the music to a mass audience.</ion-card-title>\n	    </ion-card-content>\n\n	    <ion-list>\n	    	<ion-item>\n		      	<ion-thumbnail item-start>\n		        	<img src="assets/img/demo1.jpg">\n		      	</ion-thumbnail>\n		      	<h2>My Neighbor Totoro</h2>\n		      	<p>Hayao Miyazaki • 1988</p>\n		      	<button ion-button clear item-end>View</button>\n		    </ion-item>\n		    <ion-item>\n		      	<ion-thumbnail item-start>\n		        	<img src="assets/img/demo2.jpg">\n		      	</ion-thumbnail>\n		      	<h2>Raiders of the Lost Ark</h2>\n		      	<p>Steven Spielberg • 1981</p>\n		      	<button ion-button clear item-end>View</button>\n		    </ion-item>\n		    <ion-item>\n		      	<ion-thumbnail item-start>\n		        	<img src="assets/img/demo3.jpg">\n		      	</ion-thumbnail>\n		      	<h2>Ghostbusters</h2>\n		      	<p>Ivan Reitman • 1984</p>\n		      	<button ion-button clear item-end>View</button>\n		    </ion-item>\n	    </ion-list>\n  	\n	  	<ion-row>\n	    	<button ion-button block clear round small class="text-pink stroke-pink uppercase">More</button>\n	    </ion-row>\n  	</ion-card>\n\n  	<ion-card class="bdra-5 ani-left-to-right">\n	  	<ion-item class="no-background">\n	      	<ion-avatar item-start class="mgt-6 mgb-6">\n	        	<img src="assets/img/avt2.jpg">\n	      	</ion-avatar>\n	      	<h2 class="fs-14">Marty McFly</h2>\n	      	<p class="fs-10 text-grey-4">November 5, 1955</p>\n	    </ion-item>\n\n	    <img src="assets/img/bg14.jpg"/>\n	    \n	    <ion-card-content>\n	      	<ion-card-title class="fs-18">Largelyresponsible for bringing the music to a mass audience.</ion-card-title>\n	    </ion-card-content>\n  	</ion-card>\n\n\n  	<ion-card class="bdra-5 lama-vs-coban text-center ani-left-to-right">\n	    <ion-card-content class="pd-30">\n	      	<ion-card-title class="fs-22 fw-600 text-white spacing-1">Largelyresponsible for bringing the music to a mass audience.</ion-card-title>\n	      	<p class="text-white">The most popular industrial group ever, and largelyresponsible for bringing the music to a mass audience.</p>\n	      	<button ion-button outline round class="text-white stroke-1 stroke-white uppercase spacing-1 mgt-20">Read more</button>\n	    </ion-card-content>\n  	</ion-card>\n\n\n  	<ion-card class="bdra-5 ani-left-to-right">\n	    <img src="assets/img/bg18.jpg"/>\n	    \n	    <ion-card-content>\n	      	<ion-card-title class="fs-18 fw-600">Nine Inch Nails Live. Are you telling me that you built a time machine...</ion-card-title>\n	      	<p>The most popular industrial group ever, and largelyresponsible for bringing the music to a mass audience.</p>\n	    </ion-card-content>\n\n	    <ion-row>\n	      	<ion-col>\n	        	<button ion-button icon-left clear small class="text-black">\n	          		<ion-icon name="thumbs-up"></ion-icon>\n	          		<div>120</div>\n	        	</button>\n	      	</ion-col>\n\n	      	<ion-col center text-center>\n		        <button ion-button icon-left clear small class="text-black">\n		          	<ion-icon name="text"></ion-icon>\n		          	<div>40</div>\n		        </button>\n	      	</ion-col>\n	      \n	      	<ion-col right text-right>\n	        	<button ion-button icon-left clear small class="text-black fs-20">\n	          		<ion-icon name="ios-more"></ion-icon>\n	        	</button>\n	      	</ion-col>\n	    </ion-row>\n  	</ion-card>\n\n  	<ion-card class="card-bg-pst bdra-5 text-right ani-left-to-right">\n    	<img src="assets/img/bg4.jpg"/>\n    	<div class="wrapper-pst pull-right pd-20 pdr-30 pdl-50">\n    		<ion-card-title class="text-white fs-18 spacing-1 pdl-50">Nam maximus molestie mi.</ion-card-title>\n    		<p class="card-subtitle text-grey-2 pdl-50">Phasellus rutrum iaculis arcu, at sodales tellus mattis vel.</p>\n    	</div>\n  	</ion-card>\n\n	<ion-card padding class="bdra-5 text-center ani-left-to-right">\n		<span class="uppercase fs-12 spacing-1 fw-600 text-white mgt-10 mgb-20 orange inline-block pd-10">Nov 27, 2017</span>\n\n		<ion-card-content>\n	      	<ion-card-title class="fs-18">Largelyresponsible for bringing the music to a mass audience.</ion-card-title>\n	    	<ion-list class="lst-no-background">\n			    <ion-item>\n			      	<ion-avatar item-start>\n			        	<img src="assets/img/avt1.jpg">\n			      	</ion-avatar>\n			      	<h2 class="fw-600 fs-13">Woody</h2>\n			      	<p>Coder</p>\n			    </ion-item>\n			</ion-list>\n			<div class="divider white-2"></div>\n	    </ion-card-content>\n		\n\n		<ion-card-content>\n	      	<ion-card-title class="fs-18">Largelyresponsible for bringing the music to a mass audience.</ion-card-title>\n			<ion-list class="lst-no-background">\n			    <ion-item>\n			      	<ion-avatar item-start>\n			        	<img src="assets/img/avt2.jpg">\n			      	</ion-avatar>\n			      	<h2 class="fw-600 fs-13">Buzz Lightyear</h2>\n			      	<p>Designer</p>\n			    </ion-item>\n			</ion-list>\n			<div class="divider white-2"></div>\n		</ion-card-content>\n\n		<ion-card-content>\n	      	<ion-card-title class="fs-18">Largelyresponsible for bringing the music to a mass audience.</ion-card-title>\n			<ion-list class="lst-no-background">\n			    <ion-item>\n			      	<ion-avatar item-start>\n			        	<img src="assets/img/avt3.jpg">\n			      	</ion-avatar>\n			      	<h2 class="fw-600 fs-13">Jessie</h2>\n			      	<p>Developer</p>\n			    </ion-item>\n			</ion-list>\n		</ion-card-content>\n  	\n	    <button ion-button round class="text-pink grey-1 uppercase mgb-15 fs-13">All Comment</button>\n  	</ion-card>\n\n  	<ion-card class="bdra-5 black ani-left-to-right">\n  		<ion-card-content>\n	      	<ion-card-title class="fs-18 fw-600 text-white spacing-1">Nine Inch Nails Live. Are you telling me that you built a time machine...</ion-card-title>\n    		<img src="assets/img/bg15.jpg"/>\n	      	<p class="text-white mgt-15">The most popular industrial group ever, and largelyresponsible for bringing the music to a mass audience.</p>\n	    </ion-card-content>\n\n    	<ion-row>\n		    <ion-col>\n		        <button ion-button icon-left clear small class="text-white">\n		          	<ion-icon name="thumbs-up"></ion-icon>\n		          	<div>120</div>\n		        </button>\n		    </ion-col>\n\n		    <ion-col center text-center>\n		        <button ion-button icon-left clear small class="text-white">\n		          	<ion-icon name="text"></ion-icon>\n		          	<div>40</div>\n		        </button>\n		    </ion-col>\n      \n      		<ion-col right text-right>\n        		<button ion-button icon-left clear small class="text-white fs-20">\n          			<ion-icon name="ios-more"></ion-icon>\n        		</button>\n      		</ion-col>\n    	</ion-row>\n  	</ion-card>\n\n  	<ion-card class="bdra-5 ani-left-to-right">\n    	<img src="assets/img/bg11.jpg"/>\n    \n	    <ion-card-content>\n	      	<ion-card-title class="fs-18 fw-600">Nine Inch Nails Live. Are you telling me that you built a time machine...</ion-card-title>\n	      	<p>The most popular industrial group ever, and largelyresponsible for bringing the music to a mass audience.</p>\n	    </ion-card-content>\n\n    	<ion-row>\n		    <ion-col>\n		        <button ion-button icon-left clear small class="text-black">\n		          	<ion-icon name="thumbs-up"></ion-icon>\n		          	<div>120</div>\n		        </button>\n		    </ion-col>\n\n		    <ion-col center text-center>\n		        <button ion-button icon-left clear small class="text-black">\n		          	<ion-icon name="text"></ion-icon>\n		          	<div>40</div>\n		        </button>\n		    </ion-col>\n      \n      		<ion-col right text-right>\n        		<button ion-button icon-left clear small class="text-black fs-20">\n          			<ion-icon name="ios-more"></ion-icon>\n        		</button>\n      		</ion-col>\n    	</ion-row>\n  	</ion-card>\n</div>\n'/*ion-inline-end:"/Users/andrewhein/Desktop/WestmorelandWorking/src/components/blog/blog-basic/blog-basic.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], BlogBasicComponent);
    return BlogBasicComponent;
}());

//# sourceMappingURL=blog-basic.js.map

/***/ }),

/***/ 706:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogTimelineModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__blog_timeline__ = __webpack_require__(707);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BlogTimelineModule = (function () {
    function BlogTimelineModule() {
    }
    BlogTimelineModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__blog_timeline__["a" /* BlogTimelineComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__blog_timeline__["a" /* BlogTimelineComponent */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__blog_timeline__["a" /* BlogTimelineComponent */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], BlogTimelineModule);
    return BlogTimelineModule;
}());

//# sourceMappingURL=blog-timeline.module.js.map

/***/ }),

/***/ 707:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogTimelineComponent; });
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
 * Generated class for the BlogTimelineComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var BlogTimelineComponent = (function () {
    function BlogTimelineComponent(navCtrl, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.newfeed = "from_you";
        this.onCallbackEvent = function (event) {
            if (_this.events[event]) {
                _this.events[event]();
            }
        };
        console.log('ionViewWillEnter Blog Timeline');
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], BlogTimelineComponent.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], BlogTimelineComponent.prototype, "events", void 0);
    BlogTimelineComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'blog-timeline',template:/*ion-inline-start:"/Users/andrewhein/Desktop/WestmorelandWorking/src/components/blog/blog-timeline/blog-timeline.html"*/'\n\n<div class="white-1">\n  \n  <ion-toolbar no-border-top class="ani-top-to-bottom">\n    <ion-segment [(ngModel)]="newfeed" class="segment-btn-group text-black stroke-black stroke-2 bdra-5">\n      <ion-segment-button class="fs-13 black" value="from_you">\n        {{data.txtFromYou}}\n      </ion-segment-button>\n      <ion-segment-button class="fs-13 black" value="from_day">\n        {{data.txtFromDay}}\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n\n  <div [ngSwitch]="newfeed" class="ani-bottom-to-top">\n    <ion-card *ngSwitchCase="\'from_you\'" class="bdra-5 pdt-30">\n      \n      <ion-card-title class="uppercase fw-600 mgb-20 ani-bottom-to-top" padding>Nov 29, 2017</ion-card-title>\n\n      <ion-row class="wrapper-item-line ani-bottom-to-top">\n        <div class="left-time text-right" col-2><b>8:00 </b><b>am</b></div>\n        <div class="line-time text-pink text-center" col-1>\n          <ion-icon name="md-radio-button-off"></ion-icon>\n          <span class="inline-block"></span>\n        </div>\n        <div class="right-content mgb-30" col-9>\n          <p class="uppercase fs-13 mgb-15 spacing-1 fw-600 text-pink">Nov 27, 2017</p>\n\n          <h3 class="fs-16 fw-600 mgb-10">Folly words widow one downs few age every seven.</h3>\n\n          <ion-list class="lst-no-background">\n            <ion-item>\n              <ion-avatar item-start>\n                <img src="assets/img/avt1.jpg">\n              </ion-avatar>\n              <h2>Woody</h2>\n              <p>This town ain\'t big enough for the two of us!</p>\n            </ion-item>\n          </ion-list>\n          <button ion-button round small icon-left outline class="">Call</button>\n          <button ion-button round small icon-left outline class="">SMS</button>\n        </div>\n      </ion-row>\n\n\n\n      <ion-row class="wrapper-item-line ani-bottom-to-top">\n        <div class="left-time text-right" col-2><b>9:00 </b><b>pm</b></div>\n        <div class="line-time text-indigo text-center" col-1>\n          <ion-icon name="md-radio-button-off"></ion-icon>\n          <span class="inline-block"></span>\n        </div>\n        <div class="right-content mgb-30" col-9>\n          <p class="uppercase fs-13 mgb-15 spacing-1 fw-600 text-indigo">Nov 23, 2017</p>\n\n          <h3 class="fs-16 fw-600 mgt-0 mgb-10">Nine Inch Nails Live</h3>\n          <img src="assets/img/bg6.jpg">\n          <p class="text-grey-4 mgt-10">Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.</p>\n        </div>\n      </ion-row>\n\n\n\n      <ion-row class="wrapper-item-line ani-bottom-to-top">\n        <div class="left-time text-right" col-2><b>11:35 </b><b>am</b></div>\n        <div class="line-time text-green text-center" col-1>\n          <ion-icon name="md-radio-button-off"></ion-icon>\n          <span class="inline-block"></span>\n        </div>\n        <div class="right-content mgb-30" col-9>\n          <p class="uppercase fs-13 mgb-15 spacing-1 fw-600 text-green">Nov 21, 2017</p>\n\n          <img src="assets/img/bg17.jpg"/>\n        \n          <h3 class="fs-16 fw-600 mgt-10">Nine Inch Nails Live. Are you telling me that you built a time machine...</h3>\n          <p class="text-grey-4 mgt-10">The most popular industrial group ever, and largelyresponsible for bringing the music to a mass audience.</p>\n\n          <ion-row>\n            <ion-col col-4 text-left>\n              <button ion-button icon-left clear small class="text-black pdl-0">\n                <ion-icon name="thumbs-up"></ion-icon>\n                <div>120</div>\n              </button>\n            </ion-col>\n            <ion-col col-4 center text-center>\n              <button ion-button icon-left clear small class="text-black">\n                <ion-icon name="text"></ion-icon>\n                <div>40</div>\n              </button>\n            </ion-col>\n            <ion-col col-4 right text-right>\n              <button ion-button icon-left clear small class="text-black fs-20">\n                <ion-icon name="ios-more"></ion-icon>\n              </button>\n            </ion-col>\n          </ion-row>\n        </div>\n      </ion-row>\n\n\n\n      <ion-row class="wrapper-item-line ani-bottom-to-top">\n        <div class="left-time text-right" col-2><b>5:00 </b><b>pm</b></div>\n        <div class="line-time text-blue text-center" col-1>\n          <ion-icon name="md-radio-button-off"></ion-icon>\n          <span class="inline-block"></span>\n        </div>\n        <div class="right-content mgb-30" col-9>\n          <p class="uppercase fs-13 mgb-15 spacing-1 fw-600 text-blue">Nov 19, 2017</p>\n\n          <span class="text-white-1 inline-block indigo fs-11 bdra-5 pd-5 uppercase">\n            <ion-icon name="quote" class="fs-20 mgr-5"></ion-icon>quote\n          </span>\n\n          <h3 class="fs-22 mgt-20 fw-600">Etiam rutrum iaculis nisi, eu faucibus arcu malesuada eu.</h3>\n\n          <ion-row>\n              <ion-col col-3>\n                <button ion-button icon-left clear small class="pdl-0">\n                    <ion-icon name="thumbs-up"></ion-icon>\n                    <div>120</div>\n                </button>\n              </ion-col>\n              <ion-col col-3>\n                <button ion-button icon-left clear small>\n                    <ion-icon name="text"></ion-icon>\n                    <div>40</div>\n                </button>\n              </ion-col>\n          </ion-row>\n\n          <ion-item class="mgt-30 transparent pdb-15 pdl-0">\n              <ion-avatar item-start class="mgt-6 mgb-6">\n                <img src="assets/img/avt1.jpg">\n              </ion-avatar>\n              <h2 class="fs-14">Marty McFly</h2>\n              <p class="fs-10 text-grey-3">November 5, 1955</p>\n          </ion-item>\n        </div>\n      </ion-row>\n\n\n      \n      <ion-row class="wrapper-item-line ani-bottom-to-top">\n        <div class="left-time text-right" col-2><b>9:15 </b><b>am</b></div>\n        <div class="line-time text-teal text-center" col-1>\n          <ion-icon name="md-radio-button-off"></ion-icon>\n          <span class="inline-block"></span>\n        </div>\n        <div class="right-content mgb-30" col-9>\n          <p class="uppercase fs-13 mgb-15 spacing-1 fw-600 text-teal">Nov 17, 2017</p>\n\n          <img src="assets/img/bg20.jpg"/>\n        \n          <p class="mgt-10">Travel</p>\n          <h3 class="fs-18 mgb-15">Largelyresponsible for bringing the music to a mass audience.</h3>\n\n          <ion-list>\n            <ion-item>\n                <ion-thumbnail item-start>\n                  <img src="assets/img/demo1.jpg">\n                </ion-thumbnail>\n                <h2>My Neighbor Totoro</h2>\n                <p>Hayao Miyazaki • 1988</p>\n                <button ion-button clear item-end>View</button>\n            </ion-item>\n            <ion-item>\n                <ion-thumbnail item-start>\n                  <img src="assets/img/demo2.jpg">\n                </ion-thumbnail>\n                <h2>Raiders of the Lost Ark</h2>\n                <p>Steven Spielberg • 1981</p>\n                <button ion-button clear item-end>View</button>\n            </ion-item>\n            <ion-item>\n                <ion-thumbnail item-start>\n                  <img src="assets/img/demo3.jpg">\n                </ion-thumbnail>\n                <h2>Ghostbusters</h2>\n                <p>Ivan Reitman • 1984</p>\n                <button ion-button clear item-end>View</button>\n            </ion-item>\n          </ion-list>\n        \n          <ion-row>\n            <button ion-button block clear round small class="text-pink stroke-pink uppercase">More</button>\n          </ion-row>\n        </div>\n      </ion-row>\n      \n\n\n      <ion-row class="wrapper-item-line ani-bottom-to-top">\n        <div class="left-time text-right" col-2><b>3:00 </b><b>pm</b></div>\n        <div class="line-time text-lime text-center" col-1>\n          <ion-icon name="md-radio-button-off"></ion-icon>\n          <span class="inline-block"></span>\n        </div>\n        <div class="right-content mgb-30" col-9>\n          <p class="uppercase fs-13 mgb-15 spacing-1 fw-600 text-lime">Nov 07, 2017</p>\n\n          <ion-item class="no-background pdl-0">\n            <ion-avatar item-start class="mgt-6 mgb-6">\n              <img src="assets/img/avt2.jpg">\n            </ion-avatar>\n            <h2 class="fs-14">Marty McFly</h2>\n            <p class="fs-10 text-grey-4">November 5, 1955</p>\n          </ion-item>\n\n          <img src="assets/img/bg14.jpg"/>\n        \n          <h3 class="fs-18 mgt-10">Largelyresponsible for bringing the music to a mass audience.</h3>\n        </div>\n      </ion-row>\n\n\n\n\n      <ion-row class="wrapper-item-line ani-bottom-to-top">\n        <div class="left-time text-right" col-2><b>7:50 </b><b>am</b></div>\n        <div class="line-time text-green text-center" col-1>\n          <ion-icon name="md-radio-button-off"></ion-icon>\n          <span class="inline-block"></span>\n        </div>\n        <div class="right-content mgb-30" col-9>\n          <p class="uppercase fs-13 mgb-15 spacing-1 fw-600 text-green">Nov 05, 2017</p>\n\n          <div class="pd-30 lama-vs-coban text-center">\n            <h3 class="fs-18 fw-600 text-white spacing-1 mgb-15">Largelyresponsible for bringing the music to a mass audience.</h3>\n            <p class="text-white fs-13">The most popular industrial group ever, and largelyresponsible for bringing the music to a mass audience.</p>\n            <button ion-button outline small round class="text-white stroke-1 stroke-white uppercase spacing-1 mgt-20">Read more</button>\n          </div>\n        </div>\n      </ion-row>\n\n\n\n      <ion-row class="wrapper-item-line ani-bottom-to-top">\n        <div class="left-time text-right" col-2><b>6:09 </b><b>am</b></div>\n        <div class="line-time text-center" col-1>\n          <ion-icon name="md-radio-button-off"></ion-icon>\n          <span class="inline-block"></span>\n        </div>\n        <div class="right-content mgb-30" col-9>\n          <p class="uppercase fs-13 mgb-15 spacing-1 fw-600">Nov 03, 2017</p>\n          \n          <div class="card-bg-pst text-right">\n            <img src="assets/img/bg4.jpg"/>\n            <div class="wrapper-pst pull-right pd-15">\n              <h3 class="text-white fs-15 spacing-1 pdl-20">Nam maximus molestie mi.</h3>\n              <p class="card-subtitle fs-12 text-grey-2 pdl-20">Phasellus rutrum iaculis arcu, at sodales mattis vel.</p>\n            </div>\n          </div>\n        </div>\n      </ion-row>\n\n\n\n      <ion-row class="wrapper-item-line ani-bottom-to-top">\n        <div class="left-time text-right" col-2><b>10:55 </b><b>am</b></div>\n        <div class="line-time text-d-orange text-center" col-1>\n          <ion-icon name="md-radio-button-off"></ion-icon>\n          <span class="inline-block"></span>\n        </div>\n        <div class="right-content mgb-30" col-9>\n          <p class="uppercase fs-13 mgb-15 spacing-1 fw-600 text-d-orange">Nov 01, 2017</p>\n\n          <div>\n            <h3 class="fs-18 mgb-10 mgt-30">Largelyresponsible for bringing the music to a mass audience.</h3>\n            <ion-list class="lst-no-background">\n              <ion-item>\n                <ion-avatar item-start>\n                  <img src="assets/img/avt1.jpg">\n                </ion-avatar>\n                <h2 class="fw-600 fs-13">Woody</h2>\n                <p>Coder</p>\n              </ion-item>\n            </ion-list>\n            <div class="divider white-2"></div>\n          </div>\n\n          <div>\n            <h3 class="fs-18 mgb-10 mgt-30">Largelyresponsible for bringing the music to a mass audience.</h3>\n            <ion-list class="lst-no-background">\n              <ion-item>\n                <ion-avatar item-start>\n                  <img src="assets/img/avt2.jpg">\n                </ion-avatar>\n                <h2 class="fw-600 fs-13">Buzz Lightyear</h2>\n                <p>Designer</p>\n              </ion-item>\n            </ion-list>\n            <div class="divider white-2"></div>\n          </div>\n\n          <div>\n            <h3 class="fs-18 mgb-10 mgt-30">Largelyresponsible for bringing the music to a mass audience.</h3>\n            <ion-list class="lst-no-background">\n                <ion-item>\n                    <ion-avatar item-start>\n                      <img src="assets/img/avt3.jpg">\n                    </ion-avatar>\n                    <h2 class="fw-600 fs-13">Jessie</h2>\n                    <p>Developer</p>\n                </ion-item>\n            </ion-list>\n          </div>\n\n          <div class="text-center">\n            <button ion-button round class="text-pink grey-1 uppercase mgb-15 fs-13">All Comment</button>\n          </div>\n        </div>\n      </ion-row>\n\n\n      <ion-row class="wrapper-item-line ani-bottom-to-top">\n        <div class="left-time text-right" col-2><b>3:02 </b><b>pm</b></div>\n        <div class="line-time text-grey-5 text-center" col-1>\n          <ion-icon name="md-radio-button-off"></ion-icon>\n          <span class="inline-block"></span>\n        </div>\n        <div class="right-content mgb-30" col-9>\n          <p class="uppercase fs-13 mgb-15 spacing-1 fw-600 text-grey-5">Oct 29, 2017</p>\n          \n          <div class="black" padding>\n            <h3 class="fs-18 fw-600 text-white spacing-1 mgb-15">Nine Inch Nails Live. Are you telling me that you built a time machine...</h3>\n            <img src="assets/img/bg15.jpg"/>\n            <p class="text-white mgt-15">The most popular industrial group ever, and largelyresponsible for bringing the music to a mass audience.</p>\n\n            <ion-row>\n              <ion-col col-4>\n                  <button ion-button icon-left clear small class="text-white-2 pdl-0">\n                      <ion-icon name="thumbs-up"></ion-icon>\n                      <div>120</div>\n                  </button>\n              </ion-col>\n              <ion-col col-4 center text-center>\n                  <button ion-button icon-left clear small class="text-white-2">\n                      <ion-icon name="text"></ion-icon>\n                      <div>40</div>\n                  </button>\n              </ion-col>\n              <ion-col col-4 right text-right>\n                <button ion-button icon-left clear small class="text-white-2 fs-20">\n                    <ion-icon name="ios-more"></ion-icon>\n                </button>\n              </ion-col>\n            </ion-row>\n          </div>\n        </div>\n      </ion-row>\n\n    </ion-card>\n\n\n\n\n\n\n\n\n\n\n    <div *ngSwitchCase="\'from_day\'" class="">\n\n      <ion-card class="bdra-5 stroke-left stroke-2 stroke-pink ani-bottom-to-top">\n        <ion-row class="wrapper-item-line">\n          <div class="left-time-flex text-center stroke-right stroke-1 stroke-grey-1 pdt-20 pdb-20" col-3>\n            <p class="day fs-24 fw-600 stroke-1 stroke stroke-pink text-pink">29</p>\n            <p class="time">\n              <span class="fw-400 block text-grey-3 uppercase">Nov</span>\n              <b class="fs-12">11:05 am</b>\n            </p>\n          </div>\n\n          <div class="right-content pd-15 pdr-10" col-9>\n            <ion-list class="lst-no-background">\n              <ion-item class="pdl-0">\n                <ion-avatar item-start>\n                  <img src="assets/img/avt1.jpg">\n                </ion-avatar>\n                <h2 class="fs-13 fw-600">Woody</h2>\n                <p class="fs-12">Designer</p>\n              </ion-item>\n            </ion-list>\n            <h3 class="fs-16 fw-600 mgb-10">Folly words widow one downs few age every seven.</h3>\n            <button ion-button round small icon-left outline class="">Call</button>\n            <button ion-button round small icon-left outline class="">SMS</button>\n          </div>\n        </ion-row>\n      </ion-card>\n\n\n      <ion-card class="bdra-5 stroke-left stroke-2 stroke-d-purple ani-bottom-to-top">\n        <ion-row class="wrapper-item-line">\n          <div class="left-time-flex text-center stroke-right stroke-1 stroke-grey-1 pdt-20 pdb-20" col-3>\n            <p class="day fs-24 fw-600 stroke-1 stroke stroke-d-purple text-d-purple">27</p>\n            <p class="time">\n              <span class="fw-400 block text-grey-3 uppercase">Nov</span>\n              <b class="fs-12">9:01 pm</b>\n            </p>\n          </div>\n\n          <div class="right-content pd-15 pdr-10" col-9>\n            <ion-card-title class="fs-14 fw-600">Nine Inch Nails Live</ion-card-title>\n            <p class="fs-12">The most popular industrial group ever, and largelyresponsible.</p>\n\n            <ion-row>\n                <ion-col col-4>\n                  <button ion-button icon-left clear small class="text-black pdl-0">\n                      <ion-icon name="thumbs-up"></ion-icon>\n                      <div>120</div>\n                  </button>\n                </ion-col>\n                <ion-col col-4 center text-center>\n                  <button ion-button icon-left clear small class="text-black">\n                      <ion-icon name="text"></ion-icon>\n                      <div>40</div>\n                  </button>\n                </ion-col>\n                <ion-col col-4 right text-right>\n                  <button ion-button icon-left clear small class="text-black fs-20">\n                      <ion-icon name="ios-more"></ion-icon>\n                  </button>\n                </ion-col>\n            </ion-row>\n          </div>\n        </ion-row>\n      </ion-card>\n\n\n      <ion-card class="bdra-5 stroke-left stroke-2 stroke-indigo ani-bottom-to-top">\n        <ion-row class="wrapper-item-line">\n          <div class="left-time-flex text-center stroke-right stroke-1 stroke-grey-1 pdt-20 pdb-20" col-3>\n            <p class="day fs-24 fw-600 stroke-1 stroke stroke-indigo text-indigo">25</p>\n            <p class="time">\n              <span class="fw-400 block text-grey-3 uppercase">Nov</span>\n              <b class="fs-12">6:30 pm</b>\n            </p>\n          </div>\n\n          <div class="right-content pd-15 pdr-10" col-9>\n            <span class="text-white-2 inline-block mgt-10 indigo fs-11 bdra-5 pd-5 uppercase">\n              <ion-icon name="quote" class="fs-20 mgr-5"></ion-icon>quote\n            </span>\n            <ion-card-title class="fs-22 fw-600">Etiam rutrum iaculis nisi, eu faucibus arcu malesuada eu.</ion-card-title>\n\n            <ion-row>\n                <ion-col col-4>\n                  <button ion-button icon-left clear small class="text-grey-3 pdl-0">\n                      <ion-icon name="thumbs-up"></ion-icon>\n                      <div>120</div>\n                  </button>\n                </ion-col>\n                <ion-col col-4>\n                  <button ion-button icon-left clear small class="text-grey-3">\n                      <ion-icon name="text"></ion-icon>\n                      <div>40</div>\n                  </button>\n                </ion-col>\n            </ion-row>\n\n            <ion-item class="mgt-30 transparent pdb-10">\n                <ion-avatar item-start class="mgt-6 mgb-6">\n                  <img src="assets/img/avt1.jpg">\n                </ion-avatar>\n                <h2 class="fs-14">Marty McFly</h2>\n                <p class="fs-10 text-grey-3">November 5, 1955</p>\n            </ion-item>\n          </div>\n        </ion-row>\n      </ion-card>\n\n\n      <ion-card class="bdra-5 stroke-left stroke-2 stroke-teal ani-bottom-to-top">\n        <ion-row class="wrapper-item-line">\n          <div class="left-time-flex text-center stroke-right stroke-1 stroke-grey-1 pdt-20 pdb-20" col-3>\n            <p class="day fs-24 fw-600 stroke-1 stroke stroke-teal text-teal">23</p>\n            <p class="time">\n              <span class="fw-400 block text-grey-3 uppercase">Nov</span>\n              <b class="fs-12">2:20 am</b>\n            </p>\n          </div>\n\n          <div class="right-content pd-15 pdr-10" col-9>\n            <img src="assets/img/bg20.jpg"/>\n          \n            <p class="mgt-5">Travel</p>\n            <ion-card-title class="fs-18">Largelyresponsible for bringing the music to a mass audience.</ion-card-title>\n\n            <ion-list>\n              <ion-item>\n                  <ion-thumbnail item-start>\n                    <img src="assets/img/demo1.jpg">\n                  </ion-thumbnail>\n                  <h2>My Neighbor Totoro</h2>\n                  <p>Hayao Miyazaki • 1988</p>\n              </ion-item>\n              <ion-item>\n                  <ion-thumbnail item-start>\n                    <img src="assets/img/demo2.jpg">\n                  </ion-thumbnail>\n                  <h2>Raiders of the Lost Ark</h2>\n                  <p>Steven Spielberg • 1981</p>\n              </ion-item>\n              <ion-item>\n                  <ion-thumbnail item-start>\n                    <img src="assets/img/demo3.jpg">\n                  </ion-thumbnail>\n                  <h2>Ghostbusters</h2>\n                  <p>Ivan Reitman • 1984</p>\n              </ion-item>\n            </ion-list>\n          \n            <ion-row>\n              <button ion-button block clear round small class="text-pink stroke-pink uppercase">More</button>\n            </ion-row>\n          </div>\n        </ion-row>\n      </ion-card>\n\n\n      <ion-card class="bdra-5 stroke-left stroke-2 stroke-pink ani-bottom-to-top">\n        <ion-row class="wrapper-item-line">\n          <div class="left-time-flex text-center stroke-right stroke-1 stroke-grey-1 pdt-20 pdb-20" col-3>\n            <p class="day fs-24 fw-600 stroke-1 stroke stroke-pink text-pink">21</p>\n            <p class="time">\n              <span class="fw-400 block text-grey-3 uppercase">Nov</span>\n              <b class="fs-12">8:25 pm</b>\n            </p>\n          </div>\n\n          <div class="right-content pd-15 pdr-10" col-9>\n            <ion-card-title class="fs-18 fw-600">Nine Inch Nails Live</ion-card-title>\n            <p class="mgb-20">The most popular industrial group ever, and largelyresponsible.</p>\n          </div>\n        </ion-row>\n      </ion-card>\n\n\n\n      <ion-card class="bdra-5 stroke-left stroke-2 stroke-green ani-bottom-to-top">\n        <ion-row class="wrapper-item-line">\n          <div class="left-time-flex text-center stroke-right stroke-1 stroke-grey-1 pdt-20 pdb-20" col-3>\n            <p class="day fs-24 fw-600 stroke-1 stroke stroke-green text-green">19</p>\n            <p class="time">\n              <span class="fw-400 block text-grey-3 uppercase">Nov</span>\n              <b class="fs-12">7:09 am</b>\n            </p>\n          </div>\n\n          <div class="right-content pd-15 pdr-10" col-9>\n            <ion-card-title class="fs-22 fw-600 spacing-1">Largelyresponsible for bringing the music to a mass audience.</ion-card-title>\n            <p class="">The most popular industrial group ever, and largelyresponsible for bringing the music to a mass audience.</p>\n            <button ion-button outline small round class="text-green stroke-1 stroke-green uppercase spacing-1 mgt-20 mgb-10">Read more</button>\n          </div>\n        </ion-row>\n      </ion-card>\n\n\n\n\n      <ion-card class="bdra-5 stroke-left stroke-2 stroke-black ani-bottom-to-top">\n        <ion-row class="wrapper-item-line">\n          <div class="left-time-flex text-center stroke-right stroke-1 stroke-grey-1 pdt-20 pdb-20" col-3>\n            <p class="day fs-24 fw-600 stroke-1 stroke stroke-black text-black">9</p>\n            <p class="time">\n              <span class="fw-400 block text-grey-3 uppercase">Nov</span>\n              <b class="fs-12">1:33 am</b>\n            </p>\n          </div>\n\n          <div class="right-content pd-15 pdr-10" col-9>\n            <img src="assets/img/bg4.jpg"/>\n            <ion-card-title class="fs-18 spacing-1">Nam maximus molestie mi.</ion-card-title>\n            <p class="card-subtitle text-grey-3">Phasellus rutrum iaculis arcu, at sodales tellus mattis vel.</p>\n          </div>\n        </ion-row>\n      </ion-card>\n\n\n\n\n      <ion-card class="bdra-5 stroke-left stroke-2 stroke-blue ani-bottom-to-top">\n        <ion-row class="wrapper-item-line">\n          <div class="left-time-flex text-center stroke-right stroke-1 stroke-grey-1 pdt-20 pdb-20" col-3>\n            <p class="day fs-24 fw-600 stroke-1 stroke stroke-blue text-blue">5</p>\n            <p class="time">\n              <span class="fw-400 block text-grey-3 uppercase">Nov</span>\n              <b class="fs-12">9:50 pm</b>\n            </p>\n          </div>\n\n          <div class="right-content pd-15 pdr-10" col-9>\n            <ion-card-content>\n              <ion-card-title class="fs-18">Largelyresponsible for bringing the music to a mass audience.</ion-card-title>\n              <ion-list class="lst-no-background">\n                <ion-item>\n                  <ion-avatar item-start>\n                    <img src="assets/img/avt1.jpg">\n                  </ion-avatar>\n                  <h2 class="fw-600 fs-13">Woody</h2>\n                  <p>Coder</p>\n                </ion-item>\n              </ion-list>\n              <div class="divider white-2"></div>\n            </ion-card-content>\n        \n\n            <ion-card-content>\n              <ion-card-title class="fs-18">Largelyresponsible for bringing the music to a mass audience.</ion-card-title>\n              <ion-list class="lst-no-background">\n                <ion-item>\n                  <ion-avatar item-start>\n                    <img src="assets/img/avt2.jpg">\n                  </ion-avatar>\n                  <h2 class="fw-600 fs-13">Buzz Lightyear</h2>\n                  <p>Designer</p>\n                </ion-item>\n              </ion-list>\n              <div class="divider white-2"></div>\n            </ion-card-content>\n\n            <ion-card-content>\n              <ion-card-title class="fs-18">Largelyresponsible for bringing the music to a mass audience.</ion-card-title>\n              <ion-list class="lst-no-background">\n                <ion-item>\n                  <ion-avatar item-start>\n                    <img src="assets/img/avt3.jpg">\n                  </ion-avatar>\n                  <h2 class="fw-600 fs-13">Jessie</h2>\n                  <p>Developer</p>\n                </ion-item>\n              </ion-list>\n            </ion-card-content>\n            \n            <div class="block text-center">\n              <button ion-button round class="text-pink grey-1 uppercase mgb-15 fs-13 mg-auto">All Comment</button>\n            </div>\n          </div>\n        </ion-row>\n      </ion-card>\n\n\n\n      <ion-card class="bdra-5 stroke-left stroke-2 stroke-d-orange ani-bottom-to-top">\n        <ion-row class="wrapper-item-line">\n          <div class="left-time-flex text-center stroke-right stroke-1 stroke-grey-1 pdt-20 pdb-20" col-3>\n            <p class="day fs-24 fw-600 stroke-1 stroke stroke-d-orange text-d-orange">3</p>\n            <p class="time">\n              <span class="fw-400 block text-grey-3 uppercase">Nov</span>\n              <b class="fs-12">5:03 am</b>\n            </p>\n          </div>\n\n          <div class="right-content pd-15 pdr-10" col-9>\n            <ion-card-title class="fs-18 fw-600 spacing-1">Largelyresponsible for bringing the music to a mass audience.</ion-card-title>\n            <p class="mgb-15">The most popular industrial group ever, and largelyresponsible.</p>\n          </div>\n        </ion-row>\n      </ion-card>\n\n\n    </div>\n  </div>\n</div>\n'/*ion-inline-end:"/Users/andrewhein/Desktop/WestmorelandWorking/src/components/blog/blog-timeline/blog-timeline.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
    ], BlogTimelineComponent);
    return BlogTimelineComponent;
}());

//# sourceMappingURL=blog-timeline.js.map

/***/ })

});
//# sourceMappingURL=7.js.map