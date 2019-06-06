/**
 * Created by dattaram on 23/1/19.
 */
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpService } from '../../../../rina-lib/src/lib/services/shared/http.service';
import { CustomerProfile, VehiclesInterface } from '../../../../rinaalfahim/src/app/models/customer.profile.model';
import { NotificationAndLoaderService } from '../../../../rina-lib/src/lib/services/shared/notification-loader.service';

@Component({
  selector: 'quick-booking',
  templateUrl: 'quick.booking.component.html'
})

export class QuickBookingComponent implements OnInit {

  @Output() onNext: EventEmitter<any> = new EventEmitter<any>();
  @Output() onClose: EventEmitter<any> = new EventEmitter<any>();
  @Output() onNewCustomer: EventEmitter<any> = new EventEmitter<any>();

  emiratesId = '';
  regMobNumber = '';
  regNumber = '';
  emiratesIdDisabled: boolean;
  regMobNumberDisabled: boolean;
  regNumberDisabled: boolean;
  warningdialogue = false;
  warningMsg = '';
  constructor(private _httpService: HttpService, private NaLService: NotificationAndLoaderService) {
  }

  ngOnInit() {
    this.setDisabledFlag(false, false, false);
  }

  onClickHandle(event: any) {
    let response: any;
    this.NaLService.showLoader = true;
    const regNumber = this.regNumber.replace('/', '-');
    const createUrl = 'customer/search/' + this.checkvalue(this.emiratesId) + '/'
      + this.checkvalue(this.regMobNumber) + '/' + this.checkvalue(regNumber);
    this._httpService.fetch(createUrl, 'get').subscribe(
      (res) => {
        response = res;
      },
      (err: any) => {
        this.NaLService.showLoader = false;
        this.warningMsg = 'Something went wrong';
        this.warningdialogue = true;
      },
      () => {
        if (response.success) {
          this.NaLService.showLoader = false;
          this.onNext.emit(<VehiclesInterface[]>response.response);
        } else {
          this.NaLService.showLoader = false;
          this.warningMsg = response.errorMessage;
          this.warningdialogue = true;
        }
      }
    );
  }

  changeHandle(key: string) {
    this.enableTextInput(key);
  }


  enableTextInput(key: string) {
    if (this.emiratesId.length > 0 && key === 'eid') {
      this.setDisabledFlag(false, true, true);
    } else if (this.regMobNumber.length > 0 && key === 'rmn') {
      this.setDisabledFlag(true, false, true);
    } else if (this.regNumber.length > 0 && key === 'rn') {
      this.setDisabledFlag(true, true, false);
    } else {
      this.setDisabledFlag(false, false, false);
    }
  }

  setDisabledFlag(eidFlag: boolean, rmnFlag: boolean, rnFlag: boolean) {
    this.emiratesIdDisabled = eidFlag;
    this.regMobNumberDisabled = rmnFlag;
    this.regNumberDisabled = rnFlag;
  }

  checkvalue(data: string): any {
    let updatedValue;
    if (data.length === 0) {
      updatedValue = -1;
    } else {
      updatedValue = data;
    }
    return updatedValue;
  }

  validUi(): boolean {
    if (this.emiratesId !== '' || this.regMobNumber !== '' || this.regNumber !== '') {
      return false;
    } else {
      return true;
    }
  }

  onCancel(event: any) {
    this.onClose.emit(event);
  }

  onClickNewCustomer(event: any) {
    this.onNewCustomer.emit(event);
  }
}
