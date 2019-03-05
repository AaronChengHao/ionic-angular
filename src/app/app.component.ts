import {Component,ViewChild} from '@angular/core';
import {Platform,Nav} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {Storage} from '@ionic/storage';
import {AppConfig} from "./app.config";

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;
    rootPage: any = 'MainPage';
    pages: any;
    params: any;

    constructor(platform: Platform,
                statusBar: StatusBar,
                splashScreen: SplashScreen,
                private storage:Storage
    ) {
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });

        this.initUser();
    }

    initUser(){
        this.storage.get('user').then(user => {
            if (user && !user.id){
                this.storage.remove('user');
                user = false;
            }

            AppConfig.globalNav = this.nav;
            if (!user){
                this.nav.push('LoginPage');
            }else{
                AppConfig.user = user;
            }
        });
    }




}
