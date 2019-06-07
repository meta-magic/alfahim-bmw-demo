import { BookingAvailableService } from './../../services/bookingavailable/service.booking.service';

import { Component, OnInit, Input } from '@angular/core';
import { GoogleMapOverlays } from 'amexio-ng-extensions';

import { ServiceBookingService } from '../../services/servicebooking/service.booking.service';
import { ServiceAvailibilityModel } from '../../model/service.availiblity.model';
import { LocationModel } from '../../model/shared/location.model';
import { CommonService } from '../../services/shared/common.service';
import { TimeModel } from 'amexio-ng-extensions';
import { ServiceAssistantModel } from '../../model/shared/serviceassistant.model';
import { AvailableSlotsModel } from 'amexio-ng-extensions';
import { DatePipe } from '@angular/common';
import { DateRangeModel } from 'projects/rina-lib/src/lib/model/shared/daterange.model';
import { WindowToogleService } from "../../services/alfahim/window.toggle.service";

@Component({
  selector: 'service-availiblity-lib',
  templateUrl: './service.availiblity-lib.component.html'
})
export class ServiceAvailiblityComponent implements OnInit {

  serviceStations: GoogleMapOverlays[];
  serviceLocations: LocationModel[];
  timeSlots: TimeModel[];
  assitantPerson: ServiceAssistantModel[];
  availableslots: AvailableSlotsModel[];

  @Input('start-time') startTime: number = 10;

  @Input('end-time') endTime: number = 12;

  @Input('service-model') serviceModel: ServiceAvailibilityModel;

  @Input('is-edit-mode') isEditModel: boolean;

  minDate: any;

  isAvailable: boolean;

  dateRangeModel: DateRangeModel;

  constructor(public _windowTService: WindowToogleService, private sbService: ServiceBookingService, private commonService: CommonService,
    private bookingAvailableService: BookingAvailableService) {
    this.serviceStations = [];
    this.assitantPerson = [];
    this.availableslots = [];
    this.serviceModel = new ServiceAvailibilityModel();
    this.minDate = new DatePipe('en-US').transform(new Date(), 'dd-MMM-yyyy');
    this.dateRangeModel = new DateRangeModel();
  }

  checkAvailiblity() {
    let response: any;
    this.availableslots = [];
    this.dateRangeModel.inDate = this.serviceModel.appointmentDate;
    this.dateRangeModel.locationid = this.serviceModel.location;
    this.dateRangeModel.type = this._windowTService.appType;
    this.bookingAvailableService.getAllAvailabelSlots(this.dateRangeModel).subscribe((resp: any) => {
      response = resp;
    },
      (error: any) => {
      },
      () => {
        if (response) {
          this.availableslots = [];
          response.forEach((element: any) => {
            this.availableslots.push(new AvailableSlotsModel(new Date(element.datetimeLong), element.data));
          });
        }
      });
  }

  ngOnInit() {
    this.initLocation();
    this.initTime();
  }


  onSlotSelection(event: any) {
    this.serviceModel.selectedSlot = event.time;
    this.serviceModel.selectedSlotDate = event.date;
  }
  onAssitantClick(event: any) {
    this.serviceModel.assitantPersonName = event.primaryDisplay;
  }

  private initLocation(): void {

    let response: any;
    this.sbService.fetchLocations().subscribe((resp: any) => {
      response = resp;
    },
      (error: any) => {
      },
      () => {
        this.serviceLocations = response;
        this.serviceStations = [];
        this.serviceLocations.forEach((element: any) => {
          if (element) {
            this.serviceStations.push(new GoogleMapOverlays(Number(element.latitude), Number(element.longitude),
              element.locationName + ', UAE', true,
              'assets/images/googlemap/bmwmap.png',
              element));
          }
        });
      });

  }

  private initSA(id: string): void {
    let response: any;
    const pathVariable = id + '/' + this._windowTService.appType;
    this.sbService.fetchSABasedOnLocation(pathVariable).subscribe((resp: any) => {
      response = resp;
    },
      (error: any) => {
      },
      () => {
        this.assitantPerson = response;
      });
  }

  private initTime(): void {
    this.timeSlots = this.commonService.workingSlot1();
    if (this.timeSlots && this.timeSlots.length > 0) {
      this.endTime = this.timeSlots.pop().timeId;
    }
  }

  setTime(event: any) {

  }

  onMarkerClick(serviceStation: any) {
    if (serviceStation.primaryKey && this.serviceModel.location !== serviceStation.primaryKey) {
      this.serviceModel.location = serviceStation.primaryKey;
      this.serviceModel.locationName = serviceStation.primaryDisplay;
      this.serviceModel.assitantPersonId = '';
      this.availableslots = [];
      if (serviceStation) {
        this.serviceModel.locationModel.latitude = serviceStation.latitude;
        this.serviceModel.locationModel.longitude = serviceStation.longitude;
      }
      this.initSA(this.serviceModel.location);
    }

  }

  onLocationClick(data: any) {
    if (this.serviceModel.locationName !== data.primaryDisplay) {
      this.serviceModel.assitantPersonId = '';
      this.availableslots = [];
      this.initSA(data.primaryKey);
      this.serviceModel.locationName = data.primaryDisplay;
      this.serviceModel.locationModel.latitude = data.latitude;
      this.serviceModel.locationModel.longitude = data.longitude;
    }
  }
}
