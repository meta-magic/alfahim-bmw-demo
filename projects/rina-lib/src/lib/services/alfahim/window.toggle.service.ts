import { Injectable } from '@angular/core';
@Injectable()
export class WindowToogleService {

  widdownMap: Map<number, number>;
  isNewUserFlow = false;
  appType: string = '1';
constructor() {
 this.addWindowMap();
}

getNextWindow(windowNumber: number): number {
  return this.widdownMap.get(windowNumber + 1);
}
getPreviousWindow(windowNumber: number): number {
  return this.widdownMap.get(windowNumber - 1);
}

addWindowMap() {
  this.widdownMap = new Map();
  this.widdownMap.set(0, 0);
  this.widdownMap.set(1, 1);
  this.widdownMap.set(2, 2);
  this.widdownMap.set(3, 3);
  this.widdownMap.set(4, 4);
  this.widdownMap.set(5, 5);
  this.widdownMap.set(6, 6);
  this.widdownMap.set(7, 7);
  this.widdownMap.set(8, 8);
  this.widdownMap.set(11, 11);

}

}

export class WindowDetails {
  windowNumber: number;
  windowName: string;

}

