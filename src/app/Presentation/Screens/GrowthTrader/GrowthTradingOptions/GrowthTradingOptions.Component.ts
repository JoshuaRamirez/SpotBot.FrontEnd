import {Component} from "@angular/core";
import {GrowthTradingOptionsModel} from "./GrowthTradingOptions.Model";
import {GrowthTradingOptionsBehaviors} from "./GrowthTradingOptions.Behaviors";
import {GrowthTradingOptionsInteractions} from "./GrowthTradingOptions.Interactions";

@Component({
  selector: 'app-growth-trading-options',
  templateUrl: './GrowthTradingOptions.Template.html',
  styleUrls: ['./GrowthTradingOptions.Styles.scss']
})
export class GrowthTradingOptionsComponent {
  public readonly Model: GrowthTradingOptionsModel;
  public readonly Interactions: GrowthTradingOptionsInteractions;
  private readonly _behaviors: GrowthTradingOptionsBehaviors;
  constructor() {
    this.Model = new GrowthTradingOptionsModel();
    this._behaviors = new GrowthTradingOptionsBehaviors(this.Model);
    this.Interactions = new GrowthTradingOptionsInteractions(this._behaviors);
  }
}
