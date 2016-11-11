import { Component, OnInit, ViewChild } from '@angular/core';
import {ActivationService} from '../../services/activation.service';
import {ActivationDataConverterService} from '../../services/activation-data-converter.service';
import {FilterService} from '../../services/filter.service';
import {StickyheaderService} from '../../services/stickyheader.service';
import { slideIn } from '../../animations/page.animation';

@Component({
  selector: 'mr-activation-deviceview',
  templateUrl: './mr-activation-deviceview.component.html',
  styleUrls: ['../mr-scorecard-page/mr-scorecard-page.component.css',
        '../mr-scorecard-row/mr-scorecard-row.component.css',
        './mr-activation-deviceview.component.css'],
  host:{
    '[@slideIn]' : 'true'
  },
  animations : [slideIn]
})
export class MrActivationDeviceviewComponent implements OnInit {
   data:any;
   overallData;
   tableData;
   deviceData = [];
   newFilter = {};
   devicefetchRequest;
   rdkfetchRequest;
   rdkData;

   keysIgnore = {

   };

   @ViewChild('sticky') stickyRef;

    
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

  rdkColLables = [
      {
        "label" : "RDK-B Data",
        "key"   : "RDK-BDATA"
      },
      {
        "label" : "RDK-B Voice",
        "key"   : "RDK-BVOICE"
      },
      {
        "label" : "RDK-B Data & Voice",
        "key"   : "RDK-BDATA&VOICE"
      }
  ];

  rdkRowLabels = [
      {
         "label" :"RDK-B Success / Total RDK-B Attempts", 
         "value" :"SUCCESS"
      },
      {
        "label" : "RDK-B Attempts / Total (RDK-B + Non RDK-B) Attempts",
        "value" :"ATTEMPTS"
      }
  ];

  deviceHdrLabels = [
      "Device Type", "TOP Devices by Volume"

  ];

  constructor(
        private dataService:ActivationService, 
        private dataConverter:ActivationDataConverterService, 
        private filterService:FilterService,
        private stickyHeader  : StickyheaderService) { }

  ngOnInit() {
    this.newFilter = this.filterService.filter
    this._fetchData();

  }

  _fetchData(){
    
    if(this.devicefetchRequest){
        this.devicefetchRequest.unsubscribe();
    }

    this.devicefetchRequest = this.dataService.getActivationDeviceData(this.newFilter).subscribe(
          data =>  {
            this.data = data.results;
            this._generateDeviceData(this.data,this.newFilter)
            requestAnimationFrame(()=>{
              this.stickyHeader.sticky(this.stickyRef.nativeElement);
            });
    } );

    if(this.rdkfetchRequest){
        this.rdkfetchRequest.unsubscribe();
    }

    this.rdkfetchRequest = this.dataService.getActivationRDK(this.newFilter).subscribe(
          data =>  {
            this.data = data.results;
            this._generateRDKData(this.data,this.newFilter)
    } );
  }



  _generateDeviceData(data, filter){
      var rowLabels = undefined;
      var colLabels = this.colLabels;

      this.overallData = this.dataConverter._calculateColumn(data.overallData,colLabels,filter);

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


      this.overallData = this.dataConverter._calculateColumn(data.overallData,colLabels,filter);
    
  }

  _generateRDKData(data, filter){
      var inputData = data.data;
      var rdkData = [];
      this.rdkRowLabels.forEach((rowLabel)=> {
          var rowdata = inputData[rowLabel.value];
          var cols = []
          this.rdkColLables.forEach((colLabel)=>{
              cols.push(rowdata[colLabel.key])
          });
          rdkData.push({
              label : rowLabel.label,
              cols : cols
          });
          
      });

      this.rdkData = rdkData;
  }

  onFilterChanged($event){

  }

  _calculatePercentDiff(data){
      if(data === undefined){
      return 0;
    }
    return Math.round((data.againstSuccess-data.baseSuccess)*100)/100;

  }

  ngOnDestroy(){
    this.devicefetchRequest.unsubscribe();
    this.rdkfetchRequest.unsubscribe();
    this.stickyHeader.remove(this.stickyRef.nativeElement);
  }

}


