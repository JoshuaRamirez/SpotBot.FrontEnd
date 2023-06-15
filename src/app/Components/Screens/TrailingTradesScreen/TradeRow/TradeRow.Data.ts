import {TradeRowValidations} from "./TradeRow.Validations";

export class TradeRowData {
  constructor() {
    this.PositionSize = '';
    this.EntryPrice = '';
    this.StopLossLevel = '';
    this.TakeProfitLevel = '';
    this.TradeType = '';
    this.Validations = new TradeRowValidations(this);
  }
  public PositionSize: string
  public EntryPrice: string
  public StopLossLevel: string
  public TakeProfitLevel: string
  public TradeType: string
  public Validations: TradeRowValidations;
}
