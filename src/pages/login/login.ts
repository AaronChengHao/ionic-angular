import {Component,ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams,Nav,AlertController} from 'ionic-angular';

import {AppConfig} from "../../app/app.config";
import {AuthService} from "../../services/AuthService";
import {UserService} from "../../services/UserService";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})
export class LoginPage {
    @ViewChild(Nav) nav: Nav;
    data :any;
    events:any;
    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private authService:AuthService,
                private alertCtrl:AlertController,
                private userService:UserService) {
        this.data = this.getTmpData();
        this.events = {
            onRegister:this.onRegister.bind(this),
            onLogin: this.onLogin.bind(this)
        };
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad LoginPage');
    }

    onLogin(data){
        this.userService.getToken();
        this.authService.login(data).then(res => {
            if (!res.errors && res.success !== false){
                this.userService.saveToken(res.access_token)
                this.userService.saveUser(res.access_token);
                return AppConfig.globalNav.pop()
            } else{
                let alert = this.alertCtrl.create({
                    title: 'error',
                    subTitle: res.errors || res.msg,
                    buttons: ['OK']
                });
                alert.present();
            }
        })
    }

    onRegister(){
        AppConfig.globalNav.push('RegisterPage');
    }
    getTmpData = (): any => {
        return {
            "background": "assets/images/background/39.jpg",
            "email": "Enter your Email",
            "password": "Enter your password",
            "labelEmail": "Email",
            "labelPassword": "PASSWORD",
            "register": "Register now!",
            "forgotPassword": "Forgot password?",
            "login": "Login",
            "loginFacebook": "Login With",
            "subtitle": "Welcome",
            "title": "Login to your account",
            "skip": "Skip",
            "logo": "assets/images/logo/1.png",
            "errorUser": "Field can't be empty",
            "errorPassword": "Field can't be empty",
            "errorEmail":"Field can't be email"
        };
    };

}
