webpackHotUpdate(1,{

/***/ "./src/main/webapp/app/entities/sales-order/sales-order-my-suffix-detail.component.html":
/***/ (function(module, exports) {

eval("module.exports = \" <div *ngIf=\\\"salesOrder\\\"> <h2><span jhiTranslate=\\\"khushFinalApp.salesOrder.detail.title\\\">Sales Order</span> {{salesOrder.id}}</h2> <hr> <jhi-alert-error></jhi-alert-error> <dl class=\\\"row-md jh-entity-details\\\"> <dt><span jhiTranslate=\\\"khushFinalApp.salesOrder.orderNumber\\\">Order Number</span></dt> <dd> <span>{{salesOrder.orderNumber}}</span> </dd> <dt><span jhiTranslate=\\\"khushFinalApp.salesOrder.orderDate\\\">Order Date</span></dt> <dd> <span>{{salesOrder.orderDate | date:'medium'}}</span> </dd> <dt><span jhiTranslate=\\\"khushFinalApp.salesOrder.shipDate\\\">Ship Date</span></dt> <dd> <span>{{salesOrder.shipDate | date:'medium'}}</span> </dd> <dt><span jhiTranslate=\\\"khushFinalApp.salesOrder.status\\\">Status</span></dt> <dd> <span jhiTranslate=\\\"{{'khushFinalApp.OrderStatus.' + salesOrder.status}}\\\">{{salesOrder.status}}</span> </dd> <dt><span jhiTranslate=\\\"khushFinalApp.salesOrder.customer\\\">Customer</span></dt> <dd> <div *ngIf=\\\"salesOrder.customer\\\"> <a [routerLink]=\\\"['/company-my-suffix', salesOrder.customer?.id]\\\">{{salesOrder.customer?.companyName}}</a> </div> </dd> <dt><span jhiTranslate=\\\"khushFinalApp.salesOrder.shipment\\\">Shipment</span></dt> <dd> <div *ngIf=\\\"salesOrder.shipment\\\"> <a [routerLink]=\\\"['/shipment-my-suffix', salesOrder.shipment?.id]\\\">{{salesOrder.shipment?.id}}</a> </div> </dd> </dl> <div class=\\\"table-responsive\\\" *ngIf=\\\"salesOrders\\\"> <table class=\\\"table table-striped\\\"> <thead> <tr jhiSort [(predicate)]=\\\"predicate\\\" [(ascending)]=\\\"reverse\\\" [callback]=\\\"transition.bind(this)\\\"> <th jhiSortBy=\\\"orderNumber\\\"><span>Product</span> <span class=\\\"fa fa-sort\\\"></span></th> <th jhiSortBy=\\\"orderDate\\\"><span>Quantity</span> <span class=\\\"fa fa-sort\\\"></span></th> <th jhiSortBy=\\\"shipDate\\\"><span>Unit Price</span> <span class=\\\"fa fa-sort\\\"></span></th> <th jhiSortBy=\\\"status\\\"><span>Discount</span> <span class=\\\"fa fa-sort\\\"></span></th> <th jhiSortBy=\\\"customer.id\\\"><span>Total</span> <span class=\\\"fa fa-sort\\\"></span></th> <th jhiSortBy=\\\"shipment.id\\\"><span>Shipped Quantity</span> <span class=\\\"fa fa-sort\\\"></span></th> <th></th> </tr> </thead> <tbody> <tr *ngFor=\\\"let salesOrderProduct of salesOrderProducts ;trackBy: trackId\\\"> <td>{{salesOrderProduct.product.name}}</td> <td>{{salesOrderProduct.quantity}}</td> <td>{{salesOrderProduct.}}</td> <td jhiTranslate=\\\"{{'khushFinalApp.OrderStatus.' + salesOrder.status}}\\\">{{salesOrderProduct.status}}</td> <td> <div *ngIf=\\\"salesOrder.customer\\\"> <a [routerLink]=\\\"['../company-my-suffix', salesOrder.customer?.id ]\\\">{{salesOrderProduct.customer?.companyName}}</a> </div> </td> <td> <div *ngIf=\\\"salesOrder.shipment\\\"> <a [routerLink]=\\\"['../shipment-my-suffix', salesOrder.shipment?.id ]\\\">{{salesOrderProduct.shipment?.id}}</a> </div> </td> </tr> </tbody> </table> </div> <button type=\\\"submit\\\" (click)=\\\"previousState()\\\" class=\\\"btn btn-info\\\"> <span class=\\\"fa fa-arrow-left\\\"></span>&nbsp;<span jhiTranslate=\\\"entity.action.back\\\"> Back</span> </button> <button type=\\\"button\\\" [routerLink]=\\\"['/', { outlets: { popup: 'sales-order-my-suffix/'+ salesOrder.id + '/edit'} }]\\\" replaceUrl=\\\"true\\\" class=\\\"btn btn-primary\\\"> <span class=\\\"fa fa-pencil\\\"></span>&nbsp;<span jhiTranslate=\\\"entity.action.edit\\\"> Edit</span> </button> </div> \";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL3NhbGVzLW9yZGVyL3NhbGVzLW9yZGVyLW15LXN1ZmZpeC1kZXRhaWwuY29tcG9uZW50Lmh0bWw/OWEyYyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvSUFBb0ksZUFBZSw2TEFBNkwsd0JBQXdCLGdIQUFnSCxzQ0FBc0MsOEdBQThHLHFDQUFxQyx3SEFBd0gsa0RBQWtELEtBQUssbUJBQW1CLCtNQUErTSxrQ0FBa0Msb05BQW9OLHlCQUF5QixvMkJBQW8yQiwwQkFBMEIsZ0NBQWdDLFlBQVksNEJBQTRCLFlBQVksb0JBQW9CLDJCQUEyQixrREFBa0QsS0FBSywwQkFBMEIsd0hBQXdILHlDQUF5QyxxSUFBcUksZ0NBQWdDLDJLQUEySywrR0FBK0csV0FBVywwREFBMEQsRUFBRSw2RkFBNkYiLCJmaWxlIjoiLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL3NhbGVzLW9yZGVyL3NhbGVzLW9yZGVyLW15LXN1ZmZpeC1kZXRhaWwuY29tcG9uZW50Lmh0bWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiIDxkaXYgKm5nSWY9XFxcInNhbGVzT3JkZXJcXFwiPiA8aDI+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJraHVzaEZpbmFsQXBwLnNhbGVzT3JkZXIuZGV0YWlsLnRpdGxlXFxcIj5TYWxlcyBPcmRlcjwvc3Bhbj4ge3tzYWxlc09yZGVyLmlkfX08L2gyPiA8aHI+IDxqaGktYWxlcnQtZXJyb3I+PC9qaGktYWxlcnQtZXJyb3I+IDxkbCBjbGFzcz1cXFwicm93LW1kIGpoLWVudGl0eS1kZXRhaWxzXFxcIj4gPGR0PjxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwia2h1c2hGaW5hbEFwcC5zYWxlc09yZGVyLm9yZGVyTnVtYmVyXFxcIj5PcmRlciBOdW1iZXI8L3NwYW4+PC9kdD4gPGRkPiA8c3Bhbj57e3NhbGVzT3JkZXIub3JkZXJOdW1iZXJ9fTwvc3Bhbj4gPC9kZD4gPGR0PjxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwia2h1c2hGaW5hbEFwcC5zYWxlc09yZGVyLm9yZGVyRGF0ZVxcXCI+T3JkZXIgRGF0ZTwvc3Bhbj48L2R0PiA8ZGQ+IDxzcGFuPnt7c2FsZXNPcmRlci5vcmRlckRhdGUgfCBkYXRlOidtZWRpdW0nfX08L3NwYW4+IDwvZGQ+IDxkdD48c3BhbiBqaGlUcmFuc2xhdGU9XFxcImtodXNoRmluYWxBcHAuc2FsZXNPcmRlci5zaGlwRGF0ZVxcXCI+U2hpcCBEYXRlPC9zcGFuPjwvZHQ+IDxkZD4gPHNwYW4+e3tzYWxlc09yZGVyLnNoaXBEYXRlIHwgZGF0ZTonbWVkaXVtJ319PC9zcGFuPiA8L2RkPiA8ZHQ+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJraHVzaEZpbmFsQXBwLnNhbGVzT3JkZXIuc3RhdHVzXFxcIj5TdGF0dXM8L3NwYW4+PC9kdD4gPGRkPiA8c3BhbiBqaGlUcmFuc2xhdGU9XFxcInt7J2todXNoRmluYWxBcHAuT3JkZXJTdGF0dXMuJyArIHNhbGVzT3JkZXIuc3RhdHVzfX1cXFwiPnt7c2FsZXNPcmRlci5zdGF0dXN9fTwvc3Bhbj4gPC9kZD4gPGR0PjxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwia2h1c2hGaW5hbEFwcC5zYWxlc09yZGVyLmN1c3RvbWVyXFxcIj5DdXN0b21lcjwvc3Bhbj48L2R0PiA8ZGQ+IDxkaXYgKm5nSWY9XFxcInNhbGVzT3JkZXIuY3VzdG9tZXJcXFwiPiA8YSBbcm91dGVyTGlua109XFxcIlsnL2NvbXBhbnktbXktc3VmZml4Jywgc2FsZXNPcmRlci5jdXN0b21lcj8uaWRdXFxcIj57e3NhbGVzT3JkZXIuY3VzdG9tZXI/LmNvbXBhbnlOYW1lfX08L2E+IDwvZGl2PiA8L2RkPiA8ZHQ+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJraHVzaEZpbmFsQXBwLnNhbGVzT3JkZXIuc2hpcG1lbnRcXFwiPlNoaXBtZW50PC9zcGFuPjwvZHQ+IDxkZD4gPGRpdiAqbmdJZj1cXFwic2FsZXNPcmRlci5zaGlwbWVudFxcXCI+IDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvc2hpcG1lbnQtbXktc3VmZml4Jywgc2FsZXNPcmRlci5zaGlwbWVudD8uaWRdXFxcIj57e3NhbGVzT3JkZXIuc2hpcG1lbnQ/LmlkfX08L2E+IDwvZGl2PiA8L2RkPiA8L2RsPiA8ZGl2IGNsYXNzPVxcXCJ0YWJsZS1yZXNwb25zaXZlXFxcIiAqbmdJZj1cXFwic2FsZXNPcmRlcnNcXFwiPiA8dGFibGUgY2xhc3M9XFxcInRhYmxlIHRhYmxlLXN0cmlwZWRcXFwiPiA8dGhlYWQ+IDx0ciBqaGlTb3J0IFsocHJlZGljYXRlKV09XFxcInByZWRpY2F0ZVxcXCIgWyhhc2NlbmRpbmcpXT1cXFwicmV2ZXJzZVxcXCIgW2NhbGxiYWNrXT1cXFwidHJhbnNpdGlvbi5iaW5kKHRoaXMpXFxcIj4gPHRoIGpoaVNvcnRCeT1cXFwib3JkZXJOdW1iZXJcXFwiPjxzcGFuPlByb2R1Y3Q8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1zb3J0XFxcIj48L3NwYW4+PC90aD4gPHRoIGpoaVNvcnRCeT1cXFwib3JkZXJEYXRlXFxcIj48c3Bhbj5RdWFudGl0eTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImZhIGZhLXNvcnRcXFwiPjwvc3Bhbj48L3RoPiA8dGggamhpU29ydEJ5PVxcXCJzaGlwRGF0ZVxcXCI+PHNwYW4+VW5pdCBQcmljZTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImZhIGZhLXNvcnRcXFwiPjwvc3Bhbj48L3RoPiA8dGggamhpU29ydEJ5PVxcXCJzdGF0dXNcXFwiPjxzcGFuPkRpc2NvdW50PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtc29ydFxcXCI+PC9zcGFuPjwvdGg+IDx0aCBqaGlTb3J0Qnk9XFxcImN1c3RvbWVyLmlkXFxcIj48c3Bhbj5Ub3RhbDwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImZhIGZhLXNvcnRcXFwiPjwvc3Bhbj48L3RoPiA8dGggamhpU29ydEJ5PVxcXCJzaGlwbWVudC5pZFxcXCI+PHNwYW4+U2hpcHBlZCBRdWFudGl0eTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImZhIGZhLXNvcnRcXFwiPjwvc3Bhbj48L3RoPiA8dGg+PC90aD4gPC90cj4gPC90aGVhZD4gPHRib2R5PiA8dHIgKm5nRm9yPVxcXCJsZXQgc2FsZXNPcmRlclByb2R1Y3Qgb2Ygc2FsZXNPcmRlclByb2R1Y3RzIDt0cmFja0J5OiB0cmFja0lkXFxcIj4gPHRkPnt7c2FsZXNPcmRlclByb2R1Y3QucHJvZHVjdC5uYW1lfX08L3RkPiA8dGQ+e3tzYWxlc09yZGVyUHJvZHVjdC5xdWFudGl0eX19PC90ZD4gPHRkPnt7c2FsZXNPcmRlclByb2R1Y3QufX08L3RkPiA8dGQgamhpVHJhbnNsYXRlPVxcXCJ7eydraHVzaEZpbmFsQXBwLk9yZGVyU3RhdHVzLicgKyBzYWxlc09yZGVyLnN0YXR1c319XFxcIj57e3NhbGVzT3JkZXJQcm9kdWN0LnN0YXR1c319PC90ZD4gPHRkPiA8ZGl2ICpuZ0lmPVxcXCJzYWxlc09yZGVyLmN1c3RvbWVyXFxcIj4gPGEgW3JvdXRlckxpbmtdPVxcXCJbJy4uL2NvbXBhbnktbXktc3VmZml4Jywgc2FsZXNPcmRlci5jdXN0b21lcj8uaWQgXVxcXCI+e3tzYWxlc09yZGVyUHJvZHVjdC5jdXN0b21lcj8uY29tcGFueU5hbWV9fTwvYT4gPC9kaXY+IDwvdGQ+IDx0ZD4gPGRpdiAqbmdJZj1cXFwic2FsZXNPcmRlci5zaGlwbWVudFxcXCI+IDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycuLi9zaGlwbWVudC1teS1zdWZmaXgnLCBzYWxlc09yZGVyLnNoaXBtZW50Py5pZCBdXFxcIj57e3NhbGVzT3JkZXJQcm9kdWN0LnNoaXBtZW50Py5pZH19PC9hPiA8L2Rpdj4gPC90ZD4gPC90cj4gPC90Ym9keT4gPC90YWJsZT4gPC9kaXY+IDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiAoY2xpY2spPVxcXCJwcmV2aW91c1N0YXRlKClcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWluZm9cXFwiPiA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtYXJyb3ctbGVmdFxcXCI+PC9zcGFuPiZuYnNwOzxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwiZW50aXR5LmFjdGlvbi5iYWNrXFxcIj4gQmFjazwvc3Bhbj4gPC9idXR0b24+IDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBbcm91dGVyTGlua109XFxcIlsnLycsIHsgb3V0bGV0czogeyBwb3B1cDogJ3NhbGVzLW9yZGVyLW15LXN1ZmZpeC8nKyBzYWxlc09yZGVyLmlkICsgJy9lZGl0J30gfV1cXFwiIHJlcGxhY2VVcmw9XFxcInRydWVcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiPiA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtcGVuY2lsXFxcIj48L3NwYW4+Jm5ic3A7PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJlbnRpdHkuYWN0aW9uLmVkaXRcXFwiPiBFZGl0PC9zcGFuPiA8L2J1dHRvbj4gPC9kaXY+IFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2FwcC9lbnRpdGllcy9zYWxlcy1vcmRlci9zYWxlcy1vcmRlci1teS1zdWZmaXgtZGV0YWlsLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9tYWluL3dlYmFwcC9hcHAvZW50aXRpZXMvc2FsZXMtb3JkZXIvc2FsZXMtb3JkZXItbXktc3VmZml4LWRldGFpbC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/main/webapp/app/entities/sales-order/sales-order-my-suffix-detail.component.html\n");

/***/ })

})