webpackJsonp([15],{A0cg:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r={name:"",props:{data:Object},data:function(){return{}},methods:{setData:function(){for(var t=Math.max.apply(null,this.data.value),a=[],e=0;e<6;e++)a.push(t/10);return a},setChart:function(){var t=this,a={tooltip:{trigger:"axis",axisPointer:{type:"none"},backgroundColor:"#11367a",textStyle:{color:"#6dd0e3",fontSize:10},formatter:function(a){return a[1].number=t.data.number,a[1].name+"<br>"+a[1].seriesName+":"+a[1].number+"/"+a[1].value+"人"}},grid:{left:"4%",top:"5%",bottom:10,containLabel:!0},yAxis:{type:"category",inverse:!0,position:"left",axisLine:{show:!0,lineStyle:{color:"#1a3c58"}},axisTick:{show:!1},axisLabel:{show:!0,margin:13,fontSize:10,color:"#75deef"},data:this.data.data},xAxis:{type:"value",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1},splitLine:{show:!1}},series:[{name:"辅助",type:"bar",stack:"总量",barCategoryGap:20,barWidth:8,itemStyle:{normal:{color:"rgba(0,0,0,0)"}},data:this.setData()},{name:this.data.name,type:"bar",stack:"总量",barCategoryGap:20,barWidth:8,itemStyle:{normal:{color:{type:"linear",x:0,y:0,x2:1,y2:0,colorStops:[{offset:0,color:"rgb("+this.data.color+",0.1)"},{offset:1,color:"rgb("+this.data.color+",1)"}],globalCoord:!1},barBorderRadius:5}},data:this.data.value}]},e=this.$echarts(this.$el);e.clear(),e.resize(),e.setOption(a)}},mounted:function(){this.setChart()}},o={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"webBar"})},staticRenderFns:[]};var i=e("VU/8")(r,o,!1,function(t){e("fUQd")},"data-v-b422ccf6",null);a.default=i.exports},fUQd:function(t,a){}});