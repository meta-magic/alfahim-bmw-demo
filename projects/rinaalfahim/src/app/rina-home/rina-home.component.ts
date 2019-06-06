/**
 * Created by dattaram on 14/1/19.
 */
import {Component, OnInit} from '@angular/core';
import {GridConfig, AmexioGridLayoutService, GridConstants} from 'amexio-ng-extensions';
import {HttpService} from '../../../../rina-lib/src/lib/services/shared/http.service';
import {PersonalDetailsService} from '../../../../rina-lib/src/lib/services/alfahim/personal.details.service';
import {CustomerProfile, VehicleInterface, Vehicles, VehiclesInterface} from '../models/customer.profile.model';
import {PropertyGridModel} from '../../../../rina-lib/src/lib/model/shared/propertygrid.model';
import {ServiceAvailibilityModel} from '../../../../rina-lib/src/lib/model/service.availiblity.model';
import {PersonalDetails} from '../../../../rina-lib/src/lib/model/shared/personal.details.model';
import {WindowToogleService} from '../../../../rina-lib/src/lib/services/alfahim/window.toggle.service';
import {DatePipe} from "@angular/common";

const msgtype: any =  {
  1: 'customer id',
  2: 'mobile no'
};
@Component({
  selector: 'rina-home',
  templateUrl: 'rina-home.component.html'
})

export class RinaHomeComponent implements OnInit {
  rinaHomeDesktopLayout: GridConfig;
  customerModel: CustomerProfile;
  serviceList: any[] = [];
  warningdialogue = false;
  warningMsg = '';
  showLoader = false;
  gaugeChartData: any[] = [];
  vehicle: Vehicles;
  vehicleDetails: VehiclesInterface[];
  customerKeyValuedata: PropertyGridModel[];
  vehicleKeyValuedata: PropertyGridModel[];
  serviceKeyValuedata: PropertyGridModel[];

  serviceHistoryData1: PropertyGridModel[];
  serviceHistoryData2: PropertyGridModel[];



  currentstep = 3;
  windowEnable = false;
  serviceModel: ServiceAvailibilityModel;

  appointmentMsg = '';


  constructor(private _httpService: HttpService,
              private datePipe: DatePipe,
              private _windowTService: WindowToogleService,
              private _personalDetailsService: PersonalDetailsService,
              private _gridlayoutService: AmexioGridLayoutService) {
    this._windowTService.appType = '2';
    this.serviceModel = new ServiceAvailibilityModel();
    this.gaugeChartData = [
      ['Label', 'Value'],
      ['CSAT', 80],
      ['AHT-SLA', 68]
    ];
    this.createLayouts();
    this._gridlayoutService.createLayout(this.rinaHomeDesktopLayout);
    this.defaultData();
  }

  ngOnInit() {
    this.getServiceList();
    this.createServiceHistoryDataStructure();
  }


  getServiceList() {
    this._httpService.fetchLocalData('assets/serviceList.json', 'get').subscribe(
      (res: any) => {
        this.serviceList = res.data;
      }
    );
  }

  createLayouts() {
    this.rinaHomeDesktopLayout = new GridConfig('rinahomepage', GridConstants.Desktop)
      .addlayout(['logoposition', 'topslot2', 'topslot3', 'topslot4', 'guages'])
      .addlayout(['rinasidemenu', 'rinasidecenter', 'rinasidecenter', 'rinasidecenter', 'rinasidesearch']);

  }

  getSearchObject(searchObject: any) {
    let response: any;
      this.showLoader = true;
      if(searchObject.searchType === 4) {
        searchObject.searchId = searchObject.searchId.replace('/', '-');
      }
      this._httpService.fetch('customer/search/' + searchObject.searchId + '/' + searchObject.searchType, 'get').subscribe(
        (res: any) => {
          response = res;
        },
        (error: any)=>{
          this.showLoader = false;
          this.warningMsg = 'Something went wrong';
          this.warningdialogue = true;
        },
        ()=>{
          if (response.success) {
            this.showLoader = false;
            this.customerModel = <CustomerProfile>response.response;
            this.vehicle = this.customerModel.vehicles[0];
            this.createPropertyStructure();
            this._personalDetailsService.setPersonalDetailsForCcm(this.customerModel);
            this.serviceList[0].disabled = false;
          } else {
            this.serviceList[0].disabled = true;
            this.showLoader = false;
            this.warningMsg = response.errorMessage;
            // this.warningMsg = 'Record not found for ' + msgtype[searchObject.searchType] + ' (' + searchObject.searchId + ')';
            this.warningdialogue = true;
            this.defaultData();
          }
        }
      );
  }

  createCustomerDetailsPropertyStructure() {
    this.customerKeyValuedata = [];
    this.customerKeyValuedata.push(new PropertyGridModel('Customer ID', this.customerModel.customerId));
    this.customerKeyValuedata.push(new PropertyGridModel('Mobile #', this.customerModel.mobile));
    this.customerKeyValuedata.push(new PropertyGridModel('Name', this.customerModel.name));
    this.customerKeyValuedata.push(new PropertyGridModel('Company', this.customerModel.companyName));
    this.customerKeyValuedata.push(new PropertyGridModel('Emirates ID', this.customerModel.uaeId));
    this.customerKeyValuedata.push(new PropertyGridModel('Email', this.customerModel.email));
    this.customerKeyValuedata.push(new PropertyGridModel('Alt Number', this.customerModel.altNumber));
    this.customerKeyValuedata.push(new PropertyGridModel('Birthday', this.customerModel.birthday));
    this.customerKeyValuedata.push(new PropertyGridModel('Anniversary', this.customerModel.anniversary));
  }

  createVehicleDetailsPropertyStructure() {
    this.vehicleKeyValuedata = [];
    this.vehicleKeyValuedata.push(new PropertyGridModel('BU', this.vehicle.bu));
    this.vehicleKeyValuedata.push(new PropertyGridModel('Vehicle', this.vehicle.vehicleDetail.modelName));
    this.vehicleKeyValuedata.push(new PropertyGridModel('Date of Purchase', this.vehicle.dateOfPurchase));
    this.vehicleKeyValuedata.push(new PropertyGridModel('Model Year', this.vehicle.vehicleDetail.modelYear));
    this.vehicleKeyValuedata.push(new PropertyGridModel('Registration No', this.vehicle.registrationNo));
    this.vehicleKeyValuedata.push(new PropertyGridModel('Customer Class', this.customerModel.customerClass));
    this.vehicleKeyValuedata.push(new PropertyGridModel('Preferred Mode of Contact', this.customerModel.preferredModeOfContact));
  }

  createServiceHistoryPropertyStructure() {
    this.serviceKeyValuedata = [];
    this.serviceKeyValuedata.push(new PropertyGridModel('Last Service', this.vehicle.lastService));
    this.serviceKeyValuedata.push(new PropertyGridModel('Next Service', this.vehicle.nextService));
    this.serviceKeyValuedata.push(new PropertyGridModel('Open SRs', this.vehicle.openSRs));
  }

  handleError() {
    this.defaultData();
  }

  getSelectedVehicle(vehicle: VehiclesInterface) {
   this.vehicle = vehicle;
   this.createVehicleDetailsPropertyStructure();
   this.createServiceHistoryPropertyStructure();
  }

  defaultData() {
    this.customerModel = new CustomerProfile();
    this.vehicle = new Vehicles();
    this.createPropertyStructure();
  }

  createPropertyStructure() {
    this.createCustomerDetailsPropertyStructure();
    this.createVehicleDetailsPropertyStructure();
    this.createServiceHistoryPropertyStructure();
  }


  serviceTypeClickHandle(event: any) {
    this.windowEnable = true;
    this.currentstep = 2;
  }

  scheduleAppointment(serviceModel: ServiceAvailibilityModel) {
    this._personalDetailsService.setPeferredLocation(serviceModel);
    this.currentstep = this._windowTService.getNextWindow(this.currentstep);
  }

  onServiceConfirmPrevious(event: any) {
    this.currentstep = this._windowTService.getPreviousWindow(this.currentstep);
  }
  onCloseClick() {
    this.currentstep = -1;
    this.windowEnable = false;
    this.serviceModel = new ServiceAvailibilityModel();
    this._personalDetailsService.resetServiceData();

  }
  onAppointmentConfirm(event: any) {
    const pModel = this._personalDetailsService.getPersonalDetails();
    const fullName =  pModel.firstName + pModel.surname;
    const serModel = this._personalDetailsService.getPeferredLocation();
    this.appointmentMsg = 'Service has been booked on ' + this.datePipe.transform(serModel.appointmentDate, 'MMM dd, yyyy') + ' at ' + serModel.selectedSlot + ' for ' + fullName + '.';
    this.currentstep = this._windowTService.getNextWindow(this.currentstep);
  }

  onPrevious() {
    this.currentstep = this._windowTService.getPreviousWindow(this.currentstep - 1);
  }

  onBeforeConfirmClickHandle(event: any) {
    this.currentstep = this._windowTService.getNextWindow(this.currentstep);
  }

  onBeforeBackHandle(event: any) {
    this.currentstep = this._windowTService.getPreviousWindow(this.currentstep);
  }
  onVehicleListHandle(personalDetails: PersonalDetails) {
    this._personalDetailsService.setPersonalDetails(personalDetails);
    this.currentstep = this._windowTService.getNextWindow(this.currentstep + 1);
  }
  vehicleListBack(event: any) {
   this.onCloseClick();
  }


  onServiceTypeNextHandle(event: any) {
    this._personalDetailsService.setExtraServiceData(event);
    this.currentstep = this._windowTService.getNextWindow(this.currentstep);
  }

  onServiceTypeBackHandle(event: any) {
    this.currentstep = this._windowTService.getPreviousWindow(this.currentstep);
  }


  createServiceHistoryDataStructure() {
    this.serviceHistoryData1 = [];
    this.serviceHistoryData2 = [];
    this.serviceHistoryData1.push(new PropertyGridModel('Last Service', '09/30/2018 @ 90208 km'));
    this.serviceHistoryData1.push(new PropertyGridModel('Next Service Due', '03/20/2019 @ 105282 km'));
    this.serviceHistoryData1.push(new PropertyGridModel('Date Last work', '09/30/2018 @ 90208 km'));
    this.serviceHistoryData1.push(new PropertyGridModel('Service Contact Number', ''));
    this.serviceHistoryData1.push(new PropertyGridModel('Timing belt mileage', '0  or 0 months'));
    this.serviceHistoryData2.push(new PropertyGridModel('Last MOT Date', ''));
    this.serviceHistoryData2.push(new PropertyGridModel('MOT Due', '12/20/2017'));
    this.serviceHistoryData2.push(new PropertyGridModel('Return Parts', ''));
    this.serviceHistoryData2.push(new PropertyGridModel('Return Parts', ''));
    this.serviceHistoryData2.push(new PropertyGridModel('Emissions', '0.0'));

  }

}
