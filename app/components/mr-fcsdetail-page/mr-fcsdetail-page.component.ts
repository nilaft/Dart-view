import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mr-fcsdetail-page',
  templateUrl: './mr-fcsdetail-page.component.html',
  styleUrls: ['./mr-fcsdetail-page.component.css']
})
export class MrFcsdetailPageComponent implements OnInit {
  
  outputData ;

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

  data =  {
      totalPages : 20,
      curPage : 1,
      results: [
        [
          {
            "key":"id",
            "value": "57c4cbc324a67b001dd3b592"
          },
          {
            "key":"trackingId",
            "value": "455655718"
          },
          {
            "key":"cmMacAddress",
            "value": "c4:27:95:50:85:01"
          },
          {
            "key":"accountNumber",
            "value": "8396600090721244"
          },
          {
            "key":"rdu",
            "value": "rdu03.g.comcast.net"
          },
          {
            "key":"action",
            "value": "START"
          },
          {
            "key":"checkBlackList",
            "value": "N"
          },
          {
            "key":"intendedCMTS",
            "value": "cbr02.lookoutrd.ar.lrock.comcast.net"
          },
          {
            "key":"giAddress",
            "value": "2001:0558:4062:0011:0000:0000:0000:0001"
          },
          {
            "key":"ipControlCmtsName",
            "value": "acr01.bartlett.ga.savannah.comcast.net"
          },
          {
            "key":"cmtsStatus",
            "value": "MISMATCH"
          },
          {
            "key":"headEndStatus",
            "value": "HeadEnd_MISMATCH"
          },
          {
            "key":"blackListStatus",
            "value": "IGNORE"
          },
          {
            "key":"retryCount",
            "value": "0"
          },
        
          {
            "key":"creationDate",
            "value": "2016-08-29T23:56:50.963Z"
          },
          {
            "key":"createdBy",
            "value": "PS"
          },
          {
            "key":"lastUpdatedDate",
            "value": "2016-08-29T23:56:51.580"
          },
          {
            "key":"lastUpdatedBy",
            "value": "PS"
          },
          {
            "key":"status",
            "value": "COMPLETED"
          },
          {
            "key":"giAddressSource",
            "value": "NETREC"
          }
        ]
      ]
  };

  _headerFields = ["trackingId", "accountNumber", "cmMacAddress", "lastUpdatedDate","rdu"];

  _detLeftFields = ["id","action","cmtsStatus", "headEndStatus","retryCount","creationDate","createdBy","lastUpdatedBy"];
  
  _detRightFields = ["giAddress", "ipControlCmtsName","intendedCMTS"];

  _btnFields = ["status", "cmtsStatus","headEndStatus","blackListStatus","checkBlackList"];


  constructor() { }


  ngOnInit() {

    this.outputData = this._formatData(this.data.results);
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

}
