webpackJsonp([11],{mFyM:function(t,e){},p19C:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={name:"",props:{data:Array},data:function(){return{}},methods:{setOptionData:function(){for(var t=0;t<this.data.length;t++)this.data[t].color,this.data[t].name,this.data[t].value},setChart:function(){var t={title:{text:"【交友方式好友数量】",textStyle:{color:"#75deef",fontSize:12,fontWeight:"normal"},top:"5%",left:"31%"},tooltip:{trigger:"axis",axisPointer:{type:"none"},backgroundColor:"#11367a",formatter:"{b}:{c1}",textStyle:{color:"#6dd0e3",fontSize:10}},grid:{top:"25%",left:"1%",right:"4%",bottom:"4%",containLabel:!0},xAxis:{type:"category",axisLabel:{interval:0,color:"#75deef",fontSize:9,showMinLabel:!0},axisLine:{lineStyle:{color:"#1a3c58",width:2}},axisTick:{show:!1},data:["漂流瓶","附近","雷达","摇一摇","搜索","群聊","扫一扫","其他"]},yAxis:[{type:"value",min:0,max:300,axisLabel:{color:"#75deef",fontSize:9,showMaxLabel:!1},name:"(个)",nameGap:-5,nameTextStyle:{color:"#75deef",fontSize:9,align:"right",padding:[0,6,0,0]},axisTick:{length:3},axisLine:{lineStyle:{color:"#1a3c58"}},splitLine:{show:!1}}],series:[{name:"辅助",type:"bar",barWidth:12,itemStyle:{color:"#252448"},data:[300,300,300,300,300,300,300,300]},{name:"添加好友",type:"bar",barWidth:12,barGap:"-100%",data:this.data}]},e=this.$echarts(this.$el);e.clear(),e.resize(),e.setOption(t)}},mounted:function(){this.setChart()}},o={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"behaviorBar"})},staticRenderFns:[]};var n=a("VU/8")(i,o,!1,function(t){a("mFyM")},"data-v-ffa8c234",null);e.default=n.exports}});