import { Component, OnInit } from '@angular/core';
import { slideIn } from '../../animations/page.animation';

@Component({
  selector: 'mr-fakepage',
  templateUrl: './mr-fakepage.component.html',
  styleUrls: ['./mr-fakepage.component.css'],
  host:{
    '[@slideIn]' : 'true'
  },
  animations : [slideIn]
})
export class MrFakepageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
