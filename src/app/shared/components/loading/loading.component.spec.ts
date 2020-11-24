import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingComponent } from './loading.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LoadingService } from '@services/loading/loading.service';

describe('LoadingComponent', () => {
  let component: LoadingComponent;
  let fixture: ComponentFixture<LoadingComponent>;
  let loadingService: LoadingService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingComponent ],
      providers: [ LoadingService ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
    loadingService = TestBed.inject(LoadingService);
  }));

  beforeEach((done) => {
    loadingService = TestBed.inject(LoadingService);
    loadingService.showLoader();
    fixture = TestBed.createComponent(LoadingComponent);
    component = fixture.componentInstance;
    component.TIMEOUT = 1;
    fixture.detectChanges();
    done();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the loading indicator', () => {
    expect(component.loadingModal.nativeElement.open).toEqual(true);
  });
});
