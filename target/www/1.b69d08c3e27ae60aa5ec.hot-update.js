webpackHotUpdate(1,{

/***/ "./src/main/webapp/app/entities/sales-order/sales-order-my-suffix-dialog.component.html":
/***/ (function(module, exports) {

eval("module.exports = \"<form name=\\\"editForm\\\" role=\\\"form\\\" novalidate (ngSubmit)=\\\"save()\\\" #editForm=\\\"ngForm\\\"> <div class=\\\"modal-header\\\"> <h4 class=\\\"modal-title\\\" id=\\\"mySalesOrderLabel\\\" jhiTranslate=\\\"khushFinalApp.salesOrder.home.createOrEditLabel\\\">Create or edit a Sales Order</h4> <button type=\\\"button\\\" class=\\\"close\\\" data-dismiss=\\\"modal\\\" aria-hidden=\\\"true\\\" (click)=\\\"clear()\\\">&times;</button> </div> <div class=\\\"modal-body\\\"> <jhi-alert-error></jhi-alert-error> <div class=\\\"form-group\\\" [hidden]=\\\"!salesOrder.id\\\"> <label for=\\\"id\\\" jhiTranslate=\\\"global.field.id\\\">ID</label> <input type=\\\"text\\\" class=\\\"form-control\\\" id=\\\"id\\\" name=\\\"id\\\" [(ngModel)]=\\\"salesOrder.id\\\" readonly=\\\"readonly\\\"/> </div> <div class=\\\"form-group\\\"> <label class=\\\"form-control-label\\\" jhiTranslate=\\\"khushFinalApp.salesOrder.orderNumber\\\" for=\\\"field_orderNumber\\\">Order Number</label> <input type=\\\"text\\\" class=\\\"form-control\\\" name=\\\"orderNumber\\\" id=\\\"field_orderNumber\\\" [(ngModel)]=\\\"salesOrder.orderNumber\\\"/> </div> <div class=\\\"form-group\\\"> <label class=\\\"form-control-label\\\" jhiTranslate=\\\"khushFinalApp.salesOrder.orderDate\\\" for=\\\"field_orderDate\\\">Order Date</label> <div class=\\\"d-flex\\\"> <input id=\\\"field_orderDate\\\" type=\\\"datetime-local\\\" class=\\\"form-control\\\" name=\\\"orderDate\\\" [(ngModel)]=\\\"salesOrder.orderDate\\\"/> </div> </div> <div class=\\\"form-group\\\"> <label class=\\\"form-control-label\\\" jhiTranslate=\\\"khushFinalApp.salesOrder.shipDate\\\" for=\\\"field_shipDate\\\">Ship Date</label> <div class=\\\"d-flex\\\"> <input id=\\\"field_shipDate\\\" type=\\\"datetime-local\\\" class=\\\"form-control\\\" name=\\\"shipDate\\\" [(ngModel)]=\\\"salesOrder.shipDate\\\"/> </div> </div> <div class=\\\"form-group\\\"> <label class=\\\"form-control-label\\\" jhiTranslate=\\\"khushFinalApp.salesOrder.status\\\" for=\\\"field_status\\\">Status</label> <select class=\\\"form-control\\\" name=\\\"status\\\" [(ngModel)]=\\\"salesOrder.status\\\" id=\\\"field_status\\\"> <option value=\\\"DRAFT\\\">{{'khushFinalApp.OrderStatus.DRAFT' | translate}}</option> <option value=\\\"FULLFILLED\\\">{{'khushFinalApp.OrderStatus.FULLFILLED' | translate}}</option> <option value=\\\"CONFIRMED\\\">{{'khushFinalApp.OrderStatus.CONFIRMED' | translate}}</option> <option value=\\\"CANCELLED\\\">{{'khushFinalApp.OrderStatus.CANCELLED' | translate}}</option> </select> </div> <div class=\\\"form-group\\\"> <label class=\\\"form-control-label\\\" jhiTranslate=\\\"khushFinalApp.salesOrder.customer\\\" for=\\\"field_customer\\\">Customer</label> <select class=\\\"form-control\\\" id=\\\"field_customer\\\" name=\\\"customer\\\" [(ngModel)]=\\\"salesOrder.customer\\\"> <option [ngValue]=\\\"null\\\"></option> <option [ngValue]=\\\"companyOption.id === salesOrder.customer?.id ? salesOrder.customer : companyOption\\\" *ngFor=\\\"let companyOption of companies; trackBy: trackCompanyById\\\">{{companyOption.id}}</option> </select> </div> <div class=\\\"form-group\\\"> <label class=\\\"form-control-label\\\" jhiTranslate=\\\"khushFinalApp.salesOrder.shipment\\\" for=\\\"field_shipment\\\">Shipment Created</label> <select class=\\\"form-control\\\" id=\\\"field_shipment\\\" name=\\\"shipment\\\" [(ngModel)]=\\\"salesOrder.shipment\\\"> <option [ngValue]=\\\"null\\\"></option> <option [ngValue]=\\\"shipmentOption.id === salesOrder.shipment?.id ? salesOrder.shipment : shipmentOption\\\" *ngFor=\\\"let shipmentOption of shipments; trackBy: trackShipmentById\\\">{{shipmentOption.id}}</option> </select> </div> </div> <div class=\\\"modal-footer\\\"> <button type=\\\"button\\\" class=\\\"btn btn-secondary\\\" data-dismiss=\\\"modal\\\" (click)=\\\"clear()\\\"> <span class=\\\"fa fa-ban\\\"></span>&nbsp;<span jhiTranslate=\\\"entity.action.cancel\\\">Cancel</span> </button> <button type=\\\"submit\\\" [disabled]=\\\"editForm.form.invalid || isSaving\\\" class=\\\"btn btn-primary\\\"> <span class=\\\"fa fa-save\\\"></span>&nbsp;<span jhiTranslate=\\\"entity.action.save\\\">Save</span> </button> </div> </form> \";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL3NhbGVzLW9yZGVyL3NhbGVzLW9yZGVyLW15LXN1ZmZpeC1kaWFsb2cuY29tcG9uZW50Lmh0bWw/NTA5NyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpWkFBaVosb2hEQUFvaEQsK0NBQStDLHlDQUF5QyxvREFBb0Qsd0NBQXdDLG1EQUFtRCx3Q0FBd0MsbURBQW1ELHVkQUF1ZCwrQkFBK0Isa0JBQWtCLGtlQUFrZSxnQ0FBZ0MsbUJBQW1CLHNNQUFzTSxnTkFBZ04iLCJmaWxlIjoiLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL3NhbGVzLW9yZGVyL3NhbGVzLW9yZGVyLW15LXN1ZmZpeC1kaWFsb2cuY29tcG9uZW50Lmh0bWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiPGZvcm0gbmFtZT1cXFwiZWRpdEZvcm1cXFwiIHJvbGU9XFxcImZvcm1cXFwiIG5vdmFsaWRhdGUgKG5nU3VibWl0KT1cXFwic2F2ZSgpXFxcIiAjZWRpdEZvcm09XFxcIm5nRm9ybVxcXCI+IDxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+IDxoNCBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiIGlkPVxcXCJteVNhbGVzT3JkZXJMYWJlbFxcXCIgamhpVHJhbnNsYXRlPVxcXCJraHVzaEZpbmFsQXBwLnNhbGVzT3JkZXIuaG9tZS5jcmVhdGVPckVkaXRMYWJlbFxcXCI+Q3JlYXRlIG9yIGVkaXQgYSBTYWxlcyBPcmRlcjwvaDQ+IDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIGRhdGEtZGlzbWlzcz1cXFwibW9kYWxcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIiAoY2xpY2spPVxcXCJjbGVhcigpXFxcIj4mdGltZXM7PC9idXR0b24+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj4gPGpoaS1hbGVydC1lcnJvcj48L2poaS1hbGVydC1lcnJvcj4gPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgW2hpZGRlbl09XFxcIiFzYWxlc09yZGVyLmlkXFxcIj4gPGxhYmVsIGZvcj1cXFwiaWRcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLmZpZWxkLmlkXFxcIj5JRDwvbGFiZWw+IDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwiaWRcXFwiIG5hbWU9XFxcImlkXFxcIiBbKG5nTW9kZWwpXT1cXFwic2FsZXNPcmRlci5pZFxcXCIgcmVhZG9ubHk9XFxcInJlYWRvbmx5XFxcIi8+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj4gPGxhYmVsIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wtbGFiZWxcXFwiIGpoaVRyYW5zbGF0ZT1cXFwia2h1c2hGaW5hbEFwcC5zYWxlc09yZGVyLm9yZGVyTnVtYmVyXFxcIiBmb3I9XFxcImZpZWxkX29yZGVyTnVtYmVyXFxcIj5PcmRlciBOdW1iZXI8L2xhYmVsPiA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwib3JkZXJOdW1iZXJcXFwiIGlkPVxcXCJmaWVsZF9vcmRlck51bWJlclxcXCIgWyhuZ01vZGVsKV09XFxcInNhbGVzT3JkZXIub3JkZXJOdW1iZXJcXFwiLz4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPiA8bGFiZWwgY2xhc3M9XFxcImZvcm0tY29udHJvbC1sYWJlbFxcXCIgamhpVHJhbnNsYXRlPVxcXCJraHVzaEZpbmFsQXBwLnNhbGVzT3JkZXIub3JkZXJEYXRlXFxcIiBmb3I9XFxcImZpZWxkX29yZGVyRGF0ZVxcXCI+T3JkZXIgRGF0ZTwvbGFiZWw+IDxkaXYgY2xhc3M9XFxcImQtZmxleFxcXCI+IDxpbnB1dCBpZD1cXFwiZmllbGRfb3JkZXJEYXRlXFxcIiB0eXBlPVxcXCJkYXRldGltZS1sb2NhbFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwib3JkZXJEYXRlXFxcIiBbKG5nTW9kZWwpXT1cXFwic2FsZXNPcmRlci5vcmRlckRhdGVcXFwiLz4gPC9kaXY+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj4gPGxhYmVsIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wtbGFiZWxcXFwiIGpoaVRyYW5zbGF0ZT1cXFwia2h1c2hGaW5hbEFwcC5zYWxlc09yZGVyLnNoaXBEYXRlXFxcIiBmb3I9XFxcImZpZWxkX3NoaXBEYXRlXFxcIj5TaGlwIERhdGU8L2xhYmVsPiA8ZGl2IGNsYXNzPVxcXCJkLWZsZXhcXFwiPiA8aW5wdXQgaWQ9XFxcImZpZWxkX3NoaXBEYXRlXFxcIiB0eXBlPVxcXCJkYXRldGltZS1sb2NhbFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwic2hpcERhdGVcXFwiIFsobmdNb2RlbCldPVxcXCJzYWxlc09yZGVyLnNoaXBEYXRlXFxcIi8+IDwvZGl2PiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+IDxsYWJlbCBjbGFzcz1cXFwiZm9ybS1jb250cm9sLWxhYmVsXFxcIiBqaGlUcmFuc2xhdGU9XFxcImtodXNoRmluYWxBcHAuc2FsZXNPcmRlci5zdGF0dXNcXFwiIGZvcj1cXFwiZmllbGRfc3RhdHVzXFxcIj5TdGF0dXM8L2xhYmVsPiA8c2VsZWN0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcInN0YXR1c1xcXCIgWyhuZ01vZGVsKV09XFxcInNhbGVzT3JkZXIuc3RhdHVzXFxcIiBpZD1cXFwiZmllbGRfc3RhdHVzXFxcIj4gPG9wdGlvbiB2YWx1ZT1cXFwiRFJBRlRcXFwiPnt7J2todXNoRmluYWxBcHAuT3JkZXJTdGF0dXMuRFJBRlQnIHwgdHJhbnNsYXRlfX08L29wdGlvbj4gPG9wdGlvbiB2YWx1ZT1cXFwiRlVMTEZJTExFRFxcXCI+e3sna2h1c2hGaW5hbEFwcC5PcmRlclN0YXR1cy5GVUxMRklMTEVEJyB8IHRyYW5zbGF0ZX19PC9vcHRpb24+IDxvcHRpb24gdmFsdWU9XFxcIkNPTkZJUk1FRFxcXCI+e3sna2h1c2hGaW5hbEFwcC5PcmRlclN0YXR1cy5DT05GSVJNRUQnIHwgdHJhbnNsYXRlfX08L29wdGlvbj4gPG9wdGlvbiB2YWx1ZT1cXFwiQ0FOQ0VMTEVEXFxcIj57eydraHVzaEZpbmFsQXBwLk9yZGVyU3RhdHVzLkNBTkNFTExFRCcgfCB0cmFuc2xhdGV9fTwvb3B0aW9uPiA8L3NlbGVjdD4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPiA8bGFiZWwgY2xhc3M9XFxcImZvcm0tY29udHJvbC1sYWJlbFxcXCIgamhpVHJhbnNsYXRlPVxcXCJraHVzaEZpbmFsQXBwLnNhbGVzT3JkZXIuY3VzdG9tZXJcXFwiIGZvcj1cXFwiZmllbGRfY3VzdG9tZXJcXFwiPkN1c3RvbWVyPC9sYWJlbD4gPHNlbGVjdCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwiZmllbGRfY3VzdG9tZXJcXFwiIG5hbWU9XFxcImN1c3RvbWVyXFxcIiBbKG5nTW9kZWwpXT1cXFwic2FsZXNPcmRlci5jdXN0b21lclxcXCI+IDxvcHRpb24gW25nVmFsdWVdPVxcXCJudWxsXFxcIj48L29wdGlvbj4gPG9wdGlvbiBbbmdWYWx1ZV09XFxcImNvbXBhbnlPcHRpb24uaWQgPT09IHNhbGVzT3JkZXIuY3VzdG9tZXI/LmlkID8gc2FsZXNPcmRlci5jdXN0b21lciA6IGNvbXBhbnlPcHRpb25cXFwiICpuZ0Zvcj1cXFwibGV0IGNvbXBhbnlPcHRpb24gb2YgY29tcGFuaWVzOyB0cmFja0J5OiB0cmFja0NvbXBhbnlCeUlkXFxcIj57e2NvbXBhbnlPcHRpb24uaWR9fTwvb3B0aW9uPiA8L3NlbGVjdD4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPiA8bGFiZWwgY2xhc3M9XFxcImZvcm0tY29udHJvbC1sYWJlbFxcXCIgamhpVHJhbnNsYXRlPVxcXCJraHVzaEZpbmFsQXBwLnNhbGVzT3JkZXIuc2hpcG1lbnRcXFwiIGZvcj1cXFwiZmllbGRfc2hpcG1lbnRcXFwiPlNoaXBtZW50IENyZWF0ZWQ8L2xhYmVsPiA8c2VsZWN0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJmaWVsZF9zaGlwbWVudFxcXCIgbmFtZT1cXFwic2hpcG1lbnRcXFwiIFsobmdNb2RlbCldPVxcXCJzYWxlc09yZGVyLnNoaXBtZW50XFxcIj4gPG9wdGlvbiBbbmdWYWx1ZV09XFxcIm51bGxcXFwiPjwvb3B0aW9uPiA8b3B0aW9uIFtuZ1ZhbHVlXT1cXFwic2hpcG1lbnRPcHRpb24uaWQgPT09IHNhbGVzT3JkZXIuc2hpcG1lbnQ/LmlkID8gc2FsZXNPcmRlci5zaGlwbWVudCA6IHNoaXBtZW50T3B0aW9uXFxcIiAqbmdGb3I9XFxcImxldCBzaGlwbWVudE9wdGlvbiBvZiBzaGlwbWVudHM7IHRyYWNrQnk6IHRyYWNrU2hpcG1lbnRCeUlkXFxcIj57e3NoaXBtZW50T3B0aW9uLmlkfX08L29wdGlvbj4gPC9zZWxlY3Q+IDwvZGl2PiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwibW9kYWwtZm9vdGVyXFxcIj4gPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXNlY29uZGFyeVxcXCIgZGF0YS1kaXNtaXNzPVxcXCJtb2RhbFxcXCIgKGNsaWNrKT1cXFwiY2xlYXIoKVxcXCI+IDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1iYW5cXFwiPjwvc3Bhbj4mbmJzcDs8c3BhbiBqaGlUcmFuc2xhdGU9XFxcImVudGl0eS5hY3Rpb24uY2FuY2VsXFxcIj5DYW5jZWw8L3NwYW4+IDwvYnV0dG9uPiA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgW2Rpc2FibGVkXT1cXFwiZWRpdEZvcm0uZm9ybS5pbnZhbGlkIHx8IGlzU2F2aW5nXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIj4gPHNwYW4gY2xhc3M9XFxcImZhIGZhLXNhdmVcXFwiPjwvc3Bhbj4mbmJzcDs8c3BhbiBqaGlUcmFuc2xhdGU9XFxcImVudGl0eS5hY3Rpb24uc2F2ZVxcXCI+U2F2ZTwvc3Bhbj4gPC9idXR0b24+IDwvZGl2PiA8L2Zvcm0+IFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2FwcC9lbnRpdGllcy9zYWxlcy1vcmRlci9zYWxlcy1vcmRlci1teS1zdWZmaXgtZGlhbG9nLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9tYWluL3dlYmFwcC9hcHAvZW50aXRpZXMvc2FsZXMtb3JkZXIvc2FsZXMtb3JkZXItbXktc3VmZml4LWRpYWxvZy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/main/webapp/app/entities/sales-order/sales-order-my-suffix-dialog.component.html\n");

/***/ })

})