/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { JhiDateUtils, JhiDataUtils, JhiEventManager } from 'ng-jhipster';
import { KhushFinalTestModule } from '../../../test.module';
import { MockActivatedRoute } from '../../../helpers/mock-route.service';
import { ProductCategoryMySuffixDetailComponent } from '../../../../../../main/webapp/app/entities/product-category/product-category-my-suffix-detail.component';
import { ProductCategoryMySuffixService } from '../../../../../../main/webapp/app/entities/product-category/product-category-my-suffix.service';
import { ProductCategoryMySuffix } from '../../../../../../main/webapp/app/entities/product-category/product-category-my-suffix.model';

describe('Component Tests', () => {

    describe('ProductCategoryMySuffix Management Detail Component', () => {
        let comp: ProductCategoryMySuffixDetailComponent;
        let fixture: ComponentFixture<ProductCategoryMySuffixDetailComponent>;
        let service: ProductCategoryMySuffixService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [KhushFinalTestModule],
                declarations: [ProductCategoryMySuffixDetailComponent],
                providers: [
                    JhiDateUtils,
                    JhiDataUtils,
                    DatePipe,
                    {
                        provide: ActivatedRoute,
                        useValue: new MockActivatedRoute({id: 123})
                    },
                    ProductCategoryMySuffixService,
                    JhiEventManager
                ]
            }).overrideTemplate(ProductCategoryMySuffixDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(ProductCategoryMySuffixDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ProductCategoryMySuffixService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN

            spyOn(service, 'find').and.returnValue(Observable.of(new ProductCategoryMySuffix(10)));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.productCategory).toEqual(jasmine.objectContaining({id: 10}));
            });
        });
    });

});
