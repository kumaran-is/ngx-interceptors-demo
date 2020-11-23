import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CountryTableComponent } from '@components/country-table/country-table.component';


describe('CountryTableComponent', () => {
  let component: CountryTableComponent;
  let fixture: ComponentFixture<CountryTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
