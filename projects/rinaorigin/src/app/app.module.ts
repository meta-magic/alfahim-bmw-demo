import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent } from './app.component';
import {RinaHomeComponent} from './rina-home/rina-home.component';
import {AmexioDashBoardModule, AmexioWidgetModule} from 'amexio-ng-extensions';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {RinaLibModule} from '../../../rina-lib/src/lib/rina-lib.module';
import {CompanyLogoComponent} from './feature-component/company-logo/company.logo.component';
import {SearchBoxComponent} from './feature-component/searchbox/searchbox.component';
import {ServiceListComponent} from './feature-component/service-list/service.list.component';
import {CurrentPlanComponent} from "./feature-component/tab-component/current-plan/current-plan.component";
import {ElectricityBillComponent} from "./feature-component/tab-component/electricity-bill/electricity-bill.component";
import {InteractionHistoryComponent} from "./feature-component/tab-component/interaction-history/interaction-history.component";
import {NaturalGasBillComponent} from "./feature-component/tab-component/natural-gas-bill/natural-gas-bill.component";
import {UsageReportComponent} from "./feature-component/tab-component/usage-report/usage-report.component";
import {AmexioChartD3Module} from "amexio-chart-d3";
import {OpenServiceRequestComponent} from "./feature-component/openService-request/openservice.request.component";
import {EnergyPlanComponent} from "./feature-component/energy-plan/energy.plan.component";
import { RightSellComponent } from "projects/rinaorigin/src/app/feature-component/tab-component/right-sell/right-sell.component";
import {UpdateInfoComponent} from "./feature-component/update-information/update.info.component";
import {ChangeAddressComponent} from "./feature-component/change.address/change.address.component";

const COMPONENT: any[] = [
  AppComponent, RinaHomeComponent,
  CompanyLogoComponent,
  SearchBoxComponent,
  ServiceListComponent,

  CurrentPlanComponent,
  ElectricityBillComponent,
  InteractionHistoryComponent,
  NaturalGasBillComponent,
  UsageReportComponent,
  RightSellComponent,
  OpenServiceRequestComponent,
  EnergyPlanComponent,
  UpdateInfoComponent,
  ChangeAddressComponent
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RinaLibModule.forRoot(),
    HttpClientModule,
    FormsModule,
    AmexioWidgetModule,
    AmexioChartD3Module,
    AmexioDashBoardModule,
    ReactiveFormsModule
  ],
  declarations: COMPONENT,
  entryComponents: [
    CurrentPlanComponent,
    InteractionHistoryComponent,
    NaturalGasBillComponent,
    UsageReportComponent,
    RightSellComponent,
    ElectricityBillComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
