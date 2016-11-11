import { Component, OnInit, Input } from '@angular/core';
import {ActivationService} from '../../services/activation.service';
import {FilterService} from '../../services/filter.service';
import { slideIn } from '../../animations/page.animation';

@Component({
  selector: 'mr-activation-sales',
  templateUrl: './mr-activation-sales.component.html',
  styleUrls: ['./mr-activation-sales.component.css'],
  host:{
    '[@slideIn]' : 'true'
  },
  animations : [slideIn]
})
export class MrActivationSalesComponent implements OnInit {

   filter;
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

  constructor(private dataService:ActivationService, private filterService:FilterService) { 
      
  }

  ngOnInit() {
    this.filter = this.filterService.filter;
    this._fetchData(this.filter);

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

