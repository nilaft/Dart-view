import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mr-piegraph-with-legends',
  templateUrl: './mr-piegraph-with-legends.component.html',
  styleUrls: ['./mr-piegraph-with-legends.component.css']
})
export class MrPiegraphWithLegendsComponent implements OnInit {
  @Input() data;
  @Input() label;

  colorsList = ['#FD0400','#F67613','#F8C13B','#17971A','#2F9DF2','#7F4FE5','#214561','#DD3290','#AAAAAA'];

  constructor() { }

  ngOnInit() {


  }

}
