/**
 * Created by dattaram on 21/3/19.
 */
import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {AddressModel} from "../../models/customer.profile.model";

@Component({
  selector: 'change-address',
  templateUrl: 'change.address.component.html'
})

export class ChangeAddressComponent implements OnInit, OnChanges {

  @Input() data: AddressModel;

  @Output() onCancel: EventEmitter<any> = new EventEmitter<any>();

  @Output() onSubmit: EventEmitter<any> = new EventEmitter<any>();

  readonlyAddressModel: AddressModel;

  constructor() {
    this.readonlyAddressModel = new AddressModel();
  }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) {
      this.readonlyAddressModel =  Object.assign(this.readonlyAddressModel, changes.data.currentValue);
    }
  }

  onChangeAddressCancelHandle() {
    this.onCancel.emit();
  }

  onChangeAddressSubmitHandle() {
    this.onSubmit.emit();
  }
}
