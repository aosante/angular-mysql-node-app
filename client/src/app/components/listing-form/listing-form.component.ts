import { Component, OnInit, HostBinding } from '@angular/core';
import { Listing } from 'src/app/models/Listing';
import { ListingsService } from '../../services/listings.service';
import { Router, ActivatedRoute } from '@angular/router';
/*Pasos:
2. revisar en ngOnInit si viene un id en this.activatedRoute.snapshot.params
3. Si viene, setear el objeto listing a eso, y setear edit a true
4. Crear metodo updateListing */

@Component({
  selector: 'app-listing-form',
  templateUrl: './listing-form.component.html',
  styleUrls: ['./listing-form.component.scss']
})
export class ListingFormComponent implements OnInit {
  listing: Listing = {
    id: 0,
    title: '',
    description: '',
    image: '',
    created_at: new Date()
  };

  edit: boolean = false;

  constructor(
    private listingsService: ListingsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    const { id } = this.activatedRoute.snapshot.params;
    //if an id parameter is sent, this means that the edit route was called
    if (id) {
      this.listingsService.getListing(id).subscribe(listing => {
        this.listing = listing[0];
        this.edit = true;
      });
    }
  }

  addListing() {
    //delete unneeded properties for the database
    delete this.listing.id;
    delete this.listing.created_at;
    this.listingsService.addListing(this.listing).subscribe(
      res => {
        //add sweetalert and then navigate
        this.router.navigate(['/listings']);
      },
      err => console.error(err)
    );
  }

  updateListing() {
    delete this.listing.created_at;
    this.listingsService.updateListing(this.listing.id, this.listing).subscribe(
      res => {
        //add sweetalert and then navigate
        this.router.navigate(['/listings']);
      },
      err => console.error(err)
    );
    //call delete method from service
  }
}
