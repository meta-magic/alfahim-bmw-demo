/**
 * Created by dattaram on 18/1/19.
 */

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ServiceAvailibilityModel} from "../../model/service.availiblity.model";

@Component({
  selector: 'preferred-location',
  templateUrl: './preferred-location.component.html'
})

export class PreferredLocationComponent implements OnInit {
  @Input('service-model') serviceModel: ServiceAvailibilityModel;
  @Input('Secondary-button')  secondaryButton = 'Back';
  @Output() onNext: EventEmitter<any> = new EventEmitter<any>();
  @Output() onPrevious: EventEmitter<any> = new EventEmitter<any>();
  @Output() onClose: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
    this.serviceModel = new ServiceAvailibilityModel();
  }

  ngOnInit() {}

  scheduleAppointment() {
    if(this.serviceModel.appointmentDate){
      let todayDate =new  Date();
      this.serviceModel.serviceTimeLeft = Math.round(Math.abs((this.serviceModel.selectedSlotDate.getTime()-todayDate.getTime())/(1000*60*60*24)));
    }
    this.onNext.emit(this.serviceModel);
  }

  backClick(event: any) {
    this.onPrevious.emit(event);
  }
  onCancel(event: any){
    this.onClose.emit(event);
  }
}
