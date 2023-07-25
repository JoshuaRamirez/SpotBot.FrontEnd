import {Component} from "@angular/core";
import {TrailingTradesData} from "./TrailingTrades.Data";
import {TrailingTradesBehaviors} from "./TrailingTrades.Behaviors";
import {TrailingTradesInteractions} from "./TrailingTrades.Interactions";
@Component({
  selector: 'app-trailing-trades-screen',
  templateUrl: './TrailingTrades.Template.html',
  styleUrls: ['./TrailingTrades.Styles.scss']})
export class TrailingTradesComponent {
  public readonly Data: TrailingTradesData;
  public readonly _behaviors: TrailingTradesBehaviors;
  public readonly Interactions: TrailingTradesInteractions
  public constructor() {
    this.Data = new TrailingTradesData();
    this._behaviors = new TrailingTradesBehaviors(this.Data);
    this.Interactions = new TrailingTradesInteractions(this._behaviors);
  }

}
