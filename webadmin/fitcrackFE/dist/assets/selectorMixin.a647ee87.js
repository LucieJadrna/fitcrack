var t={props:{selectAll:{type:Boolean,default:!1},value:{type:Array,default:function(){return[]}}},data(){return{items:[],loading:!1,search:"",selected:[],footerProps:{itemsPerPageOptions:[3,5,10,20,-1]}}},mounted(){this.getData(),this.value&&(this.selected=this.value)},computed:{itemsPerPage(){return parseInt(localStorage.getItem("defaultItemsPerPage")||10)}},methods:{getData(){console.error("Selector component missing getData method")},updateSelected(){this.$emit("input",this.selected)}},watch:{value(e){this.selected=e}}};export{t as s};
