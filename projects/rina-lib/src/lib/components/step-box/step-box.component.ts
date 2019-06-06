/**
 * Created by dattaram on 8/2/19.
 */
import {Component, OnInit, Input} from '@angular/core';

@Component({
 selector: 'rina-step-box',
  templateUrl: 'step-box.component.html'
})

export class RinaStepBoxComponent implements OnInit {

  @Input('active-index') activeIndex: any;

  @Input('step-box-data') stepBoxData: any[] = [];

  constructor() {
  }

  ngOnInit() {
    this.stepBoxData = [
      {
        "label": "User",
        "icon": "fa fa-user ",
        "active": false,
        "index": 3
      },
      {
        "label": "Location",
        "icon": "fa fa-map-marker ",
        "active": false,
        "index": 4
      },
      {
        "label": "Service Type",
        "icon": "fa fa-cubes ",
        "active": false,
        "index": 5
      },
      {
        "label": "Sale",
        "icon": "fa fa-shopping-cart",
        "active": false,
        "index": 6
      },
      {
        "label": "Confirm",
        "icon": "fa fa-check-circle ",
        "active": false,
        "index": 7
      },
      {
        "label": "Info",
        "icon": "fa fa-info ",
        "active": false,
        "index": 8
      }
    ];
  }
}
