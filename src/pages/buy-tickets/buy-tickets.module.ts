import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuyTicketsPage } from './buy-tickets';

@NgModule({
  declarations: [
    BuyTicketsPage,
  ],
  imports: [
    IonicPageModule.forChild(BuyTicketsPage),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BuyTicketsPageModule {}
