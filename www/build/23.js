webpackJsonp([23],{

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordpressPostsPageModule", function() { return WordpressPostsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wordpress_posts__ = __webpack_require__(734);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WordpressPostsPageModule = (function () {
    function WordpressPostsPageModule() {
    }
    WordpressPostsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__wordpress_posts__["a" /* WordpressPostsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__wordpress_posts__["a" /* WordpressPostsPage */]),
            ],
        })
    ], WordpressPostsPageModule);
    return WordpressPostsPageModule;
}());

//# sourceMappingURL=wordpress-posts.module.js.map

/***/ }),

/***/ 734:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordpressPostsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_wordpress_wordpress__ = __webpack_require__(255);
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
 * Generated class for the WordpressPostsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WordpressPostsPage = (function () {
    function WordpressPostsPage(navCtrl, navParams, wpService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.wpService = wpService;
        this.data = new Array();
        this.events = {};
        this.page = 0;
        this.per_page = 5;
        this.spnState = 'show';
        this.categories_id = this.navParams.get('id');
    }
    WordpressPostsPage.prototype.loadMore = function (infiniteScroll) {
        var _this = this;
        if (infiniteScroll === void 0) { infiniteScroll = null; }
        this.page += 1;
        this.wpService.getPostsByCategories(this.page, this.per_page, this.categories_id).subscribe(function (data) {
            var _loop_1 = function () {
                var post = {
                    id: data[i].id,
                    title: data[i].title.rendered,
                    excerpt: data[i].excerpt.rendered,
                    link: data[i].link,
                    thumb: null,
                    isFavorite: false
                };
                _this.wpService.getMedia(data[i].featured_media).subscribe(function (media) {
                    post.thumb = media.source_url;
                });
                _this.wpService.isFavorite(data[i]).then(function (result) {
                    post.isFavorite = result;
                    _this.data.push(post);
                });
            };
            for (var i = 0; i < data.length; i++) {
                _loop_1();
            }
            ;
            console.log(_this.data);
            _this.spnState = 'hide';
            if (infiniteScroll) {
                infiniteScroll.complete();
            }
        }, function (error) {
            _this.spnState = 'hide';
            if (infiniteScroll != null) {
                infiniteScroll.enable(false);
            }
        });
    };
    WordpressPostsPage.prototype.ionViewDidLoad = function () {
        this.loadMore();
    };
    WordpressPostsPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        if (this.data.length != 0) {
            var _loop_2 = function (i) {
                this_1.wpService.isFavorite(this_1.data[i]).then(function (result) {
                    _this.data[i].isFavorite = result;
                });
            };
            var this_1 = this;
            for (var i = 0; i < this.data.length; i++) {
                _loop_2(i);
            }
        }
    };
    WordpressPostsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-wordpress-posts',template:/*ion-inline-start:"D:\Visual Studio\Personal\Project-Watermellon\src\pages\ready-app\wordpress\wordpress-posts\wordpress-posts.html"*/'<!--\n\n  Generated template for the WordpressPostsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Posts</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n <ion-spinner class="indicator" [ngClass]="spnState"></ion-spinner>\n\n <ion-card *ngFor="let item of data" class="bdra-5 card card-md">\n\n    <img *ngIf="item.thumb!=null" [src]="item.thumb" (click)="wpService.doReadMore(navCtrl,item)">\n\n    <ion-card-content class="card-content card-content-md" (click)="wpService.doReadMore(navCtrl,item)">\n\n      <ion-card-title class="fs-16 fw-600 card-title card-title-md" [innerHTML]="item.title"></ion-card-title>\n\n      <p  [innerHTML]="item.excerpt"></p>\n\n    </ion-card-content>\n\n\n\n    <ion-row class="row">\n\n      <ion-col>\n\n        <button (click)="wpService.doFavorite(item)" ion-button icon-left clear small class="text-grey-5 favorite">\n\n          <ion-icon  [name]="item.isFavorite == true ? \'heart\' : \'heart-outline\'"></ion-icon>\n\n        </button>\n\n      </ion-col>\n\n\n\n      <ion-col center text-center>\n\n         <button (click)="wpService.doShare(item)" ion-button icon-left clear small class="text-grey-5">\n\n             <ion-icon name="md-share"></ion-icon>\n\n        </button>\n\n      </ion-col>\n\n\n\n      <ion-col right text-right>\n\n        <button (click)="wpService.doOpen(item)" ion-button icon-left clear small class="text-grey-5">\n\n          <ion-icon name="md-open"></ion-icon>\n\n        </button>\n\n      </ion-col>\n\n      \n\n      <ion-col right text-right>\n\n        <button (click)="wpService.doReadMore(navCtrl,item)" ion-button icon-left clear small class="text-grey-5 fs-20">\n\n          <ion-icon name="ios-more"></ion-icon>\n\n        </button>\n\n      </ion-col>\n\n\n\n    </ion-row>\n\n  </ion-card>\n\n   <ion-infinite-scroll (ionInfinite)="loadMore($event)">\n\n     <ion-infinite-scroll-content></ion-infinite-scroll-content>\n\n   </ion-infinite-scroll>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Visual Studio\Personal\Project-Watermellon\src\pages\ready-app\wordpress\wordpress-posts\wordpress-posts.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_wordpress_wordpress__["a" /* WordpressService */]])
    ], WordpressPostsPage);
    return WordpressPostsPage;
}());

//# sourceMappingURL=wordpress-posts.js.map

/***/ })

});
//# sourceMappingURL=23.js.map