import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DirectionsPage } from './directions';

@NgModule({
  declarations: [
    DirectionsPage,
  ],
  imports: [
    IonicPageModule.forChild(DirectionsPage),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DirectionsPageModule {}
