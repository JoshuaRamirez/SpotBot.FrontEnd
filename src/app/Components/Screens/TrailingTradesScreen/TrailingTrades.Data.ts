import {TrailingTradesValidations} from "./TrailingTrades.Validations";

export class TrailingTradesData {
  constructor() {
        this.PositionSize = '';
        this.EntryPrice = '';
        this.StopLossLevel = '';
        this.TakeProfitLevel = '';
        this.TradeType = '';
        this.Validations = new TrailingTradesValidations(this);
    }
  public PositionSize: string
  public EntryPrice: string
  public StopLossLevel: string
  public TakeProfitLevel: string
  public TradeType: string
  public Validations: TrailingTradesValidations;


}
