webpackJsonp([26],{A3ix:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});a("XLwt");var i={name:"",data:function(){return{value:2,xAxisData:[],seriesData:[],selected:{},legendData:[]}},methods:{handleSelect:function(e){this.xAxisData=[],this.seriesData=[],this.legendData=[],this.selected={},this.value=e;var t=(new Date).getFullYear(),a=(new Date).getMonth(),i=["#bf232a","#feed2c","#2c7bfe","#feac2c","#ff7b7e","#2cd9fe","#a262f2","#2ca8fe"];if(1==e){for(var o=[t-1,t],n=0;n<12;n++)this.xAxisData.push(n+1+"月");for(var l=0;l<o.length;l++){this.legendData.push(o[l]+"年");for(var s={name:o[l]+"年",type:"line",symbol:"circle",smooth:!1,itemStyle:{color:i[l%8]},lineStyle:{width:1,color:i[l%8]},data:[]},r=0;r<12;r++)s.data.push((300*Math.random()).toFixed(0));for(var c={name:o[l]+"年",type:"line",symbol:"circle",smooth:!1,xAxisIndex:1,yAxisIndex:1,itemStyle:{color:i[l%8]},lineStyle:{width:1,color:i[l%8]},data:[]},d=0;d<12;d++)c.data.push((300*Math.random()).toFixed(0));this.seriesData.push(s),this.seriesData.push(c)}}else{for(var h=new Date(t,a,0).getDate(),f=0;f<h;f++)this.xAxisData.push(f+1+"号");for(var x=0;x<12;x++){this.legendData.push(x+1+"月"),this.selected[x+1+"月"]=!1,x<4&&(this.selected[x+1+"月"]=!0);for(var u={name:x+1+"月",type:"line",symbol:"circle",smooth:!1,itemStyle:{color:i[x%8]},lineStyle:{width:1,color:i[x%8]},data:[]},m=0;m<h;m++)u.data.push((300*Math.random()).toFixed(0));for(var p={name:x+1+"月",type:"line",symbol:"circle",xAxisIndex:1,yAxisIndex:1,smooth:!1,itemStyle:{color:i[x%8]},lineStyle:{width:1,color:i[x%8]},data:[]},g=0;g<h;g++)p.data.push((300*Math.random()).toFixed(0));this.seriesData.push(u),this.seriesData.push(p)}}this.setChart()},setChart:function(){var e=this,t={title:[{text:"【交易笔数分析】",textStyle:{fontSize:12,color:"#75deef",fontWeight:"normal"},top:"24%",left:"20%"},{text:"【交易金额分析】",textStyle:{fontSize:12,color:"#75deef",fontWeight:"normal"},top:"24%",right:"12%"}],grid:[{show:!1,left:"2%",top:"38%",right:"51%",bottom:0,containLabel:!0},{show:!1,left:"51%",top:"38%",bottom:0,right:"2%",containLabel:!0}],tooltip:{trigger:"item",axisPointer:{type:"none"},backgroundColor:"#11367a",formatter:function(e){return 0==e.seriesId.substr(e.seriesId.length-1,1)?e.seriesName+"/"+e.name+"<br>交易笔数:"+e.value+"笔":e.seriesName+"/"+e.name+"<br>交易金额:"+e.value+"元"},textStyle:{color:"#6dd0e3",fontSize:10}},legend:{type:"scroll",top:"10%",textStyle:{color:"#75deef",padding:[3,0,0,0],fontSize:12},pageTextStyle:{color:"#75deef"},pageIconSize:10,pageIconColor:"#75deef",itemWidth:12,itemHeight:7,right:"15%",left:"15%",selected:this.selected,data:this.legendData},xAxis:[{type:"category",data:this.xAxisData,boundaryGap:!1,axisLabel:{fontSize:9,color:"#75deef",interval:0,showMaxLabel:!0,showMinLabel:!0,formatter:function(t,a){if(1==e.value){if(a%2==1)return t}else if((a+1)%5==0)return t;if(0==a)return t}},axisLine:{lineStyle:{color:"#1a3c58"}},splitLine:{show:!1},axisTick:{show:!0,inside:!0}},{gridIndex:1,type:"category",data:this.xAxisData,axisLabel:{fontSize:9,color:"#75deef",interval:0,showMaxLabel:!0,showMinLabel:!0,formatter:function(t,a){if(1==e.value){if(a%2==1)return t}else if((a+1)%5==0)return t;if(0==a)return t}},axisLine:{lineStyle:{color:"#1a3c58"}},splitLine:{show:!1},axisTick:{show:!0,inside:!0}}],yAxis:[{type:"value",splitLine:{show:!1},min:0,max:300,splitNumber:5,axisLabel:{showMaxLabel:!1,fontSize:9,color:"#75deef"},name:"(笔)",nameGap:-5,nameTextStyle:{color:"#75deef",fontSize:9,align:"right",padding:[0,6,0,0]},axisLine:{lineStyle:{color:"#1a3c58"}},axisTick:{length:3}},{gridIndex:1,type:"value",min:0,max:300,interval:50,splitLine:{show:!1},axisLabel:{showMaxLabel:!1,fontSize:9,color:"#75deef"},name:"(元)",nameGap:-5,nameTextStyle:{color:"#75deef",fontSize:9,align:"right",padding:[0,6,0,0]},axisLine:{lineStyle:{color:"#1a3c58"}},axisTick:{length:3}}],series:this.seriesData},a=this.$echarts(document.getElementById("bottom_1"));a.clear(),a.resize(),a.setOption(t),a.on("legendselectchanged",function(t){var i=[];for(var o in t.selected)1==t.selected[o]&&i.push(t.selected[o]);i.length>4&&(e.$Modal.error({content:"<p>当前最多显示4个图例</p>"}),a.dispatchAction({type:"legendUnSelect",name:t.name}))})}},mounted:function(){this.handleSelect(this.value)}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"lines"},[a("div",{staticClass:"switchButton"},[a("a",{class:{active:1==e.value},on:{click:function(t){e.handleSelect(1)}}},[e._v("月")]),a("a",{class:{active:2==e.value},on:{click:function(t){e.handleSelect(2)}}},[e._v("日")])]),e._v(" "),a("div",{attrs:{id:"bottom_1"}})])},staticRenderFns:[]};var n=a("VU/8")(i,o,!1,function(e){a("jTJe")},"data-v-31de0c8e",null);t.default=n.exports},jTJe:function(e,t){}});