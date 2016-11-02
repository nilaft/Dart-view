import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

declare var moment: any;

@Component({
  selector: 'mr-filterbox',
  templateUrl: './mr-filterbox.component.html',
  styleUrls: ['./mr-filterbox.component.css']
})

export class MrFilterboxComponent implements OnInit {


  @Input() filter ;
  @Output() filterChange:EventEmitter<any> = new EventEmitter<any>();

  lastFilter = {};
  

  filterCategorys = [
    {
      label : "Daily",
      value : "Daily"
    },
    {
      label : "Monthly",
      value : "Monthly"
    },
    {
      label : "Yearly",
      value : "Yearly"
    }
  ];

  options = {};

  filterRange = [];

  constructor() { }

  ngOnInit() {
      this.filter = this.filter || {};      
      this.options = this._generateOptions()
  }

  _generateOptions(){
    var dayOptions = [], monthOptions = [], yearOptions = [];
    var today = moment();

    this.filter.category = this.filter.category || this.filterCategorys[1]

    // generate last few days
    for(var i=30; i >=0 ;i--){
        var newDate = moment(today).subtract(i, "days");
        var formatted = newDate.format("DD MMM");
        dayOptions.push({
            label : formatted,
            value : formatted
        });
    }

    // generate last few months
    for(var i=11; i >=0 ;i--){
        var newDate = moment(today).subtract(i, "month");
        var formatted = newDate.format("MMM YY");
        monthOptions.push({
            label : formatted,
            value : formatted
        });
    }

    // generate last few years
    for(var i=5; i >=0 ;i--){
        var newDate = moment(today).subtract(i, "year");
        var formatted = newDate.format("YYYY");
        yearOptions.push({
            label : formatted,
            value : formatted
        });
    }


    return {
        "Daily"   : dayOptions,
        "Monthly" : monthOptions,
        "Yearly"  : yearOptions

    }

  };


  ngDoCheck() {
      
      var cat = this.filter["category"].label;

      if(this.lastFilter["category"] === undefined || this.filter["category"].label !== this.lastFilter["category"].label){
          
          this.filterChange.emit(this.filter);
          
          if(cat !== undefined){
            var length         = this.options[cat].length;
            this.filter.range1 = this.options[cat][length-2];
            this.filter.range2 = this.options[cat][length-1];
            this.lastFilter    = JSON.parse(JSON.stringify(this.filter));
          }
          
      }

      if(this.options[cat].indexOf(this.filter.range1) > this.options[cat].indexOf(this.filter.range2)){
           var index = this.options[cat].indexOf(this.filter.range1);
           this.filter.range2 = this.options[cat][index];
      }
  }


  filterCategory(category){
      this.filter.category = category;

  }

  selectRange1(range1){
    this.filter.range1 = range1;
  }

  selectRange2(range2){
    this.filter.range2 = range2;
  }


  
  


}
