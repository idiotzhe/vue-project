webpackJsonp([8],{"7Ljq":function(t,s){},abXk:function(t,s){},kovq:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"card-container"},[a("el-row",{staticStyle:{padding:"6px"},attrs:{gutter:20}},t._l(t.data,function(s,e){return a("el-col",{key:e,attrs:{span:t.span}},[a("div",{staticClass:"item"},[a("img",{staticClass:"item-img",attrs:{src:s.src}}),t._v(" "),a("div",{staticClass:"item-text",style:{backgroundColor:t.bgColor,color:t.color}},[a("h3",[t._v(t._s(s.title))]),t._v(" "),a("p",[t._v(t._s(s.text))])])])])}),1)],1)},staticRenderFns:[]};var i=a("C7Lr")({name:"pictureCard",props:["options"],data:function(){return{span:this.options.span||8,data:this.options.data||[],bgColor:this.options.bgColor||"#2e323f",color:this.options.color||"#fff"}},mounted:function(){},methods:{}},e,!1,function(t){a("7Ljq")},"data-v-5744ae5b",null).exports,n={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"count-container"},[a("el-row",{staticStyle:{padding:"6px"},attrs:{gutter:25}},t._l(t.data,function(s,e){return a("el-col",{key:e,attrs:{span:t.span}},[a("div",{staticClass:"item",style:{backgroundColor:s.bgColor}},[a("div",{staticClass:"item-header"},[a("p",{staticClass:"item-title"},[t._v(t._s(s.title))]),t._v(" "),a("span",[t._v("实时")])]),t._v(" "),a("p",{staticClass:"item-body"},[a("vue-count-up",{attrs:{start:s.start,end:s.end}})],1),t._v(" "),a("p",{staticClass:"item-text"},[t._v(t._s(s.text))]),t._v(" "),a("p",{staticClass:"item-tip"},[t._v(t._s(s.key))])])])}),1)],1)},staticRenderFns:[]};var r={name:"dashboard",components:{CountCard:a("C7Lr")({name:"countCard",props:["options"],data:function(){return{span:this.options.span||6,data:this.options.data||[]}},mounted:function(){},methods:{}},n,!1,function(t){a("abXk")},"data-v-7543dca2",null).exports,PictureCard:i},data:function(){return{countOptions:{data:[{bgColor:"#21baa9",title:"文章3",text:"sawqxxx123",key:"文",start:4323,end:8932},{bgColor:"rgb(56, 161, 242)",title:"文章1",text:"11wqwqxxx",key:"文",start:999,end:3789},{bgColor:"#7B7DE5",title:"文章4",text:"xxxax221113",key:"文",start:7898,end:12065},{bgColor:"rgb(59, 103, 164)",title:"文章2",text:"234346463xxxxx",key:"文",start:2345,end:5907}]},options:{span:6,data:[{src:"static/img/card/card-1.jpg",title:"景点1",text:"dsnsanxsnx"},{src:"static/img/card/card-2.jpg",title:"景点2",text:"saxxxx"},{src:"static/img/card/card-3.jpg",title:"景点3",text:"xxxx"},{src:"static/img/card/card-1.jpg",title:"景点4",text:"xxxx"}]}}},methods:{}},o={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"page-container"},[s("div",{staticClass:"item"},[s("h4",[this._v("数据展示")]),this._v(" "),s("count-card",{attrs:{options:this.countOptions}})],1),this._v(" "),s("div",{staticClass:"item"},[s("h4",[this._v("图片动效")]),this._v(" "),s("picture-card",{attrs:{options:this.options}})],1)])},staticRenderFns:[]};var c=a("C7Lr")(r,o,!1,function(t){a("qjeq")},"data-v-5bc34597",null);s.default=c.exports},qjeq:function(t,s){}});