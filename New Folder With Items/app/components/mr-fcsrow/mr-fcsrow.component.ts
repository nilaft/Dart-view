import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'mr-fcsrow',
  templateUrl: './mr-fcsrow.component.html',
  styleUrls: ['./mr-fcsrow.component.css']
})
export class MrFcsrowComponent implements OnInit {
  @Input('data') data;
  
  constructor() { }

  ngOnInit() {
  }

}
