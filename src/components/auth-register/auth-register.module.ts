import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Register } from './auth-register';

@NgModule({
    declarations: [
        Register,
    ],
    imports: [
        IonicPageModule.forChild(Register),
    ],
    exports: [
        Register
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class RegisterModule { }
