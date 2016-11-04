import { Component, OnInit } from '@angular/core';
import {ActivationService} from '../../services/activation.service';

@Component({
  selector: 'mr-activation-geoview',
  templateUrl: './mr-activation-geoview.component.html',
  styleUrls: ['./mr-activation-geoview.component.css']
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

  constructor(private dataService:ActivationService) { }

  ngOnInit() {
    // this._fetchData(undefined);

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

