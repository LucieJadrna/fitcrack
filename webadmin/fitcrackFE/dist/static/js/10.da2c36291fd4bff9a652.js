webpackJsonp([10],{465:function(t,e,a){"use strict";function n(t){a(731),a(733)}Object.defineProperty(e,"__esModule",{value:!0});var i=a(557),s=a(735),o=a(29),r=n,c=o(i.a,s.a,!1,r,"data-v-74a2b11c",null);e.default=c.exports},474:function(t,e,a){"use strict";e.a={name:"FcTile",props:{title:String,loading:Boolean,icon:String}}},475:function(t,e,a){"use strict";function n(t){a(476)}var i=a(474),s=a(478),o=a(29),r=n,c=o(i.a,s.a,!1,r,"data-v-7371d504",null);e.a=c.exports},476:function(t,e,a){var n=a(477);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(446)("8138406e",n,!0,{})},477:function(t,e,a){e=t.exports=a(445)(!0),e.push([t.i,".white[data-v-7371d504]{min-width:300px;position:relative}.contentFcTile[data-v-7371d504]{position:relative;min-height:100px;width:100%;padding:0}.progress[data-v-7371d504]{top:0;bottom:0;left:0;right:0;margin:auto;position:absolute}.max64[data-v-7371d504]{max-height:64px}","",{version:3,sources:["/Users/Ovoce/Documents/Bitbucket/fitcrack/webadmin/fitcrackFE/src/components/tile/fc_tile.vue"],names:[],mappings:"AACA,wBACE,gBAAiB,AACjB,iBAAmB,CACpB,AACD,gCACE,kBAAmB,AACnB,iBAAkB,AAClB,WAAY,AACZ,SAAW,CACZ,AACD,2BACE,MAAO,AACP,SAAU,AACV,OAAQ,AACR,QAAS,AACT,YAAa,AACb,iBAAmB,CACpB,AACD,wBACE,eAAiB,CAClB",file:"fc_tile.vue",sourcesContent:["\n.white[data-v-7371d504] {\n  min-width: 300px;\n  position: relative;\n}\n.contentFcTile[data-v-7371d504] {\n  position: relative;\n  min-height: 100px;\n  width: 100%;\n  padding: 0;\n}\n.progress[data-v-7371d504] {\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  position: absolute;\n}\n.max64[data-v-7371d504] {\n  max-height: 64px;\n}\n\n"],sourceRoot:""}])},478:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"mx-auto"},[a("v-card-title",[t.icon?a("v-icon",{attrs:{left:""}},[t._v("\n      "+t._s(t.icon)+"\n    ")]):t._e(),t._v("\n    "+t._s(t.title)+"\n  ")],1),t._v(" "),a("v-card-text",{staticClass:"contentFcTile"},[t.loading?a("v-skeleton-loader",{staticClass:"mx-auto",attrs:{type:"article"}}):t._t("default")],2)],1)},i=[],s={render:n,staticRenderFns:i};e.a=s},479:function(t,e,a){"use strict";e.a={name:"FileUploader",props:{multiple:Boolean,url:{type:String,default:this.$serverAddr},noUpload:Boolean,label:{type:String,default:"Select files"}},data:function(){return{selectedFiles:[],files:null,progress:0,showProgress:!1,fileUploaded:!1}},computed:{overSizeLimit:function(){return this.selectedFiles.some(function(t){return t.size>2e9})}},methods:{uploadChange:function(t){this.progress=Math.round(100*t.loaded/t.total),console.log(this.progress)},fileChange:function(t){this.files=new FormData,this.selectedFiles=[];for(var e=0;e<t.length;e++)this.selectedFiles.push({name:t[e].name,type:t[e].type||"n/a",size:t[e].size,modified:t[e].lastModifiedDate?t[e].lastModifiedDate.toLocaleDateString():"n/a"}),this.files.append("file",t[e],t[e].name);this.fileUploaded=!1,this.progress=0,this.$emit("filesChanged",t)},upload:function(){var t=this;this.showProgress=!0;var e={withCredentials:!0,headers:{"Content-type":"multipart/form-data"},onUploadProgress:this.uploadChange};this.axios.post(this.url,this.files,e).then(function(e){t.fileUploaded=!0,t.$emit("uploadComplete",e.data),t.files=null}).catch(function(t){console.log(t)})}}}},481:function(t,e,a){"use strict";function n(t){a(482)}var i=a(479),s=a(484),o=a(29),r=n,c=o(i.a,s.a,!1,r,"data-v-2ca99aec",null);e.a=c.exports},482:function(t,e,a){var n=a(483);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(446)("80eba1aa",n,!0,{})},483:function(t,e,a){e=t.exports=a(445)(!0),e.push([t.i,".uploadInput[data-v-2ca99aec]{max-width:250px}.form[data-v-2ca99aec]{max-width:100%;text-align:center}.uploadButton[data-v-2ca99aec]{margin-top:15px}.spacer[data-v-2ca99aec]{width:10px}","",{version:3,sources:["/Users/Ovoce/Documents/Bitbucket/fitcrack/webadmin/fitcrackFE/src/components/fileUploader/fileUploader.vue"],names:[],mappings:"AACA,8BACE,eAAiB,CAClB,AACD,uBACE,eAAgB,AAChB,iBAAmB,CACpB,AACD,+BACE,eAAiB,CAClB,AACD,yBACE,UAAY,CACb",file:"fileUploader.vue",sourcesContent:["\n.uploadInput[data-v-2ca99aec] {\n  max-width: 250px;\n}\n.form[data-v-2ca99aec] {\n  max-width: 100%;\n  text-align: center;\n}\n.uploadButton[data-v-2ca99aec] {\n  margin-top: 15px;\n}\n.spacer[data-v-2ca99aec] {\n  width: 10px;\n}\n"],sourceRoot:""}])},484:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pt-0 mt-0"},[t.overSizeLimit?a("v-alert",{attrs:{type:"error",tile:""}},[t._v("\n    Maximum size of uploaded file is 2 GB.\n  ")]):t._e(),t._v(" "),a("form",{staticClass:"form pa-2",attrs:{enctype:"multipart/form-data"}},[a("v-file-input",{staticClass:"mr-2",attrs:{outlined:"",chips:"","show-size":"",label:t.label,name:"file",multiple:t.multiple},on:{change:t.fileChange}}),t._v(" "),t.noUpload?t._e():a("v-btn",{attrs:{color:"primary",outlined:"",disabled:null===t.files||t.overSizeLimit},on:{click:function(e){return t.upload()}}},[t._v("\n      Upload\n      "),a("v-icon",{attrs:{right:""}},[t._v("\n        mdi-upload\n      ")])],1)],1),t._v(" "),a("v-progress-linear",{attrs:{query:!0,active:t.showProgress,color:"primary"},model:{value:t.progress,callback:function(e){t.progress=e},expression:"progress"}})],1)},i=[],s={render:n,staticRenderFns:i};e.a=s},557:function(t,e,a){"use strict";var n=a(475),i=a(481);e.a={name:"CharsetView",components:{FileUploader:i.a,"fc-tile":n.a},data:function(){return{loading:!1,charsets:[],headers:[{text:"Name",align:"start",value:"name"},{text:"Added",value:"time",align:"end"},{text:"Actions",value:"actions",align:"end",sortable:!1}]}},mounted:function(){this.loadCharsets()},methods:{loadCharsets:function(){var t=this;this.loading=!0,this.axios.get(this.$serverAddr+"/charset",{}).then(function(e){t.charsets=e.data,t.loading=!1})},deleteCharset:function(t){var e=this;this.$root.$confirm("Delete","This will remove "+t.name+" from your charsets. Are you sure?").then(function(a){e.loading=!0,e.axios.delete(e.$serverAddr+"/charset/"+t.id).then(function(t){e.loadCharsets()})})}}}},731:function(t,e,a){var n=a(732);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(446)("123213f6",n,!0,{})},732:function(t,e,a){e=t.exports=a(445)(!0),e.push([t.i,".noEvent[data-v-74a2b11c]{pointer-events:none;display:inline-block}.dz-message[data-v-74a2b11c]{cursor:pointer;text-align:center}.max500[data-v-74a2b11c]{max-width:600px}","",{version:3,sources:["/Users/Ovoce/Documents/Bitbucket/fitcrack/webadmin/fitcrackFE/src/components/charset/charsetsView.vue"],names:[],mappings:"AACA,0BACE,oBAAqB,AACrB,oBAAsB,CACvB,AACD,6BACE,eAAgB,AAChB,iBAAmB,CACpB,AACD,yBACE,eAAiB,CAClB",file:"charsetsView.vue",sourcesContent:["\n.noEvent[data-v-74a2b11c] {\n  pointer-events: none;\n  display: inline-block;\n}\n.dz-message[data-v-74a2b11c] {\n  cursor: pointer;\n  text-align: center;\n}\n.max500[data-v-74a2b11c] {\n  max-width: 600px;\n}\n\n"],sourceRoot:""}])},733:function(t,e,a){var n=a(734);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(446)("c68fa732",n,!0,{})},734:function(t,e,a){e=t.exports=a(445)(!0),e.push([t.i,".selectedDict{background:rgba(37,157,173,.85)!important;color:#fff}.selectedDict a{color:#fff}.clickable{cursor:pointer}","",{version:3,sources:["/Users/Ovoce/Documents/Bitbucket/fitcrack/webadmin/fitcrackFE/src/components/charset/charsetsView.vue"],names:[],mappings:"AACA,cACE,0CAAgD,AAChD,UAAa,CACd,AACD,gBACE,UAAa,CACd,AACD,WACE,cAAgB,CACjB",file:"charsetsView.vue",sourcesContent:["\n.selectedDict {\n  background: rgba(37, 157, 173, 0.85) !important;\n  color: white;\n}\n.selectedDict a {\n  color: white;\n}\n.clickable {\n  cursor: pointer;\n}\n"],sourceRoot:""}])},735:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"max500"},[a("fc-tile",{staticClass:"ma-2",attrs:{title:"Charsets",icon:t.$route.meta.icon}},[a("v-alert",{staticClass:"mb-0",attrs:{tile:"",text:"",type:"warning"}},[t._v("\n      Charsets must have a .txt, .hcchr or .charset extension.\n    ")]),t._v(" "),a("v-data-table",{attrs:{headers:t.headers,items:t.charsets.items,loading:t.loading,"footer-props":{itemsPerPageOptions:[10,25,50],itemsPerPageText:"Charsets per page"}},scopedSlots:t._u([{key:"item.name",fn:function(e){var n=e.item;return[a("router-link",{attrs:{to:"charsets/"+n.id}},[t._v("\n          "+t._s(n.name)+"\n        ")])]}},{key:"item.time",fn:function(e){var a=e.item;return[t._v("\n        "+t._s(t.$moment(a.time).format("DD.MM.YYYY HH:mm"))+"\n      ")]}},{key:"item.actions",fn:function(e){var n=e.item;return[a("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("a",t._g({attrs:{href:t.$serverAddr+"/charset/"+n.id+"/download",target:"_blank",download:""}},i),[a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("mdi-file-download-outline")])],1)],1)]}}],null,!0)},[t._v(" "),a("span",[t._v("Download")])]),t._v(" "),a("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("v-btn",t._g({attrs:{icon:""},on:{click:function(e){return t.deleteCharset(n)}}},i),[a("v-icon",{attrs:{color:"error"}},[t._v("\n                mdi-delete-outline\n              ")])],1)]}}],null,!0)},[t._v(" "),a("span",[t._v("Delete")])])]}}])}),t._v(" "),a("v-divider"),t._v(" "),a("file-uploader",{attrs:{url:this.$serverAddr+"/charset/add"},on:{uploadComplete:t.loadCharsets}})],1)],1)},i=[],s={render:n,staticRenderFns:i};e.a=s}});
//# sourceMappingURL=10.da2c36291fd4bff9a652.js.map