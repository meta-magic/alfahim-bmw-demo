import {Component, EventEmitter, Input, Output} from "@angular/core";
import { PropertyGridModel } from "../../model/shared/propertygrid.model";

@Component({
    selector : 'rina-property-grid',
    templateUrl : './propertygrid.component.html'
})
export class PropertyGridComponnent {

    @Input('key-value-data') data: PropertyGridModel[];

    @Input('image') image: string;

    @Input('has-image') hasImage = false;

    @Input('has-radio-title') hasRadioTitle = false;

    @Input('has-badge') hasBadge = false;

    @Input('has-radio') hasRadio = true;

    @Input('badge') badge = false;

    @Input('radio-title-data') hasRadioTitleData: RadioTitleInterface;

    @Input('has-border') hasBorder = true;

    @Output() onPropertySelect: EventEmitter<any> = new EventEmitter();



    selectRadio(selectedObject: RadioTitleInterface) {
      this.onPropertySelect.emit(selectedObject);
    }
}

export interface RadioTitleInterface {
  title: string;
  value: string;
  selected: boolean;
  disabled: boolean;
  data: any;
}
