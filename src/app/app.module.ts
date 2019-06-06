import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RinaLibModule } from 'projects/rina-lib/src/public_api';
import { HttpClientModule } from '@angular/common/http';
import { AmexioWidgetModule, AmexioEnterpriseModule } from 'amexio-ng-extensions';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RinaLibModule,
    HttpClientModule,
    AppRoutingModule,
    AmexioWidgetModule,
    AmexioEnterpriseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
