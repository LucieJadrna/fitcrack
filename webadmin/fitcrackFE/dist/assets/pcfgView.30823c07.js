import{f as l}from"./numberFormat.773889d3.js";import{t as c}from"./fc_tile.bc27a6a7.js";import{f as d}from"./fileCreator.93246015.js";import{n as f}from"./index.0b60da2f.js";import"./dictionarySelector.c5ff783d.js";import"./selectorMixin.c565e8b6.js";import"./fileUploader.7a48ae51.js";import"./vendor.6aa46313.js";var m=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("v-container",{staticClass:"max700"},[e("fc-tile",{staticClass:"ma-2",attrs:{title:"PCFGs",icon:t.$route.meta.icon}},[e("v-alert",{staticClass:"mb-0",attrs:{tile:"",text:"",type:"warning"}},[t._v(" PCFG files must have a .zip extension. ")]),e("v-data-table",{attrs:{headers:t.headers,items:t.pcfg.items,loading:t.loading,"footer-props":{itemsPerPageOptions:[10,25,50],itemsPerPageText:"PCFGs per page"}},scopedSlots:t._u([{key:"item.name",fn:function(a){var i=a.item,o=i.id,n=i.name;return[e("router-link",{staticClass:"font-weight-bold",attrs:{to:{name:"pcfgBrowser",params:{id:o}}}},[t._v(" "+t._s(n)+" ")])]}},{key:"item.keyspace",fn:function(a){var i=a.item;return[t._v(" "+t._s(t.fmt(i.keyspace))+" ")]}},{key:"item.time_added",fn:function(a){var i=a.item;return[t._v(" "+t._s(t.$moment(i.time_added).format("DD.MM.YYYY HH:mm"))+" ")]}},{key:"item.actions",fn:function(a){var i=a.item;return[e("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(o){var n=o.on;return[e("a",t._g({attrs:{href:t.$serverAddr+"/pcfg/"+i.id,target:"_blank",download:""}},n),[e("v-btn",{attrs:{icon:""}},[e("v-icon",[t._v("mdi-file-download-outline")])],1)],1)]}}],null,!0)},[e("span",[t._v("Download")])]),e("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(o){var n=o.on;return[e("v-btn",t._g({attrs:{icon:""},on:{click:function(_){return t.deletePcfg(i)}}},n),[e("v-icon",{attrs:{color:"error"}},[t._v(" mdi-delete-outline ")])],1)]}}],null,!0)},[e("span",[t._v("Delete")])])]}}])}),e("div",{staticClass:"text-right pa-3"},[e("v-btn",{staticClass:"d-inline-block",attrs:{color:"primary",outlined:""},nativeOn:{click:function(a){a.stopPropagation(),t.dialog=!0}}},[t._v(" Add new ")])],1)],1),e("file-creator",{attrs:{title:"Add new PCFG grammar","upload-url":this.$serverAddr+"/pcfg/add",working:t.working},on:{fileUploaded:t.loadPcfg,dictionarySelected:t.makePcfgFromDictionary},model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}})],1)},u=[];const p={name:"PcfgView",components:{fileCreator:d,"fc-tile":c},data:function(){return{working:!1,dialog:!1,loading:!1,headers:[{text:"Name",align:"left",value:"name"},{text:"Keyspace",value:"keyspace",align:"start"},{text:"Added",value:"time_added",align:"end"},{text:"Actions",value:"actions",align:"end",sortable:!1}],pcfg:[]}},mounted:function(){this.loadPcfg()},methods:{fmt:l,loadPcfg:function(){this.loading=!0,this.axios.get(this.$serverAddr+"/pcfg",{}).then(t=>{this.pcfg=t.data,this.loading=!1})},makePcfgFromDictionary:function(t,r){this.working=!0,this.axios.post(this.$serverAddr+"/pcfg/makeFromDictionary",{dictionary_id:t,name:r}).then(e=>{this.working=!1,this.dialog=!1,this.loadPcfg()}).catch(e=>{this.working=!1})},deletePcfg:function(t){this.$root.$confirm("Delete",`This will remove ${t.name} from your PCFGs. Are you sure?`).then(r=>{this.loading=!0,this.axios.delete(this.$serverAddr+"/pcfg/"+t.id).then(e=>{this.loadPcfg()})})}}},s={};var v=f(p,m,u,!1,g,"fa725fc8",null,null);function g(t){for(let r in s)this[r]=s[r]}var $=function(){return v.exports}();export{$ as default};