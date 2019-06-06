import { DateRangeModel } from './../../model/shared/daterange.model';
import { Injectable } from "@angular/core";
import { HttpService } from "../shared/http.service";

@Injectable({
  providedIn: 'root'
})
export class BookingAvailableService {

    constructor(private http: HttpService) {

    }
    getAllAvailabelSlots(dateRangeModel: DateRangeModel ) {
        return this.http.post('assistant/available', 'post', dateRangeModel);
    }
}
