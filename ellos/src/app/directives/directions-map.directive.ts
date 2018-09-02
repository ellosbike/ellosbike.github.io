import { Directive, Input, Output } from '@angular/core';

import { GoogleMapsAPIWrapper } from '@agm/core';

declare var google: any;

@Directive({
  selector: '[appDirectionsMap]'
})

export class DirectionsMapDirective {

  STROKE_WEIGHT = 8;
  STROKE_OPACIY = 0.7;
  STROKE_COLOR = '#00468c';
  ZOOM = 30;
  STATUS_OK = 'OK';

  @Input() origin: any;
  @Input() destination: any;
  @Input() originPlaceId: any;
  @Input() destinationPlaceId: any;
  @Input() waypoints: any;
  @Input() directionsDisplay: any;
  @Input() estimatedTime: any;
  @Input() estimatedDistance: any;

  constructor(private gmapsApi: GoogleMapsAPIWrapper) { }

  updateDirections() {
    this.gmapsApi.getNativeMap().then(map => {
      if (!this.originPlaceId || !this.destinationPlaceId) {
        return;
      }

      const directionsService = new google.maps.DirectionsService;
      const that = this;
      const latLngA = new google.maps.LatLng({ lat: this.origin.latitude, lng: this.origin.longitude });
      const latLngB = new google.maps.LatLng({ lat: this.destination.latitude, lng: this.destination.longitude });

      this.directionsDisplay.setMap(map);
      this.directionsDisplay.setOptions({
        polylineOptions: {
          strokeWeight: this.STROKE_WEIGHT,
          strokeOpacity: this.STROKE_OPACIY,
          strokeColor: this.STROKE_COLOR
        }
      });
      this.directionsDisplay.setDirections({ routes: [] });
      directionsService.route({
        origin: { placeId: this.originPlaceId },
        destination: { placeId: this.destinationPlaceId },
        travelMode: google.maps.DirectionsTravelMode.DRIVING
      }, function (response: any, status: any) {
        if (status === that.STATUS_OK) {
          that.directionsDisplay.setDirections(response);
          map.setZoom(this.ZOOM);
          const point = response.routes[0].legs[0];
          that.estimatedTime = point.duration.text;
          that.estimatedDistance = point.distance.text;
        } else {
          console.log('Directions request failed due to ' + status);
        }
      });
    });

  }

  // TODO: Use it in another task
  private getcomputeDistance(latLngA: any, latLngB: any) {
    return (google.maps.geometry.spherical.computeDistanceBetween(latLngA, latLngB) / 1000).toFixed(2);
  }
}
