import { PersonalDetailsService } from 'projects/rina-lib/src/lib/services/alfahim/personal.details.service';
import {Component, Output, EventEmitter, OnInit, Input} from '@angular/core';
import { PersonalDetails } from 'projects/rina-lib/src/lib/model/shared/personal.details.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {HttpService} from '../../../../rina-lib/src/lib/services/shared/http.service';
@Component({
    selector: 'personal-details',
    templateUrl: './personal.details.html'
})
export class PersonalDetailsComponent implements  OnInit {
    preferredModeOfContacts: any[];
    titles: any[];
    vehicleTypes: any[];
    modelYears: any[];
    errorDialogue = false;
    errorMsg: string;
    showLoader = false;
    successMsg: any[] = [];
    @Output() onNext: EventEmitter<any> = new EventEmitter<any>();
    @Output() onClose: EventEmitter<any> = new EventEmitter<any>();
    @Output() onBack: EventEmitter<any> = new EventEmitter<any>();
    @Input('person-detail') personalDetails: PersonalDetails;
    personDetailsGroup: FormGroup;
    constructor(private personalDetailsService: PersonalDetailsService,
                private _httpService: HttpService, private fb: FormBuilder ) {
        this.personalDetails = new PersonalDetails();
        this.preferredModeOfContacts = [];
        this.titles = [];
        this.vehicleTypes = [];
        this.modelYears = [];
        this.preferredModeOfContacts.push({ primaryKey: '1', primaryDisplay: 'Phone' });
        this.preferredModeOfContacts.push({ primaryKey: '2', primaryDisplay: 'Email' });
    }

    ngOnInit(): void {
      this.getTitlesData();
      this.getVehiclesData();
      this.getVehiclesModelData();
      this.valiadtePersonDetailForm();
    }

    valiadtePersonDetailForm() {
      this.personDetailsGroup = this.fb.group({
        Title: ['', [Validators.required]],
        FirstName: ['', [Validators.required]],
        Surname: ['', [Validators.required]],
        Email: ['', [Validators.required, Validators.email]],
        Phone: ['', [Validators.required, Validators.minLength(10)]],
        ContactPreference: ['1', [Validators.required]],
        VehicleType: ['', [Validators.required]],
        ModelYear: ['', [Validators.required]],
        PresentKm: ['', [Validators.required, Validators.min(1)]],
        RegistrationNumber: ['', [Validators.required]]
      });
    }

    getTitlesData() {
      let response: any;
      this.personalDetailsService.getTitles().subscribe(
       res => {
         response = res;
       },
       // tslint:disable-next-line:no-shadowed-variable
       (error: any) => {
         console.log('Invalid url');
       },
       () => {
        this.titles = response;
       }
     );
    }
    getVehiclesData() {
      let response: any;
      this.personalDetailsService.getVehicles().subscribe(
       res => {
         response = res;
       },
       // tslint:disable-next-line:no-shadowed-variable
       (error: any) => {
         console.log('Invalid url');
       },
       () => {
        this.vehicleTypes = response;
       }
     );
    }
    getVehiclesModelData() {
      let response: any;
      this.personalDetailsService.getVehicleModels().subscribe(
       res => {
         response = res;
       },
       // tslint:disable-next-line:no-shadowed-variable
       (error: any) => {
         console.log('Invalid url');
       },
       () => {
        this.modelYears = response;
       }
     );
    }

    proceedToPreferredLocation(event: any) {
      this.showLoader = true;
      let response: any;
      this._httpService.fetch('customerverification/generateotp/' + this.personalDetails.email, 'get').subscribe(
        (res) => {
          response = res;
        },
        (err: any) => {
          this.showLoader = false;
          this.errorMsg = 'something went wrong';
          this.errorDialogue = true;
        },
        () => {
          if (response.success) {
            this.showLoader = false;
            this.personalDetailsService.setPersonalDetails(this.personalDetails);
            this.successMsg.push(response.successMessage + ' ' + this.personalDetails.email);
            this.onNext.emit(this.personalDetails);
          } else {
            this.showLoader = false;
            this.errorMsg = response.errorMessage;
            this.errorDialogue = true;
          }
        }
      );
    }

    onCloseClick(event: any) {
      this.onClose.emit(event);
      this.personalDetails = new PersonalDetails();
    }

    onPreviousClick(event: any) {
      this.onBack.emit(event);
      this.personalDetails = new PersonalDetails();

    }
}
