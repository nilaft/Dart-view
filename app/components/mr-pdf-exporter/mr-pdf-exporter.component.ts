import { Component, OnInit } from '@angular/core';


declare var jsPDF:any;
declare var $:any;
declare var html2pdf:any;
declare var canvg:any;
declare var html2canvas;

var debug = false;

class MRPdfExporter{
    padding = 10;
    
    response : any;

    constructor(ele:any, filename:string, bgcolor:string){
        var result     = this._setupClone(ele);
        result.content.style.background = bgcolor;

        var $pageBlocks = result.content.querySelectorAll('[mrpdfexporter-block]');
        var pageList  = this._splitToPages($pageBlocks);
        var noPagination = false;
        
        if(pageList == undefined){
            noPagination = true;
            pageList = [result.content];
        }

        var size = [ 340, 257];

        var doc = new jsPDF({
            orientation : 'landscape',
            unit : 'mm',
            format : size
        }); 

        this.response = new Promise((resolve, reject) => {
             var _drawPage = (curIndex)=>{
                
                    if(!noPagination){
                            var curPage = pageList[curIndex];
                            for (var i = 0; i < $pageBlocks.length; ++i) {
                                ($pageBlocks[i] as any).style.display = "none";
                            }

                            for (var i = 0; i < curPage.length; ++i) {
                                (curPage[i] as any).style.display = "";
                            }
                    }

                        var curPageDimension = result.content.getBoundingClientRect()
                        try {
                            result.content.querySelector('.mrpdftemplate-pageno').innerHTML = ""+(curIndex+1)
                        } catch (error) {
                            
                        }

                        // convert clone to canvas, then create jspdf 
                        this._convertToCanvas(result.content,curPageDimension,(canvas)=>{
                                result.wrapper.appendChild(canvas);

                                doc.addImage(canvas,0,0, size[0],size[0] * (curPageDimension.height/curPageDimension.width));
                                if(curIndex === pageList.length-1){
                                    doc.save(filename);
                                    if(!debug){
                                        document.body.removeChild(result.wrapper);
                                    }
                                    resolve(true);
                                }
                                else{
                                    doc.addPage();
                                    _drawPage(curIndex+1);
                                }

                            
                        }); 

                }

                _drawPage(0);
                
        });
       

    }

    
    _setupClone(ele){

        // create div and append to body 

        var clone = ele.cloneNode(true);
        clone.setAttribute('class',"mrpdf-print");

        var content = document.createElement('div');
        content.appendChild(clone);
        content.style.padding = this.padding + 'px';
        content.style.width = "auto";

        var wrapper = document.createElement('div');
        wrapper.appendChild(content);
        wrapper.setAttribute('class',"mrpdf-print-wrp");
        wrapper.setAttribute('style','pointer-events:none; position: fixed;left: 0;right: 0;top: 0;background: #e6e6e6;min-height: 100vh;z-index: 1000000000;');
        if(!debug){
            wrapper.style.opacity = "0";
        }
        document.body.appendChild(wrapper);

        
 
        return { content : content, wrapper : wrapper};
    }

    _splitToPages(blocks){
        // split to pages
        var $allBlocks = blocks
        if(blocks.length == 0){
            return undefined;
        }

        var pagesList = [];
        var curTopOffset  = 0;
        var curPage = [];
        var maxPageHeight = 0.667 * window.innerWidth - 20;
        $allBlocks.forEach(item =>{
            var offset = item.getBoundingClientRect();
            if(maxPageHeight < offset.bottom - curTopOffset){
                if(curPage.length>0){
                    pagesList.push(curPage)
                    curPage = [];
                    curTopOffset = offset.top;
                }
                
            }
            curPage.push(item);

        })
        //push last page
        pagesList.push(curPage)

        return pagesList
    }

    _convertToCanvas(ele,dimensions,onComplete){
        var canvas = document.createElement('canvas');
        var w = dimensions.width ;
        var h = dimensions.height;

        canvas.setAttribute('style','position: fixed;left: 0;right: 0;top: 0;background: #e6e6e6;');
        canvas.width        = w*2;
        canvas.height       = h*2;
        canvas.style.width  = w + 'px';
        canvas.style.height = h + 'px';
        
        var context = canvas.getContext('2d');
        context.scale(2,2);
        html2canvas(ele, { canvas: canvas }).then(onComplete);
        return canvas;

    }
}

@Component({
  selector: 'mr-pdf-exporter',
  templateUrl: './mr-pdf-exporter.component.html',
  styleUrls: ['./mr-pdf-exporter.component.css']
})

export class MrPdfExporterComponent implements OnInit {
  animate = false;
  constructor() { }
  
 
  convert(ele:any,filename:string,bgcolor:string){
      if(this.animate)
          return
      this.animate = true;
      var exporter = new MRPdfExporter(ele,filename,bgcolor);
      exporter.response.then(()=>{
          this.animate = false;
      })
  }

  ngOnInit() {
  }

}
