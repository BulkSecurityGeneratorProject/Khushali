webpackHotUpdate(1,{

/***/ "./src/main/webapp/app/entities/shipment/shipment-my-suffix-dialog.component.html":
/***/ (function(module, exports) {

eval("module.exports = \"<form name=\\\"editForm\\\" role=\\\"form\\\" novalidate (ngSubmit)=\\\"save()\\\" #editForm=\\\"ngForm\\\"> <div class=\\\"modal-header\\\"> <h4 class=\\\"modal-title\\\" id=\\\"myShipmentLabel\\\" jhiTranslate=\\\"khushFinalApp.shipment.home.createOrEditLabel\\\">Create or edit a Shipment</h4> <button type=\\\"button\\\" class=\\\"close\\\" data-dismiss=\\\"modal\\\" aria-hidden=\\\"true\\\" (click)=\\\"clear()\\\">&times;</button> </div> <div class=\\\"modal-body\\\"> <jhi-alert-error></jhi-alert-error> <div class=\\\"form-group\\\" [hidden]=\\\"!shipment.id\\\"> <label for=\\\"id\\\" jhiTranslate=\\\"global.field.id\\\">ID</label> <input type=\\\"text\\\" class=\\\"form-control\\\" id=\\\"id\\\" name=\\\"id\\\" [(ngModel)]=\\\"shipment.id\\\" readonly=\\\"readonly\\\"/> </div> <div class=\\\"form-group\\\"> <label class=\\\"form-control-label\\\" jhiTranslate=\\\"khushFinalApp.shipment.shipmentNo\\\" for=\\\"field_shipmentNo\\\">Shipment No</label> <input type=\\\"text\\\" class=\\\"form-control\\\" name=\\\"shipmentNo\\\" id=\\\"field_shipmentNo\\\" [(ngModel)]=\\\"shipment.shipmentNo\\\"/> </div> <div class=\\\"form-group\\\"> <label class=\\\"form-control-label\\\" jhiTranslate=\\\"khushFinalApp.shipment.bookingNo\\\" for=\\\"field_bookingNo\\\">Booking No</label> <input type=\\\"text\\\" class=\\\"form-control\\\" name=\\\"bookingNo\\\" id=\\\"field_bookingNo\\\" [(ngModel)]=\\\"shipment.bookingNo\\\"/> </div> <div class=\\\"form-group\\\"> <label class=\\\"form-control-label\\\" jhiTranslate=\\\"khushFinalApp.shipment.etd\\\" for=\\\"field_etd\\\">Etd</label> <div class=\\\"d-flex\\\"> <input id=\\\"field_etd\\\" type=\\\"datetime-local\\\" class=\\\"form-control\\\" name=\\\"etd\\\" [(ngModel)]=\\\"shipment.etd\\\"/> </div> </div> <div class=\\\"form-group\\\"> <label class=\\\"form-control-label\\\" jhiTranslate=\\\"khushFinalApp.shipment.shipperCompany\\\" for=\\\"field_shipperCompany\\\">Shipper Company</label> <select class=\\\"form-control\\\" id=\\\"field_shipperCompany\\\" name=\\\"shipperCompany\\\" [(ngModel)]=\\\"shipment.shipperCompany\\\"> <option [ngValue]=\\\"null\\\"></option> <option [ngValue]=\\\"companyOption.id === shipment.shipperCompany?.id ? shipment.shipperCompany : companyOption\\\" *ngFor=\\\"let companyOption of shippercompanies; trackBy: trackCompanyById\\\">{{companyOption.companyName}}</option> </select> </div> <div class=\\\"form-group\\\"> <label class=\\\"form-control-label\\\" jhiTranslate=\\\"khushFinalApp.shipment.shipShipmentStatus\\\" for=\\\"field_shipShipmentStatus\\\">Ship Shipment Status</label> <select class=\\\"form-control\\\" id=\\\"field_shipShipmentStatus\\\" name=\\\"shipShipmentStatus\\\" [(ngModel)]=\\\"shipment.shipShipmentStatus\\\"> <option [ngValue]=\\\"null\\\"></option> <option [ngValue]=\\\"shipShipmentStatusOption.id === shipment.shipShipmentStatus?.id ? shipment.shipShipmentStatus : shipShipmentStatusOption\\\" *ngFor=\\\"let shipShipmentStatusOption of shipshipmentstatuses; trackBy: trackShipShipmentStatusById\\\">{{shipShipmentStatusOption.name}}</option> </select> </div> </div> <div class=\\\"modal-footer\\\"> <button type=\\\"button\\\" class=\\\"btn btn-secondary\\\" data-dismiss=\\\"modal\\\" (click)=\\\"clear()\\\"> <span class=\\\"fa fa-ban\\\"></span>&nbsp;<span jhiTranslate=\\\"entity.action.cancel\\\">Cancel</span> </button> <button type=\\\"submit\\\" [disabled]=\\\"editForm.form.invalid || isSaving\\\" class=\\\"btn btn-primary\\\"> <span class=\\\"fa fa-save\\\"></span>&nbsp;<span jhiTranslate=\\\"entity.action.save\\\">Save</span> </button> </div> </form> \";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL3NoaXBtZW50L3NoaXBtZW50LW15LXN1ZmZpeC1kaWFsb2cuY29tcG9uZW50Lmh0bWw/YzZiMCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwwWUFBMFksK29EQUErb0QsK0JBQStCLDJCQUEyQiw2a0JBQTZrQiwwQ0FBMEMsK0JBQStCLHNNQUFzTSxnTkFBZ04iLCJmaWxlIjoiLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL3NoaXBtZW50L3NoaXBtZW50LW15LXN1ZmZpeC1kaWFsb2cuY29tcG9uZW50Lmh0bWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiPGZvcm0gbmFtZT1cXFwiZWRpdEZvcm1cXFwiIHJvbGU9XFxcImZvcm1cXFwiIG5vdmFsaWRhdGUgKG5nU3VibWl0KT1cXFwic2F2ZSgpXFxcIiAjZWRpdEZvcm09XFxcIm5nRm9ybVxcXCI+IDxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+IDxoNCBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiIGlkPVxcXCJteVNoaXBtZW50TGFiZWxcXFwiIGpoaVRyYW5zbGF0ZT1cXFwia2h1c2hGaW5hbEFwcC5zaGlwbWVudC5ob21lLmNyZWF0ZU9yRWRpdExhYmVsXFxcIj5DcmVhdGUgb3IgZWRpdCBhIFNoaXBtZW50PC9oND4gPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgZGF0YS1kaXNtaXNzPVxcXCJtb2RhbFxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiIChjbGljayk9XFxcImNsZWFyKClcXFwiPiZ0aW1lczs8L2J1dHRvbj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPiA8amhpLWFsZXJ0LWVycm9yPjwvamhpLWFsZXJ0LWVycm9yPiA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBbaGlkZGVuXT1cXFwiIXNoaXBtZW50LmlkXFxcIj4gPGxhYmVsIGZvcj1cXFwiaWRcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLmZpZWxkLmlkXFxcIj5JRDwvbGFiZWw+IDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwiaWRcXFwiIG5hbWU9XFxcImlkXFxcIiBbKG5nTW9kZWwpXT1cXFwic2hpcG1lbnQuaWRcXFwiIHJlYWRvbmx5PVxcXCJyZWFkb25seVxcXCIvPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+IDxsYWJlbCBjbGFzcz1cXFwiZm9ybS1jb250cm9sLWxhYmVsXFxcIiBqaGlUcmFuc2xhdGU9XFxcImtodXNoRmluYWxBcHAuc2hpcG1lbnQuc2hpcG1lbnROb1xcXCIgZm9yPVxcXCJmaWVsZF9zaGlwbWVudE5vXFxcIj5TaGlwbWVudCBObzwvbGFiZWw+IDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJzaGlwbWVudE5vXFxcIiBpZD1cXFwiZmllbGRfc2hpcG1lbnROb1xcXCIgWyhuZ01vZGVsKV09XFxcInNoaXBtZW50LnNoaXBtZW50Tm9cXFwiLz4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPiA8bGFiZWwgY2xhc3M9XFxcImZvcm0tY29udHJvbC1sYWJlbFxcXCIgamhpVHJhbnNsYXRlPVxcXCJraHVzaEZpbmFsQXBwLnNoaXBtZW50LmJvb2tpbmdOb1xcXCIgZm9yPVxcXCJmaWVsZF9ib29raW5nTm9cXFwiPkJvb2tpbmcgTm88L2xhYmVsPiA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwiYm9va2luZ05vXFxcIiBpZD1cXFwiZmllbGRfYm9va2luZ05vXFxcIiBbKG5nTW9kZWwpXT1cXFwic2hpcG1lbnQuYm9va2luZ05vXFxcIi8+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj4gPGxhYmVsIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wtbGFiZWxcXFwiIGpoaVRyYW5zbGF0ZT1cXFwia2h1c2hGaW5hbEFwcC5zaGlwbWVudC5ldGRcXFwiIGZvcj1cXFwiZmllbGRfZXRkXFxcIj5FdGQ8L2xhYmVsPiA8ZGl2IGNsYXNzPVxcXCJkLWZsZXhcXFwiPiA8aW5wdXQgaWQ9XFxcImZpZWxkX2V0ZFxcXCIgdHlwZT1cXFwiZGF0ZXRpbWUtbG9jYWxcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcImV0ZFxcXCIgWyhuZ01vZGVsKV09XFxcInNoaXBtZW50LmV0ZFxcXCIvPiA8L2Rpdj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPiA8bGFiZWwgY2xhc3M9XFxcImZvcm0tY29udHJvbC1sYWJlbFxcXCIgamhpVHJhbnNsYXRlPVxcXCJraHVzaEZpbmFsQXBwLnNoaXBtZW50LnNoaXBwZXJDb21wYW55XFxcIiBmb3I9XFxcImZpZWxkX3NoaXBwZXJDb21wYW55XFxcIj5TaGlwcGVyIENvbXBhbnk8L2xhYmVsPiA8c2VsZWN0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJmaWVsZF9zaGlwcGVyQ29tcGFueVxcXCIgbmFtZT1cXFwic2hpcHBlckNvbXBhbnlcXFwiIFsobmdNb2RlbCldPVxcXCJzaGlwbWVudC5zaGlwcGVyQ29tcGFueVxcXCI+IDxvcHRpb24gW25nVmFsdWVdPVxcXCJudWxsXFxcIj48L29wdGlvbj4gPG9wdGlvbiBbbmdWYWx1ZV09XFxcImNvbXBhbnlPcHRpb24uaWQgPT09IHNoaXBtZW50LnNoaXBwZXJDb21wYW55Py5pZCA/IHNoaXBtZW50LnNoaXBwZXJDb21wYW55IDogY29tcGFueU9wdGlvblxcXCIgKm5nRm9yPVxcXCJsZXQgY29tcGFueU9wdGlvbiBvZiBzaGlwcGVyY29tcGFuaWVzOyB0cmFja0J5OiB0cmFja0NvbXBhbnlCeUlkXFxcIj57e2NvbXBhbnlPcHRpb24uY29tcGFueU5hbWV9fTwvb3B0aW9uPiA8L3NlbGVjdD4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPiA8bGFiZWwgY2xhc3M9XFxcImZvcm0tY29udHJvbC1sYWJlbFxcXCIgamhpVHJhbnNsYXRlPVxcXCJraHVzaEZpbmFsQXBwLnNoaXBtZW50LnNoaXBTaGlwbWVudFN0YXR1c1xcXCIgZm9yPVxcXCJmaWVsZF9zaGlwU2hpcG1lbnRTdGF0dXNcXFwiPlNoaXAgU2hpcG1lbnQgU3RhdHVzPC9sYWJlbD4gPHNlbGVjdCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwiZmllbGRfc2hpcFNoaXBtZW50U3RhdHVzXFxcIiBuYW1lPVxcXCJzaGlwU2hpcG1lbnRTdGF0dXNcXFwiIFsobmdNb2RlbCldPVxcXCJzaGlwbWVudC5zaGlwU2hpcG1lbnRTdGF0dXNcXFwiPiA8b3B0aW9uIFtuZ1ZhbHVlXT1cXFwibnVsbFxcXCI+PC9vcHRpb24+IDxvcHRpb24gW25nVmFsdWVdPVxcXCJzaGlwU2hpcG1lbnRTdGF0dXNPcHRpb24uaWQgPT09IHNoaXBtZW50LnNoaXBTaGlwbWVudFN0YXR1cz8uaWQgPyBzaGlwbWVudC5zaGlwU2hpcG1lbnRTdGF0dXMgOiBzaGlwU2hpcG1lbnRTdGF0dXNPcHRpb25cXFwiICpuZ0Zvcj1cXFwibGV0IHNoaXBTaGlwbWVudFN0YXR1c09wdGlvbiBvZiBzaGlwc2hpcG1lbnRzdGF0dXNlczsgdHJhY2tCeTogdHJhY2tTaGlwU2hpcG1lbnRTdGF0dXNCeUlkXFxcIj57e3NoaXBTaGlwbWVudFN0YXR1c09wdGlvbi5uYW1lfX08L29wdGlvbj4gPC9zZWxlY3Q+IDwvZGl2PiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwibW9kYWwtZm9vdGVyXFxcIj4gPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXNlY29uZGFyeVxcXCIgZGF0YS1kaXNtaXNzPVxcXCJtb2RhbFxcXCIgKGNsaWNrKT1cXFwiY2xlYXIoKVxcXCI+IDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1iYW5cXFwiPjwvc3Bhbj4mbmJzcDs8c3BhbiBqaGlUcmFuc2xhdGU9XFxcImVudGl0eS5hY3Rpb24uY2FuY2VsXFxcIj5DYW5jZWw8L3NwYW4+IDwvYnV0dG9uPiA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgW2Rpc2FibGVkXT1cXFwiZWRpdEZvcm0uZm9ybS5pbnZhbGlkIHx8IGlzU2F2aW5nXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIj4gPHNwYW4gY2xhc3M9XFxcImZhIGZhLXNhdmVcXFwiPjwvc3Bhbj4mbmJzcDs8c3BhbiBqaGlUcmFuc2xhdGU9XFxcImVudGl0eS5hY3Rpb24uc2F2ZVxcXCI+U2F2ZTwvc3Bhbj4gPC9idXR0b24+IDwvZGl2PiA8L2Zvcm0+IFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2FwcC9lbnRpdGllcy9zaGlwbWVudC9zaGlwbWVudC1teS1zdWZmaXgtZGlhbG9nLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9tYWluL3dlYmFwcC9hcHAvZW50aXRpZXMvc2hpcG1lbnQvc2hpcG1lbnQtbXktc3VmZml4LWRpYWxvZy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/main/webapp/app/entities/shipment/shipment-my-suffix-dialog.component.html\n");

/***/ })

})