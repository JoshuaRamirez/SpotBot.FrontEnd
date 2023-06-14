import {Component, OnInit} from '@angular/core';
import {ExchangeScreenEvents} from "./ExchangeScreen.Events";
import {ExchangeScreenData} from "./ExchangeScreen.Data";
import {ExchangeScreenApi} from "./ExchangeScreen.Api";
import {ExchangeScreenService} from "./ExchangeScreen.Service";


@Component({
  selector: 'app-exchange-screen',
  templateUrl: './ExchangeScreen.Template.html',
  styleUrls: ['./ExchangeScreen.Styles.scss']
})
export class ExchangeScreenComponent implements OnInit {
  public readonly Data: ExchangeScreenData;
  public readonly Events: ExchangeScreenEvents;
  private readonly _api: ExchangeScreenApi;
  private readonly _service: ExchangeScreenService;
  constructor() {
    this.Data = new ExchangeScreenData();
    this._service = new ExchangeScreenService(this.Data)
    this._api = new ExchangeScreenApi(this._service);
    this.Events = new ExchangeScreenEvents(this._service, this._api);
  }
  onSubmit(): void {
    this._api.Save();
  }
  ngOnInit(): void {
    this._api.Load();
  }


}
