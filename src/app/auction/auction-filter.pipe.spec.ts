import { AuctionFilterPipe } from './auction-filter.pipe';
import { AuctionItem } from './auction-item';

fdescribe('AuctionFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new AuctionFilterPipe();
    expect(pipe).toBeTruthy();
  });

  it('should filter my auctions', () => {
    // GIVEN (arrange)
    const pipe = new AuctionFilterPipe();
    const auctions: AuctionItem[] = [
      {title: 'Pomidor'} as AuctionItem,
      {title: 'Ogórek'} as AuctionItem,
      {title: 'Parmezan'} as AuctionItem,
    ];
    const filterWord = 'P';

    // WHEN (act)
    const resultArray = pipe.transform(auctions, filterWord);

    // THEN (assert)
    expect(resultArray).toEqual([
      {title: 'Pomidor'},
      {title: 'Parmezan'}
    ]);
  });
});
