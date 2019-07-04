import { Pipe, PipeTransform } from '@angular/core';
import { AuctionItem } from './auction-item';

@Pipe({
  name: 'auctionFilter'
})
export class AuctionFilterPipe implements PipeTransform {

  transform(auctions: AuctionItem[], filterText: string): any {
    return auctions.filter((a) => a.title.toLocaleLowerCase().startsWith(filterText.toLocaleLowerCase()));
  }

}
