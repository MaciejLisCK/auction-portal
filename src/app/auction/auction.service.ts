import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuctionItem } from './auction-item';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuctionService {
  restUrl = `${environment.restURL}/auctions`;

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<AuctionItem[]> {
    return this.httpClient.get<AuctionItem[]>(this.restUrl);
  }

  add(auction: AuctionItem): Observable<AuctionItem> {
    return this.httpClient.post<AuctionItem>(this.restUrl, auction);
  }
}
