import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import {AuthService} from "../../services/AuthService";
import {AppConfig} from "../../app/app.config";

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-register',
    templateUrl: 'register.html',
})
export class RegisterPage {
    data :any;
    events:any;
    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private authService:AuthService,
                private alertCtrl:AlertController
                ) {
        this.data = this.getTmpData();
        this.events = {
            'onRegister': this.onRegister.bind(this)
        };
        console.log(this.authService)
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad RegisterPage');
    }

    onRegister( data ){
        this.authService.register(data).then(res => {
            if (res.errors){
                try{
                    Object.keys(res.errors).forEach( key => {
                        let alert = this.alertCtrl.create({
                            title: key,
                            subTitle: res.errors[key].toString(),
                            buttons: ['OK']
                        });
                        alert.present();
                        throw new Error('break');
                    })
                }catch(e) {}
            }else{
                AppConfig.globalNav.pop();
            }
        });
    }
    //Register + logo data
    getTmpData = (): any => {
        return {
            "toolbarTitle": "Register + logo",
            "logo": "assets/images/logo/1.png",
            "register": "register",
            "title": "Register your new account",
            "background": "assets/images/background/29.jpg",
            "username": "Enter your username",
            "city": "Your home town",
            "country": "Where are you from?",
            "password": "Enter your password",
            "email": "Your e-mail address",
            "skip": "Skip",
            "phone":"Enter your password phone",
            "first_name":"Enter your first_name",
            "last_name":"Enter your last_name",
            "lablePhone":"Phone",
            "lableFirst_name":"FIRST-NAME",
            "lableLast_name":"LAST-NAME",
            "lableUsername": "USERNAME",
            "lablePassword": "PASSWORD",
            "lableEmail": "E-MAIL",
            "lableCountry": "COUNTRY",
            "lableCity": "CITY",
            "lableTitle":'TITLE',
            "userTitle":"Enter your title",
            "errorUser": "Field can't be empty",
            "errorPassword": "Field can't be empty",
            "errorEmail": "Invalid email address",
            "errorCountry": "Field can't be empty",
            "errorCity": "Field can't be empty"
        };
    };

}
