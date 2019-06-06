import { PersonalDetailsService } from 'projects/rina-lib/src/lib/services/alfahim/personal.details.service';
import { Component } from '@angular/core';
import { ServiceAvailibilityModel } from 'projects/rina-lib/src/public_api';
import { WindowToogleService } from 'projects/rina-lib/src/lib/services/alfahim/window.toggle.service';
import { PersonalDetails } from 'projects/rina-lib/src/lib/model/shared/personal.details.model';
import { CustomerProfile } from '../../../rinaalfahim/src/app/models/customer.profile.model';
import { DatePipe } from '@angular/common';
import { NotificationAndLoaderService } from '../../../rina-lib/src/lib/services/shared/notification-loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  serviceModel: ServiceAvailibilityModel;
  currentstep: number;
  windowEnable: boolean;
  personalDetails: PersonalDetails;
  customerProfile: CustomerProfile;
  appointmentMsg: string;


  otpWindowRefNumber: number;
  otpType = 1;
  otpRef: string;
  emailId: string;
  constructor(private _windowTService: WindowToogleService,
    private datePipe: DatePipe,
    public NaLService: NotificationAndLoaderService,
    private _personalDetailsService: PersonalDetailsService) {
    this.serviceModel = new ServiceAvailibilityModel();
    this.personalDetails = new PersonalDetails();
    this._windowTService.appType = '1';
  }

  onClick() {
    this.windowEnable = true;
    this.currentstep = this._windowTService.getNextWindow(0);
  }

  proceedToPreferredLocation(personalDetails: PersonalDetails) {
    this.otpType = 2;
    this.otpRef = this._personalDetailsService.getPersonalDetails().email;
    this.emailId = this._personalDetailsService.getPersonalDetails().email;
    this.otpWindowRefNumber = this.currentstep;
    this.currentstep = this._windowTService.getNextWindow(10);
  }

  scheduleAppointment(serviceModel: ServiceAvailibilityModel) {
    this._personalDetailsService.setPeferredLocation(serviceModel);
    this.currentstep = this._windowTService.getNextWindow(this.currentstep);
  }

  onPrevious(event: any) {
    this.personalDetails = this._personalDetailsService.getPersonalDetails();
    if (this._windowTService.isNewUserFlow) {
      this.currentstep = this._windowTService.getPreviousWindow(4);
    } else {
      this.currentstep = this._windowTService.getPreviousWindow(3);
    }
  }

  onServiceConfirmPrevious(event: any) {
    this.serviceModel = event;
    this.currentstep = this._windowTService.getPreviousWindow(this.currentstep);
  }
  onCloseClick(event: any) {
    this.currentstep = this._windowTService.getNextWindow(-2);
    this.windowEnable = false;
    this.serviceModel = new ServiceAvailibilityModel();
    this.personalDetails = new PersonalDetails();
    this._personalDetailsService.resetServiceData();
  }
  onAppointmentConfirm(event: any) {
    const serModel = this._personalDetailsService.getPeferredLocation();
    if (serModel) {
      this.appointmentMsg = 'Your service has been booked on ' + this.datePipe.transform(serModel.appointmentDate, 'MMM dd, yyyy')
        + ' at ' + serModel.selectedSlot + '.';
    }
    this.currentstep = this._windowTService.getNextWindow(this.currentstep);
  }

  quickBookingHandle(event: CustomerProfile) {
    this.otpType = 1;
    this.customerProfile = event;
    this.otpRef = this.customerProfile.customerId;
    this.emailId = this.customerProfile.email;
    this.otpWindowRefNumber = this.currentstep;
    this.currentstep = 11;
  }

  onVehicleListHandle(personalDetails: PersonalDetails) {
    this._personalDetailsService.setPersonalDetails(personalDetails);
    this.currentstep = this._windowTService.getNextWindow(this.currentstep + 1);
  }
  vehicleListBack(event: any) {
    this.currentstep = this._windowTService.getPreviousWindow(this.currentstep);
  }

  onBeforeConfirmClickHandle(event: any) {
    this.currentstep = this._windowTService.getNextWindow(this.currentstep);
  }

  onBeforeBackHandle(event: any) {
    this.currentstep = this._windowTService.getPreviousWindow(this.currentstep);
  }
  bookingFlow(event: any) {
    this.currentstep = this._windowTService.getPreviousWindow(2);
  }

  onOtpNextHandle(event: any) {
    this.currentstep = this._windowTService.getNextWindow(event);
  }

  onOtpBackHandle(event: any) {
    this.currentstep = this._windowTService.getPreviousWindow(event + 1);
  }

  onServiceTypeNextHandle(event: any) {
    this._personalDetailsService.setExtraServiceData(event);
    this.currentstep = this._windowTService.getNextWindow(this.currentstep);
  }

  onServiceTypeBackHandle(event: any) {
    this.currentstep = this._windowTService.getPreviousWindow(this.currentstep);
  }

  onNewCustomerHandle() {
    this._windowTService.isNewUserFlow = true;
    this.currentstep = this._windowTService.getNextWindow(2);
  }

}



