import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the EventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-event',
    templateUrl: 'event.html',
})
export class EventPage {

    data:any;
    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.data = this.getDataForLayout2();
    }

    ionViewDidLoad() {

        console.log('ionViewDidLoad EventPages');
    }
    getDataForLayout2 = (): any => {
        return {
            "items": [
                {
                    "id": 1,
                    "title": "Open Air Concerts",
                    "subtitle": "Monday, 15th Oct. 2018",
                    "backgroundImage": "assets/images/background/11.jpg",
                    "icon": "ios-arrow-dropright",
                    "iconText": "Watch now",
                    "expandItems": {
                        "iconsStars": [
                            {
                                "isActive": true,
                                "iconActive": "icon-star",
                                "iconInactive": "icon-star-outline"
                            },
                            {
                                "isActive": true,
                                "iconActive": "icon-star",
                                "iconInactive": "icon-star-outline"
                            },
                            {
                                "isActive": true,
                                "iconActive": "icon-star",
                                "iconInactive": "icon-star-outline"
                            },
                            {
                                "isActive": true,
                                "iconActive": "icon-star",
                                "iconInactive": "icon-star-outline"
                            },
                            {
                                "isActive": false,
                                "iconActive": "icon-star",
                                "iconInactive": "icon-star-outline"
                            }
                        ],
                        "reviews": "4.12 (78 reviews)",
                        "title": "Lorem ipsum dolor sit amet",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
                    }
                },
                {
                    "id": 2,
                    "title": "Concert Summer",
                    "subtitle": "Wendsday, 21st Oct. 2018",
                    "backgroundImage": "assets/images/background/14.jpg",
                    "icon": "ios-arrow-dropright",
                    "iconText": "Watch now",
                    "expandItems": {
                        "iconsStars": [
                            {
                                "isActive": true,
                                "iconActive": "icon-star",
                                "iconInactive": "icon-star-outline"
                            },
                            {
                                "isActive": true,
                                "iconActive": "icon-star",
                                "iconInactive": "icon-star-outline"
                            },
                            {
                                "isActive": true,
                                "iconActive": "icon-star",
                                "iconInactive": "icon-star-outline"
                            },
                            {
                                "isActive": true,
                                "iconActive": "icon-star",
                                "iconInactive": "icon-star-outline"
                            },
                            {
                                "isActive": false,
                                "iconActive": "icon-star",
                                "iconInactive": "icon-star-outline"
                            }
                        ],
                        "reviews": "4.12 (78 reviews)",
                        "title": "Lorem ipsum dolor sit amet",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
                    }
                },
                {
                    "id": 3,
                    "title": "Summer Open Air Festival",
                    "subtitle": "Wendsday, 21st Oct. 2018",
                    "backgroundImage": "assets/images/background/13.jpg",
                    "icon": "ios-arrow-dropright",
                    "iconText": "Watch now",
                    "expandItems": {
                        "iconsStars": [
                            {
                                "isActive": true,
                                "iconActive": "icon-star",
                                "iconInactive": "icon-star-outline"
                            },
                            {
                                "isActive": true,
                                "iconActive": "icon-star",
                                "iconInactive": "icon-star-outline"
                            },
                            {
                                "isActive": true,
                                "iconActive": "icon-star",
                                "iconInactive": "icon-star-outline"
                            },
                            {
                                "isActive": true,
                                "iconActive": "icon-star",
                                "iconInactive": "icon-star-outline"
                            },
                            {
                                "isActive": false,
                                "iconActive": "icon-star",
                                "iconInactive": "icon-star-outline"
                            }
                        ],
                        "reviews": "4.12 (78 reviews)",
                        "title": "Lorem ipsum dolor sit amet",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
                    }
                },
                {
                    "id": 4,
                    "title": "Classic Open Air",
                    "subtitle": "Wendsday, 21st Oct. 2018",
                    "backgroundImage": "assets/images/background/10.jpg",
                    "icon": "ios-arrow-dropright",
                    "iconText": "Watch now",
                    "expandItems": {
                        "iconsStars": [
                            {
                                "isActive": true,
                                "iconActive": "icon-star",
                                "iconInactive": "icon-star-outline"
                            },
                            {
                                "isActive": true,
                                "iconActive": "icon-star",
                                "iconInactive": "icon-star-outline"
                            },
                            {
                                "isActive": true,
                                "iconActive": "icon-star",
                                "iconInactive": "icon-star-outline"
                            },
                            {
                                "isActive": true,
                                "iconActive": "icon-star",
                                "iconInactive": "icon-star-outline"
                            },
                            {
                                "isActive": false,
                                "iconActive": "icon-star",
                                "iconInactive": "icon-star-outline"
                            }
                        ],
                        "reviews": "4.12 (78 reviews)",
                        "title": "Lorem ipsum dolor sit amet",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
                    }
                }
            ]
        }
    };
}
