webpackHotUpdate(1,{

/***/ "./src/main/webapp/app/entities/shipment/shipment-my-suffix-detail.component.html":
/***/ (function(module, exports) {

eval("module.exports = \" <div *ngIf=\\\"shipment\\\"> <h2><span jhiTranslate=\\\"khushFinalApp.shipment.detail.title\\\">Shipment</span> {{shipment.id}}</h2> <hr> <jhi-alert-error></jhi-alert-error> <dl class=\\\"row-md jh-entity-details\\\"> <dt><span jhiTranslate=\\\"khushFinalApp.shipment.shipmentNo\\\">Shipment No</span></dt> <dd> <span>{{shipment.shipmentNo}}</span> </dd> <dt><span jhiTranslate=\\\"khushFinalApp.shipment.bookingNo\\\">Booking No</span></dt> <dd> <span>{{shipment.bookingNo}}</span> </dd> <dt><span jhiTranslate=\\\"khushFinalApp.shipment.etd\\\">Etd</span></dt> <dd> <span>{{shipment.etd | date:'medium'}}</span> </dd> <dt><span jhiTranslate=\\\"khushFinalApp.shipment.shipperCompany\\\">Shipper Company</span></dt> <dd> <div *ngIf=\\\"shipment.shipperCompany\\\"> <a [routerLink]=\\\"['/company-my-suffix', shipment.shipperCompany?.id]\\\">{{shipment.shipperCompany?.name}}</a> </div> </dd> <dt><span jhiTranslate=\\\"khushFinalApp.shipment.shipShipmentStatus\\\">Ship Shipment Status</span></dt> <dd> <div *ngIf=\\\"shipment.shipShipmentStatus\\\"> <a [routerLink]=\\\"['/ship-shipment-status-my-suffix', shipment.shipShipmentStatus?.id]\\\">{{shipment.shipShipmentStatus?.name}}</a> </div> </dd> </dl> <div> <span style=\\\"font-weight: bold\\\">Shipment Product</span> </div> <div class=\\\"table-responsive\\\" *ngIf=\\\"shipment.shipProducts\\\"> <table class=\\\"table table-striped\\\"> <thead> <tr> <th><span>Product</span> <span></span></th> <th><span>Quantity</span> <span></span></th> <th><span>Net Weight</span> <span></span></th> <th><span>Gross Weight</span> <span></span></th> <th><span>Package</span> <span></span></th> <th></th> </tr> </thead> <tbody> <tr *ngFor=\\\"let shipProduct of shipment.shipProducts ;trackBy: trackId\\\"> <td>{{shipProduct.salesOrderProduct.product.name}}</td> <td>{{shipProduct.quantity}}</td> <td>{{shipProduct.netWeight}}</td> <td>{{shipProduct.grossWeight}}</td> <td>{{shipProduct.packege}}</td> </tr> </tbody> </table> </div> <button type=\\\"submit\\\" (click)=\\\"previousState()\\\" class=\\\"btn btn-info\\\"> <span class=\\\"fa fa-arrow-left\\\"></span>&nbsp;<span jhiTranslate=\\\"entity.action.back\\\"> Back</span> </button> <button type=\\\"button\\\" [routerLink]=\\\"['/', { outlets: { popup: 'shipment-my-suffix/'+ shipment.id + '/edit'} }]\\\" replaceUrl=\\\"true\\\" class=\\\"btn btn-primary\\\"> <span class=\\\"fa fa-pencil\\\"></span>&nbsp;<span jhiTranslate=\\\"entity.action.edit\\\"> Edit</span> </button> </div> \";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL3NoaXBtZW50L3NoaXBtZW50LW15LXN1ZmZpeC1kZXRhaWwuY29tcG9uZW50Lmh0bWw/ODk5OSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2SEFBNkgsYUFBYSx5TEFBeUwscUJBQXFCLDhHQUE4RyxvQkFBb0IsaUdBQWlHLDhCQUE4QixrT0FBa08sK0JBQStCLG9RQUFvUSxtQ0FBbUMsZ2hCQUFnaEIsMEJBQTBCLDRDQUE0QyxZQUFZLHNCQUFzQixZQUFZLHVCQUF1QixZQUFZLHlCQUF5QixZQUFZLHFCQUFxQiwrSkFBK0osK0dBQStHLFdBQVcscURBQXFELEVBQUUsNkZBQTZGIiwiZmlsZSI6Ii4vc3JjL21haW4vd2ViYXBwL2FwcC9lbnRpdGllcy9zaGlwbWVudC9zaGlwbWVudC1teS1zdWZmaXgtZGV0YWlsLmNvbXBvbmVudC5odG1sLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIiA8ZGl2ICpuZ0lmPVxcXCJzaGlwbWVudFxcXCI+IDxoMj48c3BhbiBqaGlUcmFuc2xhdGU9XFxcImtodXNoRmluYWxBcHAuc2hpcG1lbnQuZGV0YWlsLnRpdGxlXFxcIj5TaGlwbWVudDwvc3Bhbj4ge3tzaGlwbWVudC5pZH19PC9oMj4gPGhyPiA8amhpLWFsZXJ0LWVycm9yPjwvamhpLWFsZXJ0LWVycm9yPiA8ZGwgY2xhc3M9XFxcInJvdy1tZCBqaC1lbnRpdHktZGV0YWlsc1xcXCI+IDxkdD48c3BhbiBqaGlUcmFuc2xhdGU9XFxcImtodXNoRmluYWxBcHAuc2hpcG1lbnQuc2hpcG1lbnROb1xcXCI+U2hpcG1lbnQgTm88L3NwYW4+PC9kdD4gPGRkPiA8c3Bhbj57e3NoaXBtZW50LnNoaXBtZW50Tm99fTwvc3Bhbj4gPC9kZD4gPGR0PjxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwia2h1c2hGaW5hbEFwcC5zaGlwbWVudC5ib29raW5nTm9cXFwiPkJvb2tpbmcgTm88L3NwYW4+PC9kdD4gPGRkPiA8c3Bhbj57e3NoaXBtZW50LmJvb2tpbmdOb319PC9zcGFuPiA8L2RkPiA8ZHQ+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJraHVzaEZpbmFsQXBwLnNoaXBtZW50LmV0ZFxcXCI+RXRkPC9zcGFuPjwvZHQ+IDxkZD4gPHNwYW4+e3tzaGlwbWVudC5ldGQgfCBkYXRlOidtZWRpdW0nfX08L3NwYW4+IDwvZGQ+IDxkdD48c3BhbiBqaGlUcmFuc2xhdGU9XFxcImtodXNoRmluYWxBcHAuc2hpcG1lbnQuc2hpcHBlckNvbXBhbnlcXFwiPlNoaXBwZXIgQ29tcGFueTwvc3Bhbj48L2R0PiA8ZGQ+IDxkaXYgKm5nSWY9XFxcInNoaXBtZW50LnNoaXBwZXJDb21wYW55XFxcIj4gPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9jb21wYW55LW15LXN1ZmZpeCcsIHNoaXBtZW50LnNoaXBwZXJDb21wYW55Py5pZF1cXFwiPnt7c2hpcG1lbnQuc2hpcHBlckNvbXBhbnk/Lm5hbWV9fTwvYT4gPC9kaXY+IDwvZGQ+IDxkdD48c3BhbiBqaGlUcmFuc2xhdGU9XFxcImtodXNoRmluYWxBcHAuc2hpcG1lbnQuc2hpcFNoaXBtZW50U3RhdHVzXFxcIj5TaGlwIFNoaXBtZW50IFN0YXR1czwvc3Bhbj48L2R0PiA8ZGQ+IDxkaXYgKm5nSWY9XFxcInNoaXBtZW50LnNoaXBTaGlwbWVudFN0YXR1c1xcXCI+IDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvc2hpcC1zaGlwbWVudC1zdGF0dXMtbXktc3VmZml4Jywgc2hpcG1lbnQuc2hpcFNoaXBtZW50U3RhdHVzPy5pZF1cXFwiPnt7c2hpcG1lbnQuc2hpcFNoaXBtZW50U3RhdHVzPy5uYW1lfX08L2E+IDwvZGl2PiA8L2RkPiA8L2RsPiA8ZGl2PiA8c3BhbiBzdHlsZT1cXFwiZm9udC13ZWlnaHQ6IGJvbGRcXFwiPlNoaXBtZW50IFByb2R1Y3Q8L3NwYW4+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJ0YWJsZS1yZXNwb25zaXZlXFxcIiAqbmdJZj1cXFwic2hpcG1lbnQuc2hpcFByb2R1Y3RzXFxcIj4gPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1zdHJpcGVkXFxcIj4gPHRoZWFkPiA8dHI+IDx0aD48c3Bhbj5Qcm9kdWN0PC9zcGFuPiA8c3Bhbj48L3NwYW4+PC90aD4gPHRoPjxzcGFuPlF1YW50aXR5PC9zcGFuPiA8c3Bhbj48L3NwYW4+PC90aD4gPHRoPjxzcGFuPk5ldCBXZWlnaHQ8L3NwYW4+IDxzcGFuPjwvc3Bhbj48L3RoPiA8dGg+PHNwYW4+R3Jvc3MgV2VpZ2h0PC9zcGFuPiA8c3Bhbj48L3NwYW4+PC90aD4gPHRoPjxzcGFuPlBhY2thZ2U8L3NwYW4+IDxzcGFuPjwvc3Bhbj48L3RoPiA8dGg+PC90aD4gPC90cj4gPC90aGVhZD4gPHRib2R5PiA8dHIgKm5nRm9yPVxcXCJsZXQgc2hpcFByb2R1Y3Qgb2Ygc2hpcG1lbnQuc2hpcFByb2R1Y3RzIDt0cmFja0J5OiB0cmFja0lkXFxcIj4gPHRkPnt7c2hpcFByb2R1Y3Quc2FsZXNPcmRlclByb2R1Y3QucHJvZHVjdC5uYW1lfX08L3RkPiA8dGQ+e3tzaGlwUHJvZHVjdC5xdWFudGl0eX19PC90ZD4gPHRkPnt7c2hpcFByb2R1Y3QubmV0V2VpZ2h0fX08L3RkPiA8dGQ+e3tzaGlwUHJvZHVjdC5ncm9zc1dlaWdodH19PC90ZD4gPHRkPnt7c2hpcFByb2R1Y3QucGFja2VnZX19PC90ZD4gPC90cj4gPC90Ym9keT4gPC90YWJsZT4gPC9kaXY+IDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiAoY2xpY2spPVxcXCJwcmV2aW91c1N0YXRlKClcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWluZm9cXFwiPiA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtYXJyb3ctbGVmdFxcXCI+PC9zcGFuPiZuYnNwOzxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwiZW50aXR5LmFjdGlvbi5iYWNrXFxcIj4gQmFjazwvc3Bhbj4gPC9idXR0b24+IDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBbcm91dGVyTGlua109XFxcIlsnLycsIHsgb3V0bGV0czogeyBwb3B1cDogJ3NoaXBtZW50LW15LXN1ZmZpeC8nKyBzaGlwbWVudC5pZCArICcvZWRpdCd9IH1dXFxcIiByZXBsYWNlVXJsPVxcXCJ0cnVlXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIj4gPHNwYW4gY2xhc3M9XFxcImZhIGZhLXBlbmNpbFxcXCI+PC9zcGFuPiZuYnNwOzxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwiZW50aXR5LmFjdGlvbi5lZGl0XFxcIj4gRWRpdDwvc3Bhbj4gPC9idXR0b24+IDwvZGl2PiBcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluL3dlYmFwcC9hcHAvZW50aXRpZXMvc2hpcG1lbnQvc2hpcG1lbnQtbXktc3VmZml4LWRldGFpbC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL3NoaXBtZW50L3NoaXBtZW50LW15LXN1ZmZpeC1kZXRhaWwuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/main/webapp/app/entities/shipment/shipment-my-suffix-detail.component.html\n");

/***/ })

})