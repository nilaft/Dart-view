import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

declare var moment: any;

var compareObjects = function(o1, o2){
    for(var p in o1){
        if(o1.hasOwnProperty(p)){
            if(o1[p] !== o2[p]){
                return false;
            }
        }
    }
    for(var p in o2){
        if(o2.hasOwnProperty(p)){
            if(o1[p] !== o2[p]){
                return false;
            }
        }
    }
    return true;
};

function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};


@Component({
  selector: 'mr-filterbox',
  templateUrl: './mr-filterbox.component.html',
  styleUrls: ['./mr-filterbox.component.css']
})

export class MrFilterboxComponent implements OnInit {


  @Input() filter ;
  @Output('change') filterChanged:EventEmitter<any> = new EventEmitter<any>();

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
            value : formatted,
            date : newDate.format("YYYY-MM-DD")
        });
    }

    // generate last few months
    for(var i=11; i >=0 ;i--){
        var newDate = moment(today).subtract(i, "month");
        var formatted = newDate.format("MMM YY");
        monthOptions.push({
            label : formatted,
            value : formatted,
            date : newDate.format("YYYY-MM-DD")
        });
    }

    // generate last few years
    for(var i=5; i >=0 ;i--){
        var newDate = moment(today).subtract(i, "year");
        var formatted = newDate.format("YYYY");
        yearOptions.push({
            label : formatted,
            value : formatted,
            date : newDate.format("YYYY-MM-DD")
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
      var isFilterChanged = false;

      if(compareObjects(this.filter,this.lastFilter) === false){
          isFilterChanged = true;
      }

      if(this.lastFilter["category"] === undefined || this.filter["category"].label !== this.lastFilter["category"].label){
          
          
          if(cat !== undefined){
            var length         = this.options[cat].length;
            this.filter.range1 = this.options[cat][length-2];
            this.filter.range2 = this.options[cat][length-1];
          }
          
      }

      if(this.options[cat].indexOf(this.filter.range1) > this.options[cat].indexOf(this.filter.range2)){
           var index = this.options[cat].indexOf(this.filter.range1);
           this.filter.range2 = this.options[cat][index];
      }
      
      var self = this;
      var emitChange = function(){
            self.filterChanged.emit(self.filter);
      }

     
      if(isFilterChanged){
          debounce(emitChange,300,undefined)();

          var lastFilter = {};
          for(var p in this.filter){
            if(this.filter.hasOwnProperty(p)){
                lastFilter[p] = this.filter[p];
            }
         }
         this.lastFilter = lastFilter;
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
