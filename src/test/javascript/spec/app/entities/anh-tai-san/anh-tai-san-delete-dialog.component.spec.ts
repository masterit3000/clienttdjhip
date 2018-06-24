/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';
import { JhiEventManager } from 'ng-jhipster';

import { ClienttdjhipTestModule } from '../../../test.module';
import { AnhTaiSanDeleteDialogComponent } from '../../../../../../main/webapp/app/entities/anh-tai-san/anh-tai-san-delete-dialog.component';
import { AnhTaiSanService } from '../../../../../../main/webapp/app/entities/anh-tai-san/anh-tai-san.service';

describe('Component Tests', () => {

    describe('AnhTaiSan Management Delete Component', () => {
        let comp: AnhTaiSanDeleteDialogComponent;
        let fixture: ComponentFixture<AnhTaiSanDeleteDialogComponent>;
        let service: AnhTaiSanService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [ClienttdjhipTestModule],
                declarations: [AnhTaiSanDeleteDialogComponent],
                providers: [
                    AnhTaiSanService
                ]
            })
            .overrideTemplate(AnhTaiSanDeleteDialogComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(AnhTaiSanDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(AnhTaiSanService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('confirmDelete', () => {
            it('Should call delete service on confirmDelete',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        spyOn(service, 'delete').and.returnValue(Observable.of({}));

                        // WHEN
                        comp.confirmDelete(123);
                        tick();

                        // THEN
                        expect(service.delete).toHaveBeenCalledWith(123);
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
                    })
                )
            );
        });
    });

});
