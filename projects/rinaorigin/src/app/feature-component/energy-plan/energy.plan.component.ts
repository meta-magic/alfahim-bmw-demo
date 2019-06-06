/**
 * Created by dattaram on 20/3/19.
 */
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'energy-plan',
  templateUrl: 'energy-plan.component.html',
  styles: [
    `
      .disabledStyle {
        cursor: not-allowed !important;
        pointer-events: none!important;
      }
    `
  ]
})

export class EnergyPlanComponent implements OnInit {

  @Input() show = false;

  @Input() data: any;

  showEnergyDetails = false;

  planDetails: any;

  selectedPlan = false;


  @Output() onClose: EventEmitter<any> = new EventEmitter<any>();

  @Output() onSelectPlan: EventEmitter<any> = new EventEmitter<any>();


  constructor() {
  }

  ngOnInit() {
  }

  selectPlan(planDetails: any) {
    this.data.purposedEnergyPlan.forEach((plan: any) => {
     plan.selected = false;
    });
    planDetails.selected = true;
    this.planDetails = planDetails;
    this.selectedPlan = true;
  }

  onBackClick() {
   this.showEnergyDetails = false;
   this.show = true;
  }

  onSelectPlanClick() {
    this.showEnergyDetails = false;
    this.show = false;
    const  notificationObj = {
      'name': this.planDetails.name,
      'planId': this.planDetails.planId,
      'startDate': this.planDetails.startDate,
      'endDate': this.planDetails.endDate,
    };
    this.onSelectPlan.emit(notificationObj);
    this.onClose.emit();
  }

  onCancel() {
    this.onClose.emit();
    this.show = false;
  }

  onNextHandle() {
    this.show = false;
    this.showEnergyDetails = true;
  }
}
