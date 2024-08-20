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
  public readonly Data: ScreenLayoutModel;
  public readonly Handler: ScreenLayoutInteractions;
  private readonly _behaviors: ScreenLayoutBehaviors;
  constructor() {
    this.Data = new ScreenLayoutModel();
    this._behaviors = new ScreenLayoutBehaviors(this.Data);
    this.Handler = new ScreenLayoutInteractions(this._behaviors);
  }
}
