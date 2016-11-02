import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class ScorecardActivationService {

  constructor(private http:Http) { }
  
  getData(filter) : Observable<any>{
    return this.http.get('../../assets/json/actchannelview.json')
          .map(res => res.json())
        
  }
}
