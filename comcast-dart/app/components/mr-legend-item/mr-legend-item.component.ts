import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mr-legend-item',
  templateUrl: './mr-legend-item.component.html',
  styleUrls: ['./mr-legend-item.component.css']
})
export class MrLegendItemComponent implements OnInit {
  @Input() imgUrl;
  @Input() status="success";
  
  colors: Object = {
    "success" : "rgb(164,215,169)",
    "partial" : "rgb(164,215,169)",
    "failed" : "rgb(164,215,169)"
  }
  
  constructor() { }

  ngOnInit() {
  }

}
