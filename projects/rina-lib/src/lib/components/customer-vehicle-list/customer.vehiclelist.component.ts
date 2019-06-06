/**
 * Created by dattaram on 23/1/19.
 */
import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';
import {CustomerProfile, VehiclesInterface} from "../../../../../rinaalfahim/src/app/models/customer.profile.model";
import {PropertyGridModel} from "../../model/shared/propertygrid.model";
import {PersonalDetails} from "../../model/shared/personal.details.model";
import {PersonalDetailsService} from "../../services/alfahim/personal.details.service";
import {ServiceAvailibilityModel} from "../../model/service.availiblity.model";

@Component({
   selector: 'customer-vehicle-list',
   templateUrl: './customer.vehiclelist.component.html'
})

export class CustomerVehicleListComponent implements OnInit {

  @Input('customer-profile') customerProfile: CustomerProfile;

  contentCardData: any[] = [];

  @Output() onVehicleListNext: EventEmitter<any> = new EventEmitter<any>();
  @Output() onBack: EventEmitter<any> = new EventEmitter<any>();
  @Output() onClose: EventEmitter<any> = new EventEmitter<any>();

  selectedVehicle = null;

  selected = false;


  constructor(private _personalDetailsService: PersonalDetailsService) {}

  ngOnInit() {
    if (this.customerProfile && this.customerProfile.vehicles.length > 0) {
      this.customerProfile.vehicles.forEach((vehicle: any) => {
       this.contentCardData.push(
         new ContentCardData(vehicle.vehicleDetail.image,
           vehicle.vehicleDetail.modelName,
           this.createVehiclePropertyStructure(vehicle),
           vehicle
         ));
     });
    }
  }

  selectVehicle(vehicle: ContentCardData) {
    this.contentCardData.forEach((veh: any) => {
      veh.selected = false;
    });
    vehicle.selected = true;
    if (vehicle.selected) {
      this.selectedVehicle = vehicle;
    } else {
      this.selectedVehicle = null;
    }

    this._personalDetailsService.setSelectedVehicleData(vehicle);
  }

  createVehiclePropertyStructure(vehicle: any): PropertyGridModel[] {
    const vehicleKeyValuedata = [];
    vehicleKeyValuedata.push(new PropertyGridModel('Model Year', vehicle.vehicleDetail.modelYear));
    vehicleKeyValuedata.push(new PropertyGridModel('License Plate', vehicle.registrationNo));
    return vehicleKeyValuedata;
  }

  onClickHandle() {
    this.onVehicleListNext.emit(this.createPersonalDetails());
  }

  createPersonalDetails(): PersonalDetails  {
    const personalDetails = new PersonalDetails();
          personalDetails.firstName = this.customerProfile.firstName;
          personalDetails.surname = this.customerProfile.lastName;
          personalDetails.email = this.customerProfile.email;
          personalDetails.phone = this.customerProfile.mobile;
          personalDetails.perferredContact = this.customerProfile.preferredModeOfContact;
          if (this.selectedVehicle != null) {
            personalDetails.vehicleType = this.selectedVehicle.vehicleMetadata.vehicleDetail.vehicleClass;
            personalDetails.modelYear = this.selectedVehicle.vehicleMetadata.vehicleDetail.modelYear;
            personalDetails.registrationNumber = this.selectedVehicle.vehicleMetadata.registrationNo;
          }

    return personalDetails;

  }

  onBackHandle(event: any) {
    this.onBack.emit(event);
  }


  onCancel(event: any){
    this.onClose.emit(event);
  }
}


export class ContentCardData {
  imageUrl: string;
  title: string;
  propertyData: PropertyGridModel[] = [];
  selected: boolean;
  vehicleMetadata: VehiclesInterface;

  constructor(_imageUrl: string, _title: string, _propertyData: PropertyGridModel[], _vehicleMetadata: VehiclesInterface) {
   this.imageUrl = _imageUrl;
   this.title = _title;
   this.propertyData = _propertyData;
   this.selected = false;
   this.vehicleMetadata = _vehicleMetadata;
  }


}
