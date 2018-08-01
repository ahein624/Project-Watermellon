import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * Generated class for the VendorsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 // Leaving this existing code incase we need to come back and reference it.
 @IonicPage()
 @Component({
   selector: 'page-vendors',
   templateUrl: 'vendors.html',
 })
 export class VendorsPage {
    page:any;
    params:any={};
    url:any;

   constructor(public navCtrl: NavController, public navParams: NavParams, public sanitize: DomSanitizer) {
       this.url = sanitize.bypassSecurityTrustResourceUrl("https://westmorelandfair.com/_app/vendors/");
   }

   ionViewDidLoad() {
     console.log('ionViewDidLoad VendorsPage');
   }
 }
