import { Component, OnInit, EventEmitter, Input} from '@angular/core';
import {FCSService} from '../../services/fcs.service'

@Component({
  selector: 'mr-fcsdetail-page',
  templateUrl: './mr-fcsdetail-page.component.html',
  styleUrls: ['./mr-fcsdetail-page.component.css']
})
export class MrFcsdetailPageComponent implements OnInit {
  
  outputData ;
  filter:any = {};
  searchText = '';
  pagesList = [];
  curPageNo = 1;
  filteredCorps = [];

  allCorps = [
    {
      label :"Big South Region",
      value :"Big South Region",
      division : 'Central Division'

    },
    {
      label :"Freedom Market",
      value :"Freedom Market",
      division : 'Central Division'

    },
    {
      label :"Greater Chicago Market",
      value :"Greater Chicago Market",
      division : 'Central Division'

    },
    {
      label :"Heartland Region",
      value :"Heartland Region",
      division : 'Central Division'

    },
    {
      label :"Beltway Market",
      value :"Beltway Market",
      division : 'NorthEast Division'

    },
    {
      label :"Florida Region",
      value :"Florida Region",
      division : 'NorthEast Division'

    },
    {
      label :"Greater Boston Market",
      value :"Greater Boston Market",
      division : 'NorthEast Division'

    },
    {
      label :"Keystone Market",
      value :"Keystone Market",
      division : 'NorthEast Division'

    },
    {
      label :"Western New England Market",
      value :"Western New England Market",
      division : 'NorthEast Division'

    },
    {
      label :"California Market",
      value :"California Market",
      division : 'West Division'

    },
    {
      label :"Houston Market",
      value :"Houston Market",
      division : 'West Division'

    },
    {
      label :"Mile High Market",
      value :"Mile High Market",
      division : 'West Division'

    },
    {
      label :"Portland/Salem Market",
      value :"Portland/Salem Market",
      division : 'West Division'

    },
    {
      label :"Salt Lake City Market",
      value :"Salt Lake City Market",
      division : 'West Division'

    },
    {
      label :"Seattle Market",
      value :"Seattle Market",
      division : 'West Division'

    },
    {
      label :"Twin Cities Market",
      value :"Twin Cities Market",
      division : 'West Division'

    }


  ];

  allDivisions = [
    {
      label :"Central Division",
      value :"Central Division"
    },
    {
      label :"NorthEast Division",
      value :"NorthEast Division"
    },
    {
      label :"West Division",
      value :"West Division"
    }
  ];


  labels = {
    "trackingId"        : "TR ID",
    "accountNumber"     : "A/C #",
    "cmMacAddress"      : "MAC",
    "lastUpdatedDate"   : "LMD",
    "rdu"               : "RDU" ,
    "id"                : "ID",
    "action"            : "Action" ,
    "checkBlackList"    : "checkBlackList",
    "intendedCMTS"      : "Intended CMTS",
    "giAddress"         : "gi Address",
    "ipControlCmtsName" : "ip Control Cmts Name",
    "cmtsStatus"        : "CMTS Status",
    "headEndStatus"     : "Headend Status",
    "blackListStatus"   : "blackListStatus",
    "retryCount"        : "Retry Count",
    "creationDate"      : "Creation Date",
    "lastUpdatedBy"     : "Last Updated By",
    "createdBy"         : "Created By",
    "status"            : "Status",
    "giAddressSource"   : "gi Address Source"
    
  };


  _headerFields = ["trackingId", "accountNumber", "cmMacAddress", "lastUpdatedDate","rdu"];

  _detLeftFields = ["id","action","cmtsStatus", "headEndStatus","retryCount","creationDate","createdBy","lastUpdatedBy"];
  
  _detRightFields = ["giAddress", "ipControlCmtsName","intendedCMTS"];

  _btnFields = ["status", "cmtsStatus","headEndStatus","blackListStatus","checkBlackList"];


  constructor(private dataService:FCSService) { }


  ngOnInit() {
      this.setDivision(this.allDivisions[0]);
      this.fetch();
      
    
  }

  ngOnChanges(changes){
      if(changes.curPageNo){
          this.fetch()
      }

  } 

//   ngDoCheck

  fetch(){
      this.dataService.getFCSDetail({
          q : this.searchText,
          pageno : this.curPageNo

      }).subscribe(
          data =>  {
            this.outputData = this._formatData(data.results.results);
            this.pagesList = [];
            for(var i=1; i<= data.results.totalPages; i++){
                this.pagesList.push(i);
            }

            this.curPageNo = data.results.curPage;

            
          }
      );
  }

  setDivision(item){
      this.filter.division = item;
      this.generateCorps();
  }

  setCorp(item){
      this.filter.corp = item;
  }

  generateCorps(){
        var filteredCorps = []
        this.allCorps.forEach((corp)=>{
            if(corp.division === this.filter.division.value)
                filteredCorps.push(corp);
        });
        this.filteredCorps = filteredCorps;

        // set default division
        if(this.filteredCorps.indexOf(this.filter.division) === -1)
            this.setCorp(this.filteredCorps[0]);
  }


  _formatData(data){
    var output = [];
    for(var i=0; i < data.length; i++){
       var entry = data[i];
       var rowData:any = {
          detRightFields : [],
          detLeftFields : [],
          headerFields: [],
          btnFields : {}
       };
       output.push(rowData);

       for(var j=0; j < entry.length; j++){
            var fieldData = entry[j];
            fieldData.label = this.labels[fieldData.key]
            
            if(this._headerFields.indexOf(fieldData.key) > -1)
            {
                rowData.headerFields.push(fieldData);
            }

            if(this._detLeftFields.indexOf(fieldData.key) > -1)
            {
                rowData.detLeftFields.push(fieldData);
            }

            if(this._detRightFields.indexOf(fieldData.key) > -1)
            {
                rowData.detRightFields.push(fieldData);
            }


            if(this._btnFields.indexOf(fieldData.key) > -1)
            {
                rowData.btnFields[fieldData.key] = fieldData;
            }

           
       }
       
        

    }

    return output;
  }


  onSearch($event){
      this.curPageNo = 1;
      this.searchText = $event.target.value;
      this.fetch();
  }

}
