import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'mr-scorecard-cell',
  templateUrl: './mr-scorecard-cell.component.html',
  styleUrls: ['./mr-scorecard-cell.component.css']
})
export class MrScorecardCellComponent implements OnInit {
  @Input('data') data;
  @Input('show-aaa') showAaa:Boolean = true;

  mainVal;
  
  constructor() { }

  ngOnInit() {

  }

  _calculatePercentDiff(){
    if(this.data === undefined){
      return 0;
    }
    return Math.round((this.data.againstSuccess-this.data.baseSuccess)*100)/100;
  }

}
