webpackHotUpdate(1,{

/***/ "./src/main/webapp/app/entities/sales-order-product/sales-order-product-my-suffix-detail.component.html":
/***/ (function(module, exports) {

eval("module.exports = \" <div *ngIf=\\\"salesOrderProduct\\\"> <h2><span jhiTranslate=\\\"khushFinalApp.salesOrderProduct.detail.title\\\">Sales Order Product</span> {{salesOrderProduct.id}}</h2> <hr> <jhi-alert-error></jhi-alert-error> <dl class=\\\"row-md jh-entity-details\\\"> <dt><span jhiTranslate=\\\"khushFinalApp.salesOrderProduct.quantity\\\">Quantity</span></dt> <dd> <span>{{salesOrderProduct.quantity}}</span> </dd> <dt><span jhiTranslate=\\\"khushFinalApp.salesOrderProduct.unitPrice\\\">Unit Price</span></dt> <dd> <span>{{salesOrderProduct.unitPrice}}</span> </dd> <dt><span jhiTranslate=\\\"khushFinalApp.salesOrderProduct.discount\\\">Discount</span></dt> <dd> <span>{{salesOrderProduct.discount}}</span> </dd> <dt><span jhiTranslate=\\\"khushFinalApp.salesOrderProduct.total\\\">Total</span></dt> <dd> <span>{{salesOrderProduct.total}}</span> </dd> <dt><span jhiTranslate=\\\"khushFinalApp.salesOrderProduct.fulfilled\\\">Fulfilled</span></dt> <dd> <span>{{salesOrderProduct.fulfilled}}</span> </dd> <dt><span jhiTranslate=\\\"khushFinalApp.salesOrderProduct.shippedQuantity\\\">Shipped Quantity</span></dt> <dd> <span>{{salesOrderProduct.shippedQuantity}}</span> </dd> <dt><span jhiTranslate=\\\"khushFinalApp.salesOrderProduct.shipDate\\\">Ship Date</span></dt> <dd> <span>{{salesOrderProduct.shipDate | date:'medium'}}</span> </dd> <dt><span jhiTranslate=\\\"khushFinalApp.salesOrderProduct.salesOrder\\\">Sales Order</span></dt> <dd> <div *ngIf=\\\"salesOrderProduct.salesOrder\\\"> <a [routerLink]=\\\"['/sales-order-my-suffix', salesOrderProduct.salesOrder?.id]\\\">{{salesOrderProduct.salesOrder?.}}</a> </div> </dd> <dt><span jhiTranslate=\\\"khushFinalApp.salesOrderProduct.product\\\">Product</span></dt> <dd> <div *ngIf=\\\"salesOrderProduct.product\\\"> <a [routerLink]=\\\"['/product-demo-my-suffix', salesOrderProduct.product?.id]\\\">{{salesOrderProduct.product?.id}}</a> </div> </dd> </dl> <button type=\\\"submit\\\" (click)=\\\"previousState()\\\" class=\\\"btn btn-info\\\"> <span class=\\\"fa fa-arrow-left\\\"></span>&nbsp;<span jhiTranslate=\\\"entity.action.back\\\"> Back</span> </button> <button type=\\\"button\\\" [routerLink]=\\\"['/', { outlets: { popup: 'sales-order-product-my-suffix/'+ salesOrderProduct.id + '/edit'} }]\\\" replaceUrl=\\\"true\\\" class=\\\"btn btn-primary\\\"> <span class=\\\"fa fa-pencil\\\"></span>&nbsp;<span jhiTranslate=\\\"entity.action.edit\\\"> Edit</span> </button> </div> \";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL3NhbGVzLW9yZGVyLXByb2R1Y3Qvc2FsZXMtb3JkZXItcHJvZHVjdC1teS1zdWZmaXgtZGV0YWlsLmNvbXBvbmVudC5odG1sPzhlZmIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMEpBQTBKLHNCQUFzQiw2TEFBNkwsNEJBQTRCLHVIQUF1SCw2QkFBNkIsb0hBQW9ILDRCQUE0Qiw4R0FBOEcseUJBQXlCLHNIQUFzSCw2QkFBNkIsbUlBQW1JLG1DQUFtQyxxSEFBcUgsNENBQTRDLGlQQUFpUCxnQ0FBZ0MseU9BQXlPLCtCQUErQixrSkFBa0osK0dBQStHLFdBQVcseUVBQXlFLEVBQUUsNkZBQTZGIiwiZmlsZSI6Ii4vc3JjL21haW4vd2ViYXBwL2FwcC9lbnRpdGllcy9zYWxlcy1vcmRlci1wcm9kdWN0L3NhbGVzLW9yZGVyLXByb2R1Y3QtbXktc3VmZml4LWRldGFpbC5jb21wb25lbnQuaHRtbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCIgPGRpdiAqbmdJZj1cXFwic2FsZXNPcmRlclByb2R1Y3RcXFwiPiA8aDI+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJraHVzaEZpbmFsQXBwLnNhbGVzT3JkZXJQcm9kdWN0LmRldGFpbC50aXRsZVxcXCI+U2FsZXMgT3JkZXIgUHJvZHVjdDwvc3Bhbj4ge3tzYWxlc09yZGVyUHJvZHVjdC5pZH19PC9oMj4gPGhyPiA8amhpLWFsZXJ0LWVycm9yPjwvamhpLWFsZXJ0LWVycm9yPiA8ZGwgY2xhc3M9XFxcInJvdy1tZCBqaC1lbnRpdHktZGV0YWlsc1xcXCI+IDxkdD48c3BhbiBqaGlUcmFuc2xhdGU9XFxcImtodXNoRmluYWxBcHAuc2FsZXNPcmRlclByb2R1Y3QucXVhbnRpdHlcXFwiPlF1YW50aXR5PC9zcGFuPjwvZHQ+IDxkZD4gPHNwYW4+e3tzYWxlc09yZGVyUHJvZHVjdC5xdWFudGl0eX19PC9zcGFuPiA8L2RkPiA8ZHQ+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJraHVzaEZpbmFsQXBwLnNhbGVzT3JkZXJQcm9kdWN0LnVuaXRQcmljZVxcXCI+VW5pdCBQcmljZTwvc3Bhbj48L2R0PiA8ZGQ+IDxzcGFuPnt7c2FsZXNPcmRlclByb2R1Y3QudW5pdFByaWNlfX08L3NwYW4+IDwvZGQ+IDxkdD48c3BhbiBqaGlUcmFuc2xhdGU9XFxcImtodXNoRmluYWxBcHAuc2FsZXNPcmRlclByb2R1Y3QuZGlzY291bnRcXFwiPkRpc2NvdW50PC9zcGFuPjwvZHQ+IDxkZD4gPHNwYW4+e3tzYWxlc09yZGVyUHJvZHVjdC5kaXNjb3VudH19PC9zcGFuPiA8L2RkPiA8ZHQ+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJraHVzaEZpbmFsQXBwLnNhbGVzT3JkZXJQcm9kdWN0LnRvdGFsXFxcIj5Ub3RhbDwvc3Bhbj48L2R0PiA8ZGQ+IDxzcGFuPnt7c2FsZXNPcmRlclByb2R1Y3QudG90YWx9fTwvc3Bhbj4gPC9kZD4gPGR0PjxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwia2h1c2hGaW5hbEFwcC5zYWxlc09yZGVyUHJvZHVjdC5mdWxmaWxsZWRcXFwiPkZ1bGZpbGxlZDwvc3Bhbj48L2R0PiA8ZGQ+IDxzcGFuPnt7c2FsZXNPcmRlclByb2R1Y3QuZnVsZmlsbGVkfX08L3NwYW4+IDwvZGQ+IDxkdD48c3BhbiBqaGlUcmFuc2xhdGU9XFxcImtodXNoRmluYWxBcHAuc2FsZXNPcmRlclByb2R1Y3Quc2hpcHBlZFF1YW50aXR5XFxcIj5TaGlwcGVkIFF1YW50aXR5PC9zcGFuPjwvZHQ+IDxkZD4gPHNwYW4+e3tzYWxlc09yZGVyUHJvZHVjdC5zaGlwcGVkUXVhbnRpdHl9fTwvc3Bhbj4gPC9kZD4gPGR0PjxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwia2h1c2hGaW5hbEFwcC5zYWxlc09yZGVyUHJvZHVjdC5zaGlwRGF0ZVxcXCI+U2hpcCBEYXRlPC9zcGFuPjwvZHQ+IDxkZD4gPHNwYW4+e3tzYWxlc09yZGVyUHJvZHVjdC5zaGlwRGF0ZSB8IGRhdGU6J21lZGl1bSd9fTwvc3Bhbj4gPC9kZD4gPGR0PjxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwia2h1c2hGaW5hbEFwcC5zYWxlc09yZGVyUHJvZHVjdC5zYWxlc09yZGVyXFxcIj5TYWxlcyBPcmRlcjwvc3Bhbj48L2R0PiA8ZGQ+IDxkaXYgKm5nSWY9XFxcInNhbGVzT3JkZXJQcm9kdWN0LnNhbGVzT3JkZXJcXFwiPiA8YSBbcm91dGVyTGlua109XFxcIlsnL3NhbGVzLW9yZGVyLW15LXN1ZmZpeCcsIHNhbGVzT3JkZXJQcm9kdWN0LnNhbGVzT3JkZXI/LmlkXVxcXCI+e3tzYWxlc09yZGVyUHJvZHVjdC5zYWxlc09yZGVyPy59fTwvYT4gPC9kaXY+IDwvZGQ+IDxkdD48c3BhbiBqaGlUcmFuc2xhdGU9XFxcImtodXNoRmluYWxBcHAuc2FsZXNPcmRlclByb2R1Y3QucHJvZHVjdFxcXCI+UHJvZHVjdDwvc3Bhbj48L2R0PiA8ZGQ+IDxkaXYgKm5nSWY9XFxcInNhbGVzT3JkZXJQcm9kdWN0LnByb2R1Y3RcXFwiPiA8YSBbcm91dGVyTGlua109XFxcIlsnL3Byb2R1Y3QtZGVtby1teS1zdWZmaXgnLCBzYWxlc09yZGVyUHJvZHVjdC5wcm9kdWN0Py5pZF1cXFwiPnt7c2FsZXNPcmRlclByb2R1Y3QucHJvZHVjdD8uaWR9fTwvYT4gPC9kaXY+IDwvZGQ+IDwvZGw+IDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiAoY2xpY2spPVxcXCJwcmV2aW91c1N0YXRlKClcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWluZm9cXFwiPiA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtYXJyb3ctbGVmdFxcXCI+PC9zcGFuPiZuYnNwOzxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwiZW50aXR5LmFjdGlvbi5iYWNrXFxcIj4gQmFjazwvc3Bhbj4gPC9idXR0b24+IDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBbcm91dGVyTGlua109XFxcIlsnLycsIHsgb3V0bGV0czogeyBwb3B1cDogJ3NhbGVzLW9yZGVyLXByb2R1Y3QtbXktc3VmZml4LycrIHNhbGVzT3JkZXJQcm9kdWN0LmlkICsgJy9lZGl0J30gfV1cXFwiIHJlcGxhY2VVcmw9XFxcInRydWVcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiPiA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtcGVuY2lsXFxcIj48L3NwYW4+Jm5ic3A7PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJlbnRpdHkuYWN0aW9uLmVkaXRcXFwiPiBFZGl0PC9zcGFuPiA8L2J1dHRvbj4gPC9kaXY+IFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2FwcC9lbnRpdGllcy9zYWxlcy1vcmRlci1wcm9kdWN0L3NhbGVzLW9yZGVyLXByb2R1Y3QtbXktc3VmZml4LWRldGFpbC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL3NhbGVzLW9yZGVyLXByb2R1Y3Qvc2FsZXMtb3JkZXItcHJvZHVjdC1teS1zdWZmaXgtZGV0YWlsLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgY2h1bmtzID0gMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/main/webapp/app/entities/sales-order-product/sales-order-product-my-suffix-detail.component.html\n");

/***/ })

})