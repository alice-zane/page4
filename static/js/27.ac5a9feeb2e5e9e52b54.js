webpackJsonp([27],{"3y6V":function(t,e){},hxXZ:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={name:"",props:{data:Array},data:function(){return{}},methods:{setSoliderData:function(t){for(var e=[],a={},i=0;i<this.data.length;i++){switch(t){case"g":a={top:this.data[i].top,left:8,right:30,height:"13.5%"};break;case"x":a={axisLine:{show:!1},axisTick:{show:!1,interval:0},splitLine:{show:!1},type:"category",boundaryGap:!1,gridIndex:i,axisLabel:{show:!1},data:[1,2,3,4,5,6,7,8,9,10]};break;case"y":a={type:"value",axisLine:{show:!1},gridIndex:i,axisTick:{show:!1},splitLine:{show:!1},axisLabel:{show:!1}};break;case"s":a={type:"bar",barWidth:2,data:this.data[i].data,label:{show:!0,position:"insideBottomLeft",offset:[3,0],distance:2,color:"#88B6C7",fontSize:9,lineHeight:9,rich:{a:{}},formatter:function(t){return 2==t.data.name.length?t.data.name.split("").join("\n\n"):t.data.name.split("").join("\n")}},itemStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"rgba("+this.data[i].color+",1)"},{offset:1,color:"rgba("+this.data[i].color+",0)"}],globalCoord:!1}},xAxisIndex:i,yAxisIndex:i}}e.push(a)}return e},setChart:function(){var t={tooltip:{trigger:"axis",axisPointer:{type:"shadow"},formatter:"{b}:{c}"},title:{text:"重点关注用户排名",left:0,top:10,textStyle:{fontSize:12,color:"#FFF"}},grid:this.setSoliderData("g"),xAxis:this.setSoliderData("x"),yAxis:this.setSoliderData("y"),series:this.setSoliderData("s")},e=this.$echarts(this.$el);e.clear(),e.resize(),e.setOption(t)}},mounted:function(){this.setChart()}},s={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"rightBar"})},staticRenderFns:[]};var o=a("VU/8")(i,s,!1,function(t){a("3y6V")},"data-v-2c01050e",null);e.default=o.exports}});