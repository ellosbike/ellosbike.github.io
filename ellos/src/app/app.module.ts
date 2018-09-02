import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';

import { environment } from './../environments/environment';

import { AppComponent } from './app.component';
import { routingComponents, AppRoutingModule } from './app.routing';
import { AutocompleteMapDirective } from './directives/auto-complete-map.directive';
import { DirectionsMapDirective } from './directives/directions-map.directive';
import { FooterComponent } from './layout/footer/footer.component';
import { MenuComponent } from './layout/menu/menu.component';
import { BikeService } from './pages/client/bike/bike.service';
import { StationService } from './pages/client/list-of-stations/station.service';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    DirectionsMapDirective,
    AutocompleteMapDirective,
    FooterComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: environment.map_key,
      libraries: ['places']
    }),
  ],
  providers: [
    GoogleMapsAPIWrapper,
    BikeService,
    StationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
