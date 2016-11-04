import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class ActivationService {

  constructor(private http:Http) { }
  
  getActivationJourneyData(filter) : Observable<any>{
    return this.http.get('../../assets/json/actjourney.json')
          .map(res => res.json())
        
  }

  getActivationSalesData(filter) : Observable<any>{
    return this.http.get('../../assets/json/actsales.json')
          .map(res => res.json())
        
  }
  getActivationGeoData(filter) : Observable<any>{
    return this.http.get('../../assets/json/actgeo.json')
          .map(res => res.json())
        
  }

  getActivationDeviceData(filter) : Observable<any>{
    return this.http.get('../../assets/json/actdevice.json')
          .map(res => res.json())
        
  }

  getActivationRDK(filter) : Observable<any>{
    return this.http.get('../../assets/json/actrdk.json')
          .map(res => res.json())
        
  }
}
