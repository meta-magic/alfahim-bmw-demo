/**
 * Created by dattaram on 15/1/19.
 */
import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {HttpService} from "../../../../../rina-lib/src/lib/services/shared/http.service";

@Component({
  selector: 'search-box',
  templateUrl: './searchbox.component.html'
})

export class SearchBoxComponent implements OnInit {
  dropdownstyle: any;
  showDropdown = false;
  dropDownItemList: any[] = [];
  searchId = '';
  searchType = 1;
  @Output() search: EventEmitter<any> =  new EventEmitter<any>();
  constructor(private _httpService: HttpService) {
  }

  ngOnInit() {
    this.getSearchOptionList();
    this.showList(this.showDropdown);
  }

  getSearchOptionList() {
    this._httpService.fetchLocalData('assets/searchoptionlist.json', 'get').subscribe(
      (res: any) => {
        this.dropDownItemList = res.data;
      }
    );
  }

  focusHandle(event: any) {
    this.showList(true);
  }
  iconHandle() {
    const searchObject = {
      searchId: this.searchId.replace(/\s/g,''),
      searchType: this.searchType
    };
    this.search.emit(searchObject);
  }
  blurHandle(event: any) {
    this.showList(false);
  }

  liClickHandle(item: any) {
    this.dropDownItemList.forEach((obj: any) => {
      obj.selected = false;
    });
    item.selected = true;
    this.searchType = item.id;
    if (this.searchId !== '') {
      this.iconHandle();
    }
    this.showList(false);
  }

  showList(flag: boolean) {
    this.showDropdown = flag;
    if (this.showDropdown) {
      this.dropdownstyle = {visibility: 'visible'};
    } else {
      this.dropdownstyle = {visibility: 'hidden'};
    }
  }
}
