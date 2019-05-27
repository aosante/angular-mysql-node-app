import { Component, OnInit, HostBinding } from '@angular/core';
import { ListingsService } from '../../services/listings.service';
import { Listing } from 'src/app/models/Listing';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.scss']
})
export class ListingsComponent implements OnInit {
  @HostBinding('class') classes = 'row';
  listings: Listing[];
  //create delete method

  constructor(private listingsService: ListingsService) {}

  ngOnInit() {
    this.listingsService.getListings().subscribe(
      listings => {
        this.listings = listings;
      },
      err => console.error(err)
    );
  }

  deleteListing(id: string) {
    //import service, and delete listing
  }
}
