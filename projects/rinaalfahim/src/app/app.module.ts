import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent } from './app.component';
import {RinaHomeComponent} from './rina-home/rina-home.component';
import {AmexioDashBoardModule, AmexioWidgetModule} from 'amexio-ng-extensions';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {RinaLibModule} from '../../../rina-lib/src/lib/rina-lib.module';
import {VehicleDetailsComponent} from './feature-component/vehicle-details/vehicle.details.component';
import {CompanyLogoComponent} from './feature-component/company-logo/company.logo.component';
import {SearchBoxComponent} from './feature-component/searchbox/searchbox.component';
import {ServiceListComponent} from './feature-component/service-list/service.list.component';

const COMPONENT: any[] = [
  AppComponent, RinaHomeComponent,
  VehicleDetailsComponent, CompanyLogoComponent,
  SearchBoxComponent,
  ServiceListComponent
];

@NgModule({
  declarations: COMPONENT,
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RinaLibModule.forRoot(),
    HttpClientModule,
    FormsModule,
    AmexioWidgetModule,
    AmexioDashBoardModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
