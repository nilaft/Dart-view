import { Component, OnInit } from '@angular/core';
import {ActivationService} from '../../services/activation.service';
import {FilterService} from '../../services/filter.service';
import { slideIn } from '../../animations/page.animation';

@Component({
  selector: 'mr-activation-geoview',
  templateUrl: './mr-activation-geoview.component.html',
  styleUrls: ['./mr-activation-geoview.component.css'],
  host:{
    '[@slideIn]' : 'true'
  },
  animations : [slideIn]
})
export class MrActivationGeoviewComponent implements OnInit {
   data:any;
   rowLabels = ["CENTRALDIVISION","WESTDIVISION","NORTHEASTDIVISION"];
    
   labelsArr = [
      {
        "label" : "Data",
        "key"   : "DATA"
      },
      {
        "label" : "Voice",
        "key"   : "VOICE"
      },
      {
        "label" : "UNKNOWN",
        "key"   : "UNKNOWN"
      }
  ];

  constructor(private dataService:ActivationService, private filterService:FilterService) { }

  ngOnInit() {
    // this.newFilter = this.filterService.filter;
    this._fetchData(this.filterService.filter);

  }

  _fetchData(filter){
    
    var onComplete = (data)=>{
      this.data = data.results;
    };
    
    this.dataService.getActivationGeoData(filter).subscribe(
          data =>  onComplete(data)
     );
  }


  onParamsChanged($event){
    this._fetchData($event);

  }

}

