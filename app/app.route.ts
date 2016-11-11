import {Injectable} from "@angular/core";
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";

import {UserauthenticationService} from "./services/userauthentication.service";

import {MrScorecardappComponent} from "./components/mr-scorecardapp/mr-scorecardapp.component";
import { MrActivationPageComponent } from './components/mr-activation-page/mr-activation-page.component';
import { MrAuthmechanismPageComponent } from './components/mr-authmechanism-page/mr-authmechanism-page.component';
import { MrActivationJourneyComponent } from './components/mr-activation-journey/mr-activation-journey.component';
import { MrActivationSalesComponent } from './components/mr-activation-sales/mr-activation-sales.component';
import { MrActivationGeoviewComponent } from './components/mr-activation-geoview/mr-activation-geoview.component';
import { MrActivationDeviceviewComponent } from './components/mr-activation-deviceview/mr-activation-deviceview.component';

import { MrFakepageComponent } from './components/mr-fakepage/mr-fakepage.component';

import { MrFcsdetailPageComponent } from './components/mr-fcsdetail-page/mr-fcsdetail-page.component';
import { MrFcssummaryPageComponent } from './components/mr-fcssummary-page/mr-fcssummary-page.component';


// Check is logged in
@Injectable()
export class AuthenticationChecker implements CanActivate {

  constructor(private authService: UserauthenticationService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

      var isRouteAllowed = false;

      function calculateRole(route,rolesArr){
         
          if(route.data.roles !== undefined){
              var r = rolesArr;
              route.data.roles.forEach(function(i) { if (r.indexOf(i) < 0) r.push(i); });
          }

          for(var i=0;i<route.children.length;i++){
              calculateRole(route.children[i],rolesArr);
          }
      };
      
      var rolesArr:Array<string> = [];
      calculateRole(route,rolesArr);

      return new Promise((resolve) => {
         this.authService.getUser().then((data)=>{

             // Check user roles
             var usersRoles = data['userPages'].split(',');
             if(rolesArr.length>0){
                for(var i=0; i < rolesArr.length; i++){
                    var neededRole = rolesArr[i];
                    if(usersRoles.indexOf(neededRole) !== -1)
                    {
                        isRouteAllowed = true;
                        break;
                    }
                } 
             }
             else
                isRouteAllowed = true;
             
             
             resolve(isRouteAllowed);

        }).catch((ex)=>{
            // Change to login state on error
            // this.router.navigate(['/login']);
            // this.authService.redirectUrl = state.url;
            window.location.href = "/login";
            return false;
        });
    });
  }
}

export const ActivationRoutes = [
    { 
        path: '',
        redirectTo:'channel'
    },
    { 
        path: 'channel', 
        component: MrActivationJourneyComponent,
        data: { roles: ['dashboard.activation-journey'] }
    },
    {
        path: 'sales', 
        component: MrActivationSalesComponent,
        data: { roles: ['dashboard.sales-channel'] }
    },
    {
        path: 'geo', 
        component: MrActivationGeoviewComponent,
        data: { roles: ['dashboard.geographic-view'] }
    },
    {
        path: 'device', 
        component: MrActivationDeviceviewComponent,
        data: { roles: ['dashboard.top-devices-type'] }
    }
]

export const ScorecardRoutes = [
    {
        path : ''
    },
    { 
        path: 'provision', 
        component: MrFakepageComponent,
    },
    { 
        path: 'initiate', 
        component: MrFakepageComponent,
    },
    {
        path: 'authenticate', 
        component: MrAuthmechanismPageComponent
    },
    { 
        path: 'activate', 
        component: MrActivationPageComponent,
        children : ActivationRoutes,
    },
    {
        path: 'customize', 
        component: MrFakepageComponent
    }
]


export const FCSRoutes = [
     { 
        path: '', 
        component: MrFcssummaryPageComponent 
    },
    {
        path: 'detail', 
        component: MrFcsdetailPageComponent
    }
]


export const AppRoutes = [
  { 
      path: '', 
      canActivate: [AuthenticationChecker],
      children: [
          {
              path : '',
              redirectTo: 'scorecard'
          },
          {
              path : 'scorecard',
              component : MrScorecardappComponent,
              children : ScorecardRoutes
          },
          {
              path : 'fcs',
              children : FCSRoutes
          }
         

      ]
  }
];



