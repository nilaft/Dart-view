import { Injectable } from '@angular/core';


@Injectable()
export class ActivationDataConverterService {

  constructor() { }


  _calculateColumn(data, colLabels,filter){
          var output = [];
          for(var i=0;i<colLabels.length;i++){
            var curKey = colLabels[i].key;
            var colEntry = data[curKey];
            if(colEntry !== undefined){
                colEntry.baseLabel = filter.range1.label;
                colEntry.againstLabel = filter.range2.label;
                colEntry.key = curKey;
            }
            output.push(colEntry);
          }
          return output;
  }

 _calculateTableData(data, rowLabels, colLabels, filter, keysIgnore){

     // generate table data 
      var tableData = [];
      var allData = data.data;

      if(rowLabels === undefined){
            rowLabels = [];
            var obj = allData;
            for(var p in obj){
                if(obj.hasOwnProperty(p)){
                    rowLabels.push(p);
                }
            }
      }
      

      for(var i=0; i < rowLabels.length ;i++){

          var rowLabel = rowLabels[i];
          var rowOutput= {} ;
          var rowData = allData[rowLabel];
          rowOutput['label'] = rowLabel ;
          rowOutput['aggMetrics'] = this._calculateColumn(rowData['aggMetrics'],colLabels,filter);
          rowOutput['metrics'] = [];

           for (var key in rowData.metrics) {
              if (rowData.metrics.hasOwnProperty(key)) {
                  var metricsEntry = rowData.metrics[key];

                  //ignore some keys
                  if(keysIgnore[rowLabel] && keysIgnore[rowLabel].indexOf(key.toLowerCase()) > -1)
                      continue;

                  var metricsOutput = {
                       label : key,
                       data : this._calculateColumn(metricsEntry,colLabels,filter)
                  };
                  rowOutput['metrics'].push(metricsOutput);
              }
           }

          tableData.push(rowOutput);
      }

      return tableData;
  }

}
