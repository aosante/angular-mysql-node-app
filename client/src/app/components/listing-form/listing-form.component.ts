import { Component, OnInit, HostBinding } from '@angular/core';
import { Listing } from 'src/app/models/Listing';
import { ListingsService } from '../../services/listings.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listing-form',
  templateUrl: './listing-form.component.html',
  styleUrls: ['./listing-form.component.scss']
})

//4. Add FormsModule to app module, and bind inputs to object properties
//5. delete id and created_at properties before submitting
export class ListingFormComponent implements OnInit {
  // @HostBinding('class') classes = 'row';

  listing: Listing = {
    id: 0,
    title: '',
    description: '',
    image: '',
    created_at: new Date()
  };

  constructor(
    private listingsService: ListingsService,
    private router: Router
  ) {}

  ngOnInit() {
    console.log(this.listing);
  }

  addListing() {
    //delete unneeded properties for the database
    delete this.listing.id;
    delete this.listing.created_at;
    this.listingsService.addListing(this.listing).subscribe(
      res => {
        console.log(res);
        //add sweetalert and then navigate
        this.router.navigate(['/listings']);
      },
      err => console.error(err)
    );
  }
}
