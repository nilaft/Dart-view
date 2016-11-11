import { Component, OnInit, EventEmitter} from '@angular/core';
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

  allCorps = [
    {
      label :"Florida Corp",
      value :"Florida Corp"

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
      this.filter.corp = this.allCorps[0];
      this.fetch();
      
    
  }

  ngOnChanges(changes){
      if(changes.curPageNo){
          this.fetch()
      }
  } 

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

  filterCorps(item){
      this.filter.corp = item;
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
