import {Component,ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams,Nav} from 'ionic-angular';
import {HomePage} from "../home/home";
import {TabsPage} from "../tabs/tabs";

/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-main',
    templateUrl: 'main.html',
})
export class MainPage {
    @ViewChild(Nav) nav: Nav;
    rootPage :any = TabsPage;
    pages: any;
    params: any;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.pages = this.getSidePages();
        this.params = this.getDataForTheme();
        console.log(this.params)
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad MainPage');
    }

    openPage(page) {
        this.nav.push(page.page);
        // console.log(page)
    }

    getSidePages = (): Array<any> => {
        return [
            {
                "title": "event",
                "page": "EventPage",
                "icon": "ios-list-box-outline",
                "listView": true,
                "component": "",
                "singlePage": false
            },
            {
                "title": "favourite",
                "page": "FavouritePage",
                "icon": "ios-lock-outline",
                "listView": false,
                "component": "",
                "singlePage": false
            },
            {
                "title": "Contact",
                "page": "ContactPage",
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
