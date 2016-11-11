import { Injectable } from '@angular/core';
import { ActivatedRoute, Router} from "@angular/router";
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';




@Injectable()
export class ScorecardTabRouteService {
  mainRoute:string = '';
  subRoute:string = '';
  _observable = new Subject<any>();
  _lastpath:any;

  routeChanged = new Subject<any>();
  
  constructor(private router:Router) {
     this.router.events.subscribe((path) => {
            this._lastpath = path.url;
            console.log(this._lastpath);
            this.routeChanged.next(path);
     });

     this._observable.debounceTime(50).subscribe(()=>{
          this._updateRoute();
     })
   }

   update(){
       this._observable.next(new Date().getTime());
   }

   _updateRoute(){
      var path = `scorecard/${this.mainRoute}/${this.subRoute}`;
      // if(this._lastpath === path)
      //       return;

      this.router.navigate([path]);
   }

}
