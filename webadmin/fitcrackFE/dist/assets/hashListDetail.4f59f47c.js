var d=Object.defineProperty,h=Object.defineProperties;var c=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var r=(t,a,s)=>a in t?d(t,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[a]=s,o=(t,a)=>{for(var s in a||(a={}))m.call(a,s)&&r(t,s,a[s]);if(i)for(var s of i(a))v.call(a,s)&&r(t,s,a[s]);return t},n=(t,a)=>h(t,c(a));import{f as _}from"./numberFormat.773889d3.js";import{m as u}from"./miniJob.8c074b4f.js";import{j as f}from"./vendor.6aa46313.js";import{H as p}from"./hashTable.27063ff2.js";import{n as b}from"./index.4da83f88.js";import"./jobWorkunits.0d82b6a5.js";import"./timeseries.9158092b.js";import"./iconMaps.853c93a3.js";var x=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[t.info!=null?s("v-breadcrumbs",{attrs:{items:[{text:"Hashlists",to:{name:"hashlists"},exact:!0},{text:t.info.name}],divider:"/"}}):t._e(),t.info!=null?s("v-container",[s("v-card",{staticClass:"mb-4",attrs:{flat:""}},[s("v-card-title",[t._v(" "+t._s(t.info.name)+" ")]),s("v-card-text",[t._v(" Hash type: "),s("strong",[t._v(t._s(t.info.hash_type_name))])]),s("v-card-actions",[s("v-btn",{attrs:{to:{name:"hashlistExtend",params:{id:t.info.id}},color:"primary",disabled:t.info.is_locked}},[s("v-icon",{attrs:{left:""}},[t._v("mdi-plus")]),t._v(" Add hashes ")],1),s("v-spacer"),s("v-btn",{attrs:{color:"error",text:""},on:{click:t.deleteHashlist}},[s("v-icon",{attrs:{left:""}},[t._v("mdi-delete")]),t._v(" Discard or restore ")],1)],1)],1),s("v-card",{staticClass:"mb-4 transparent",attrs:{flat:""}},[s("v-card-title",[t._v("Jobs")]),t.info.jobs.length>0?s("v-card-text",{staticClass:"d-flex overflow-x-auto"},t._l(t.info.jobs,function(e){return s("miniJob",{key:e.id,attrs:{data:e}})}),1):t._e(),s("v-card-actions",[s("v-btn",{attrs:{color:"primary"},on:{click:t.attachToJob}},[s("v-icon",{attrs:{left:""}},[t._v("mdi-briefcase-plus")]),t._v(" Add to a new job ")],1)],1)],1),s("HashTable",{attrs:{id:t.$route.params.id}})],1):t._e()],1)},j=[];const H={name:"HashlistDetail",components:{miniJob:u,HashTable:p},data:function(){return{info:null}},mounted:function(){this.loadHashlistData()},methods:n(o({},f("jobForm",["hashListIdMut","stepMut"])),{fmt:_,loadHashlistData(){this.axios.get(this.$serverAddr+"/hashlist/"+this.$route.params.id).then(t=>{this.info=t.data,this.loading=!1})},attachToJob(){this.hashListIdMut(this.$route.params.id),this.stepMut(2),this.$router.push({name:"addJob"})},deleteHashlist(){this.axios.delete(this.$serverAddr+"/hashlist/"+this.$route.params.id).then(t=>{this.$router.push({name:"hashlists"})})}})},l={};var $=b(H,x,j,!1,y,"0edb1905",null,null);function y(t){for(let a in l)this[a]=l[a]}var F=function(){return $.exports}();export{F as default};