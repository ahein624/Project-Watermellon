import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 // Leaving this existing code incase we need to come back and reference it.
 @IonicPage()
 @Component({
   selector: 'page-about',
   templateUrl: 'about.html',
 })
 export class AboutPage {
   page:any;
   params:any={};
   url:any={};

   constructor(
     public navCtrl: NavController, 
     public navParams: NavParams,
     public sanitize: DomSanitizer
     ) {
       // Commenting this out due to unneeded.
    //  this.page=this.navParams.get('page');
    //  console.log(this.page);
    //  if(this.page==undefined){
    //    this.navCtrl.setRoot('HomePage');
    //  }
        this.url = sanitize.bypassSecurityTrustResourceUrl("https://westmorelandfair.com/_app/about-us/");
   }

   ionViewDidLoad() {
     console.log('ionViewDidLoad AboutPage');
   }
 }
