import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * Generated class for the DailyEventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 // Leaving this existing code incase we need to come back and reference it.
 @IonicPage()
 @Component({
   selector: 'page-events',
   templateUrl: 'daily-events.html',
 })
 export class DailyEventsPage {
    page:any;
    params:any={};
    url:any;

   constructor(public navCtrl: NavController, public navParams: NavParams, public sanitize: DomSanitizer) {
       this.url = sanitize.bypassSecurityTrustResourceUrl("https://westmorelandfair.com/_app/daily-events/");
   }

   ionViewDidLoad() {
     console.log('ionViewDidLoad DailyEventsPage');
   }
 }
