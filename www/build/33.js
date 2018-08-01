webpackJsonp([33],{

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListChatUsersPageModule", function() { return ListChatUsersPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_chat_users__ = __webpack_require__(719);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_chat_chat_list_users_chat_list_users_module__ = __webpack_require__(720);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ListChatUsersPageModule = (function () {
    function ListChatUsersPageModule() {
    }
    ListChatUsersPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__list_chat_users__["a" /* ListChatUsersPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__list_chat_users__["a" /* ListChatUsersPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_chat_chat_list_users_chat_list_users_module__["a" /* ChatListUsersModule */]
            ],
        })
    ], ListChatUsersPageModule);
    return ListChatUsersPageModule;
}());

//# sourceMappingURL=list-chat-users.module.js.map

/***/ }),

/***/ 719:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListChatUsersPage; });
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
 * Generated class for the ListChatUsersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListChatUsersPage = (function () {
    function ListChatUsersPage(navCtrl, navParams, modalCtrl) {
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
    ListChatUsersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListChatUsersPage');
    };
    ListChatUsersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-list-chat-users',template:/*ion-inline-start:"/Users/andrewhein/Desktop/WestmorelandWorking/src/pages/chat/list-chat-users/list-chat-users.html"*/'\n<ion-header>\n  <ion-toolbar class="pd-0 lama-vs-coban">\n    <button ion-button menuToggle class="text-white">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-searchbar class="dark-searchbar round transparent text-white" padding></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class="white-1">\n	<chat-list-users [data]="data" [events]="events"></chat-list-users>\n</ion-content>'/*ion-inline-end:"/Users/andrewhein/Desktop/WestmorelandWorking/src/pages/chat/list-chat-users/list-chat-users.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */]])
    ], ListChatUsersPage);
    return ListChatUsersPage;
}());

//# sourceMappingURL=list-chat-users.js.map

/***/ }),

/***/ 720:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatListUsersModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_list_users__ = __webpack_require__(721);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChatListUsersModule = (function () {
    function ChatListUsersModule() {
    }
    ChatListUsersModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__chat_list_users__["a" /* ChatListUsersComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__chat_list_users__["a" /* ChatListUsersComponent */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__chat_list_users__["a" /* ChatListUsersComponent */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], ChatListUsersModule);
    return ChatListUsersModule;
}());

//# sourceMappingURL=chat-list-users.module.js.map

/***/ }),

/***/ 721:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatListUsersComponent; });
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
 * Generated class for the ChatListUsersComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ChatListUsersComponent = (function () {
    function ChatListUsersComponent() {
        var _this = this;
        this.onCallbackEvent = function (event) {
            if (_this.events[event]) {
                _this.events[event]();
            }
        };
        console.log('Hello ChatListUsersComponent Component');
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ChatListUsersComponent.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ChatListUsersComponent.prototype, "events", void 0);
    ChatListUsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'chat-list-users',template:/*ion-inline-start:"/Users/andrewhein/Desktop/WestmorelandWorking/src/components/chat/chat-list-users/chat-list-users.html"*/'\n  <ion-list no-lines class="white mg-0">\n    <ion-item-sliding class="ani-right-to-left">\n      <ion-item class="white" (click)="onCallbackEvent(\'openConversation\')">\n        <ion-avatar item-start>\n          <img src="assets/img/avt1.jpg">\n        </ion-avatar>\n        <h2 class="fs-15 fw-500">Woody</h2>\n        <p class="text-grey-3">Fusce imperdiet tellus ut elit viverra, at pretium tellus ullamcorper.</p>\n        <ion-note item-end class="fs-12">7:03 pm</ion-note>\n      </ion-item>\n      <ion-item-options>\n        <button ion-button color="light" class="white-2 fs-13" icon-start>\n          <ion-icon name="ios-more" class="fs-18"></ion-icon>\n          More\n        </button>\n        <button ion-button color="secondary" class="pink-vs-red fs-13" icon-start>\n          <ion-icon name="trash" class="fs-18"></ion-icon>\n          Dell\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n\n    <ion-item-sliding class="ani-right-to-left">\n      <ion-item class="white" (click)="onCallbackEvent(\'openConversation\')">\n        <ion-avatar item-start>\n          <img src="assets/img/avt2.jpg">\n        </ion-avatar>\n        <h2 class="fs-15 fw-500">Lrandom Dev</h2>\n        <p class="text-grey-3">This town ain\'t big enough for the two of us!</p>\n        <ion-note item-end class="fs-12">3:43 am</ion-note>\n      </ion-item>\n      <ion-item-options>\n        <button ion-button color="light" class="white-2 fs-13" icon-start>\n          <ion-icon name="ios-more" class="fs-18"></ion-icon>\n          More\n        </button>\n        <button ion-button color="secondary" class="pink-vs-red fs-13" icon-start>\n          <ion-icon name="trash" class="fs-18"></ion-icon>\n          Dell\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n\n    <ion-item-sliding class="ani-right-to-left">\n      <ion-item class="white" (click)="onCallbackEvent(\'openConversation\')">\n        <ion-avatar item-start>\n          <img src="assets/img/avt3.jpg">\n        </ion-avatar>\n        <h2 class="fs-15 fw-500">Koodinh</h2>\n        <p class="text-grey-3">Pellentesque eros massa, mollis eget faucibus at, porta a erat.</p>\n        <ion-note item-end class="fs-12">1:35 pm</ion-note>\n      </ion-item>\n      <ion-item-options>\n        <button ion-button color="light" class="white-2 fs-13" icon-start>\n          <ion-icon name="ios-more" class="fs-18"></ion-icon>\n          More\n        </button>\n        <button ion-button color="secondary" class="pink-vs-red fs-13" icon-start>\n          <ion-icon name="trash" class="fs-18"></ion-icon>\n          Dell\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n\n    <ion-item-sliding class="ani-right-to-left">\n      <ion-item class="white" (click)="onCallbackEvent(\'openConversation\')">\n        <ion-avatar item-start>\n          <img src="assets/img/avt4.jpg">\n        </ion-avatar>\n        <h2 class="fs-15 fw-500">Luan Thanh</h2>\n        <p class="text-grey-3">Vestibulum nunc turpis, vestibulum imperdiet consequat ut.</p>\n        <ion-note item-end class="fs-12">8:33 pm</ion-note>\n      </ion-item>\n      <ion-item-options>\n        <button ion-button color="light" class="white-2 fs-13" icon-start>\n          <ion-icon name="ios-more" class="fs-18"></ion-icon>\n          More\n        </button>\n        <button ion-button color="secondary" class="pink-vs-red fs-13" icon-start>\n          <ion-icon name="trash" class="fs-18"></ion-icon>\n          Dell\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n\n    <ion-item-sliding class="ani-right-to-left">\n      <ion-item class="white" (click)="onCallbackEvent(\'openConversation\')">\n        <ion-avatar item-start>\n          <img src="assets/img/avt5.jpg">\n        </ion-avatar>\n        <h2 class="fs-15 fw-500">Aser Kaim</h2>\n        <p class="text-grey-3">Mollis eget faucibus at, porta a erat.</p>\n        <ion-note item-end class="fs-12">12:05 am</ion-note>\n      </ion-item>\n      <ion-item-options>\n        <button ion-button color="light" class="white-2 fs-13" icon-start>\n          <ion-icon name="ios-more" class="fs-18"></ion-icon>\n          More\n        </button>\n        <button ion-button color="secondary" class="pink-vs-red fs-13" icon-start>\n          <ion-icon name="trash" class="fs-18"></ion-icon>\n          Dell\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n\n    <ion-item-sliding class="ani-right-to-left">\n      <ion-item class="white" (click)="onCallbackEvent(\'openConversation\')">\n        <ion-avatar item-start>\n          <img src="assets/img/avt6.jpg">\n        </ion-avatar>\n        <h2 class="fs-15 fw-500">Frankin leor</h2>\n        <p class="text-grey-3">This town ain\'t big enough for the two of us!</p>\n        <ion-note item-end class="fs-12">2:43 am</ion-note>\n      </ion-item>\n      <ion-item-options>\n        <button ion-button color="light" class="white-2 fs-13" icon-start>\n          <ion-icon name="ios-more" class="fs-18"></ion-icon>\n          More\n        </button>\n        <button ion-button color="secondary" class="pink-vs-red fs-13" icon-start>\n          <ion-icon name="trash" class="fs-18"></ion-icon>\n          Dell\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n\n    <ion-item-sliding class="ani-right-to-left">\n      <ion-item class="white" (click)="onCallbackEvent(\'openConversation\')">\n        <ion-avatar item-start>\n          <img src="assets/img/avt7.jpg">\n        </ion-avatar>\n        <h2 class="fs-15 fw-500">Marrian Banh</h2>\n        <p class="text-grey-3">Sed ultrices at odio vel tempus.</p>\n        <ion-note item-end class="fs-12">9:47 pm</ion-note>\n      </ion-item>\n      <ion-item-options>\n        <button ion-button color="light" class="white-2 fs-13" icon-start>\n          <ion-icon name="ios-more" class="fs-18"></ion-icon>\n          More\n        </button>\n        <button ion-button color="secondary" class="pink-vs-red fs-13" icon-start>\n          <ion-icon name="trash" class="fs-18"></ion-icon>\n          Dell\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n\n    <ion-item-sliding class="ani-right-to-left">\n      <ion-item class="white" (click)="onCallbackEvent(\'openConversation\')">\n        <ion-avatar item-start>\n          <img src="assets/img/avt1.jpg">\n        </ion-avatar>\n        <h2 class="fs-15 fw-500">John Gouling</h2>\n        <p class="text-grey-3">Fusce imperdiet tellus ut elit viverra, at pretium tellus ullamcorper.</p>\n        <ion-note item-end class="fs-12">5:22 am</ion-note>\n      </ion-item>\n      <ion-item-options>\n        <button ion-button color="light" class="white-2 fs-13" icon-start>\n          <ion-icon name="ios-more" class="fs-18"></ion-icon>\n          More\n        </button>\n        <button ion-button color="secondary" class="pink-vs-red fs-13" icon-start>\n          <ion-icon name="trash" class="fs-18"></ion-icon>\n          Dell\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n\n    <ion-item-sliding class="ani-right-to-left">\n      <ion-item class="white" (click)="onCallbackEvent(\'openConversation\')">\n        <ion-avatar item-start>\n          <img src="assets/img/avt2.jpg">\n        </ion-avatar>\n        <h2 class="fs-15 fw-500">Tom Fureus</h2>\n        <p class="text-grey-3">This town ain\'t big enough for the two of us!</p>\n        <ion-note item-end class="fs-12">6:57 pm</ion-note>\n      </ion-item>\n      <ion-item-options>\n        <button ion-button color="light" class="white-2 fs-13" icon-start>\n          <ion-icon name="ios-more" class="fs-18"></ion-icon>\n          More\n        </button>\n        <button ion-button color="secondary" class="pink-vs-red fs-13" icon-start>\n          <ion-icon name="trash" class="fs-18"></ion-icon>\n          Dell\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n\n    <ion-item-sliding class="ani-right-to-left">\n      <ion-item class="white" (click)="onCallbackEvent(\'openConversation\')">\n        <ion-avatar item-start>\n          <img src="assets/img/avt3.jpg">\n        </ion-avatar>\n        <h2 class="fs-15 fw-500">Zanlokopou</h2>\n        <p class="text-grey-3">Vivamus eu porttitor ipsum. Pellentesque eros massa</p>\n        <ion-note item-end class="fs-12">11:45 pm</ion-note>\n      </ion-item>\n      <ion-item-options>\n        <button ion-button color="light" class="white-2 fs-13" icon-start>\n          <ion-icon name="ios-more" class="fs-18"></ion-icon>\n          More\n        </button>\n        <button ion-button color="secondary" class="pink-vs-red fs-13" icon-start>\n          <ion-icon name="trash" class="fs-18"></ion-icon>\n          Dell\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n\n    <ion-item-sliding class="ani-right-to-left">\n      <ion-item class="white" (click)="onCallbackEvent(\'openConversation\')">\n        <ion-avatar item-start>\n          <img src="assets/img/avt1.jpg">\n        </ion-avatar>\n        <h2 class="fs-15 fw-500">John Gouling</h2>\n        <p class="text-grey-3">Fusce imperdiet tellus ut elit viverra, at pretium tellus ullamcorper.</p>\n        <ion-note item-end class="fs-12">5:22 am</ion-note>\n      </ion-item>\n      <ion-item-options>\n        <button ion-button color="light" class="white-2 fs-13" icon-start>\n          <ion-icon name="ios-more" class="fs-18"></ion-icon>\n          More\n        </button>\n        <button ion-button color="secondary" class="pink-vs-red fs-13" icon-start>\n          <ion-icon name="trash" class="fs-18"></ion-icon>\n          Dell\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n\n    <ion-item-sliding class="ani-right-to-left">\n      <ion-item class="white" (click)="onCallbackEvent(\'openConversation\')">\n        <ion-avatar item-start>\n          <img src="assets/img/avt5.jpg">\n        </ion-avatar>\n        <h2 class="fs-15 fw-500">Aser Kaim</h2>\n        <p class="text-grey-3">Mollis eget faucibus at, porta a erat.</p>\n        <ion-note item-end class="fs-12">12:05 am</ion-note>\n      </ion-item>\n      <ion-item-options>\n        <button ion-button color="light" class="white-2 fs-13" icon-start>\n          <ion-icon name="ios-more" class="fs-18"></ion-icon>\n          More\n        </button>\n        <button ion-button color="secondary" class="pink-vs-red fs-13" icon-start>\n          <ion-icon name="trash" class="fs-18"></ion-icon>\n          Dell\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n'/*ion-inline-end:"/Users/andrewhein/Desktop/WestmorelandWorking/src/components/chat/chat-list-users/chat-list-users.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ChatListUsersComponent);
    return ChatListUsersComponent;
}());

//# sourceMappingURL=chat-list-users.js.map

/***/ })

});
//# sourceMappingURL=33.js.map