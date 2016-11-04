import { Component, NgModule  , ViewEncapsulation} from '@angular/core';
import {Http, Headers} from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})

export class AppComponent {
  
  tab  = 4;
  
  constructor(private http: Http){
  };

  
}

