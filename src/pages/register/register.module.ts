import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {RegisterPage} from './register';

import {RegisterModule} from '../../components/auth-register/auth-register.module';

@NgModule({
    declarations: [
        RegisterPage,
    ],
    imports: [
        IonicPageModule.forChild(RegisterPage),
        RegisterModule
    ],
})
export class RegisterPageModule {
}
