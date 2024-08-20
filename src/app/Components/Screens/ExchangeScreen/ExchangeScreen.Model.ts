import { Exchange } from "src/app/Domain/Exchange";

export class ExchangeScreenModel {
  constructor() {
    this.Id = "";
    this.Tested = false;
    this.TestResult = false;
    this.TestErrorResult = "";
    this.Exchange = new Exchange();
  }
  public Id: string;
  public Tested: boolean;
  public TestResult: boolean;
  public TestErrorResult: string;
  public Exchange: Exchange;
}

