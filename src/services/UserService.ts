import { Injectable } from '@angular/core';
import {Storage} from '@ionic/storage';
import {HttpService} from "../providers/HttpService";
import {AppConfig} from "../app/app.config";
import {PATH_USER_ME} from "../providers/Constants";

@Injectable()
export class UserService{
    constructor (private storage : Storage,private httpService:HttpService){

    }

    saveToken(token){
        this.storage.set('token',token).then(res => {
            AppConfig.token = token;
        })
        AppConfig.token = token;
    }

    getToken(){
        this.storage.get('token').then(res => {
        })
    }

    saveUser(token){
        this.httpService.post(PATH_USER_ME,{}).then(user => {
            this.storage.set('user',user).then(user => {
            });
        });

    }

    getUserInfo(call){
        this.storage.get('user').then(res => {
            call(res);
        })
    }
}