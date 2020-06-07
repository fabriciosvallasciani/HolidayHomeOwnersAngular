import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidayHomeListComponent } from './holiday-home-list.component';

describe('HolidayHomeListComponent', () => {
  let component: HolidayHomeListComponent;
  let fixture: ComponentFixture<HolidayHomeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HolidayHomeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HolidayHomeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
