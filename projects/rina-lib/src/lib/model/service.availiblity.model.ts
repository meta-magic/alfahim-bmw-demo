import { LocationModel } from 'projects/rina-lib/src/lib/model/shared/location.model';
export class ServiceAvailibilityModel {
    location: string;
    appointmentDate: Date = new Date();
    appointmentTime = 10;
    assitantPersonId: string;
    assitantPersonName: string;
    selectedSlot: number;
    isNotifySA: boolean;
    locationModel: LocationModel;
    locationName: string;
    selectedSlotDate: Date = new Date();
    serviceTimeLeft: number;
    vehicleName = '';
    vehiclePlate = '';
    constructor() {
        this.locationModel = new LocationModel();
    }
    public isValidate(): boolean {
        let isValid = false;
        if (this.location != null && this.appointmentDate != null &&
            this.appointmentTime != null && this.assitantPersonId != null && this.selectedSlot != null) {
            isValid = true;
        } else {
            isValid = false;
        }
        return isValid;
    }
}
