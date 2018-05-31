webpackJsonp([34],{

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListChatOnlinePageModule", function() { return ListChatOnlinePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_chat_online__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_chat_chat_list_online_chat_list_online_module__ = __webpack_require__(511);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ListChatOnlinePageModule = (function () {
    function ListChatOnlinePageModule() {
    }
    ListChatOnlinePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__list_chat_online__["a" /* ListChatOnlinePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__list_chat_online__["a" /* ListChatOnlinePage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_chat_chat_list_online_chat_list_online_module__["a" /* ChatListOnlineModule */]
            ],
        })
    ], ListChatOnlinePageModule);
    return ListChatOnlinePageModule;
}());

//# sourceMappingURL=list-chat-online.module.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListChatOnlinePage; });
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
 * Generated class for the ListChatOnlinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListChatOnlinePage = (function () {
    function ListChatOnlinePage(navCtrl, navParams, modalCtrl) {
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
    ListChatOnlinePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListChatOnlinePage');
    };
    ListChatOnlinePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-list-chat-online',template:/*ion-inline-start:"/Users/andrewhein/Desktop/WestmorelandWorking/src/pages/chat/list-chat-online/list-chat-online.html"*/'<ion-header>\n  <ion-toolbar class="pd-0 lama-vs-coban">\n    <button ion-button menuToggle class="text-white">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-searchbar class="dark-searchbar round transparent text-white" padding></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class="white-1">\n	<chat-list-online [data]="data" [events]="events"></chat-list-online>\n</ion-content>'/*ion-inline-end:"/Users/andrewhein/Desktop/WestmorelandWorking/src/pages/chat/list-chat-online/list-chat-online.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */]])
    ], ListChatOnlinePage);
    return ListChatOnlinePage;
}());

//# sourceMappingURL=list-chat-online.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatListOnlineModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_list_online__ = __webpack_require__(512);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChatListOnlineModule = (function () {
    function ChatListOnlineModule() {
    }
    ChatListOnlineModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__chat_list_online__["a" /* ChatListOnlineComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__chat_list_online__["a" /* ChatListOnlineComponent */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__chat_list_online__["a" /* ChatListOnlineComponent */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], ChatListOnlineModule);
    return ChatListOnlineModule;
}());

//# sourceMappingURL=chat-list-online.module.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatListOnlineComponent; });
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
 * Generated class for the ChatListOnlineComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ChatListOnlineComponent = (function () {
    function ChatListOnlineComponent() {
        var _this = this;
        this.onCallbackEvent = function (event) {
            if (_this.events[event]) {
                _this.events[event]();
            }
        };
        console.log('Hello ChatListOnlineComponent Component');
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ChatListOnlineComponent.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ChatListOnlineComponent.prototype, "events", void 0);
    ChatListOnlineComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'chat-list-online',template:/*ion-inline-start:"/Users/andrewhein/Desktop/WestmorelandWorking/src/components/chat/chat-list-online/chat-list-online.html"*/'  \n  <ion-list class="mg-0">\n    <ion-item *ngFor="let item of friends">\n      {{ item }}\n    </ion-item>\n  </ion-list>\n\n  \n  <div class="mg-0">\n    <ion-list no-lines class="lst-no-background">\n      <ion-item-group>\n        <ion-item-divider class="ani-fade-out" color="light">Online</ion-item-divider>\n        \n        <ion-item class="ani-bottom-to-left">\n          <ion-avatar item-start (click)="onCallbackEvent(\'openConversation\')">\n            <img src="assets/img/avt1.jpg">\n          </ion-avatar>\n          <h2 class="fs-16" (click)="onCallbackEvent(\'openConversation\')">Woody Renma</h2>\n          <button ion-button clear small item-end class="mg-0 pd-0 text-grey-3">\n            <ion-icon class="fs-18" name="ios-information-circle-outline"></ion-icon>\n          </button>\n          <button ion-button clear small item-end class="mg-0 pd-0 text-grey-3">\n            <ion-icon class="fs-18" name="ios-chatbubbles-outline"></ion-icon>\n          </button>\n        </ion-item>\n\n        <ion-item class="ani-bottom-to-left">\n          <ion-avatar item-start (click)="onCallbackEvent(\'openConversation\')">\n            <img src="assets/img/avt2.jpg">\n          </ion-avatar>\n          <h2 class="fs-16" (click)="onCallbackEvent(\'openConversation\')">Koodinh</h2>\n          <button ion-button clear small item-end class="mg-0 pd-0 text-grey-3">\n            <ion-icon class="fs-18" name="ios-information-circle-outline"></ion-icon>\n          </button>\n          <button ion-button clear small item-end class="mg-0 pd-0 text-grey-3">\n            <ion-icon class="fs-18" name="ios-chatbubbles-outline"></ion-icon>\n          </button>\n        </ion-item>\n\n        <ion-item class="ani-bottom-to-left">\n          <ion-avatar item-start (click)="onCallbackEvent(\'openConversation\')">\n            <img src="assets/img/avt3.jpg">\n          </ion-avatar>\n          <h2 class="fs-16" (click)="onCallbackEvent(\'openConversation\')">Thanh Luan</h2>\n          <button ion-button clear small item-end class="mg-0 pd-0 text-grey-3">\n            <ion-icon class="fs-18" name="ios-information-circle-outline"></ion-icon>\n          </button>\n          <button ion-button clear small item-end class="mg-0 pd-0 text-grey-3">\n            <ion-icon class="fs-18" name="ios-chatbubbles-outline"></ion-icon>\n          </button>\n        </ion-item>\n\n        <ion-item class="ani-bottom-to-left">\n          <ion-avatar item-start (click)="onCallbackEvent(\'openConversation\')">\n            <img src="assets/img/avt4.jpg">\n          </ion-avatar>\n          <h2 class="fs-16" (click)="onCallbackEvent(\'openConversation\')">Dinh Trieu</h2>\n          <button ion-button clear small item-end class="mg-0 pd-0 text-grey-3">\n            <ion-icon class="fs-18" name="ios-information-circle-outline"></ion-icon>\n          </button>\n          <button ion-button clear small item-end class="mg-0 pd-0 text-grey-3">\n            <ion-icon class="fs-18" name="ios-chatbubbles-outline"></ion-icon>\n          </button>\n        </ion-item>\n\n        <ion-item class="ani-bottom-to-left">\n          <ion-avatar item-start (click)="onCallbackEvent(\'openConversation\')">\n            <img src="assets/img/avt5.jpg">\n          </ion-avatar>\n          <h2 class="fs-16" (click)="onCallbackEvent(\'openConversation\')">Furily Hatanomi</h2>\n          <button ion-button clear small item-end class="mg-0 pd-0 text-grey-3">\n            <ion-icon class="fs-18" name="ios-information-circle-outline"></ion-icon>\n          </button>\n          <button ion-button clear small item-end class="mg-0 pd-0 text-grey-3">\n            <ion-icon class="fs-18" name="ios-chatbubbles-outline"></ion-icon>\n          </button>\n        </ion-item>\n\n        <ion-item class="ani-bottom-to-left">\n          <ion-avatar item-start (click)="onCallbackEvent(\'openConversation\')">\n            <img src="assets/img/avt6.jpg">\n          </ion-avatar>\n          <h2 class="fs-16" (click)="onCallbackEvent(\'openConversation\')">Zuikenov</h2>\n          <button ion-button clear small item-end class="mg-0 pd-0 text-grey-3">\n            <ion-icon class="fs-18" name="ios-information-circle-outline"></ion-icon>\n          </button>\n          <button ion-button clear small item-end class="mg-0 pd-0 text-grey-3">\n            <ion-icon class="fs-18" name="ios-chatbubbles-outline"></ion-icon>\n          </button>\n        </ion-item>\n      </ion-item-group>\n\n      <ion-item-group>\n        <ion-item-divider class="ani-fade-out" color="light">Other</ion-item-divider>\n        \n        <ion-item class="ani-bottom-to-left">\n          <ion-avatar item-start (click)="onCallbackEvent(\'openConversation\')">\n            <img src="assets/img/avt7.jpg">\n          </ion-avatar>\n          <h2 class="fs-16" (click)="onCallbackEvent(\'openConversation\')">Frankan Liyn</h2>\n          <button ion-button clear small item-end class="mg-0 pd-0 text-grey-3">\n            <ion-icon class="fs-18" name="ios-information-circle-outline"></ion-icon>\n          </button>\n          <button ion-button clear small item-end class="mg-0 pd-0 text-grey-3">\n            <ion-icon class="fs-18" name="ios-chatbubbles-outline"></ion-icon>\n          </button>\n        </ion-item>\n\n        <ion-item class="ani-bottom-to-left">\n          <ion-avatar item-start (click)="onCallbackEvent(\'openConversation\')">\n            <img src="assets/img/avt1.jpg">\n          </ion-avatar>\n          <h2 class="fs-16" (click)="onCallbackEvent(\'openConversation\')">Lyan Galiduni</h2>\n          <button ion-button clear small item-end class="mg-0 pd-0 text-grey-3">\n            <ion-icon class="fs-18" name="ios-information-circle-outline"></ion-icon>\n          </button>\n          <button ion-button clear small item-end class="mg-0 pd-0 text-grey-3">\n            <ion-icon class="fs-18" name="ios-chatbubbles-outline"></ion-icon>\n          </button>\n        </ion-item>\n\n        <ion-item class="ani-bottom-to-left">\n          <ion-avatar item-start (click)="onCallbackEvent(\'openConversation\')">\n            <img src="assets/img/avt2.jpg">\n          </ion-avatar>\n          <h2 class="fs-16" (click)="onCallbackEvent(\'openConversation\')">Marian Majuli</h2>\n          <button ion-button clear small item-end class="mg-0 pd-0 text-grey-3">\n            <ion-icon class="fs-18" name="ios-information-circle-outline"></ion-icon>\n          </button>\n          <button ion-button clear small item-end class="mg-0 pd-0 text-grey-3">\n            <ion-icon class="fs-18" name="ios-chatbubbles-outline"></ion-icon>\n          </button>\n        </ion-item>\n      </ion-item-group>\n    </ion-list>\n\n  </div>'/*ion-inline-end:"/Users/andrewhein/Desktop/WestmorelandWorking/src/components/chat/chat-list-online/chat-list-online.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ChatListOnlineComponent);
    return ChatListOnlineComponent;
}());

//# sourceMappingURL=chat-list-online.js.map

/***/ })

});
//# sourceMappingURL=34.js.map