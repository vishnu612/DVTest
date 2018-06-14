import { Component, Input } from '@angular/core';

import { SectorSpdrService, Holding, SectorHoldings } from '../../providers/SectorSpdrAPI';


@Component({
  selector: 'fund-holdings',
  templateUrl: 'fund-holdings.html'
})
export class FundHoldingsComponent {

  @Input() symbol : string;

  asOfDate : string;
  asOfTime : string;
  holdings : Holding[] = [];
  titleClass: string = "";

  constructor(private sectorSpdrService: SectorSpdrService) {
  }

  ngOnInit() {
    this.titleClass = this.symbol.toLowerCase();
    
    this.sectorSpdrService.getFundHoldings(this.symbol)
    .subscribe(resp => {
      this.updateFields(resp);
    });

  }


  updateFields(sectorHoldings : SectorHoldings) {

    this.asOfDate = sectorHoldings.asOfDate;
    this.asOfTime = sectorHoldings.asOfTime;
    this.holdings = sectorHoldings.items;

  }

}
