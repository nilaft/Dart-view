import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mr-number-formatter',
  templateUrl: './mr-number-formatter.component.html',
  styleUrls: ['./mr-number-formatter.component.css']
})
export class MrNumberFormatterComponent implements OnInit {
  @Input() input;

  formatted = '';
  commaWidth = 3;
  calculatedAmount = {};


  constructor() { }

  ngOnInit() {
  }

  _calculate(amount){
          var decimalIndex, formattedAmount, i, j, newVal, ref, ref1;
          
          if (typeof amount === "number") {
            amount = amount + '';
          }

          if (!((ref = typeof amount) === "string") || amount.trim() === "") {
            // console.log("Number is not in valid format");
            this._calculate("0.0");
            return;
          }

          

          decimalIndex = amount.indexOf('.');

          newVal = {};

          if (decimalIndex === -1) {
            newVal = {
              amount: amount,
              decimal: '00'
            };
          } else {
            newVal = {
              amount: amount.substr(0, decimalIndex),
              decimal: amount.substr(decimalIndex + 1, 2)
            };
          }


          /* COMMAS */

          formattedAmount = "";

          newVal.amount = newVal.amount.replace(/[,]+/g, '');

          for (i = j = 0, ref1 = newVal.amount.length; 0 <= ref1 ? j < ref1 : j > ref1; i = 0 <= ref1 ? ++j : --j) {
            if (i >= 3 && (i - 3) % this.commaWidth === 0) {
              formattedAmount = "," + formattedAmount;
            }
            formattedAmount = newVal.amount[newVal.amount.length - 1 - i] + formattedAmount;
          }

          newVal.amount = formattedAmount;


          /* Set Value */

          this.calculatedAmount = newVal;
          
          if(newVal.decimal == "00"){
              this.formatted =  newVal.amount;
          }
          else
            this.formatted =  newVal.amount + "." + newVal.decimal;
  }


  ngOnChanges(changes) {
      if(changes.input){
          var amount = changes.input.currentValue;
          this._calculate(amount);
      }
  }

}
