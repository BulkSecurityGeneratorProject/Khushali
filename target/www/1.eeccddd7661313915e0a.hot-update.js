webpackHotUpdate(1,{

/***/ "./src/main/webapp/app/entities/shipment/shipment-my-suffix.component.html":
/***/ (function(module, exports) {

eval("module.exports = \"<div> <h2> <span jhiTranslate=\\\"khushFinalApp.shipment.home.title\\\">Shipments</span> <button class=\\\"btn btn-primary float-right jh-create-entity create-shipment-my-suffix\\\" [routerLink]=\\\"['/', { outlets: { popup: ['shipment-my-suffix-new'] } }]\\\"> <span class=\\\"fa fa-plus\\\"></span> <span class=\\\"hidden-sm-down\\\" jhiTranslate=\\\"khushFinalApp.shipment.home.createLabel\\\"> Create new Shipment </span> </button> </h2> <jhi-alert></jhi-alert> <div class=\\\"row\\\"> <div class=\\\"col-sm-12\\\"> <form name=\\\"searchForm\\\" class=\\\"form-inline\\\"> <div class=\\\"input-group w-100 mt-3\\\"> <input type=\\\"text\\\" class=\\\"form-control\\\" [(ngModel)]=\\\"currentSearch\\\" id=\\\"currentSearch\\\" name=\\\"currentSearch\\\" placeholder=\\\"{{ 'khushFinalApp.shipment.home.search' | translate }}\\\"> <button class=\\\"input-group-addon btn btn-info\\\" (click)=\\\"search(currentSearch)\\\"> <span class=\\\"fa fa-search\\\"></span> </button> <button class=\\\"input-group-addon btn btn-danger\\\" (click)=\\\"clear()\\\" *ngIf=\\\"currentSearch\\\"> <span class=\\\"fa fa-trash-o\\\"></span> </button> </div> </form> </div> </div> <br/> <div class=\\\"table-responsive\\\" *ngIf=\\\"shipments\\\"> <table class=\\\"table table-striped\\\"> <thead> <tr jhiSort [(predicate)]=\\\"predicate\\\" [(ascending)]=\\\"reverse\\\" [callback]=\\\"transition.bind(this)\\\"> <th jhiSortBy=\\\"id\\\"><span jhiTranslate=\\\"global.field.id\\\">ID</span> <span class=\\\"fa fa-sort\\\"></span></th> <th jhiSortBy=\\\"shipmentNo\\\"><span jhiTranslate=\\\"khushFinalApp.shipment.shipmentNo\\\">Shipment No</span> <span class=\\\"fa fa-sort\\\"></span></th> <th jhiSortBy=\\\"bookingNo\\\"><span jhiTranslate=\\\"khushFinalApp.shipment.bookingNo\\\">Booking No</span> <span class=\\\"fa fa-sort\\\"></span></th> <th jhiSortBy=\\\"etd\\\"><span jhiTranslate=\\\"khushFinalApp.shipment.etd\\\">Etd</span> <span class=\\\"fa fa-sort\\\"></span></th> <th jhiSortBy=\\\"shipperCompany.id\\\"><span jhiTranslate=\\\"khushFinalApp.shipment.shipperCompany\\\">Shipper Company</span> <span class=\\\"fa fa-sort\\\"></span></th> <th jhiSortBy=\\\"shipShipmentStatus.id\\\"><span jhiTranslate=\\\"khushFinalApp.shipment.shipShipmentStatus\\\">Ship Shipment Status</span> <span class=\\\"fa fa-sort\\\"></span></th> <th></th> </tr> </thead> <tbody> <tr *ngFor=\\\"let shipment of shipments ;trackBy: trackId\\\"> <td><a [routerLink]=\\\"['../shipment-my-suffix', shipment.id ]\\\">{{shipment.id}}</a></td> <td>{{shipment.shipmentNo}}</td> <td>{{shipment.bookingNo}}</td> <td>{{shipment.etd | date:'medium'}}</td> <td> <div *ngIf=\\\"shipment.shipperCompany\\\"> <a [routerLink]=\\\"['../company-my-suffix', shipment.shipperCompany?.id ]\\\">{{shipment.shipperCompany?.companyName}}</a> </div> </td> <td> <div *ngIf=\\\"shipment.shipShipmentStatus\\\"> <a [routerLink]=\\\"['../ship-shipment-status-my-suffix', shipment.shipShipmentStatus?.id ]\\\">{{shipment.shipShipmentStatus?.name}}</a> </div> </td> <td class=\\\"text-right\\\"> <div class=\\\"btn-group flex-btn-group-container\\\"> <button type=\\\"submit\\\" [routerLink]=\\\"['../shipment-my-suffix', shipment.id ]\\\" class=\\\"btn btn-info btn-sm\\\"> <span class=\\\"fa fa-eye\\\"></span> <span class=\\\"d-none d-md-inline\\\" jhiTranslate=\\\"entity.action.view\\\">View</span> </button> <button type=\\\"submit\\\" [routerLink]=\\\"['/', { outlets: { popup: 'shipment-my-suffix/'+ shipment.id + '/edit'} }]\\\" replaceUrl=\\\"true\\\" class=\\\"btn btn-primary btn-sm\\\"> <span class=\\\"fa fa-pencil\\\"></span> <span class=\\\"d-none d-md-inline\\\" jhiTranslate=\\\"entity.action.edit\\\">Edit</span> </button> <button type=\\\"submit\\\" [routerLink]=\\\"['/', { outlets: { popup: 'shipment-my-suffix/'+ shipment.id + '/delete'} }]\\\" replaceUrl=\\\"true\\\" class=\\\"btn btn-danger btn-sm\\\"> <span class=\\\"fa fa-remove\\\"></span> <span class=\\\"d-none d-md-inline\\\" jhiTranslate=\\\"entity.action.delete\\\">Delete</span> </button> </div> </td> </tr> </tbody> </table> </div> <div *ngIf=\\\"shipments && shipments.length\\\"> <div class=\\\"row justify-content-center\\\"> <jhi-item-count [page]=\\\"page\\\" [total]=\\\"queryCount\\\" [itemsPerPage]=\\\"itemsPerPage\\\"></jhi-item-count> </div> <div class=\\\"row justify-content-center\\\"> <ngb-pagination [collectionSize]=\\\"totalItems\\\" [(page)]=\\\"page\\\" (pageChange)=\\\"loadPage(page)\\\"></ngb-pagination> </div> </div> </div> \";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL3NoaXBtZW50L3NoaXBtZW50LW15LXN1ZmZpeC5jb21wb25lbnQuaHRtbD8wMWE4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHNOQUFzTixXQUFXLG9DQUFvQyxFQUFFLGlkQUFpZCxvREFBb0QsbTZDQUFtNkMsc0ZBQXNGLGFBQWEsZ0JBQWdCLHFCQUFxQixZQUFZLG9CQUFvQixZQUFZLDhCQUE4QixnSUFBZ0ksc0NBQXNDLGlLQUFpSyxtQ0FBbUMsNFhBQTRYLFdBQVcscURBQXFELEVBQUUsME9BQTBPLFdBQVcsdURBQXVELEVBQUUiLCJmaWxlIjoiLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL3NoaXBtZW50L3NoaXBtZW50LW15LXN1ZmZpeC5jb21wb25lbnQuaHRtbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2PiA8aDI+IDxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwia2h1c2hGaW5hbEFwcC5zaGlwbWVudC5ob21lLnRpdGxlXFxcIj5TaGlwbWVudHM8L3NwYW4+IDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBmbG9hdC1yaWdodCBqaC1jcmVhdGUtZW50aXR5IGNyZWF0ZS1zaGlwbWVudC1teS1zdWZmaXhcXFwiIFtyb3V0ZXJMaW5rXT1cXFwiWycvJywgeyBvdXRsZXRzOiB7IHBvcHVwOiBbJ3NoaXBtZW50LW15LXN1ZmZpeC1uZXcnXSB9IH1dXFxcIj4gPHNwYW4gY2xhc3M9XFxcImZhIGZhLXBsdXNcXFwiPjwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhpZGRlbi1zbS1kb3duXFxcIiBqaGlUcmFuc2xhdGU9XFxcImtodXNoRmluYWxBcHAuc2hpcG1lbnQuaG9tZS5jcmVhdGVMYWJlbFxcXCI+IENyZWF0ZSBuZXcgU2hpcG1lbnQgPC9zcGFuPiA8L2J1dHRvbj4gPC9oMj4gPGpoaS1hbGVydD48L2poaS1hbGVydD4gPGRpdiBjbGFzcz1cXFwicm93XFxcIj4gPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyXFxcIj4gPGZvcm0gbmFtZT1cXFwic2VhcmNoRm9ybVxcXCIgY2xhc3M9XFxcImZvcm0taW5saW5lXFxcIj4gPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAgdy0xMDAgbXQtM1xcXCI+IDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBbKG5nTW9kZWwpXT1cXFwiY3VycmVudFNlYXJjaFxcXCIgaWQ9XFxcImN1cnJlbnRTZWFyY2hcXFwiIG5hbWU9XFxcImN1cnJlbnRTZWFyY2hcXFwiIHBsYWNlaG9sZGVyPVxcXCJ7eyAna2h1c2hGaW5hbEFwcC5zaGlwbWVudC5ob21lLnNlYXJjaCcgfCB0cmFuc2xhdGUgfX1cXFwiPiA8YnV0dG9uIGNsYXNzPVxcXCJpbnB1dC1ncm91cC1hZGRvbiBidG4gYnRuLWluZm9cXFwiIChjbGljayk9XFxcInNlYXJjaChjdXJyZW50U2VhcmNoKVxcXCI+IDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1zZWFyY2hcXFwiPjwvc3Bhbj4gPC9idXR0b24+IDxidXR0b24gY2xhc3M9XFxcImlucHV0LWdyb3VwLWFkZG9uIGJ0biBidG4tZGFuZ2VyXFxcIiAoY2xpY2spPVxcXCJjbGVhcigpXFxcIiAqbmdJZj1cXFwiY3VycmVudFNlYXJjaFxcXCI+IDxzcGFuIGNsYXNzPVxcXCJmYSBmYS10cmFzaC1vXFxcIj48L3NwYW4+IDwvYnV0dG9uPiA8L2Rpdj4gPC9mb3JtPiA8L2Rpdj4gPC9kaXY+IDxici8+IDxkaXYgY2xhc3M9XFxcInRhYmxlLXJlc3BvbnNpdmVcXFwiICpuZ0lmPVxcXCJzaGlwbWVudHNcXFwiPiA8dGFibGUgY2xhc3M9XFxcInRhYmxlIHRhYmxlLXN0cmlwZWRcXFwiPiA8dGhlYWQ+IDx0ciBqaGlTb3J0IFsocHJlZGljYXRlKV09XFxcInByZWRpY2F0ZVxcXCIgWyhhc2NlbmRpbmcpXT1cXFwicmV2ZXJzZVxcXCIgW2NhbGxiYWNrXT1cXFwidHJhbnNpdGlvbi5iaW5kKHRoaXMpXFxcIj4gPHRoIGpoaVNvcnRCeT1cXFwiaWRcXFwiPjxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLmZpZWxkLmlkXFxcIj5JRDwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImZhIGZhLXNvcnRcXFwiPjwvc3Bhbj48L3RoPiA8dGggamhpU29ydEJ5PVxcXCJzaGlwbWVudE5vXFxcIj48c3BhbiBqaGlUcmFuc2xhdGU9XFxcImtodXNoRmluYWxBcHAuc2hpcG1lbnQuc2hpcG1lbnROb1xcXCI+U2hpcG1lbnQgTm88L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1zb3J0XFxcIj48L3NwYW4+PC90aD4gPHRoIGpoaVNvcnRCeT1cXFwiYm9va2luZ05vXFxcIj48c3BhbiBqaGlUcmFuc2xhdGU9XFxcImtodXNoRmluYWxBcHAuc2hpcG1lbnQuYm9va2luZ05vXFxcIj5Cb29raW5nIE5vPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtc29ydFxcXCI+PC9zcGFuPjwvdGg+IDx0aCBqaGlTb3J0Qnk9XFxcImV0ZFxcXCI+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJraHVzaEZpbmFsQXBwLnNoaXBtZW50LmV0ZFxcXCI+RXRkPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtc29ydFxcXCI+PC9zcGFuPjwvdGg+IDx0aCBqaGlTb3J0Qnk9XFxcInNoaXBwZXJDb21wYW55LmlkXFxcIj48c3BhbiBqaGlUcmFuc2xhdGU9XFxcImtodXNoRmluYWxBcHAuc2hpcG1lbnQuc2hpcHBlckNvbXBhbnlcXFwiPlNoaXBwZXIgQ29tcGFueTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImZhIGZhLXNvcnRcXFwiPjwvc3Bhbj48L3RoPiA8dGggamhpU29ydEJ5PVxcXCJzaGlwU2hpcG1lbnRTdGF0dXMuaWRcXFwiPjxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwia2h1c2hGaW5hbEFwcC5zaGlwbWVudC5zaGlwU2hpcG1lbnRTdGF0dXNcXFwiPlNoaXAgU2hpcG1lbnQgU3RhdHVzPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtc29ydFxcXCI+PC9zcGFuPjwvdGg+IDx0aD48L3RoPiA8L3RyPiA8L3RoZWFkPiA8dGJvZHk+IDx0ciAqbmdGb3I9XFxcImxldCBzaGlwbWVudCBvZiBzaGlwbWVudHMgO3RyYWNrQnk6IHRyYWNrSWRcXFwiPiA8dGQ+PGEgW3JvdXRlckxpbmtdPVxcXCJbJy4uL3NoaXBtZW50LW15LXN1ZmZpeCcsIHNoaXBtZW50LmlkIF1cXFwiPnt7c2hpcG1lbnQuaWR9fTwvYT48L3RkPiA8dGQ+e3tzaGlwbWVudC5zaGlwbWVudE5vfX08L3RkPiA8dGQ+e3tzaGlwbWVudC5ib29raW5nTm99fTwvdGQ+IDx0ZD57e3NoaXBtZW50LmV0ZCB8IGRhdGU6J21lZGl1bSd9fTwvdGQ+IDx0ZD4gPGRpdiAqbmdJZj1cXFwic2hpcG1lbnQuc2hpcHBlckNvbXBhbnlcXFwiPiA8YSBbcm91dGVyTGlua109XFxcIlsnLi4vY29tcGFueS1teS1zdWZmaXgnLCBzaGlwbWVudC5zaGlwcGVyQ29tcGFueT8uaWQgXVxcXCI+e3tzaGlwbWVudC5zaGlwcGVyQ29tcGFueT8uY29tcGFueU5hbWV9fTwvYT4gPC9kaXY+IDwvdGQ+IDx0ZD4gPGRpdiAqbmdJZj1cXFwic2hpcG1lbnQuc2hpcFNoaXBtZW50U3RhdHVzXFxcIj4gPGEgW3JvdXRlckxpbmtdPVxcXCJbJy4uL3NoaXAtc2hpcG1lbnQtc3RhdHVzLW15LXN1ZmZpeCcsIHNoaXBtZW50LnNoaXBTaGlwbWVudFN0YXR1cz8uaWQgXVxcXCI+e3tzaGlwbWVudC5zaGlwU2hpcG1lbnRTdGF0dXM/Lm5hbWV9fTwvYT4gPC9kaXY+IDwvdGQ+IDx0ZCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+IDxkaXYgY2xhc3M9XFxcImJ0bi1ncm91cCBmbGV4LWJ0bi1ncm91cC1jb250YWluZXJcXFwiPiA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgW3JvdXRlckxpbmtdPVxcXCJbJy4uL3NoaXBtZW50LW15LXN1ZmZpeCcsIHNoaXBtZW50LmlkIF1cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWluZm8gYnRuLXNtXFxcIj4gPHNwYW4gY2xhc3M9XFxcImZhIGZhLWV5ZVxcXCI+PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiZC1ub25lIGQtbWQtaW5saW5lXFxcIiBqaGlUcmFuc2xhdGU9XFxcImVudGl0eS5hY3Rpb24udmlld1xcXCI+Vmlldzwvc3Bhbj4gPC9idXR0b24+IDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBbcm91dGVyTGlua109XFxcIlsnLycsIHsgb3V0bGV0czogeyBwb3B1cDogJ3NoaXBtZW50LW15LXN1ZmZpeC8nKyBzaGlwbWVudC5pZCArICcvZWRpdCd9IH1dXFxcIiByZXBsYWNlVXJsPVxcXCJ0cnVlXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1zbVxcXCI+IDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1wZW5jaWxcXFwiPjwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImQtbm9uZSBkLW1kLWlubGluZVxcXCIgamhpVHJhbnNsYXRlPVxcXCJlbnRpdHkuYWN0aW9uLmVkaXRcXFwiPkVkaXQ8L3NwYW4+IDwvYnV0dG9uPiA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgW3JvdXRlckxpbmtdPVxcXCJbJy8nLCB7IG91dGxldHM6IHsgcG9wdXA6ICdzaGlwbWVudC1teS1zdWZmaXgvJysgc2hpcG1lbnQuaWQgKyAnL2RlbGV0ZSd9IH1dXFxcIiByZXBsYWNlVXJsPVxcXCJ0cnVlXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kYW5nZXIgYnRuLXNtXFxcIj4gPHNwYW4gY2xhc3M9XFxcImZhIGZhLXJlbW92ZVxcXCI+PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiZC1ub25lIGQtbWQtaW5saW5lXFxcIiBqaGlUcmFuc2xhdGU9XFxcImVudGl0eS5hY3Rpb24uZGVsZXRlXFxcIj5EZWxldGU8L3NwYW4+IDwvYnV0dG9uPiA8L2Rpdj4gPC90ZD4gPC90cj4gPC90Ym9keT4gPC90YWJsZT4gPC9kaXY+IDxkaXYgKm5nSWY9XFxcInNoaXBtZW50cyAmJiBzaGlwbWVudHMubGVuZ3RoXFxcIj4gPGRpdiBjbGFzcz1cXFwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXJcXFwiPiA8amhpLWl0ZW0tY291bnQgW3BhZ2VdPVxcXCJwYWdlXFxcIiBbdG90YWxdPVxcXCJxdWVyeUNvdW50XFxcIiBbaXRlbXNQZXJQYWdlXT1cXFwiaXRlbXNQZXJQYWdlXFxcIj48L2poaS1pdGVtLWNvdW50PiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXJcXFwiPiA8bmdiLXBhZ2luYXRpb24gW2NvbGxlY3Rpb25TaXplXT1cXFwidG90YWxJdGVtc1xcXCIgWyhwYWdlKV09XFxcInBhZ2VcXFwiIChwYWdlQ2hhbmdlKT1cXFwibG9hZFBhZ2UocGFnZSlcXFwiPjwvbmdiLXBhZ2luYXRpb24+IDwvZGl2PiA8L2Rpdj4gPC9kaXY+IFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2FwcC9lbnRpdGllcy9zaGlwbWVudC9zaGlwbWVudC1teS1zdWZmaXguY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9lbnRpdGllcy9zaGlwbWVudC9zaGlwbWVudC1teS1zdWZmaXguY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/main/webapp/app/entities/shipment/shipment-my-suffix.component.html\n");

/***/ })

})