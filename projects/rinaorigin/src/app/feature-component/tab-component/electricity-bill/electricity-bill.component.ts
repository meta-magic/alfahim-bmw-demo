/**
 * Created by dattaram on 19/2/19.
 */

import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'electricity-bill',
  templateUrl: 'electricity-bill.component.html'
})

export class ElectricityBillComponent implements OnInit {
  billSummary: any;
  constructor() {
  }

  ngOnInit() {}
}
