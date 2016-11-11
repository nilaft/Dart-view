import { Component, OnInit, Input , Output, EventEmitter, ViewChild} from '@angular/core';
import {ActivationDataConverterService} from '../../services/activation-data-converter.service';
import {FilterService} from '../../services/filter.service';
import {MrPdfExporterComponent} from '../mr-pdf-exporter/mr-pdf-exporter.component';
import {StickyheaderService} from '../../services/stickyheader.service';


@Component({
  selector: 'mr-scorecard-page',
  templateUrl: './mr-scorecard-page.component.html',
  styleUrls: ['./mr-scorecard-page.component.css']
})
export class MrScorecardPageComponent implements OnInit {
   @Input('data') data;
   @Input('col-labels') colLabels;
   @Input('row-labels') rowLabels;
   @Input('key-ignore') keysIgnore = {};


 
   @ViewChild('sticky') stickyRef;
   @ViewChild(MrPdfExporterComponent) pdfExporter: MrPdfExporterComponent;
   @ViewChild('container') container;

   @Output('change') paramsChanged:EventEmitter<any> = new EventEmitter<any>();;

   newFilter = {};
   curFilter = {};

   tableData:any = [];
   overallData:any = [];
    
  
  constructor(
          private dataConverter : ActivationDataConverterService,
          private filterService : FilterService,
          private stickyHeader  : StickyheaderService
      ) { }

  ngOnInit() {
      this.newFilter = this.filterService.filter;
  }


  
  ngOnChanges(changes){
    if(changes.data && changes.data.currentValue){
      this._generateData(changes.data.currentValue,this.newFilter);
      this.curFilter = JSON.parse(JSON.stringify(this.newFilter));
      requestAnimationFrame(()=>{
          this.stickyHeader.sticky(this.stickyRef.nativeElement);
      });
    } 
  }

  _exportToPdf(){
        this.pdfExporter.convert(this.container.nativeElement,'scorecard.pdf','#EEEEEE');
  }
  
  _generateData(data, filter){
      var rowLabels = this.rowLabels;
      var colLabels = this.colLabels;


      this.overallData = this.dataConverter._calculateColumn(data.overallData,colLabels,filter);
      this.tableData = this.dataConverter._calculateTableData(data, rowLabels, colLabels, filter, this.keysIgnore);
    
  }

  ngOnDestroy(){
     this.stickyHeader.remove(this.stickyRef.nativeElement);
  }


}

