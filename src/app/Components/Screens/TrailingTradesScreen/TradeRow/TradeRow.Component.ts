import {Component} from "@angular/core";
import {TradeRowData} from "./TradeRow.Data";
import {TradeRowInteractions} from "./TradeRow.Interactions";
import {TradeRowServices} from "./TradeRow.Services";

@Component({
  selector: 'app-trade-row',
  templateUrl: './TradeRow.Template.html',
  styleUrls: ['./TradeRow.Styles.scss']})
export class TradeRowComponent {
  public readonly Data: TradeRowData;
  public readonly Interactions: TradeRowInteractions;
  private readonly _services: TradeRowServices;
  constructor() {
    this.Data = new TradeRowData();
    this._services = new TradeRowServices(this.Data);
    this.Interactions = new TradeRowInteractions(this._services)
  }
}
