/**
 * Created by ashwini on 21/3/19.
 */
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'right-sell', templateUrl: 'right-sell.component.html',
    styles: [
      `.first {
        color: #fda50f!important;
      }
      .next {
        color: #FFFF69!important;
      }
      .remaining {
        color: #AF7300!important;
      }
  ; }
    `
    ],

})

export class RightSellComponent implements OnInit {
    upSell: any;
    rightSell: any;
    tabData: any;
    constructor() {

    }

    ngOnInit() {

    }

    getRightSell(data: any) {
        if(data){
               if (data.type == '2') {
            this.rightSell = data.rightSell;
        } else if (data.type == '1') {
            this.upSell = data.upSell;
        }
        }
     

    }
}
