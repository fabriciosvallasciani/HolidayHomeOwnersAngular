import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidayHomeItemInfoBottomComponent } from './holiday-home-item-info-bottom.component';

describe('HolidayHomeItemInfoBottomComponent', () => {
  let component: HolidayHomeItemInfoBottomComponent;
  let fixture: ComponentFixture<HolidayHomeItemInfoBottomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HolidayHomeItemInfoBottomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HolidayHomeItemInfoBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
