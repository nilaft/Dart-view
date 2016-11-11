import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class UserauthenticationService {

  constructor(private http:Http) { }
  userData;
  
  getUser() : Promise<any>{
    return new Promise((resolve,reject) =>{
        if(this.userData){
            resolve(this.userData);
        }
       else{
          this.http.get('/assets/json/user.json')
            .map(res => res.json())
            .subscribe((data)=>{
                this.userData = data.results;
                resolve(this.userData);
            }, (error) =>{
                reject(error);
          });
       }

    });
        
  }

}

