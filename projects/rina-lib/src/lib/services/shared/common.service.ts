import { Injectable } from "@angular/core";
import { TimeModel, TimeUtil } from "amexio-ng-extensions";

@Injectable()
export class CommonService {

    timeData() : TimeModel [] {
       return new TimeUtil().timeData(false);
    }

    workingSlot1() : TimeModel [] {
        return new TimeUtil().workingslot1();
     }
}
