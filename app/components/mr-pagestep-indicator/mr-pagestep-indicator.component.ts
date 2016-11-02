import { Component, OnInit, Input ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'mr-pagestep-indicator',
  templateUrl: './mr-pagestep-indicator.component.html',
  styleUrls: ['./mr-pagestep-indicator.component.css']
})
export class MrPagestepIndicatorComponent implements OnInit {
  @Input() labels;
  @Input() pageindex;
  
  @Output() pageindexChange:EventEmitter<number> = new EventEmitter<number>();

  listArr = [];
  
  constructor() { }

  ngOnInit() { 
    this.pageindex = this.pageindex || 2
  }

  ngDoCheck(){
      var self = this;
      setTimeout(function(){
        self.pageindexChange.emit(this.pageindex);
      });
      
  }

  isBtnActive(a,b){
      return a<=b?true:false;
  }


}
