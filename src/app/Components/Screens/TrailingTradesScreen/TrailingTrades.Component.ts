import {Component} from "@angular/core";
import {TrailingTradesData} from "./TrailingTrades.Data";
import {TrailingTradesInteractions} from "./TrailingTrades.Interactions";
import {TrailingTradesServices} from "./TrailingTrades.Services";
@Component({
  selector: 'app-trailing-trades-screen',
  templateUrl: './TrailingTrades.Template.html',
  styleUrls: ['./TrailingTrades.Styles.scss']})
export class TrailingTradesComponent {
  public readonly Data: TrailingTradesData;
  public readonly Interactions: TrailingTradesInteractions;
  private readonly _services: TrailingTradesServices;

  constructor() {
    this.Data = new TrailingTradesData();
    this._services = new TrailingTradesServices(this.Data);
    this.Interactions = new TrailingTradesInteractions(this._services)

  }

}
