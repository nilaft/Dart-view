import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'mr-scorecard-row',
  templateUrl: './mr-scorecard-row.component.html',
  styleUrls: ['./mr-scorecard-row.component.css']
})
export class MrScorecardRowComponent implements OnInit {
  @Input('label') label;
  @Input('data') data;
  @Input('highlight') highlight:boolean = false;
  @Input('show-aaa') showAaa:boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
