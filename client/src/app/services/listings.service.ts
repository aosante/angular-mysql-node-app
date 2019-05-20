import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Listing } from '../models/Listing';

@Injectable({
  providedIn: 'root'
})
export class ListingsService {
  listingUrl: string = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getListings(): Observable<Listing[]> {
    return this.http.get<Listing[]>(`${this.listingUrl}/listing`);
  }

  getListing(id: string): Observable<Listing[]> {
    return this.http.get<Listing[]>(`${this.listingUrl}/listing/${id}`);
  }

  addListing(listing: Listing): Observable<Listing> {
    return this.http.post<Listing>(`${this.listingUrl}/listing`, listing);
  }

  updateListing(id: string, updatedListing: Listing): Observable<Listing> {
    return this.http.put<Listing>(
      `${this.listingUrl}/listing/${id}`,
      updatedListing
    );
  }

  deleteListing(id: string): Observable<Listing> {
    return this.http.delete<Listing>(`${this.listingUrl}/listing/${id}`);
  }
}
