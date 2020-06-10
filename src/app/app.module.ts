import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { HolidayHomeItemComponent } from './holiday-home-list/holiday-home-item/holiday-home-item.component';
import { HolidayHomeItemImageComponent } from './holiday-home-list/holiday-home-item/holiday-home-item-image/holiday-home-item-image.component';
import { HolidayHomeItemInfoTopComponent } from './holiday-home-list/holiday-home-item/holiday-home-item-info-top/holiday-home-item-info-top.component';
import { HolidayHomeItemInfoDescriptionComponent } from './holiday-home-list/holiday-home-item/holiday-home-item-info-description/holiday-home-item-info-description.component';
import { HolidayHomeItemInfoBottomComponent } from './holiday-home-list/holiday-home-item/holiday-home-item-info-bottom/holiday-home-item-info-bottom.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HolidayHomeListComponent } from './holiday-home-list/holiday-home-list.component';
import { HolidayHomeFormComponent } from './holiday-home-form/holiday-home-form.component';

@NgModule({
  declarations: [
    AppComponent,    
    HolidayHomeItemComponent, 
    HolidayHomeItemImageComponent, 
    HolidayHomeItemInfoTopComponent,
    HolidayHomeItemInfoDescriptionComponent,
    HolidayHomeItemInfoBottomComponent,
    HolidayHomeListComponent,
    HolidayHomeFormComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
