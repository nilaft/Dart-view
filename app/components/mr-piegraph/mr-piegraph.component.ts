import { Component, OnInit , ViewChild , Input} from '@angular/core';


declare var d3:any;


@Component({
  selector: 'mr-piegraph',
  templateUrl: './mr-piegraph.component.html',
  styleUrls: ['./mr-piegraph.component.css']
})

export class MrPiegraphComponent implements OnInit {

  @Input() data;
  @Input() colors;
  @ViewChild('graphContainer') graphContainer;
  
  $ele:any;
  $tooltip;

  constructor() { }

  ngOnInit() {
      this.$ele =  d3.select(this.graphContainer.nativeElement).append("svg:svg");
      this.$ele.append("svg:g");
      this.drawPie();
  }

  ngOnChanges(){
      if(!this.$ele){
          return;
      }
      this.drawPie();

  }

  drawPie(){
      var self = this;
      var data = this.data || [];
      var colors = this.colors || ['#FD0400','#F67613','#F8C13B','#17971A','#2F9DF2','#7F4FE5','#214561','#DD3290','#AAAAAA'];
      
      var eleWidth = this.graphContainer.nativeElement.offsetWidth;
      var eleHeight = this.graphContainer.nativeElement.offsetHeight;
      var dimension  = Math.min(eleWidth,eleHeight) * .8;
      var w = dimension;
      var h = dimension;
      var r = h/2;
      var color = d3.scale.ordinal().range(colors);
      
      var $ele =  this.$ele
          .data([data])
          .attr("width", eleWidth)
          .attr("height", eleHeight)
          .select("g")
          .attr("transform", "translate(" + eleWidth/2+ "," + eleHeight/2 + ")");
      
      
      var pie = d3.layout.pie().value(function(d){return d.value;});

      // declare an arc generator function
      var arc = d3.svg.arc().outerRadius(r);
    

      var arcOver = d3.svg.arc()
        .outerRadius(r*1.1);

      var totalVal = 0;

      // select paths, use arc generator to draw
      var arcs = $ele.selectAll("g.slice").data(pie).enter().append("svg:g")
        .attr("class", "slice")
        .on("mouseover", function(d,i) { 

            // create tooltip if not exist
            if(self.$tooltip === undefined){
                self.$tooltip = document.createElement('div');
                self.$tooltip.setAttribute('class','mrpiegraph-popup');
                self.$tooltip.setAttribute("style",`
                    position       : fixed; 
                    padding        : .7em 1em; 
                    background     : #2c2c2c; 
                    color          : white;
                    margin         : .2em; 
                    border-radius  : .3em; 
                    font-size      : .7em; 
                    pointer-events : none;
                    transition     : 50ms ease-in-out opacity;
                    width          : 23em;
                    word-wrap      : break-word;
                    transform      : translate(1em,-50%);
                    display        : flex;
                    align-items    : center;`);
                document.body.appendChild(self.$tooltip);
            }

            // update position based on mouse position
            self.$tooltip.style.left    = d3.event.pageX + 'px';
            self.$tooltip.style.top     = d3.event.pageY + 'px';
            self.$tooltip.style.opacity = 1;
            self.$tooltip.innerHTML = `
                <div style="width: 1em ; height:1em; background:${color(i)};margin-right:.5em"></div>
                <div style="width:calc(100% - 2em)"> ${data[i].label}</div>
            `;

            // now animate path to expand on over and scale text
            var $this = d3.select(this);
            $this.select('path').transition()
                .duration(300)
                .attr("d", arcOver);

            $this.select('text')
                .transition()
                .duration(300)
                .attr("transform",function(d){
                    return " scale(1.1)  translate(" + arc.centroid(d) + ")";
                });
        })
        .on("mousemove", function(d) {
            self.$tooltip.style.left = d3.event.pageX + 'px';
            self.$tooltip.style.top = d3.event.pageY + 'px';
        })
        .on("mouseout", function(d) {
             var $this = d3.select(this);
             self.$tooltip.style.opacity = 0;

             $this.select('path').transition()
                .duration(200)
                .attr("d", arc);

             $this.select('text')
                .transition()
                .duration(300)
                .attr("transform",function(){
                    d.outerRadius = r;
                    return "translate(" + arc.centroid(d) + ")";
                });
        });

      arcs.append("svg:path")
        .attr("style","cursor:pointer")
        .attr("fill", function(d, i){
            totalVal += d.value;
            return color(i);
        })
        .attr("d", function (d) {
            return arc(d);
        });
      
        
      // add the text
      var text = arcs.append("svg:text").attr("transform", function(d,i){
            d.innerRadius = 0;
            d.outerRadius = r;
            return "translate(" + arc.centroid(d) + ")";})
        .attr({
             "text-anchor": "middle",
             "font-size": ".45em",
             "pointer-events": "none",
             "fill": "white"
        })
        .text( function(d, i): String{
            var percent = Math.round((d.value/totalVal)*100);
            
            if(percent < 15){
                return '';
            }
            return percent + '%';
        });

  }

  ngOnDestroy() {
      if(this.$tooltip){
          document.body.removeChild(this.$tooltip);
      }
  }

}
