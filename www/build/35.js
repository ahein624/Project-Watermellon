webpackJsonp([35],{

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListChatGroupPageModule", function() { return ListChatGroupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_chat_group__ = __webpack_require__(713);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_chat_chat_list_group_chat_list_group_module__ = __webpack_require__(714);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ListChatGroupPageModule = (function () {
    function ListChatGroupPageModule() {
    }
    ListChatGroupPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__list_chat_group__["a" /* ListChatGroupPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__list_chat_group__["a" /* ListChatGroupPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_chat_chat_list_group_chat_list_group_module__["a" /* ChatListGroupModule */]
            ],
        })
    ], ListChatGroupPageModule);
    return ListChatGroupPageModule;
}());

//# sourceMappingURL=list-chat-group.module.js.map

/***/ }),

/***/ 713:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListChatGroupPage; });
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
 * Generated class for the ListChatGroupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListChatGroupPage = (function () {
    function ListChatGroupPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.events = {};
        this.data = {};
        this.data = {
            txtFromYou: 'Form You',
            txtFromDay: 'From Day',
        };
        this.events.openConversation = function (item) {
            var chatModal = modalCtrl.create('ChatConversationPage', { 'data': item });
            chatModal.present();
        };
    }
    ListChatGroupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListChatGroupPage');
    };
    ListChatGroupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-list-chat-group',template:/*ion-inline-start:"D:\Visual Studio\Personal\Project-Watermellon\src\pages\chat\list-chat-group\list-chat-group.html"*/'<ion-header>\n\n  <ion-toolbar class="pd-0 lama-vs-coban">\n\n    <button ion-button menuToggle class="text-white">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-searchbar class="dark-searchbar round transparent text-white" padding></ion-searchbar>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content class="white-2">\n\n	<chat-list-group [data]="data" [events]="events"></chat-list-group>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Visual Studio\Personal\Project-Watermellon\src\pages\chat\list-chat-group\list-chat-group.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */]])
    ], ListChatGroupPage);
    return ListChatGroupPage;
}());

//# sourceMappingURL=list-chat-group.js.map

/***/ }),

/***/ 714:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatListGroupModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_list_group__ = __webpack_require__(715);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChatListGroupModule = (function () {
    function ChatListGroupModule() {
    }
    ChatListGroupModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__chat_list_group__["a" /* ChatListGroupComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__chat_list_group__["a" /* ChatListGroupComponent */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__chat_list_group__["a" /* ChatListGroupComponent */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], ChatListGroupModule);
    return ChatListGroupModule;
}());

//# sourceMappingURL=chat-list-group.module.js.map

/***/ }),

/***/ 715:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatListGroupComponent; });
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
 * Generated class for the ChatListGroupsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ChatListGroupComponent = (function () {
    function ChatListGroupComponent() {
        var _this = this;
        this.onCallbackEvent = function (event) {
            if (_this.events[event]) {
                _this.events[event]();
            }
        };
        console.log('Hello ChatListGroupsComponent Component');
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ChatListGroupComponent.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ChatListGroupComponent.prototype, "events", void 0);
    ChatListGroupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'chat-list-group',template:/*ion-inline-start:"D:\Visual Studio\Personal\Project-Watermellon\src\components\chat\chat-list-group\chat-list-group.html"*/'  \n\n  <div class="mg-0">\n\n    <ion-card class="bdra-0 white shadow-1 pst-relative pd-5 ani-bottom-to-right" (click)="onCallbackEvent(\'openConversation\')">\n\n      <button ion-button clear class="btn-more text-grey-3 pull-right"><ion-icon name="md-more"></ion-icon></button>\n\n      <ion-card-header class="text-center pdb-0 fs-16 fw-500">\n\n        Cras a dapibus lectus\n\n      </ion-card-header>\n\n      <ion-card-content class="text-center">\n\n        <p class="text-grey-3 mgb-10 fs-13">2 days ago - 3 member</p>\n\n        <div class="thumb-avt shadow-2">\n\n          <img src="assets/img/avt1.jpg" alt="">\n\n        </div>\n\n        <div class="thumb-avt shadow-2">\n\n          <img src="assets/img/avt2.jpg" alt="">\n\n        </div>\n\n        <div class="thumb-avt shadow-2">\n\n          <img src="assets/img/avt3.jpg" alt="">\n\n        </div>\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card class="bdra-0 white shadow-1 pst-relative pd-5 ani-bottom-to-right" (click)="onCallbackEvent(\'openConversation\')">\n\n      <button ion-button clear class="btn-more text-grey-3 pull-right"><ion-icon name="md-more"></ion-icon></button>\n\n      <ion-card-header class="text-center pdb-0 fs-16 fw-500">\n\n        Fusce auctor eget tortor\n\n      </ion-card-header>\n\n      <ion-card-content class="text-center">\n\n        <p class="text-grey-3 mgb-10 fs-13">2 days ago - 5 member</p>\n\n        <div class="thumb-avt shadow-2">\n\n          <img src="assets/img/avt4.jpg" alt="">\n\n        </div>\n\n        <div class="thumb-avt shadow-2">\n\n          <img src="assets/img/avt5.jpg" alt="">\n\n        </div>\n\n        <div class="thumb-avt shadow-2">\n\n          <img src="assets/img/avt6.jpg" alt="">\n\n        </div>\n\n        <div class="thumb-avt shadow-2">\n\n          <img src="assets/img/avt7.jpg" alt="">\n\n        </div>\n\n        <div class="thumb-avt shadow-2">\n\n          <img src="assets/img/avt1.jpg" alt="">\n\n        </div>\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card class="bdra-0 white shadow-1 pst-relative pd-5 ani-bottom-to-right" (click)="onCallbackEvent(\'openConversation\')">\n\n      <button ion-button clear class="btn-more text-grey-3 pull-right"><ion-icon name="md-more"></ion-icon></button>\n\n      <ion-card-header class="text-center pdb-0 fs-16 fw-500">\n\n        Nunc dictum luctus\n\n      </ion-card-header>\n\n      <ion-card-content class="text-center">\n\n        <p class="text-grey-3 mgb-10 fs-13">2 days ago - 4 member</p>\n\n        <div class="thumb-avt shadow-2">\n\n          <img src="assets/img/avt2.jpg" alt="">\n\n        </div>\n\n        <div class="thumb-avt shadow-2">\n\n          <img src="assets/img/avt3.jpg" alt="">\n\n        </div>\n\n        <div class="thumb-avt shadow-2">\n\n          <img src="assets/img/avt4.jpg" alt="">\n\n        </div>\n\n        <div class="thumb-avt shadow-2">\n\n          <img src="assets/img/avt5.jpg" alt="">\n\n        </div>\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card class="bdra-0 white shadow-1 pst-relative pd-5 ani-bottom-to-right" (click)="onCallbackEvent(\'openConversation\')">\n\n      <button ion-button clear class="btn-more text-grey-3 pull-right"><ion-icon name="md-more"></ion-icon></button>\n\n      <ion-card-header class="text-center pdb-0 fs-16 fw-500">\n\n        Pellentesque at ligula\n\n      </ion-card-header>\n\n      <ion-card-content class="text-center">\n\n        <p class="text-grey-3 mgb-10 fs-13">2 days ago - 7 member</p>\n\n        <div class="thumb-avt shadow-2">\n\n          <img src="assets/img/avt6.jpg" alt="">\n\n        </div>\n\n        <div class="thumb-avt shadow-2">\n\n          <img src="assets/img/avt7.jpg" alt="">\n\n        </div>\n\n        <div class="thumb-avt shadow-2">\n\n          <img src="assets/img/avt1.jpg" alt="">\n\n        </div>\n\n        <div class="thumb-avt shadow-2">\n\n          <img src="assets/img/avt2.jpg" alt="">\n\n        </div>\n\n        <div class="thumb-avt shadow-2">\n\n          <img src="assets/img/avt3.jpg" alt="">\n\n        </div>\n\n        <div class="thumb-avt shadow-2">\n\n          <img src="assets/img/avt4.jpg" alt="">\n\n        </div>\n\n        <div class="thumb-avt shadow-2">\n\n          <img src="assets/img/avt5.jpg" alt="">\n\n        </div>\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card class="bdra-0 white shadow-1 pst-relative pd-5 ani-bottom-to-right" (click)="onCallbackEvent(\'openConversation\')">\n\n      <button ion-button clear class="btn-more text-grey-3 pull-right"><ion-icon name="md-more"></ion-icon></button>\n\n      <ion-card-header class="text-center pdb-0 fs-16 fw-500">\n\n        Sed velit eros\n\n      </ion-card-header>\n\n      <ion-card-content class="text-center">\n\n        <p class="text-grey-3 mgb-10 fs-13">2 days ago - 3 member</p>\n\n        <div class="thumb-avt shadow-2">\n\n          <img src="assets/img/avt6.jpg" alt="">\n\n        </div>\n\n        <div class="thumb-avt shadow-2">\n\n          <img src="assets/img/avt7.jpg" alt="">\n\n        </div>\n\n        <div class="thumb-avt shadow-2">\n\n          <img src="assets/img/avt1.jpg" alt="">\n\n        </div>\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n  </div>\n\n'/*ion-inline-end:"D:\Visual Studio\Personal\Project-Watermellon\src\components\chat\chat-list-group\chat-list-group.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ChatListGroupComponent);
    return ChatListGroupComponent;
}());

//# sourceMappingURL=chat-list-group.js.map

/***/ })

});
//# sourceMappingURL=35.js.map