import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VendorsPage } from './vendors';

@NgModule({
  declarations: [
    VendorsPage,
  ],
  imports: [
    IonicPageModule.forChild(VendorsPage),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class VendorsPageModule {}
