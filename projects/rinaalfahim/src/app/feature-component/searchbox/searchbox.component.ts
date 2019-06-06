/**
 * Created by dattaram on 15/1/19.
 */
import {Component, EventEmitter, OnInit, Output} from '@angular/core';

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
  constructor() {
    this.dropDownItemList = [
      {
        'key': 'Customer ID',
        'id': 1,
        selected: true
      },
      {
        'key': 'Mobile Number',
        'id': 2,
         selected: false
      },
      {
        'key': 'Emirates ID',
        'id': 3,
        selected: false
      },
      {
        'key': 'Registration No',
        'id': 4,
        selected: false
      }
    ];
  }

  ngOnInit() {
    this.showList(this.showDropdown);
  }

  focusHandle(event: any) {
    this.showList(true);
  }
  iconHandle() {
    const searchObject = {
      searchId: this.searchId,
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
