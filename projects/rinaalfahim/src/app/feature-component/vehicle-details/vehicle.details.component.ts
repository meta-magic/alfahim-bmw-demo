/**
 * Created by dattaram on 15/1/19.
 */
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {VehiclesInterface} from "../../models/customer.profile.model";

@Component({
  selector: 'vehicle-details',
  templateUrl:'./vehicle.details.component.html'
})

export class VehicleDetailsComponent implements OnInit {
 @Input('vehicle-details') vehicleDetails: VehiclesInterface[];
 @Output() selectVehicle: EventEmitter<any> = new EventEmitter<any>();
  constructor() {
  }

  ngOnInit() {
  }

  onCardClick(vehicleDetails: VehiclesInterface) {
    this.selectVehicle.emit(vehicleDetails);
  }
}
