(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0c1a1387"],{b0c0:function(t,e,a){var r=a("83ab"),n=a("5e77").EXISTS,o=a("e330"),s=a("9bf2").f,i=Function.prototype,c=o(i.toString),l=/^\s*function ([^ (]*)/,u=o(l.exec),m="name";r&&!n&&s(i,m,{configurable:!0,get:function(){try{return u(l,c(this))[1]}catch(t){return""}}})},d81d:function(t,e,a){"use strict";var r=a("23e7"),n=a("b727").map,o=a("1dde"),s=o("map");r({target:"Array",proto:!0,forced:!s},{map:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},ddda:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row vertical",attrs:{"data-inset":"1rem"}},[a("div",{staticClass:"row horizontal v_center",attrs:{"data-space-bottom":"1rem"}},[a("el-button",{attrs:{type:"primary"},on:{click:t.addProduct}},[t._v("新增商品")])],1),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.getResponse}},[a("el-table-column",{attrs:{prop:"name",label:"商品名稱"}}),a("el-table-column",{attrs:{prop:"price",label:"售價"}}),a("el-table-column",{attrs:{prop:"count",label:"庫存數量"}}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"row horizontal v_center"},[a("el-button",{attrs:{type:"warning"},on:{click:function(a){return t.handleEdit(e.row)}}},[t._v("編輯")]),a("el-button",{attrs:{type:"danger"},on:{click:function(a){return t.handleDel(e.row.id)}}},[t._v("刪除")])],1)]}}])})],1),a("el-dialog",{attrs:{title:"提示",visible:t.showDialog,width:"40%"},on:{"update:visible":function(e){t.showDialog=e},close:t.handleClose}},[a("el-form",{ref:"form",attrs:{model:t.formData,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"ID:"}},[a("el-input",{model:{value:t.formData.id,callback:function(e){t.$set(t.formData,"id","string"===typeof e?e.trim():e)},expression:"formData.id"}})],1),a("el-form-item",{attrs:{label:"商品名稱:"}},[a("el-input",{model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name","string"===typeof e?e.trim():e)},expression:"formData.name"}})],1),a("el-form-item",{attrs:{label:"售價:"}},[a("el-input",{model:{value:t.formData.price,callback:function(e){t.$set(t.formData,"price","string"===typeof e?e.trim():e)},expression:"formData.price"}})],1),a("el-form-item",{attrs:{label:"庫存:"}},[a("el-input",{model:{value:t.formData.count,callback:function(e){t.$set(t.formData,"count","string"===typeof e?e.trim():e)},expression:"formData.count"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.showDialog=!1}}},[t._v("取消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.handleSubmit()}}},[t._v("送出")])],1)],1)],1)},n=[],o=a("1da1"),s=a("5530"),i=(a("d81d"),a("b64b"),a("b0c0"),a("96cf"),a("2f62")),c={name:"vuex",data:function(){return{showDialog:!1,formData:{id:"",name:"",price:"",count:"",img:""},submitStatus:""}},computed:Object(s["a"])({},Object(i["c"])(["getResponse"])),methods:Object(s["a"])(Object(s["a"])({},Object(i["b"])(["GET_API","POST_API","PUT_API","DEL_API"])),{},{callApi:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.GET_API();case 1:case"end":return e.stop()}}),e)})))()},postData:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.POST_API(t.formData);case 3:t.$message({type:"success",message:"新增成功!"}),e.next=10;break;case 6:e.prev=6,e.t0=e["catch"](0),t.$message({type:"error",message:"新增失敗!"}),console.log("error");case 10:case"end":return e.stop()}}),e,null,[[0,6]])})))()},editData:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.PUT_API(t.formData);case 3:t.$message({type:"success",message:"修改成功!"}),e.next=10;break;case 6:e.prev=6,e.t0=e["catch"](0),t.$message({type:"error",message:"修改失敗!"}),console.log("error");case 10:case"end":return e.stop()}}),e,null,[[0,6]])})))()},deleteData:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,e.DEL_API(t);case 3:a.next=8;break;case 5:a.prev=5,a.t0=a["catch"](0),console.log("error");case 8:case"end":return a.stop()}}),a,null,[[0,5]])})))()},addProduct:function(){this.showDialog=!0,this.submitStatus="add"},handleClose:function(){var t=this;Object.keys(this.formData).map((function(e){t.formData[e]=""}))},handleEdit:function(t){this.formData.id=t.id,this.formData.name=t.name,this.formData.price=t.price,this.formData.count=t.count,this.submitStatus="edit",this.showDialog=!0},handleSubmit:function(){"edit"===this.submitStatus?(this.PUT_API(this.formData),this.showDialog=!1,this.submitStatus=""):"add"===this.submitStatus&&(this.POST_API(this.formData),this.showDialog=!1,this.submitStatus="")},handleDel:function(t){var e=this;this.$confirm("將會刪除商品資料，是否繼續","注意",{confirmButtonText:"確定",cancelButtonText:"取消",type:"warning"}).then((function(){e.DEL_API(t),e.$message({type:"success",message:"刪除成功!"})})).catch((function(){e.$message({type:"info",message:"已取消刪除"})}))}}),created:function(){this.callApi()},mounted:function(){}},l=c,u=a("2877"),m=Object(u["a"])(l,r,n,!1,null,null,null);e["default"]=m.exports}}]);
//# sourceMappingURL=chunk-0c1a1387.de808144.js.map