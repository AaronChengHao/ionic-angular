import { Component, Input } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'auth-register',
    templateUrl: 'auth-register.html'
})
export class Register {
    @Input() data: any;
    @Input() events: any;

    public username: string;
    public password: string;
    public country: string;
    public city: string;
    public email: string;
    public title: string;
    public first_name:string;
    public last_name:string;
    public phone:string;

    private isEmailValid: boolean = true;
    private isUsernameValid: boolean = true;
    private isPasswordValid: boolean = true;
    private isCityValid: boolean = true;
    private isCountryValid: boolean = true;

    private regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    constructor() { }

    onEvent = (event: string): void => {
        // if (event == "onRegister" && !this.validate()) {
        //     return;
        // }
        if (this.events[event]) {
            this.events[event]({
                'username': this.username,
                'password': this.password,
                'country': this.country,
                'city': this.city,
                'email': this.email,
                'title': this.title,
                'first_name':this.first_name,
                'last_name':this.last_name,
                'phone':this.phone
            });
        }
    }

    validate():boolean {
        this.isEmailValid = true;
        this.isUsernameValid = true;
        this.isPasswordValid = true;
        this.isCityValid = true;
        this.isCountryValid = true;

        if (!this.username ||this.username.length == 0) {
            this.isUsernameValid = false;
        }

        if (!this.password || this.password.length == 0) {
            this.isPasswordValid = false;
        }

        if (!this.password || this.password.length == 0) {
            this.isPasswordValid = false;
        }

        if (!this.city || this.city.length == 0) {
            this.isCityValid = false;
        }

        if (!this.country || this.country.length == 0) {
            this.isCountryValid = false;
        }

        this.isEmailValid = this.regex.test(this.email);

        return this.isEmailValid &&
            this.isPasswordValid &&
            this.isUsernameValid &&
            this.isCityValid &&
            this.isCountryValid;
    }
}
