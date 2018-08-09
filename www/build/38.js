webpackJsonp([38],{

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacebookCommentPageModule", function() { return FacebookCommentPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__facebook_comment__ = __webpack_require__(714);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FacebookCommentPageModule = (function () {
    function FacebookCommentPageModule() {
    }
    FacebookCommentPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__facebook_comment__["a" /* FacebookCommentPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__facebook_comment__["a" /* FacebookCommentPage */]),
            ],
        })
    ], FacebookCommentPageModule);
    return FacebookCommentPageModule;
}());

//# sourceMappingURL=facebook-comment.module.js.map

/***/ }),

/***/ 714:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacebookCommentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_facebook_facebook__ = __webpack_require__(260);
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
 * Generated class for the FacebookCommentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FacebookCommentPage = (function () {
    function FacebookCommentPage(navCtrl, navParams, facebookService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.facebookService = facebookService;
        this.next = null;
        this.spnState = 'show';
        this.item = this.navParams.get('item');
        this.list = new Array();
        this.loadMore();
    }
    FacebookCommentPage.prototype.loadMore = function (infiniteScroll) {
        var _this = this;
        if (infiniteScroll === void 0) { infiniteScroll = null; }
        this.facebookService.getComments(this.next, this.item).subscribe(function (data) {
            var tmpData = data.data;
            _this.next = data.paging.next;
            _this.list = _this.list.concat(tmpData);
            if (infiniteScroll) {
                infiniteScroll.complete();
            }
            if (_this.next == undefined) {
                if (infiniteScroll != null) {
                    infiniteScroll.enable(false);
                }
            }
            _this.spnState = 'hide';
        }, function (error) {
            console.log(error);
            if (infiniteScroll != null) {
                infiniteScroll.enable(false);
            }
            _this.spnState = 'hide';
        });
    };
    FacebookCommentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-facebook-comment',template:/*ion-inline-start:"D:\Visual Studio\Personal\Project-Watermellon\src\pages\ready-app\facebook\facebook-comment\facebook-comment.html"*/'<!--\n\n  Generated template for the FacebookCommentPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>facebook-comment</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n<ion-spinner class="indicator" [ngClass]="spnState"></ion-spinner>\n\n<ion-list>\n\n  <ion-item *ngFor="let item of list">\n\n    <ion-avatar item-start>\n\n<!--       <img src="http://graph.facebook.com/{{item.from.id}}/picture?type=square"> -->\n\n    </ion-avatar>\n\n<!--     <h2>{{item.from.name}}</h2> -->\n\n    <p>{{item.message}}</p>\n\n  </ion-item>\n\n</ion-list>\n\n  <ion-infinite-scroll (ionInfinite)="loadMore($event)">\n\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n\n  </ion-infinite-scroll>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Visual Studio\Personal\Project-Watermellon\src\pages\ready-app\facebook\facebook-comment\facebook-comment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_facebook_facebook__["a" /* FacebookService */]])
    ], FacebookCommentPage);
    return FacebookCommentPage;
}());

//# sourceMappingURL=facebook-comment.js.map

/***/ })

});
//# sourceMappingURL=38.js.map