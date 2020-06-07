import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidayHomeItemInfoDescriptionComponent } from './holiday-home-item-info-description.component';

describe('HolidayHomeItemInfoDescriptionComponent', () => {
  let component: HolidayHomeItemInfoDescriptionComponent;
  let fixture: ComponentFixture<HolidayHomeItemInfoDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HolidayHomeItemInfoDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HolidayHomeItemInfoDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
