import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {TabsPage} from '../pages/tabs/tabs';

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    rootPage: any = TabsPage;

    pages: any;
    params: any;
    leftMenuTitle: string;

    constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });

        this.pages = this.getSidePages();
        this.params = this.getDataForTheme();
        console.log(this.params)

        this.initUser();
    }

    initUser(){
        console.log('iss');
    }

    getSidePages = (): Array<any> => {
        return [
            {
                "title": "event",
                "page": "list",
                "icon": "ios-list-box-outline",
                "listView": true,
                "component": "",
                "singlePage": false
            },
            {
                "title": "favourites",
                "page": "contact",
                "icon": "ios-lock-outline",
                "listView": false,
                "component": "",
                "singlePage": false
            },
            {
                "title": "Contact",
                "page": "contact",
                "icon": "ios-lock-outline",
                "listView": false,
                "component": "",
                "singlePage": false
            },
        ];
    }

    getDataForTheme = () => {
        return {
            "background": "assets/images/background/16.jpg",
            "image": "assets/images/logo/logo.png",
            "title": "Chinese Mode"
        };
    };
}
