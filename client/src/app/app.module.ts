import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ListingsComponent } from './components/listings/listings.component';
import { ListingsService } from './services/listings.service';
import { ListingFormComponent } from './components/listing-form/listing-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ListingsComponent,
    ListingFormComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [ListingsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
