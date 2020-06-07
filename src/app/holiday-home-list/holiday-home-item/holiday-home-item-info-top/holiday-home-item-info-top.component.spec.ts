import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidayHomeItemInfoTopComponent } from './holiday-home-item-info-top.component';

describe('HolidayHomeItemInfoTopComponent', () => {
  let component: HolidayHomeItemInfoTopComponent;
  let fixture: ComponentFixture<HolidayHomeItemInfoTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HolidayHomeItemInfoTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HolidayHomeItemInfoTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
