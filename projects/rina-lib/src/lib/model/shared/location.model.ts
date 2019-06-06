import { BaseModel } from "./base.model";

export class LocationModel extends BaseModel {
    locationId: string;
    locationName: string;
    latitude: number;
    longitude: number;
}
