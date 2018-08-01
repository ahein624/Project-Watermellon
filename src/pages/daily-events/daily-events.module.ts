import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DailyEventsPage } from './daily-events';

@NgModule({
  declarations: [
    DailyEventsPage,
  ],
  imports: [
    IonicPageModule.forChild(DailyEventsPage),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DailyEventsPageModule {}
