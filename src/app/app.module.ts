import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HolidayHomeItemComponent } from './holiday-home-list/holiday-home-item/holiday-home-item.component';
import { HolidayHomeItemImageComponent } from './holiday-home-list/holiday-home-item/holiday-home-item-image/holiday-home-item-image.component';
import { HolidayHomeItemInfoTopComponent } from './holiday-home-list/holiday-home-item/holiday-home-item-info-top/holiday-home-item-info-top.component';
import { HolidayHomeItemInfoDescriptionComponent } from './holiday-home-list/holiday-home-item/holiday-home-item-info-description/holiday-home-item-info-description.component';
import { HolidayHomeItemInfoBottomComponent } from './holiday-home-list/holiday-home-item/holiday-home-item-info-bottom/holiday-home-item-info-bottom.component';
import { HolidayHomeListComponent } from './holiday-home-list/holiday-home-list.component';
import { HolidayHomeFormComponent } from './holiday-home-form/holiday-home-form.component';
import { HolidayHomesService } from './services/holiday-homes.service';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { OwnersService } from './services/owners.service';
import { AuthService } from './services/auth.service';
import { NotificationService } from './services/notification.service';
import { BaseHttpService } from './services/base-http.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { ModalConfirmComponent } from './modal-confirm/modal-confirm.component';

const routes: Routes = [   
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'owners/:ownerId/holidayhomes', component: HolidayHomeListComponent },
  { path: 'login', component: LoginComponent },   
  { path: 'holidayhome', component: HolidayHomeFormComponent },
  { path: 'owners/:ownerId/holidayhomes/:homeId', component: HolidayHomeFormComponent },
  { path: '**', component: NotFoundComponent } 
]

@NgModule({
  declarations: [
    AppComponent,    
    HolidayHomeItemComponent, 
    HolidayHomeItemImageComponent, 
    HolidayHomeItemInfoTopComponent,
    HolidayHomeItemInfoDescriptionComponent,
    HolidayHomeItemInfoBottomComponent,
    HolidayHomeListComponent,
    HolidayHomeFormComponent,
    WelcomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    NotFoundComponent,
    ModalConfirmComponent
  ],
  imports: [
    NgbModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      closeButton: true
   })
  ],
  providers: [BaseHttpService, NotificationService, HolidayHomesService, OwnersService, AuthService, NgbActiveModal],
  bootstrap: [AppComponent]
})
export class AppModule { }
