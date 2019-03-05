import { Injectable } from '@angular/core';
import {HttpService} from "../providers/HttpService";
import {PATH_USER_REGISTER,PATH_USER_LOGIN} from "../providers/Constants";

@Injectable()
export class AuthService{
    constructor(private httpService:HttpService){

    }

    register(user){
        return this.httpService.post(PATH_USER_REGISTER,user);
    }

    login(credentials){
        return this.httpService.post(PATH_USER_LOGIN,credentials);
    }
}