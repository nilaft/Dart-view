import { Component, OnInit , Input} from '@angular/core';
import { FilterService } from '../../services/filter.service'
import {UserauthenticationService} from "../../services/userauthentication.service";

declare var moment:any;

@Component({
  selector: 'mr-pdf-template',
  templateUrl: './mr-pdf-template.component.html',
  styleUrls: ['./mr-pdf-template.component.css']
})
export class MrPdfTemplateComponent implements OnInit {
  filter;
  year;
  date;
  username;


  @Input('title') title:string;
  constructor(private filterService:FilterService, private userService: UserauthenticationService) { }

  ngOnInit() {
      this.year = moment().format("YYYY")
      this.date = moment().format("MM/DD/YYYY")
      this.username = this.userService.userData.firstName + " " + this.userService.userData.lastName;
      this.filter = this.filterService.filter;
      
      
  }

}
