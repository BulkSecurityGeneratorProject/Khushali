import { Injectable, Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';
import { ShipmentMySuffix } from './shipment-my-suffix.model';
import { ShipmentMySuffixService } from './shipment-my-suffix.service';

@Injectable()
export class ShipmentMySuffixPopupService {
    private ngbModalRef: NgbModalRef;

    constructor(
        private datePipe: DatePipe,
        private modalService: NgbModal,
        private router: Router,
        private shipmentService: ShipmentMySuffixService

    ) {
        this.ngbModalRef = null;
    }

    open(component: Component, id?: number | any): Promise<NgbModalRef> {
        return new Promise<NgbModalRef>((resolve, reject) => {
            const isOpen = this.ngbModalRef !== null;
            if (isOpen) {
                resolve(this.ngbModalRef);
            }

            if (id) {
                this.shipmentService.find(id).subscribe((shipment) => {
                    shipment.etd = this.datePipe
                        .transform(shipment.etd, 'yyyy-MM-ddTHH:mm:ss');
                    this.ngbModalRef = this.shipmentModalRef(component, shipment);
                    resolve(this.ngbModalRef);
                });
            } else {
                // setTimeout used as a workaround for getting ExpressionChangedAfterItHasBeenCheckedError
                setTimeout(() => {
                    this.ngbModalRef = this.shipmentModalRef(component, new ShipmentMySuffix());
                    resolve(this.ngbModalRef);
                }, 0);
            }
        });
    }

    shipmentModalRef(component: Component, shipment: ShipmentMySuffix): NgbModalRef {
        const modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.shipment = shipment;
        modalRef.result.then((result) => {
            this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
            this.ngbModalRef = null;
        }, (reason) => {
            this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
            this.ngbModalRef = null;
        });
        return modalRef;
    }
}
