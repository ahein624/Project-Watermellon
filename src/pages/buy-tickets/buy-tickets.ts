import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * Generated class for the BuyTicketsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 // Leaving this existing code incase we need to come back and reference it.
 @IonicPage()
 @Component({
   selector: 'page-buy',
   templateUrl: 'buy-tickets.html',
 })
 export class BuyTicketsPage {
    page:any;
    params:any={};
    url:any;

   constructor(public navCtrl: NavController, public navParams: NavParams, public sanitize: DomSanitizer) {
       this.url = sanitize.bypassSecurityTrustResourceUrl("https://westmorelandfair.com/_app/tickets/");
   }

   ionViewDidLoad() {
     console.log('ionViewDidLoad BuyTicketsPage');
   }
 }
