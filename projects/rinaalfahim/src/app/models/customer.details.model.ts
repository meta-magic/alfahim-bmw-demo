/**
 * Created by dattaram on 14/1/19.
 */
/*export class CustomerDetailsInterface {
  customerId: number;
  mobile: number ;
  name: string;
  companyName: string;
  operatingStatus: string;
  email: string;
  altNumber: number;
  birthday: string;
  anniversary: string;
  profileImageUrl: string;
  callAttempt: number;
  bu: string;
  vehicle: string ;
  dateOfPurchase: string ;
  modelYear: string ;
  registrationNo: string ;
  customerClass: string;
  preferredModeOfContact: string ;
  lastService: string;
  nextService: string;
  openSRs: string;
  vehicleDetails: any[];

}*/





import {VehicleDetails} from './vehicel.details.model';
export class CustomerModel {
  customerId = null;
  mobile = null;
  name = '';
  companyName =  '';
  operatingStatus = '';
  email = '';
  altNumber = null;
  birthday = '';
  anniversary = '';
  profileImageUrl = '';
  callAttempt = null;
  bu = '' ;
  vehicle = '' ;
  dateOfPurchase = '' ;
  modelYear = '' ;
  registrationNo = '' ;
  customerClass = '';
  preferredModeOfContact = '' ;
  lastService = '';
  nextService = '';
  openSRs = '';
  vehicleDetails: VehicleDetails[] = [];
  constructor() {

  }
 /* getCustomerModelObject(customerDetails: CustomerDetailsInterface): CustomerModel {
    const customerModel = new CustomerModel();
    customerModel.customerId = customerDetails.customerId;
    customerModel.mobile = customerDetails.mobile;
    customerModel.name = customerDetails.name;
    customerModel.companyName = customerDetails.companyName;
    customerModel.operatingStatus = customerDetails.operatingStatus;
    customerModel.email = customerDetails.email;
    customerModel.altNumber = customerDetails.altNumber;
    customerModel.birthday = customerDetails.birthday;
    customerModel.anniversary = customerDetails.anniversary;
    customerModel.profileImageUrl = customerDetails.profileImageUrl;
    customerModel.callAttempt = customerDetails.callAttempt;
    customerModel.bu = customerDetails.bu;
    customerModel.vehicle = customerDetails.vehicle;
    customerModel.dateOfPurchase = customerDetails.dateOfPurchase;
    customerModel.modelYear = customerDetails.modelYear;
    customerModel.registrationNo = customerDetails.registrationNo;
    customerModel.customerClass = customerDetails.customerClass;
    customerModel.preferredModeOfContact = customerDetails.preferredModeOfContact;
    customerModel.lastService = customerDetails.lastService;
    customerModel.nextService = customerDetails.nextService;
    customerModel.openSRs = customerDetails.openSRs;
    customerModel.vehicleDetails = customerDetails.vehicleDetails;
    return customerModel;
  }*/
}

