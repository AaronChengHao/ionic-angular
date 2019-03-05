import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HomeService} from "./homeService";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    homeService: any;
  constructor(public navCtrl: NavController) {
    this.homeService = new HomeService();
  }

  getHomeInfo(){
    console.log(this.homeService)
    this.homeService.getHomeInfo().then(res => {
      console.log(res)
    });
  }


}
