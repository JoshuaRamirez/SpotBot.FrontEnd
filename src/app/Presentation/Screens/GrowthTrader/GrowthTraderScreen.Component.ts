import { Component } from '@angular/core';
import { GrowthTraderScreenModel } from './GrowthTraderScreen.Model';
import { GrowthTraderScreenBehaviors } from './GrowthTraderScreen.Behaviors';
import { GrowthTraderScreenInteractions } from './GrowthTraderScreen.Interactions';

@Component({
  selector: 'app-growth-trader-screen',
  templateUrl: './GrowthTraderScreen.Template.html',
  styleUrls: ['./GrowthTraderScreen.Styles.scss']
})
export class GrowthTraderScreenComponent {
  public readonly Model: GrowthTraderScreenModel;
  private readonly _behaviors: GrowthTraderScreenBehaviors;
  public readonly Interactions: GrowthTraderScreenInteractions;

  constructor() {
    this.Model = new GrowthTraderScreenModel();
    this._behaviors = new GrowthTraderScreenBehaviors(this.Model);
    this.Interactions = new GrowthTraderScreenInteractions(this._behaviors);
  }
}
