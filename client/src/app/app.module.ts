import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AddListingComponent } from './components/add-listing/add-listing.component';
import { ListingsComponent } from './components/listings/listings.component';
import { ListingsService } from './services/listings.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AddListingComponent,
    ListingsComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [ListingsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
