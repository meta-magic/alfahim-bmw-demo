/**
 * Created by dattaram on 19/2/19.
 */
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'current-plan',
  templateUrl: 'current-plan.component.html'
})

export class CurrentPlanComponent implements OnInit {
  currentPlan: any = {};
  constructor() {
  }

  ngOnInit() {
  }
}
