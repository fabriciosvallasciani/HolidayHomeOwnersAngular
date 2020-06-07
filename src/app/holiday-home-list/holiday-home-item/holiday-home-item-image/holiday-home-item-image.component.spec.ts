import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidayHomeItemImageComponent } from './holiday-home-item-image.component';

describe('HolidayHomeItemImageComponent', () => {
  let component: HolidayHomeItemImageComponent;
  let fixture: ComponentFixture<HolidayHomeItemImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HolidayHomeItemImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HolidayHomeItemImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
