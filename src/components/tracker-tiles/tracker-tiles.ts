import { Component, Input } from '@angular/core';
import { Platform, NavController, NavParams } from 'ionic-angular';

import { SectorSpdrService, SectorTracker } from '../../providers/SectorSpdrAPI'

import { FundPropertiesPage } from '../../pages/fund-properties/fund-properties';

@Component({
  selector: 'tracker-tiles',
  templateUrl: 'tracker-tiles.html'
})
export class TrackerTilesComponent {

  @Input() updateTime: Date;
  sectorTrackers: SectorTracker[] = [];
  sAndPTracker = new SectorTracker();
  rows: number[];
  generalDisclaimer: string;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private sectorSpdrService: SectorSpdrService,
    private platform: Platform) {
  }
  ngOnInit() {	  
   this.generalDisclaimer = this.sectorSpdrService.getDisclaimerCotent('Home Page Disclosure (Mobile)');
  }
  ngOnChanges() {
    this.platform.ready().then(() => {
      this.loadSectorData();
    });
  }

  loadSectorData() {
    this.sectorSpdrService.getSectorTracker("1D")
      .subscribe(resp => {
        this.sectorTrackers = resp;

        this.rows = Array.from(Array(Math.ceil(this.sectorTrackers.length / 2)).keys())

        let index = 0;
        for (index = 0; index < this.sectorTrackers.length; index++) {
          if (this.sectorTrackers[index].symbol === null) {
            this.sectorTrackers[index].symbol = "";
            this.sAndPTracker = this.sectorTrackers[index];
            break;
          }
        }

        var sAndP = this.sectorTrackers.shift();
        this.sectorTrackers.sort(this.comparePerformance).reverse();
        this.sectorTrackers.unshift(sAndP);

      });
  }


  getSymbolParam(symbol: string) {
    let symbolParam: any = {};
    symbolParam.symbol = symbol;
    return symbolParam;
  }

  handleTrackerSelected(symbol) {
    this.navCtrl.push(FundPropertiesPage, this.getSymbolParam(symbol));
  }

  comparePerformance(a: SectorTracker, b: SectorTracker) {
    if (a.changePercent < b.changePercent)
      return -1;
    if (a.changePercent > b.changePercent)
      return 1;
    return 0;
  }

}
