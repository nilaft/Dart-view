import { Component, OnInit, Input, ViewChild } from '@angular/core';
import {ActivationService} from '../../services/activation.service';
import {ActivationDataConverterService} from '../../services/activation-data-converter.service';
import {FilterService} from '../../services/filter.service';
import {StickyheaderService} from '../../services/stickyheader.service';
import { slideIn } from '../../animations/page.animation';
import {MrPdfExporterComponent} from '../mr-pdf-exporter/mr-pdf-exporter.component';


@Component({
  selector: 'mr-activation-journey',
  templateUrl: './mr-activation-journey.component.html',
  styleUrls: ['./mr-activation-journey.component.css'],
  host:{
    '(@slideIn.start)': 'pageEnterStarted($event)',
    '(@slideIn.done)': 'pageEnterCompleted($event)',
    '[@slideIn]' : 'true'
  },
  animations : [slideIn]
})
export class MrActivationJourneyComponent implements OnInit {
   data:any = {};
   tableData:any = [];
   overallData:any = [];
   filter = {};
   fetchRequest;
   
   @ViewChild('sticky') stickyRef;
   @ViewChild(MrPdfExporterComponent) pdfExporter: MrPdfExporterComponent;
   @ViewChild('container') container;

    
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

  pageEnterStarted() {
    // console.log("start")
     }
  pageEnterCompleted() {
      // console.log("Complete")
     }

  constructor(private dataService : ActivationService, 
            private dataConverter : ActivationDataConverterService, 
            private filterService : FilterService,
            private stickyHeader  : StickyheaderService) {
      this.filter = filterService.filter;
   }

  ngOnInit() {
    this._fetchData();

  }

  ngAfterViewInit(){
      
  }

  _exportToPdf(){
        this.pdfExporter.convert(this.container.nativeElement,'activationchannel.pdf','#EEEEEE');
  }

  _fetchData(){
    
    var onComplete = (data)=>{
      this.data = data.results;
      this._generateData(this.data,this.filter);
      requestAnimationFrame(()=>{
          this.stickyHeader.sticky(this.stickyRef.nativeElement);
      });
    };
    
    if(this.fetchRequest){
        this.fetchRequest.unsubscribe();
    }

    this.fetchRequest = this.dataService.getActivationJourneyData(this.filter).subscribe(
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

  ngOnDestroy(){
     this.fetchRequest.unsubscribe();
     this.stickyHeader.remove(this.stickyRef.nativeElement);
  }

}

