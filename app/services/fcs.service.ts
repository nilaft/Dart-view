import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class FCSService {

   constructor(private http:Http) { }
   
   getFCSDetail(filter) : Observable<any>{
      var queryString = "?"
      for(var p in filter){
          if(filter.hasOwnProperty(p)){
              queryString += `${p}=${filter[p]}&`;
          }
        }
      return this.http.get('/assets/json/fcsdetail.json'+queryString)
          .map(res => res.json())
        
  }
}
