/**
 * Created by dattaram on 5/2/19.
 */
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpService } from '../../../../rina-lib/src/lib/services/shared/http.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'otp-component',
  templateUrl: 'otp.component.html'
})

export class OTPComponent implements OnInit {
  @Input('next-window') nextWindow: number;
  @Input('otp-type') otpType = 1;
  @Input('email') email: string;
  @Output() onBack: EventEmitter<any> = new EventEmitter<any>();
  @Output() onClose: EventEmitter<any> = new EventEmitter<any>();
  @Output() onNext: EventEmitter<any> = new EventEmitter<any>();
  showLoader = false;
  @Input('otp-ref') otpRef: any;
  otp: string;
  errorMsg: string;
  otpFormsGroup: FormGroup;
  maskedid: string;
  hasEmailId = true;
  constructor(private _httpService: HttpService, private fb: FormBuilder) {
    this.otpFormsGroup = this.fb.group({
      otpValue: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]],
    });
  }

  ngOnInit() {
    this.emailMasking();
  }

  emailMasking() {
    const index = this.email.lastIndexOf('@');
    const prefix = this.email.substring(0, index);
    const postfix = this.email.substring(index);
    const mask = prefix.split('').map(function (o, i) {
      if (i == 0 || i == (index - 1)) {
        return o;
      } else {
        return '*';
      }
    }).join('');
    this.maskedid = mask + postfix;
  }

  onNextHandle() {
    this.showLoader = true;
    let response: any;
    if (this.otpType === 1) {
      const requestJson = {
        'customerId': this.otpRef,
        'otp': this.otp
      };
      this._httpService.post('customerverification/verifycustomer/', 'post', requestJson).subscribe(
        (res) => {
          response = res;
        },
        (err: any) => {
          this.showLoader = false;
          this.errorMsg = 'something went wrong';
        },
        () => {
          if (response.success && response.response.isOtpValid) {
            this.showLoader = false;
            this.onNext.emit(this.nextWindow);
          } else {
            this.showLoader = false;
            this.errorMsg = response.response.message;
          }
        }
      );
    } else {
      const requestJson = {
        'emailId': this.otpRef,
        'otp': this.otp
      };
      this._httpService.post('customerverification/verifycustomerregistration/', 'post', requestJson).subscribe(
        (res) => {
          response = res;
        },
        (err: any) => {
          this.showLoader = false;
          this.errorMsg = 'something went wrong';
        },
        () => {
          if (response.response.isOtpValid) {
            this.showLoader = false;
            this.onNext.emit(this.nextWindow);
          } else {
            this.showLoader = false;
            this.errorMsg = response.response.message;
          }
        }
      );
    }

  }

  onBackHandle() {
    this.onBack.emit(this.nextWindow);
  }

  onCancel() {
    this.onClose.emit(this.nextWindow);
  }
}
