import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ExchangeScreenInteractions} from "./ExchangeScreen.Interactions";
import {ExchangeScreenModel} from "./ExchangeScreen.Model";
import {ExchangeScreenApi} from "./ExchangeScreen.Api";
import {ExchangeScreenBehaviors} from "./ExchangeScreen.Behaviors";
import {IComponent} from "../../../Core/IComponent";


@Component({
  selector: 'app-exchange-screen',
  templateUrl: './ExchangeScreen.Template.html',
  styleUrls: ['./ExchangeScreen.Styles.scss']
})
export class ExchangeScreenComponent implements OnInit, IComponent {

  public readonly Model: ExchangeScreenModel;
  public readonly Interactions: ExchangeScreenInteractions;
  private readonly _api: ExchangeScreenApi;
  private readonly _behaviors: ExchangeScreenBehaviors;
  private readonly _changeDetectorRef: ChangeDetectorRef;

  constructor(changeDetectorRef: ChangeDetectorRef) {
    this._changeDetectorRef = changeDetectorRef;
    this.Model = new ExchangeScreenModel();
    this._api = new ExchangeScreenApi();
    this._behaviors = new ExchangeScreenBehaviors(this.Model, this._api, this)
    this.Interactions = new ExchangeScreenInteractions(this._behaviors);
  }

  public async ngOnInit(): Promise<void> {
    await this._behaviors.Load();
  }

  public MarkForCheck(): void {
    this._changeDetectorRef.markForCheck();
  }


}
