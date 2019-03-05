import { Component, Input } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'auth-login',
    templateUrl: 'auth-login.html'
})
export class Login {
    @Input() data: any;
    @Input() events: any;

    public username: string;
    public password: string;
    public email:string;

    private isEmailValid: boolean = true;
    private isPasswordValid: boolean = true;

    constructor() { }

    onEvent = (event: string): void => {
        if (event == "onLogin" && !this.validate()) {
            console.log(321);
            return ;
        }
        if (this.events[event]) {
            this.events[event]({
                'email' : this.email,
                'password' : this.password
            });
        }
      }

    validate():boolean {
        this.isPasswordValid = true;
        this.isEmailValid = true;

        if (!this.password || this.password.length == 0) {
            this.isPasswordValid = false;
        }
        if (!this.email || this.email.length == 0) {
            this.isEmailValid = false;
        }

        return this.isPasswordValid && this.isPasswordValid;
     }
}
