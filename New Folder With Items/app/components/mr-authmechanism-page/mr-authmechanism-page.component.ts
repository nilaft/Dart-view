import { Component, OnInit, ViewChild , Input,ChangeDetectionStrategy} from '@angular/core';
import {AuthMechanismService} from '../../services/authmechanism.service';

import {MrPdfExporterComponent} from '../mr-pdf-exporter/mr-pdf-exporter.component';

@Component({
  selector: 'mr-authmechanism-page',
  templateUrl: './mr-authmechanism-page.component.html',
  styleUrls: ['./mr-authmechanism-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
  
})


export class MrAuthmechanismPageComponent implements OnInit {
    @ViewChild(MrPdfExporterComponent) pdfExporter: MrPdfExporterComponent;
    @ViewChild('authContainer') authContainer;

    failuresReasonsData;
    data;
    pieSummaryBase;
    pieSummaryAgainst;
    
    calculatedFailureReasons:any = {};


     pageLabels = [
       "provision","initiate","authencate","activate","customize"
     ]
  
  

    toolsList = [
        {
            value : "ONLINE (CAAP)",
            label : "ONLINE (CAAP)",
            short : "CAAP"
        },
        {
            value : "ONLINE (SUSI)",
            label : "ONLINE (SUSI)",
            short : "SUSI"
        }
    ];

    entities = [
        {
          label : "ACCOUNT NO/TN/ADDR",
          value : "ACCOUNT NO/TN"
        },
        {
          label : "UID/PASSWORD",
          value : "UID/PASSWORD"
        },
        {
          label : "SMS VERIFICATION",
          value : "SMS VERIFICATION"
        }
    ];

   

    selectedFilter = {
    
    };

   

    constructor(private dataService:AuthMechanismService) { }

    ngOnInit(){
        this._fetchData();
    }

    ngOnChanges(changes) {
      
    }

   _generateFailureReasons(){
        this.calculatedFailureReasons.CAAP_Base = this._getFailuresData('CAAP','baseFailureCount');
        this.calculatedFailureReasons.CAAP_Against = this._getFailuresData('CAAP','againstFailureCount');
        this.calculatedFailureReasons.SUSI_Base = this._getFailuresData('SUSI','baseFailureCount');
        this.calculatedFailureReasons.SUSI_Against = this._getFailuresData('SUSI','againstFailureCount');
   }

   _fetchData(){
        var onComplete = (data)=>{
            this.data = data.results;
            this._getSummaryData(this.data);
            // this.curFilter = JSON.parse(JSON.stringify(this.newFilter));
        };
        
        this.dataService.getData(this.selectedFilter).subscribe(
            data =>  onComplete(data)
        );


        this.dataService.getFailureReasons(this.selectedFilter).subscribe(
            data =>{
                this.failuresReasonsData = data.results;
                this._generateFailureReasons();

            }
        );
    }

   _exportToPdf(){
        this.pdfExporter.convert(this.authContainer.nativeElement,'authmechanism.pdf','#EEEEEE');
    }

    _getData (category,key) {
        if(this.data == undefined){
          return {}
        }

        return this.data.data[category][key]
    }


    _getSummaryData(summaryData){
        var data = summaryData.data;

        var calculateSum = (category,key)=>{
            var p = data[category];
            var sum = 0;

            for(var k in p){
                if (p.hasOwnProperty(k)) {
                    sum += p[k][key];
                }
            }   
            return sum;         
        }

        this.pieSummaryAgainst = [];
        for(var i=0; i < this.toolsList.length; i++){
            var category = this.toolsList[i];
            var total = calculateSum(category.value,'againstAttempts');
            var success = calculateSum(category.value,'againstSuccessfulAttempts');
            var failure  = total - success ;

            this.pieSummaryAgainst.push({
                label : `${category.short} Success`,
                value : success
            });

            this.pieSummaryAgainst.push({
                label : `${category.short} Failure`,
                value : failure
            });
        }

        this.pieSummaryBase = [];
        for(var i=0; i < this.toolsList.length; i++){
            var category = this.toolsList[i];
            var total = calculateSum(category.value,'baseAttempts');
            var success = calculateSum(category.value,'baseSuccessfulAttempts');
            var failure  = total - success ;

            this.pieSummaryBase.push({
                label : `${category.short} Success`,
                value : success
            });

            this.pieSummaryBase.push({
                label : `${category.short} Failure`,
                value : failure
            });

        }
    }

    _getFailuresData(category,key){
      
        var p = this.failuresReasonsData.data[category];
        var results = [];

        // loop through category and generate array for pie
        for (var k in p) {
          if (p.hasOwnProperty(k)) {
            results.push({
                value : p[k][key],
                label : k 
            });
          }
        }

        results = results.sort(function(a, b) {
            return b.value - a.value;
        }).slice(0, 5);


        return results;
    }
    
}
