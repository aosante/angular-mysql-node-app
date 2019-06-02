import { Component, OnInit, HostBinding } from '@angular/core';
import { ListingsService } from '../../services/listings.service';
import { Listing } from 'src/app/models/Listing';
import swal from 'sweetalert';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.scss']
})
export class ListingsComponent implements OnInit {
  @HostBinding('class') classes = 'row';
  listings: Listing[];

  constructor(private listingsService: ListingsService) {}

  ngOnInit() {
    this.getListings();
  }

  getListings() {
    this.listingsService.getListings().subscribe(
      listings => {
        this.listings = listings;
      },
      err => console.error(err)
    );
  }

  deleteListing(id: string) {
    //add sweetalert confirmation to proceed, and sweetalert confirm delition
    swal({
      title: 'Are you sure?',
      text: 'The listing will be permanently deleted',
      icon: 'warning',
      buttons: {
        cancel: true,
        confirm: true
      },
      dangerMode: true
    }).then(willDelete => {
      if (willDelete) {
        this.listingsService.deleteListing(id).subscribe(
          res => {
            //render a success alert
            this.getListings();
          },
          err => console.error(err)
        );
      }
    });
  }
}
