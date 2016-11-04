import { Component, OnInit, Input } from '@angular/core';
import {ActivationService} from '../../services/activation.service';
import {ActivationDataConverterService} from '../../services/activation-data-converter.service';

@Component({
  selector: 'mr-activation-journey',
  templateUrl: './mr-activation-journey.component.html',
  styleUrls: ['./mr-activation-journey.component.css']
})
export class MrActivationJourneyComponent implements OnInit {
   newFilter = {};
   curFilter = {};
   data:any = {};

   tableData:any = [];
   overallData:any = [];
    
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
        "label" : "Arris Controller Legacy",
        "key"   : "ARRIS CONTROLLER LEGACY"
      },
      {
        "label" : "Arris Controller X1",
        "key"   : "ARRIS CONTROLLER X1"
      }
  ];

  constructor(private dataService:ActivationService, private dataConverter:ActivationDataConverterService) { }

  ngOnInit() {
    this._fetchData();

  }

  ngOnChanges(changes){
      console.log(changes);
      if(changes.newFilter){
          console.log("HHHH");
         
      }
  }

  _fetchData(){
    
    var onComplete = (data)=>{
      this.data = data.results;
      this._generateData(this.data,this.newFilter);
      this.curFilter = JSON.parse(JSON.stringify(this.newFilter));
    };
    
    this.dataService.getActivationJourneyData(this.newFilter).subscribe(
          data =>  onComplete(data)
      );
  }

  _getCumulative (){
    return (this.data.cumulativeData || {})
  }

  _calculatePercentDiff(){
    return Math.round((this._getCumulative().againstSuccess-this._getCumulative().baseSuccess)*100)/100;
  }


  _keysIgnore = {
     "SIK":['cemp', 'direct', 'unknown', 'null', 'true', 'cafe360', 'hh', '$activationsourcemodel'],
     "TECH" :['direct', 'null'], // tech filters
     "TECH/SIK": ['online', 'unknown'] // tech/sik filters  
  };

  _generateData(data, filter){
      var rowLabels = ["SIK","TECH","TECH/SIK"];
      var colLabels = this.labelsArr;
      this.overallData = this.dataConverter._calculateColumn(data.overallData,colLabels,filter);
      this.tableData = this.dataConverter._calculateTableData(data, rowLabels, colLabels, filter, this._keysIgnore);
    
  }


}

