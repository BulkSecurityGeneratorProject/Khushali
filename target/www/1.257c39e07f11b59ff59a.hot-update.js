webpackHotUpdate(1,{

/***/ "./src/main/webapp/app/entities/company/company-my-suffix-dialog.component.html":
/***/ (function(module, exports) {

eval("module.exports = \"<form name=\\\"editForm\\\" role=\\\"form\\\" novalidate (ngSubmit)=\\\"save()\\\" #editForm=\\\"ngForm\\\"> <div class=\\\"modal-header\\\"> <h4 class=\\\"modal-title\\\" id=\\\"myCompanyLabel\\\" jhiTranslate=\\\"khushFinalApp.company.home.createOrEditLabel\\\">Create or edit a Company</h4> <button type=\\\"button\\\" class=\\\"close\\\" data-dismiss=\\\"modal\\\" aria-hidden=\\\"true\\\" (click)=\\\"clear()\\\">&times;</button> </div> <div class=\\\"modal-body\\\"> <jhi-alert-error></jhi-alert-error> <div class=\\\"form-group\\\" [hidden]=\\\"!company.id\\\"> <label for=\\\"id\\\" jhiTranslate=\\\"global.field.id\\\">ID</label> <input type=\\\"text\\\" class=\\\"form-control\\\" id=\\\"id\\\" name=\\\"id\\\" [(ngModel)]=\\\"company.id\\\" readonly=\\\"readonly\\\"/> </div> <div class=\\\"form-group\\\"> <label class=\\\"form-control-label\\\" jhiTranslate=\\\"khushFinalApp.company.companyName\\\" for=\\\"field_companyName\\\">Company Name</label> <input type=\\\"text\\\" class=\\\"form-control\\\" name=\\\"companyName\\\" id=\\\"field_companyName\\\" [(ngModel)]=\\\"company.companyName\\\"/> </div> <div class=\\\"form-group\\\"> <label jhiTranslate=\\\"khushFinalApp.company.address\\\" for=\\\"field_address\\\">Address</label> <select class=\\\"form-control\\\" id=\\\"field_address\\\" multiple=\\\"multiple\\\" name=\\\"address\\\" [(ngModel)]=\\\"company.addresses\\\"> <option [ngValue]=\\\"getSelected(company.addresses, addressOption)\\\" *ngFor=\\\"let addressOption of addresses; trackBy: trackAddressById\\\">{{addressOption.addressLineOne }}<br>{{addressOption.addressLineTwo }}</option> </select> </div> <div class=\\\"form-group\\\"> <label jhiTranslate=\\\"khushFinalApp.company.companyCategory\\\" for=\\\"field_companyCategory\\\">Company Category</label> <select class=\\\"form-control\\\" id=\\\"field_companyCategory\\\" multiple=\\\"multiple\\\" name=\\\"companyCategory\\\" [(ngModel)]=\\\"company.companyCategories\\\"> <option [ngValue]=\\\"getSelected(company.companyCategories, companyCategoryOption)\\\" *ngFor=\\\"let companyCategoryOption of companycategories; trackBy: trackCompanyCategoryById\\\">{{companyCategoryOption.name}}</option> </select> </div> </div> <div class=\\\"modal-footer\\\"> <button type=\\\"button\\\" class=\\\"btn btn-secondary\\\" data-dismiss=\\\"modal\\\" (click)=\\\"clear()\\\"> <span class=\\\"fa fa-ban\\\"></span>&nbsp;<span jhiTranslate=\\\"entity.action.cancel\\\">Cancel</span> </button> <button type=\\\"submit\\\" [disabled]=\\\"editForm.form.invalid || isSaving\\\" class=\\\"btn btn-primary\\\"> <span class=\\\"fa fa-save\\\"></span>&nbsp;<span jhiTranslate=\\\"entity.action.save\\\">Save</span> </button> </div> </form> \";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL2NvbXBhbnkvY29tcGFueS1teS1zdWZmaXgtZGlhbG9nLmNvbXBvbmVudC5odG1sPzA0YmMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsdVlBQXVZLHU4QkFBdThCLCtCQUErQiwrQkFBK0IsTUFBTSwrQkFBK0IsNmNBQTZjLHVDQUF1Qyw0QkFBNEIsc01BQXNNLGdOQUFnTiIsImZpbGUiOiIuL3NyYy9tYWluL3dlYmFwcC9hcHAvZW50aXRpZXMvY29tcGFueS9jb21wYW55LW15LXN1ZmZpeC1kaWFsb2cuY29tcG9uZW50Lmh0bWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiPGZvcm0gbmFtZT1cXFwiZWRpdEZvcm1cXFwiIHJvbGU9XFxcImZvcm1cXFwiIG5vdmFsaWRhdGUgKG5nU3VibWl0KT1cXFwic2F2ZSgpXFxcIiAjZWRpdEZvcm09XFxcIm5nRm9ybVxcXCI+IDxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+IDxoNCBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiIGlkPVxcXCJteUNvbXBhbnlMYWJlbFxcXCIgamhpVHJhbnNsYXRlPVxcXCJraHVzaEZpbmFsQXBwLmNvbXBhbnkuaG9tZS5jcmVhdGVPckVkaXRMYWJlbFxcXCI+Q3JlYXRlIG9yIGVkaXQgYSBDb21wYW55PC9oND4gPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgZGF0YS1kaXNtaXNzPVxcXCJtb2RhbFxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiIChjbGljayk9XFxcImNsZWFyKClcXFwiPiZ0aW1lczs8L2J1dHRvbj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPiA8amhpLWFsZXJ0LWVycm9yPjwvamhpLWFsZXJ0LWVycm9yPiA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBbaGlkZGVuXT1cXFwiIWNvbXBhbnkuaWRcXFwiPiA8bGFiZWwgZm9yPVxcXCJpZFxcXCIgamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwuZmllbGQuaWRcXFwiPklEPC9sYWJlbD4gPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJpZFxcXCIgbmFtZT1cXFwiaWRcXFwiIFsobmdNb2RlbCldPVxcXCJjb21wYW55LmlkXFxcIiByZWFkb25seT1cXFwicmVhZG9ubHlcXFwiLz4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPiA8bGFiZWwgY2xhc3M9XFxcImZvcm0tY29udHJvbC1sYWJlbFxcXCIgamhpVHJhbnNsYXRlPVxcXCJraHVzaEZpbmFsQXBwLmNvbXBhbnkuY29tcGFueU5hbWVcXFwiIGZvcj1cXFwiZmllbGRfY29tcGFueU5hbWVcXFwiPkNvbXBhbnkgTmFtZTwvbGFiZWw+IDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJjb21wYW55TmFtZVxcXCIgaWQ9XFxcImZpZWxkX2NvbXBhbnlOYW1lXFxcIiBbKG5nTW9kZWwpXT1cXFwiY29tcGFueS5jb21wYW55TmFtZVxcXCIvPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+IDxsYWJlbCBqaGlUcmFuc2xhdGU9XFxcImtodXNoRmluYWxBcHAuY29tcGFueS5hZGRyZXNzXFxcIiBmb3I9XFxcImZpZWxkX2FkZHJlc3NcXFwiPkFkZHJlc3M8L2xhYmVsPiA8c2VsZWN0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJmaWVsZF9hZGRyZXNzXFxcIiBtdWx0aXBsZT1cXFwibXVsdGlwbGVcXFwiIG5hbWU9XFxcImFkZHJlc3NcXFwiIFsobmdNb2RlbCldPVxcXCJjb21wYW55LmFkZHJlc3Nlc1xcXCI+IDxvcHRpb24gW25nVmFsdWVdPVxcXCJnZXRTZWxlY3RlZChjb21wYW55LmFkZHJlc3NlcywgYWRkcmVzc09wdGlvbilcXFwiICpuZ0Zvcj1cXFwibGV0IGFkZHJlc3NPcHRpb24gb2YgYWRkcmVzc2VzOyB0cmFja0J5OiB0cmFja0FkZHJlc3NCeUlkXFxcIj57e2FkZHJlc3NPcHRpb24uYWRkcmVzc0xpbmVPbmUgfX08YnI+e3thZGRyZXNzT3B0aW9uLmFkZHJlc3NMaW5lVHdvIH19PC9vcHRpb24+IDwvc2VsZWN0PiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+IDxsYWJlbCBqaGlUcmFuc2xhdGU9XFxcImtodXNoRmluYWxBcHAuY29tcGFueS5jb21wYW55Q2F0ZWdvcnlcXFwiIGZvcj1cXFwiZmllbGRfY29tcGFueUNhdGVnb3J5XFxcIj5Db21wYW55IENhdGVnb3J5PC9sYWJlbD4gPHNlbGVjdCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwiZmllbGRfY29tcGFueUNhdGVnb3J5XFxcIiBtdWx0aXBsZT1cXFwibXVsdGlwbGVcXFwiIG5hbWU9XFxcImNvbXBhbnlDYXRlZ29yeVxcXCIgWyhuZ01vZGVsKV09XFxcImNvbXBhbnkuY29tcGFueUNhdGVnb3JpZXNcXFwiPiA8b3B0aW9uIFtuZ1ZhbHVlXT1cXFwiZ2V0U2VsZWN0ZWQoY29tcGFueS5jb21wYW55Q2F0ZWdvcmllcywgY29tcGFueUNhdGVnb3J5T3B0aW9uKVxcXCIgKm5nRm9yPVxcXCJsZXQgY29tcGFueUNhdGVnb3J5T3B0aW9uIG9mIGNvbXBhbnljYXRlZ29yaWVzOyB0cmFja0J5OiB0cmFja0NvbXBhbnlDYXRlZ29yeUJ5SWRcXFwiPnt7Y29tcGFueUNhdGVnb3J5T3B0aW9uLm5hbWV9fTwvb3B0aW9uPiA8L3NlbGVjdD4gPC9kaXY+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1mb290ZXJcXFwiPiA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tc2Vjb25kYXJ5XFxcIiBkYXRhLWRpc21pc3M9XFxcIm1vZGFsXFxcIiAoY2xpY2spPVxcXCJjbGVhcigpXFxcIj4gPHNwYW4gY2xhc3M9XFxcImZhIGZhLWJhblxcXCI+PC9zcGFuPiZuYnNwOzxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwiZW50aXR5LmFjdGlvbi5jYW5jZWxcXFwiPkNhbmNlbDwvc3Bhbj4gPC9idXR0b24+IDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBbZGlzYWJsZWRdPVxcXCJlZGl0Rm9ybS5mb3JtLmludmFsaWQgfHwgaXNTYXZpbmdcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiPiA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtc2F2ZVxcXCI+PC9zcGFuPiZuYnNwOzxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwiZW50aXR5LmFjdGlvbi5zYXZlXFxcIj5TYXZlPC9zcGFuPiA8L2J1dHRvbj4gPC9kaXY+IDwvZm9ybT4gXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL2NvbXBhbnkvY29tcGFueS1teS1zdWZmaXgtZGlhbG9nLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9tYWluL3dlYmFwcC9hcHAvZW50aXRpZXMvY29tcGFueS9jb21wYW55LW15LXN1ZmZpeC1kaWFsb2cuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/main/webapp/app/entities/company/company-my-suffix-dialog.component.html\n");

/***/ })

})