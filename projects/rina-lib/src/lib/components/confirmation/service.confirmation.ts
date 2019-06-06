import { PersonalDetailsService } from 'projects/rina-lib/src/lib/services/alfahim/personal.details.service';
import { Component, Input, OnInit } from '@angular/core';
import { ServiceAvailibilityModel } from 'projects/rina-lib/src/public_api';
import { LocationModel } from 'projects/rina-lib/src/lib/model/shared/location.model';
import { ServiceAssistantModel } from 'projects/rina-lib/src/lib/model/shared/serviceassistant.model';
import { Output, EventEmitter } from '@angular/core';
import { TimeModel, TimeUtil, GoogleMapOverlays } from 'amexio-ng-extensions';
import { PersonalDetails } from '../../model/shared/personal.details.model';
import { HttpService } from "../../services/shared/http.service";
import { PropertyGridModel } from "../../model/shared/propertygrid.model";
import { DatePipe } from "@angular/common";
@Component({
  selector: 'service-confirmation',
  templateUrl: './service.confirmation.html'
})
export class ServiceConfirmationComponent implements OnInit {

  @Input('service-model') serviceModel: ServiceAvailibilityModel;
  serviceLocations: LocationModel[] = [];
  timeSlots: TimeModel[] = [];
  assitantPerson: ServiceAssistantModel[] = [];
  orderConfirm = true;
  serviceStations: GoogleMapOverlays[] = [];
  personalDetails: PersonalDetails;
  extraServiceData = null;
  showLoader = false;
  serviceConfirmData: any[] = [];
  @Output() onPrevious: EventEmitter<any> = new EventEmitter<any>();
  @Output() onConfirm: EventEmitter<any> = new EventEmitter<any>();
  @Output() onClose: EventEmitter<any> = new EventEmitter<any>();

  totalTimeLeft: string;
  constructor(private personalDetailsService: PersonalDetailsService,
    private datePipe: DatePipe,
    private _httpService: HttpService) {
    this.personalDetails = new PersonalDetails();
    if (this.personalDetailsService.getPersonalDetails()) {
      this.personalDetails = this.personalDetailsService.getPersonalDetails();
    }
    this.extraServiceData = this.personalDetailsService.getExtraServiceData();
  }

  createServiceDataStructure() {
    this.serviceConfirmData = [];
    this.serviceConfirmData.push(new PropertyGridModel('Name', this.personalDetails.firstName + ' ' + this.personalDetails.surname));
    this.serviceConfirmData.push(new PropertyGridModel('Booking Date', this.datePipe.transform(this.serviceModel.selectedSlotDate, 'MMM dd, yyyy')));
    this.serviceConfirmData.push(new PropertyGridModel('Booking Time', this.serviceModel.selectedSlot.toString()));
    this.serviceConfirmData.push(new PropertyGridModel('Assitant Name', this.serviceModel.assitantPersonName));
    this.serviceConfirmData.push(new PropertyGridModel('Phone no', this.personalDetails.phone));
    this.serviceConfirmData.push(new PropertyGridModel('Email Id', this.personalDetails.email));
  }

  ngOnInit(): void {
    if (this.serviceModel) {
      this.loadData();
    }
    this.serviceStations = [];
    this.serviceStations.push(new GoogleMapOverlays(Number(this.serviceModel.locationModel.latitude),
      Number(this.serviceModel.locationModel.longitude),
      this.serviceModel.locationName + ', UAE',
      true,
      'https://testapi.amexio.org/api/v5.5/assets/images/googlemap/bmwmap.png',
      { country: 'United Arab Emirates', capital: 'Abu Dhabi' }));

    this.createServiceDataStructure();

  }
  confirmAppointment(personalDetails: PersonalDetails) {
    this.showLoader = true;
    let response: any;
    const requestBody = {
      'profileDetails': this.personalDetailsService.getPersonalDetails(),
      'orderDetails': this.personalDetailsService.getPeferredLocation()
    };
    this._httpService.post('booking/confirm', 'post', requestBody).subscribe(
      (res) => {
        response = res;
      },
      (err: any) => {
        this.showLoader = false;
      },
      () => {
        if (response.success) {
          this.showLoader = false;
          this.onConfirm.emit(personalDetails);
        } else {
          this.showLoader = false;
        }
      }
    );
  }



  onBackClick() {
    this.onPrevious.emit(this.serviceModel);
  }

  close(event: any) {
    this.orderConfirm = false;
  }

  loadData() {
    this.loadLocations();
    this.loadAssitants();
    this.loadWorkingSlots();
  }
  loadWorkingSlots() {
    this.timeSlots = new TimeUtil().workingslot1();
  }
  loadAssitants() {
    let response: any;
    this.personalDetailsService.getAssitantList(this.serviceModel.location).subscribe(
      res => {
        response = res;
      },
      // tslint:disable-next-line:no-shadowed-variable
      (error: any) => {
        console.log('Invalid url');
      },
      () => {
        this.assitantPerson = response;
      }
    );
  }
  loadLocations() {
    let response: any;
    this.personalDetailsService.getLocations().subscribe(
      res => {
        response = res;
      },
      // tslint:disable-next-line:no-shadowed-variable
      (error: any) => {
        console.log('Invalid url');
      },
      () => {
        this.serviceLocations = response;
      }
    );
  }


  onCancel(event: any) {
    this.onClose.emit(event);
  }
}
