import { Injectable } from "@angular/core";
import { HttpService } from "../shared/http.service";
import { SERVICE_URL } from './../service.constant';

@Injectable()
export class ServiceBookingService {

    constructor(private http: HttpService) {

    }

    fetchLocations() {
        return this.http.fetch('map/', 'get');
    }

    fetchSABasedOnLocation(locationId: string) {
        return this.http.fetch('map/' + locationId, 'get');
    }
}
