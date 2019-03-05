import { Injectable } from '@angular/core';
import {HttpService} from "../../providers/HttpService";
import {PATH_API} from "../../providers/Constants";

@Injectable()

export class HomeService{
    constructor(private httpService:HttpService){

    }

    getHomeInfo(){
        console.log(this.httpService);
        return this.httpService.get(PATH_API,{});
    }

}