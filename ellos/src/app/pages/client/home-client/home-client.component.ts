import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { GoogleMapsAPIWrapper } from '@agm/core';

import { AutocompleteMapDirective } from './../../../directives/auto-complete-map.directive';
import { DirectionsMapDirective } from './../../../directives/directions-map.directive';
import { Station } from './../../../model/station.model';

@Component({
  selector: 'app-home-client',
  templateUrl: './home-client.component.html',
  styleUrls: ['./home-client.component.css'],
  providers: [GoogleMapsAPIWrapper]
})
export class HomeClientComponent implements OnInit {

  ZOOM = 15;
  DEFAULT_LATITUDE = 39.8282;
  DEFAULT_LONGITUDE = -98.5795;
  GEOLOCATION = 'geolocation';

  public latitude: number;
  public longitude: number;


  constructor() { }

  ngOnInit() {
    this.latitude = this.DEFAULT_LATITUDE;
    this.longitude = this.DEFAULT_LONGITUDE;

    this.setCurrentPosition();
  }

  private setCurrentPosition() {
    const that = this;
    if (this.GEOLOCATION in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        that.latitude = position.coords.latitude;
        that.longitude = position.coords.longitude;
      });
    }
  }

}
