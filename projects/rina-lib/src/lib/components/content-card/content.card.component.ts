/**
 * Created by dattaram on 24/1/19.
 */

import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'content-card',
  templateUrl: 'content.card.component.html'
})

export class ContentCardComponent implements OnInit {

  @Input('image-url') imageUrl: string;

  @Input('title') title: string;

  @Input('description') description: string;

  @Input('property-data') propertyData: any[] = [];

  constructor() {
  }

  ngOnInit() {
  }
}
