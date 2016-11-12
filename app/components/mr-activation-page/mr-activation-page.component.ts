import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from "@angular/router";
import { slideIn } from '../../animations/page.animation';

@Component({
  selector: 'mr-activation-page',
  templateUrl: './mr-activation-page.component.html',
  styleUrls: ['./mr-activation-page.component.css'],
  host:{
    '[@slideIn]' : 'true'
  },
  animations : [slideIn]
})
export class MrActivationPageComponent implements OnInit {

   _curPath;

   tabs = [
    {
      label: "channel view",
      value : 98.44,
      path : "channel"
    },
    {
      label: "sales channel view",
      value : 98.44,
      path : "sales"
    },
    {
      label: "Geo view",
      value : 98.44,
      path : "geo"
    },
    {
      label: "device view",
      value : 98.44,
      path : "device"
    }

  ]

  selected; 
  lastSelected:number;


  constructor(private curRoute:ActivatedRoute, private router:Router) {
      
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
                    console.log(error);
                
                }
            }
     });
       
  }

  goToSelectedRoute(){
      
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

  ngDoCheck(){
        this.goToSelectedRoute()
  }

}
