webpackJsonp([12],{byh2:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"popularBar"})},staticRenderFns:[]};var o=t("VU/8")({name:"popularBar",data:function(){return{}},methods:{setOptionData:function(){for(var e=["数据1","数据2","数据3","数据4","数据5","数据6","其他"],a=[45,33,13,25,30,35,45],t=["#2871ea","#fbe831","#2ea5fe","#fc662f","#9f56f0","#bf232c","#64cef2"],i=[],o=0;o<a.length;o++){var r={name:e[o],value:a[o],itemStyle:{color:{type:"linear",x:0,y:0,x2:1,y2:0,colorStops:[{offset:0,color:t[o]},{offset:1,color:"#922aea"}],globalCoord:!1}}};i.push(r)}return i},setChart:function(){var e={grid:[{top:"10%",bottom:"15%",right:"5%",left:"55.5%"},{top:"10%",bottom:"15%",right:"52.5%",left:"8%"}],tooltip:{trigger:"axis",axisPointer:{type:"none"},backgroundColor:"#11367a",textStyle:{color:"#6dd0e3",fontSize:10},formatter:function(e){return"人数"==e[5].seriesName?e[5].name+":"+e[5].value+"人":e[5].name+":"+e[5].value+"次"}},yAxis:[{data:["数据1","数据2","数据3","数据4","数据5","数据6","其他"],axisTick:{show:!0,inside:!0},axisLine:{show:!0,lineStyle:{color:"#1a3c58"}},inverse:!0,axisLabel:{show:!1,fontSize:10,margin:4,inside:!0,color:"rgb(113,227,247)"}},{data:["数据1","数据2","数据3","数据4","数据5","数据6","其他"],gridIndex:1,position:"right",axisTick:{show:!0,inside:!0},axisLine:{show:!0,lineStyle:{color:"#1a3c58"}},inverse:!0,axisLabel:{show:!1,fontSize:10,margin:4,inside:!0,color:"rgb(113,227,247)"}}],xAxis:[{type:"value",splitLine:{show:!1},axisTick:{show:!0},axisLabel:{show:!0,color:"#75deef",fontSize:9,showMaxLabel:!1},name:"(人)",nameGap:-5,nameTextStyle:{color:"#75deef",fontSize:9,align:"left",padding:[0,0,-24,0]},max:60,splitNumber:6,min:10,scale:!0,axisLine:{show:!0,lineStyle:{color:"#1a3c58"}}},{type:"value",inverse:!0,splitLine:{show:!1},axisTick:{show:!0},gridIndex:1,axisLabel:{show:!0,color:"#75deef",fontSize:9,showMaxLabel:!1},name:"(次)",nameGap:-10,nameTextStyle:{color:"#75deef",fontSize:9,align:"right",padding:[0,0,-24,0]},max:60,splitNumber:7,min:10,scale:!0,axisLine:{show:!0,lineStyle:{color:"#1a3c58"}}}],series:[{name:"辅助",type:"bar",stack:"a",barWidth:5,itemStyle:{normal:{color:"rgba(0,0,0,0)"}},data:[15,15,15,15,15,15,15]},{name:"辅助",type:"bar",stack:"a",barWidth:5,itemStyle:{normal:{color:"rgba(0,0,0,0)"}},data:[13,13,13,13,13,13,13]},{type:"bar",stack:"a",silent:!0,barWidth:5,barGap:"-100%",data:[50,50,50,50,50,50,50],itemStyle:{color:"#242346"}},{name:"辅助",type:"bar",stack:"b",barWidth:5,itemStyle:{normal:{color:"rgba(0,0,0,0)"}},data:[15,15,15,15,15,15,15]},{name:"辅助",type:"bar",stack:"b",barWidth:5,itemStyle:{normal:{color:"#c0232a"}},data:[13,13,13,13,13,13,13]},{name:"人数",type:"bar",barWidth:5,stack:"b",barCategoryGap:20,z:10,label:{show:!0,formatter:"{b}",position:"insideBottomLeft",offset:[-10,0],fontSize:12,color:"#75deef"},data:this.setOptionData()},{name:"辅助",xAxisIndex:1,yAxisIndex:1,type:"bar",stack:"c",barWidth:5,itemStyle:{normal:{color:"rgba(0,0,0,0)"}},data:[15,15,15,15,15,15,15]},{name:"辅助",type:"bar",xAxisIndex:1,yAxisIndex:1,stack:"c",barWidth:5,itemStyle:{normal:{color:"rgba(0,0,0,0)"}},data:[13,13,13,13,13,13,13]},{type:"bar",xAxisIndex:1,yAxisIndex:1,stack:"c",silent:!0,barWidth:5,barGap:"-100%",data:[50,50,50,50,50,50,50],itemStyle:{color:"#242346"}},{name:"辅助",xAxisIndex:1,yAxisIndex:1,type:"bar",stack:"d",barWidth:5,itemStyle:{normal:{color:"rgba(0,0,0,0)"}},data:[15,15,15,15,15,15,15]},{name:"辅助",type:"bar",xAxisIndex:1,yAxisIndex:1,stack:"d",barWidth:5,itemStyle:{normal:{color:"#c0232a"}},data:[13,13,13,13,13,13,13]},{name:"次数",type:"bar",barWidth:5,xAxisIndex:1,yAxisIndex:1,stack:"d",barCategoryGap:20,z:10,label:{show:!0,formatter:"{b}",position:"insideBottomRight",offset:[10,0],fontSize:12,color:"#75deef"},data:this.setOptionData()}]},a=this.$echarts(this.$el);a.clear(),a.resize(),a.setOption(e)}},mounted:function(){this.setChart()}},i,!1,function(e){t("lUln")},"data-v-f286bf2e",null);a.default=o.exports},lUln:function(e,a){}});