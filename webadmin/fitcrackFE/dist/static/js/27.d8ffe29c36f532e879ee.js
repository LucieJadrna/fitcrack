webpackJsonp([27],{493:function(t,e,a){"use strict";function n(t){a(931)}Object.defineProperty(e,"__esModule",{value:!0});var s=a(668),i=a(933),r=a(39),o=n,l=r(s.a,i.a,!1,o,"data-v-2bba5cff",null);e.default=l.exports},668:function(t,e,a){"use strict";var n=a(44),s=a.n(n),i=a(21),r=a.n(i),o=a(22),l=a.n(o);e.a={name:"Settings",data:function(){return{appearance:localStorage.getItem("appearance")||"auto",testmode:"true"==localStorage.getItem("testmode")||!1,settings:{},loading:!0,saving:!1}},computed:{appearanceHint:function(){switch(this.appearance){case"auto":return"Webadmin will change appearance dynamically based on your system theme";case"light":return"Webadmin will retain light appearance regardless of your system theme";case"dark":return"Webadmin will retain dark appearance regardless of your system theme";default:return}}},watch:{appearance:function(t){localStorage.setItem("appearance",t),"dark"==t&&(this.$vuetify.theme.dark=!0),"light"==t&&(this.$vuetify.theme.dark=!1),"auto"==t&&(this.$vuetify.theme.dark=window.matchMedia("(prefers-color-scheme: dark)").matches)},testmode:function(t){localStorage.setItem("testmode",t)}},mounted:function(){this.loadSettings()},methods:{loadSettings:function(){var t=this;return l()(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.axios.get(t.$serverAddr+"/settings").then(function(t){return t.data});case 3:t.settings=e.sent,t.loading=!1;case 5:case"end":return e.stop()}},e,t)}))()},saveSettings:function(){var t=this;this.saving=!0,this.axios.post(this.$serverAddr+"/settings",s()({},this.settings)).then(function(){t.saving=!1,t.$store.state.jobForm.timeForJob=t.settings.default_seconds_per_workunit})}}}},931:function(t,e,a){var n=a(932);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(462)("445b29c0",n,!0,{})},932:function(t,e,a){e=t.exports=a(461)(!0),e.push([t.i,".neutral[data-v-2bba5cff]{color:unset!important}","",{version:3,sources:["/home/xbolva00/gitfitcrack/fitcrack/webadmin/fitcrackFE/src/components/settings/settingsView.vue"],names:[],mappings:"AACA,0BACE,qBAAuB,CACxB",file:"settingsView.vue",sourcesContent:["\n.neutral[data-v-2bba5cff] {\n  color: unset !important\n}\n"],sourceRoot:""}])},933:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",[a("v-col",[a("v-card",{attrs:{flat:""}},[a("v-card-title",[a("v-icon",{attrs:{left:""}},[t._v("\n            mdi-palette\n          ")]),t._v(" "),a("span",[t._v("Appearance")])],1),t._v(" "),a("v-card-text",[a("v-btn-toggle",{attrs:{mandatory:"",color:"primary"},model:{value:t.appearance,callback:function(e){t.appearance=e},expression:"appearance"}},[a("v-btn",{attrs:{value:"auto"}},[a("v-icon",{staticClass:"neutral ml-0",attrs:{left:"",small:""}},[t._v("\n                mdi-creation\n              ")]),t._v(" "),a("span",[t._v("Automatic")])],1),t._v(" "),a("v-btn",{attrs:{value:"light"}},[a("v-icon",{staticClass:"neutral ml-0",attrs:{left:"",small:""}},[t._v("\n                mdi-brightness-5\n              ")]),t._v(" "),a("span",[t._v("Light")])],1),t._v(" "),a("v-btn",{attrs:{value:"dark"}},[a("v-icon",{staticClass:"neutral ml-0",attrs:{left:"",small:""}},[t._v("\n                mdi-brightness-2\n              ")]),t._v(" "),a("span",[t._v("Dark")])],1)],1),t._v(" "),a("div",{staticClass:"mt-2 ml-1"},[t._v("\n            "+t._s(t.appearanceHint)),a("span",{directives:[{name:"show",rawName:"v-show",value:t.testmode,expression:"testmode"}]},[t._v(". Temporarily toggle with CTRL+SHIFT+L anywhere.")])])],1)],1),t._v(" "),a("v-card",{staticClass:"mt-6",attrs:{flat:""}},[a("v-card-title",[a("v-icon",{attrs:{left:""}},[t._v("\n            mdi-test-tube\n          ")]),t._v(" "),a("span",[t._v("Development")])],1),t._v(" "),a("v-card-text",[a("v-switch",{attrs:{label:"Developer mode",hint:"Enables useful utilities throughout the app when developing Fitcrack.","persistent-hint":""},model:{value:t.testmode,callback:function(e){t.testmode=e},expression:"testmode"}})],1)],1)],1),t._v(" "),a("v-col",[a("v-card",{attrs:{flat:"","min-width":"300"}},[a("v-card-title",[a("v-icon",{attrs:{left:""}},[t._v("\n            mdi-settings-box\n          ")]),t._v(" "),a("span",[t._v("System preferences")])],1),t._v(" "),a("v-card-text",[a("v-text-field",{staticClass:"mb-4",attrs:{loading:t.loading,outlined:"",type:"number",label:"Default time per workunit",hint:"The time per workunit preference used for new jobs. You can change it on a per-job basis in the additional settings step when creating a job or via the edit job dialog.","persistent-hint":"",suffix:"seconds"},model:{value:t.settings.default_seconds_per_workunit,callback:function(e){t.$set(t.settings,"default_seconds_per_workunit",e)},expression:"settings.default_seconds_per_workunit"}}),t._v(" "),a("v-text-field",{staticClass:"mb-4",attrs:{loading:t.loading,outlined:"",type:"number",step:"0.1",label:"Workunit timeout factor",hint:"Multiplying factor for workunit timeout — the time after which a workunit is considered failed.","persistent-hint":""},model:{value:t.settings.default_workunit_timeout_factor,callback:function(e){t.$set(t.settings,"default_workunit_timeout_factor",e)},expression:"settings.default_workunit_timeout_factor"}}),t._v(" "),a("v-text-field",{staticClass:"mb-4",attrs:{loading:t.loading,outlined:"",type:"number",label:"Temperature threshold",hint:"Abort cracking if temperature of the client's PC reaches this threshold","persistent-hint":"",suffix:"°C"},model:{value:t.settings.default_hwmon_temp_abort,callback:function(e){t.$set(t.settings,"default_hwmon_temp_abort",e)},expression:"settings.default_hwmon_temp_abort"}}),t._v(" "),a("v-switch",{attrs:{loading:t.loading,label:"Run full benchmark on join",hint:"When enabled, new hosts connected to the system will run a complete first-time benchmark.","persistent-hint":""},model:{value:t.settings.default_bench_all,callback:function(e){t.$set(t.settings,"default_bench_all",e)},expression:"settings.default_bench_all"}})],1),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{color:"primary",loading:t.saving},on:{click:t.saveSettings}},[a("v-icon",{attrs:{left:""}},[t._v("\n              mdi-content-save\n            ")]),t._v("\n            Save\n          ")],1)],1)],1)],1)],1)],1)},s=[],i={render:n,staticRenderFns:s};e.a=i}});
//# sourceMappingURL=27.d8ffe29c36f532e879ee.js.map