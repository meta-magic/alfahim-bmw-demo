/**
 * Created by dattaram on 25/2/19.
 */
import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'open-service-request',
  templateUrl: 'open-service-request.component.html',
  styles: [
    `      
      .open-status {
        text-decoration: underline;
      }
      .close-status {
        pointer-events: none;
      }
    `
  ]
})

export class OpenServiceRequestComponent implements OnInit, OnChanges {


  @Input('service-request-object') serviceRequestObject: any[] = [];

  @Input('is-interaction-history') isInteractionHistory = false;

  fieldEnggInfo: any;
  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['serviceRequestObject']) {
      this.serviceRequestObject = [];
      this.serviceRequestObject = changes.serviceRequestObject.currentValue;
      if (this.serviceRequestObject && !this.isInteractionHistory) {
        this.fieldEnggInfo = this.serviceRequestObject[0];
      }
    }
  }

  getFieldEngInfo(data: any) {
    this.fieldEnggInfo = data;
  }
}
