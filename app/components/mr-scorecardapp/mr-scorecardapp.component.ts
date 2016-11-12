import { Component, OnInit } from '@angular/core';
import { FilterService } from '../../services/filter.service'
import { ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'mr-scorecardapp',
  templateUrl: './mr-scorecardapp.component.html',
  styleUrls: ['./mr-scorecardapp.component.css']
})
export class MrScorecardappComponent implements OnInit {
  filter = {};

  selected; lastSelected;
  _curPath;

  tabs = [
    {
      label: "provision",
      value : 98.44,
      path : "provision"
    },
    {
      label: "initiate",
      value : 98.44,
      path : "initiate"
    },
    {
      label: "authenticate",
      value : 98.44,
      path : "authenticate"
    },
    {
      label: "activate",
      value : 98.44,
      path : "activate"
    },
    {
      label: "customize",
      value : 98.44,
      path : "customize"
    }

  ]

  constructor(private filterService:FilterService, private curRoute:ActivatedRoute, private router:Router) {
      this.filter = filterService.filter; 
  }
  

  ngOnInit() {
      this.router.events.subscribe((path) => {
            if(this.curRoute.children.length !== 0){
                try {
                    var curPath = (this.curRoute.children[0].url as any).value[0].path;
                    this._curPath = curPath;
                    this.tabs.every((tab,index)=>{
                        if(tab.path === curPath){
                            this.selected = index;
                            return false;
                        }
                        return true;
                    });
                } catch (error) {
                    // console.log(error);
                
                }
            } 
     });

      
  }

  ngDoCheck(){
      if(this.selected !== this.lastSelected){

          this.lastSelected = this.selected;
           var newPath = '';
          if(this.selected !== undefined){
            newPath = this.tabs[this.selected].path;
          }

          if(newPath !== this._curPath){
            this._curPath = newPath;
            this.router.navigate([newPath], {relativeTo: this.curRoute});
          }
          
      }
  }
  
  onFilterChanged($event){

  }

}
