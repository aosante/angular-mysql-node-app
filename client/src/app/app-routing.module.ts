import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListingsComponent } from './components/listings/listings.component';
import { ListingFormComponent } from './components/listing-form/listing-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'listings', pathMatch: 'full' },
  { path: 'listings', component: ListingsComponent },
  { path: 'addListing', component: ListingFormComponent },
  { path: 'editListing/:id', component: ListingFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
