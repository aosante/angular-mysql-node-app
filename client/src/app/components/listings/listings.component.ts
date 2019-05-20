import { Component, OnInit } from '@angular/core';
import { ListingsService } from '../../services/listings.service';
import { Listing } from 'src/app/models/Listing';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.scss']
})
export class ListingsComponent implements OnInit {
  listings: Listing[];

  constructor(private listingsService: ListingsService) {}

  ngOnInit() {
    this.listingsService.getListings().subscribe(
      listings => {
        this.listings = listings;
      },
      err => console.error(err)
    );
  }
}
