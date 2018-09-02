import { Directive, NgZone, Input, ElementRef } from '@angular/core';

import { MapsAPILoader, GoogleMapsAPIWrapper } from '@agm/core';

import { DirectionsMapDirective } from './directions-map.directive';

declare var google: any;

@Directive({
  selector: '[appAutocompleteMap]'
})

// This directive is just for tests, it's not part of final scope
export class AutocompleteMapDirective {

  ZOOM = 15;
  MODE_ORG = 'ORG';
  MODE_DES = 'DES';
  TYPE_ADRESS = 'address';
  PLACE_CHANGED = 'place_changed';

  @Input() origin: any;
  @Input() destination: any;
  @Input() directionsMapDirective: DirectionsMapDirective;
  @Input() zoom: any;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) { }

  loadAutoComplete() {
    // load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      const autocompleteInput = new google.maps.places.Autocomplete(this.origin.nativeElement, {
        types: [this.TYPE_ADRESS]
      });

      const autocompleteOutput = new google.maps.places.Autocomplete(this.destination.nativeElement, {
        types: [this.TYPE_ADRESS]
      });

      this.setupPlaceChangedListener(autocompleteInput, this.MODE_ORG);
      this.setupPlaceChangedListener(autocompleteOutput, this.MODE_DES);
    });
  }

  private setupPlaceChangedListener(autocomplete: any, mode: any) {
    autocomplete.addListener(this.PLACE_CHANGED, () => {
      this.ngZone.run(() => {
        // get the place result
        const place = autocomplete.getPlace();
        // verify result
        if (place.geometry === undefined) {
          return;
        }
        if (mode === this.MODE_ORG) {
          this.directionsMapDirective.origin = { longitude: place.geometry.location.lng(), latitude: place.geometry.location.lat() };
          this.directionsMapDirective.originPlaceId = place.place_id;
        } else {
          this.directionsMapDirective.destination = { longitude: place.geometry.location.lng(), latitude: place.geometry.location.lat() };
          this.directionsMapDirective.destinationPlaceId = place.place_id;
        }

        if (this.directionsMapDirective.directionsDisplay === undefined) {
          this.mapsAPILoader.load().then(() => {
            this.directionsMapDirective.directionsDisplay = new google.maps.DirectionsRenderer;
          });
        }

        // Update the directions
        this.directionsMapDirective.updateDirections();
        this.zoom = this.ZOOM;
      });
    });

  }

}
