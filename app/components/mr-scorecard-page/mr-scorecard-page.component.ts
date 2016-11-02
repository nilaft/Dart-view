import { Component, OnInit, Input } from '@angular/core';
import {ScorecardActivationService} from '../../services/scorecard_activation.service';

@Component({
  selector: 'mr-scorecard-page',
  templateUrl: './mr-scorecard-page.component.html',
  styleUrls: ['./mr-scorecard-page.component.css']
})
export class MrScorecardPageComponent implements OnInit {

   summaryPercent = 33;
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

  constructor(private dataService:ScorecardActivationService) { }

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
      this._generateData(this.data,this.labelsArr,this.newFilter);
      this.curFilter = JSON.parse(JSON.stringify(this.newFilter));
    };
    
    this.dataService.getData(this.newFilter).subscribe(
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

  _generateData(data, colLabels, filter){

      // generate overall data
      function calculateColumn(data){
          var output = [];
          for(var i=0;i<colLabels.length;i++){
            var curKey = colLabels[i].key;
            var colEntry = data[curKey];
            if(colEntry !== undefined){
                colEntry.baseLabel = filter.range1.label;
                colEntry.againstLabel = filter.range2.label;
                colEntry.key = curKey;
            }
            output.push(colEntry);
          }
          return output;
      }

      this.overallData = calculateColumn(data.overallData);
      

      // generate table data 
      var tableData = [];
      var allData = data.data;
      var rowLabels = ["SIK","TECH","TECH/SIK"];

      for(var i=0; i < rowLabels.length ;i++){

          var rowLabel = rowLabels[i];
          var rowOutput= {} ;
          var rowData = allData[rowLabel];
          rowOutput['label'] = rowLabel ;
          rowOutput['aggMetrics'] = calculateColumn(rowData['aggMetrics']);
          rowOutput['metrics'] = [];

           for (var key in rowData.metrics) {
              if (rowData.metrics.hasOwnProperty(key)) {
                  var metricsEntry = rowData.metrics[key];

                  //ignore some keys
                  if(this._keysIgnore[rowLabel].indexOf(key.toLowerCase()) > -1)
                      continue;

                  var metricsOutput = {
                       label : key,
                       data : calculateColumn(metricsEntry)
                  };
                  rowOutput['metrics'].push(metricsOutput);
              }
           }

          tableData.push(rowOutput);
      }

      this.tableData = tableData;
  }

}

