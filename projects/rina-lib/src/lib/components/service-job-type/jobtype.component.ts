/**
 * Created by dattaram on 5/2/19.
 */

import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PersonalDetailsService} from '../../services/alfahim/personal.details.service';

@Component({
  selector: 'service-job-type',
  templateUrl: 'jobtype.component.html'
})

export class ServiceTypeComponent implements OnInit {
  serviceTypeData: any[] = [];
  selectedServiceJobs: any[] = [];
  remarks = '';
  @Output() onNext: EventEmitter<any> = new EventEmitter<any>();
  @Output() onBack: EventEmitter<any> = new EventEmitter<any>();
  @Output() onClose: EventEmitter<any> = new EventEmitter<any>();

  constructor(private _personalDetailsService: PersonalDetailsService) {
    this.resetBindedData();
    this.serviceTypeData =  [
      {
        'typeName': 'Check Battery System',
        'typeValue': 'Check Battery System',
      },
      {
        'typeName': 'Horn Check',
        'typeValue': 'Horn Check',
      },
      {
        'typeName': 'Instrument Cluster / Display Instruments Check',
        'typeValue': 'Instrument Cluster / Display Instruments Check',
      },
      {
        'typeName': 'Steering Wheel Heater Check',
        'typeValue': 'Steering Wheel Heater Check',
      },
      {
        'typeName': 'Fuel Indicator Level Check',
        'typeValue': 'Fuel Indicator Level Check',
      },
      {
        'typeName': 'Electrical System Check',
        'typeValue': 'Electrical System Check',
      }
    ];
    this.assignOldData();

  }

  assignOldData() {
    const dataRef = this._personalDetailsService.getExtraServiceData();
    if (dataRef) {
      this.remarks = dataRef.remarks;
      if (dataRef.selectedJobType) {
        this.selectedServiceJobs = dataRef.selectedJobType;
        dataRef.selectedJobType.forEach((selectedItem: any) => {
          this.serviceTypeData.forEach((item: any, index: number)=> {
            if(selectedItem.typeValue === item.typeValue) {
              this.serviceTypeData[index] = selectedItem;
            }
          });
        });
      }
    }
  }

  ngOnInit() {
  }

  getSelectedType(event: any) {
    this.selectedServiceJobs = event;
  }

  onNextHandle(){
    const createEmitingObj = {
      selectedJobType: this.selectedServiceJobs,
      remarks: this.remarks
    };
    this.onNext.emit(createEmitingObj);
    this.resetBindedData();
  }

  onBackHandle(event: any) {
    this.onBack.emit(event);
  }
  onCancel(event: any){
    this.onClose.emit(event);
  }

  resetBindedData() {
    this.selectedServiceJobs = [];
    this.remarks = '';
  }
}
