/**
 * Created by dattaram on 14/1/19.
 */
import { Component, OnInit, ViewChild } from '@angular/core';
import { GridConfig, AmexioGridLayoutService, GridConstants } from 'amexio-ng-extensions';
import {
  AddressModel, CustomerProfile, CustomerProfileOrigin, ServiceMetadataStructure, UpdateInformation
} from '../models/customer.profile.model';
import { PropertyGridModel } from '../../../../rina-lib/src/lib/model/shared/propertygrid.model';
import { tab_map } from '../constants/tab-map.constant';
import { HttpClient } from '@angular/common/http';
import { RadioTitleInterface } from '../../../../rina-lib/src/lib/components/property-grid/propertygrid.component';
import { SERVICE_URL } from '../constants/service.url.constant';

const BADGE = {
  '1': 'GOLD',
  '2': 'PLATINUM',
  '3': 'SILVER'
};

@Component({
  selector: 'rina-home',
  templateUrl: 'rina-home.component.html'
})

export class RinaHomeComponent implements OnInit {

  @ViewChild('tab') tabRef: any;

  windowEnable = false;
  rinaHomeDesktopLayout: GridConfig;
  customerOrigin: CustomerProfileOrigin;
  serviceList: any[] = [];
  warningdialogue = false;
  warningMsg = '';
  showLoader = false;
  gaugeChartData: any[] = [];
  customerKeyValuedata: PropertyGridModel[];
  eleSummaryKeyValueData: PropertyGridModel[];
  ngasSummaryKeyValueData: PropertyGridModel[];

  serviceHistoryData1: PropertyGridModel[];
  serviceHistoryData2: PropertyGridModel[];

  electricityTitleData: RadioTitleInterface;
  gasTitleData: RadioTitleInterface;

  serviceMetadataStructure: ServiceMetadataStructure;

  selectedRadioGroup: RadioTitleInterface;

  infoMsg: string;

  notificationData: any[] = [];

  showWindow = false;

  userDefineColors: any[] = [];

  showOpenServiceRequest: boolean;

  badge = '';

  shoWWaverWindow = false;


  showChangeAddressWindow = false;



  operationStatusNotification: string[] = [];
  addressModel: AddressModel;


  showChangeEnergyPlanWindow = false;
  energyPlanData: any;

  selectedPlanNotification: any[] = [];

  /* update information */
  showUpdateInformationWindow = false;
  updateInformation: UpdateInformation;

  hasNgas = true;


  constructor(private _httpClient: HttpClient,
    private _gridlayoutService: AmexioGridLayoutService) {
    this.setDefaultInfo();
    this.customerOrigin = new CustomerProfileOrigin();
    this.updateInformation = new UpdateInformation('', '', '');
    this.addressModel = new AddressModel();
    this.serviceMetadataStructure = new ServiceMetadataStructure();
    this.gaugeChartData = [
      ['Label', 'Value'],
      ['CSAT', 80],
      ['AHT-SLA', 68]
    ];
    this.createLayouts();
    this._gridlayoutService.createLayout(this.rinaHomeDesktopLayout);
  }

  setDefaultInfo() {
    this.infoMsg = ` From 1 October 2018 Origin's card payment fee structure changed. A separate card payment fee now applies for each card type, with fees limited to the amount it costs Origin to accept payments made using each card. If you pay by debit card, payments may incur a fee of 0.26%
    for Visa or 0.32% for Mastercard. If you pay by credit card, payments may incur a fee of 0.60% for Visa or 0.72% for Mastercard. If you pay at an Australia Post outlet, a card payment fee of 0.49% (incl GST) may apply.`;
  }

  ngOnInit() {
    this.createRadioData();
    this.getServiceList();
    this.createPropertyStructure();
  }

  createRadioData() {
    this._httpClient.get('assets/tabdata.json').subscribe(
      (res: any) => {
        this.electricityTitleData = res[0];
        this.selectedRadioGroup = this.electricityTitleData;
        this.gasTitleData = res[1];
      }
    );
  }


  getServiceList() {
    this._httpClient.get('assets/serviceList.json').subscribe(
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

  createPropertyStructure() {
    this.createCustomerDetailsPropertyStructure();
    this.createElectricityPropertyStructure();
    if (this.customerOrigin.naturalGas !== null) {
      this.hasNgas = true;
      this.createNaturalGasPropertyStructure();
    } else {
      this.ngasSummaryKeyValueData = [];
      this.hasNgas = false;
    }

  }

  getSearchObject(searchObject: any) {
    let response: any;
    this.showLoader = true;
    this._httpClient.get(SERVICE_URL.CUSTOMER_SEARCH + searchObject.searchId + '/' + searchObject.searchType).subscribe(
      (res: any) => {
        response = res;
      },
      (error: any) => {
        this.showLoader = false;
        this.warningMsg = 'unable to retrieve data please try after sometime.';
        this.warningdialogue = true;
      },
      () => {
        if (response.success) {
          this.showLoader = false;
          this.customerOrigin = response.response;
          this.setOpenServiceWindowObject();
          this.resetRadioData();
          this.createPropertyStructure();
          this.setWaverInfo(this.selectedRadioGroup);
          this.onPropertySelectHandle(this.selectedRadioGroup);
          this.enableServiceList();
        } else {
          this.showLoader = false;
          this.warningMsg = response.errorMessage;
          this.warningdialogue = true;
        }
      }
    );
  }

  enableServiceList() {
    this.serviceList[0].disabled = false;
    this.serviceList[1].disabled = false;
    this.serviceList[2].disabled = false;

  }





  setOpenServiceWindowObject() {
    if (this.customerOrigin.openServiceRequest) {
      setTimeout(() => {
        this.showOpenServiceRequest = true;
      }, 2000);
    }
    this.badge = BADGE[this.customerOrigin.customerProfile.type];
  }

  resetRadioData() {
    this.electricityTitleData.disabled = false;
    this.gasTitleData.disabled = false;
    this.electricityTitleData.selected = true;
  }

  getTabComponentList(tabData: any) {
    this.tabRef.closeAll();
    // create 1 tab
    const currentPlane = this.tabRef.addDynamicTab(tabData.data[0].title, '', false, tab_map.TAB_KEY_VALUE_PAIR[tabData.data[0].key]);
    currentPlane.currentPlan = this.serviceMetadataStructure.currentPlan;

    // create 2 tab
    const elecBill = this.tabRef.addDynamicTab(tabData.data[1].title, '', false, tab_map.TAB_KEY_VALUE_PAIR[tabData.data[1].key]);
    elecBill.billSummary = this.serviceMetadataStructure.billSummary;

    // create 4 tab
    const usageReport = this.tabRef.addDynamicTab(tabData.data[3].title, '', false, tab_map.TAB_KEY_VALUE_PAIR[tabData.data[3].key]);

    usageReport.usageReports = this.serviceMetadataStructure.usageReports;
    usageReport.tabData = tabData;

    // create 3 tab
    const interaction = this.tabRef.addDynamicTab(tabData.data[2].title, '', false, tab_map.TAB_KEY_VALUE_PAIR[tabData.data[2].key]);
    interaction.interactionHistory = this.customerOrigin.interactionHistory;

    this.tabRef.setActiveTab(3);

  }

  createCustomerDetailsPropertyStructure() {
    this.customerKeyValuedata = [];
    this.customerKeyValuedata.push(new PropertyGridModel('Account Number', this.customerOrigin.customerProfile.uniqueNo));
    this.customerKeyValuedata.push(new PropertyGridModel('Mobile #', this.customerOrigin.customerProfile.mobile));
    this.customerKeyValuedata.push(new PropertyGridModel('Name', this.customerOrigin.customerProfile.name));
    this.customerKeyValuedata.push(new PropertyGridModel('Company Name', this.customerOrigin.customerProfile.companyName));
    this.customerKeyValuedata.push(new PropertyGridModel('Operating Status', this.customerOrigin.customerProfile.uaeId));
    this.customerKeyValuedata.push(new PropertyGridModel('Email', this.customerOrigin.customerProfile.email));
    this.customerKeyValuedata.push(new PropertyGridModel('Address', this.customerOrigin.customerProfile.addressLabel));
    this.customerKeyValuedata.push(new PropertyGridModel('Birthday', this.customerOrigin.customerProfile.birthday));
    this.customerKeyValuedata.push(new PropertyGridModel('Anniversary', this.customerOrigin.customerProfile.anniversary));
  }

  createElectricityPropertyStructure() {
    this.eleSummaryKeyValueData = [];
    this.eleSummaryKeyValueData.push(new PropertyGridModel('Current Plan', this.customerOrigin.electricity.currentPlan));
    this.eleSummaryKeyValueData.push(new PropertyGridModel('Plan Validity', this.customerOrigin.electricity.planValidity));
    this.eleSummaryKeyValueData.push(new PropertyGridModel('NMI', this.customerOrigin.electricity.nmi));
    this.eleSummaryKeyValueData.push(new PropertyGridModel('Last meter read date', this.customerOrigin.electricity.lastMeterReadDate));
    this.eleSummaryKeyValueData.push(new PropertyGridModel('Next Scheduled Read Date', this.customerOrigin.electricity.nextScheduledReadDate));
    this.eleSummaryKeyValueData.push(new PropertyGridModel('Due Amount', this.customerOrigin.electricity.unbilledAmount));
    if (this.customerOrigin.electricity.dueAmountAfterDueDate) {
      this.eleSummaryKeyValueData.push(new PropertyGridModel('Due Amount After Due Date', this.customerOrigin.electricity.dueAmountAfterDueDate));
    }
    this.eleSummaryKeyValueData.push(new PropertyGridModel('Due Date', this.customerOrigin.electricity.dueDate));
    this.eleSummaryKeyValueData.push(new PropertyGridModel('Last Payment Amount', this.customerOrigin.electricity.lastpaymentAmount));
    this.eleSummaryKeyValueData.push(new PropertyGridModel('Last Payment Date', this.customerOrigin.electricity.lastPaymentDate));

  }

  createNaturalGasPropertyStructure() {
    this.ngasSummaryKeyValueData = [];
    this.ngasSummaryKeyValueData.push(new PropertyGridModel('Current Plan', this.customerOrigin.naturalGas.currentPlan));
    this.ngasSummaryKeyValueData.push(new PropertyGridModel('Plan Validity', this.customerOrigin.naturalGas.planValidity));
    this.ngasSummaryKeyValueData.push(new PropertyGridModel('MIRN', this.customerOrigin.naturalGas.mirn));
    this.ngasSummaryKeyValueData.push(new PropertyGridModel('Last meter read date', this.customerOrigin.naturalGas.lastMeterReadDate));
    this.ngasSummaryKeyValueData.push(new PropertyGridModel('Next Scheduled Read Date', this.customerOrigin.naturalGas.nextScheduledReadDate));
    this.ngasSummaryKeyValueData.push(new PropertyGridModel('Due Amount', this.customerOrigin.naturalGas.unbilledAmount));
    this.ngasSummaryKeyValueData.push(new PropertyGridModel('Due Date', this.customerOrigin.naturalGas.dueDate));
    this.ngasSummaryKeyValueData.push(new PropertyGridModel('Last Payment Amount', this.customerOrigin.naturalGas.lastpaymentAmount));
    this.ngasSummaryKeyValueData.push(new PropertyGridModel('Last Payment Date', this.customerOrigin.naturalGas.lastPaymentDate));
  }


  // ON PROPERTY SELECTION
  onPropertySelectHandle(proObject: RadioTitleInterface) {
    this.selectedRadioGroup = proObject;
    let resP: any;
    this.showLoader = true;
    this._httpClient.get(SERVICE_URL.CUSTOMER_SEARCH + this.customerOrigin.customerProfile.customerId + '/' + proObject.value).subscribe(
      (res: any) => {
        resP = res;
      },
      (error: any) => {
        this.showLoader = false;
        this.warningMsg = 'unable to retrieve data please try after sometime.';
        this.warningdialogue = true;
      },
      () => {
        if (resP.success && resP.response) {
          this.showLoader = false;
          if (proObject.value === 'electricity') {
            this.setWaverInfo(proObject);
            this.assignObject(resP.response.electricity);
          } else {
            this.setWaverInfo(proObject);
            this.assignObject(resP.response.naturalGas);
          }
          this.getRightSellData(proObject);

        } else {
          this.showLoader = false;
          this.warningMsg = resP.errorMessage;
          this.warningdialogue = true;
        }

      }
    );
  }

  assignObject(obj: ServiceMetadataStructure) {
    if (obj.addOnInfo) {
      this.infoMsg = obj.addOnInfo;
      if (!this.customerOrigin.electricity.dueAmountAfterDueDate) {
        this.notificationData.push(obj.addOnInfo);
      }
    } else {
      this.setDefaultInfo();
      this.notificationData = [];
    }
    this.serviceMetadataStructure = obj;
  }

  onClickHandle(event: any) {
    this.notificationData = [];
    this.showWindow = !this.showWindow;
  }

  setWaverInfo(proObject: RadioTitleInterface) {
    if (proObject.value === 'electricity' && this.customerOrigin.electricity.dueAmountAfterDueDate) {
      this.serviceList[3].disabled = false;
    } else {
      this.serviceList[3].disabled = true;
    }
  }

  serviceTypeClickHandle(event: any) {
    switch (event.type) {
      case 'WI':
        this.resetAllWindow();
        this.shoWWaverWindow = true;
        break;
      case 'CEP':
        this.showLoader = true;
        this.resetAllWindow();
        this.getEnergyPlaneData();
        break;
      case 'UI':
        this.showLoader = true;
        this.resetAllWindow();
        this.getCustomerProfileForUpdate();
        break;
      case 'CA':
        this.showLoader = true;
        this.resetAllWindow();
        this.getCustomerProfileForAddress();
        break;
      default:
        break;
    }
  }

  getEnergyPlaneData() {
    let planResponse: any;
    this._httpClient.get(SERVICE_URL.CHANGE_ENERGY_PLAN + this.customerOrigin.customerProfile.customerId).subscribe(
      (res: any) => {
        planResponse = res;
      },
      (error: any) => {
        console.log(error);
      },
      () => {
        if (planResponse.success) {
          this.energyPlanData = planResponse.response;
          this.showLoader = false;
          this.windowEnable = true;
          this.showChangeEnergyPlanWindow = true;
        }
      }
    );
  }

  getRightSellData(tabData: any) {
    let sellResponse: any;
    let searchType: string;
    if (this.customerOrigin.electricity !== null && this.customerOrigin.naturalGas == null) {
      searchType = '1';
    } else if (this.customerOrigin.electricity !== null && this.customerOrigin.naturalGas !== null) {
      searchType = '2';
    }
    this._httpClient.get(SERVICE_URL.RIGHT_SELL + searchType).subscribe(
      (res: any) => {
        sellResponse = res;
      },
      (error: any) => {
        console.log(error);
          this.getTabComponentList(tabData);
      },
      () => {
        if (sellResponse.success) {
          this.customerOrigin.rightSellData = sellResponse.response;
          this.getTabComponentList(tabData);
          this.addRightSellTab(tabData);
        } else {
          this.warningMsg = sellResponse.errorMessage;
          this.warningdialogue = true;
        }
      }
    );
  }


  addRightSellTab(tabData: any) {
 const rightSell = this.tabRef.addDynamicTab(tabData.data[4].title, '', false, tab_map.TAB_KEY_VALUE_PAIR[tabData.data[4].key]);
          rightSell.getRightSell(this.customerOrigin.rightSellData);
    this.tabRef.setActiveTab(3);
  }

  onSubmitHandle(event: any) {
    this.shoWWaverWindow = false;
    this.notificationData.push(this.serviceMetadataStructure.addOnInfo);
  }

  onChangeAddressSubmitHandle() {
    this.operationStatusNotification.push('Address Changed Successfully!');
    this.resetAllWindow();
  }

  getCustomerProfileForUpdate() {
    let custResponse: any;
    this._httpClient.get(SERVICE_URL.CUSTOMER_DETAILS + this.customerOrigin.customerProfile.customerId).subscribe(
      (res: any) => {
        custResponse = res;
      },
      (error: any) => {
        console.log(error);
      },
      () => {
        if (custResponse.success) {
          const custProfile = custResponse.response;
          this.updateInformation = new UpdateInformation(custProfile.mobile, custProfile.email, custProfile.addressLabel);
          this.showLoader = false;
          this.windowEnable = true;
          this.showUpdateInformationWindow = true;
        }
      }
    );
  }


  getCustomerProfileForAddress() {
    let custResponse: any;
    this._httpClient.get(SERVICE_URL.CUSTOMER_DETAILS + this.customerOrigin.customerProfile.customerId).subscribe(
      (res: any) => {
        custResponse = res;
      },
      (error: any) => {
        console.log(error);
      },
      () => {
        if (custResponse.success) {
          this.addressModel = <AddressModel>custResponse.response.address;
          this.showLoader = false;
          this.windowEnable = true;
          this.showChangeAddressWindow = true;
        }
      }
    );
  }

  onUpdateInfoSubmitHandle() {
    this.operationStatusNotification.push('Information Updated Successfully!');
    this.resetAllWindow();
  }

  resetAllWindow() {
    this.windowEnable = false;
    this.shoWWaverWindow = false;
    this.showChangeAddressWindow = false;
    this.showChangeEnergyPlanWindow = false;
    this.showUpdateInformationWindow = false;
  }

  onCancelHandle() {
    this.resetAllWindow();
  }

  getSelectedPlanData(selectedPlanData: any) {
    this.selectedPlanNotification.push(selectedPlanData);
  }

}
