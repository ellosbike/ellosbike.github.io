import { Component, OnInit } from '@angular/core';
import { StationService } from './station.service';
import { Station } from '../../../model/station.model';

@Component({
  selector: 'app-list-of-stations',
  templateUrl: './list-of-stations.component.html',
  styleUrls: ['./list-of-stations.component.css']
})
export class ListOfStationsComponent implements OnInit {

  currentNumber = 0;
  stations = [];
  currentStation = new Station('','','');

  constructor(private stationService: StationService) {
    this.stations = stationService.getStations();
  }

  ngOnInit() {
    this.currentStation = this.stations[0];
  }

  changeStation(id) {
    this.currentNumber += id;
    this.currentNumber = (this.currentNumber < 0) ? 2: ((this.currentNumber > 2)? 0: this.currentNumber);

    this.currentStation = this.stations[this.currentNumber];
  }

}
