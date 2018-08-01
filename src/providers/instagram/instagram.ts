import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SocialSharing } from '@ionic-native/social-sharing';
/*
  Generated class for the InstagramProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
  */
  const config={
    'api_link':'https://api.instagram.com/v1/',
    'access_token':'355600265.1677ed0.fc760e8d0cfa49198ffbfd29a72acdc4',
    'limit_post':10
  }
  @Injectable()
  export class InstagramService {

  	constructor(public http: HttpClient,
      public iab: InAppBrowser,
      public socialSharing:SocialSharing
      ) {

  	}

  	public getPosts(next:any):Observable<any>{
  		if(next=='' && next!=null){
  			return this.http.get(config.api_link+'users/self/media/recent?access_token='+config.access_token+'&count='+config.limit_post);
  		}else{
  			return this.http.get(next);
  		}
  	}

  	public getComments(item:any):Observable<any>{
  		return this.http.get(config.api_link+'media/'+item.id+'/comments/?access_token='+config.access_token);
  	}

    goToComment(item,navCtrl){
       navCtrl.push('InstagramCommentPage',{
         'item':item
       });
    }

    doOpen(item){
      const browser = this.iab.create(item.link);
    }

    doShare(item){
      this.socialSharing.share(item.name, item.message, null, item.link);
    }

  }
