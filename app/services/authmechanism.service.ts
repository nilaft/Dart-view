import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class AuthMechanismService {

  constructor(private http:Http) { }
  
  getFailureReasons(filter) : Observable<any>{
    return this.http.get('../../assets/json/authfailures.json')
          .map(res => res.json())
        
  }

  getData(filter) : Observable<any>{
  return this.http.get('../../assets/json/authdatamatric.json')
          .map(res => res.json())
        
  }
}
