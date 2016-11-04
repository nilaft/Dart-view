import { Component, OnInit, Input , Output, EventEmitter, ViewEncapsulation} from '@angular/core';
import {ActivationDataConverterService} from '../../services/activation-data-converter.service';


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

   @Output('change') paramsChanged:EventEmitter<any> = new EventEmitter<any>();;

   newFilter = {};
   curFilter = {};

   tableData:any = [];
   overallData:any = [];
    
  
  constructor(private dataConverter:ActivationDataConverterService) { }

  ngOnInit() {

  }


  
  ngOnChanges(changes){
    if(changes.data && changes.data.currentValue){
      this._generateData(changes.data.currentValue,this.newFilter);
      this.curFilter = JSON.parse(JSON.stringify(this.newFilter));
    }

    
  }
  
  _generateData(data, filter){
      var rowLabels = this.rowLabels;
      var colLabels = this.colLabels;


      this.overallData = this.dataConverter._calculateColumn(data.overallData,colLabels,filter);
      this.tableData = this.dataConverter._calculateTableData(data, rowLabels, colLabels, filter, this.keysIgnore);
    
  }

  onFilterChanged($event){
      this.paramsChanged.emit(this.newFilter);
  }


}

