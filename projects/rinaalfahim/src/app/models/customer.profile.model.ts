/**
 * Created by dattaram on 18/1/19.
 */

export class CustomerProfile {
  customerId = '';
  customerNo = '';
  name = '';
  firstName = '';
  lastName = '';
  mobile = '';
  companyName = '';
  operatingStatus = '';
  email = '';
  birthday = '';
  altNumber = '';
  anniversary = '';
  profileImageUrl = '';
  customerClass = '';
  uaeId = '';
  preferredModeOfContact = '';
  vehicles: VehiclesInterface[];
  constructor() {
  }
}



export class Vehicle implements VehicleInterface {
  vehicleId = '';
  modelName = '';
  image = '';
  modelYear = '';
  engine = '';
  horsepower = '';
  torque = '';
  acceleration = '';
  topSpeed = '';
  vehicleClass = '';
}


export class Vehicles implements VehiclesInterface {
  vehicleId = '';
  registrationNo = '';
  dateOfPurchase = '';
  bu = '';
  lastService = '';
  nextService = '';
  openSRs = '';
  vehicleDetail: VehicleInterface;
  constructor() {
    this.vehicleDetail = new Vehicle();
  }

}


export interface VehiclesInterface {
  vehicleId: string;
  registrationNo: string;
  dateOfPurchase: string;
  bu: string;
  lastService: string;
  nextService: string;
  openSRs: string;
  vehicleDetail: VehicleInterface;
}


export interface VehicleInterface {
  vehicleId: string;
  modelName: string;
  image: string;
  modelYear: string;
  engine: string;
  horsepower: string;
  torque: string;
  acceleration: string;
  topSpeed: string;
  vehicleClass: string;
}

