import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ExchangeScreenInteractions} from "./ExchangeScreen.Interactions";
import {ExchangeScreenData} from "./ExchangeScreen.Data";
import {ExchangeScreenApi} from "./ExchangeScreen.Api";
import {ExchangeScreenBehaviors} from "./ExchangeScreen.Behaviors";
import {IComponent} from "../../../Core/IComponent";


@Component({
  selector: 'app-exchange-screen',
  templateUrl: './ExchangeScreen.Template.html',
  styleUrls: ['./ExchangeScreen.Styles.scss']
})
export class ExchangeScreenComponent implements OnInit, IComponent {
  public readonly Data: ExchangeScreenData;
  public readonly Interactions: ExchangeScreenInteractions;
  private readonly _api: ExchangeScreenApi;
  private readonly _behaviors: ExchangeScreenBehaviors;
  private readonly _changeDetectorRef: ChangeDetectorRef;
  constructor(changeDetectorRef: ChangeDetectorRef) {
    this._changeDetectorRef = changeDetectorRef;
    this.Data = new ExchangeScreenData();
    this._behaviors = new ExchangeScreenBehaviors(this.Data, this)
    this._api = new ExchangeScreenApi(this._behaviors);
    this.Interactions = new ExchangeScreenInteractions(this._behaviors, this._api);
  }

  ngOnInit(): void {
    this._api.Load();
  }

  DetectChanges(): void {
    this._changeDetectorRef.detectChanges();
  }


}
