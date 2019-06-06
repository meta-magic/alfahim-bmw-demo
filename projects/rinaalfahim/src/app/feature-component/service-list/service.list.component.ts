
/**
 * Created by dattaram on 17/1/19.
 */

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
@Component({
  selector: 'service-list-component',
  templateUrl: 'service-list.component.html'
})

export class ServiceListComponent implements OnInit {
  @Input('service-list') serviceList: any[] = [];
  @Output() search: EventEmitter<any> =  new EventEmitter<any>();
  @Output() errorFound: EventEmitter<any> =  new EventEmitter<any>();
  @Output() serviceTypeClick: EventEmitter<any> =  new EventEmitter<any>();

  errorMsgData = [];
  constructor() {}

  ngOnInit() {
  }

  getSearchObject(event: any) {
      this.search.emit(event);
  }

  openServiceBookingWindow(service: any) {
    if (service.serviceName === 'SERVICE BOOKING') {
      this.serviceTypeClick.emit(service);
    }
  }
}
