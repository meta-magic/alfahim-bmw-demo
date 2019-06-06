/**
 * Created by dattaram on 18/1/19.
 */

export class CustomerProfileOrigin {
  customerProfile: CustomerProfile;
  electricity: ServiceTypeStructure;
  naturalGas: ServiceTypeStructure;
  openServiceRequest = null;
  interactionHistory = [];
  rightSellData:any;
  constructor() {
    this.customerProfile = new CustomerProfile();
    this.electricity = new ServiceTypeStructure();
    this.naturalGas = new  ServiceTypeStructure();
  }
}

export class OpenServiceRequest {
  srNo = '';
  ticketType = '';
  openDate = '';
  dueDate = '';
  status = '';
  priority = '';
  agentRemarks = '';
  createdBy = null;
  createdDate = '';
  assignedFieldEngineer = '';
  scheduleVistTime = '';
  estimatedVistTime = '';
  reason = '';
}


export class CustomerProfile {
  customerId = '';
  customerNo = '';
  name = '';
  firstName = '';
  lastName = '';
  mobile = '';
  companyName = '';
  operatingStatus = '';
  addressLabel = '';
  address = new AddressModel();
  email = '';
  birthday = '';
  altNumber = '';
  anniversary = '';
  profileImageUrl = '';
  customerClass = '';
  uaeId = '';
  preferredModeOfContact = '';
  uniqueNo = '';
  type = ''
  constructor() {

  }
}


export class ServiceTypeStructure {
  currentPlan: string;
  planValidity: string;
  nmi: string;
  lastMeterReadDate: string;
  nextScheduledReadDate: string;
  unbilledAmount: string;
  dueDate: string;
  lastpaymentAmount: string;
  lastPaymentDate: string;
  mirn: string;
  dueAmountAfterDueDate: string;
}


export class ServiceMetadataStructure {
  currentPlan = {};
  billSummary = {};
  usageReports = {};
  addOnInfo =  null;
  analytics = null;
}



export class UpdateInformation {
  mobile: string;
  email: string;
  address: string;

  constructor(mob: string, email: string, addr: string) {
   this.mobile = mob;
   this.email = email;
   this.address = addr;
  }
}

export class AddressModel {
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  postCode: string;

  constructor() {
    this.addressLine1 = '';
    this.addressLine2 = '';
    this.city = '';
    this.state = '';
    this.postCode = '';
  }
}
