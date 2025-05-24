import {Component} from "@angular/core";
import {TrailingTradesScreenModel} from "./TrailingTradesScreen.Model";
import {TrailingTradesScreenBehaviors} from "./TrailingTradesScreen.Behaviors";
import {TrailingTradesScreenInteractions} from "./TrailingTradesScreen.Interactions";
@Component({
  selector: 'app-trailing-trades-screen',
  templateUrl: './TrailingTradesScreen.Template.html',
  styleUrls: ['./TrailingTradesScreen.Styles.scss']})
export class TrailingTradesScreenComponent {
  public readonly Model: TrailingTradesScreenModel;
  public readonly _behaviors: TrailingTradesScreenBehaviors;
  public readonly Interactions: TrailingTradesScreenInteractions
  public constructor() {
    this.Model = new TrailingTradesScreenModel();
    this._behaviors = new TrailingTradesScreenBehaviors(this.Model);
    this.Interactions = new TrailingTradesScreenInteractions(this._behaviors);
  }

}
