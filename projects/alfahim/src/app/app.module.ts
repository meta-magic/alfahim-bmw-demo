import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PersonalDetailsComponent } from './personaldetails/personal.detail';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RinaLibModule } from 'projects/rina-lib/src/public_api';
import { HttpClientModule } from '@angular/common/http';
import { AmexioWidgetModule, AmexioEnterpriseModule } from 'amexio-ng-extensions';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { QuickBookingComponent } from './quick-booking/quick.booking.component';
import { OTPComponent } from './otp-component/otp.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalDetailsComponent,
    QuickBookingComponent,
    OTPComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RinaLibModule.forRoot(),

    AmexioWidgetModule,
    AmexioEnterpriseModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

