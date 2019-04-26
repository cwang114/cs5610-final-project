import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightUpdateComponent } from './flight-update.component';

describe('FlightUpdateComponent', () => {
  let component: FlightUpdateComponent;
  let fixture: ComponentFixture<FlightUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
