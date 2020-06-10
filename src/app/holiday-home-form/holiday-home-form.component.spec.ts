import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidayHomeFormComponent } from './holiday-home-form.component';

describe('HolidayHomeFormComponent', () => {
  let component: HolidayHomeFormComponent;
  let fixture: ComponentFixture<HolidayHomeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HolidayHomeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HolidayHomeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
