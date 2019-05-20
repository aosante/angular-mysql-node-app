import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListingsComponent } from './components/listings/listings.component';
import { AddListingComponent } from './components/add-listing/add-listing.component';

const routes: Routes = [
  { path: '', redirectTo: 'listings', pathMatch: 'full' },
  { path: 'listings', component: ListingsComponent },
  { path: 'addListing', component: AddListingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
