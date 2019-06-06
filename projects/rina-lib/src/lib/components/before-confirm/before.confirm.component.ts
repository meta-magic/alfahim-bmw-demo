/**
 * Created by dattaram on 24/1/19.
 */
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'before-confirm',
  templateUrl: 'before.confirm.component.html'
})

export class BeforeConfirmComponent implements OnInit {

  accessioriesData: any[] = [];

  @Output() onBeforeConfirmClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() onBeforeBack: EventEmitter<any> = new EventEmitter<any>();
  @Output() onClose: EventEmitter<any> = new EventEmitter<any>();
  steps: any[] = [];
  constructor() {
    this.steps = ['fa-user ', 'fa-home', 'fa-shopping-cart', 'fa fa-money']
  }

  ngOnInit() {
    this.accessioriesData = [
      {
        "imageUrl": "assets/images/bmwwatch.jpg",
        "description": "Men's Black Edition Business chronograph watch. Stainless steel case with black PVD coating. Black dial with blue highlights. Stainless steel hands with luminous detail. Stainless steel bracelet strap with black PVD coating. Stopwatch function. Water-resistant to 10 ATM. Diameter 43 mm. Ronda 5021 quartz chronograph movement. Swiss made."
      },
      {
        "imageUrl": "assets/images/bmwcap.jpg",
        "description": "Basic cap. 100% cotton. Metal clasp for adjusting fit. Black B6 695 2242. Black/white B6 695 2243. Navy B6 695 2244"
      },
      {
        "imageUrl": "assets/images/bmwcar.jpg",
        "description": "The annual endurance race of the Mille Miglia attracted a very impressive group of competitors in 1955. Mercedes-Benz had big plans up its sleeve, so it sent over a fleet of four racing cars, all of the type 300 SLR, which was to make its debut here. Piloted by world-famous top drivers, the 300 SLR was intended to be a passport to victory over such hard competitors as Ferrari, Maserati, and Aston Martin. Half of Italy was on its feet to follow the national racing highlight of the year."
      },
      {
        "imageUrl": "assets/images/bmwkey.png",
        "description": "This practical key ring in robust stainless steel echoes the illuminated version of the central Mercedes star. The black PVD-coated background features a diamond pattern while the inner contours of the Mercedes star have a luminous finish which, after exposure to daylight or an artificial light source, glows blue in the dark for up to four hours. The key ring, which measures approx. 9 cm in length, features a flat split ring, engraved with Mercedes-Benz, and three mini split rings for quick removal and replacement of individual keys."
      }
    ];
  }

  onClickHandle(event: any) {
    this.onBeforeConfirmClick.emit(event);
  }

  onBackHandle(event: any) {
    this.onBeforeBack.emit(event);
  }
  onCancel(event: any) {
    this.onClose.emit(event);
  }
}
