import { Component,Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

 @Component({
 	selector: 'buy-tickets',
 	templateUrl: 'buy-tickets.html'
 })

 export class BuyTicketsComponent {
 	@Input() data: any;
 	@Input() events: any;

  	public fullname: string;
  	public email: string;
  	public message: string;

 	constructor(public sanitizer: DomSanitizer) {
 		
 	}

 	onCallbackEvent = (event: string): void => {
 		if (this.events[event]) {
 			this.events[event]({
 				'fullname':this.fullname,
 				'email':this.email,
 				'message':this.message
 			});
 		}
 	}

 }
