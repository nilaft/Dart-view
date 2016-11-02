import { Component, OnInit, Input , OnChanges} from '@angular/core';

@Component({
  selector: 'mr-percent-view',
  templateUrl: './mr-percent-view.component.html',
  styleUrls: ['./mr-percent-view.component.css']
})

export class MrPercentViewComponent implements OnInit {
  
  @Input() value;
  valueFormatted;
  
  isPositive:Boolean;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes) {
      if(changes.value){
          if(changes.value.currentValue >= 0){
              this.isPositive = true;
          }else{
              this.isPositive = false;
          }

          this.valueFormatted = Math.abs(changes.value.currentValue);
         
      }
  }

}
