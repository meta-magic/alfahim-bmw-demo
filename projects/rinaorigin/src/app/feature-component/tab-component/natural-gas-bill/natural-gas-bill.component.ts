/**
 * Created by dattaram on 19/2/19.
 */
import {Component, OnInit} from '@angular/core';
@Component({
   selector: 'natural-gas-bill',
   templateUrl: 'natural-gas-bill.component.html'
})

export class NaturalGasBillComponent implements OnInit {
  billSummary: any;
  constructor() {
  }

  ngOnInit() {}
}
