import {Component} from '@angular/core';
import {ScreenLayoutModel} from "./ScreenLayout.Model";
import {ScreenLayoutInteractions} from "./ScreenLayout.Interactions";
import {ScreenLayoutBehaviors} from "./ScreenLayout.Behaviors";

@Component({
  selector: 'app-screen-layout',
  templateUrl: './ScreenLayout.Template.html',
  styleUrls: ['./ScreenLayout.Styles.scss']
})
export class ScreenLayoutComponent {
  public readonly Model: ScreenLayoutModel;
  public readonly Handler: ScreenLayoutInteractions;
  private readonly _behaviors: ScreenLayoutBehaviors;
  constructor() {
    this.Model = new ScreenLayoutModel();
    this._behaviors = new ScreenLayoutBehaviors(this.Model);
    this.Handler = new ScreenLayoutInteractions(this._behaviors);
  }
}
