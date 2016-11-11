import { Component, OnInit , Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mr-scorecard-tabs',
  templateUrl: './mr-scorecard-tabs.component.html',
  styleUrls: ['./mr-scorecard-tabs.component.css']
})
export class MrScorecardTabsComponent implements OnInit {
  @Input('data') data;
  @Input('selected') selected:number;
  @Input('expanded') expandedViewEnabled:boolean = true;
  @Input('show-arrow') isShowArrow:boolean = false;
  @Input('can-deactivate') canDeactivate:boolean = true;
  
  @Output('selectedChange') selectedChange:EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  _onClicked(index){
    if(this.selected === index && this.canDeactivate){
      this.selected = undefined;
    }
    else{
      this.selected = index;
    }
    this.selectedChange.emit(this.selected);

  }
}
