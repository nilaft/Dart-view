import { Component, OnInit } from '@angular/core';

import {jsPDF} from 'jspdf.js';


declare var jsPDF:any;
declare var $:any;
declare var html2pdf:any;
declare var canvg:any;
declare var html2canvas;


@Component({
  selector: 'mr-pdf-exporter',
  templateUrl: './mr-pdf-exporter.component.html',
  styleUrls: ['./mr-pdf-exporter.component.css']
})

export class MrPdfExporterComponent implements OnInit {

  constructor() { }
  
  addEle(i,doc,childrens,bgcolor,filename,bodyOffset,eleOffset){
      var self = this;
      var childOffset = childrens[i].getBoundingClientRect();
      var offsetDiff = childOffset.bottom - bodyOffset.bottom;

      // if hidden, offset it
      childrens[i].style.position = `relative`;
      if(offsetDiff > 0){
          childrens[i].style.top = `${-offsetDiff}px`;
      }

      // var w = 2000;
      // var h = 1000;
      // var div = document.querySelector('mr-authmechanism-page');
      // var canvas = document.createElement('canvas');
      // canvas.width = w*2;
      // canvas.height = h*2;
      // canvas.style.width = w + 'px';
      // canvas.style.height = h + 'px';
      // var context = canvas.getContext('2d');
      // context.scale(2,2);
      // html2canvas(div, { canvas: canvas }).then(function(canvas) {
      // // var myImage = canvas.toDataURL("image/png");
      // //             window.open(myImage);
      //     // do what you want
      // });
      var x=0,y=0;
      if(i>3){
          doc.addPage();
      }
      else{
        x = childOffset.left-eleOffset.left;
        y = childOffset.top-eleOffset.top;
      }
      // now add to pdf
      doc.addHTML(childrens[i], x, y, {
          'background': bgcolor || '#fff'
        }, function() {
            if(childrens.length - 1 === i)
                doc.save(filename);
            else{
                
                self.addEle(i+1,doc,childrens,bgcolor,filename,bodyOffset,eleOffset);
            }
            childrens[i].style.position = ``;
            childrens[i].style.top = ``;
      });
  }

  convert(ele:any,filename:string,bgcolor:string){
      var doc = new jsPDF("l","pt");
      var childrens = $(ele).children();
      var count = 0;
      
      var bodyOffset = document.body.getBoundingClientRect();
      var eleOffset = ele.getBoundingClientRect();
      
      // var pdf = new jsPDF('p', 'pt', 'c1');
      //       var c = pdf.canvas;
      //       c.width = 1000;
      //       c.height = 500;

      //       var ctx = c.getContext('2d');
      //       ctx.ignoreClearRect = true;
      //       ctx.fillStyle = '#ffffff';
      //       ctx.fillRect(0, 0, 1000, 700);

      //       //load a svg snippet in the canvas with id = 'drawingArea'
      //       canvg(c, $('mr-piegraph svg')[0].outerHTML, {
      //           ignoreMouse: true,
      //           ignoreAnimation: true,
      //           ignoreDimensions: true
      //       });

    //   var pdf = new jsPDF('p', 'pt', 'letter');
    // var canvas = pdf.canvas;

    // canvas.width = 8.5 * 72;

    // html2canvas(document.body, {
    //     canvas:canvas,
    //     onrendered: function(canvas) {
    //         pdf.save();
    //     }});


      // loop through children , and add to pdf one by one, due to bug in jspdf printing blacked screen if element is hidden in scroll
      this.addEle(0,doc,childrens,bgcolor,filename,bodyOffset,eleOffset);
      
      
//     var w = 2000;
// var h = 1000;
// var div = $0;
// var canvas = document.createElement('canvas');
// canvas.width = w*2;
// canvas.height = h*2;
// canvas.style.width = w + 'px';
// canvas.style.height = h + 'px';
// var context = canvas.getContext('2d');
// context.scale(2,2);
// html2canvas(div, { canvas: canvas }).then(function(canvas) {
// var myImage = canvas.toDataURL("image/png");
//             window.open(myImage);
//     // do what you want
// });
  }

  ngOnInit() {
  }

}
