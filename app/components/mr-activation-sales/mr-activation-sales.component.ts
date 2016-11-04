import { Component, OnInit, Input } from '@angular/core';
import {ActivationService} from '../../services/activation.service';

@Component({
  selector: 'mr-activation-sales',
  templateUrl: './mr-activation-sales.component.html',
  styleUrls: ['./mr-activation-sales.component.css']
})
export class MrActivationSalesComponent implements OnInit {

   newFilter = {};
   data:any;
   rowLabels = [".COM","ACSR/Vision","CTP"];
    
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
    
    this.dataService.getActivationSalesData(filter).subscribe(
          data =>  onComplete(data)
     );
  }


  onParamsChanged($event){
    this._fetchData($event);

  }


  
  

}

