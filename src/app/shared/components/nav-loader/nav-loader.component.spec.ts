import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavLoaderComponent } from './nav-loader.component';

describe('NavLoaderComponent', () => {
  let component: NavLoaderComponent;
  let fixture: ComponentFixture<NavLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavLoaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
