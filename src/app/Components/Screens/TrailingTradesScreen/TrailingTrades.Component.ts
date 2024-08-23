import {Component} from "@angular/core";
import {TrailingTradesModel} from "./TrailingTrades.Model";
import {TrailingTradesBehaviors} from "./TrailingTrades.Behaviors";
import {TrailingTradesInteractions} from "./TrailingTrades.Interactions";
@Component({
  selector: 'app-trailing-trades-screen',
  templateUrl: './TrailingTrades.Template.html',
  styleUrls: ['./TrailingTrades.Styles.scss']})
export class TrailingTradesComponent {
  public readonly Model: TrailingTradesModel;
  public readonly _behaviors: TrailingTradesBehaviors;
  public readonly Interactions: TrailingTradesInteractions
  public constructor() {
    this.Model = new TrailingTradesModel();
    this._behaviors = new TrailingTradesBehaviors(this.Model);
    this.Interactions = new TrailingTradesInteractions(this._behaviors);
  }

}
