import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {HomeService} from "./homeService";
import {AppConfig} from "../../app/app.config";
import {UserService} from "../../services/UserService";


@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    user: object = {};

    constructor(public navCtrl: NavController, private homeService: HomeService,private userService:UserService) {

    }
    ionViewDidEnter(){
        this.userService.getUserInfo(user => {
            if (user) this.user = user;

        })
    }

    getHomeInfo() {

    }


}
