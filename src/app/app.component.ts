import { Component } from '@angular/core';
import { ServiceAvailibilityModel } from 'projects/rina-lib/src/public_api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rina';
  showWindow = false;
  serviceModel: ServiceAvailibilityModel;

  constructor() {
    this.serviceModel = new ServiceAvailibilityModel();
  }

  onClick() {
    this.showWindow = true;
  }

  scheduleAppointment() {
    console.log(this.serviceModel);
  }
}
