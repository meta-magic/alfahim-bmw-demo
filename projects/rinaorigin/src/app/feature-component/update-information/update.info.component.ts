/**
 * Created by dattaram on 21/3/19.
 */
import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {UpdateInformation} from "../../models/customer.profile.model";

@Component({
   selector: 'update-information',
  templateUrl: 'update.info.component.html'
})

export class UpdateInfoComponent implements OnInit, OnChanges {


  @Input() data: UpdateInformation;

  readonlyUpdateInfor: UpdateInformation;

  @Output() onCancel: EventEmitter<any> = new EventEmitter<any>();

  @Output() onSubmit: EventEmitter<any> = new EventEmitter<any>();


  constructor() {
    this.readonlyUpdateInfor = new UpdateInformation('', '' , '');
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['data']) {
      this.readonlyUpdateInfor = Object.assign(this.readonlyUpdateInfor, changes.data.currentValue);
    }
  }

  onUpdateInfoCancelHandle() {
    this.onCancel.emit();
  }

  onUpdateInfoSubmitHandle() {
  this.onSubmit.emit();
  }
}
