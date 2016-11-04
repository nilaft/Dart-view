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

  ngOnChanges(changes){

    if(changes.data && changes.data.currentValue){
        var input = changes.data.currentValue.againstSuccess + "";
        var inputArr = input.split('.');
        inputArr[1] =  inputArr[1] || "00";
        for(var i=0;i<2-inputArr[1].length;i++){
          inputArr[1] += '0';
        }

        this.mainVal = inputArr[0] + '.' + inputArr[1] + '%';

    }
  }

  _calculatePercentDiff(){
    if(this.data === undefined){
      return 0;
    }
    return Math.round((this.data.againstSuccess-this.data.baseSuccess)*100)/100;
  }

}
