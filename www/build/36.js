webpackJsonp([36],{

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatConversationPageModule", function() { return ChatConversationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_conversation__ = __webpack_require__(709);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_chat_chat_conversation_chat_conversation_module__ = __webpack_require__(710);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ChatConversationPageModule = (function () {
    function ChatConversationPageModule() {
    }
    ChatConversationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__chat_conversation__["a" /* ChatConversationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__chat_conversation__["a" /* ChatConversationPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_chat_chat_conversation_chat_conversation_module__["a" /* ChatConversationModule */]
            ],
        })
    ], ChatConversationPageModule);
    return ChatConversationPageModule;
}());

//# sourceMappingURL=chat-conversation.module.js.map

/***/ }),

/***/ 709:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatConversationPage; });
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
 * Generated class for the ChatConversationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChatConversationPage = (function () {
    function ChatConversationPage(navCtrl, navParams, viewCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.data = {};
        this.events = {};
        this.events.openConversation = function (item) {
            var chatModal = modalCtrl.create('ChatConversationPage', { 'data': item });
            chatModal.present();
        };
    }
    ChatConversationPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ChatConversationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChatConversationPage');
    };
    ChatConversationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-chat-conversation',template:/*ion-inline-start:"D:\Visual Studio\Personal\Project-Watermellon\src\pages\chat\chat-conversation\chat-conversation.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons start>\n\n      <button ion-button class="text-black mgl-10 pd-5 fs-32" (click)="dismiss()">\n\n        <ion-icon name="ios-arrow-round-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title class="inline-block">Koodinh</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button class="mgr-10 text-grey-3">\n\n        <ion-icon name="ios-information-circle"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="white-1" padding>\n\n  <chat-conversation [data]="data" [events]="events"></chat-conversation>\n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <ion-toolbar class="white-2 pd-0">\n\n    <ion-buttons start class="">\n\n      <button ion-button clear class="text-grey-5 bdra-0 button-large pd-10 mg-0">\n\n        <ion-icon name="md-attach" class="fs-20"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-list class="mgb-0 mgl-5">\n\n      <ion-item class="text-grey-5 transparent fs-13 pdl-0">\n\n        <ion-input type="text" placeholder="Opacity dark"></ion-input>\n\n      </ion-item>\n\n    </ion-list>\n\n    <ion-buttons end class="mg-0">\n\n      <button ion-button clear class="text-grey-5 mgl-5 bdra-0 button-large pd-10">\n\n        <ion-icon name="md-happy" class="fs-20"></ion-icon>\n\n      </button>\n\n      <button ion-button class="lama-vs-coban text-white mgr-0 bdra-0 button-large pd-15">\n\n        <ion-icon name="md-send" class="fs-26"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"D:\Visual Studio\Personal\Project-Watermellon\src\pages\chat\chat-conversation\chat-conversation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */]])
    ], ChatConversationPage);
    return ChatConversationPage;
}());

//# sourceMappingURL=chat-conversation.js.map

/***/ }),

/***/ 710:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatConversationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_conversation__ = __webpack_require__(711);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChatConversationModule = (function () {
    function ChatConversationModule() {
    }
    ChatConversationModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__chat_conversation__["a" /* ChatConversationComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__chat_conversation__["a" /* ChatConversationComponent */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__chat_conversation__["a" /* ChatConversationComponent */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], ChatConversationModule);
    return ChatConversationModule;
}());

//# sourceMappingURL=chat-conversation.module.js.map

/***/ }),

/***/ 711:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatConversationComponent; });
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
 * Generated class for the ChatConversationComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ChatConversationComponent = (function () {
    function ChatConversationComponent() {
        var _this = this;
        this.onCallbackEvent = function (event) {
            if (_this.events[event]) {
                _this.events[event]();
            }
        };
        console.log('Hello ChatConversationComponent Component');
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ChatConversationComponent.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ChatConversationComponent.prototype, "events", void 0);
    ChatConversationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'chat-conversation',template:/*ion-inline-start:"D:\Visual Studio\Personal\Project-Watermellon\src\components\chat\chat-conversation\chat-conversation.html"*/'\n\n  \n\n  <div class="mess-left mgb-15">\n\n    <div class="mess-avt">\n\n      <img src="assets/img/avt1.jpg">\n\n    </div>\n\n    <div class="bubb-left">\n\n      <span class="lama-vs-coban pd-10 text-white mgl-5 mgr-10 shadow-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>\n\n      <span class="lama-vs-coban pd-10 text-white mgl-5 mgr-10 shadow-2">Aliquam varius tellus libero</span>\n\n    </div>\n\n    <span class="date-mess fs-10 text-grey-3">7:00 Pm</span>\n\n  </div>\n\n\n\n  <div class="mess-right mgb-15 text-right">\n\n    <span class="bubb-right white-2 pd-10">Donec nec sapien vel massa mattis cursus eu ac augue. </span>\n\n  </div>\n\n\n\n  <div class="mess-left mgb-15">\n\n    <div class="mess-avt">\n\n      <img src="assets/img/avt1.jpg">\n\n    </div>\n\n    <div class="bubb-left">\n\n      <span class="bubb-left lama-vs-coban pd-10 text-white mgl-5 mgr-10 shadow-2">Vestibulum nunc turpis</span>\n\n      <span class="bubb-left lama-vs-coban pd-10 text-white mgl-5 mgr-10 shadow-2">Cras a dapibus lectus</span>\n\n      <span class="bubb-left lama-vs-coban pd-10 text-white mgl-5 mgr-10 shadow-2">Sed aliquam</span>\n\n    </div>\n\n    <span class="date-mess fs-10 text-grey-3">7:00 Pm</span>\n\n  </div>\n\n\n\n  <div class="mess-right mgb-15 text-right">\n\n    <span class="bubb-right white-2 pd-10">Suspendisse potenti</span>\n\n    <span class="bubb-right white-2 pd-10">Phasellus nibh ante</span>\n\n  </div>\n\n\n\n  <div class="mess-left mess-typing mgb-15">\n\n    <div class="mess-avt">\n\n      <img src="assets/img/avt1.jpg">\n\n    </div>\n\n    <div class="bubb-left">\n\n      <span class="bubb-left lama-vs-coban pd-10 text-white mgl-5 mgr-10 shadow-2 fw-200"><i>typing...</i></span>\n\n    </div>\n\n  </div>\n\n'/*ion-inline-end:"D:\Visual Studio\Personal\Project-Watermellon\src\components\chat\chat-conversation\chat-conversation.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ChatConversationComponent);
    return ChatConversationComponent;
}());

//# sourceMappingURL=chat-conversation.js.map

/***/ })

});
//# sourceMappingURL=36.js.map