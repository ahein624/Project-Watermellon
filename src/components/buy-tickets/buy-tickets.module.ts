import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuyTicketsComponent } from './buy-tickets';
@NgModule({
    declarations: [
    BuyTicketsComponent,
    ],
    imports: [
    IonicPageModule.forChild(BuyTicketsComponent),
    ],
    exports: [
        BuyTicketsComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class BuyTicketsModule { 

}
