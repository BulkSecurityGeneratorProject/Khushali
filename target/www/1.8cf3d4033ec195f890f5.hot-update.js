webpackHotUpdate(1,{

/***/ "./src/main/webapp/app/entities/company/company-my-suffix-detail.component.html":
/***/ (function(module, exports) {

eval("module.exports = \" <div *ngIf=\\\"company\\\"> <h2><span jhiTranslate=\\\"khushFinalApp.company.detail.title\\\">Company</span> {{company.id}}</h2> <hr> <jhi-alert-error></jhi-alert-error> <dl class=\\\"row-md jh-entity-details\\\"> <dt><span jhiTranslate=\\\"khushFinalApp.company.companyName\\\">Company Name</span></dt> <dd> <span>{{company.companyName}}</span> </dd> <dt><span jhiTranslate=\\\"khushFinalApp.company.address\\\">Address</span></dt> <dd> <span *ngFor=\\\"let address of company.addresses; let last = last\\\"> <a [routerLink]=\\\"['/address-my-suffix', address?.id ]\\\">{{addressOption.addressLineOne }}<br>{{addressOption.addressLineTwo }}</a>{{last ? '' : ', '}} </span> </dd> <dt><span jhiTranslate=\\\"khushFinalApp.company.companyCategory\\\">Company Category</span></dt> <dd> <span *ngFor=\\\"let companyCategory of company.companyCategories; let last = last\\\"> <a [routerLink]=\\\"['/company-category-my-suffix', companyCategory?.id ]\\\">{{companyCategory.name}}</a>{{last ? '' : ', '}} </span> </dd> </dl> <button type=\\\"submit\\\" (click)=\\\"previousState()\\\" class=\\\"btn btn-info\\\"> <span class=\\\"fa fa-arrow-left\\\"></span>&nbsp;<span jhiTranslate=\\\"entity.action.back\\\"> Back</span> </button> <button type=\\\"button\\\" [routerLink]=\\\"['/', { outlets: { popup: 'company-my-suffix/'+ company.id + '/edit'} }]\\\" replaceUrl=\\\"true\\\" class=\\\"btn btn-primary\\\"> <span class=\\\"fa fa-pencil\\\"></span>&nbsp;<span jhiTranslate=\\\"entity.action.edit\\\"> Edit</span> </button> </div> \";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL2NvbXBhbnkvY29tcGFueS1teS1zdWZmaXgtZGV0YWlsLmNvbXBvbmVudC5odG1sP2Y4YWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMEhBQTBILFlBQVksMExBQTBMLHFCQUFxQixnSkFBZ0osK0VBQStFLCtCQUErQixNQUFNLCtCQUErQixNQUFNLGtCQUFrQixrTEFBa0wsZ0dBQWdHLHNCQUFzQixNQUFNLGtCQUFrQiwrSUFBK0ksK0dBQStHLFdBQVcsbURBQW1ELEVBQUUsNkZBQTZGIiwiZmlsZSI6Ii4vc3JjL21haW4vd2ViYXBwL2FwcC9lbnRpdGllcy9jb21wYW55L2NvbXBhbnktbXktc3VmZml4LWRldGFpbC5jb21wb25lbnQuaHRtbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCIgPGRpdiAqbmdJZj1cXFwiY29tcGFueVxcXCI+IDxoMj48c3BhbiBqaGlUcmFuc2xhdGU9XFxcImtodXNoRmluYWxBcHAuY29tcGFueS5kZXRhaWwudGl0bGVcXFwiPkNvbXBhbnk8L3NwYW4+IHt7Y29tcGFueS5pZH19PC9oMj4gPGhyPiA8amhpLWFsZXJ0LWVycm9yPjwvamhpLWFsZXJ0LWVycm9yPiA8ZGwgY2xhc3M9XFxcInJvdy1tZCBqaC1lbnRpdHktZGV0YWlsc1xcXCI+IDxkdD48c3BhbiBqaGlUcmFuc2xhdGU9XFxcImtodXNoRmluYWxBcHAuY29tcGFueS5jb21wYW55TmFtZVxcXCI+Q29tcGFueSBOYW1lPC9zcGFuPjwvZHQ+IDxkZD4gPHNwYW4+e3tjb21wYW55LmNvbXBhbnlOYW1lfX08L3NwYW4+IDwvZGQ+IDxkdD48c3BhbiBqaGlUcmFuc2xhdGU9XFxcImtodXNoRmluYWxBcHAuY29tcGFueS5hZGRyZXNzXFxcIj5BZGRyZXNzPC9zcGFuPjwvZHQ+IDxkZD4gPHNwYW4gKm5nRm9yPVxcXCJsZXQgYWRkcmVzcyBvZiBjb21wYW55LmFkZHJlc3NlczsgbGV0IGxhc3QgPSBsYXN0XFxcIj4gPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9hZGRyZXNzLW15LXN1ZmZpeCcsIGFkZHJlc3M/LmlkIF1cXFwiPnt7YWRkcmVzc09wdGlvbi5hZGRyZXNzTGluZU9uZSB9fTxicj57e2FkZHJlc3NPcHRpb24uYWRkcmVzc0xpbmVUd28gfX08L2E+e3tsYXN0ID8gJycgOiAnLCAnfX0gPC9zcGFuPiA8L2RkPiA8ZHQ+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJraHVzaEZpbmFsQXBwLmNvbXBhbnkuY29tcGFueUNhdGVnb3J5XFxcIj5Db21wYW55IENhdGVnb3J5PC9zcGFuPjwvZHQ+IDxkZD4gPHNwYW4gKm5nRm9yPVxcXCJsZXQgY29tcGFueUNhdGVnb3J5IG9mIGNvbXBhbnkuY29tcGFueUNhdGVnb3JpZXM7IGxldCBsYXN0ID0gbGFzdFxcXCI+IDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvY29tcGFueS1jYXRlZ29yeS1teS1zdWZmaXgnLCBjb21wYW55Q2F0ZWdvcnk/LmlkIF1cXFwiPnt7Y29tcGFueUNhdGVnb3J5Lm5hbWV9fTwvYT57e2xhc3QgPyAnJyA6ICcsICd9fSA8L3NwYW4+IDwvZGQ+IDwvZGw+IDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiAoY2xpY2spPVxcXCJwcmV2aW91c1N0YXRlKClcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWluZm9cXFwiPiA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtYXJyb3ctbGVmdFxcXCI+PC9zcGFuPiZuYnNwOzxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwiZW50aXR5LmFjdGlvbi5iYWNrXFxcIj4gQmFjazwvc3Bhbj4gPC9idXR0b24+IDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBbcm91dGVyTGlua109XFxcIlsnLycsIHsgb3V0bGV0czogeyBwb3B1cDogJ2NvbXBhbnktbXktc3VmZml4LycrIGNvbXBhbnkuaWQgKyAnL2VkaXQnfSB9XVxcXCIgcmVwbGFjZVVybD1cXFwidHJ1ZVxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCI+IDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1wZW5jaWxcXFwiPjwvc3Bhbj4mbmJzcDs8c3BhbiBqaGlUcmFuc2xhdGU9XFxcImVudGl0eS5hY3Rpb24uZWRpdFxcXCI+IEVkaXQ8L3NwYW4+IDwvYnV0dG9uPiA8L2Rpdj4gXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL2NvbXBhbnkvY29tcGFueS1teS1zdWZmaXgtZGV0YWlsLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9tYWluL3dlYmFwcC9hcHAvZW50aXRpZXMvY29tcGFueS9jb21wYW55LW15LXN1ZmZpeC1kZXRhaWwuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/main/webapp/app/entities/company/company-my-suffix-detail.component.html\n");

/***/ })

})