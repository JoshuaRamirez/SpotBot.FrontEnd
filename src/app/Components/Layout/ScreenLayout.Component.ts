import {Component} from '@angular/core';
import {ScreenLayoutData} from "./ScreenLayout.Data";
import {ScreenLayoutInteractions} from "./ScreenLayout.Interactions";
import {ScreenLayoutBehaviors} from "./ScreenLayout.Behaviors";

@Component({
  selector: 'app-screen-layout',
  templateUrl: './ScreenLayout.Template.html',
  styleUrls: ['./ScreenLayout.Styles.scss']
})
export class ScreenLayoutComponent {
  public readonly Data: ScreenLayoutData;
  public readonly Handler: ScreenLayoutInteractions;
  private readonly _behaviors: ScreenLayoutBehaviors;
  constructor() {
    this.Data = new ScreenLayoutData();
    this._behaviors = new ScreenLayoutBehaviors(this.Data);
    this.Handler = new ScreenLayoutInteractions(this._behaviors);
  }
}
