import { Component , OnInit, ViewChild, ElementRef, ViewEncapsulation} from '@angular/core';

@Component({
   selector: 'mr-flow-graph',
   templateUrl: './mr-flow-graph.component.html',
   styleUrls: ['./mr-flow-graph.component.css'],
   encapsulation: ViewEncapsulation.None 
})

export class MrFlowGraphComponent implements OnInit {
  @ViewChild('canvas') canvas:ElementRef;

  constructor() {
   }

   ngOnInit() {
   }

   ngAfterViewInit(){
      var startDate = moment().startOf('year').subtract(500, "days").toDate().getTime();
      var endDate   = moment().startOf('year').toDate().getTime();
      var data = {
         minDate : startDate,
         maxDate : endDate,
         data    : generateSampleData(300,startDate,endDate)
      };

      var $ele = $(this.canvas.nativeElement);
      var graph = new ProvisioningGraph($ele);
      graph.config  = PROVISIONING_GRAPH_CONFIG;
      graph.onClickedDetail = function(clickedItemData, callback){
          callback([
    {
        "type" : "Operation",
        "system":"PROVISIONING_SERVICE_15.04",
        "operation" : "SubmitProvisioning",
        "status":"VAL_SUCCESS",
        "timestamp" : 1444402845000,
        "tooltip" : [{
          "accountNumber" : "15000003",
          "woNumber" : "12334566",
          "marketName": "ORLANDO",
          "custType": "RESI",
          "siteId": "01636",
          "billingSystem": "DST",
          "version": 10,
          "ecustCustomerId" : "12345678910111SD2131SDA415",
          "costId" : "ASD13123234ASDAS34EWRFSDF24234",
          "woStatus" : "success",
          "hsdStatus" : "success",
          "orderType" : "CHG|COMBO",
          "cancelFlag" : "N",
          "totalDisconnectFlag" : "N",
          "dwellingType" : "RESI",
          "houseKey" : "001234",
          "noTruckFlag" : "",
          "timestamp" : 1444402845000
          }],
        "flow": [
            {
                "type" : "Operation",
                "system" : "INC",
                "status" : "VAL_SUCCESS",
                "timestamp" : 1444402865000,
                "tooltip":[
                    {
                        "accountNumber" : "15000003",
                        "woNumber" : "12334566",
                        "operation" : "SubmitProvisioning",
                        "serviceName" : "TPP",
                        "status" : "VAL_SUCCESS",
                        "timestamp" : 1444402860000,
                        "receivedTimeStamp" : 1444424460081,
                        "sendTimeStamp" : 1444424460077,
                        "errorCode" : "",
                        "errorMessage" : "",
                        "woId" : "123456",
                        "dbSource" : "TaskDetails",
                        "sourceSystem" : "ProvisioningService"
                    }
                ],
                "flow":[{
                    "type" : "Notification",
                    "system" : "PROVISIONING_SERVICE_15.04",
                    "status" : "VAL_SUCCESS",
                    "timestamp" : 1444402868400,
                    "tooltip":[
                        {
                            "accountNumber" : "15000003",
                            "woNumber" : "12334566",
                            "operation" : "SubmitProvisioning",
                            "serviceName" : "TPP",
                            "status" : "VAL_SUCCESS",
                            "timestamp" : 1444402860000,
                            "receivedTimeStamp" : 1444424460081,
                            "sendTimeStamp" : 1444424460077,
                            "errorCode" : "",
                            "errorMessage" : "",
                            "woId" : "123456",
                            "dbSource" : "TaskDetails",
                            "sourceSystem" : "ProvisioningService"
                        }
                    ]
                }]
            },
            {
                "type" : "Operation",
                "system" : "PROVISIONING_HSD_SERVICE",
                "status" : "VAL_SUCCESS",
                "timestamp" : 1444402861000,
                "tooltip":[
                    {
                        "accountNumber" : "15000003",
                        "woNumber" : "12334566",
                        "operation" : "SubmitProvisioning",
                        "serviceName" : "TPP",
                        "status" : "VAL_SUCCESS",
                        "timestamp" : 1444402860000,
                        "receivedTimeStamp" : 1444424460081,
                        "sendTimeStamp" : 1444424460077,
                        "errorCode" : "",
                        "errorMessage" : "",
                        "woId" : "123456",
                        "dbSource" : "TaskDetails",
                        "sourceSystem" : "ProvisioningService"
                    }
                ],
                "flow":[
                    {
                        "type" : "Operation",
                        "system" : "BACCWS",
                        "status" : "VAL_SUCCESS",
                        "timestamp" : 1444402864000,
                        "tooltip":[
                            {
                                "accountNumber" : "15000003",
                                "woNumber" : "12334566",
                                "operation" : "SubmitProvisioning",
                                "serviceName" : "TPP",
                                "status" : "VAL_SUCCESS",
                                "timestamp" : 1444402860000,
                                "receivedTimeStamp" : 1444424460081,
                                "sendTimeStamp" : 1444424460077,
                                "errorCode" : "",
                                "errorMessage" : "",
                                "woId" : "123456",
                                "dbSource" : "TaskDetails",
                                "sourceSystem" : "ProvisioningService"
                            }
                        ],
                        "flow":[{
                            "type" : "Notification",
                            "system" : "PROVISIONING_HSD_SERVICE",
                            "status" : "VAL_SUCCESS",
                            "timestamp" : 1444402869000,
                            "tooltip":[
                                {
                                    "accountNumber" : "15000003",
                                    "woNumber" : "12334566",
                                    "operation" : "SubmitProvisioning",
                                    "serviceName" : "TPP",
                                    "status" : "VAL_SUCCESS",
                                    "timestamp" : 1444402860000,
                                    "receivedTimeStamp" : 1444424460081,
                                    "sendTimeStamp" : 1444424460077,
                                    "errorCode" : "",
                                    "errorMessage" : "",
                                    "woId" : "123456",
                                    "dbSource" : "TaskDetails",
                                    "sourceSystem" : "ProvisioningService"
                                }
                            ],
                            "flow":[]
                        }]
                    },
                    {
                        "type" : "Notification",
                        "system" : "PROVISIONING_SERVICE_15.04",
                        "status" : "VAL_SUCCESS",
                        "timestamp" : 1444402867000,
                        "tooltip":[
                            {
                                "accountNumber" : "15000003",
                                "woNumber" : "12334566",
                                "operation" : "SubmitProvisioning",
                                "serviceName" : "TPP",
                                "status" : "VAL_SUCCESS",
                                "timestamp" : 1444402860000,
                                "receivedTimeStamp" : 1444424460081,
                                "sendTimeStamp" : 1444424460077,
                                "errorCode" : "",
                                "errorMessage" : "",
                                "woId" : "123456",
                                "dbSource" : "TaskDetails",
                                "sourceSystem" : "ProvisioningService"
                            }
                        ],
                        "flow":[]
                    }
                ]
            },

            {
                "type" : "Operation",
                "system" : "TPP",
                "status" : "VAL_SUCCESS",
                "timestamp" : 1444402860000,
                "tooltip":[
                    {
                        "accountNumber" : "15000003",
                        "woNumber" : "12334566",
                        "operation" : "SubmitProvisioning",
                        "serviceName" : "TPP",
                        "status" : "VAL_SUCCESS",
                        "timestamp" : 1444402860000,
                        "receivedTimeStamp" : 1444424460081,
                        "sendTimeStamp" : 1444424460077,
                        "errorCode" : "",
                        "errorMessage" : "",
                        "woId" : "123456",
                        "dbSource" : "TaskDetails",
                        "sourceSystem" : "ProvisioningService"
                    }
                ]
            },
            {
              "type" : "Operation",
              "system":"COMMON_ORDER_SERVICE",
              "operation" : "SetOrderStatus",
              "status":"VAL_SUCCESS",
              "timestamp" : 1444402880000,
              "tooltip":[
                  {
                      "accountNumber" : "15000003",
                      "woNumber" : "12334566",
                      "operation" : "SetOrderStatus",
                      "serviceName" : "COMMON_ORDER_SERVICE",
                      "status" : "success",
                      "timestamp" : 1444424447000,
                      "receivedTimeStamp" : 1444424447290,
                      "sendTimeStamp" : 1444424446990,
                      "errorCode" : "",
                      "errorMessage" : "",
                      "woId" : "123456",
                      "dbSource" : "TaskDetails",
                      "sourceSystem" : "PS_15.04",
                      "version": 10
                 }
              ]
            },
            {
              "type" : "Operation",
              "system":"PISP",
              "operation" : "updateLOB",
              "status":"VAL_SUCCESS",
              "timestamp" : 1444402860100,
              "tooltip":[
                  {
                      "accountNumber" : "15000003",
                      "woNumber" : "12334566",
                      "operation" : "updateLOB",
                      "serviceName" : "PISP",
                      "status" : "success",
                      "timestamp" : 1444402860100,
                      "receivedTimeStamp" : 1444424447290,
                      "sendTimeStamp" : 1444424446990,
                      "errorCode" : "",
                      "errorMessage" : "",
                      "woId" : "123456",
                      "dbSource" : "TaskDetails",
                      "sourceSystem" : "PS_15.04",
                      "version": 10
                 }
              ]
            },
            {
              "type" : "Operation",
              "system":"CUSTOMER_SERVICE",
              "operation" : "updateEquipmentBatch",
              "status":"VAL_SUCCESS",
              "timestamp" : 1444402869100,
              "tooltip":[
                  {
                      "accountNumber" : "15000003",
                      "woNumber" : "12334566",
                      "operation" : "updateEquipmentBatch",
                      "serviceName" : "TPP",
                      "status" : "VAL_SUCCESS",
                      "timestamp" : 1444424447000,
                      "receivedTimeStamp" : 1444424447290,
                      "sendTimeStamp" : 1444424446990,
                      "errorCode" : "",
                      "errorMessage" : "",
                      "woId" : "123456",
                      "dbSource" : "TaskDetails",
                      "sourceSystem" : "PS_15.04",
                      "version": 10
                 }
             ],
              "flow":[
                  {
                    "type" : "Notification",
                    "system":"PROVISIONING_SERVICE_15.04",
                    "operation" : "updateEquipmentBatch",
                    "status":"VAL_SUCCESS",
                    "timestamp" : 1444402871000,
                    "tooltip":[
                        {
                            "accountNumber" : "15000003",
                            "woNumber" : "12334566",
                            "operation" : "updateEquipmentBatch",
                            "serviceName" : "TPP",
                            "status" : "VAL_SUCCESS",
                            "timestamp" : 1444424447000,
                            "receivedTimeStamp" : 1444424447290,
                            "sendTimeStamp" : 1444424446990,
                            "errorCode" : "",
                            "errorMessage" : "",
                            "woId" : "123456",
                            "dbSource" : "TaskDetails",
                            "sourceSystem" : "PS_15.04",
                            "version": 10
                       }
                    ]
                }
              ]
          },
          {
            "type" : "Operation",
            "system":"FC",
            "operation" : "updateEquipmentBatch",
            "status":"VAL_SUCCESS",
            "timestamp" : 1444402872100,
            "tooltip":[
                {
                    "accountNumber" : "15000003",
                    "woNumber" : "12334566",
                    "operation" : "updateEquipmentBatch",
                    "serviceName" : "TPP",
                    "status" : "VAL_SUCCESS",
                    "timestamp" : 1444424447000,
                    "receivedTimeStamp" : 1444424447290,
                    "sendTimeStamp" : 1444424446990,
                    "errorCode" : "",
                    "errorMessage" : "",
                    "woId" : "123456",
                    "dbSource" : "TaskDetails",
                    "sourceSystem" : "PS_15.04",
                    "version": 10
               }
           ],
            "flow":[
                {
                  "type" : "Notification",
                  "system":"PROVISIONING_SERVICE_15.04",
                  "operation" : "updateEquipmentBatch",
                  "status":"VAL_SUCCESS",
                  "timestamp" : 1444402875000,
                  "tooltip":[
                      {
                          "accountNumber" : "15000003",
                          "woNumber" : "12334566",
                          "operation" : "updateEquipmentBatch",
                          "serviceName" : "TPP",
                          "status" : "VAL_SUCCESS",
                          "timestamp" : 1444424447000,
                          "receivedTimeStamp" : 1444424447290,
                          "sendTimeStamp" : 1444424446990,
                          "errorCode" : "",
                          "errorMessage" : "",
                          "woId" : "123456",
                          "dbSource" : "TaskDetails",
                          "sourceSystem" : "PS_15.04",
                          "version": 10
                     }
                  ]
              }
            ]
          }

        ]

    }
]
);
          // scope.onDetailClicked({clickedItemData:clickedItemData,callback:callback});

      };

      graph.render(data);
   }
}




declare var d3: any;
declare var $: any;
declare var moment: any;
declare var window: any;

/* Generate sample data. Helps with testing large data */
var generateSampleData = function(noOfNode, startDate, endDate) {
  var entry, i, j, randomDate, randomize, ref, result;
  startDate = moment(startDate).toDate();
  endDate = moment(endDate).toDate();
  result = [];

  /* Get date between min and max */
  randomDate = function() {
    return (new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()))).getTime();
  };

  /* pick a random entry from array */
  randomize = function(myArray) {
    return myArray[Math.floor(Math.random() * myArray.length)];
  };
  for (i = j = 0, ref = noOfNode; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {

    /* for each , Generate some random data */
    entry = {
      "accountNumber": "0163600417303",
      "woNumber": "0163600417303-A",
      "type": randomize(["Activate", "SubmitProvisioning"]),
      "lastUpdatedDate": randomDate(),
      "woStatus": randomize(["SUCCESS", "failed", "Unknown", "Partial"]),
      "woVersion": 1
    };
    result.push(entry);
  }
  return result;
};


var BrowserDetect, SupportedBrowsers, Tooltip, capitalize, convertPolyToPath, toCapitalizedWords,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  slice = [].slice;

var PROVISIONING_GRAPH_CONFIG = {
  systems: {
    "OMS": {
      icon: '\uf218',
      sub: false
    },
    "CTE_EQUIPMENT": {
      icon: '\uf021',
      sub: true,
      label: 'CTE'
    },
    "CTE_ACCOUNT": {
      icon: '\uf021',
      sub: true,
      label: 'CTE'
    },
    "PROVISIONING_SERVICE_15.04": {
      icon: '\uf085',
      sub: false,
      label: 'PS'
    },
    "PROVISIONINGSERVICE": {
      icon: '\uf085',
      sub: false,
      label: 'PS'
    },
    "PS_15.04": {
      icon: '\uf085',
      sub: false,
      label: 'PS'
    },
    "PROVISIONING_HSD_SERVICE": {
      icon: '\uf0ac',
      sub: false,
      label: 'HSD'
    },
    "PISP": {
      icon: '\uf013',
      sub: false
    },
    "BACCWS": {
      icon: '\uf013',
      sub: true
    },
    "FC": {
      icon: '\uf21b',
      sub: true
    },
    "COMMON_ORDER_SERVICE": {
      icon: '\uf044',
      sub: true,
      label: 'cos'
    },
    "CUSTOMER_SERVICE": {
      icon: '\uf025',
      sub: true,
      label: 'cs'
    },
    "INC": {
      icon: '\uf023',
      sub: true
    },
    "CAAP": {
      icon: '\uf192',
      sub: true
    },
    "TPP": {
      icon: '\uf1b6',
      sub: true
    },
    "ACTIVATE_CDV": {
      icon: '',
      sub: true,
      label: "Act CDV"
    },
    "SWAP_CDV": {
      icon: '',
      sub: true,
      label: "Swap CDV"
    }
  },

  /* Colors for bubble based on status */
  colors: {
    "success": "#24a203",
    "failed": "#e42222",
    "partial": "#f07100",
    "notification": "#11b0d1",
    "unknown": "#b8b8b8",
    "invalidstatus": "#b8b8b8"
  },
  dateFormat: "DD-MMM-YY hh.mm.ss.SSSSSS A"
};


/* ProvisioningGraph class that draws the graph */

var ProvisioningGraph = (function() {

  /* data for the graph */
  ProvisioningGraph.prototype.data = void 0;


  /* flag is set while animating. this is used to avoid unexpected behaviors like double clicked on clickable elements */

  ProvisioningGraph.prototype.isAnimating = false;


  /* Constants / Configuration */

  ProvisioningGraph.prototype.config = PROVISIONING_GRAPH_CONFIG;

  function ProvisioningGraph($ele1) {
    var $window;
    this.$ele = $ele1;
    this.generatePath = bind(this.generatePath, this);
    this.convertJsonExpanded = bind(this.convertJsonExpanded, this);
    this.convertJsonCluster = bind(this.convertJsonCluster, this);

    
    /* On resize redraw */
    $window = $(window);
    $window.on('resize', (function(_this) {
      return function() {
        return _this.render();
      };
    })(this));

    /* create svg element using d3 */
    this.create();
    return;
  }


  /* Calculate color provided status */

  ProvisioningGraph.prototype.getColor = function(status) {
    var outputColor;
    outputColor = this.config.colors[status];
    if (outputColor == null) {
      outputColor = this.config.colors['invalidstatus'];
    }
    return outputColor;
  };


  /* Unify status for both cluster and expanded view */

  ProvisioningGraph.prototype.getStatus = function(status) {
    switch (status) {
      case 'val_success':
      case 'success':
      case 'pre_activated':
      case 'activated':
      case 'notification_received':
        return "success";
      case 'val_partial_success':
      case 'partial_success':
        return "partial";
      case 'failed':
      case 'val_failed':
        return "failed";
      case 'worklisted':
      case 'suppressed':
      case 'submitted':
      case '':
      case 'pending':
      case 'no request':
        return 'unknown';
    }
  };


  /* Clears graph */

  ProvisioningGraph.prototype.clear = function(grp) {
    if (grp == null) {
      grp = this.baseGroup;
    }
    if (grp != null) {
      grp.selectAll("*").remove();
    }
    $('.provisiongraph-tooltip').remove();
  };


  /* Create svg ele */

  ProvisioningGraph.prototype.create = function() {
    var gradient;
    this.svgEle = d3.select(this.$ele[0]).append('svg');

    /* define gradients for detail page background */
    gradient = this.svgEle.append('svg:defs').append('svg:linearGradient').attr('id', 'gradient').attr('x1', '50%').attr('y1', '0%').attr('x2', '50%').attr('y2', '100%').attr('spreadMethod', 'pad');
    gradient.append('svg:stop').attr('offset', '0%').attr('stop-color', '#ffffff').attr('stop-opacity', 1);
    gradient.append('svg:stop').attr('offset', '100%').attr('stop-color', '#b0b0b0').attr('stop-opacity', 1);

    /* Preload FontAwesome fonts to avoid flicker on click */
    this.svgEle.append("text").attr('font-family', 'FontAwesome').attr('caution', 'Don\'t delete this').text("FontPrefetch").attr('opacity', 0);

    /* Create a base group */
    this.baseGroup = this.svgEle.append("g");
  };


  /* calculate and set dimensions */

  ProvisioningGraph.prototype.setDimensions = function() {
    var ref;
    ref = [this.$ele.width(), this.$ele.height()], this.netWidth = ref[0], this.netHeight = ref[1];
    this.width = this.netWidth - this.margin.left - this.margin.right;
    this.height = this.netHeight - this.margin.top - this.margin.bottom;
    this.widthOriginal = this.width;
    this.svgEle.attr('width', this.netWidth);
    this.svgEle.attr('height', this.netHeight);
    this.svgEle.attr('viewBox', "0 0 " + this.netWidth + " " + this.netHeight);
  };


  /* draw rounded rects */

  ProvisioningGraph.prototype.roundedRect = function(x, y, width, height, radius) {
    var pathStr;
    pathStr = '';
    pathStr += 'M' + x + ',' + y + 'h' + (width - radius) + 'a' + radius + ',' + radius;
    pathStr += ' 0 0 1 ' + radius + ',' + radius + 'v' + (height - (2 * radius)) + 'a' + radius;
    pathStr += ',' + radius + ' 0 0 1 ' + -radius + ',' + radius + 'h' + (radius - width) + 'z';
    return pathStr;
  };


  /* draw crossFilter brush */

  ProvisioningGraph.prototype.drawBrush = function(container, brush, height) {
    var handleHeight, offsetY;
    container.append('g').attr('class', 'x brush').call(brush).selectAll('rect').attr({
      'y': -5
    }).attr('height', height + 5);

    /* brush handle */
    offsetY = -4 + (height + 5) * 0.2;
    handleHeight = (height + 5) * 0.6;
    container.select('.x.brush').select('.resize.w').append("path").attr("d", this.roundedRect(-1, offsetY - 1 + handleHeight, -4, -handleHeight, -3));
    return container.select('.x.brush').select('.resize.e').append("path").attr("d", this.roundedRect(1, offsetY - 1, 4, handleHeight, 3));
  };


  /* convert px to responsive scale */

  ProvisioningGraph.prototype.rem = function(px) {
    return px / 16 * this.respScale;
  };


  /* decide whether the given range is in milliseconds/days/years... */

  ProvisioningGraph.prototype.getRangeContext = function(range, noOfEntries, isReturnId) {
    var contextId, i, j, rangeContext, ref;
    if (noOfEntries == null) {
      noOfEntries = 6;
    }
    if (isReturnId == null) {
      isReturnId = false;
    }
    rangeContext = ['millisecond', 'second', 'minute', 'day', 'month', 'year'];
    contextId = void 0;
    for (i = j = 1, ref = rangeContext.length; 1 <= ref ? j < ref : j > ref; i = 1 <= ref ? ++j : --j) {
      if (moment(range[1]).diff(range[0], rangeContext[i] + 's') < noOfEntries) {
        contextId = i - 1;
        break;
      }
    }
    if (contextId === void 0) {
      contextId = rangeContext.length;
    }
    if (isReturnId === true) {
      return contextId;
    }
    return rangeContext[contextId];
  };


  /* generate tickValues from given range */

  ProvisioningGraph.prototype.calculateTickvalues = function(rangeStart, step, type, noOfTicks) {
    var calculatedTickvalues, i, j, rangeStartRounded, ref;
    if (noOfTicks == null) {
      noOfTicks = 7;
    }
    rangeStartRounded = moment(rangeStart);
    calculatedTickvalues = [];
    for (i = j = 0, ref = noOfTicks + 1; j < ref; i = j += 1) {
      calculatedTickvalues.push(moment(rangeStartRounded.subtract(-(i * step), type + 's')).toDate());
    }
    return calculatedTickvalues;
  };


  /* generate custom tickValues for axis. default d3 function doesnt offer much control over number of ticks, leading to lot cluttered values */

  ProvisioningGraph.prototype.setTickValues = function(newExtent) {
    var calculatedTickvalues, i, j, length, noOfTicks, ref, selectedTypeId, step, timeDuration, totalTickValues, type;
    timeDuration = ['millisecond', 'second', 'minute', 'day', 'month', 'year'];
    length = timeDuration.length;
    noOfTicks = 100;
    selectedTypeId = void 0;
    step = void 0;
    for (i = j = 1, ref = length; 1 <= ref ? j < ref : j > ref; i = 1 <= ref ? ++j : --j) {
      type = timeDuration[i - 1];
      if (moment(newExtent[1]).diff(newExtent[0], timeDuration[i] + 's') < noOfTicks) {
        totalTickValues = moment(newExtent[1]).diff(newExtent[0], type + 's');
        step = Math.ceil(totalTickValues / noOfTicks);
        selectedTypeId = i - 1;
        break;
      }
    }
    if (selectedTypeId === void 0) {

      /* if xAxis range is greater than 7 years */
      selectedTypeId = 0;
      totalTickValues = moment(newExtent[1]).diff(newExtent[0], 'years');
      step = Math.ceil(totalTickValues / noOfTicks);
    }
    calculatedTickvalues = this.calculateTickvalues(newExtent[0], step, selectedTypeId, noOfTicks);
    return calculatedTickvalues;
  };


  /* set custom ticks for axis. default d3 function doesnt offer much control over number of ticks / intervals leading to too many or too few ticks in some cases */

  ProvisioningGraph.prototype.setTicks = function(xAxis, newExtent, noOfTicks) {
    var days, hours, interval, minNoOfTicks, minutes, months, seconds, step, stepCount, years;
    if (noOfTicks == null) {
      noOfTicks = 7;
    }

    /*
     * The following time intervals are considered for setting ticks:
     * 1-, 5-, 15- and 30-second.
     * 1-, 2-, 3-, 4-, 5-, 6-, 10-, 15-, 20- and 30-minute.
     * 1-, 2-, 3-, 4-, 6- and 12-hour.
     * 1-, 2-, 4- and 16-day.
     * 1-week.
     * 1-, 2-, 3- and 4-month.
     * 1-year.
     */
    minNoOfTicks = Math.max(noOfTicks - 3, 2);
    interval = void 0;
    if (moment(newExtent[1]).diff(newExtent[0], 'seconds') < minNoOfTicks) {
      step = noOfTicks;
    } else if (moment(newExtent[1]).diff(newExtent[0], 'minutes') < minNoOfTicks) {
      seconds = moment(newExtent[1]).diff(newExtent[0], 'seconds');
      stepCount = Math.ceil(seconds / noOfTicks);
      interval = 'second';
      if (stepCount <= 5) {
        step = stepCount;
      } else if (stepCount <= 8) {
        step = 6;
      } else if (stepCount <= 12) {
        step = 10;
      } else if (stepCount <= 18) {
        step = 15;
      } else if (stepCount <= 25) {
        step = 20;
      } else {
        step = 30;
      }
    } else if (moment(newExtent[1]).diff(newExtent[0], 'hours') < minNoOfTicks) {
      minutes = moment(newExtent[1]).diff(newExtent[0], 'minutes');
      stepCount = Math.ceil(minutes / noOfTicks);
      interval = 'minute';
      if (stepCount <= 5) {
        step = stepCount;
      } else if (stepCount <= 8) {
        step = 6;
      } else if (stepCount <= 12) {
        step = 10;
      } else if (stepCount <= 18) {
        step = 15;
      } else if (stepCount <= 25) {
        step = 20;
      } else {
        step = 30;
      }
    } else if (moment(newExtent[1]).diff(newExtent[0], 'days') < minNoOfTicks) {
      hours = moment(newExtent[1]).diff(newExtent[0], 'hours');
      stepCount = Math.ceil(hours / noOfTicks);
      interval = 'hour';
      if (stepCount <= 4) {
        step = stepCount;
      } else if (stepCount <= 8) {
        step = 6;
      } else {
        step = 12;
      }
    } else if (moment(newExtent[1]).diff(newExtent[0], 'months') < minNoOfTicks) {
      days = moment(newExtent[1]).diff(newExtent[0], 'days');
      stepCount = Math.ceil(days / noOfTicks);
      interval = 'day';
      if (stepCount <= 2) {
        step = stepCount;
      } else if (stepCount < 6) {
        step = 4;
      } else if (stepCount > 8) {
        step = 16;
      } else {
        step = 1;
        interval = 'week';
      }
    } else if (moment(newExtent[1]).diff(newExtent[0], 'years') < minNoOfTicks) {
      months = moment(newExtent[1]).diff(newExtent[0], 'months');
      stepCount = Math.ceil(months / noOfTicks);
      interval = 'month';
      if (stepCount > 4) {
        step = 6;
      } else {
        step = stepCount;
      }
    } else {
      years = moment(newExtent[1]).diff(newExtent[0], 'years');
      step = Math.ceil(years / noOfTicks);
      interval = 'year';
    }
    if (interval) {
      xAxis.ticks(d3.time[interval], step);
    } else {
      xAxis.ticks(noOfTicks);
    }
    return xAxis;
  };


  /* Adding extra padding to given domain (default 25%) and roundoff to nearest value if required */

  ProvisioningGraph.prototype.getPaddedDomain = function(range, paddingRatio, isRoundOff) {
    var padding, rangeContext, rangeEnd, rangeStart;
    if (paddingRatio == null) {
      paddingRatio = 0.25;
    }
    if (isRoundOff == null) {
      isRoundOff = false;
    }
    rangeStart = moment(range[0]);
    rangeEnd = moment(range[1]);
    padding = rangeEnd.diff(rangeStart) * paddingRatio;
    rangeStart = rangeStart.diff(padding);
    rangeEnd = rangeEnd.diff(-padding);
    if (isRoundOff === false) {
      return d3.extent([rangeStart, rangeEnd]);
    }
    rangeContext = this.getRangeContext([rangeStart, rangeEnd]);
    return d3.extent([moment(rangeStart).startOf(rangeContext), moment(rangeEnd).endOf(rangeContext)]);
  };

  ProvisioningGraph.prototype.formatXaxisTicks = function(container, range, width, xAxisGutter) {

    /*
    Following code block is to format first and last tick label, and
    hide the tick line when it is too close to the end.
    Roundin-off the time axis is not an option as data had to be unaltered and css doesn't know about position.
     */
    var axisTicks, firstTick, firstTickPosX, hideFirstTick, hideLastTick, hideTicks, lastTick, lastTickPosX, rangeContext, tickFontSize;
    axisTicks = container.select('.x.provisiongraph-axis').selectAll('.tick')[0];
    firstTick = axisTicks[0], lastTick = axisTicks[axisTicks.length - 1];

    /* calculate position of first and last tick.position has to be parsed from transform attribute. */
    firstTickPosX = parseFloat(/translate\(\s*([^\s,)]+)[ ,]([^\s,)]+)/.exec(d3.select(firstTick).attr('transform'))[1]);
    lastTickPosX = width - xAxisGutter - parseFloat(/translate\(\s*([^\s,)]+)[ ,]([^\s,)]+)/.exec(d3.select(lastTick).attr('transform'))[1]);
    tickFontSize = d3.select(firstTick).select('text').node().getBBox().height;

    /*
    Calculate whether or not the labels are close to the end.
    Currently if distance between first tick and start is atleast 2% of the width it decides to hide the tick line
     */
    hideFirstTick = firstTickPosX < (width - xAxisGutter) * 0.02 ? true : false;
    hideLastTick = lastTickPosX < (width - xAxisGutter) * 0.02 ? true : false;
    hideTicks = [hideFirstTick, hideLastTick];
    rangeContext = this.getRangeContext(range);

    /* format first and lastTick in crossFilter axis to show both date and time if required */
    d3.selectAll([firstTick, lastTick]).select('text').html(function(d) {
      var date;
      date = '<tspan>' + moment(d).format("MM/DD/YY") + '</tspan>';
      if (rangeContext === 'second' || rangeContext === 'millisecond') {
        date = date + '<tspan dy="' + (tickFontSize * 0.8) + '" font-size="' + (tickFontSize * 0.65) + '" x = "0">' + moment(d).format("hh:mm:ss A") + '</tspan>';
      } else if (rangeContext === 'minute') {
        date = date + '<tspan dy="' + (tickFontSize * 0.8) + '" font-size="' + (tickFontSize * 0.65) + '" x = "0">' + moment(d).format("hh:mm A") + '</tspan>';
      }
      return date;
    }).style({
      'font-weight': '600'
    });
    return d3.selectAll([firstTick, lastTick]).select('line').style({
      'display': function(d, i) {
        if (hideTicks[i] === true) {
          return 'none';
        }
        return '';
      }
    });
  };


  /* calculate responsive scale. Create a sample element and caculate em to px. */

  ProvisioningGraph.prototype.calculateRespScale = function(className, text) {
    var $body, $rect, res;
    if (text == null) {
      text = "sample";
    }
    $body = $('body');
    $rect = $('<div class="provisiongraph-respscale" style="width: 1.6vh;height: 1.6vh;font-family: \'FontAwesome\';"></div>');
    this.$ele.append($rect);
    res = {
      width: $rect.width(),
      height: $rect.height()
    };
    $rect.remove();
    return res;
  };


  /* Render starts here */

  ProvisioningGraph.prototype.render = function(graphData) {
    
    var crntDate, entry, j, len, minDomain, minDuration, noOfBubblesSelected, rangeEnd, rangeStart, ref, ref1, sortBy;
    this.clear();
    this.clusterView = this.baseGroup.append('g').attr('class', 'provisiongraph-clusterview');
    this.detailView = this.baseGroup.append('g').attr('class', 'provisiongraph-detview');
    if (graphData != null) {

      /* Correct timezone. Basically timestamp has no timezone info so browser puts client timezone. We need in utc so we are subtracting */
      graphData.minDate = this.timezoneCorrection(graphData.minDate);
      graphData.maxDate = this.timezoneCorrection(graphData.maxDate);
      ref = graphData.data;
      for (j = 0, len = ref.length; j < len; j++) {
        entry = ref[j];
        this.convertJsonCluster(entry);
      }

      /* set start and end Date */
      this.startDate = moment(graphData.minDate);
      this.endDate = moment(graphData.maxDate);

      /* if minDate and maxdate of graphData are same separate them by 1 day. */
      minDomain = moment.duration(1, 'days').asMilliseconds();
      if (moment(this.endDate).isSame(this.startDate, 'millisecond')) {
        this.startDate = moment(moment(this.startDate).subtract(minDomain / 2, 'milliseconds'));
        this.endDate = moment(moment(this.endDate).subtract(-minDomain / 2, 'milliseconds'));
      } else if (Math.abs(moment.duration(moment(this.endDate).diff(this.startDate)).asMilliseconds()) < 200) {

        /* let domain be atleast 4 milliseconds */
        minDomain = Math.max(2, moment.duration(moment(this.endDate).diff(this.startDate)).asMilliseconds());
        this.startDate = moment(moment(this.startDate).subtract(minDomain, 'milliseconds'));
        this.endDate = moment(moment(this.endDate).subtract(-minDomain, 'milliseconds'));
      }

      /* Adding extra padding to prevent clipping-off of bubbles at the ends and rounding of range to nearest value */
      ref1 = this.getPaddedDomain([this.startDate, this.endDate], 0.04, true), this.startDate = ref1[0], this.endDate = ref1[1];
      this.data = graphData.data;

      /* sort data according to lastUpdatedDate in ascending order. (Makes finding the minExtent easier) */
      sortBy = function(a, b, direction, key) {
        if (direction == null) {
          direction = -1;
        }
        if (key == null) {
          key = 'lastUpdatedDate';
        }
        if (a[key] < b[key]) {
          return -1 * direction;
        }
        if (b[key] < a[key]) {
          return +1 * direction;
        }
        return 0;
      };
      this.data.sort(function(a, b) {
        return sortBy(a, b);
      });

      /* Find the minExtent (Set minDuration as duration of last 20 bubbles) */

      /*
      By default last 20 bubbles in the clusterGraph will be selected.
      This duration will also be minExtent of the crossFilter brush.
      To change this behavior edit following code
       */
      rangeEnd = moment(this.data[0].lastUpdatedDate);
      noOfBubblesSelected = 20;
      if (this.data.length > (noOfBubblesSelected - 1)) {
        rangeStart = moment(this.data[noOfBubblesSelected - 1].lastUpdatedDate);
      } else {
        rangeStart = moment(this.data[this.data.length - 1].lastUpdatedDate);
      }

      /* To find distance detween the closest bubbles in the graph */

      /* Set approximate minDuration initially, then loop through adjacent points */
      minDuration = window.moment.duration(moment(rangeEnd).diff(rangeStart)).asMilliseconds();
      crntDate = void 0;
      this.data.forEach(function(d, i) {
        var crntDuration, prevDate;
        prevDate = crntDate;
        crntDate = d.lastUpdatedDate;
        if (i > 0) {
          crntDuration = Math.abs(moment.duration(moment(crntDate).diff(prevDate)).asMilliseconds() * 3);
          if (crntDuration < minDuration && crntDuration > 0) {
            return minDuration = crntDuration;
          }
        }
      });
      this.minDuration = minDuration;

      /*
      If there is only 1 bubble or all the bubbles are at same time.
      Set minDuration as graph range (no point moving brush handle right?)
       */
      if (this.minDuration === 0) {
        rangeStart = moment(this.startDate);
        rangeEnd = moment(this.endDate);
        this.minDuration = Math.max(moment.duration(moment(rangeEnd).diff(rangeStart)).asMilliseconds() / 20, 4);
      }

      /*
       * if it required to start the crossFilter brush from right-most end regardless bubbles uncomment following code
       * rangeEnd   = moment(@endDate)
       * rangeStart = moment(rangeEnd).diff(@minDuration)
       */
      this.range = this.getPaddedDomain([rangeStart, rangeEnd], 0.04);
      this.detailRange = void 0;
      this.rangeContext = this.getRangeContext([this.startDate, this.endDate]);
      this.colors = this.config.colors;
    }

    /* Calculate scale. This is for making it responsive */
    this.respScale = this.calculateRespScale('provisiongraph-sample').width;

    /* draw the clusterView */
    this.drawCluster(this.data, graphData != null);

    /* If there exist detail data then draw detail. This gets called when in detail view, browser is resized */
    if (this.detailData != null) {
      this.goToDetail();
    }
  };


  /* Unify json formats and values */

  ProvisioningGraph.prototype.timezoneCorrection = function(timestamp) {
    return moment(timestamp).subtract(-new Date().getTimezoneOffset(), 'minutes').toDate().getTime();
  };

  ProvisioningGraph.prototype.convertJsonCluster = function(entry) {
    if (entry.jsonTransformed != null) {
      return;
    }
    entry.jsonTransformed = true;
    entry.lastUpdatedDate = this.timezoneCorrection(entry.lastUpdatedDate);
  };

  ProvisioningGraph.prototype.convertJsonExpanded = function(entry) {
    if (entry.jsonTransformed != null) {
      return;
    }
    entry.jsonTransformed = true;
    entry.status = this.getStatus(entry.status);
    entry.timestamp = this.timezoneCorrection(entry.timestamp);
  };


  /*
  #
   * Draw a node in detail page
  #
   */

  ProvisioningGraph.prototype.drawDetailNode = function(entry) {

    /* choose color */
    var borderColor, diameter, iconSize, iconYPos, radius, self, yPos;
    if (entry.type === "notification") {
      borderColor = this.colors["notification"];
    } else {
      borderColor = this.getColor(entry.status);
    }

    /* if substem then small size node is drawn else large is drawn */
    entry.isSubSystem = (function(_this) {
      return function() {

        /* always false */
        return false;

        /* if current node is subsystem then return true */
        if ((_this.config.systems[entry.system] != null) && _this.config.systems[entry.system].sub) {
          return true;
        }

        /* else if parent is sub, then i will also be sub */
        if (entry.parent != null) {
          if ((_this.config.systems[entry.parent.system] != null) && _this.config.systems[entry.parent.system].sub) {
            return true;
          }
        }
        return false;
      };
    })(this)();
    entry.canvas.radius = this.rem(13) * (entry.isSubSystem ? 1 : 1.4);
    radius = entry.canvas.radius;
    self = this;

    /* Should i draw circle or hexagon */
    if (this.clickedBubbleData.type === "biller") {

      /* Draw circle */
      entry.canvas.circleGrp.append('circle').each(function() {
        var $this, xPos, yPos;
        xPos = 0;
        yPos = 0;
        $this = d3.select(this);
        $this.attr({
          'cx': xPos,
          'cy': yPos,
          'r': radius,
          'fill': "url(#gradient)",
          'style': "transform-origin:" + xPos + "px " + yPos + "px;",
          'class': 'provisiongraph-det-node',
          "stroke": "" + borderColor,
          "stroke-width": self.rem(2.5)
        });
      });
    } else {

      /* Draw Hexagon */
      diameter = 2 * radius;
      entry.canvas.circleGrp.append('polygon').attr('points', radius + ",0 " + diameter + "," + (diameter * .28 * 1.1) + " " + diameter + "," + (diameter * .72 * 1.1) + " " + radius + "," + (diameter * 1.1) + " 0," + (diameter * .72 * 1.1) + " 0," + (diameter * .28 * 1.1)).each(function() {
        var $this, xPos, yPos;
        xPos = 0;
        yPos = 0;
        $this = d3.select(this);
        $this.attr({
          'fill': "url(#gradient)",
          'style': "transform-origin:" + xPos + "px " + yPos + "px;",
          'class': 'provisiongraph-det-node',
          "stroke": "" + borderColor,
          "stroke-width": self.rem(2.5),
          "transform": "translate(" + (-radius) + "," + (-radius * 1.1) + ")"
        });
      });
    }

    /* Draw icon using font awesome */
    iconSize = radius * 1.1;
    iconYPos = (1.9 * radius - iconSize) / 2;
    entry.canvas.circleGrp.append('text').attr('class', 'provisiongraph-det-icon').attr('x', 0).attr('y', iconYPos).attr('font-size', iconSize).text((function(_this) {
      return function(d) {
        var ref;
        return (ref = _this.config.systems[entry.system]) != null ? ref.icon : void 0;
      };
    })(this));

    /* Draw System name */
    yPos = entry.canvas.radius * 1.8;
    if (entry.isSubSystem) {
      yPos = entry.canvas.radius * 2;
    }
    entry.canvas.circleGrp.append('text').attr('class', 'provisiongraph-det-label').attr('x', 0).attr('y', yPos).attr('font-size', this.rem(0.7 * 16)).attr('line-height', this.rem(0.7 * 16)).text((function(_this) {
      return function(d) {
        var ref;
        return ((ref = _this.config.systems[entry.system]) != null ? ref.label : void 0) || entry.system;
      };
    })(this));

    /* if it doesnt have parent, then its root node. As per requirement root node hover show tooltip */
    if (entry.parent == null) {
      this.setDetailTootip(entry.canvas.circleGrp, entry);
    }
  };


  /* Given start and endpt returns a path for expanded view */

  ProvisioningGraph.prototype.generatePath = function(startPt, endPt) {
    var direction;
    if (startPt.y === endPt.y) {
      return "M " + startPt.x + " " + startPt.y + " L " + endPt.x + " " + endPt.y;
    }
    direction = startPt.y < endPt.y ? 1 : -1;
    return "M " + startPt.x + " " + startPt.y + " L " + startPt.x + " " + (endPt.y - direction * this.rem(10)) + " C " + startPt.x + "  " + (endPt.y - direction * this.rem(5)) + " " + (startPt.x + this.rem(5)) + " " + endPt.y + " " + (startPt.x + this.rem(10)) + " " + endPt.y + " L " + endPt.x + " " + endPt.y;
  };


  /* Draw detail view */

  ProvisioningGraph.prototype.drawDetail = function() {
    var _queue, addToQueue, brushExtent, brushed, brushended, brushstarted, calculatedRange, data, detGrp, detailGrp, drag, drawLink, filterHeight, graphHeight, graphPaddingBtm, graphPaddingTop, height, maxDrag, minExtent, positionDetailNode, ref, runQueue, self, totalExtent, totalRowCount, treeCalculator, x, x2, x2endDate, x2startDate, xAxis, xAxis2, xAxisGutter, xBrushFormatDetail, xFormatDetail;
    data = this.detailData;
    calculatedRange = {
      minTimestamp: 1 / 0,
      maxTimestamp: 0,
      minDistance: 1 / 0
    };

    /* Axis format */

    /*
    custom multi-scale time format is used for each of the xaxis
    It is implemented using array of time formats, each with an associated filter.
    The first filter that returns true is used.
     */

    /* detailView main graph xaxis format */
    xFormatDetail = d3.time.format.multi([
      [
        ".%L", function(d) {
          return d.getMilliseconds();
        }
      ], [
        ":%S", function(d) {
          return d.getSeconds();
        }
      ], [
        "%I:%M", function(d) {
          return d.getMinutes();
        }
      ], [
        "%I %p", function(d) {
          return d.getHours();
        }
      ], [
        "%m/%d/%y", function(d) {
          return true;
        }
      ]
    ]);

    /* view crossfilter xaxis format */
    xBrushFormatDetail = d3.time.format.multi([
      [
        ":%S.%L", function(d) {
          return d.getMilliseconds();
        }
      ], [
        ":%S", function(d) {
          return d.getSeconds();
        }
      ], [
        "%I:%M %p", function(d) {
          return d.getMinutes();
        }
      ], [
        "%I %p", function(d) {
          return d.getHours();
        }
      ], [
        "%m/%d/%y", function(d) {
          return true;
        }
      ]
    ]);

    /* spacing needed */
    this.margin = {
      left: this.rem(40) + 10,
      right: this.rem(40) + 10,
      top: this.rem(65),
      bottom: this.rem(40)
    };
    this.setDimensions();
    this.brush = void 0;

    /* Calculate Range */
    x = d3.time.scale().range([this.margin.left, this.width]);
    height = this.height - this.rem(30);
    xAxisGutter = this.margin.left / 2;

    /* Calculate Height of main graph and cross filter */
    graphHeight = height * 0.82;
    filterHeight = height - graphHeight - this.rem(60);
    this.detailView.html('');

    /* adding an empty rect in the background of main graph to implement drag */
    this.detailView.append('rect').attr({
      'width': this.width,
      'height': this.height,
      'transform': 'translate(' + this.margin.left + ',' + (-this.margin.top) + ')',
      'class': 'provisiongraph-detailView-bg'
    }).style({
      'fill': 'transparent'
    });

    /* define clipPath (i.e, mask) for the main graph */
    this.detailView.append('defs').append('clipPath').attr('id', 'detailViewMask').append('rect').attr({
      'width': this.width - xAxisGutter,
      'height': this.height + this.margin.top,
      'stroke-width': 30,
      'stroke-opacity': '0.5',
      'transform': 'translate(' + xAxisGutter + ',' + (-this.margin.top) + ')'
    });
    this.detailViewFocus = this.detailView.append('g').attr('class', 'focus').attr('transform', 'translate(' + this.margin.left + ',' + (this.margin.top * 0.5) + ')');
    graphPaddingTop = this.rem(60);
    graphPaddingBtm = this.rem(30);
    this.detailViewFocus.append('g').attr('class', 'x provisiongraph-axis');
    detailGrp = this.detailViewFocus.append('g').attr({
      'class': 'provisiongraph-cluster',
      'clip-path': 'url(#detailViewMask)'
    });

    /*
     * QUEUE HANDLERS
     * While we traverse each leaf we dont have enough details for drawing. So its pushed to queue and when all details are availble each entry in queue is executed.pretty # # cool huh?
     */
    _queue = [];
    addToQueue = function() {
      var arg, defer, func;
      func = arguments[0], defer = arguments[1], arg = 3 <= arguments.length ? slice.call(arguments, 2) : [];
      if (defer == null) {
        defer = 0;
      }
      return _queue.push([func, defer, arg]);
    };
    self = this;
    runQueue = function() {
      var entry, i, j, l, len;
      for (i = j = -1; j <= 1; i = ++j) {
        for (l = 0, len = _queue.length; l < len; l++) {
          entry = _queue[l];
          if (i !== entry[1]) {
            continue;
          }
          entry[0].apply(self, entry[2]);
        }
      }
      return _queue = [];
    };

    /* This method positions node in x and y axis for expanded view */
    positionDetailNode = function(entry) {
      var drawHeight, xPos, yCirclePos, yPos;
      xPos = entry.canvas.xPos != null ? entry.canvas.xPos : 0;
      drawHeight = graphHeight - graphPaddingTop - graphPaddingBtm;
      entry.canvas.yPos = yPos = entry.canvas.index * (drawHeight / totalRowCount);
      entry.canvas.yCirclePos = yCirclePos = entry.canvas.circleIndex * (drawHeight / totalRowCount);
      if (entry.canvas.index != null) {
        entry.canvas.grp.attr("transform", "translate(0," + yPos + ")");
      }
      entry.canvas.circleGrp.attr("transform", "translate(" + xPos + "," + yCirclePos + ")").attr('cursor', 'default');
      entry.formattedDate = moment(entry['timestamp']).format("DD MM YYYY, h:mm:ss a");
    };

    /* Draws Link between two nodes */
    drawLink = (function(_this) {
      return function(startEntry, endEntry) {

        /* Calculate start and end points */
        var endEntryTransform, endPt, fakePathEle, path, pathEle, startEntryTransform, startPt, strokeColor;
        startPt = {
          x: startEntry.canvas.xPos,
          y: startEntry.canvas.yCirclePos
        };
        endPt = {
          x: endEntry.canvas.xPos,
          y: endEntry.canvas.yPos + endEntry.canvas.yCirclePos
        };
        path = _this.generatePath(startPt, endPt);
        strokeColor = endEntry.type === "notification" ? _this.colors['notification'] : _this.colors['unknown'];
        self = _this;
        startEntryTransform = startEntry.canvas.circleGrp.attr('transform');
        endEntryTransform = endEntry.canvas.circleGrp.attr('transform');

        /* Create two paths. once is invisible and use for improving hover affordance while other is used for visual */
        if (startEntry.canvas.linkGrp == null) {
          startEntry.canvas.linkGrp = startEntry.canvas.grp.insert('g', ":first-child");
        }

        /* based on whether endpt is above or below start pt */
        if (startPt.y <= endPt.y) {
          fakePathEle = startEntry.canvas.linkGrp.insert('path', ":first-child");
          pathEle = startEntry.canvas.linkGrp.insert('path', ":first-child");
        } else {
          pathEle = startEntry.canvas.linkGrp.append('path');
          fakePathEle = startEntry.canvas.linkGrp.append('path');
        }
        fakePathEle.attr("d", path).attr('stroke', 'red').attr('opacity', 0).attr('stroke-width', _this.rem(16)).attr('fill', 'none').attr('class', 'provisiongraph-det-link-fake');
        pathEle.attr("d", path).attr('stroke', strokeColor).attr('stroke-width', _this.rem(2.5)).attr('fill', 'none').attr('class', 'provisiongraph-det-link').each(function() {
          var $this;
          $this = d3.select(this);
          if (endEntry.type === "notification") {
            return $this.attr({
              "stroke-dasharray": ".001 " + (self.rem(6)),
              "stroke-width": self.rem(4),
              "stroke-linecap": "round",
              "opacity": .6
            });
          }
        });

        /* Set tooltip on hover */
        _this.setDetailTootip(fakePathEle, endEntry);
      };
    })(this);

    /*
    This is method that traverses the tree. graph is drawn with child first policy . That is we go to deepest child and draw backwards(by adding to queue)
     */
    treeCalculator = (function(_this) {
      return function(data, parentGrp) {
        var circleGrp, circleGrpOffset, date, entry, grp, isFoundMidPt, j, len, nextIndex, ref, rowCount;
        rowCount = 0;
        self.convertJsonExpanded(data);
        grp = parentGrp.append('g').attr('class', 'provisiongraph-systemgrp').attr({
          'transform': 'translate(0,' + graphPaddingTop + ')'
        });
        if ((data.flow != null) && data.flow.length !== 0) {
          nextIndex = 0;

          /* loop each child and calculate row index, count etc */
          data.flow.forEach(function(entry, index) {
            var entryGrp, entryRowCount, ref;
            ref = treeCalculator(entry, grp), entryRowCount = ref[0], entryGrp = ref[1];
            rowCount += entryRowCount;
            entry.canvas = entry.canvas || {};
            entry.canvas.index = nextIndex;
            entry.canvas.rowCount = entryRowCount;
            entry.parent = data;
            nextIndex = nextIndex + entryRowCount;
            calculatedRange.minDistance = Math.min(calculatedRange.minDistance, entry.timestamp - data.timestamp);
            return (function(entry) {
              return addToQueue(function() {
                drawLink(data, entry);
              }, 1);
            })(entry);
          });
        }
        calculatedRange.minTimestamp = Math.min(data.timestamp, calculatedRange.minTimestamp);
        calculatedRange.maxTimestamp = Math.max(data.timestamp, calculatedRange.maxTimestamp);

        /* Now position current node */
        circleGrpOffset = Math.ceil(rowCount / 2 + (rowCount % 2 === 0 ? 1 : 0));

        /* Avoid overlap of nodes */
        if ((data.flow != null) && data.flow.length !== 0) {
          isFoundMidPt = false;
          rowCount = rowCount + 1;
          ref = data.flow;
          for (j = 0, len = ref.length; j < len; j++) {
            entry = ref[j];

            /* Adjust center node if it is too close to closeby child */
            if (!isFoundMidPt && (entry.canvas.index < circleGrpOffset && circleGrpOffset <= entry.canvas.index + entry.canvas.rowCount)) {
              if (Math.abs(entry.timestamp - data.timestamp) >= 1000) {
                rowCount = rowCount - 1;
                break;
              }
              circleGrpOffset = entry.canvas.index + entry.canvas.rowCount;
              isFoundMidPt = true;
            }

            /* Move all child if too close to child */
            if (circleGrpOffset - 1 <= entry.canvas.index) {
              entry.canvas.index += 1;
            }
          }
        }
        circleGrp = grp.append('g');
        data.canvas = {};
        data.canvas.circleIndex = circleGrpOffset;
        data.canvas.grp = grp;
        data.canvas.circleGrp = circleGrp;
        date = moment(data.timestamp);
        (function(data, date) {
          return addToQueue((function(_this) {
            return function() {
              return data.canvas.xPos = x(date.clone().toDate());
            };
          })(this));
        })(data, date);
        addToQueue(positionDetailNode, 0, data);
        addToQueue(self.drawDetailNode, 0, data);
        return [Math.max(rowCount, 1), grp];
      };
    })(this);
    ref = treeCalculator(data[0], detailGrp), totalRowCount = ref[0], detGrp = ref[1];
    self.addZoomButtons();

    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
     * crossFilter
     */
    x2 = d3.time.scale().range([0, this.width - xAxisGutter]);
    this.minExtent = void 0;

    /* handler functions for crossFilter brush */
    brushExtent = void 0;
    brushstarted = function() {
      return brushExtent = self.brush.extent();
    };
    brushended = function() {
      return brushExtent = void 0;
    };
    brushed = function() {
      var detailViewDomainMax, detailViewDomainMin, newExtent, newExtentWidth;
      newExtent = self.brush.extent();
      newExtentWidth = newExtent[1] - newExtent[0];
      if (newExtentWidth < self.minExtent) {
        if (moment(newExtent[0]).isSame(brushExtent[0], 'second')) {
          newExtent[0] = newExtent[1] - self.minExtent;
          detailViewDomainMin = self.detailViewDomain[0];
          if (newExtent[0] < detailViewDomainMin) {
            newExtent[0] = detailViewDomainMin;
            newExtent[1] = newExtent[0] - (-self.minExtent);
          }
        } else {
          newExtent[1] = newExtent[0] - (-self.minExtent);
          detailViewDomainMax = self.detailViewDomain[1];
          if (newExtent[1] > detailViewDomainMax) {
            newExtent[1] = detailViewDomainMax;
            newExtent[0] = newExtent[1] - self.minExtent;
          }
        }
      }
      self.redraw(newExtent);
    };
    this.redraw = function(newExtent, isAnimate) {
      var ref1;
      if (isAnimate == null) {
        isAnimate = false;
      }

      /* check domain boundary */
      if (newExtent[0] < self.detailViewDomain[0]) {
        newExtent[0] = self.detailViewDomain[0];
      }
      if (newExtent[1] > self.detailViewDomain[1]) {
        newExtent[1] = self.detailViewDomain[1];
      }
      self.detailViewContext.select('.x.brush').call(self.brush.extent(newExtent));
      self.detailRange = self.getPaddedDomain(newExtent);
      x.domain(self.detailRange);
      self.setTicks(xAxis, newExtent, 6);
      self.clear(detailGrp);
      self.detailViewFocus.select('.x.provisiongraph-axis').call(xAxis);
      self.detailViewFocus.select('.x.provisiongraph-axis path').attr({
        d: "M " + xAxisGutter + " 5V0 H " + self.width + "V5"
      });
      ref1 = treeCalculator(data[0], detailGrp), totalRowCount = ref1[0], detGrp = ref1[1];
      return runQueue();
    };
    this.brush = d3.svg.brush().x(x2).on("brushstart", brushstarted).on('brush', brushed).on("brushend", brushended);

    /* draw crossfilter */
    this.detailViewContext = this.detailView.append('g').attr('class', 'context').attr('transform', 'translate(' + (this.margin.left + xAxisGutter) + ',' + height + ')');
    this.detailViewContext.append('g').attr('class', 'brush-background').append('rect').attr({
      'y': -6,
      'width': this.width - xAxisGutter,
      'height': filterHeight + 7
    }).style({
      'visibility': 'visible'
    });
    this.drawBrush(this.detailViewContext, this.brush, filterHeight);

    /* Cross filter axis */
    x2startDate = calculatedRange.minTimestamp;
    x2endDate = calculatedRange.maxTimestamp;
    minExtent = moment.duration(10, 'seconds').asMilliseconds();

    /* if start and end date is same separate them by 10 seconds */
    if (moment(x2endDate).isSame(x2startDate, 'millisecond')) {
      x2startDate = moment(moment(x2startDate).subtract(minExtent / 2, 'milliseconds'));
      x2endDate = moment(moment(x2endDate).subtract(-minExtent / 2, 'milliseconds'));
      calculatedRange.minDistance = moment.duration(moment(x2endDate).diff(x2startDate)).asMilliseconds();
    }
    this.detailViewDomain = [x2startDate, x2endDate];

    /* sometimes minDistance is calculated as negative?? */
    this.minExtent = Math.abs(calculatedRange.minDistance);

    /* #needReview Let minExtent be atleast 80% of totalExtent */
    totalExtent = moment.duration(moment(x2endDate).diff(x2startDate)).asMilliseconds();
    if (this.minExtent / totalExtent > 0.8) {
      this.minExtent = 0.8 * totalExtent;
    }

    /* If minExtent is too small then make it 20% of total width */
    if (this.minExtent / totalExtent < 0.2) {
      this.minExtent = 4 * this.minExtent;
    }
    x2.domain(d3.extent(this.getPaddedDomain(this.detailViewDomain, 0)));
    xAxis2 = d3.svg.axis().scale(x2).orient('bottom').tickPadding(this.rem(4)).tickSize(this.rem(8), this.rem(8)).ticks(8).tickFormat(xBrushFormatDetail);
    this.detailViewContext.append('g').attr('class', 'x provisiongraph-axis').attr('transform', 'translate(0,' + filterHeight + ')').call(xAxis2);
    if (!this.detailRange) {

      /* set default brush extent as complete range */
      this.detailRange = this.getPaddedDomain(this.detailViewDomain, 0);
    }
    this.formatXaxisTicks(this.detailViewContext, this.detailRange, this.width, xAxisGutter);

    /* Detail view axis */
    xAxis = d3.svg.axis().scale(x).orient('bottom').ticks(9).tickPadding(this.rem(10)).tickSize(-height - this.margin.top, 5).tickFormat(xFormatDetail);
    this.detailViewFocus.select('.x.provisiongraph-axis').attr('transform', 'translate(0,' + (graphHeight + this.margin.top * 0.5) + ')').call(xAxis);
    this.detailViewFocus.select('.x.provisiongraph-axis path').attr({
      d: "M " + xAxisGutter + " 5V0 H " + this.width + "V5"
    });
    this.redraw(this.detailRange);

    /* make the graph draggable */
    maxDrag = this.width;
    drag = d3.behavior.drag().on('drag', function(d, i) {
      var extent, extentOffset, newExtent, offset;
      offset = d3.event.dx / maxDrag;
      newExtent = self.brush.extent();
      totalExtent = moment(newExtent[1]).diff(moment(newExtent[0]));
      extentOffset = totalExtent * offset * 5;
      newExtent = [moment(newExtent[0]).diff(extentOffset), moment(newExtent[1]).diff(extentOffset)];
      extent = moment(newExtent[1]).diff(newExtent[0]);
      if (newExtent[0] < self.detailViewDomain[0]) {
        newExtent[0] = moment(self.detailViewDomain[0]);
        newExtent[1] = moment(newExtent[0]).diff(-extent);
      }
      if (newExtent[1] > self.detailViewDomain[1]) {
        newExtent[1] = moment(self.detailViewDomain[1]);
        newExtent[0] = moment(newExtent[1]).diff(extent);
      }
      self.redraw(newExtent);
    });
    this.detailView.select('.provisiongraph-detailView-bg').call(drag);
  };

  ProvisioningGraph.prototype.drawCluster = function(data, isAnimate) {
    var allCirles, allFilterCirles, axisView, brush, brushExtent, brushed, brushended, brushstarted, bubbleAttr, cluster, clusterFilter, contextInner, contextViewXAxisTicks, domainInYears, drag, filterHeight, firstTick, getYAxisTime, graphHeight, height, lastTick, maxDrag, minExtent, redraw, self, sevenDays, textWidth, x, x2, x2axisDomain, x2endDate, x2startDate, xAxis, xAxis2, xAxisGutter, xBrushFormat, xEndDate, xFormatDetail, xStartDate, y, y2, yAxis, yAxis2, yAxisEle, yAxisTicks, yEndDate, yFormat, yStartDate;
    if (isAnimate == null) {
      isAnimate = true;
    }
    self = this;

    /* spacing needed */
    this.margin = {
      left: this.rem(40),
      right: this.rem(40),
      top: this.rem(65),
      bottom: this.rem(40)
    };

    /*
     * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
     * init
     */
    xStartDate = moment(this.range[0]);
    xEndDate = moment(this.range[1]);
    this.data = data;
    this.setDimensions();
    height = this.height - this.rem(30);
    graphHeight = height * 0.82 - this.margin.top;
    xAxisGutter = this.margin.left / 2;
    filterHeight = height - graphHeight - this.rem(60) - this.margin.top;

    /* Calculate Range */

    /* xAxis for main clusterGraph */
    x = d3.time.scale().range([this.margin.left, this.width]);
    y = d3.time.scale().range([0, graphHeight]);

    /* xAxis for crossFilter Graph */
    x2startDate = this.startDate;
    x2endDate = this.endDate;
    data = this.data;
    x2axisDomain = [x2startDate, x2endDate];
    domainInYears = moment(x2axisDomain[1]).diff(x2axisDomain[0], 'years');

    /* Date formats */
    xFormatDetail = d3.time.format.multi([
      [
        ".%L", function(d) {
          return d.getMilliseconds();
        }
      ], [
        ":%S", function(d) {
          return d.getSeconds();
        }
      ], [
        "%I:%M", function(d) {
          return d.getMinutes();
        }
      ], [
        "%I %p", function(d) {
          return d.getHours();
        }
      ], [
        "%m/%d", function(d) {
          return d.getDate() && d.getDate() !== 1;
        }
      ], [
        "%m/%Y", function(d) {
          return d.getMonth();
        }
      ], [
        "%Y", function(d) {
          return true;
        }
      ]
    ]);
    xBrushFormat = d3.time.format.multi([
      [
        ":%S.%L", function(d) {
          return d.getMilliseconds();
        }
      ], [
        ":%S", function(d) {
          return d.getSeconds();
        }
      ], [
        "%I:%M %p", function(d) {
          return d.getMinutes();
        }
      ], [
        "%I %p", function(d) {
          return d.getHours();
        }
      ], [
        "%m/%d", function(d) {
          return d.getDate() && d.getDate() !== 1;
        }
      ], [
        "%m/%Y", function(d) {
          return true;
          return d.getMonth();
        }
      ], [
        "%m/%d/%y", function(d) {
          if (domainInYears < 2) {
            return true;
          } else {
            return true;
          }
        }
      ], [
        "%Y", function(d) {
          return true;
        }
      ]
    ]);
    yFormat = "%-I %p";

    /* Generate date given time */
    getYAxisTime = function(h, m, s, ms) {
      if (m == null) {
        m = 0;
      }
      if (s == null) {
        s = 0;
      }
      if (ms == null) {
        ms = 0;
      }
      return moment({
        y: 1990,
        d: 1,
        h: h,
        m: m,
        s: s,
        ms: ms
      }).toDate();
    };

    /* Dates for start and end on yaxis. Acutal dates */
    yStartDate = getYAxisTime(0);
    yEndDate = getYAxisTime(23, 59, 59, 59);
    y.domain([yEndDate, yStartDate]);

    /* Create axis */
    xAxis = d3.svg.axis().scale(x).orient('bottom').tickPadding(this.rem(12)).tickSize(-height - this.margin.top, 5).tickFormat(xFormatDetail);
    yAxisTicks = [getYAxisTime(4), getYAxisTime(8), getYAxisTime(12), getYAxisTime(16), getYAxisTime(20), getYAxisTime(24)];
    yAxis = d3.svg.axis().scale(y).orient('left').tickSize(-this.width + this.margin.left).tickPadding(0).tickFormat(d3.time.format(yFormat)).tickValues(yAxisTicks);

    /*
     * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
     * Its time for drawing
     */

    
    this.clusterView.append('rect').attr({
      'width': this.width,
      'height': this.height,
      'transform': 'translate(' + this.margin.left + ',' + (-this.margin.top) + ')',
      'class': 'provisiongraph-clusterview-bg'
    }).style({
      'fill': 'transparent'
    });
    this.clusterView.append('defs').append('clipPath').attr('id', 'clip').append('rect').attr({
      'width': this.width - this.margin.right,
      'height': this.height + this.margin.top,
      'stroke-width': 30,
      'stroke-opacity': '0.5',
      'transform': 'translate(' + this.margin.left + ',' + (-this.margin.top) + ')'
    });
    this.clusterView.select('defs').append('clipPath').attr('id', 'crossFilterMask').append('rect').attr({
      'width': this.width + 2 * this.margin.left + xAxisGutter + this.margin.right,
      'height': filterHeight + 7,
      'transform': 'translate(-' + (this.margin.left + xAxisGutter) + ',-6)'
    });

    /* clusterGraph (mainView). Start by drawing axis. */
    this.focus = this.clusterView.append('g').attr('class', 'focus').attr('transform', 'translate(' + this.margin.left + ',' + (2 * this.margin.top) + ')');
    axisView = this.focus.append('g').attr('class', 'fadeview');
    axisView.append('g').attr('class', 'x provisiongraph-axis').attr('transform', 'translate(0,' + graphHeight + ')').call(xAxis);
    axisView.selectAll('.x.provisiongraph-axis line').attr('transform', 'translate(0,' + self.rem(6) + ')');
    axisView.select('.x.provisiongraph-axis path').attr({
      d: "M " + xAxisGutter + " 7V0 H " + this.width + "V7"
    });
    axisView.append('g').attr('class', 'y provisiongraph-axis').call(yAxis);

    /* Calculate yaxis width to set appropriate graph offset left */
    textWidth = 30;
    yAxisEle = this.focus.select('.y.provisiongraph-axis');
    yAxisEle.selectAll('text').each(function(d, i) {
      return textWidth = textWidth < this.getBBox().width ? this.getBBox().width : textWidth;
    });
    yAxisEle.attr('transform', 'translate(' + textWidth + ',0)');
    sevenDays = window.moment.duration(7, 'days').asMilliseconds();

    /* Sets attribute for bubbles in cluster view */
    bubbleAttr = function(d, shape, isContextView) : Object {
      var date, diameter, points, radius, xPos, yPos;
      if (shape == null) {
        shape = "circle";
      }
      if (isContextView == null) {
        isContextView = false;
      }
      date = moment(d.lastUpdatedDate);
      if (isContextView === false) {
        xPos = x(date.clone().toDate());
        if (self.minDuration > sevenDays) {
          xPos = x(date.clone().startOf('day').toDate());
        }
        yPos = y(date.clone().date(1).month(0).year(1990).toDate());
      } else {
        xPos = x2(date.clone().toDate());
        if (self.minDuration > sevenDays) {
          xPos = x2(date.clone().startOf('day').toDate());
        }
        yPos = y2(date.clone().date(1).month(0).year(1990).toDate());
      }
      radius = self.rem(10);
      d.canvas = d.canvas || {};
      d.canvas.xPos = xPos;
      d.canvas.yPos = yPos;
      d.canvas.radius = radius;
      if (shape === 'circle') {
        return {
          'cx': xPos,
          'cy': yPos,
          'fill': self.getColor(self.getStatus(d.woStatus)),
          'r': radius,
          'class': 'provisiongraph-circle'
        };
      } else {
        if (isContextView === true) {
          radius = self.rem(2);
        }
        diameter = radius * 2;
        points = xPos + "," + (yPos - radius) + "\n" + (xPos + radius) + "," + (yPos + diameter * .28 * 1.1 - radius) + "\n" + (xPos + radius) + "," + (yPos + diameter * .72 * 1.1 - radius) + "\n" + xPos + "," + (yPos + diameter * 1.1 - radius) + "\n" + (xPos - radius) + "," + (yPos + diameter * .72 * 1.1 - radius) + "\n" + (xPos - radius) + "," + (yPos + diameter * .28 * 1.1 - radius);
        return {
          'points': points,
          'fill': self.getColor(self.getStatus(d.woStatus)),
          'class': 'provisiongraph-circle'
        };
      }
    };

    /*
     * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
     * crossFilter
     */
    x2 = d3.time.scale().range([0, this.width - xAxisGutter]);
    x2.domain(d3.extent(x2axisDomain));
    xAxis2 = d3.svg.axis().scale(x2).orient('bottom').tickPadding(this.rem(4)).tickSize(this.rem(8), this.rem(8)).ticks(8).tickFormat(xBrushFormat);
    y2 = d3.time.scale().range([0, filterHeight - this.rem(5)]);
    y2.domain(y.domain());
    yAxis2 = d3.svg.axis().scale(y2).orient('left').tickSize(0).tickPadding(0).tickFormat('').tickValues(yAxisTicks);
    minExtent = this.minDuration;
    redraw = function(newExtent) {
      var brushExtent;
      if (newExtent[0] < x2axisDomain[0]) {
        newExtent[0] = moment(x2axisDomain[0]);
      }
      if (newExtent[1] > x2axisDomain[1]) {
        newExtent[1] = moment(x2axisDomain[1]);
      }
      self.range = newExtent;
      brush.extent(newExtent);
      x.domain(newExtent);
      brushExtent = newExtent;
      self.setTicks(xAxis, newExtent);
      self.context.select('.x.brush').call(brush.extent(newExtent));
      self.focus.select('.x.provisiongraph-axis').call(xAxis);
      self.focus.selectAll('.x.provisiongraph-axis line').attr('transform', 'translate(0,' + self.rem(6) + ')');
      self.focus.select('.x.provisiongraph-axis path').attr({
        d: "M" + xAxisGutter + " 7V0 H " + self.width + "V7"
      });
      return self.focus.select('.provisiongraph-cluster').selectAll('.provisiongraph-circle').data(data).each(function(d) {
        var $this;
        $this = d3.select(this);
        return $this.attr(bubbleAttr(d, d.canvas.shape));
      });
    };
    brushed = function() {
      var duration, newExtent, newExtentDuration;
      newExtent = brush.extent();
      newExtentDuration = moment(newExtent[1]).diff(moment(newExtent[0]), 'milliseconds') + 1;
      if (newExtentDuration < minExtent) {
        duration = moment(newExtent[1]).diff(moment(newExtent[0])) / 2;
        newExtent[1] = moment(newExtent[0]).subtract(-self.minDuration, 'milliseconds');
        if (newExtent[1] > x2axisDomain[1]) {
          newExtent[1] = moment(x2axisDomain[1]);
          newExtent[0] = moment(newExtent[1]).subtract(self.minDuration, 'milliseconds');
        }
        brush.extent(newExtent);
      }
      redraw(newExtent);
    };
    brushExtent = void 0;
    brushstarted = function() {
      return brushExtent = brush.extent();
    };
    brushended = function() {
      return brushExtent = void 0;
    };
    brush = d3.svg.brush().x(x2).on("brushstart", brushstarted).on('brush', brushed).on("brushend", brushended);
    brush.extent(d3.extent(this.range));

    /* Draw Axis for CrossFilter */
    this.context = this.clusterView.append('g').attr('class', 'context').attr('transform', 'translate(' + (this.margin.left + xAxisGutter) + ',' + height + ')').attr('clip-path', 'url(#crossFilterMask)');
    contextInner = this.context.append('g').attr('class', 'context-inner');
    contextInner.append('g').attr('class', 'y provisiongraph-axis').call(yAxis2);
    contextInner.append('g').attr('class', 'brush-background').append('rect').attr({
      'y': -6,
      'width': this.width - xAxisGutter,
      'height': filterHeight + 7
    }).style({
      'visibility': 'visible'
    });
    contextInner.append('g').attr('class', 'x provisiongraph-axis').attr('transform', 'translate(0,' + filterHeight + ')').call(xAxis2);

    /* format first and lastTick in crossFilter axis as 'YYYY' */
    contextViewXAxisTicks = contextInner.select('.x.provisiongraph-axis').selectAll('.tick text')[0];
    firstTick = contextViewXAxisTicks[0], lastTick = contextViewXAxisTicks[contextViewXAxisTicks.length - 1];
    d3.selectAll([firstTick, lastTick]).text(function(d) {
      if (self.rangeContext === 'second' || self.rangeContext === 'millisecond') {
        return moment(d).format("MM/DD/YY h:m A");
      } else if (self.rangeContext === 'minute') {
        return moment(d).format("MM/DD/YY h A");
      } else if (domainInYears < 1) {
        return moment(d).format("MM/DD/YY");
      } else {
        return moment(d).format("YYYY");
      }
    }).style({
      'font-weight': '600'
    });
    this.formatXaxisTicks(contextInner, this.range, this.width, xAxisGutter);

    /* Draw Cluster Graph for CrossFilter */
    clusterFilter = contextInner.append('g').attr({
      'class': 'provisiongraph-cluster',
      'transform': 'translate(0,' + 0 + ')'
    });
    allFilterCirles = clusterFilter.selectAll('.provisiongraph-circle').data(data).enter().append(function(d) {
      d.canvas = d.canvas || {};
      d.canvas.shape = d.type === 'biller' ? 'circle' : 'polygon';
      return document.createElementNS("http://www.w3.org/2000/svg", d.canvas.shape);
    }).each(function(d, i) {
      var $this;
      $this = d3.select(this);
      $this.attr(bubbleAttr(d, d.canvas.shape, true));
    }).attr({
      'r': self.rem(2)
    });
    this.drawBrush(contextInner, brush, filterHeight);
    this.clusterView.select('defs').select('#crossFilterMask').select('rect').attr({
      'height': contextInner.node().getBBox().height
    });

    /* Draw Cluster Graph in focus */
    cluster = this.focus.append('g').attr({
      'class': 'provisiongraph-cluster',
      'transform': 'translate(0,' + 0 + ')',
      'clip-path': 'url(#clip)'
    });

    /* Main cluster view drawing */
    allCirles = cluster.selectAll('.provisiongraph-circle').data(data).enter().append(function(d) {
      return document.createElementNS("http://www.w3.org/2000/svg", d.canvas.shape);
    }).each(function(d) {
      var $this;
      $this = d3.select(this);
      $this.attr(bubbleAttr(d, d.canvas.shape));
    }).attr({
      'r': self.rem(10)
    }).on('mouseover', function(d) {
      if (self.isAnimating) {
        return;
      }
      d3.select(this).transition().ease('quad-in').duration(200).attr('transform', "translate(" + d.canvas.xPos + "," + d.canvas.yPos + ") scale(1.3) translate(" + (-1 * d.canvas.xPos) + "," + (-1 * d.canvas.yPos) + ")");
    }).on('mouseout', function(d) {
      if (d.canvas.isClicked === true) {
        return;
      }
      d3.select(this).transition().ease('quad-in').duration(200).attr('transform', "translate(" + d.canvas.xPos + "," + d.canvas.yPos + ") scale(1) translate(" + (-1 * d.canvas.xPos) + "," + (-1 * d.canvas.yPos) + ")");
    });

    /* On click cluster view bubble */
    allCirles.on('click', function(d) {
      var $this, cx, cy, interval, isStopAnimation, loadingAnimationProgress, path, pathEle, progress, r, totalLength;
      if (self.isAnimating) {
        return;
      }
      self.isAnimating = true;

      /* hide tooltip when opening detail */
      $this = d3.select(this);
      d.canvas.isClicked = true;
      $this.classed('is-active', true);
      $this.attr('transform', "translate(" + d.canvas.xPos + "," + d.canvas.yPos + ") scale(1.3) translate(" + (-1 * d.canvas.xPos) + "," + (-1 * d.canvas.yPos) + ")");
      $this.on("mouseout.tooltip")();
      self.clickedBubbleData = d;
      if (d.canvas.shape === "circle") {
        r = d.canvas.radius;
        cx = d.canvas.xPos;
        cy = d.canvas.yPos;
        path = "M " + cx + " " + cy + " m " + 0. + ", " + (-r) + " a " + r + "," + r + " 0 1,1 " + 0. + "," + (r * 2) + " a " + r + "," + r + " 0 1,1 " + 0. + "," + (-(r * 2));
      } else {
        path = convertPolyToPath(this) + ' Z';
      }
      pathEle = self.clusterView.select('.provisiongraph-cluster').insert('path', 'is-active');
      pathEle.attr('fill', 'none').attr('class', 'provisiongraph-loader').attr('d', path).attr('style', $this.attr('style')).attr('transform', "translate(" + d.canvas.xPos + "," + d.canvas.yPos + ") scale(1.6) translate(" + (-1 * d.canvas.xPos) + "," + (-1 * d.canvas.yPos) + ")");
      totalLength = Math.ceil(pathEle.node().getTotalLength());
      pathEle.attr("stroke-dasharray", totalLength + " " + totalLength).attr("stroke-dashoffset", totalLength);
      isStopAnimation = false;
      loadingAnimationProgress = function(progress, time) {
        if (time == null) {
          time = 250;
        }
        pathEle.transition().duration(time).attr("stroke-dashoffset", totalLength * (100 - progress) / 100).each('end', function() {
          if (isStopAnimation) {
            pathEle.classed('is-inactive', true);
            setTimeout((function(_this) {
              return function() {
                return pathEle.remove();
              };
            })(this));
          }
        });
      };
      progress = 24;
      interval = setInterval(function() {
        progress = progress * 1.6;
        progress = Math.min(75, progress);
        return loadingAnimationProgress(progress);
      }, 400);
      self.clickedItemData = d;
      if (typeof self.onClickedDetail === "function") {
        self.onClickedDetail(d, function(data) {
          self.isAnimating = false;
          loadingAnimationProgress(100, 400);
          clearInterval(interval);
          isStopAnimation = true;
          if (data === "error") {
            $this.classed('is-active', false);
            setTimeout(function() {
              return $this.style('transform', '');
            }, 200);
            setTimeout(function() {
              return self.showDetailDataError($this, d);
            }, 300);
            return;
          }
          return setTimeout(function() {
            self.clickedItemData.canvas.isClicked = false;
            return self.goToDetail(data, true, true);
          }, 400);
        });
      }
    }).call(d3.helper.tooltip(function(d, i) {

      /* Helper content */
      return [
        "<table>\n    <tr class=\"is-wrap\">\n        <td>AC# </td>\n        <td>: " + d.accountNumber + "</td>\n    </tr>\n    <tr class=\"is-wrap\">\n        <td>WO#</td>\n        <td>: " + d.woNumber + "</td>\n    </tr>\n    <tr class=\"is-wrap\">\n        <td>Timestamp</td>\n        <td>: " + (moment(d.lastUpdatedDate).format(self.config.dateFormat)) + "</td>\n    </tr>\n    <tr class=\"is-wrap\">\n        <td>Version</td>\n        <td>: " + d.woVersion + "</td>\n    </tr>\n</table>\n", {
          color: self.getColor(self.getStatus(d.woStatus)),
          offset: -2.3 * d.canvas.radius
        }
      ];
    }));

    /* make the clusterGraph draggable */
    maxDrag = this.width;
    drag = d3.behavior.drag().on('drag', function(d, i) {
      var extent, extentOffset, newExtent, offset, totalExtent;
      offset = d3.event.dx / maxDrag;
      newExtent = brush.extent();
      totalExtent = moment(newExtent[1]).diff(moment(newExtent[0]));
      extentOffset = totalExtent * offset * 10;
      newExtent = [moment(newExtent[0]).diff(extentOffset), moment(newExtent[1]).diff(extentOffset)];
      extent = moment(newExtent[1]).diff(newExtent[0]);
      if (newExtent[0] < x2axisDomain[0]) {
        newExtent[0] = moment(x2axisDomain[0]);
        newExtent[1] = moment(newExtent[0]).diff(-extent);
      }
      if (newExtent[1] > x2axisDomain[1]) {
        newExtent[1] = moment(x2axisDomain[1]);
        newExtent[0] = moment(newExtent[1]).diff(extent);
      }
      redraw(newExtent);
    });
    this.clusterView.select('.provisiongraph-clusterview-bg').call(drag);
    redraw(this.range);

    /* animate fade in */
    if (isAnimate) {
      allCirles.style({
        'opacity': 0
      }).attr('transform', function(d) {
        return "translate(" + d.canvas.xPos + "," + d.canvas.yPos + ") scale(0.3) translate(" + (-1 * d.canvas.xPos) + "," + (-1 * d.canvas.yPos) + ")";
      }).transition().duration(600).delay(function() {
        return Math.random() * 800 + 200;
      }).style({
        'opacity': 1
      }).attr('transform', function(d) {
        return "translate(" + d.canvas.xPos + "," + d.canvas.yPos + ") scale(1) translate(" + (-1 * d.canvas.xPos) + "," + (-1 * d.canvas.yPos) + ")";
      });
    }
  };


  /* formats tooltip entry. like timestamp to human readable time */

  ProvisioningGraph.prototype.formatTooltip = function(val) {
    if (typeof val === "number" && (!isNaN(val)) && moment(val).isValid() && val.toString().length >= 13) {
      val = moment(this.timezoneCorrection(val)).format(this.config.dateFormat);
    }
    return val;
  };

  ProvisioningGraph.prototype.setDetailTootip = function(tarEle, endEntry) {

    /* timeout is set. so that when animating from cluster to detail shouldnt trigger tooltip */
    setTimeout((function(_this) {
      return function() {
        return tarEle.datum(endEntry).classed('provisiongraph-has-tooltip', true).call(d3.helper.tooltip(function(d, i) {
          var html, index, k, multiLineFields, outputVal, ref, singleLineFields, twoInRow, v;
          html = '<table>';
          index = 0;
          singleLineFields = {};
          multiLineFields = {};
          twoInRow = Object.keys(endEntry).length > 4;

          /* Grp by single line(short entries) and multi line entries(like error msg) and handle as per requirement */
          ref = endEntry.tooltip[0];
          for (k in ref) {
            v = ref[k];

            /* Is it a long string */
            if (typeof v === "string" && v.length > 40) {
              multiLineFields[k] = v;
            } else {
              singleLineFields[k] = v;
            }
          }
          for (k in singleLineFields) {
            v = singleLineFields[k];
            if (twoInRow && index % 2 === 1) {
              html += "<td class=\"provisiongraph-tooltip-gutter\"></td>";
            } else {
              html += "<tr class=\"is-wrap\">";
            }
            outputVal = _this.formatTooltip(v);
            html += "<td class=\"provisiongraph-tooltip-label\">" + (toCapitalizedWords(k)) + "</td>\n<td class=\"provisiongraph-tooltip-sep\">:</td>\n<td class=\"provisiongraph-tooltip-value\">" + outputVal + "</td>";
            if (!twoInRow || index % 2 === 1) {
              html += "</tr>";
            }
            index++;
          }
          if (index % 2 === 1) {
            html += "<td></td><td></td><td></td></tr>";
          }
          for (k in multiLineFields) {
            v = multiLineFields[k];
            outputVal = _this.formatTooltip(v);
            html += "<td class=\"provisiongraph-tooltip-label\">" + (toCapitalizedWords(k)) + "</td>\n<td class=\"provisiongraph-tooltip-sep\">:</td>\n<td class=\"provisiongraph-tooltip-value\" colspan=\"5\">" + outputVal + "</td>";
            html += "</tr>";
            index++;
          }
          html += '</table>';
          return [
            html, {
              color: _this.getColor(endEntry.status),
              offset: -_this.rem(18)
            }
          ];
        }));
      };
    })(this), 500);
  };


  /* Go To detail or return back to cluster view */

  ProvisioningGraph.prototype.goToDetail = function(data, isOpen, isAnimate) {
    var bboxForActive, bboxForCluster, bboxForContext, bboxForDetail, clickedEle, cluster, contextBox, d, detail, detailViewFocus, onComplete, tooltipElements;
    if (isOpen == null) {
      isOpen = true;
    }
    if (isAnimate == null) {
      isAnimate = false;
    }
    if (this.isAnimating || (isOpen === this.isDetailOpen && isAnimate)) {
      return;
    }
    this.isDetailOpen = isOpen;
    this.isAnimating = true;
    if (data != null) {
      this.detailData = data;
    }
    if (isOpen) {
      onComplete = (function(_this) {
        return function() {
          _this.isAnimating = false;
          return _this.clusterView.style("visibility", "hidden");
        };
      })(this);
      this.drawDetail();
      if (isAnimate) {

        /* go to detail animation */
        cluster = this.clusterView.select('.provisiongraph-cluster');
        detail = this.detailView.select('.provisiongraph-cluster');
        contextBox = this.baseGroup.select('.context-inner');
        detailViewFocus = this.detailView.select('.focus');
        clickedEle = cluster.select('.provisiongraph-circle.is-active');
        this.bboxForContext = bboxForContext = contextBox.node().getBBox();
        this.bboxForCluster = bboxForCluster = cluster.node().getBBox();
        this.bboxForDetail = bboxForDetail = detailViewFocus.node().getBBox();
        bboxForActive = clickedEle.node().getBBox();

        /* Cluster view animation */
        cluster.attr('opacity', 1).attr('transform', "scale(1)").transition().duration(600).attr('opacity', 0).attr('transform', function() {
          var centerX, xPos, yPos;
          centerX = bboxForCluster.x + (bboxForCluster.width - bboxForCluster.x) / 2.0;
          xPos = bboxForActive.x;
          yPos = bboxForActive.y;
          return "translate(" + xPos + "," + yPos + ") scale(1.8) translate(" + (-xPos) + "," + (-yPos) + ")";
        }).each("end", (function(_this) {
          return function() {
            return onComplete();
          };
        })(this));

        /* Animate other than mainView */
        this.baseGroup.select('.fadeview').attr('opacity', 1).transition().duration(200).attr('opacity', 0);

        /* cross filter moves down */
        contextBox.transition().duration(400).attr('transform', "translate(0," + (bboxForContext.height * 1.2) + ")");

        /* detail view fades in */
        this.detailView.attr('opacity', 0).transition().duration(650).attr('opacity', 1);
        d = this.clickedItemData;

        /* Clicked ele scales sligthy more than peers */
        clickedEle.transition().duration(570).attr("transform", "translate(" + d.canvas.xPos + "," + d.canvas.yPos + ") scale(3) translate(" + (-1 * d.canvas.xPos) + "," + (-1 * d.canvas.yPos) + ")");

        /* Detail animation */
        detail.attr('transform', "translate(" + (bboxForDetail.width / 2.0) + "," + (bboxForCluster.height / 3.0) + ") scale(0.8) translate(" + (-bboxForDetail.width / 2.0) + "," + (-bboxForCluster.height / 3.0) + ")").transition().duration(650).attr('transform', "scale(1)");
      } else {
        onComplete();
        this.drawDetail();
      }
    } else {

      /* close detail animation. its reverse of above */
      this.isAnimating = true;
      this.clusterView.style("visibility", "");
      clickedEle = this.clusterView.select('.provisiongraph-circle.is-active');
      onComplete = (function(_this) {
        return function() {
          _this.isAnimating = false;
          _this.detailView.selectAll("*").remove();
          _this.detailData = void 0;
          _this.detailRange = void 0;
          return _this.clickedItemData = void 0;
        };
      })(this);
      cluster = this.clusterView.select('.provisiongraph-cluster');
      detail = this.detailView.select('.provisiongraph-cluster');
      contextBox = this.baseGroup.select('.context-inner');
      detailViewFocus = this.detailView.select('.focus');
      tooltipElements = this.detailView.selectAll('.provisiongraph-has-tooltip');
      bboxForDetail = this.bboxForDetail;
      bboxForCluster = this.bboxForCluster;
      bboxForContext = this.bboxForContext;
      tooltipElements.on('mouseover.tooltip', null);

      /* Cluster view animation */
      cluster.attr('opacity', 0).transition().duration(400).attr('opacity', 1).attr('transform', "scale(1)").each("end", (function(_this) {
        return function() {
          return onComplete();
        };
      })(this));
      d = this.clickedItemData;
      clickedEle.classed('is-active', false).transition().duration(700).attr("transform", "translate(" + d.canvas.xPos + "," + d.canvas.yPos + ") scale(1) translate(" + (-1 * d.canvas.xPos) + "," + (-1 * d.canvas.yPos) + ")");

      /* Animate other than mainView */
      this.baseGroup.select('.fadeview').attr('opacity', 0).transition().delay(200).duration(200).attr('opacity', 1);
      contextBox.transition().delay(100).duration(300).attr('transform', "");

      /* Detailview animation */
      detail.transition().duration(400).attr('transform', "translate(" + (bboxForDetail.width / 2.0) + "," + (bboxForCluster.height / 3.0) + ") scale(0.8) translate(" + (-bboxForDetail.width / 2.0) + "," + (-bboxForCluster.height / 3.0) + ")");
      this.detailView.attr('opacity', 1).transition().duration(400).attr('opacity', 0).each('end', onComplete);
    }
  };


  /* When there is error fetching detail data, callback("error") can be called. This shows tooltip to try again */

  ProvisioningGraph.prototype.showDetailDataError = function(ele, d) {
    var $ele, color, html, offset, scrollLeft, scrollTop, tooltip;
    $ele = $(ele.node());
    offset = $ele.offset();
    scrollTop = $(window).scrollTop();
    scrollLeft = $(window).scrollLeft();
    color = this.colors["failed"];
    html = "<div class=\"provisiongraph-dataerror\" style=\"color:" + color + "\">Error, Please retry</div>";
    tooltip = new Tooltip(html, {
      color: color,
      offset: -1.2 * d.canvas.radius
    });
    tooltip.position([offset.left - scrollLeft + d.canvas.radius * 1.2, offset.top - scrollTop]);
    setTimeout(function() {
      return tooltip.remove();
    }, 2000);
  };


  /* Browser Unsupported message */

  ProvisioningGraph.prototype.showUnsupported = function() {
    this.$ele.append("<div class=\"provisiongraph-nodata\">\nBrowser Unsupported\n</div>");
  };

  ProvisioningGraph.prototype.addZoomButtons = function() {
    var borderColor, color, drawZoomBtn, iconSize, offsetTop, radius, self, zoomGrp;
    zoomGrp = this.detailView.append('g');
    iconSize = this.rem(13);
    radius = this.rem(14);
    self = this;
    color = '#6c6c6c';
    borderColor = '#f6f6f6';
    offsetTop = this.netHeight * .1 + 40;
    zoomGrp.attr('transform', "translate(" + (this.netWidth * .95) + "," + offsetTop + ")");
    drawZoomBtn = function(btnText, iconYPos) {

      /* Draw circle */
      var btnGrp;
      btnGrp = zoomGrp.append('g').attr('class', 'provisiongraph-zoombtn');
      btnGrp.attr('transform', "translate(0," + iconYPos + ")");
      btnGrp.append('circle').each(function() {
        var $this, xPos, yPos;
        xPos = 0;
        yPos = 0;
        $this = d3.select(this);
        $this.attr({
          'cx': 0,
          'cy': 0,
          'r': radius,
          'fill': "url(#gradient)",
          'style': "transform-origin:" + xPos + "px " + yPos + "px;",
          'class': 'provisiongraph-det-node',
          "stroke": "" + borderColor,
          "stroke-width": self.rem(2.5)
        });
      });

      /* Draw icon using font awesome */
      btnGrp.append('text').attr('class', 'provisiongraph-det-icon').attr('x', 0).attr('y', self.rem(4)).attr('font-size', iconSize).attr('fill', color).text(btnText);
      return btnGrp;
    };

    /* plus btn */
    drawZoomBtn('\uf00e', 0).on('click', (function(_this) {
      return function(d) {
        return _this.onZoomButtonClicked(1);
      };
    })(this));

    /* min btn */
    drawZoomBtn('\uf010', iconSize * 2.8).on('click', (function(_this) {
      return function(d) {
        var zoomRatio;
        zoomRatio = (_this.brush.extent()[1] - _this.brush.extent()[0]) / (_this.detailViewDomain[1] - _this.detailViewDomain[0]);
        if (_this.zoomValue === 3 || zoomRatio > 0.85) {
          return _this.onZoomButtonClicked(-1);
        } else {
          return _this.onZoomButtonClicked(0);
        }
      };
    })(this));
  };


  /* ZoomValueranges from 1-3 */

  ProvisioningGraph.prototype.zoomValue = 2;


  /* On zoom btn clicked */

  ProvisioningGraph.prototype.onZoomButtonClicked = function(direction) {
    var newExtent, range, setExtent, targetZoomValue;
    targetZoomValue = this.zoomValue + direction;
    if (!((0 < targetZoomValue && targetZoomValue < 4))) {
      return;
    }
    switch (targetZoomValue) {
      case 1:

        /* Go to cluster */
        this.goToDetail(void 0, false, true);
        targetZoomValue = 2;
        break;
      case 2:
        setExtent = (function(_this) {
          return function(ext) {
            return _this.redraw(ext);
          };
        })(this);

        /* Zoom out expanded view */
        this.detailView.append('g').transition().duration(500).attrTween("fakeAttr", (function(_this) {
          return function(d) {
            var count, interpolate;
            interpolate = d3.interpolate(_this.brush.extent(), _this.detailViewDomain);
            count = 0;
            return function(t, i) {
              var extent;
              count += 1;
              if (count % 2 === 0) {
                return;
              }
              extent = interpolate(t);
              setExtent(extent);
              return 1;
            };
          };
        })(this)).each('end', function() {
          return d3.select(this).remove();
        });
        break;
      case 3:

        /* Zoom in expanded view */
        newExtent = [];
        range = this.detailViewDomain;
        newExtent[0] = range[0];
        newExtent[1] = newExtent[0] - (-this.minExtent);
        setExtent = (function(_this) {
          return function(ext) {
            return _this.redraw(ext);
          };
        })(this);
        this.detailView.append('g').transition().duration(500).attrTween("fakeAttr", (function(_this) {
          return function(d) {
            var interpolate;
            interpolate = d3.interpolate(_this.brush.extent(), newExtent);
            return function(t) {
              var extent;
              extent = interpolate(t);
              setExtent(extent);
              return 1;
            };
          };
        })(this)).each('end', function() {
          return d3.select(this).remove();
        });
    }
    this.zoomValue = targetZoomValue;
  };

  return ProvisioningGraph;

})();


/*
 * Independent tooltip class
 */

Tooltip = (function() {
  function Tooltip(contentHtml1, options1) {
    var arrowHTML, color, contentHtml, options, tooltipDiv, tooltipHTML;
    this.contentHtml = contentHtml1;
    this.options = options1;
    contentHtml = this.contentHtml;
    options = this.options;
    color = options.color;
    this.boundary = {
      left: 0,
      right: $(window).width(),
      top: 0
    };

    /* Tooltip is html element (not svg) and is appended to body */
    this.bodyNode = d3.select('body');

    /* Clean up existing tooltips */
    this.bodyNode.selectAll('div.tooltip').remove();

    /* Append tooltip */
    this.tooltipDiv = tooltipDiv = this.bodyNode.append('div').attr('class', 'provisiongraph-tooltip');

    /* position it based on mouse position */
    tooltipDiv.style({
      'border-color': "" + color
    });
    tooltipDiv.classed("is-active", true);

    /* Create html for tooltio */
    arrowHTML = "<div class='provisiongraph-tooltip-arrow'></div>";
    tooltipHTML = arrowHTML + contentHtml;
    tooltipDiv.html(tooltipHTML);
    this.arrow = tooltipDiv.select('.provisiongraph-tooltip-arrow');

    /* set tooltip arrow color */
    this.arrow.attr('style', "border-top-color:" + color);
    return this;
  }

  Tooltip.prototype.position = function(absoluteMousePos) {
    var arrowLeft, arrowTop, arrowTransform, boundary, left, offset, options, tooltipDiv, tooltipHeight, tooltipWidth, top;
    this.tooltipWidth = $(this.tooltipDiv[0][0]).outerWidth();
    this.tooltipHeight = $(this.tooltipDiv[0][0]).outerHeight();
    tooltipDiv = this.tooltipDiv;
    options = this.options;
    tooltipWidth = this.tooltipWidth;
    tooltipHeight = this.tooltipHeight;
    boundary = this.boundary;
    offset = options.offset != null ? options.offset : 0;
    left = absoluteMousePos[0];
    top = absoluteMousePos[1] + offset;
    arrowTransform = '';
    arrowLeft = tooltipWidth / 2.0 - 2;
    arrowTop = '100%';
    if (absoluteMousePos[0] > (boundary.right - tooltipWidth / 2.0 - 30)) {
      left = Math.ceil(boundary.right - tooltipWidth / 2.0 - 30);
      arrowLeft += absoluteMousePos[0] - left;
    } else if (absoluteMousePos[0] < (boundary.left + tooltipWidth / 2.0 + 30)) {
      left = Math.ceil(boundary.left + tooltipWidth / 2.0 + 30);
      arrowLeft += absoluteMousePos[0] - left;
    }

    /* now check top out of boundary */
    if (absoluteMousePos[1] < (boundary.top + tooltipHeight + 40)) {
      top = top + tooltipHeight + 40;
      arrowTransform = "translate(0,-100%) scale(1,-1)";
      arrowTop = 0;
    }

    /* position it based on mouse position */
    tooltipDiv.style({
      left: left + 'px',
      top: top + 'px'
    });
    $(this.arrow[0][0]).css({
      'left': arrowLeft,
      'transform': arrowTransform,
      'top': arrowTop
    });
  };

  Tooltip.prototype.remove = function() {
    var ref;
    if ((ref = this.tooltipDiv) != null) {
      ref.remove();
    }
  };

  return Tooltip;

})();

d3.helper = {};


/* Tooltip helper */

d3.helper.tooltip = function(ancestor) {

  /* Ancestor argument is a function to exchange data between caller and Tooltip */

  /* Tooltip is html element (not svg) and is appended to body */
  var bodyNode, tooltip, tooltipDiv;
  bodyNode = d3.select('body').node();
  tooltipDiv = void 0;
  tooltip = function(selection) {
    selection.on('mouseover.tooltip', function(d, i) {

      /* content as html and color is sent by caller */
      var absoluteMousePos, contentHtml, options, ref, svgOffset, windowWidth;
      ref = ancestor(d, i), contentHtml = ref[0], options = ref[1];
      svgOffset = $(this).closest('svg').offset();
      windowWidth = $(window).width();
      absoluteMousePos = d3.mouse(bodyNode);
      tooltipDiv = new Tooltip(contentHtml, options);
      tooltipDiv.boundary = {
        right: windowWidth,
        top: svgOffset.top,
        left: svgOffset.left,
        bottom: -1
      };
      tooltipDiv.position(absoluteMousePos);
    }).on('mousemove.tooltip', function(d, pI) {
      var absoluteMousePos;
      absoluteMousePos = d3.mouse(bodyNode);
      if (tooltipDiv != null) {
        tooltipDiv.position(absoluteMousePos);
      }
    }).on('mouseout.tooltip', function(d, pI) {
      var absoluteMousePos;
      absoluteMousePos = d3.mouse(bodyNode);
      if (tooltipDiv != null) {
        tooltipDiv.position(absoluteMousePos);
      }

      /* Remove tooltip */
      if (tooltipDiv != null) {
        tooltipDiv.remove();
      }
      tooltipDiv = void 0;
    });
  };
  tooltip.attr = function(_x) {
    var attrs;
    if (!arguments.length) {
      return attrs;
    }
    attrs = _x;
    return this;
  };
  tooltip.style = function(_x) {
    var styles;
    if (!arguments.length) {
      return styles;
    }
    styles = _x;
    return this;
  };
  return tooltip;
};


/*
convertPolyToPath function converts polygon to path
 */

convertPolyToPath = function(poly) {
  var path, pathdata, points, svgNS, x0, y0;
  svgNS = poly.ownerSVGElement.namespaceURI;
  path = document.createElementNS(svgNS, 'path');
  points = poly.getAttribute('points').split(/\s+|,/);
  x0 = points.shift();
  y0 = points.shift();
  pathdata = 'M' + x0 + ',' + y0 + 'L' + points.join(' ');
  if (poly.tagName === 'polygon') {
    pathdata += 'z';
  }
  return pathdata;
};


/* For tooltip */

toCapitalizedWords = function(name) {
  var words;
  words = name.match(/[A-Za-z][a-z]*/g);
  words = words.map(capitalize).join(' ');
  return words.toUpperCase();
};

capitalize = function(word) {
  return word.charAt(0).toUpperCase() + word.substring(1);
};

