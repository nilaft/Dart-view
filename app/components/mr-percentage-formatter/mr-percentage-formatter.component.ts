import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mr-percentage-formatter',
  templateUrl: './mr-percentage-formatter.component.html',
  styleUrls: ['./mr-percentage-formatter.component.css']
})
export class MrPercentageFormatterComponent implements OnInit {
  @Input('input') input;
  output;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    this.output = this._calculate(this.input);
  }

  _calculate(inputVal){
        var input = Math.round(parseFloat(inputVal)*10)/10 + "";
        var inputArr = input.split('.');
        inputArr[1] =  inputArr[1] || "00";
        for(var i=0;i<2-inputArr[1].length;i++){
          inputArr[1] += '0';
        }

        return inputArr[0] + '.' + inputArr[1][0] + '%';
  }

        

}
