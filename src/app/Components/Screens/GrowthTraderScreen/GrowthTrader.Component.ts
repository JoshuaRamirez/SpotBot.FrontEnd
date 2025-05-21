import { Component } from '@angular/core';
import { GrowthTraderModel } from './GrowthTrader.Model';
import { GrowthTraderBehaviors } from './GrowthTrader.Behaviors';
import { GrowthTraderInteractions } from './GrowthTrader.Interactions';

@Component({
  selector: 'app-growth-trader-screen',
  templateUrl: './GrowthTrader.Template.html',
  styleUrls: ['./GrowthTrader.Styles.scss']
})
export class GrowthTraderComponent {
  public readonly Model: GrowthTraderModel;
  private readonly _behaviors: GrowthTraderBehaviors;
  public readonly Interactions: GrowthTraderInteractions;

  constructor() {
    this.Model = new GrowthTraderModel();
    this._behaviors = new GrowthTraderBehaviors(this.Model);
    this.Interactions = new GrowthTraderInteractions(this._behaviors);
  }
}
