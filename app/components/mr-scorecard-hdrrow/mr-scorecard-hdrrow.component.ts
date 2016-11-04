import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'mr-scorecard-hdrrow',
  templateUrl: './mr-scorecard-hdrrow.component.html',
  styleUrls: ['./mr-scorecard-hdrrow.component.css']
})
export class MrScorecardHdrrowComponent implements OnInit {
  @Input('label') label;
  @Input('data') data;

  labelArr;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes){
      if(changes.label){
           this.labelArr = (typeof(changes.label.currentValue) !== "string")? this.label : [changes.label.currentValue];
      }
  }

}
