import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AboutWCFComponent } from './about-wcf';
@NgModule({
    declarations: [
    AboutWCFComponent,
    ],
    imports: [
    IonicPageModule.forChild(AboutWCFComponent),
    ],
    exports: [
        AboutWCFComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AboutWCFModule { 

}
