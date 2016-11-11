import { Component, OnInit, Input } from '@angular/core';

declare var d3:any;

@Component({
  selector: 'mr-piegraph-with-legends',
  templateUrl: './mr-piegraph-with-legends.component.html',
  styleUrls: ['./mr-piegraph-with-legends.component.css']
})
export class MrPiegraphWithLegendsComponent implements OnInit {
  @Input() data;
  @Input() label;

  colorsList = d3.range(20).map(d3.scale.category10()) ;

  constructor() { }

  ngOnInit() {

  }

}
