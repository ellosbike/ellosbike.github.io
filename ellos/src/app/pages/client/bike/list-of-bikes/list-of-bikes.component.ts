import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { BikeService } from './../bike.service';

@Component({
  selector: 'app-list-of-bikes',
  templateUrl: './list-of-bikes.component.html',
  styleUrls: ['./list-of-bikes.component.css']
})
export class ListOfBikesComponent implements OnInit {

  bikes = [];
  relativeUrl = '../../../../../assets/images/bikes/';

  constructor(private router: Router, private bikeService: BikeService) { 
    this.bikes = this.bikeService.getBikes(this.relativeUrl);
  }

  ngOnInit() {
  }

  goToDetail(bike) {
    let bikeId = bike ? bike.id : null;
    this.router.navigate(['/bicicleta', bikeId]);
  }

}
