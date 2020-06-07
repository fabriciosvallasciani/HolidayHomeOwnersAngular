import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidayHomeItemComponent } from './holiday-home-item.component';

describe('HolidayHomeItemComponent', () => {
  let component: HolidayHomeItemComponent;
  let fixture: ComponentFixture<HolidayHomeItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HolidayHomeItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HolidayHomeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
