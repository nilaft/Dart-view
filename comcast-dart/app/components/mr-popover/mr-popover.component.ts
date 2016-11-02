import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'mr-popover',
  templateUrl: './mr-popover.component.html',
  styleUrls: ['./mr-popover.component.css']
})
export class MrPopoverComponent implements OnInit {

  @ViewChild('arrow') arrowEle;

  constructor() { }

  ngOnInit() {
  }

}
