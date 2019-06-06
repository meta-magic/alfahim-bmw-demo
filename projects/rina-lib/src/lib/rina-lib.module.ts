import {ModuleWithProviders, NgModule} from '@angular/core';
import { RINA_COMPONENTS } from './rina-lib.components';
import { HttpService } from './services/shared/http.service';
import { FormsModule } from '@angular/forms';
import { AmexioWidgetModule, AmexioEnterpriseModule } from 'amexio-ng-extensions';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceBookingService } from './services/servicebooking/service.booking.service';
import { CommonService } from './services/shared/common.service';
import { ReactiveFormsModule } from '@angular/forms';
import {BookingAvailableService} from "./services/bookingavailable/service.booking.service";
import {PersonalDetailsService} from "./services/alfahim/personal.details.service";
import {WindowToogleService} from "./services/alfahim/window.toggle.service";
import {DatePipe} from "@angular/common";
import {NotificationAndLoaderService} from "./services/shared/notification-loader.service";

@NgModule({
  declarations: RINA_COMPONENTS,
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AmexioWidgetModule,
    AmexioEnterpriseModule,
    ReactiveFormsModule
  ],
  exports: RINA_COMPONENTS
})
export class RinaLibModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: RinaLibModule,
      providers: [HttpService,
        ServiceBookingService,
        BookingAvailableService,
        PersonalDetailsService,
        WindowToogleService,
        CommonService,
        NotificationAndLoaderService,
        DatePipe
      ],
    };
  }
}
