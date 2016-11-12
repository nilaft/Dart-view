import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'mr-loader-blink',
  templateUrl: './mr-loader-blink.component.html',
  styleUrls: ['./mr-loader-blink.component.css'],
  host:{
    '[class.is-animate]': 'show'
  }
})
export class MrLoaderBlinkComponent implements OnInit {
  @Input("show") show;
  
  constructor() { }

  ngOnInit() {
  }

}
