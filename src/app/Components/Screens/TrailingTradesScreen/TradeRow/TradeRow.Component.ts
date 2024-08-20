import {Component, Input} from "@angular/core";
import {TradeRowModel} from "./TradeRow.Model";
import {TradeRowInteractions} from "./TradeRow.Interactions";
import {TradeRowBehaviors} from "./TradeRow.Behaviors";
import {Order} from "../../../../Domain/Order";

@Component({
  selector: 'app-trade-row',
  templateUrl: './TradeRow.Template.html',
  styleUrls: ['./TradeRow.Styles.scss']})
export class TradeRowComponent {
  public readonly Data: TradeRowModel;
  public readonly Interactions: TradeRowInteractions;
  private readonly _behaviors: TradeRowBehaviors;

  @Input() public set Order(value: Order) {
    this.Data.Order = value;
  }
  public constructor() {
    this.Data = new TradeRowModel();
    this._behaviors = new TradeRowBehaviors(this.Data);
    this.Interactions = new TradeRowInteractions(this._behaviors)
  }
}
