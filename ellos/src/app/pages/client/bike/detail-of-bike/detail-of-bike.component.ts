import { BikeClient } from './../../../../model/bike-client.model';
import { BikeService } from './../bike.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-of-bike',
  templateUrl: './detail-of-bike.component.html',
  styleUrls: ['./detail-of-bike.component.css']
})
export class DetailOfBikeComponent implements OnInit {

  bike = new BikeClient('','','','','','');
  relativeUrl = '../../../../../assets/images/bikes/';

  constructor(private route: ActivatedRoute, 
    private bikeService: BikeService) { 
    // this.bike = bikeService.getBike('');
  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.bike = this.bikeService.getBike(id, this.relativeUrl);
  }

}
