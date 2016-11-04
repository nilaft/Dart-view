import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'mr-row-bookmark',
  templateUrl: './mr-row-bookmark.component.html',
  styleUrls: ['./mr-row-bookmark.component.css']
})
export class MrRowBookmarkComponent implements OnInit {

  @Input() label;
  @Input() bgcolor;

  constructor() { }

  ngOnInit() {
  }

}
