import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SERVICE_URL } from '../service.constant';
import { PersonalDetails } from 'projects/rina-lib/src/lib/model/shared/personal.details.model';
import { ServiceAvailibilityModel } from 'projects/rina-lib/src/public_api';
import {CustomerModel} from '../../../../../rinaalfahim/src/app/models/customer.details.model';
import {CustomerProfile} from "../../../../../rinaalfahim/src/app/models/customer.profile.model";
@Injectable()
export class PersonalDetailsService {
  personalDetails: PersonalDetails;
  serviceAvailibilityModel: ServiceAvailibilityModel;
  selectedVehicleData: any;
  vehicleName = '';
  vehicleRgNo = '';
  private extraServiceData = null;
  constructor(private httpClient: HttpClient) {
  }
   public getTitles(): any {
   return this.httpClient.get(SERVICE_URL.BASE_APP_URL + 'title/');
   }
   public getVehicles(): any {
    return this.httpClient.get(SERVICE_URL.BASE_APP_URL + 'vehicle/');
   }
   public getVehicleModels(): any {
    return this.httpClient.get(SERVICE_URL.BASE_APP_URL + 'vehiclemodel/');
   }
   public getLocations(): any {
    return this.httpClient.get(SERVICE_URL.BASE_APP_URL + 'map/');
   }
   public getAssitantList(id: string): any {
    return this.httpClient.get(SERVICE_URL.BASE_APP_URL + 'map/' + id);
   }
   public getPersonalDetails(): PersonalDetails {
    return this.personalDetails;
   }
   public setPersonalDetails(personalDetails: PersonalDetails) {
     this.personalDetails = personalDetails;
     this.vehicleName = this.personalDetails.vehicleType;
     this.vehicleRgNo = this.personalDetails.registrationNumber;
   }
   public setPeferredLocation(serviceAvailibilityModel: ServiceAvailibilityModel) {
    this.serviceAvailibilityModel = serviceAvailibilityModel;
     this.serviceAvailibilityModel.vehiclePlate = this.vehicleRgNo;
     this.serviceAvailibilityModel.vehicleName = this.vehicleName;
   }
   public getPeferredLocation(): ServiceAvailibilityModel {
   return this.serviceAvailibilityModel;
   }

   setPersonalDetailsForCcm (personalDetails: CustomerProfile) {
     this.convertIntoPersonalModel(personalDetails);
   }

   convertIntoPersonalModel(personalDetails: CustomerProfile) {
    this.personalDetails = new PersonalDetails();
    this.personalDetails.firstName = personalDetails.name;
    this.personalDetails.email = personalDetails.email;
    this.personalDetails.phone = personalDetails.mobile;
   }

   setExtraServiceData(data: any) {
    this.extraServiceData = data;
   }
   getExtraServiceData(): any {
    return this.extraServiceData;
   }

  setSelectedVehicleData(data: any) {
   this.selectedVehicleData = data;
    this.vehicleRgNo = this.selectedVehicleData.vehicleMetadata.registrationNo;
    this.vehicleName = this.selectedVehicleData.title;
  }

  resetServiceData() {
    this.personalDetails = null;
    this.serviceAvailibilityModel = null;
    this.selectedVehicleData = null;
    this.vehicleName = '';
    this.vehicleRgNo = '';
    this.extraServiceData = null;
  }

}
