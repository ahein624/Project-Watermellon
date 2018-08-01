import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SponsorsPage } from './sponsors';

@NgModule({
  declarations: [
    SponsorsPage,
  ],
  imports: [
    IonicPageModule.forChild(SponsorsPage),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SponsorsPageModule {}
