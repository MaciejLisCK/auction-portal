import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuctionItem } from './auction-item';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuctionService {
  restUrl = 'http://localhost:3000/auctions';

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<AuctionItem[]> {
    return this.httpClient.get<AuctionItem[]>(this.restUrl);
  }
}
