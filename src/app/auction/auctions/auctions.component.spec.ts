import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {HttpClientTestingModule} from '@angular/common/http/testing';

import { AuctionsComponent } from './auctions.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AuctionFilterPipe } from '../auction-filter.pipe';

fdescribe('AuctionsComponent', () => {
  let component: AuctionsComponent;
  let fixture: ComponentFixture<AuctionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuctionsComponent, AuctionFilterPipe ],
      imports: [
        HttpClientTestingModule
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
