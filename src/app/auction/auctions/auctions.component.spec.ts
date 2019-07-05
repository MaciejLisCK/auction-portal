import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {HttpClientTestingModule} from '@angular/common/http/testing';

import { AuctionsComponent } from './auctions.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AuctionFilterPipe } from '../auction-filter.pipe';
import { AuctionService } from '../auction.service';
import { Observable, of } from 'rxjs';
import { AuctionItem } from '../auction-item';


fdescribe('AuctionsComponent', () => {
  let component: AuctionsComponent;
  let fixture: ComponentFixture<AuctionsComponent>;

  class AuctionServiceStub {
    getAll(): Observable<AuctionItem[]> {
      return of([]);
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuctionsComponent, AuctionFilterPipe ],
      providers: [
        {provide: AuctionService, useClass: AuctionServiceStub}
      ],
      imports: [
        // HttpClientTestingModule
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
