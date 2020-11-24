import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed, tick } from '@angular/core/testing';

import { ErrorModalComponent } from './error-modal.component';
import { ErrorModalService } from '@services/error-modal/error-modal.service';

describe('ErrorModalComponent', () => {
  let component: ErrorModalComponent;
  let fixture: ComponentFixture<ErrorModalComponent>;
  let errorModalService: ErrorModalService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorModalComponent ],
      providers: [ ErrorModalService ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
    errorModalService = TestBed.inject(ErrorModalService);
  }));

  beforeEach((done) => {
    errorModalService = TestBed.inject(ErrorModalService);
    errorModalService.showErrorModal('Error thrown from service');
    fixture = TestBed.createComponent(ErrorModalComponent);
    component = fixture.componentInstance;
    component.TIMEOUT = 1;
    fixture.detectChanges();
    done();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display error message on error modal window', () => {
    expect(component.errorMessage).toEqual('Error thrown from service');
    expect(component.errorModal.nativeElement.open).toEqual(true);
  });

});
