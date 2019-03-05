import {NgModule} from '@angular/core';
import {IonicPageModule, IonicPage} from 'ionic-angular';
import {LoginPage} from './login';

import {LoginModule} from "../../components/auth-login/auth-login.module";

@NgModule({
    declarations: [
        LoginPage,
    ],
    imports: [
        IonicPageModule.forChild(LoginPage),
        LoginModule
    ],
})
export class LoginPageModule {
}
