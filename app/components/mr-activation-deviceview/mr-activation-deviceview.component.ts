import { Component, OnInit } from '@angular/core';
import {ActivationService} from '../../services/activation.service';
import {ActivationDataConverterService} from '../../services/activation-data-converter.service';


@Component({
  selector: 'mr-activation-deviceview',
  templateUrl: './mr-activation-deviceview.component.html',
  styleUrls: ['../mr-scorecard-page/mr-scorecard-page.component.css',
        '../mr-scorecard-row/mr-scorecard-row.component.css',
        './mr-activation-deviceview.component.css']
})
export class MrActivationDeviceviewComponent implements OnInit {
   data:any;
   overallData;
   tableData;
   deviceData = [];
   newFilter = {};

   keysIgnore = {

   };

    
   colLabels = [
      {
        "label" : "Data",
        "key"   : "DATA"
      },
      {
        "label" : "Voice",
        "key"   : "VOICE"
      }
  ];

  deviceHdrLabels = [
      "Device Type", "TOP Devices by Volume"

  ];

  constructor(private dataService:ActivationService, private dataConverter:ActivationDataConverterService) { }

  ngOnInit() {
    this._fetchData();

  }

  _fetchData(){
    
    var onComplete = (data)=>{
      this.data = data.results;
      console.log(this.data);
      var obj = this.data.data;

      this._generateData(this.data,this.newFilter)
    };
    
    this.dataService.getActivationDeviceData(this.newFilter).subscribe(
          data =>  onComplete(data)
     );
  }



  _generateData(data, filter){
      var rowLabels = undefined;
      var colLabels = this.colLabels;

      this.overallData = this.dataConverter._calculateColumn(data.overallData,colLabels,filter);
      // this.tableData = this.dataConverter._calculateTableData(data, rowLabels, colLabels, filter, this.keysIgnore);

      var tableData = data.data;
      this.deviceData = [];
      for (var key in tableData) {
          if (tableData.hasOwnProperty(key)) {
              var cols = this.dataConverter._calculateColumn(tableData[key],colLabels,filter);
              var labels = key.split('::');
              this.deviceData.push({
                 type : labels[0],
                 device : labels[1],
                 cols :cols
              });
          }
          
      }

      console.log(this.deviceData);

      this.overallData = this.dataConverter._calculateColumn(data.overallData,colLabels,filter);
    
  }

  onFilterChanged($event){

  }

}


