export class PropertyGridModel {
    fieldName : string;
    fieldValue : string;
    
    constructor(_fieldName: string, _fieldValue: string){
        this.fieldName = _fieldName;
        this.fieldValue = _fieldValue;
    }
}