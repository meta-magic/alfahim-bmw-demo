import { PersonalDetailsService } from 'projects/rina-lib/src/lib/services/alfahim/personal.details.service';
import {Component, Input} from '@angular/core';
import { ServiceAvailibilityModel } from 'projects/rina-lib/src/public_api';
import { Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'appointment-confirmation',
    templateUrl: './appointment.confirmation.html'
})
export class AppoinmentConfirmationComponent {

    serviceAvailibilityModel: ServiceAvailibilityModel;
    @Output() onConfirm: EventEmitter<any> = new EventEmitter<any>();

    @Input('appointment-msg') appointmentMsg: string;

    constructor(private service: PersonalDetailsService) {
      this.serviceAvailibilityModel = this.service.getPeferredLocation();
    }

    close(event: any) {
      this.onConfirm.emit(event);
    }
}
